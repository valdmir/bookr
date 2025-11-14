import * as React from "react";
import { BookCard } from "@/components/book-card";

interface Book {
  id: string;
  image: string;
  tags: string[];
  title: string;
  author: string;
}
const books: Book[] = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    author: "Testing1",
    title: "Premium Wireless Headphones",
    tags: ["electronics", "audio"],
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    author: "Testing2",
    title: "Smart Watch Series 5",
    tags: ["electronics", "smartwatch"],
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    author: "Testing3",
    title: "Professional Camera Kit",
    tags: ["electronics", "camera"],
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    author: "Testing4",
    title: "Ergonomic Office Chair",
    tags: ["furniture", "office"],
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    author: "Testing5",
    title: "Smartphone Pro Max",
    tags: ["electronics", "smartphone"],
  },
  {
    id: "6",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    author: "Testing6",
    title: 'Ultra HD Smart TV 55"',
    tags: ["electronics", "tv"],
  },
];
export default function BookList() {
  const filteredBooks = React.useMemo(() => books, []);
  return (
    <div
      className={`
              grid grid-cols-1 gap-6
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
            `}
    >
      {filteredBooks.map((book) => {
        return (
          <BookCard
            key={book.id}
            //   onAddToCart={handleAddToCart}
            //   onAddToWishlist={handaleAddToWishlist}
            book={book}
          />
        );
      })}
    </div>
  );
}
