package com.bivala.bookr.controller;

import com.bivala.bookr.dto.BookSoftCopyDTO;
import com.bivala.bookr.entity.Book;
import com.bivala.bookr.entity.BookFormat;
import com.bivala.bookr.usecase.BookFormatUC;
import com.bivala.bookr.usecase.BookUC;
import com.bivala.bookr.usecase.MinioUC;
import org.apache.tomcat.util.http.parser.HttpParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.*;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class BookController {

    private BookUC bookUC;
    private BookFormatUC bookFormatUC;
    @Autowired
    private MinioUC minioUC;
    public BookController(BookUC bookUC, BookFormatUC bookFormatUC){
        this.bookUC=bookUC;
        this.bookFormatUC=bookFormatUC;
    }
    @GetMapping("/books")
    public Page<Book> getBookList(){
        return bookUC.findAll();
    }
//  This API for digital books
    @PostMapping("/books")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> saveBook(@RequestBody BookSoftCopyDTO bookRequest){
        Optional<Book> book=bookUC.findByTitleOrAuthor(bookRequest.title,bookRequest.author);
        Book theBook;
        BookFormat theBookFormat=new BookFormat("testing1","",bookRequest.pages,bookRequest.coverUrl,
                LocalDateTime.now(), bookRequest.format, bookRequest.locationUrl,bookRequest.PublishedDate,true);
        if (book.isEmpty()){

            theBook=new Book(bookRequest.title,bookRequest.author,bookRequest.language,bookRequest.tags);
            bookUC.save(theBook);
        }else{
            theBook=book.get();
        }
        Optional<BookFormat> bookFormat=bookFormatUC.findByBookIDWithFormat(theBook.getId(),bookRequest.format);
        if(!bookFormat.isEmpty()){
//           theBookFormat.setBookID(theBook.getId());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Format for this book already exists");
        }
        theBookFormat.setBookID(theBook.getId());
        bookFormatUC.save(theBookFormat);
        return ResponseEntity.status(HttpStatus.CREATED).body(bookFormat);
    }
//  This API for pyhsical books
//    @PostMapping("/books/hardcopy")
//    public Book saveBookISBN(@RequestBody Book thebook){
//
//    }

    @GetMapping("/books/{bookId}")
    public Optional<Book> getBookDetail(@PathVariable("bookId") UUID bookId){
        Optional<Book> book=bookUC.findByID(bookId);
        return book;
    }
//    @PutMapping("/books/{bookId}")
//    public Book updateBookDetail(@RequestBody Book theBook,@PathVariable("bookId") Long bookId){
//        theBook.setId(bookId);
//        return bookUC.save(theBook);
//    }
    @DeleteMapping("/books/{bookId}")
    public String deleteBook(@PathVariable("bookId") UUID bookId){
        Optional<Book> book=bookUC.findByID(bookId);
        if(book.isEmpty()){
            throw new RuntimeException("Book is not exist - id:"+bookId);
        }
        bookUC.delete(bookId);
        return "Successfull delete book with ID:"+bookId;
    }
    @PostMapping("/upload")
    public ResponseEntity<?> uploadFiles(@RequestParam("file")List<MultipartFile> files){
       for(MultipartFile file: files){
           if (!"application/pdf".equalsIgnoreCase(file.getContentType())) {
               return ResponseEntity
                       .badRequest()
                       .body(Map.of("error", "Only PDF files are allowed"));
           }
           try {
               Map<String, Object> response = new HashMap<>();
               String bookFilename=minioUC.uploadFile(file);
               String thumbnailFilename=minioUC.uploadFileAndGenerateThumbnail(file);
               response.put("file_url",bookFilename);
               response.put("cover_url",thumbnailFilename);
               return ResponseEntity.status(HttpStatus.CREATED).body(response);
           } catch (Exception e) {
               return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Could not upload file: " + e.getMessage());
           }
       }
        return null;
    }
}
