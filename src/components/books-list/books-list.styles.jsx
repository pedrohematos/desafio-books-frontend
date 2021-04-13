import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;

  ${({ loadingBooks, booksError }) =>
    (loadingBooks || booksError) &&
    `
    height: 75vh;
  `}

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  margin-top: 42px;
  margin-bottom: 24px;
`;
