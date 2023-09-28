import React from "react";
import { Label, Input } from "./input.styles";

const InputField = (props) => {
  const { handleChange, label, name, type, value } = props;
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        onChange={handleChange}
        value={value}
        name={name}
        required
      />
    </>
  );
};

export default InputField;
