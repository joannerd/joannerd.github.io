import React from 'react';

const ProjectModal = ({ live, github, description, handleClick }) => (
  <>
    <div className="project-info-header">
      <span>
        <a href={live}
          target="_blank"
          rel="noopener noreferrer">Live</a>  |  <a
            href={github}
            target="_blank"
            rel="noopener noreferrer">Github</a>
      </span>
      <i onClick={handleClick} className="fas fa-times" />
    </div>
    <p>{description}</p>
  </>
);

export default ProjectModal;
