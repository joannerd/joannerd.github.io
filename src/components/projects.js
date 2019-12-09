import React from "react";

const projects = [
  {
    title: 'Boop Blocks',
    tech: 'JavaScript | D3.js | Web Audio API',
    description: "BoopBlocks is an interactive browser instrument that teaches users about musical polyrhythms in a dynamic way. The application was inspired by a percussion for music therapists course where students workshopped meditative drum circles based on polyrhythms. Users can investigate and meditate on the characteristics of different polyrhythms. Users can also hover over or click blocks to make them boop!",
    action: "I utilized D3.js to create dynamic SVG elements that allow intuitive user interaction with Web Audio API. I also implemented logic with Vanilla DOM and JavaScript that initiates sound and animates a graphic representation of a polyrhythm for a dynamic user experience.",
    live: 'http://boopblocks.herokuapp.com/',
    github: 'https://github.com/junnac/boopblocks'
  },
  {
    title: 'Brewer',
    tech: 'React+Redux | Ruby on Rails',
    description: '',
    live: 'http://junnac-brewer.herokuapp.com/',
    github: 'https://github.com/junnac/Brewer'
  },
  {
    title: 'adAstra',
    tech: 'MongoDB | Express.js | React | Node.js',
    description: '',
    live: 'http://ad--astra.herokuapp.com/',
    github: 'https://github.com/jenn-jenn/adAstra'
  }
]

class Projects extends React.Component {
  render() {
    return (
      <article id="projects">
        <h2>Projects</h2>
        <section className="projects">
          {projects.map((project, i) => (
            <div key={i} className="project">

              <h3>{project.title}</h3>
              <span>{project.tech}</span>

              <div className="button">LEARN MORE</div>
              {/* <div>
                <a href={project.live}
                  target="_blank"
                  rel="noopener noreferrer">Live</a>  |  <a href={project.github}
                  target="_blank"
                  rel="noopener noreferrer">Github</a>
              </div> */}

              {/* <p>{project.description}</p>
              <p>{project.action}</p> */}
            </div>
          ))}
        </section>
      </article>
    )
  }
}

export default Projects;