import { useState, useEffect } from 'react';
import styles from '../styles/Code.module.css';
import * as gtag from '../lib/gtag';

const projects = [
  {
    id: 4,
    title: 'Pomoplan',
    tech: 'React (Next.js) | React DnD | Web Audio API',
    description: '',
    live: 'https://pomoplan.vercel.app/',
    github: 'https://github.com/joannerd/pomoplan',
    img: '/images/pomoplan.gif',
  },
  {
    id: 1,
    title: 'Brewer',
    tech: 'Ruby on Rails | React/Redux | PostgreSQL',
    description:
      "Brewer is a single-page application inspired by Eater. Users can browse breweries, generate guides by city, and favorite generated guides. I implemented Mapbox GL JS and database calls to easily render each brewery's location on a city map.Brewer stores images on cloud with AWS S3 and Rails Active Storage to reduce server load and allow the app to scale.I developed an AJAX call to connect with my backend and parse a response that renders a guide and its respective breweries.",
    live: 'https://junnac-brewer.herokuapp.com/',
    github: 'https://github.com/joannerd/brewer',
    img: '/images/brewer.gif',
  },
  {
    id: 6,
    title: 'OwlScrolls',
    tech: 'React (Next.js)',
    description: '',
    live: 'http://owlscrolls.vercel.app/',
    github: 'https://github.com/joannerd/owlscrolls',
    img: '/images/owlscrolls.png',
  },
  {
    id: 3,
    title: 'Synewaveshi',
    tech: 'React | WebSockets | Speech API | Tone.js',
    description:
      'Communication app that simulates synesthesia and inquisitively explores voice-controlled computer music generation. Synewaveshi uses the experimental Web Speech API to manage voice input. Socket.io is used to pass tones and colors to another user of the app, while Tone.js is used to create the notes.',
    live: 'https://synewaveshi.herokuapp.com/',
    github: 'https://github.com/joannerd/synewaveshi',
    img: '/images/synewaveshi.gif',
  },
  {
    id: 2,
    title: 'adAstra',
    tech: 'Express | Node | React/Redux | MongoDB',
    description:
      'adAstra is a cosmic event planning app, built to create a stargazing community and help users geolocate the best sites for stargazing events. As the main frontend engineer of the team, I designed a dynamic web page and interactive hover effects with CSS3 to render an eye-catching website and forum with intuitive UX. I developed filter logic integrated with Mapbox GL JS geolocation to map the reflective location of constellations on Earth and display all currently viewable constellations.',
    live: 'https://ad--astra.herokuapp.com/',
    github: 'https://github.com/jenn-jenn/adAstra',
    img: '/images/adastra.png',
  },
  {
    id: 5,
    title: 'Boop Blocks',
    tech: 'JavaScript | Web Audio API',
    description:
      'BoopBlocks is an interactive browser instrument that teaches users about musical polyrhythms in a dynamic way. The application was inspired by a percussion for music therapists course where students workshopped meditative drum circles based on polyrhythms. I utilized D3.js to create dynamic SVG elements that allow intuitive user interaction with Web Audio API. Users can create sounds or investigate the characteristics of different polyrhythm blocks.',
    live: 'https://boopblocks.herokuapp.com/',
    github: 'https://github.com/joannerd/boopblocks',
    img: '/images/boopblocks.gif',
  },
];

interface ProjectProps {
  live: string;
  github: string;
  title: string;
  tech: string;
  img: string;
}

const LiveLink = ({
  live,
  title,
}: Pick<ProjectProps, 'live' | 'title'>): JSX.Element => (
  <a
    onClick={() =>
      gtag.event({
        action: 'visit_coding_project',
        category: 'engagement',
        label: `Visit ${title} live through icon`,
        value: 1,
      })
    }
    href={live}
    aria-label={title}
    className="fa fa-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    {null}
  </a>
);

const GitHubLink = ({
  github,
  title,
}: Pick<ProjectProps, 'github' | 'title'>): JSX.Element => (
  <a
    onClick={() =>
      gtag.event({
        action: 'visit_github',
        category: 'engagement',
        label: `Visit ${title}'s GitHub`,
        value: 1,
      })
    }
    href={github}
    aria-label={`${title} GitHub`}
    className="fab fa-github"
    target="_blank"
    rel="noopener noreferrer"
  >
    {null}
  </a>
);

const Project = ({
  live,
  github,
  title,
  tech,
  img,
}: ProjectProps): JSX.Element => (
  <article className={styles.project}>
    {img.length ? <img className={styles.image} src={img} alt={title} /> : null}
    <section className={styles.content}>
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.tech}>{tech}</span>
      <span className={styles.info}>
        <LiveLink live={live} title={title} />
        <GitHubLink github={github} title={title} />
      </span>
    </section>
  </article>
);

const ProjectsList = (): JSX.Element => {
  const [isSafari, setIsSafari] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isBrowserSafari = window.navigator.userAgent.toLowerCase().includes('safari');
      setIsSafari(isBrowserSafari);
    }
  }, []);

  return (
    <article className={isSafari ? styles.safariProjects : styles.projects}>
      {projects.map((project) => (
        <Project {...project} key={project.id} />
      ))}
    </article>
  );
  };

export default ProjectsList;
