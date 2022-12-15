import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBooks, createBook, deleteBook } from '../../apis/books';

const FETCH_BOOKS = 'bookstore/books/fetchBooks';
const ADD_BOOK = 'bookstore/books/addBook';
const DELETE_BOOK = 'bookstore/books/deleteBook';

const initialState = {
  books: {},
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case `${FETCH_BOOKS}/fulfilled`:
      return {
        ...state,
        books: { ...payload },
      };
    case `${ADD_BOOK}/fulfilled`:
      return {
        ...state,
        books: { ...state.books, ...payload },
      };
    case `${DELETE_BOOK}/fulfilled`:
      return state;
    default:
      return state;
  }
};

export const addBook = createAsyncThunk(ADD_BOOK, createBook);

export const removeBook = createAsyncThunk(DELETE_BOOK, deleteBook);

export const getBooks = createAsyncThunk(FETCH_BOOKS, fetchBooks);

export default reducer;
