import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MyLibrary from './pages/MyLibrary';
import ScanISBN from './pages/ScanISBN';
import CurrentlyReading from './pages/CurrentlyReading';
import FinishedShelf from './pages/FinishedShelf';
import LendBookModal from './components/LendBookModal';
import UpdateProgressModal from './components/UpdateProgressModal';
import BookFinishedModal from './components/BookFinishedModal';
import { books } from './data/books';

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [isLendModalOpen, setIsLendModalOpen] = useState(false);
  const [isUpdateProgressModalOpen, setIsUpdateProgressModalOpen] = useState(false);
  const [isBookFinishedModalOpen, setIsBookFinishedModalOpen] = useState(false);

  const openLendModal = (book) => {
    setSelectedBook(book);
    setIsLendModalOpen(true);
  };

  const openUpdateProgressModal = (book) => {
    setSelectedBook(book);
    setIsUpdateProgressModalOpen(true);
  };

  const openBookFinishedModal = (book) => {
    setSelectedBook(book);
    setIsBookFinishedModalOpen(true);
  };

  return (
    <Router>
      <div className="App">
        <nav className="bg-gray-800 text-white p-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/">My Library</Link>
            </li>
            <li>
              <Link to="/reading">Currently Reading</Link>
            </li>
            <li>
              <Link to="/finished">Finished Shelf</Link>
            </li>
            <li>
              <Link to="/scan">Scan ISBN</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<MyLibrary />} />
          <Route path="/scan" element={<ScanISBN />} />
          <Route path="/reading" element={<CurrentlyReading />} />
          <Route path="/finished" element={<FinishedShelf />} />
        </Routes>

        <LendBookModal book={selectedBook} isOpen={isLendModalOpen} onClose={() => setIsLendModalOpen(false)} />
        <UpdateProgressModal book={selectedBook} isOpen={isUpdateProgressModalOpen} onClose={() => setIsUpdateProgressModalOpen(false)} />
        <BookFinishedModal book={selectedBook} isOpen={isBookFinishedModalOpen} onClose={() => setIsBookFinishedModalOpen(false)} />

        {/* Example buttons to open modals */}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">Modal Triggers (for testing)</h2>
          <div className="flex space-x-4">
            <button onClick={() => openLendModal(books[0])} className="bg-blue-500 text-white p-2 rounded">Lend Book</button>
            <button onClick={() => openUpdateProgressModal(books[8])} className="bg-green-500 text-white p-2 rounded">Update Progress</button>
            <button onClick={() => openBookFinishedModal(books[9])} className="bg-yellow-500 text-white p-2 rounded">Finish Book</button>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
