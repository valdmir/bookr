import React from 'react';

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-900/50 dark:bg-black/60 p-4">
      <div className="relative flex flex-col w-full max-w-sm rounded-xl bg-white dark:bg-background-dark shadow-2xl">
        <div className="flex justify-end p-2 absolute top-0 right-0 z-20">
          <button onClick={onClose} className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
