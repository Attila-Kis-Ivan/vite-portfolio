import React from "react";
import { BsDownload } from "react-icons/bs";
import CV from "../../assets/CV/Attila Kis-Ivan CV.pdf";
import { Container, ButtonHolder, Btn, BtnTetx } from "./Button.style";

const DownloadButton = () => {
  return (
    <Container>
      <ButtonHolder>
        <Btn
          href={CV}
          download="Attila Kis-Ivan Resume"
          target="_blank"
          rel="noreferrer"
        >
          <BsDownload />
          <BtnTetx>Download Resume</BtnTetx>
        </Btn>
      </ButtonHolder>
    </Container>
  );
};

export default DownloadButton;
