package com.bivala.bookr.usecase;

import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.rendering.PDFRenderer;
import org.springframework.stereotype.Service;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;

@Service
public class CoverBookService
{
    /**
     * Creates a PNG thumbnail from the first page of a PDF.
     * @param pdfBytes byte[] of the PDF file.
     * @return InputStream of the PNG thumbnail.
     */
    public static InputStream generatePdfThumbnail(byte[] pdfBytes) {
        try (PDDocument document = Loader.loadPDF(pdfBytes)) {
            PDFRenderer pdfRenderer = new PDFRenderer(document);

            // Render the first page (page index 0)
            // DPI (Dots Per Inch) controls the quality. 72 is low, 300 is high.
            BufferedImage bim = pdfRenderer.renderImageWithDPI(0, 150);

            // Write the image to a byte array
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            ImageIO.write(bim, "png", baos);

            return new ByteArrayInputStream(baos.toByteArray());
        } catch (Exception e) {
            System.err.println("Error generating PDF thumbnail: " + e.getMessage());
            return null; // Return null if it fails
        }
    }


}
