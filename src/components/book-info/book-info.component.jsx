import React from "react";

import { useBook } from "../../hooks";

import { ReactComponent as Quotes } from "../../assets/icons/quotes.svg";

import {
  BookImageContainer,
  BookImage,
  BookInfoContainer,
  BookTitle,
  BookAuthors,
  InfoTitle,
  BookInfoSubContainer,
  LeftSubInfo,
  RightSubInfo,
  BookDescriptionContainer,
  ReviewTitle,
} from "./book-info.styles";

const BookInfo = () => {
  const { book } = useBook();

  return (
    <>
      <BookImageContainer>
        <BookImage src={book.imageUrl} alt={book.title} />
      </BookImageContainer>

      <BookInfoContainer>
        <BookTitle>{book.title}</BookTitle>
        <BookAuthors>{book.authors}</BookAuthors>

        <InfoTitle>INFORMAÇÕES</InfoTitle>

        <BookInfoSubContainer>
          <LeftSubInfo>
            Páginas <br />
            Editora <br />
            Publicação <br />
            Idioma <br />
            Título Original <br />
            ISBN-10 <br />
            ISBN-13 <br />
          </LeftSubInfo>
          <RightSubInfo>
            {book.pageCount} páginas <br />
            {book.publisher} <br />
            {book.published} <br />
            {book.language} <br />
            {book.title} <br />
            {book.isbn10} <br />
            {book.isbn13} <br />
          </RightSubInfo>
        </BookInfoSubContainer>

        <BookDescriptionContainer>
          <ReviewTitle>RESENHA DA EDITORA</ReviewTitle>
          <Quotes style={{ marginRight: "5px" }} />
          {book.description}
        </BookDescriptionContainer>
      </BookInfoContainer>
    </>
  );
};

export default BookInfo;
