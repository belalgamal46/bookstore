import PropTypes from 'prop-types';
import Book from '../book';
import './styles/bookList.css';

const BooksList = ({ children }) => (
  <section>
    <ul>
      <Book />
    </ul>
    {children}
  </section>
);

BooksList.propTypes = {
  children: PropTypes.element.isRequired,
};

export default BooksList;
