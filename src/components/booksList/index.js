import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../book';
import './styles/bookList.css';

const BooksList = ({ children }) => {
  const books = useSelector((state) => state.booksReducer.books);

  return (
    <section className="hero-section">
      <ul className="books-list">
        {books.map(({ id, bookTitle, bookAuthor }) => (
          <Book key={id} id={id} bookTitle={bookTitle} bookAuthor={bookAuthor} />
        ))}
      </ul>
      {children}
    </section>
  );
};

BooksList.propTypes = {
  children: PropTypes.element.isRequired,
};

export default BooksList;
