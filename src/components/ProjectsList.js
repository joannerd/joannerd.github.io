import React from 'react';
import projects from '../projectsData';
import Project from './Project';

const ProjectsList = () => (
  <article className="projects">
    {projects.map(project => (
      <Project project={project} key={project.id} />
    ))}
  </article>
);

export default ProjectsList;
