import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as LoginErrorMessage } from "../../assets/icons/login-error-message.svg";
import Spinner from "../spinner/spinner.component";

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
  const [auth, setAuth] = useState({
    birthdate: "",
    email: "",
    gender: "",
    id: "",
    name: "",
  });

  // const [headers, setHeaders] = useState({
  //   authorization: "",
  // });

  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    setLoading(true);

    axios
      .post("https://books.ioasys.com.br/api/v1/auth/sign-in", formData)
      .then((response) => {
        setAuth(response.data);
        setAuthError(false);
        setLoading(false);
      })
      .catch((error) => {
        setAuthError(true);
        setLoading(false);
      });

    // axios
    //   .get("https://books.ioasys.com.br/api/v1/books", {headers: authorization})
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
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
        </InputContainer>
        <Button>Entrar</Button>
      </Form>

      {loading && <Spinner />}
      {authError && !loading && <LoginErrorMessage />}
    </SignInContainer>
  );
};

export default SignIn;
