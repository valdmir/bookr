import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="flex flex-col gap-3 group">
      <div className="relative w-full bg-center bg-no-repeat aspect-[3/4.5] bg-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <img className="w-full h-full object-cover rounded-lg" src={book.coverUrl} alt={`Book cover of ${book.title}`} />
        <div className="absolute top-2 right-2">
          <button className="flex items-center justify-center size-7 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/75 transition-colors">
            <span className="material-symbols-outlined text-base">more_vert</span>
          </button>
        </div>
      </div>
      <div>
        <p className="text-base font-medium leading-normal dark:text-white truncate">{book.title}</p>
        <p className="text-sm font-normal leading-normal text-gray-600 dark:text-gray-400 mt-1">{book.author}</p>
      </div>
    </div>
  );
};

export default BookCard;
