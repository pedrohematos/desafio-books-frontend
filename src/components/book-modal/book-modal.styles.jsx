import React from "react";
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

  @media screen and (max-width: 940px) {
    align-items: flex-start;
    padding-top: 80px;
    height: 500vh;
  }
`;

export const ContentContainer = styled.div`
  width: 50%;
  height: 55%;

  color: black;
  background-color: white;
  box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.32);
  border-radius: 4px;

  padding: 40px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  @media screen and (max-width: 940px) {
    width: 82%;
    flex-wrap: wrap;
    height: auto;
    padding: 24px;
  }
`;
