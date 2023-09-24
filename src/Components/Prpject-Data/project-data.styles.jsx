import styled from "styled-components";
import { Devices } from "../MediaQuery";

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
  margin-bottom: 15em;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 6em;
`;
export const Heading = styled.h1`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 3em;
  letter-spacing: 0.3em;
  color: #fff;
  margin-bottom: 1em;

  @media ${Devices.md} {
    font-weight: 400;
    font-size: 2em;
  }
`;
