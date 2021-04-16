import styled from "styled-components";

export const ContentContainer = styled.div`
  max-width: 1550px;

  ${({ loadingBooks, booksError }) =>
    (loadingBooks || booksError) &&
    `
    height: 75vh;
  `}

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  margin: 42px auto 24px auto;
`;
