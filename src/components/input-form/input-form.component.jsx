import React from "react";

import { StyledInput } from "./input-form.styles";

const InputForm = ({ name, title, register, ...props }) => {
  return (
    <StyledInput name={name} placeholder={title} ref={register} {...props} />
  );
};

export default InputForm;
