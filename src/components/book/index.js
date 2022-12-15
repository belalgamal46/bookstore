import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeBook, getBooks } from '../../redux/books';
import './styles/book.css';

const Book = ({
  bookTitle, bookAuthor, id, bookCategory,
}) => {
  const dispatch = useDispatch();
  const handleClick = async () => {
    const book = { bookTitle, bookAuthor, id };
    await dispatch(removeBook(book));
    dispatch(getBooks());
  };

  return (
    <li id={id}>
      <div className="book">
        <div className="book-container">
          <div className="book-details">
            <h2>{bookCategory}</h2>
            <h1>{bookTitle}</h1>
            <h3>{bookAuthor}</h3>
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
        <div className="progress-container">
          <div className="circular-progress-container">
            <div className="circular-progress" />
          </div>
          <div className="progress-stat">
            <p>64%</p>
            <p>Completed</p>
          </div>
          <span className="progress-divider" />
          <div className="current-chapter-container">
            <div className="current-chapter">
              <p>CURRENT CHAPTER</p>
              <p>Chapter 17</p>
            </div>
            <button type="button" className="update-progress-btn">
              UPDATE PROGRESS
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

Book.defaultProps = {
  bookTitle: '',
  bookAuthor: '',
  bookCategory: '',
  id: '',
};

Book.propTypes = {
  bookTitle: PropTypes.string,
  bookAuthor: PropTypes.string,
  bookCategory: PropTypes.string,
  id: PropTypes.string,
};

export default Book;
