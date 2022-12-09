import PropTypes from 'prop-types';
import Book from '../book';

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
