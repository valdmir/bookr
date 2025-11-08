import React, { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

const UpdateProgressModal = ({ book, isOpen, onClose }) => {
  const [progress, setProgress] = useState(book?.progress || 0);

  if (!book) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center px-8 pb-8 -mt-4">
        <h3 className="text-[#111418] dark:text-white tracking-light text-2xl font-bold leading-tight text-center pb-4 pt-2">Update Your Progress</h3>
        <div className="w-24 h-36 rounded-lg overflow-hidden shadow-lg mb-4">
          <div className="w-full h-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("${book.coverUrl}")` }}></div>
        </div>
        <h1 className="text-[#111418] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">{book.title}</h1>
        <p className="text-[#60758a] dark:text-slate-400 text-sm font-normal leading-normal pb-6 text-center">by {book.author}</p>
        <div className="w-full mb-4">
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="progress-slider">How far along are you?</label>
            <span className="text-lg font-semibold text-primary dark:text-primary-light">{progress}%</span>
          </div>
          <div className="flex items-center gap-3">
            <input
              className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer range-lg [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
              id="progress-slider"
              max="100"
              min="0"
              type="range"
              value={progress}
              onChange={(e) => setProgress(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full mb-6">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2" htmlFor="notes">Reading Notes (Optional)</label>
          <textarea className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-transparent dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-primary focus:border-primary" id="notes" name="notes" placeholder="Jot down a thought, a quote, or a reaction..." rows="3"></textarea>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <Button onClick={onClose} className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600">Cancel</Button>
          <Button className="bg-primary text-white hover:bg-primary/90">Save Progress</Button>
        </div>
      </div>
    </Modal>
  );
};

export default UpdateProgressModal;
