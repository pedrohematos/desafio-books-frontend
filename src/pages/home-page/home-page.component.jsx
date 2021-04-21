import React, { useState } from "react";

import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as LogOutIcon } from "../../assets/icons/logout.svg";

import BookList from "../../components/books-list/books-list.component";
import BooksPagination from "../../components/books-pagination/books-pagination.component";

import { useAuth } from "../../hooks";

import {
  HomePageContainer,
  NavBar,
  WelcomeContainer,
  WelcomeMessage,
} from "./home-page.styles";
import { BookProvider } from "../../contexts/book";

const HomePage = () => {
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
          <WelcomeMessage>
            Bem vindo, <b>{getFirstName()}</b>
          </WelcomeMessage>
          <LogOutIcon onClick={signOut} style={{ cursor: "pointer" }} />
        </WelcomeContainer>
      </NavBar>

      <BookProvider>
        <BookList />
        <BooksPagination />
      </BookProvider>
    </HomePageContainer>
  );
};

export default HomePage;
