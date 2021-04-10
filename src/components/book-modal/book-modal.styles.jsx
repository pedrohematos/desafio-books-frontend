import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div`
  width: 60%;
  height: 60%;

  color: black;
  background-color: white;
  box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.32);
  border-radius: 4px;

  padding: 40px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const BookImageContainer = styled.div`
  height: 100%;
  filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
`;

export const BookImage = styled.img`
  height: 100%;
  filter: drop-shadow(0px 12px 18px rgba(0, 0, 0, 0.3));
`;

export const BookInfoContainer = styled.div`
  display: inline-block;
  width: 50%;
  height: 100%;
  margin-left: 15px;

  position: relative;
`;

export const BookTitle = styled.h1`
  margin: 0px;

  font-weight: 500;
  font-size: 28px;
  line-height: 40px;

  color: #333333;
`;

export const BookAuthors = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #ab2680;
  margin: 0px;
  margin-bottom: 25px;
`;

export const BookInfoSubContainer = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const LeftSubInfo = styled.div`
  width: 30%;

  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 28px;

  color: #333333;
`;
export const RightSubInfo = styled.div`
  width: 70%;

  font-size: 12px;
  line-height: 28px;

  text-align: right;

  color: #999999;
`;

export const BookDescriptionContainer = styled.div`
  border: 1px solid blue;
  display: block;
`;
