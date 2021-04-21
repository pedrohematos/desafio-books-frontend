import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

import { useAuth } from "../../hooks";

const BookContext = createContext(null);

export const BookProvider = ({ children }) => {
  const { token } = useAuth();

  const [books, setBooks] = useState(null);
  const [book, setBook] = useState(null);

  const [loadingBooks, setLoadingBooks] = useState(false);
  const [loadingBook, setLoadingBook] = useState(false);

  const [booksError, setBooksError] = useState(false);
  const [bookError, setBookError] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (token) {
      const filter = {
        page: 1,
        amount: 12,
      };
      getBooks(filter);
    }
  }, [token]);

  const nextPage = () => {
    if (books) {
      const filter = {
        page: books.page + 1,
        amount: 12,
      };
      getBooks(filter);
    }
  };

  const previousPage = () => {
    if (books && books.page !== 1) {
      const filter = {
        page: books.page - 1,
        amount: 12,
      };
      getBooks(filter);
    }
  };

  const getBooks = async (filter) => {
    setLoadingBooks(true);
    axios
      .get("https://books.ioasys.com.br/api/v1/books", {
        params: filter,
        headers: { authorization: `Bearer ${token}` },
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
        headers: { authorization: `Bearer ${token}` },
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
        nextPage,
        previousPage,
        isModalVisible,
        setIsModalVisible,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;
