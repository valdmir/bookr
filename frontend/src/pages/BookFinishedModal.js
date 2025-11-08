import React, { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

const BookFinishedModal = ({ book, isOpen, onClose }) => {
  const [rating, setRating] = useState(0);

  if (!book) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center p-6 sm:p-8 md:p-10">
        <h1 className="text-[#111418] dark:text-white tracking-tight text-[32px] font-bold leading-tight text-center pb-3 pt-6">You Finished It!</h1>
        <div className="mt-6 mb-4 w-40 h-60 shadow-lg">
          <div className="w-full h-full bg-center bg-no-repeat bg-cover rounded-lg" style={{ backgroundImage: `url("${book.coverUrl}")` }}></div>
        </div>
        <div className="text-center mb-6">
          <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{book.title}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">by {book.author}</p>
        </div>
        <div className="w-full flex flex-col items-center border-t border-gray-200 dark:border-gray-700 pt-6">
          <h2 className="text-[#111418] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] text-center pb-3">Your Rating</h2>
          <div className="flex items-center justify-center gap-2 px-3 py-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`material-symbols-outlined text-4xl cursor-pointer ${rating >= star ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-600'}`}
                onClick={() => setRating(star)}
              >
                star
              </span>
            ))}
          </div>
        </div>
        <div className="w-full mt-6">
          <label className="flex flex-col w-full">
            <p className="text-[#111418] dark:text-white text-base font-medium leading-normal pb-2 text-center">Add a review (optional)</p>
            <textarea className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] dark:text-gray-200 focus:outline-0 focus:ring-2 focus:ring-primary border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary dark:focus:border-primary min-h-28 placeholder:text-[#60758a] dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal" placeholder="Add your thoughts or a short review..."></textarea>
          </label>
        </div>
        <div className="w-full flex flex-col sm:flex-row-reverse gap-3 mt-8">
          <Button className="flex-1 bg-primary text-white hover:bg-primary/90">Move to Finished Shelf</Button>
          <Button onClick={onClose} className="flex-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">Maybe Later</Button>
        </div>
      </div>
    </Modal>
  );
};

export default BookFinishedModal;
