import styled from "styled-components";

export const SignInContainer = styled.div`
  margin-top: 30vh;
  width: 368px;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 80vw;
    padding: 15px;
  }
`;

export const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const InputContainer = styled.div`
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
  position: absolute;
  right: 0px;
  top: 15px;

  width: 100px;
  height: 43px;

  background-color: #ffffff;
  border-radius: 44px;
  border: none;

  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #b22e6f;

  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: white;
  font-weight: bold;
`;
