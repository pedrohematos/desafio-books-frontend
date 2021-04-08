import React from "react";

import { LoginPageContainer } from "./login-page.styles";

import SignIn from "../../components/sign-in/sign-in.component";

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <SignIn />
    </LoginPageContainer>
  );
};

export default LoginPage;
