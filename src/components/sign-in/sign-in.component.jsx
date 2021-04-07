import React from "react";

import { useForm } from "react-hook-form";

import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

import InputForm from "../input-form/input-form.component";

import {
  StyledSignInContainer,
  StyledForm,
  StyledButton,
} from "./sign-in.styles";

const SignIn = ({ buttonTitle, onSubmit, ...props }) => {
  const { register, handleSubmit } = useForm();

  return (
    <StyledSignInContainer>
      <Logo fill="white" />
      <StyledForm>
        <InputForm name="Email" placeholder="Email" ref={register} {...props} />
        <InputForm
          name="Password"
          placeholder="Senha"
          ref={register}
          {...props}
        />
        <StyledButton>{buttonTitle}</StyledButton>
      </StyledForm>
    </StyledSignInContainer>
  );
};

export default SignIn;
