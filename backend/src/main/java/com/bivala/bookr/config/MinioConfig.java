package com.bivala.bookr.config;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import io.minio.MinioClient;
@Configuration
public class MinioConfig {

    @Value("${minio.url}")
    private String minioUrl;

    @Value("${minio.access-key}")
    private String accessKey;

    @Value("${minio.secret-key}")
    private String secretKey;
    @PostConstruct
    public void logConfig() {
        System.out.println("--- Minio Configuration Loaded ---");
        System.out.println("Minio URL: " + minioUrl);

        // Safe check: Log if the key exists, but NOT the key itself.
        System.out.println("Access Key Loaded: " + (accessKey != null && !accessKey.isEmpty())+accessKey);
        System.out.println("Secret Key Loaded: " + (secretKey != null && !secretKey.isEmpty())+secretKey);
        System.out.println("------------------------------------");
    }
    @Bean
    public MinioClient minioClient() {
        return MinioClient.builder()
                .endpoint(minioUrl)
                .credentials(accessKey, secretKey)
                .build();
    }
}