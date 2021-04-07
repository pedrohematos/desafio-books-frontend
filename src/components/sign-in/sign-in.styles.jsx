import styled from "styled-components";

export const StyledSignInContainer = styled.div`
  border: 1px solid black;
  margin-top: 33vh;
  width: 368px;
  height: 260px;

  position: relative;
  display: flex;
  flex-direction: column;
`;

export const StyledForm = styled.form`
  margin-top: 50px;

  //display: flex;
  //align-items: center;
  //justify-content: center;
`;

export const StyledButton = styled.button`
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: #666666;
  font-size: 15px;
  font-weight: bold;
  padding: 5px 10px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;
  margin-left: 5px;
  //
  width: 100px;
  height: 30px;
`;
