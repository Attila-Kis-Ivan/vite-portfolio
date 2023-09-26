import React from "react";

import {
  CardContainer,
  SkillsContainer,
  Container,
  ImageHolder,
  TitleContainer,
} from "./Tools.styles";

import {
  SiVisualstudiocode,
  SiPostman,
  SiDiscord,
  SiSlack,
  SiMacos,
} from "react-icons/si";

export const skills = [
  {
    id: 1,
    title: "MacOS",
    image: <SiMacos id="1" />,
  },
  {
    id: 2,
    title: "VS Code",
    image: <SiVisualstudiocode />,
  },
  {
    id: 3,
    title: "Postman",
    image: <SiPostman />,
  },
  {
    id: 4,
    title: "Discord",
    image: <SiDiscord />,
  },
  {
    id: 5,
    title: "Slack",
    image: <SiSlack />,
  },
];

const Tools = () => {
  return (
    <Container>
      {skills.map((item) => (
        <SkillsContainer key={item.id}>
          <CardContainer>
            <ImageHolder> {item.image}</ImageHolder>
            <TitleContainer>{item.title}</TitleContainer>
          </CardContainer>
        </SkillsContainer>
      ))}
    </Container>
  );
};
export default Tools;
