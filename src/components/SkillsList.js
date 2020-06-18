import React from 'react';
import Resume from '../media/Joanna_Chen_Resume.pdf';

const languages = [
  'JavaScript',
  'Python',
  'Ruby',
  'C#',
  'SQL',
  'CSS3',
  'HTML5',
];

const frameworks = [
  'React',
  'Rails',
  'Flask',
  'Node.js',
  '.NET Core',
  'Express.js',
];

const tools = [
  'REST APIs',
  'Docker',
  'Redux',
  'Git',
  'Jira',
  'Heroku',
  'MongoDB',
  'PostgreSQL',
];

const experiences = [
  'Curriculum Developer',
  'Technical Admissions Specialist',
  'Production Manager',
  'AV Technician',
  'Admissions Assistant',
  'Freelance Percussionist',
]

const Skills = () => (
  <article id="skills">
    <a href={Resume}
      target="_blank"
      rel="noopener noreferrer">
      <h2>Resume</h2>
    </a>
    <div className="resume-list">
      <ul>
        <h3>Frameworks</h3>
        {frameworks.map((fw) => <li key={fw}>{fw}</li>)}
      </ul>
      <ul>
        <h3>Languages</h3>
        {languages.map((lang) => <li key={lang}>{lang}</li>)}
      </ul>
      <ul>
        <h3>Tools</h3>
        {tools.map((tool) => <li key={tool}>{tool}</li>)}
      </ul>
    </div>
    <ul className="experience">
      <h3>Experience</h3>
      {experiences.map((exp) => <li key={exp}>{exp}</li>)}
    </ul>
    <a href={Resume}
      id="download-resume"
      target="_blank"
      rel="noopener noreferrer">
      DOWNLOAD RESUME
    </a>
  </article>
)

export default Skills;
