import { useEffect } from "react";
import ProjectItem from "../Project-Item/projectItem";
import {
  ProjectContainer,
  Container,
  HeadingContainer,
  Heading,
} from "./project-data.styles";
const projects = [
  {
    id: 17,
    title: "World Traveller",
    imageUrl:
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDVXLp_5qPiBT58wTlZQiUeIHse8sWMNZ6HAt4ccVKVU_lpFSOcDDxCOf0TNtgsBco490S1uWwYldAJycACgwybINmesA=s1600",
    description:
      "Used languages: Vite React JS and CSS Modules. Purpose of this project to get more familiar with Reducer and try CSS modules. Database is JSON-Server. The focus was on Reducer. It took 7 weeks to build this page.",
    language: " Vite React",
    source: "https://github.com/Attila-Kis-Ivan/World-Traveller",
    demo: "https://tdbworldtraveller.netlify.app/",
  },
  {
    id: 16,
    title: "React Quiz",
    imageUrl:
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaA9cNH_78nhNOVTOMsyqm-sZ8fTHKht51pCCVc5Q_6SSkwesTa1u7oYXV86UXXawPEEpwIkDfzTGeuVWCNsA9kn1MeH=s1600",
    description:
      "Used languages: Vite React JS and CSS. This React Quiz made in React. Purpose of this project to get more familiar with Reducer. Created with Vite React, designed in CSS. Database is JSON-Server. The focus was on Reducer. It took 3 weeks to build this page.",
    language: "Vite React",
    source: "https://github.com/Attila-Kis-Ivan/Qiuz",
    demo: "https://tdb-react-quiz.netlify.app/",
  },
  {
    id: 15,
    title: "Portfolio Page",
    imageUrl:
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaAYGRaoOIQZRBo7W0ZqOf0wWgdi94fKD0x80Gu4eNZNLbv8cOIdFgipwG1wP5XOlJahw1YTDiaCg_r535zC5RjCNOGFNg=s1600",
    description:
      "Used languages: Vite React JS, Styled-Components. Purpose of this project obviously to have a portfolio page and practicing React JS. Created with Vite React, designed in styled-components. It took 4 weeks to build this page.",
    language: "Vite React",
    source: "https://github.com/Attila-Kis-Ivan/personal-portfolio",
    demo: "https://tdb-coding.com/",
  },
  {
    id: 14,
    title: "TDB-Clothing-2.0",
    imageUrl:
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaAQUyv5vuriYIHrTZQI9lNNPjXWqhAFZoF0i3SIiBfz6YyeCLyRYG-JyY_MwOfYWHFeoruFJ9KBG1osFwWw1pjLaiZj=s1600",
    description:
      "Used languages: React JS. The purpose of this e-commerce shop project was to learn about React JS in depth. Created with create-react-app, and I used hooks and redux. Designed in styled-components. It took 6 months to build this page",
    language: "React",
    source: "https://github.com/Attila-Kis-Ivan/TDB-Clothing-2.0",
    demo: "https://tdb-clothing.netlify.app/",
  },
  {
    id: 13,
    title: "FoodToGo",
    imageUrl:
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDEUfTLc58trFfRO4VXYdnn8S3mwovYwo0BzMqeJy-QgHGIU4-ts01vrZ-EpuKUB2X9YZ0sgpm0bqjBjYI87u78PggA=s1600",
    description:
      "Used languages: React Native. The purpose of this Restaurant app project was to learn Native in depth. Used expo, hooks, React Native map, 3rd parties APIs, IOS & Android simulator. Designed in styled-components. It took 3 months to build this page.",
    language: "React Native",
    source: "https://github.com/Attila-Kis-Ivan/FoodToGo/tree/part-52",
    demo: "React Native project",
  },
  {
    id: 12,
    title: "Face-Recognition-App",
    imageUrl:
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaAgtln1XBFs27ODuq4ZLDwjZTxkxDug0SZn4LUXtL1OJFwpOHGfBm4Y7edo51zB4N1XMD3g5NO6KdBouvDvGh2ZGDqqvg=s1600",
    description:
      "Used languages: React JS and Express JS. The purpose of this Face Recognition app project was to leran React and working with Clarifai AI API. It took 6 months to build this page.",
    language: "React, Node JS",
    source: "https://github.com/Attila-Kis-Ivan/personal-portfolio",
    demo: "https://face-recognition-app-tcd8.onrender.com/",
  },
  {
    id: 11,
    title: "Kanban Board",
    imageUrl:
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBEQ-YE2j2Das-YnQzlcW-RjJJx8ZkAZ0n6ONfN_cwA5is984kPinb3kJDz0gDD4vIyN9KjlBBYnL-rP7Cy1TEmN1SX=s1600",
    description:
      "Used languages: javascript, HTML5 and CSS. The purpose of this Kanban Board project was to learn javascript, local storage, drag and drop, and DOM manipulation in depth. It took 3 months to build this page",
    language: "javascript, HTML5 and CSS",
    source: "https://github.com/Attila-Kis-Ivan/Drag-and-Drop",
    demo: "https://attila-kis-ivan.github.io/Drag-and-Drop/",
  },
  {
    id: 10,
    title: "Ping-Pong",
    imageUrl:
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaCCWGsqpft1dRrmM5tkyYsif_3sGY5JwmZ3k1NgbkmC3RkQIW-1mTjuuxVlp7lpxG4KYO4tV8RGZxSX7HLPaJjaB2vTgA=s2560",
    description:
      "Used languages: javascript, HTML5 and CSS. The purpose of this Ping-Pong game project was to learn javascript, canvas and DOM manipulation in depth. It took 3 months to build this page.",
    language: "javascript, CSS",
    source: "https://github.com/Attila-Kis-Ivan/Ping-Pong",
    demo: "https://attila-kis-ivan.github.io/Ping-Pong/",
  },
  {
    id: 9,
    title: "NASA-API-Pictures",
    imageUrl:
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBJ59DmAVhbhQSKArTlXuMhpSihhetpMbtg1AWCcxnZQy2nWoWJ27bjJVRZantT3C1m8stEzHMV0qbg_6rYpAmqkX6zfg=s1600",
    description:
      "Used languages: javascript, HTML5 and CSS. The purpose of this NASA-API-Pictures project was to learn and practice javascript, loacal store, DOM manipulation and working with 3rd party API. It took 6 weeks to build this page.",
    language: "javascrip, HTML5 and CSS",
    source: "https://github.com/Attila-Kis-Ivan/NASA-API-Pictures",
    demo: "https://attila-kis-ivan.github.io/NASA-API-Pictures/",
  },
  {
    id: 8,
    title: "Calculator",
    imageUrl:
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaB1Xlye4ZOqaUEKKGURrhU6YhxW4kFhiNvcghwMoGesSM837CoMDDG85HunVoZwNEFonkIwsz34y7Zjgo-xZlBV53r1dw=s1600",
    description:
      "Used languages: javascript, HTML5 and CSS. The purpose of this Calculator project was to learn and practice javascript DOM manipulation. It took 7 weeks to build this page.",
    language: "javascript, HTML5 and CSS",
    source: "https://github.com/Attila-Kis-Ivan/Calculator",
    demo: "https://attila-kis-ivan.github.io/Calculator/",
  },

  {
    id: 7,
    title: "Math Game",
    imageUrl:
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaCIxVautFXyYJUQSRkoo_ITotD0knWOj8qYzqRNgoDSaCffPN-DGMotp_lJGyCxHQg5jkV6Ba0g1s5byn8-Xg2bSFt-mg=s1600",
    description:
      "Used languages: javascript, HTML5 and CSS. The purpose of this Math Game project was to extend and challenge my javascript knowledge and DOM manipulation. It took 3 months to build this page.",
    language: "javascript, HTML5 and CSS",
    source: "https://github.com/Attila-Kis-Ivan/The-Math-Game",
    demo: "https://attila-kis-ivan.github.io/The-Math-Game/",
  },

  {
    id: 6,
    title: "Music Player",
    imageUrl:
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaClcQYfmYbKDVMZsOXILg-8JfqFoQn2tvEh_-wORiN-6FHUzr-n50XHIU7i8pr-3cY6drHNlVhM1puDfB3YfBYhlvGf=s1600",
    description:
      "Used languages: javascript, HTML5 and CSS. The purpose of this Music Player project was to extend and challenge my javascript knowledge (calculate progress bar etc...) and DOM manipulation. It took 2 months to build this page.",
    language: "javascript, HTML5 and CSS",
    source: "https://github.com/Attila-Kis-Ivan/Music-Player",
    demo: "https://attila-kis-ivan.github.io/Music-Player/",
  },
  {
    id: 5,
    title: "Bookmark App",
    imageUrl:
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDJM1JuP1NSFOLKvG2ZRd3mHZSbvUBcq-y0HS9k9SNX24jclsrtTQafnoXTxxJ2kmZjbaPF1DXzsbJrsYMVMq0_8oIS=s1600",
    description:
      "Used languages: javascript, HTML5 and CSS. The purpose of this Bookmark project was to learn and practice javascript and DOM manipulation. It took 2.5 months to build this page.",
    language: "javascript, HTML5 and CSS",
    source: "https://github.com/Attila-Kis-Ivan/Bookmark-App",
    demo: "https://attila-kis-ivan.github.io/Bookmark-App/",
  },

  {
    id: 4,
    title: "Landing Page",
    imageUrl:
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaADUuLw4uHhtCh7osF8lu6wMeo9SYR4iwMLhtiOXX0RqhoYjjcukniSmSdGExrasiFhYXVjkxUq4M1PjTxRyAFiAIuE=s1600",
    description:
      "Used languages: javascript, HTML5 and CSS. The purpose of this Landing page project was to learn and practice HTML5, CSS and a bit of javascript for DOM manipulation.",
    language: "javascript, HTML5 and CSS",
    source: "https://github.com/Attila-Kis-Ivan/Splash-Page",
    demo: "https://attila-kis-ivan.github.io/Splash-Page/",
  },

  {
    id: 3,
    title: "Quote Generator",
    imageUrl:
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaCGVU2JT0NkKplTRHzETNU_PgmA4qn-VSlnVpKPXn4pHMNg-6PoZ5nSqgon1XgxnNaQmeXZXwxYSIlLYrrBLZpSqMrKTQ=s1600",
    description:
      "Used languages: javascript, HTML5 and CSS. The purpose of this Quote Generator project was to learn and practice javascript and DOM manipulation (such as, fetching datad etc..). It took 5 weeks to build this page.",
    language: "javascript, HTML5 and CSS",
    source: "https://github.com/Attila-Kis-Ivan/Quote-Generator",
    demo: "https://attila-kis-ivan.github.io/Quote-Generator/",
  },
  {
    id: 2,
    title: "Infinite Scroll",
    imageUrl:
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaAEriJcTSl2B6gUjiwImOqvSC2uGKpyDqBobkoiahRbtJQ2mSmwD9lEm0qa7BaQJiz-8qhDpRBWGBRnaDmBMOLMgobL=s1600",
    description:
      "Used languages: javascript, HTML5 and CSS. The purpose of this Infinite Scroll project was to learn and practice javascript and working with picture API (such as, fetching datad etc..). It took 3 weeks to build this page.",
    language: "javascript, HTML5 and CSS",
    source: "https://github.com/Attila-Kis-Ivan/Infinite-Scroll",
    demo: "https://attila-kis-ivan.github.io/Infinite-Scroll/",
  },
  {
    id: 1,
    title: "CSS background color generator",
    imageUrl:
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDLCxvu1NEjSajprjnLGNN8bP9y6qXZ8PlaN0k2wvKtCcltfR_od8TiWvaLy6-Js0M4hZxQOpdqx8Sotgl2Kc1qIXxsmg=s1600",
    description:
      "Used languages: javascript, HTML5 and CSS. The purpose of this Background Color Generator project was to learn and practice javascript and DOM manipulation. It took 2 weeks to build this page.",
    language: "javascript, HTML5 and CSS",
    source: "https://github.com/Attila-Kis-Ivan/Background-Color-Generator",
    demo: "https://attila-kis-ivan.github.io/Background-Color-Generator/",
  },
];

const ProjectData = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <ProjectContainer>
      <HeadingContainer>
        <Heading>PROJECTS</Heading>
      </HeadingContainer>
      <Container>
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </Container>
    </ProjectContainer>
  );
};

export default ProjectData;
