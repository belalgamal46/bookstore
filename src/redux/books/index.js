import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/addBook';
const REMOVE_BOOK = 'bookstore/books/removeBook';

const initialState = {
  books: [
    { bookTitle: 'The Hunger Games', bookAuthor: 'Suzanne Collins', id: uuidv4() },
    { bookTitle: 'Dune', bookAuthor: 'Frank Herbert', id: uuidv4() },
    {
      bookTitle: 'Capital in the Twenty-First Century',
      bookAuthor: 'Suzanne Collins',
      id: uuidv4(),
    },
  ],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, payload],
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== payload.id),
      };
    default:
      return state;
  }
};

export const addBook = (book = {}) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (book = {}) => ({
  type: REMOVE_BOOK,
  payload: book,
});

export default reducer;
