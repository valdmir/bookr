package com.bivala.bookr;

import jakarta.persistence.Entity;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.bivala.bookr.dao")
@EntityScan(basePackages = "com.bivala.bookr.entity")
public class BookrApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookrApplication.class, args);
	}

}
