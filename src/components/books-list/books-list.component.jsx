import React, { useEffect } from "react";

import { ContentContainer } from "./books-list.styles";
import BookCard from "../book-card/book-card.component";
import { BOOK_CARD_DATA } from "../book-card/book-card-data";
import { useBook } from "../../hooks";

const BooksList = () => {
  const { data } = BOOK_CARD_DATA;

  const { getBooks, getBookById, books, setIsModalVisible } = useBook();
  //const { book } = useBook();

  useEffect(() => {
    getBooks();
  }, []);

  const openModal = (id) => {
    getBookById(id);
  };

  return (
    <ContentContainer>
      {books?.data.map((bookData) => (
        <BookCard
          key={bookData.id}
          bookData={bookData}
          onClick={() => openModal(bookData.id)}
        />
      ))}
    </ContentContainer>
  );
};

export default BooksList;
