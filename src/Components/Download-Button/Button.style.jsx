import styled from "styled-components";
import { Devices } from "../../Components/MediaQuery";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2.5em;
  margin-bottom: 4em;
  margin-top: 2em;
`;

export const ButtonHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 0.8em;
  width: 60%;
  font-size: 3.25em;
  color: #f2f2f2;
  margin: auto;
  border-radius: 10px;
  border: 2px solid #b127e8;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    box-shadow: 0px 0px 10px 5px #b127e8;
  }

  @media ${Devices.md} {
    /* height: 0.8; */
    width: 90%;
  }
`;

export const Btn = styled.a`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 1rem;
  border: none;
  text-decoration: none;
  border: none;
`;

export const BtnTetx = styled.span`
  margin-left: 2em;

  @media ${Devices.md} {
    font-size: 0.8rem;
  }
`;
