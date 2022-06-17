import type { NextComponentType } from "next";
import ProjectCard from "./projectCard";
import projList from "../../data/projects.json";

const ProjectsComponent: NextComponentType = () => {
    return (
    <>
        {
            projList.map((project, index) => {
                return <ProjectCard 
                    key={index}
                    title={project.title} 
                    description={project.description} 
                    repo={project.repo} 
                    live={project.live} />
            })
        }
    </>
    )
}

export default ProjectsComponent;