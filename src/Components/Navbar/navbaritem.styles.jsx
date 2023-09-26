import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Devices } from "../MediaQuery";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineFilePdf,
  AiOutlineMail,
} from "react-icons/ai";

export const AiOutlineHomeicn = styled(AiOutlineHome)`
  font-size: 1em;
  margin-right: 0.5em;
  margin-bottom: -0.1em;
`;
export const AiOutlineFundProjectionScreenicn = styled(
  AiOutlineFundProjectionScreen
)`
  font-size: 1em;
  margin-right: 0.5em;
  margin-bottom: -0.1em;
`;

export const AiOutlineUsericn = styled(AiOutlineUser)`
  font-size: 1em;
  margin-right: 0.5em;
  margin-bottom: -0.1em;
`;
export const AiOutlineFilePdficn = styled(AiOutlineFilePdf)`
  font-size: 1em;
  margin-right: 0.5em;
  margin-bottom: -0.1em;
`;
export const AiOutlineMailicn = styled(AiOutlineMail)`
  font-size: 1em;
  margin-right: 0.5em;
  margin-bottom: -0.1em;
`;
export const NavbarContainer = styled.nav`
  width: 100vw;
  height: ${(props) => (props.extendnavbar ? "100vh" : "3em")};
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: #000;
  z-index: 9999;
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;
export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 2em;
  margin-top: 1em;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 3em;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const NavbarLink = styled(NavLink)`
  color: white;
  font-size: large;
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  margin: 1em;

  @media ${Devices.md} {
    display: none;
  }
`;

export const SocialIcon = styled.a`
  width: 1.4em;
  height: 1em;
  margin: 1em 2em 2em 0.5em;
`;

export const Icon = styled.img`
  width: 1.4em;
  height: 1.5em;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: #fff;
  font-size: 45px;
  cursor: pointer;
  height: auto;

  @media (min-width: 960px) {
    display: none;
  }

  &:hover {
    color: #b127e8;
  }
`;

export const NavbarExtendendContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 960px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(NavLink)`
  color: white;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  margin: 1em;

  &:hover {
    color: #b127e8;
  }
`;
