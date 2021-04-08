import React from "react";

import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as LogOutButton } from "../../assets/icons/logout.svg";

import {
  HomePageContainer,
  NavBar,
  WelcomeContainer,
  WelcomeList,
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
    </HomePageContainer>
  );
};

export default HomePage;
