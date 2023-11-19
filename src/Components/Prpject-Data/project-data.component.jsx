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
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDB9SDNztbHkaq3oOX6MSbEQVnH1qQbXLcbp-TAWJ6lLJVCFaC45spDHWuNNjVYfrGdCq-WUGMUjDkLnvzi71Qr6TGhQw=s1600",
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
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaAzVHPsRYOeEn7bz5adKNRtWp8p9zzUjvY9cEcFejb2b5S_205kQgtxlnUqq77zbnPNF9EBagkVPSZhmhiqRUEAQT9D=s1600",
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
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBr3IgihJlEZhXqwE9K2d33jfyxG_PhJv1zup6usoBMqnV510fzj0SNb4mFfalKMrkruvA9JekscHo5a5q634lWun6YJQ=s1600",
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
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBx14TzidFA0FQNXVSSWEAZJAznPcfyNhdb15xHy-v8UTHktH4JIUXtDBXsEah2jy24JzsBJkqXrURRU2FaWjlUpuui=s1600",
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
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBJEbwmMc7XFB73VgP6p_gWQOC73yY-5Lo7-BB5ozA8e62Z6yPXOVqeaJkGzMjBsw5J3Ec7kBf6nBYoXDUTGJmpuUS4=s1600",
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
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaCgbUfiGYB3_fYyatP-10lol5fyClc8p1K9GgudTK8p9N51cjbDAjHeX7SmEIW7A7HeswocRk7G35bFyF3L12iCW-3lFQ=s1600",
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
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaAnFEkwpPYs-Ex4Fd0pKdwDxqhF4S38RFDPDSSNhnmFsJxo7eiso4NqFrASPccMXogVZal7mHbCZFoSRBlY7dXNbF8X=s1600",
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
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaCJaz2eiIWYUeJxKlNL7HE1M0U3Cth2gy7oi__luIN4r9HplRVsj7i1cavLcEwK7OYqG3vhGt8GCSZYd7uZPwsn_EZTSQ=s1600",
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
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaAqoNEBtj_ESoqinIs2XUMaMOUPkg0qJ_qVlnIJHihJdtRlHMQ4tkn1Q9nsLPnFZ7han495nkJAwqS88ddo4wHSxTkLeg=s1600",
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
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBY-0l8fSyPrbB7lanhE8MOabFuoiSXGRMMR0t7rk7p7UXBUtFMDAMMmzlEUI37i0Jpc2xiBbQQBIwAnA1cii3LfI8P6A=s1600",
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
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaCPGjHedNnR_k8kUl7nuLLAc54jLMtu4e5RlsX7wSpS6zq29JSAneuqXzwL0uFM-Iy9l8xMNee21Nl4IchsuydBmq3dbw=s1600",
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
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaAS2r5lWcgiagh4EE8d2FSDjCjIm6tSn_6T40esJrTI2Ww-rQeAnctCGlkzs-GRgKDdmxVJY8iEyqZheJBRUpC-Tf1k=s1600",
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
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaCWZlyniwzavIrrl0ENmA-jO7RX8q4Lp_6-ZiT7WCQiWPi3twLvv8DRItd_hBygSzNRr1VXNwzFuycEGaHJC7sXTBDU=s1600",
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
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaC2XsqH2rsPwddXiLkTREPIoVtsr73eFP_S-Xv-UlIGRkaUPkNWDd8A6w1uHTEus0lJKRKYzUhbO6wnq0ixkVbd8RgI=s1600",
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
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDUB3Hskn7ssL2wNUqi3wrDApZMDtqGtqDudgnSXL7ZpBrtAIOgQ-psiA6kM0EJAbgPVlDKASn-kM_8uyMdaZ1U3y3oqg=s1600",
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
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaCuzhX3LrnGo5Qts7hWXujG1ZxBHT9ZpKRkHdyYa_vrecH4EfkIa7OrJo0sl68xS-k8vutRUCyAwpfgAdS4ii_07zHc=s1600",
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
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaCXq5zPRxzGFfSHpBUSazTNN-fAyM4TDh1luQFjALgNnf9c-GUrAWpAjFLQxNXlgfRD6AWiQH-1vOsPfdT_x3eyrrF3dA=s1600",
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
