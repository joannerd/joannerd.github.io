import React from 'react';

const Project = ({ project }) => {
  const { live, github, title, tech, img } = project;

  return (
    <div className="project">
      <a href={live}
        target="_blank"
        rel="noopener noreferrer">
        <h3>{title}</h3>
      </a>
      <span>{tech}</span>
      <img src={img} alt={title} />
      <span>
        <a href={live}
          aria-label={`Visit ${title} at ${live}`}
          className="fa fa-link"
          target="_blank"
          rel="noopener noreferrer">{null}</a>
        <a href={github}
          aria-label={`Visit ${title}'s GitHub at ${github}`}
          className="fab fa-github"
          target="_blank"
          rel="noopener noreferrer">{null}</a>
      </span>
    </div>
  );
};

export default Project;
