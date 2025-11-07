package com.bivala.bookr.dao;

import com.bivala.bookr.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface BookDAO extends JpaRepository<Book, UUID> {
    Optional<Book> findByTitleOrAuthor(String title,String author);

}
