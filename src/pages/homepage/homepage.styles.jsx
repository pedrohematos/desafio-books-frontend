import styled from "styled-components";

import BackgroundImage from "../../assets/images/homepage-background2x.png";

export const StyledHomePageContainer = styled.div`
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
`;
