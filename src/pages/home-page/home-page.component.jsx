import React from "react";

import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as LogOutButton } from "../../assets/icons/logout.svg";
import { ReactComponent as PreviousPageButton } from "../../assets/icons/previous-page-button.svg";
import { ReactComponent as NextPageButton } from "../../assets/icons/next-page-button.svg";

import {
  HomePageContainer,
  NavBar,
  WelcomeContainer,
  ContentContainer,
  PaginationContainer,
} from "./home-page.styles";

const HomePage = () => {
  return (
    <HomePageContainer>
      <NavBar>
        <Logo fill="black" />
        <WelcomeContainer>
          Bem vindo, <b>Pedro!</b>
          <LogOutButton />
        </WelcomeContainer>
      </NavBar>

      <ContentContainer>Aqui ficam os livros!</ContentContainer>

      <PaginationContainer>
        <div>
          Página <b>1</b> de <b>100</b>
        </div>
        <PreviousPageButton stroke-opacity="0.4" />
        <NextPageButton />
      </PaginationContainer>
    </HomePageContainer>
  );
};

export default HomePage;
