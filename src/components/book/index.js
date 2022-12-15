import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeBook, getBooks } from '../../redux/books';
import './styles/book.css';

const Book = ({ bookTitle, bookAuthor, id }) => {
  const dispatch = useDispatch();
  const handleClick = async () => {
    const book = { bookTitle, bookAuthor, id };
    await dispatch(removeBook(book));
    dispatch(getBooks());
  };

  return (
    <li id={id}>
      <div className="book-info">
        <div className="book-details">
          <h1>{bookTitle}</h1>
          <h2>{bookAuthor}</h2>
        </div>
        <div className="action-buttons">
          <button type="button" className="button-outline">
            Comment
          </button>
          <span className="divider" />
          <button type="button" className="button-outline" onClick={handleClick}>
            Remove
          </button>
          <span className="divider" />
          <button type="button" className="button-outline">
            Edit
          </button>
        </div>
      </div>
    </li>
  );
};

Book.defaultProps = {
  bookTitle: '',
  bookAuthor: '',
  id: '',
};

Book.propTypes = {
  bookTitle: PropTypes.string,
  bookAuthor: PropTypes.string,
  id: PropTypes.string,
};

export default Book;
