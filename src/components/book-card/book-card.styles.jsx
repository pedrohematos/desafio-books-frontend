import styled from "styled-components";

export const BookCardContainer = styled.div`
  width: 272px;
  height: 140px;
  padding: 19px 16px;
  margin: 8px;

  background-color: white;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;

  display: flex;
  justify-content: space-between;
`;

export const BookImageContainer = styled.div`
  //border: 1px solid red;
  height: 100%;
  filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
`;

export const BookImage = styled.img`
  max-height: 100%;
`;

export const BookInfoContainer = styled.div`
  //border: 1px solid blue;

  width: 150px;
  height: 100%;

  position: relative;
`;

export const BookTitle = styled.h1`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #333333;
  margin: 0px;
`;

export const BookAuthors = styled.h2`
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #ab2680;
  margin: 0px;
`;

export const BookInfo = styled.p`
  font-family: Heebo;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #999999;

  margin: 0px;
  position: absolute;
  bottom: 0;
`;
