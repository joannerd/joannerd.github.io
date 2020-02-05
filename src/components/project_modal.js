import React from "react";

const ProjectModal = ({ project }) => (
  <div className="project-info hidden" id={`project-${project.id}`}>
    <div className="project-info-header">
      <span>
        <a href={project.live}
          target="_blank"
          rel="noopener noreferrer">Live</a>  |  <a href={project.github}
            target="_blank"
            rel="noopener noreferrer">Github</a>
      </span>
      <i className="fas fa-times" id={`x-${project.id}`}></i>
    </div>
    <p>{project.description}</p>
  </div>
)

export default ProjectModal;