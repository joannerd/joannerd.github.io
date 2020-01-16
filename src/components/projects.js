import React from "react";
import adAstraScreenshot from '../media/adastra.png';
import brewerScreenshot from '../media/brewer.png';
import boopblocksScreenshot from '../media/boopblocks.png';

const projects = [
  {
    id: 1,
    title: 'Brewer',
    tech: 'React+Redux | Ruby on Rails',
    description: "Brewer is a single-page application inspired by Eater. Users can browse breweries, generate guides by city, and favorite generated guides. I implemented Mapbox GL JS and database calls to easily render each brewery's location on a city map.Brewer stores images on cloud with AWS S3 and Rails Active Storage to reduce server load and allow the app to scale.I developed an AJAX call to connect with my backend and parse a response that renders a guide and its respective breweries.",
    live: 'http://junnac-brewer.herokuapp.com/',
    github: 'https://github.com/junnac/Brewer',
    img: brewerScreenshot
  },
  {
    id: 2,
    title: 'adAstra',
    tech: 'MongoDB | Express.js | React | Node.js',
    description: "adAstra is a cosmic event planning app, built to create a stargazing community and help users geolocate the best sites for stargazing events. As the main frontend engineer of the team, I designed a dynamic web page and interactive hover effects with CSS3 to render an eye-catching website and forum with intuitive UX. I developed filter logic integrated with Mapbox GL JS geolocation to map the reflective location of constellations on Earth and display all currently viewable constellations.",
    live: 'http://ad--astra.herokuapp.com/',
    github: 'https://github.com/jenn-jenn/adAstra',
    img: adAstraScreenshot
  },
  {
    id: 3,
    title: 'Boop Blocks',
    tech: 'JavaScript | D3.js | Web Audio API',
    description: "BoopBlocks is an interactive browser instrument that teaches users about musical polyrhythms in a dynamic way. The application was inspired by a percussion for music therapists course where students workshopped meditative drum circles based on polyrhythms. I utilized D3.js to create dynamic SVG elements that allow intuitive user interaction with Web Audio API. Users can create sounds or investigate the characteristics of different polyrhythm blocks.",
    live: 'http://boopblocks.herokuapp.com/',
    github: 'https://github.com/junnac/boopblocks',
    img: boopblocksScreenshot
  }
]

class Projects extends React.Component {
  componentDidMount() {
    for (let i = 1; i <= 3; i++) {
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
  }

  render() {
    return (
      <article id="projects">
        <div id="project-h2"><h2>Projects</h2></div>
        <section className="projects">
          {projects.map((project, i) => (
            <div key={i} className="project">
              <a href={project.live}
                target="_blank"
                rel="noopener noreferrer"><h3>{project.title}</h3></a>
              <span>{project.tech}</span>

              <div className="button" id={`button-${project.id}`}>LEARN MORE</div>
              <img src={project.img} alt={project.title} />

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

            </div>
          ))}
        </section>
      </article>
    )
  }
}

export default Projects;