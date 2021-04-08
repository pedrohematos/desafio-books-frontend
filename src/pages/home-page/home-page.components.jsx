import React from "react";
import { Link } from "react-router-dom";

import { HomePageContainer } from "./home-page.styles";

const HomePage = () => {
  return (
    <HomePageContainer>
      <div>LOGIN COM SUCESSO</div>
      <Link to="/">Ir para página de Login</Link>
    </HomePageContainer>
  );
};

export default HomePage;
