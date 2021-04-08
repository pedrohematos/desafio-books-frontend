import React from "react";

import { BOOK_DETAILS } from "../../components/book-card/book-card-data";

import { BookDetailsContainer } from "./book-details.styles";

const BookDetails = () => {
  const bookDetails = BOOK_DETAILS;

  return (
    <div>
      <></>
      <BookDetailsContainer>DETALHES DO LIVRO</BookDetailsContainer>
    </div>
  );
};

export default BookDetails;
