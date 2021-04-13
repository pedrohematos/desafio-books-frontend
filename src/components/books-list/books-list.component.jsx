import React, { useEffect } from "react";

import BookCard from "../book-card/book-card.component";
import BookModal from "../book-modal/book-modal.component";
import Spinner from "../spinner/spinner.component";

import { useBook } from "../../hooks";

import { ContentContainer } from "./books-list.styles";

const BooksList = () => {
  const {
    getBooks,
    getBookById,
    books,
    loadingBooks,
    booksError,
    setIsModalVisible,
    isModalVisible,
  } = useBook();

  useEffect(() => {
    getBooks();
  }, []);

  const openModal = (id) => {
    getBookById(id);
    setIsModalVisible(true);
  };

  return (
    <ContentContainer loadingBooks={loadingBooks} booksError={booksError}>
      {loadingBooks && <Spinner />}
      {booksError && !loadingBooks && (
        <div>
          Pequeno bug na requisição dos livros que precisar ser corrigido. Por
          favor, apenas recarregue a página!
        </div>
      )}

      {books?.data.map((bookData) => (
        <BookCard
          key={bookData.id}
          bookData={bookData}
          onClick={() => openModal(bookData.id)}
        />
      ))}

      {isModalVisible ? (
        <BookModal onClose={() => setIsModalVisible(false)} />
      ) : null}
    </ContentContainer>
  );
};

export default BooksList;
