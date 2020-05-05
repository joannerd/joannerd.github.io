import React from 'react';
import projects from '../projectsData';
import Project from './Project';

const ProjectsList = () => (
  <article id="projects">
    <h2>Coding Projects</h2>
    <section className="projects">
      {projects.map(project => (
        <Project project={project} key={project.id} />
      ))}
    </section>
  </article>
);

export default ProjectsList;
