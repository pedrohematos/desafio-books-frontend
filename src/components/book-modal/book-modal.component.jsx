import React from "react";

import { useBook } from "../../hooks";

import Spinner from "../spinner/spinner.component";

import { ReactComponent as CloseButton } from "../../assets/icons/close-button.svg";

import {
  ModalContainer,
  ContentContainer,
  ButtonClose,
  BookImageContainer,
  BookImage,
  BookInfoContainer,
  BookTitle,
  BookAuthors,
  BookInfoSubContainer,
  LeftSubInfo,
  RightSubInfo,
  BookDescriptionContainer,
} from "./book-modal.styles";

const BookModal = ({ id = "modal", onClose = () => {}, children }) => {
  const handleOutsideCLick = (e) => {
    if (e.target.id === id) onClose();
  };

  const { book, loadingBook, bookError } = useBook();
  //console.log(book);

  return (
    <ModalContainer id={id} onClick={handleOutsideCLick}>
      {loadingBook && <Spinner />}
      {bookError && !loadingBook && (
        <div>
          Pequeno bug na requisição do livro que precisar ser corrigido. Por
          favor, faça o logout e login novamente!
        </div>
      )}

      <ContentContainer>
        {book && !loadingBook && (
          <>
            <BookImageContainer>
              <BookImage src={book.imageUrl} alt={book.title} />
            </BookImageContainer>

            <BookInfoContainer>
              <BookTitle>{book.title}</BookTitle>
              <BookAuthors>{book.authors}</BookAuthors>
              INFORMAÇÕES
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
                {/* RESENHA DA EDITORA
                <BookDescriptionContainer>
                  {book.description}
                </BookDescriptionContainer> */}
              </BookInfoSubContainer>
            </BookInfoContainer>
          </>
        )}
      </ContentContainer>
    </ModalContainer>
  );
};

export default BookModal;
