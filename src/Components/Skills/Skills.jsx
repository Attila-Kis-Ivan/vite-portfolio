import React from "react";

import {
  CardContainer,
  SkillsContainer,
  Container,
  ImageHolder,
  TitleContainer,
} from "./Skills.styles";
import {
  DiJavascript1,
  DiHtml5,
  DiReact,
  DiCss3,
  DiNodejsSmall,
} from "react-icons/di";
import { SiStyledcomponents } from "react-icons/si";
import { ImGit } from "react-icons/im";
import { FaGithub } from "react-icons/fa";

export const skills = [
  {
    id: 1,
    title: "JavaScript",
    image: <DiJavascript1 id="1" />,
  },
  {
    id: 2,
    title: "HTML5",
    image: <DiHtml5 />,
  },
  {
    id: 3,
    title: "CSS",
    image: <DiCss3 />,
  },
  {
    id: 4,
    title: "React",
    image: <DiReact />,
  },
  {
    id: 5,
    title: "React-Native",
    image: <DiReact />,
  },
  {
    id: 6,
    title: "Styled-Components",
    image: <SiStyledcomponents />,
  },
  {
    id: 7,
    title: "Node JS",
    image: <DiNodejsSmall />,
  },
  {
    id: 8,
    title: "Git",
    image: <ImGit />,
  },
  {
    id: 9,
    title: "GitHub",
    image: <FaGithub />,
  },
];

const Skills = () => {
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
export default Skills;
