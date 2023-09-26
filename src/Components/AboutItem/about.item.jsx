import { React, useEffect } from "react";
// import Skills from "../../Components/Skills/Skills";
// import Tools from "../../Components/Tools/Tools";
import about from "../../assets/images/about.png";
import {
  AboutSection,
  AboutContainer,
  AboutTextContainer,
  AboutPictureContainer,
  AboutImage,
  HeaderText,
  Introduce,
  Purple,
  SkillsPurple,
  ToolsPurple,
  ToolsWhite,
  PContainer,
  Paragraph,
} from "./about.styles";

const AboutItem = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <AboutSection>
      <AboutContainer>
        <AboutTextContainer>
          <HeaderText>
            <Introduce>
              Let Me <Purple>Introduce</Purple> Myself
            </Introduce>
          </HeaderText>
          <PContainer>
            <Paragraph>
              Hi everyone, I'm <Purple>Attila Kis-Ivan</Purple> a self-taught
              web developer with degree of{" "}
              <Purple>MSc Engineering Management</Purple> from London UK. I fell
              in love with programming in 2020. Currently I'm developing
              products with <Purple>Ract</Purple> and
              <Purple>React-Native</Purple>. I'm interested in AI so Python and
              PyTorch are on the way 😊.
            </Paragraph>
          </PContainer>
        </AboutTextContainer>
        <AboutPictureContainer>
          <AboutImage src={about} alt="about" />
        </AboutPictureContainer>
      </AboutContainer>
      {/* <SkillsPurple>Skillset</SkillsPurple>
      <Skills />
      <ToolsPurple>
        Tools <ToolsWhite>I use</ToolsWhite>
      </ToolsPurple>
      <Tools /> */}
    </AboutSection>
  );
};

export default AboutItem;
