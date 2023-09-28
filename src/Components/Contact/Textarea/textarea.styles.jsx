import styled from "styled-components";

export const TextArea = styled.textarea`
  border: none;
  padding: 0.8em;
  width: 100%;
  border-radius: 5px;
  margin: 0.5em 0 1em 0;
  font-size: 0.9em;
  background: #eee;
  resize: none;
  height: 8em;
  letter-spacing: 2px;
  font-family: "Montserrat";
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
  color: #fff;
  letter-spacing: 2px;
`;
