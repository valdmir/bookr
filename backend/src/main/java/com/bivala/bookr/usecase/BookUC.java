package com.bivala.bookr.usecase;

import com.bivala.bookr.dao.BookDAO;
import com.bivala.bookr.entity.Book;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Pageable;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class BookUC {
    private BookDAO bookDAO;
    @Autowired
    public BookUC(BookDAO bookDAO){
        this.bookDAO=bookDAO;
    }
    public Page<Book> findAll(){
        int pageNumber=0;
        int pageSize=10;
        Pageable paging= PageRequest.of(pageNumber,pageSize);
        return bookDAO.findAll(paging);
    }
    public Optional<Book> findByTitleOrAuthor(String title, String author){ return bookDAO.findByTitleOrAuthor(title,author);};
    public Optional<Book> findByID(UUID id){
        return bookDAO.findById(id);
    }
    @Transactional
    public Book save(Book book){
        return bookDAO.save(book);
    }
    @Transactional
    public void delete(UUID id){
        bookDAO.deleteById(id);
    }
}
