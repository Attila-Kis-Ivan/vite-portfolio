import styled from "styled-components";
import { Devices } from "../../Components/MediaQuery";

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: auto;
  background-color: #000;
  color: #fff;

  @media ${Devices.md} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const AboutContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  margin-bottom: 9em;
  @media ${Devices.md} {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    height: auto;
    margin: 1em;
  }
`;

export const AboutTextContainer = styled.div`
  width: 50%;
  margin: 2em;

  @media ${Devices.md} {
    width: 80vw;
    text-align: center;
    height: auto;
  }
`;

export const AboutPictureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30em;
  height: auto;
  margin-top: 10em;

  @media ${Devices.md} {
    width: 18em;
    height: auto;
    margin-top: 5em;
    margin-bottom: 8em;
  }
`;
export const AboutImage = styled.img`
  width: 90%;
  height: 100%;

  @media ${Devices.md} {
    width: 100%;
    height: 100%;
  }
`;

export const HeaderText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 5em;
  margin-bottom: 2em;

  @media ${Devices.md} {
    margin-top: 4em;
    width: 90%;
  }
`;

export const Introduce = styled.h1`
  font-size: 2.5em;
  font-family: "Montserrat";
  font-weight: 400;
  letter-spacing: 3px;
  line-height: 1.5;
  margin-top: 1.5em;

  @media ${Devices.md} {
    font-size: 1.6em;
    width: 100%;
  }
`;
export const Purple = styled.span`
  color: #b127e8;
  font-weight: 400;
`;
export const SkillsPurple = styled.h1`
  color: #b127e8;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 2.5em;

  @media ${Devices.md} {
    font-size: 2em;
  }
`;
export const ToolsPurple = styled.h1`
  color: #b127e8;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 2.5em;
  margin-top: 2em;
  letter-spacing: 2px;
  @media ${Devices.md} {
    font-size: 1.4em;
  }
`;
export const ToolsWhite = styled.span`
  color: #fff;
  font-family: "Montserrat";
  font-weight: 400;
`;

export const PContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin-top: 1em;

  @media ${Devices.md} {
    width: 100%;
  }
`;
export const Paragraph = styled.p`
  justify-content: center;
  font-family: "Montserrat";
  font-weight: 300;
  font-size: 1.4em;
  letter-spacing: 0.2em;
  line-height: 1.5em;

  @media ${Devices.md} {
    width: 100vw;
    font-size: 1.2em;
  }
`;
