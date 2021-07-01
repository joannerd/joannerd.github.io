import Title from '../components/Title';
import styles from '../styles/Resume.module.css';
import * as gtag from '../lib/gtag';

const experiences = [
  {
    company: 'Metallicus Inc.',
    dates: 'Oct 2020 - present',
    jobs: [
      {
        title: 'Software Engineer',
        dates: 'Oct 2020 - present',
        bullets: [
          'As a core member of the Proton team, built 100% of the company’s frontend React web experience (an NFT marketplace, 7 greenfield dApps, an internal dashboard, and Proton Web SDK)',
          'Drove the adoption of TypeScript, Next.js, React hooks, and accessibility testing and spearheaded team group learning to inspire engineering growth (topics: EOSIO blockchain, web accessibility)',
          'Exhibited leadership by communicating with other teams to resolve prod issues while manager was away',
          'Mentored intern through educational calls and thorough code-reviews (received public feedback for being a “great teacher who inspires them to be a better programmer”)',
          'Hosted a game night to help HR promote collaboration, bonding, and cross-departmental communication',
        ],
      },
    ],
  },
  {
    company: 'App Academy',
    dates: 'Jan 2020 - Oct 2020',
    jobs: [
      {
        title: 'Software Engineer Intern',
        dates: 'June 2020 - Sep 2020',
        bullets: [
          'Architected frontend for learning management system with modern tech (TypeScript, React, Material-UI)',
          'Developed API endpoints in C# following test-driven development (.NET Core, CQRS)',
          'Contributed to domain-model planning to solidify domain-driven-design before app development',
        ],
      },
      {
        title: 'Curriculum Developer',
        dates: 'March 2020 - Oct 2020',
        bullets: [
          'Rapidly researched and taught React, Node.js, Flask, and OOP with educational projects and tutorials',
          'Launched new React, Redux, and Hooks curriculum and managed team of senior developer contractors',
          'Presented lectures on React lifecycle methods, React hooks, frontend state management, and user auth',
        ],
      },
      {
        title: 'Technical Interviewer',
        dates: 'Jan 2020 - March 2020',
        bullets: [
          'Conducted video technical and behavioral screens on HackerRank in JavaScript, Ruby, and Python',
        ],
      },
    ],
  },
  {
    company: 'Boston Conservatory at Berklee',
    dates: 'Oct 2018 - April 2019',
    jobs: [
      {
        title: 'Production Manager',
        dates: 'Jan 2020 - March 2020',
        bullets: [
          'Custom staff role due to 4-years of experience as an essential, cross-departmental student employee',
          'Solved logistics problems thoroughly and quickly in high-pressure, client-facing concerts and events',
          'Supervised and trained a team of 30+ student employees on professional concert services standards',
        ],
      },
    ],
  },
];

const projects = [
  {
    title: 'SCMIAC',
    technologies:
      'Next.js, React (TypeScript), Google Drive API (Python, Node.js)',
    description:
      'Built for Southern California Marimba’s 2021 International Artist Competition to streamline anonymous applicant material navigation in the judging process of 200 preliminary round participants',
    bullets: [
      'Single-handedly designed, developed, and tested an intuitive web app to easily listen to an anonymous applicant’s MP3 files while reviewing their PDF sheet music',
      'Developed Python script as proof of concept to bulk-anonymize applicant files with Google Drive API',
      'Used Node.js Google Drive API in server-side Next.js code to fetch real-time Google Form updates',
      'Implemented light-weight data processing to extract and organize data from Google Spreadsheets',
    ],
  },
  {
    title: 'Brewer',
    technologies:
      'Ruby on Rails, PostgreSQL, React/Redux, Mapbox API, Yelp REST API',
    description:
      'Full-stack content platform that connects craft beer enthusiasts through a forum and top brewery travel guides',
    bullets: [
      'Autonomously developed and designed the database schema, web API, and frontend application',
      'Utilized AWS S3 and Rails Active Storage to reduce server load and allow app to scale',
    ],
  },
  {
    title: 'Synewaveshi',
    technologies: 'Express.js, React, Web Speech API, Socket.io, Tone.js',
    description:
      'Pet project to explore voice-controlled music generation and co-creation of sounds via web browser',
    bullets: [
      'Set up WebSocket connection for users to co-create musical tones with real-time voice input',
      'Managed chat history storage with linked list for organized WebSocket interaction in the backend API',
    ],
  },
];

const education = [
  {
    school: 'App Academy (SF)',
    description: 'Software development intensive (Ruby, JavaScript, SQL)',
    dates: 'Aug 2019 - Dec 2019',
  },
  {
    school: 'Boston Conservatory at Berklee',
    description: 'Bachelor of Music: Percussion (3.87 GPA)',
    dates: 'Aug 2014 - May 2018',
  },
  {
    school: 'Massachusetts Institute of Technology',
    description: '2.S972/ICE-P435 (VR/AR Workshop)',
    dates: 'Aug 2017 - Dec 2017',
  },
];

const Resume = (): JSX.Element => {
  const viewResume = () => {
    gtag.event({
      action: 'view_resume',
      category: 'engagement',
      label: 'View resume',
      value: 1,
    });
    window.open(
      'https://brewer-dev.s3-us-west-1.amazonaws.com/portfolio/Joanna_Chen_Resume.pdf'
    );
  };

  return (
    <article>
      <Title pageTitle="Resume | Joanna Chen" />
      <h2 className={styles.title}>Experience</h2>
      <ul>
        {experiences.map(({ company, jobs }) => (
          <li className={styles.experience} key={company}>
            <h3 className={styles.company}>{company}</h3>
            {jobs.map(({ title, dates, bullets }) => (
              <div key={title}>
                <span className={styles.info}>
                  <h4 className={styles.subtitle}>{title}</h4>
                  <p className={styles.dates}>{dates}</p>
                </span>
                <ul className={styles.bullets}>
                  {bullets.map((bullet, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={`${title}-bullet-${i}`}>
                      <p className={styles.bullet}>{bullet}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </li>
        ))}
      </ul>
      <h2 className={styles.title}>Projects</h2>
      <ul>
        {projects.map(({ title, technologies, description, bullets }) => (
          <li className={styles.experience} key={title}>
            <span className={styles.info}>
              <h3 className={styles.subtitle}>{title}</h3>
              <p className={styles.technologies}>{technologies}</p>
            </span>
            <ul className={styles.bullets}>
              <li key="description">
                <p className={styles.bullet}>{description}</p>
              </li>
              {bullets.map((bullet, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <li key={`${title}-bullet-${i}`}>
                  <p className={styles.bullet}>{bullet}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <h2 className={styles.title}>Education</h2>
      <ul>
        {education.map(({ school, description, dates }) => (
          <li className={styles.experience} key={school}>
            <span className={styles.info}>
              <h3 className={styles.subtitle}>{school}</h3>
              <p className={styles.dates}>{dates}</p>
            </span>
            <p>{description}</p>
          </li>
        ))}
      </ul>
      <button
        role="link"
        type="button"
        aria-label="Joanna Chen resume"
        className={styles.resume}
        onClick={viewResume}
      >
        <i className="fas fa-file-download" />
        <span className={styles.tooltip}>Download resume</span>
      </button>
    </article>
  );
};

export default Resume;
