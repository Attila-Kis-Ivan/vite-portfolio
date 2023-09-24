import { useEffect } from "react";
import ProjectData from "../../Components/Prpject-Data/project-data.component";

const Projects = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  return <ProjectData />;
};

export default Projects;
