import styled from "styled-components";
import { Devices } from "../../Components/MediaQuery";

export const ContactSection = styled.section`
  min-height: 100vh;
  padding: 2em;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${Devices.md} {
    font-weight: 400;
    font-size: 0.8em;
  }
`;

export const Container = styled.div`
  background: #fff;
  padding: 2.5em;
  border-radius: 10px;
  box-shadow: 0 0 2em rgba(0, 0, 0, 0.3);
`;

export const Heading = styled.h1`
  font-size: 2.5em;
`;

export const Text = styled.p`
  max-width: 400px;
  line-height: 27px;
  color: #a0a0a0;
  margin: 1em 0 2em 0;
`;

export const ContactForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const Input = styled.input`
  border: none;
  padding: 0.8em;
  width: 100%;
  border-radius: 5px;
  margin: 0.5em 0 1em 0;
  font-size: 1.1em;
  background: #eee;

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: #bababa;
  }
`;

export const TextArea = styled.textarea`
  border: none;
  padding: 0.8em;
  width: 100%;
  border-radius: 5px;
  margin: 0.5em 0 1em 0;
  font-size: 1.1em;
  background: #eee;
  resize: none;
  height: 8em;
  font-family: "Montserrat";
  &:focus {
    outline: none;
  }

  ::placeholder {
    color: #bababa;
  }
`;

export const Label = styled.label`
  color: #a0a0a0;
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  width: 100%;
  padding: 0.8em;
  background-color: #ff742e;
  border-radius: 8px;
  font-size: 1.2em;
  transition: 0.3s;

  &:hover {
    background-color: #e16628;
  }
`;
