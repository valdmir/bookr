package com.bivala.bookr.dto;

import java.time.LocalDate;
import java.util.UUID;

public class BookSoftCopyDTO {
    public UUID bookID;
    public String title;
    public String author;
    public String language;
    public String[] tags;
    public int pages;
    public String coverUrl;
    public String locationUrl;
    public LocalDate publishedDate;
    public String format;
}
