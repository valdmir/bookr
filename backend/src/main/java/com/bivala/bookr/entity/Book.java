package com.bivala.bookr.entity;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;

import java.math.BigInteger;
import java.time.LocalDate;
import java.util.Date;
import java.util.UUID;

import static jakarta.persistence.GenerationType.TABLE;

@Entity
@Table(name="book")
@Setter
@Getter
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class Book {
    @Id
    @UuidGenerator(style = UuidGenerator.Style.TIME)
    @Column(name="id")
    private UUID id;
    @Column(name="title")
    private String title;
    @Column(name="author")
    private String author;
    @Column(name="language")
    private String language;
    @Column(name="tags")
    private String[] tags;
    public Book(){

    }
    public Book(UUID bookId, String title, String author, String language, String[] tags) {
        this.id= bookId;
        this.title = title;
        this.author = author;
        this.language = language;
        this.tags = tags;
    }
    public Book( String title, String author, String language, String[] tags) {
        this.title = title;
        this.author = author;
        this.language = language;
        this.tags = tags;
    }
    @Override
    public String toString(){
        return "Book{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", author='" + author + '\'' +
                '}';
    }
}
