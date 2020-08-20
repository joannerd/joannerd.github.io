import React from 'react';

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
  'Express.js',
  '.NET Core',
];

const tools = [
  'REST APIs',
  'Docker',
  'Redux',
  'Git',
  'Jira',
  'Heroku',
  'CircleCI',
  'MongoDB',
  'PostgreSQL',
];

const experiences = [
  'Software Engineer',
  'Curriculum Developer',
  'Technical Interviewer',
  'Production Manager',
  'AV Technician',
]

const Skills = () => (
  <article id="skills">
    <div className="resume-list">
      <ul>
        <h3>Experience</h3>
        {experiences.map((exp) => <li key={exp}>{exp}</li>)}
      </ul>
      <ul>
        <h3>Languages</h3>
        {languages.map((lang) => <li key={lang}>{lang}</li>)}
      </ul>
      <ul>
        <h3>Frameworks</h3>
        {frameworks.map((fw) => <li key={fw}>{fw}</li>)}
      </ul>
      <ul>
        <h3>Tools</h3>
        {tools.map((tool) => <li key={tool}>{tool}</li>)}
      </ul>
    </div>
    <a href="https://brewer-dev.s3-us-west-1.amazonaws.com/portfolio/Joanna_Chen_Resume.pdf"
      aria-label="Download Joanna's resume"
      target="_blank"
      rel="noopener noreferrer">
      download
    </a>
  </article>
)

export default Skills;
