import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books';
import categoriesReducer from './categories';

const store = configureStore({
  reducer: {
    booksReducer,
    categoriesReducer,
  },
});

export default store;
