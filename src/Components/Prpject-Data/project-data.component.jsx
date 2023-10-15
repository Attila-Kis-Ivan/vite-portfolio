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
    id: 16,
    title: "React Quiz",
    imageUrl:
      "https://lh3.googleusercontent.com/drive-viewer/AK7aPaA_RbLSjtZLZsrwkRL7Kg9RuVuUVktY1S7gbI2ElA3wopgd8f-MmDFaP8ptUfEh6ICgI-iTjLEQ7StVI4oYTGew9wZN=s1600",
    description:
      "Used languages: React JS and CSS. This React Quiz made in React. Purpose of this project to get more familiar with Reducer. Created with create-react-app, designed in CSS. The focus was on Reducer. It took 3 weeks to build this page.",
    language: "React",
    source: "https://github.com/Attila-Kis-Ivan/Qiuz",
    demo: "https://tdb-react-quiz.netlify.app/",
  },
  {
    id: 15,
    title: "Portfolio Page",
    imageUrl:
      "https://lh3.googleusercontent.com/drive-viewer/AITFw-zZVLwlEJGg_PdFicLc7dqP_CH8RplHP361FkhNaRvQw_VFgINSxCWbBN3Gvi_V7bEcYkYQrLrvBvMbmf3kWEMf-I9JEw=s1600",
    description:
      "Used languages: React JS, Styled-Components. This portfolio site made in React. Purpose of this project obviously to have a portfolio page and practicing React JS. Created with create-react-app, designed in styled-components. It took 4 weeks to build this page.",
    language: "React",
    source: "https://github.com/Attila-Kis-Ivan/personal-portfolio",
    demo: "https://tdb-coding.com/",
  },
  {
    id: 14,
    title: "TDB-Clothing-2.0",
    imageUrl:
      "https://lh3.googleusercontent.com/drive-viewer/AITFw-zgTglkWlQ_-lNpUHqiiB3X2CMGR6GAjktFZn9oui6so0FLInXPRcC935ve06qA1WU3GYVx83Uwr14MbGF09nPuJArw=s1600",
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
      "https://lh3.googleusercontent.com/drive-viewer/AITFw-xFAlcSrptjtjSOnyIlzE_XeAEg57gbtoQjTCk7eujxA6Wmy8ojzRUC6HxLTwXLGQ8kyyWwGuQcT4qeuNTbYo8QiAl5=s1600",
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
      "https://lh3.googleusercontent.com/drive-viewer/AITFw-zD-S1rlhGwiFAiyeEy03_vtVMxFIoS95ENbXwfSePMoBOXjlkbKOJXSU59wgCOX0tVrZv47bzAAGDy85zPf52KvBcIgw=s1600",
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
      "https://lh3.googleusercontent.com/drive-viewer/AITFw-xTCscsEHs4SwaZc4sVGYDnGPELc7N1FZlGTSyTWuswP4Z-zlHh1wj_L1MYFkTXccyVZWQzrlkf53j5X2oxjNnPI9VPUg=s1600",
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
      "https://lh3.googleusercontent.com/drive-viewer/AITFw-xHBz-f2gMQzUE3LLs_NzHr3YDBGuYdd5aQ1e6vW54rNlx5-DQAl1EGDO7HaB9_W_l6czfRv1BDreVecLcmTIRlXVTeaQ=s1600",
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
      "https://lh3.googleusercontent.com/drive-viewer/AITFw-yw9-erSZI2spBITbqRI9K_cY5PhQ7IX6bHygvkHO9v8KLSmxXnEefut7bcB2vmyJqPGxcqr5BNnTfA4ggrxi8qQL2VVQ=s1600",
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
      "https://lh3.googleusercontent.com/drive-viewer/AITFw-xqP9e8JPY_4nH1ajmGTx_YKsReIBFeT0CJhOknuN_mjatSKBIdBB8p3lbtAEWtbzOzyqk07N6C1PVC-zyXHlQywFOtBw=s1600",
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
      "https://drive.google.com/uc?export=download&id=1dhMOPpqypCDQwsn_N8aKWnmn2HvY4mJK",
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
      "https://lh3.googleusercontent.com/drive-viewer/AITFw-wvNaevTlPGy5wHg7xyksdCvi-uMSXiyTep8B9mXdKAJfhnpDK9oeOWb9PahzVFn6kVxJRX_woQnzVbcryLy5uLWXcv=s1600",
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
      "https://lh3.googleusercontent.com/drive-viewer/AITFw-xrtVfYorZId8091nwf8DquF0Hii8v8KEnmq12yGyNSzDjTXWCbzcRv68IXn3J-5aK0yofKbPw7gx7hT0qQFJs7LilO=s1600",
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
      "https://lh3.googleusercontent.com/drive-viewer/AITFw-zyxJ-3Ob-fdxhhWHXsnfb5Ad21_VFoiPlqrByMa3b_ioeKsak0YtN4uiuwyihZMYB3TqQZ2srLXJSOBqIvHjxVqotW=s1600",
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
      "https://lh3.googleusercontent.com/drive-viewer/AITFw-xnuzeDJWeETAhjs0mvOEwkLpSyAeSGLmDJPt4hgYHaZ450M8pcMg4qdbTu6cUNkMGclOcehAjAvwnasw66W-A_M2aWVA=s1600",
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
      "https://lh3.googleusercontent.com/drive-viewer/AITFw-zcjtoxDxrDpMCaZ7PYBJ8ma5Gx119bUnp5jZdcRKE_rkNFTHT7zcTKii-KuYMuztsSgmQgJgj2M8QQ--EgtqTrpl_R=s1600",
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
      "https://lh3.googleusercontent.com/drive-viewer/AITFw-wJETU9OfUW9akS7v-B02V1BW25u5P_AkJJJx0eMMKr_PJNTgBs2ASA2-p-hZYg3JgeirikDJiLz_2rLPkDwuBMv7PhIA=s1600",
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
