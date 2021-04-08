import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

import {
  SignInContainer,
  Form,
  Input,
  Button,
  InputContainer,
  Label,
} from "./sign-in.styles";

const SignIn = () => {
  const [auth, setAuth] = useState({
    birthdate: "",
    email: "",
    gender: "",
    id: "",
    name: "",
  });
  const [headers, setHeaders] = useState({
    authorization: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    console.log(data);

    setLoading(true);

    axios
      .post("https://books.ioasys.com.br/api/v1/auth/sign-in", data)
      .then((response) => {
        //console.log(response);
        setAuth(response.data);
        setLoading(false);
      })
      .catch((error) => {
        //console.log(error);
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
    </SignInContainer>
  );
};

export default SignIn;
