import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const BookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook({ title, author });
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Titulo" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <Input label="Autor" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <Button text="Agregar libro" />
    </form>
  );
};

export default BookForm;
