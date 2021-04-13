import styled from "styled-components";

export const BookImageContainer = styled.div`
  border: 1px solid purple;

  filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
`;

export const BookImage = styled.img`
  border: 1px solid green;
  width: 100%;
  filter: drop-shadow(0px 12px 18px rgba(0, 0, 0, 0.3));
`;

export const BookInfoContainer = styled.div`
  display: inline-block;
  width: 60%;
  height: 100%;
  margin-left: 20px;

  overflow: auto;
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

export const InfoTitle = styled.h1`
  font-weight: bold;
  font-size: 12px;
  line-height: 28px;

  text-transform: uppercase;

  color: #333333;
`;

export const BookInfoSubContainer = styled.div`
  display: flex;
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

export const ReviewTitle = styled.h1`
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
  color: #333333;
`;

export const BookDescriptionContainer = styled.div`
  font-size: 12px;
  line-height: 20px;
  color: #999999;
`;
