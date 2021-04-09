import React from "react";

import { ReactComponent as CloseButton } from "../../assets/icons/close-button.svg";

import {
  ModalContainer,
  Container,
  CloseButtonContainer,
  BookImageContainer,
  BookImage,
  BookInfoContainer,
  BookTitle,
  BookAuthors,
  BookInfo,
} from "./book-modal.styles";

const bookData = {
  id: "8f41b92c7460b9337660427e",
  title: "A Culpa é das Estrelas",
  description:
    "Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ",
  authors: ["Jonh Green"],
  pageCount: 288,
  category: "Romance",
  imageUrl: "https://files-books.ioasys.com.br/Book-0.jpg",
  isbn10: "0062856626",
  isbn13: "978-0062856623",
  language: "Inglês",
  publisher: "Intrínseca",
  published: 2002,
};

// COMPONENT BEGINNING

const BookModal = ({ id = "modal", onClose = () => {}, children }) => {
  const handleOutsideCLick = (e) => {
    if (e.target.id === id) onClose();
  };

  return (
    <ModalContainer id={id} onClick={handleOutsideCLick}>
      <Container>
        <CloseButtonContainer>
          <CloseButton onClick={onClose} />
        </CloseButtonContainer>
        MEU CONTEÚDO
      </Container>
    </ModalContainer>
  );
};

export default BookModal;
