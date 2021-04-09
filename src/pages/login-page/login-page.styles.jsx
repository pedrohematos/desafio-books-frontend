import styled from "styled-components";

import BackgroundImage from "../../assets/images/login-page-background2x.png";

export const LoginPageContainer = styled.div`
  //Lateral padding
  padding: 115px;
  padding-right: 115px;

  // The image used
  background-image: url(${BackgroundImage});

  // Full height
  height: 100vh;

  // Center and scale the image nicely
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 800px) {
    padding: 16px;
    padding-right: 16px;
  }
`;
