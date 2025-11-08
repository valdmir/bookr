import React from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

const LendBookModal = ({ book, isOpen, onClose }) => {
  if (!book) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center p-8 pt-10">
        <div className="w-40 h-60 shadow-lg rounded-lg mb-6">
          <div className="w-full h-full bg-center bg-no-repeat bg-cover rounded-lg" style={{ backgroundImage: `url("${book.coverUrl}")` }}></div>
        </div>
        <div className="text-center mb-6">
          <h1 className="text-[#111418] dark:text-white text-2xl font-bold leading-tight tracking-tight">{book.title}</h1>
          <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal pt-1">by {book.author}</p>
        </div>
        <div className="w-full flex flex-col gap-4">
          <label className="flex flex-col w-full">
            <p className="text-[#111418] dark:text-gray-300 text-sm font-medium leading-normal pb-2">Lend to:</p>
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">search</span>
              <select className="form-select w-full appearance-none resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary dark:focus:border-primary h-12 pl-10 pr-4 placeholder:text-gray-500 dark:placeholder:text-gray-400 text-base font-normal leading-normal">
                <option disabled="" selected="" value="">Search for a friend...</option>
                <option value="alex">Alex Chen</option>
                <option value="maria">Maria Garcia</option>
                <option value="sam">Sam Wilson</option>
              </select>
            </div>
          </label>
          <label className="flex flex-col w-full">
            <p className="text-[#111418] dark:text-gray-300 text-sm font-medium leading-normal pb-2">Return by:</p>
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">calendar_today</span>
              <input className="form-input w-full resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary dark:focus:border-primary h-12 pl-10 pr-4 placeholder:text-gray-500 dark:placeholder:text-gray-400 text-base font-normal leading-normal" type="date" value="2024-08-15"/>
            </div>
          </label>
        </div>
        <Button className="mt-8 w-full bg-primary hover:bg-primary/90 text-white">Lend Book</Button>
      </div>
    </Modal>
  );
};

export default LendBookModal;
