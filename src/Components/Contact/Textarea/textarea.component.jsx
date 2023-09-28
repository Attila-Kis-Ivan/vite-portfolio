import React from "react";
import { TextArea, Label } from "./textarea.styles";

const TextField = (props) => {
  const { handleChange, label, name, value } = props;
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <TextArea
        onChange={handleChange}
        name={name}
        rows="4"
        value={value}
      ></TextArea>
    </>
  );
};

export default TextField;
