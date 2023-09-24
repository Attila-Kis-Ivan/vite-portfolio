import { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendendContainer,
  NavbarLinkContainer,
  NavbarLink,
  NavbarLinkExtended,
  Icon,
  OpenLinksButton,
  SocialIcon,
} from "./navbaritem.styles";
import LinkedImage from "../../assets/images/inkedI-purple.svg";
import GithubImage from "../../assets/images/github-purple.svg";

const Navbar = () => {
  const [extendnavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendnavbar={extendnavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink
              lassName={({ isActive }) => (isActive ? " active" : "")}
              to="/"
            >
              Home
            </NavbarLink>
            <NavbarLink to="/about">About</NavbarLink>
            <NavbarLink to="/projects ">Projects</NavbarLink>
            <NavbarLink to="/resume">Resume</NavbarLink>
            <NavbarLink to="/contact">Contact</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((value) => !value);
              }}
            >
              {extendnavbar ? <> &#10005;</> : <> &#9776; </>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <>
            <SocialIcon
              href="https://github.com/Attila-Kis-Ivan"
              target="_blank"
              rel="noreferrer"
            >
              <Icon src={GithubImage} alt="LinkedIn"></Icon>
            </SocialIcon>
          </>
          <>
            <SocialIcon
              href="https://www.linkedin.com/in/attila-kis-ivan-68a67bb3/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon src={LinkedImage} alt="LinkedIn"></Icon>
            </SocialIcon>
          </>
        </RightContainer>
      </NavbarInnerContainer>
      {extendnavbar && (
        <NavbarExtendendContainer>
          <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/about">About</NavbarLinkExtended>
          <NavbarLinkExtended to="/projects ">Projects</NavbarLinkExtended>
          <NavbarLinkExtended to="/resume">Resume</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact">Contact</NavbarLinkExtended>
        </NavbarExtendendContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
