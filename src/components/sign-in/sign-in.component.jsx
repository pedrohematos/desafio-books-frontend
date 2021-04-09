import React from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";

import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as LoginErrorMessage } from "../../assets/icons/login-error-message.svg";
import Spinner from "../spinner/spinner.component";

import { useAuth } from "../../hooks";

import {
  SignInContainer,
  Form,
  Input,
  Button,
  InputContainer,
  Label,
  ErrorMessage,
} from "./sign-in.styles";

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const { auth, signed, signIn, loading, setLoading, authError } = useAuth();

  const onSubmit = async (formData) => {
    setLoading(true);
    await signIn(formData);
  };

  return (
    <>
      {signed ? (
        <Redirect to="/home" />
      ) : (
        <SignInContainer>
          <Logo fill="white" />

          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
              <Label>Email</Label>
              <Input type="email" required {...register("email")} />
            </InputContainer>

            <InputContainer>
              <Label>Senha</Label>
              <Input type="password" required {...register("password")} />
              <Button>Entrar</Button>
            </InputContainer>
          </Form>

          {loading && <Spinner />}
          {authError && !loading && <LoginErrorMessage />}
        </SignInContainer>
      )}
    </>
  );
};

export default SignIn;
