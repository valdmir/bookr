package com.bivala.bookr.controller;

import com.bivala.bookr.entity.Book;
import com.bivala.bookr.usecase.BookUC;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class BookControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private BookUC bookUC;
    @TestConfiguration
    @ComponentScan(basePackages = "com.bivala.bookr.controller")
    static class TestConfig {
        // no beans here – just isolates the controller scan
    }

    //    @MockitoBean
//    private JpaMetamodelMappingContext jpaMetamodelMappingContext;
    @Test
    void getBookList_ShouldReturnListBook() throws Exception {
        UUID first=UUID.fromString("00000000-0000-0000-0000-000000000000");
        UUID second=UUID.fromString("00000000-0000-0000-0000-000000000001");
        List<Book> mockListBook=List.of(
                new Book(first,
                        "Head of Architecture",
                        "John",
                        "english",new String[]{"Tech","Text Book"}),
                new Book(second,
                        "Architecture Hard parts",
                        "John2",
                        "english",new String[]{"Tech","Text Book2"})
        );
        String jsonResponse=String.format("""
            [
                {
                    "id": "%s"
                    ,"title":"Head of Architecture"
                    ,"author":"John"
                    ,"language":"english"
                    ,"tags":["Tech","Text Book"]
                },
                {
                    "id": "%s"
                    ,"title":"Architecture Hard parts"
                    ,"author":"John2"
                    ,"language":"english"
                    ,"tags":["Tech","Text Book2"]
                }
            ]
        """,first,second);
        Page<Book> fakePage= new PageImpl<>(mockListBook, PageRequest.of(0,10),mockListBook.size());
        when(bookUC.findAll()).thenReturn(fakePage);
        mockMvc.perform(get("/books"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray())
                .andExpect(content().json(jsonResponse));
    }

    @Test
    void saveBook_ShouldReturnSavedBook() throws Exception{
        UUID first=UUID.fromString("00000000-0000-0000-0000-000000000000");
        Book input=new Book(null,"Domain-Driver Design",
                "Eric Evans",
                "english",new String[]{"DDD","Architecture"});
        Book saved= new Book(first,input.getTitle(),input.getAuthor(),input.getLanguage(), input.getTags());
        when(bookUC.save(input)).thenReturn(saved);
        String jsonBody = """
                {
                  "title": "Domain-Driven Design",
                  "author": "Eric Evans",
                  "language": "english",
                  "tags": ["DDD", "Architecture"]
                }
                """;
        mockMvc.perform(post("/books")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(jsonBody))
                .andExpect(status().isCreated())
//                .andExpect(content().json(jsonBody));
//                .andExpect(jsonPath("$.id").value(10));
                .andExpect(jsonPath("$.title").value("Domain-Driven Design"));
    }
    @Test
    void getBookDetail() throws Exception {
        UUID first=UUID.fromString("00000000-0000-0000-0000-000000000000");
        Book input=new Book(first,"Domain-Driver Design",
                "Eric Evans",
                "english",new String[]{"DDD","Architecture"});
        when(bookUC.findByID(first)).thenReturn(Optional.of(input));
        mockMvc.perform(get("/books/%s".formatted(first)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title").value("Domain-Driver Design"))
                .andExpect(jsonPath("$.author").value("Eric Evans"));
    }
//
//    @Test
//    void deleteBook() {
//    }
}