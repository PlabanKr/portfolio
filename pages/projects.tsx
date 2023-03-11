import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import ProjectsComponent from "../components/projects/projectsComponent";
import styles from "../styles/Projects.module.css";

const Projects = () => {
  return (
    <div className={styles.projectsBody}>
      <Head>
        <title>Projects</title>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>
      <Navbar />
      <ProjectsComponent />
    </div>
  );
};

export default Projects;
