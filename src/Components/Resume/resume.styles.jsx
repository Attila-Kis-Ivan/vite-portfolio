import styled from "styled-components";
import { Devices } from "../../Components/MediaQuery";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5em 1em 1em 1em;
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ResumeContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5em;
  width: 40vw;
  height: auto;
  @media ${Devices.md} {
    width: 80vw;
  } */
`;

export const Image = styled.img`
  /* width: inherit;
  height: inherit; */
`;
