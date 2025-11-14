package com.bivala.bookr.usecase;

import io.minio.BucketExistsArgs;
import io.minio.MakeBucketArgs;
import io.minio.MinioClient;
import io.minio.PutObjectArgs;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.time.Instant;
import java.util.Objects;
import java.util.UUID;

@Service
public class MinioUC {
    private MinioClient minioClient;
    @Value("${minio.bucket-name}")
    private String bucketName;

    // Constructor injection
    public MinioUC(MinioClient minioClient,
                        @Value("${minio.bucket-name}") String bucketName) {
        this.minioClient = minioClient;
        this.bucketName = bucketName;
    }
    public String uploadFile(MultipartFile file) throws Exception {
        // Ensure bucket exists
        boolean found = minioClient.bucketExists(BucketExistsArgs.builder().bucket(bucketName).build());
        if (!found) {
            minioClient.makeBucket(MakeBucketArgs.builder().bucket(bucketName).build());
        }
        String ext = "";
        String originalName="";
        int dotIndex = Objects.requireNonNull(file.getOriginalFilename()).lastIndexOf('.');
        if (dotIndex > 0) {
            originalName= file.getOriginalFilename().substring(0,dotIndex);
            ext = file.getOriginalFilename().substring(dotIndex);
        }

        String base36Time = Long.toString(System.currentTimeMillis(), 36);
//        String randomPart = UUID.randomUUID().toString().substring(0, 8);
        String newName=originalName+"-"+base36Time+ext;
        // Upload the file
        minioClient.putObject(
                PutObjectArgs.builder()
                        .bucket(bucketName)
                        .object(newName)
                        .stream(file.getInputStream(), file.getSize(), -1)
                        .contentType(file.getContentType())
                        .build());
        return newName;
    }
    public String uploadFileAndGenerateThumbnail(MultipartFile file) throws Exception {
        byte[] fileBytes = file.getBytes();
        String originalFilename = file.getOriginalFilename();
        String contentType = file.getContentType();

        // 2. Ensure bucket exists
        ensureBucketExists();

        // 3. Upload the ORIGINAL file
//        uploadToMinio(new ByteArrayInputStream(fileBytes), originalFilename, contentType, file.getSize());

        // 4. Generate and Upload the THUMBNAIL
        InputStream thumbnailStream = null;
        String thumbnailFilename = null;
        String thumbnailContentType = "image/png"; // Default to PNG

        if ("application/pdf".equals(contentType)) {
            System.out.println("Generating PDF thumbnail...");
            thumbnailStream = CoverBookService.generatePdfThumbnail(fileBytes);
            assert originalFilename != null;
            thumbnailFilename = getThumbnailFilename(originalFilename, "png");

        } else if ("application/epub+zip".equals(contentType)) {
//            System.out.println("Generating EPUB thumbnail...");
//            thumbnailStream = thumbnailService.generateEpubThumbnail(new ByteArrayInputStream(fileBytes));
//            // EPUB cover might be JPEG or PNG
//            thumbnailFilename = getThumbnailFilename(originalFilename, "png"); // We can force PNG or try to detect
//            thumbnailContentType = "image/png"; // Forcing PNG from PDFBox, EPUB might vary
        }


        // 5. If a thumbnail was created, upload it
        if (thumbnailStream != null) {
            uploadToMinio(thumbnailStream, thumbnailFilename, thumbnailContentType, -1);
            thumbnailStream.close();
            System.out.println("Thumbnail uploaded: " + thumbnailFilename);
        }
        return thumbnailFilename;
    }
    /**
     * Helper method to upload a stream to Minio
     */
    private void uploadToMinio(InputStream stream, String filename, String contentType, long size) throws Exception {
        minioClient.putObject(
                PutObjectArgs.builder()
                        .bucket(bucketName)
                        .object(filename)
                        .stream(stream, size, 10 * 1024 * 1024) // size -1 tells Minio to buffer
                        .contentType(contentType)
                        .build()
        );
        System.out.println("File uploaded to Minio: " + filename);
    }

    /**
     * Helper to create a thumbnail name, e.g., "mybook.pdf" -> "mybook_thumb.png"
     */
    private String getThumbnailFilename(String originalFilename, String extension) {
        String base36Time = Long.toString(System.currentTimeMillis(), 36);
        int dotIndex = originalFilename.lastIndexOf('.');
        if (dotIndex > 0) {
            return originalFilename.substring(0, dotIndex)+"-"+base36Time + "_thumb." + extension;
        }
        return originalFilename+"-"+base36Time + "_thumb." + extension;
    }

    /**
     * Helper to check if bucket exists and create it
     */
    private void ensureBucketExists() throws Exception {
        boolean bucketExists = minioClient.bucketExists(
                BucketExistsArgs.builder().bucket(bucketName).build()
        );
        if (!bucketExists) {
            minioClient.makeBucket(
                    MakeBucketArgs.builder().bucket(bucketName).build()
            );
            System.out.println("Bucket '" + bucketName + "' created.");
        }
    }
}
