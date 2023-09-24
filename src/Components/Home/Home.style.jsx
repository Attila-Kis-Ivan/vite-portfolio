import styled, { keyframes } from "styled-components";
import { Devices } from "../../Components/MediaQuery";

export const HomeSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 80%;
  font-size: 3rem;
  background-color: #000;
  color: #fff;
`;

export const HomeContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  color: whitesmoke;
  text-align: left;
  width: 100vw;
  height: 80%;
  margin: 1em;
  margin-top: 1.5em;
  margin-bottom: 2em;

  @media ${Devices.md} {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
    margin-bottom: 1em;
  }
`;

export const HeaderTextContainer = styled.div`
  width: 50%;
  height: 100%;

  @media ${Devices.md} {
    width: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
    width: 100%;
  }
`;

export const HeaderText = styled.h1`
  font-family: "Montserrat";
  font-size: 1.2em;
  font-weight: 300;
  margin-top: 1em;

  @media ${Devices.md} {
    font-size: 0.9em;
  }
`;

export const Im = styled.span`
  font-family: "Montserrat";
  font-size: 0.9em;
  font-weight: 200;

  @media ${Devices.md} {
    font-size: 0.5em;
  }
`;

export const MainName = styled.span`
  font-family: "Montserrat";
  font-size: 1em;
  font-weight: 300;
  color: #b127e8;
  @media ${Devices.md} {
    font-size: 0.5em;
  }
`;

export const NameContainer = styled.h1`
  margin-top: 0.8em;
  @media ${Devices.md} {
    padding-top: 1em;
    margin: 0.2em;
  }
`;

export const TypeWriterContainer = styled.div`
  margin-top: 1em;
  color: #b127e8;
  font-size: 0.8em;
  color: #b127e8;
  font-weight: 400;
  @media ${Devices.md} {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #b127e8;
    font-weight: 300;
    font-size: 0.5em;
  }
`;

export const HeroImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
  margin-top: 2em;

  @media ${Devices.md} {
    margin: 2em;
    width: 100%;
    height: 50%;
  }
`;
export const HeroImage = styled.img`
  width: 100%;
  @media ${Devices.md} {
    width: 5em;
    height: 50%;
  }
`;
export const Greeting = styled.span`
  padding-left: 0.5em;
  animation-name: GreetingAnimation;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
  @keyframes GreetingAnimation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @media ${Devices.md} {
    font-size: 0.8em;
  }
`;

const KeyfameAnimation = () => {
  return <Greeting></Greeting>;
};

export default KeyfameAnimation;

export const GreetingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;
