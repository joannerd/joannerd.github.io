import React from "react";
import ProjectModal from './project_modal';

const ProjectItem = ({ project }) => (
  <div className="project">
    <a href={project.live}
      target="_blank"
      rel="noopener noreferrer"><h3>{project.title}</h3></a>
    <span>{project.tech}</span>

    <img src={project.img} alt={project.title} />
    <div className="button" id={`button-${project.id}`}>LEARN MORE</div>

    <ProjectModal project={project} />
  </div>
)

export default ProjectItem;