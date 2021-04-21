import styled from "styled-components";

import BackgroundImage from "../../assets/images/home-page-background2x.png";

export const HomePageContainer = styled.div`
  padding: 115px;
  padding-top: 40px;

  // The image used
  background-image: url(${BackgroundImage});

  // Full height
  height: 100%;

  // Center and scale the image nicely
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 870px) {
    padding: 16px;
    background-image: none;
    background-color: #f6f4ef;
  }
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WelcomeContainer = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 600px) {
    width: 40px;
  }
`;

export const WelcomeMessage = styled.div`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
