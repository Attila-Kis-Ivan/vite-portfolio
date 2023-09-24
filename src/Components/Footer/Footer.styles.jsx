import styled from "styled-components";
import { Devices } from "../../Components/MediaQuery";

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1em;
  font-family: "Montserrat";
  margin-top: 2em;

  @media ${Devices.md} {
    margin-top: 2em;
  }
`;
export const FooterItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin-bottom: 4em;
  color: #b127e8;
  font-family: "Montserrat";
  font-size: 0.3em;
  font-weight: 100;
  letter-spacing: 1px;

  @media ${Devices.md} {
    font-size: 0.2em;
    font-weight: 100;
  }
`;

export const FooterCopyright = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 3em;
  margin-right: 3em;
`;
