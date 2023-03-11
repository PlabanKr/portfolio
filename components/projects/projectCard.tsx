import React from "react";
import { CodeOutlined, LinkOutlined } from "@ant-design/icons";
import { Project } from "../../types/ProjectCardProps";
import styles from "../../styles/components/ProjectCard.module.css";

const ProjectCard: React.FC<Project> = (props: Project) => {
  const { title, description, repo, live } = props;
  return (
    <div className={styles.cardBody}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.options}>
        <a href={repo} className={styles.source}>
          <CodeOutlined /> Source Code
        </a>
        {live.status ? (
          <a href={live.url} className={styles.live}>
            <LinkOutlined /> Live Showcase
          </a>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
