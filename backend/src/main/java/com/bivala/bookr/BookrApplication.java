package com.bivala.bookr;

import jakarta.annotation.PostConstruct;
import jakarta.persistence.Entity;
import jakarta.servlet.MultipartConfigElement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.ApplicationContext;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Component;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.bivala.bookr.dao")
@EntityScan(basePackages = "com.bivala.bookr.entity")
public class BookrApplication {

    @Autowired
    private ApplicationContext context;

	public static void main(String[] args) {
		SpringApplication.run(BookrApplication.class, args);
	}
    @PostConstruct
    public void checkMultipartConfig() {
        MultipartConfigElement config = context.getBean(MultipartConfigElement.class);
        System.out.println("Multipart max file size = " + config.getMaxFileSize());
        System.out.println("Multipart max request size = " + config.getMaxRequestSize());
    }
    @Component
    public class PropertyCheck implements CommandLineRunner {

        @Value("${spring.servlet.multipart.max-file-size:NOT_FOUND}")
        private String maxFileSize;

        @Value("${spring.servlet.multipart.max-request-size:NOT_FOUND}")
        private String maxRequestSize;

        @Override
        public void run(String... args) {
            System.out.println("✅ Loaded spring.servlet.multipart.max-file-size = " + maxFileSize);
            System.out.println("✅ Loaded spring.servlet.multipart.max-request-size = " + maxRequestSize);
        }
    }

}
