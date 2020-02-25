import React, { useEffect } from "react";
import projects from './projectsData';
import ProjectItem from './project_item';

const Projects = () => {
  useEffect(() => {
    for (let i = 1; i <= 5; i++) {
      let projectBlurb = document.getElementById(`project-${i}`);

      document.getElementById(`button-${i}`).addEventListener("click", () => {
        projectBlurb.classList.remove('hidden');
      });
      document.getElementById(`x-${i}`).addEventListener("click", () => {
        projectBlurb.classList.add('hidden');
      });
      projectBlurb.addEventListener("click", () => {
        projectBlurb.classList.add('hidden');
      })
    }
  });

  return (
    <article id="projects">
      <h2>Coding Projects</h2>
      <section className="projects">
        {projects.map((project, i) => (
          <ProjectItem project={project} key={i} />
        ))}
      </section>
    </article>
  )
}

export default Projects;