import styled from "styled-components";
import { Devices } from "../../Components/MediaQuery";

export const FlipCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-between;
  justify-content: center;
  text-align: center;
  width: 100vw;
  margin-top: 3em;
  margin-left: 5em;
  margin-right: 5em;
  width: 15em;
  height: 20.25em;

  margin-top: 3.5rem;
  margin-bottom: 10em;

  @media ${Devices.md} {
    width: 11em;
    height: 16.25em;
  }
`;

export const FlipCardInner = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 1.5s;
  transform-style: preserve-3d;
  cursor: pointer;

  &:hover {
    transform: rotateY(180deg);
  }
`;

export const FlipCardFront = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  position: absolute;
  width: 90%;
  height: 90%;
  backface-visibility: hidden;
  border-radius: 15px;
`;
export const FlipcardFrontBackground = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #000;
  border-radius: 15px;
  box-shadow: 0px 0px 20px 10px #b127e8;
`;

export const CoverImg = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 15px;
  border: none;
  padding-top: 45px;
`;

export const FlipCardBack = styled.div`
  background: #2a2828;
  color: #fff;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 24px;
  padding: 0px 18px;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 15px;
  box-shadow: 0px 0px 20px 10px #b127e8;
`;

export const Heading = styled.h2`
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 1.1em;
  color: #b127e8;

  @media ${Devices.md} {
    font-weight: 400;
    font-size: 0.8;
  }
`;
export const Paragraph = styled.p`
  font-family: "Montserrat";
  font-weight: 300;
  font-size: 1em;
  line-height: 1.5;

  @media ${Devices.md} {
    font-weight: 300;
    font-size: 0.6em;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
  text-align: center;
  width: 100vw;
  height: 2.5em;
  margin-top: 3em;
`;

export const ButtonHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 2.5rem;
  width: 40%;
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
    height: 2rem;
    width: 40%;
  }
`;

export const Btn = styled.a`
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 1rem;
  border: none;
  text-decoration: none;
  border: none;
  @media ${Devices.md} {
    font-weight: 400;
    font-size: 0.8rem;
  }
`;

export const BtnTetx = styled.span`
  margin-left: 0.5em;
`;

export const TitleContainer = styled.div`
  margin: 1.2em 0em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2em;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 1.3em;
  color: #b127e8;
  margin-bottom: 1em;
  @media ${Devices.md} {
    font-weight: 400;
    font-size: 1.2em;
  }
`;
