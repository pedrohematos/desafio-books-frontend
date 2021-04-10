import React, { createContext, useState } from "react";
import axios from "axios";

import { useLocalStorage } from "../../hooks";

const BookContext = createContext(null);

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState(null);
  const [book, setBook] = useState(null);

  const [loadingBooks, setLoadingBooks] = useState(false);
  const [loadingBook, setLoadingBook] = useState(false);

  const [booksError, setBooksError] = useState(false);
  const [bookError, setBookError] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [storageToken, setStorageToken, removeStorageToken] = useLocalStorage(
    "@authApp: token"
  );

  const getBooks = async () => {
    setLoadingBooks(true);

    const filter = {
      page: 1,
      amount: 12,
    };

    axios
      .get("https://books.ioasys.com.br/api/v1/books", {
        params: filter,
        headers: { authorization: `Bearer ${storageToken}` },
      })
      .then((response) => {
        if (response.data) {
          setBooks(response.data);
          setLoadingBooks(false);
        }
      })
      .catch((error) => {
        if (error) {
          setBooksError(true);
          setLoadingBooks(false);
        }
      });
  };

  const getBookById = async (id) => {
    setLoadingBook(true);

    axios
      .get(`https://books.ioasys.com.br/api/v1/books/${id}`, {
        headers: { authorization: `Bearer ${storageToken}` },
      })
      .then((response) => {
        if (response.data) {
          setBook(response.data);
          setLoadingBook(false);
        }
      })
      .catch((error) => {
        if (error) {
          setBookError(true);
          setLoadingBook(false);
        }
      });
  };

  return (
    <BookContext.Provider
      value={{
        getBooks,
        getBookById,
        books,
        book,
        loadingBooks,
        loadingBook,
        booksError,
        bookError,
        isModalVisible,
        setIsModalVisible,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;
