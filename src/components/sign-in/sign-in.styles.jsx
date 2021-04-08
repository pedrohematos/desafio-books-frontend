import styled from "styled-components";

export const SignInContainer = styled.div`
  margin-top: 30vh;
  width: 368px;

  display: flex;
  flex-direction: column;

  //border: 1px solid black;

  /* @media screen and (max-width: 800px) {
    width: 100%;
    padding: 15px;
  } */
`;

export const Form = styled.form`
  margin-top: 50px;
  //border: 1px solid white;

  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const InputContainer = styled.div`
  //border: solid 1px red;
  position: relative;
`;

export const Input = styled.input`
  border: none;
  outline: none;

  width: 100%;
  height: 40px;

  padding: 23px 0 10px;
  padding-left: 16px;
  margin-bottom: 16px;

  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.32);

  font-size: 16px;
  color: white;
`;

export const Label = styled.label`
  position: absolute;

  font-size: 16px;
  color: white;

  padding-left: 16px;
  padding-top: 5px;
`;

export const Button = styled.button`
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
  //margin-left: 5px;
  //
  width: 100px;
  height: 30px;
`;
