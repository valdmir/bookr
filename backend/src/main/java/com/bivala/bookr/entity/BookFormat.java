package com.bivala.bookr.entity;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.UUID;

@Entity
@Table(name="book_format")
@Getter
@Setter
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class BookFormat {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;
    @Column(name="book_id")
    private UUID bookID;
    @Column(name="owned_by_user_id")
    private String ownedBy;
    @Column(name="isbn")
    private String ISBN;
    @Column(name="pages")
    private int pages;
    @Column(name="cover_url")
    private String cover_url;
    @Column(name="stored_at")
    private LocalDateTime storedAt;
    @Column(name="format")
    private String format;
    @Column(name="location_url")
    private String locationURL;
    @Column(name="published_date")
    private LocalDate publishedDate;
    @Column(name="is_available")
    private Boolean isAvailable;
    public BookFormat(){}
    public BookFormat(String ownedBy
            ,String ISBN,int pages, String cover_url
            ,LocalDateTime storedAt,String format
            ,String locationUrl,LocalDate publishedDate,boolean isAvailable){
        this.ownedBy=ownedBy;
        this.ISBN=ISBN;
        this.pages=pages;
        this.cover_url=cover_url;
        this.storedAt=storedAt;
        this.format=format;
        this.locationURL=locationUrl;
        this.publishedDate=publishedDate;
        this.isAvailable=isAvailable;
    }
    @Override
    public String toString(){
        return "Book Format{" +
                "id=" + id +
                ", bookID='" + bookID + '\'' +
                ", format='" + format + '\'' +
                '}';
    }
}
