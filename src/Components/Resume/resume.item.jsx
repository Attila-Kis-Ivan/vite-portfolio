import { useEffect } from "react";
import DownloadButton from "../../Components/Download-Button/Button.component";
import resume from "../../assets/CV/Attila Kis-Ivan CV.pdf";
import { Container, ResumeContainer, Section } from "./resume.styles";

const ResumeItem = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <Container>
      <Section>
        <DownloadButton />
        <ResumeContainer>
          <img src={resume} alt="resume" />
        </ResumeContainer>
      </Section>
    </Container>
  );
};

export default ResumeItem;
