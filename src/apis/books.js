import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appId = 'CHZ2rlhKmwy9m3YrTiBY';

export const fetchBooks = async () => {
  try {
    const response = await axios.get(`${baseUrl}/apps/${appId}/books`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const createBook = async (args) => {
  try {
    await axios.post(`${baseUrl}/apps/${appId}/books`, {
      item_id: uuidv4(),
      title: args.bookTitle,
      author: args.bookAuthor || 'N/A',
      category: args.bookCategory || 'N/A',
    });

    return args;
  } catch (error) {
    return error;
  }
};

export const deleteBook = async (args) => {
  try {
    const url = `${baseUrl}/apps/${appId}/books/${args.id}`;
    const response = await axios.delete(url);
    return response;
  } catch (error) {
    return error;
  }
};
