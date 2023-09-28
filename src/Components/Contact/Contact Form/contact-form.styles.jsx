import styled from "styled-components";
import { Devices } from "../../../Components/MediaQuery";

export const ContactSection = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2em;
`;

export const FormHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40vw;
  height: auto;

  @media ${Devices.md} {
    width: 80%;
  }
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 1em;

  @media ${Devices.md} {
    width: 80%;
  }
`;
export const Heading = styled.h1`
  font-family: "Montserrat";
  text-align: center;
  color: #b127e8;
  font-size: 2.5em;
  font-weight: 400;
  letter-spacing: 2px;
  @media ${Devices.md} {
    font-size: 1.8em;
  }
`;

export const Text = styled.p`
  max-width: 400px;
  line-height: 27px;
  font-family: "Montserrat";
  font-size: 1em;
  letter-spacing: 2px;
  color: #fff;
  margin: 1em 0 2em 0;
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  width: 100%;
  padding: 0.8em;
  margin-top: 1em;
  background-color: #000;
  border-radius: 10px;
  border: 2px solid #b127e8;
  border-radius: 10px;
  border: 2px solid #b127e8;
  border-radius: 8px;
  font-size: 1.2em;
  color: #fff;
  transition: 0.3s;
  letter-spacing: 2px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    box-shadow: 0px 0px 10px 5px #b127e8;
  }
`;

export const Alert = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50;
  right: 50;
  width: 12em;
  height: 12em;
  background-color: #000;
  font-size: 1em;
  letter-spacing: 2px;
  text-align: center;
  color: #fff;
  border-radius: 15px;
  box-shadow: 0px 0px 20px 10px #b127e8;
`;

export const AlertContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12em;
  height: 12em;
`;

export const TextAlert = styled.p`
  max-width: 400px;
  line-height: 27px;
  font-family: "Montserrat";
  font-size: 1em;
  letter-spacing: 2px;
  color: #fff;
  margin: 3em 0 2em 0;
`;
