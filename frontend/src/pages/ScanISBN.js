import React from 'react';
import Button from '../components/Button';

const ScanISBN = () => {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden text-gray-800 dark:text-gray-200">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center">
            <div className="layout-content-container flex flex-col w-full max-w-2xl flex-1">
              <header className="flex items-center justify-between whitespace-nowrap px-6 sm:px-10 py-4 z-10">
                <div className="flex items-center gap-3 text-white">
                  <div className="size-6">
                    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v5.5a.75.75 0 001.5 0v-5.5z" fillRule="evenodd"></path><path clipRule="evenodd" d="M10 2a.75.75 0 01.75.75v.01a.75.75 0 01-1.5 0V2.75A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v.01a.75.75 0 01-1.5 0V15.75A.75.75 0 0110 15z" fillRule="evenodd"></path><path d="M5.5 10a.75.75 0 01.75-.75h.01a.75.75 0 010 1.5H6.25a.75.75 0 01-.75-.75zM13.75 10a.75.75 0 01.75-.75h.01a.75.75 0 010 1.5h-.01a.75.75 0 01-.75-.75z"></path></svg>
                  </div>
                  <h2 className="text-lg font-bold tracking-tight">Scan ISBN</h2>
                </div>
                <button className="flex items-center justify-center rounded-lg h-10 w-10 text-white hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined text-2xl">close</span>
                </button>
              </header>
              <main className="flex flex-col flex-1 items-center justify-center px-4 pb-4">
                <div className="relative w-full aspect-[4/3] max-w-xl max-h-[70vh] bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                  {/* Camera View Simulation */}
                  <img className="absolute inset-0 w-full h-full object-cover opacity-80" alt="Abstract blurry image of bookshelves simulating a camera view" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAytcqGUh_XJbhQ050Ilq_A2u17P4QiYatocHyck4Gy-cJntXpUAIrV7yAqTJLVatJJD8ut59RtUPtrkcB3lChRqfJcExwubhUuCVO16UzIACLOr2QpCaO4SXNgscHvVVV8MPSCVVm43QGJLIUc_MPFrC7rDfwj2wIFbTlUvA2mS8IxawgGQPq2Bm0sQ2W29gF1Knk56vcfnZqpm8o8g6G6nr4ZAbnMQMyY5toyR0S7D20iojTy551OY4qPuBdDYMhK4-jPowb5cCQ"/>
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/70"></div>
                  {/* Scanning Frame (Cutout) */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="relative w-full h-2/5 border-4 border-primary rounded-lg" style={{ boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.7)' }}>
                      {/* Scanning line animation placeholder */}
                      <div className="absolute top-1/2 left-2 right-2 h-0.5 bg-primary/70 animate-pulse"></div>
                    </div>
                  </div>
                </div>
                <div className="w-full max-w-xl text-center z-10 mt-6">
                  <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">Align the book's barcode within the frame to add it to your library.</p>
                  <div className="flex px-4 py-3 justify-center">
                    <Button className="bg-white/10 text-white hover:bg-white/20">
                      Enter ISBN Manually
                    </Button>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanISBN;
