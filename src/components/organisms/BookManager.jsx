import React, { useState } from 'react';
import BookForm from '../molecules/BookForm';
import BookList from '../molecules/BookList';
import Button from '../atoms/Button';
import Stack from '../../utils/stack';

const BookManager = () => {
  const [books, setBooks] = useState(new Stack());
  const [showBooks, setShowBooks] = useState(false);

  const addBook = (book) => {
    const newBooks = new Stack();
    books.getStack().forEach((b) => newBooks.push(b));
    newBooks.push(book);
    setBooks(newBooks);
  };

  return (
    <div className="container">
      <h1>book form</h1>
      <BookForm onAddBook={addBook} />
      <Button text={showBooks ? "Ocultar libros" : "Mostrar libros"} onClick={() => setShowBooks(!showBooks)} />
      {showBooks && <BookList books={books.getStack()} />}
    </div>
  );
};

export default BookManager;
