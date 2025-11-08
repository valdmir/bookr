import React from 'react';
import { books } from '../data/books';
import BookCard from '../components/BookCard';

const CurrentlyReading = () => {
  const readingBooks = books.filter(book => book.status === 'reading');

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-text-light-primary dark:text-text-dark-primary">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-5xl flex-1">
              <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-6 md:px-10 py-3 bg-foreground-light dark:bg-foreground-dark rounded-xl">
                <div className="flex items-center gap-4 text-text-light-primary dark:text-text-dark-primary">
                  <div className="size-6 text-primary">
                    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 5.33333V18.6667C20 19.403 19.403 20 18.6667 20H6.66667C6.29822 20 6 19.7018 6 19.3333V4.66667C6 3.92967 6.597 3.33333 7.33333 3.33333H18C19.1046 3.33333 20 4.22876 20 5.33333ZM18 5H8V18H18V5Z M4 2.66667V16H2V2.66667C2 1.92967 2.597 1.33333 3.33333 1.33333H16V3.33333H3.33333C3.06702 3.33333 2.85714 3.54321 2.85714 3.80952L2.83416 3.98505L4 2.66667V16V2.66667Z"></path></svg>
                  </div>
                  <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] text-text-light-primary dark:text-text-dark-primary">BookShelf</h2>
                </div>
              </header>
              <main className="mt-8 px-2 md:px-4">
                <div className="flex flex-wrap justify-between items-center gap-4 p-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-4xl font-black leading-tight tracking-[-0.033em] text-text-light-primary dark:text-text-dark-primary">Currently Reading</p>
                    <p className="text-base font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary">{readingBooks.length} books</p>
                  </div>
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-6 p-4">
                  {readingBooks.map(book => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentlyReading;
