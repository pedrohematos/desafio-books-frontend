import React, { createContext, useState } from "react";
import axios from "axios";

import { useLocalStorage } from "../../hooks";

const BookContext = createContext(null);

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState(null);
  const [book, setBook] = useState(null);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [storageToken, setStorageToken, removeStorageToken] = useLocalStorage(
    "@authApp: token"
  );

  const getBooks = async () => {
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
        }
      })
      .catch((error) => {
        if (error) {
        }
      });
  };

  const getBookById = async (id) => {
    axios
      .get(`https://books.ioasys.com.br/api/v1/books/${id}`, {
        headers: { authorization: `Bearer ${storageToken}` },
      })
      .then((response) => {
        if (response.data) {
          setBook(response.data);
        }
      })
      .catch((error) => {
        if (error) {
        }
      });
  };

  return (
    <BookContext.Provider
      value={{
        getBookById,
        getBooks,
        books,
        book,
        isModalVisible,
        setIsModalVisible,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;
