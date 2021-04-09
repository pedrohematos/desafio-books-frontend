import styled from "styled-components";

export const ModalContainer = styled.div`
  border: 1px solid red;

  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 60%;
  height: 60%;

  color: black;
  background-color: white;
  box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.32);
  border-radius: 4px;

  /* @media screen and (max-width: 870px) {
    width: 100%;
    margin: 0px;
    margin-bottom: 16px;
  } */
`;

export const CloseButtonContainer = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: flex-end;
`;

export const BookImageContainer = styled.div`
  height: 100%;
  filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
  border: 1px solid blue;
`;
export const BookImage = styled.img`
  max-height: 100%;
`;

export const BookInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 15px;

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
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #999999;

  margin: 0px;
  position: absolute;
  bottom: 0;
`;
