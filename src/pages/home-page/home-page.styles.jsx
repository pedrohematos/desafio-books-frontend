import styled from "styled-components";

import BackgroundImage from "../../assets/images/home-page-background2x.png";

export const HomePageContainer = styled.div`
  //Lateral padding
  padding: 115px;
  padding-right: 115px;
  padding-top: 42px;

  // The image used
  background-image: url(${BackgroundImage});

  // Full height
  height: 100vh;

  // Center and scale the image nicely
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
`;

export const ContentContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  margin-top: 42px;
  margin-bottom: 24px;
`;

export const PaginationContainer = styled.div`
  float: right;
  width: 190px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 16px;
`;

export const LogOutButton = styled.button`
  border: 0;
  background: none;
  cursor: pointer;
`;
