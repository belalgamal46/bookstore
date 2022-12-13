import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books';
import './styles/form.css';

const Form = () => {
  const dispatch = useDispatch();
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const book = { bookTitle, bookAuthor, id: uuidv4() };
    dispatch(addBook(book));
    setBookTitle('');
    setBookAuthor('');
  };

  const handleChange = (event) => {
    if (event.target.name === 'book-title') {
      setBookTitle(event.target.value);
    }
    if (event.target.name === 'book-author') {
      setBookAuthor(event.target.value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>ADD NEW BOOK</h4>
      <div className="form-inputs">
        <input
          type="text"
          placeholder="Enter Book Title"
          name="book-title"
          onChange={handleChange}
          value={bookTitle}
          required
        />
        <input
          type="text"
          placeholder="Enter Author Name"
          name="book-author"
          onChange={handleChange}
          value={bookAuthor}
          required
        />
        <button type="submit">ADD BOOK</button>
      </div>
    </form>
  );
};

export default Form;
