-- migrate:up
CREATE TABLE IF NOT EXISTS book_format ( 
    id BIGSERIAL PRIMARY KEY,
    book_id UUID REFERENCES book(id),
    owned_by_user_id VARCHAR(200) NOT NULL,
    isbn VARCHAR(255),
    pages INT DEFAULT 0,
    cover_url VARCHAR(255),
    stored_at  TIMESTAMP,
    format VARCHAR(255) NOT NULL,
    location_url VARCHAR(255),
    published_date DATE NOT NULL,
    is_available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- migrate:down
DROP TABLE IF EXISTS book_format;
