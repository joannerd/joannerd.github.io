import React, { useState, useRef } from 'react';
import ProjectModal from './ProjectModal';

const Project = ({ project }) => {
  const [hiddenClass, setHiddenClass] = useState('hidden');
  const projectBlurb = useRef();

  const handleClick = () => {
    projectBlurb.current.classList.contains('hidden')
      ? setHiddenClass('')
      : setHiddenClass('hidden');
  };

  const { live, github, description, title, tech, img } = project;

  return (
    <div className="project">
      <a href={live}
        target="_blank"
        rel="noopener noreferrer">
        <h3>{title}</h3>
      </a>
      <span>{tech}</span>
      <img src={img} alt={title} />
      <div onClick={handleClick} className="button">
        LEARN MORE
      </div>
      <div ref={projectBlurb}
        onClick={handleClick}
        className={`project-info ${hiddenClass}`}>
        <ProjectModal
          handleClick={handleClick}
          live={live}
          github={github}
          description={description}
        />
      </div>
    </div>
  );
};

export default Project;
