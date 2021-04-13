import React from "react";

import { useBook } from "../../hooks";

import Spinner from "../spinner/spinner.component";
import BookInfo from "../book-info/book-info.component";

import { ReactComponent as CloseButton } from "../../assets/icons/close-button.svg";
import { ReactComponent as Quotes } from "../../assets/icons/quotes.svg";

import {
  ModalContainer,
  ContentContainer,
  ButtonClose,
} from "./book-modal.styles";

const BookModal = ({ id = "modal", onClose = () => {}, children }) => {
  const handleOutsideCLick = (e) => {
    if (e.target.id === id) onClose();
  };

  const { book, loadingBook, bookError } = useBook();

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
        {book && !loadingBook && <BookInfo />}
      </ContentContainer>
    </ModalContainer>
  );
};

export default BookModal;
