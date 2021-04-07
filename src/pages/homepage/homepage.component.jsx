import React from "react";

import { StyledHomePageContainer } from "./homepage.styles";

import SignIn from "../../components/sign-in/sign-in.component";

const HomePage = () => {
  //throw Error; //uncheck to test error boundary.
  return (
    <StyledHomePageContainer>
      <SignIn buttonTitle="Entrar"></SignIn>
    </StyledHomePageContainer>
  );
};

export default HomePage;
