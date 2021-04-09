import React from "react";

import {
  BookCardContainer,
  BookImageContainer,
  BookImage,
  BookInfoContainer,
  BookTitle,
  BookAuthors,
  BookInfo,
} from "./book-card.styles";

const BookCard = ({ onClick = () => {}, bookData }) => {
  return (
    <BookCardContainer onClick={onClick}>
      <BookImageContainer>
        <BookImage src={bookData.imageUrl} alt="Minha Figura" />
      </BookImageContainer>

      <BookInfoContainer>
        <BookTitle>{bookData.title}</BookTitle>
        <BookAuthors>{bookData.authors}</BookAuthors>
        <BookInfo>
          {bookData.pageCount} páginas
          <br />
          Editora {bookData.publisher}
          <br />
          Publicado em {bookData.published}
        </BookInfo>
      </BookInfoContainer>
    </BookCardContainer>
  );
};

export default BookCard;
