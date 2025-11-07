package com.bivala.bookr.dao;

import com.bivala.bookr.entity.BookFormat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface BookFormatDAO extends JpaRepository<BookFormat,Long> {
    List<BookFormat> findAllByBookID(UUID bookID);
    Optional<BookFormat> findByBookIDOrFormat(UUID bookID, String format);
}
