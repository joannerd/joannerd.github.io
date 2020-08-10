import React from 'react';
import adAstra from '../media/adastra.png';
import brewer from '../media/brewer.gif';
import boopblocks from '../media/boopblocks.gif';
import synewaveshi from '../media/synewaveshi.gif';
import pomoplan from '../media/pomoplan.gif';

const projects = [
  {
    id: 1,
    title: 'Brewer',
    tech: 'Ruby on Rails | React/Redux | PostgreSQL',
    description: "Brewer is a single-page application inspired by Eater. Users can browse breweries, generate guides by city, and favorite generated guides. I implemented Mapbox GL JS and database calls to easily render each brewery's location on a city map.Brewer stores images on cloud with AWS S3 and Rails Active Storage to reduce server load and allow the app to scale.I developed an AJAX call to connect with my backend and parse a response that renders a guide and its respective breweries.",
    live: 'https://junnac-brewer.herokuapp.com/',
    github: 'https://github.com/junnac/Brewer',
    img: brewer
  },
  {
    id: 4,
    title: 'Pomoplan',
    tech: 'React (Next.js) | React DnD | Web Audio API',
    description: "",
    live: 'https://pomoplan.vercel.app/',
    github: 'https://github.com/junnac/pomoplan',
    img: pomoplan
  },
  {
    id: 3,
    title: 'Synewaveshi',
    tech: 'React | WebSockets | Speech API | Tone.js',
    description: "Communication app that simulates synesthesia and inquisitively explores voice-controlled computer music generation. Synewaveshi uses the experimental Web Speech API to manage voice input. Socket.io is used to pass tones and colors to another user of the app, while Tone.js is used to create the notes.",
    live: 'https://synewaveshi.herokuapp.com/',
    github: 'https://github.com/junnac/synewaveshi',
    img: synewaveshi
  },
  {
    id: 2,
    title: 'adAstra',
    tech: 'Express | Node | React/Redux | MongoDB',
    description: "adAstra is a cosmic event planning app, built to create a stargazing community and help users geolocate the best sites for stargazing events. As the main frontend engineer of the team, I designed a dynamic web page and interactive hover effects with CSS3 to render an eye-catching website and forum with intuitive UX. I developed filter logic integrated with Mapbox GL JS geolocation to map the reflective location of constellations on Earth and display all currently viewable constellations.",
    live: 'https://ad--astra.herokuapp.com/',
    github: 'https://github.com/jenn-jenn/adAstra',
    img: adAstra
  },
  {
    id: 5,
    title: 'Boop Blocks',
    tech: 'JavaScript | Web Audio API',
    description: "BoopBlocks is an interactive browser instrument that teaches users about musical polyrhythms in a dynamic way. The application was inspired by a percussion for music therapists course where students workshopped meditative drum circles based on polyrhythms. I utilized D3.js to create dynamic SVG elements that allow intuitive user interaction with Web Audio API. Users can create sounds or investigate the characteristics of different polyrhythm blocks.",
    live: 'https://boopblocks.herokuapp.com/',
    github: 'https://github.com/junnac/boopblocks',
    img: boopblocks
  },
];

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
      <span id="info">
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

const ProjectsList = () => (
  <article className="projects">
    {projects.map(project => (
      <Project project={project} key={project.id} />
    ))}
  </article>
);

export default ProjectsList;
