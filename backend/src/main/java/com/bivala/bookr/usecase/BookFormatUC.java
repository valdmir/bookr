package com.bivala.bookr.usecase;

import com.bivala.bookr.dao.BookFormatDAO;
import com.bivala.bookr.entity.Book;
import com.bivala.bookr.entity.BookFormat;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class BookFormatUC {
    private BookFormatDAO bookFormatDAO;
    @Autowired
    public BookFormatUC(BookFormatDAO bookFormatDAO){
        this.bookFormatDAO=bookFormatDAO;
    }

    public Optional<BookFormat> findByID(Long id){
        return bookFormatDAO.findById(id);
    }

    public List<BookFormat> findAll(){
        return bookFormatDAO.findAll();
    }
    public List<BookFormat> findByBookID(UUID id){return bookFormatDAO.findAllByBookID(id);}
    public Optional<BookFormat> findByBookIDWithFormat(UUID bookID,String format){
        return bookFormatDAO.findByBookIDOrFormat(bookID,format);
    }
    @Transactional
    public BookFormat save(BookFormat bookFormat){
        return bookFormatDAO.save(bookFormat);
    }
    @Transactional
    public void delete(Long id){
        bookFormatDAO.deleteById(id);
    }

}
