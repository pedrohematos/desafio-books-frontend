import React from "react";

import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as LogOutIcon } from "../../assets/icons/logout.svg";
import { ReactComponent as PreviousPageButton } from "../../assets/icons/previous-page-button.svg";
import { ReactComponent as NextPageButton } from "../../assets/icons/next-page-button.svg";

import BookCard from "../../components/book-card/book-card.component";
import BookDetails from "../../components/book-details/book-details.component";

import { useAuth } from "../../hooks";

import { BOOK_CARD_DATA } from "../../components/book-card/book-card-data";

import {
  HomePageContainer,
  NavBar,
  WelcomeContainer,
  ContentContainer,
  PaginationContainer,
  LogOutButton,
} from "./home-page.styles";

const HomePage = () => {
  const { data } = BOOK_CARD_DATA;
  const { auth, signOut } = useAuth();

  const getFirstName = () => {
    const indexName = auth.name.indexOf(" ");
    return indexName === -1 ? auth.name : auth.name.substr(0, indexName);
  };

  return (
    <HomePageContainer>
      <NavBar>
        <Logo fill="black" />
        <WelcomeContainer>
          Bem vindo, <b>{getFirstName()}</b>
          <LogOutButton>
            <LogOutIcon onClick={signOut} />
          </LogOutButton>
        </WelcomeContainer>
      </NavBar>

      <ContentContainer>
        {data.map((bookData) => (
          <BookCard key={bookData.id} bookData={bookData} />
        ))}
      </ContentContainer>

      <PaginationContainer>
        <div>
          Página <b>1</b> de <b>100</b>
        </div>
        <PreviousPageButton stroke-opacity="0.4" />
        <NextPageButton />
      </PaginationContainer>

      <BookDetails></BookDetails>
    </HomePageContainer>
  );
};

export default HomePage;
