import styled from "styled-components";

export const Input = styled.input`
  border: none;
  padding: 0.8em;
  width: 100%;
  border-radius: 5px;
  margin: 0.5em 0 1em 0;
  font-size: 1.1em;
  font-family: "Montserrat";
  letter-spacing: 2px;
  color: #000;
  background: #eee;

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: #bababa;
  }
`;

export const Label = styled.label`
  font-family: "Montserrat";
  font-size: 0.8em;
  letter-spacing: 2px;
  color: #fff;
`;
