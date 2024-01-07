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
    imageUrl: "https://i.ibb.co/rvHjQdz/WT2.png",

    description:
      "Used languages: Vite React JS and CSS Modules. Purpose of this project to get more familiar with Reducer and try CSS modules. Database is JSON-Server. The focus was on Reducer. It took 7 weeks to build this page.",
    language: " Vite React",
    source: "https://github.com/Attila-Kis-Ivan/World-Traveller",
    demo: "https://tdbworldtraveller.netlify.app/",
  },
  {
    id: 16,
    title: "React Quiz",
    imageUrl: "https://i.ibb.co/KXL7hCx/React-Quiz.png",

    description:
      "Used languages: Vite React JS and CSS. This React Quiz made in React. Purpose of this project to get more familiar with Reducer. Created with Vite React, designed in CSS. Database is JSON-Server. The focus was on Reducer. It took 3 weeks to build this page.",
    language: "Vite React",
    source: "https://github.com/Attila-Kis-Ivan/Qiuz",
    demo: "https://tdb-react-quiz.netlify.app/",
  },
  {
    id: 15,
    title: "Portfolio Page",
    imageUrl: "https://i.ibb.co/V23qM9q/Portfolio.png",

    description:
      "Used languages: Vite React JS, Styled-Components. Purpose of this project obviously to have a portfolio page and practicing React JS. Created with Vite React, designed in styled-components. It took 4 weeks to build this page.",
    language: "Vite React",
    source: "https://github.com/Attila-Kis-Ivan/personal-portfolio",
    demo: "https://tdb-coding.com/",
  },
  {
    id: 14,
    title: "TDB-Clothing-2.0",
    imageUrl: "https://i.ibb.co/wyzKBkv/Webshop.png",

    description:
      "Used languages: React JS. The purpose of this e-commerce shop project was to learn about React JS in depth. Created with create-react-app, and I used hooks and redux. Designed in styled-components. It took 6 months to build this page",
    language: "React",
    source: "https://github.com/Attila-Kis-Ivan/TDB-Clothing-2.0",
    demo: "https://tdb-clothing.netlify.app/",
  },
  {
    id: 13,
    title: "FoodToGo",
    imageUrl: "https://i.ibb.co/MBt8ZK3/Food-To-Goo-In.png",
    description:
      "Used languages: React Native. The purpose of this Restaurant app project was to learn Native in depth. Used expo, hooks, React Native map, 3rd parties APIs, IOS & Android simulator. Designed in styled-components. It took 3 months to build this page.",
    language: "React Native",
    source: "https://github.com/Attila-Kis-Ivan/FoodToGo/tree/part-52",
    demo: "React Native project",
  },
  {
    id: 12,
    title: "Face-Recognition-App",
    imageUrl: "https://i.ibb.co/kSPzP5y/Face-Recognition-App.png",
    description:
      "Used languages: React JS and Express JS. The purpose of this Face Recognition app project was to leran React and working with Clarifai AI API. It took 6 months to build this page.",
    language: "React, Node JS",
    source: "https://github.com/Attila-Kis-Ivan/personal-portfolio",
    demo: "https://face-recognition-app-tcd8.onrender.com/",
  },
  {
    id: 11,
    title: "Kanban Board",
    imageUrl: "https://i.ibb.co/wRNvm9q/Kanban2.png",
    description:
      "Used languages: javascript, HTML5 and CSS. The purpose of this Kanban Board project was to learn javascript, local storage, drag and drop, and DOM manipulation in depth. It took 3 months to build this page",
    language: "javascript, HTML5 and CSS",
    source: "https://github.com/Attila-Kis-Ivan/Drag-and-Drop",
    demo: "https://attila-kis-ivan.github.io/Drag-and-Drop/",
  },
  {
    id: 10,
    title: "Ping-Pong",
    imageUrl: "https://i.ibb.co/K6fKchj/Ping-Pong.png",
    description:
      "Used languages: javascript, HTML5 and CSS. The purpose of this Ping-Pong game project was to learn javascript, canvas and DOM manipulation in depth. It took 3 months to build this page.",
    language: "javascript, CSS",
    source: "https://github.com/Attila-Kis-Ivan/Ping-Pong",
    demo: "https://attila-kis-ivan.github.io/Ping-Pong/",
  },
  {
    id: 9,
    title: "NASA-API-Pictures",
    imageUrl: "https://i.ibb.co/gm1Pcxx/NASA-API.png",
    description:
      "Used languages: javascript, HTML5 and CSS. The purpose of this NASA-API-Pictures project was to learn and practice javascript, loacal store, DOM manipulation and working with 3rd party API. It took 6 weeks to build this page.",
    language: "javascrip, HTML5 and CSS",
    source: "https://github.com/Attila-Kis-Ivan/NASA-API-Pictures",
    demo: "https://attila-kis-ivan.github.io/NASA-API-Pictures/",
  },
  {
    id: 8,
    title: "Calculator",
    imageUrl: "https://i.ibb.co/C1Z8V8w/Calculator-3.png",
    description:
      "Used languages: javascript, HTML5 and CSS. The purpose of this Calculator project was to learn and practice javascript DOM manipulation. It took 7 weeks to build this page.",
    language: "javascript, HTML5 and CSS",
    source: "https://github.com/Attila-Kis-Ivan/Calculator",
    demo: "https://attila-kis-ivan.github.io/Calculator/",
  },

  {
    id: 7,
    title: "Math Game",
    imageUrl: "https://i.ibb.co/BrBqLdG/Math-game.png",
    description:
      "Used languages: javascript, HTML5 and CSS. The purpose of this Math Game project was to extend and challenge my javascript knowledge and DOM manipulation. It took 3 months to build this page.",
    language: "javascript, HTML5 and CSS",
    source: "https://github.com/Attila-Kis-Ivan/The-Math-Game",
    demo: "https://attila-kis-ivan.github.io/The-Math-Game/",
  },

  {
    id: 6,
    title: "Music Player",
    imageUrl: "https://i.ibb.co/RDrJ0Jv/Music-Player.png",
    description:
      "Used languages: javascript, HTML5 and CSS. The purpose of this Music Player project was to extend and challenge my javascript knowledge (calculate progress bar etc...) and DOM manipulation. It took 2 months to build this page.",
    language: "javascript, HTML5 and CSS",
    source: "https://github.com/Attila-Kis-Ivan/Music-Player",
    demo: "https://attila-kis-ivan.github.io/Music-Player/",
  },
  {
    id: 5,
    title: "Bookmark App",
    imageUrl: "https://i.ibb.co/1v7C3PB/Bookmark.png",
    description:
      "Used languages: javascript, HTML5 and CSS. The purpose of this Bookmark project was to learn and practice javascript and DOM manipulation. It took 2.5 months to build this page.",
    language: "javascript, HTML5 and CSS",
    source: "https://github.com/Attila-Kis-Ivan/Bookmark-App",
    demo: "https://attila-kis-ivan.github.io/Bookmark-App/",
  },

  {
    id: 4,
    title: "Landing Page",
    imageUrl: "https://i.ibb.co/C1Qy090/Landing-page.png",
    description:
      "Used languages: javascript, HTML5 and CSS. The purpose of this Landing page project was to learn and practice HTML5, CSS and a bit of javascript for DOM manipulation.",
    language: "javascript, HTML5 and CSS",
    source: "https://github.com/Attila-Kis-Ivan/Splash-Page",
    demo: "https://attila-kis-ivan.github.io/Splash-Page/",
  },

  {
    id: 3,
    title: "Quote Generator",
    imageUrl: "https://i.ibb.co/GcV3R9r/Quote-Generator.png",
    description:
      "Used languages: javascript, HTML5 and CSS. The purpose of this Quote Generator project was to learn and practice javascript and DOM manipulation (such as, fetching datad etc..). It took 5 weeks to build this page.",
    language: "javascript, HTML5 and CSS",
    source: "https://github.com/Attila-Kis-Ivan/Quote-Generator",
    demo: "https://attila-kis-ivan.github.io/Quote-Generator/",
  },
  {
    id: 2,
    title: "Infinite Scroll",
    imageUrl: "https://i.ibb.co/6gQzr1P/Infinite-Scroll.png",
    description:
      "Used languages: javascript, HTML5 and CSS. The purpose of this Infinite Scroll project was to learn and practice javascript and working with picture API (such as, fetching datad etc..). It took 3 weeks to build this page.",
    language: "javascript, HTML5 and CSS",
    source: "https://github.com/Attila-Kis-Ivan/Infinite-Scroll",
    demo: "https://attila-kis-ivan.github.io/Infinite-Scroll/",
  },
  {
    id: 1,
    title: "CSS background color generator",
    imageUrl: "https://i.ibb.co/NCsKjKc/Backgroundcolor-generator-2.png",
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
