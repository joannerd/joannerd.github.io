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
  'Next.js',
  'Node.js',
  'Express.js',
  '.NET Core',
];

const tools = [
  'REST APIs',
  'Docker',
  'Git',
  'Jira',
  'MongoDB',
  'PostgreSQL',
];

const experiences = [
  'Software Engineer',
  'App Academy Instructor',
  'Curriculum Developer',
  'Technical Interviewer',
  'Production Manager',
  'AV Technician',
];

const Skills = () => (
  <article id="skills">
    <div className="resume-list">
      <ul>
        <h3>Experience</h3>
        {experiences.map((exp) => (
          <li key={exp}>{exp}</li>
        ))}
      </ul>
      <ul>
        <h3>Languages</h3>
        {languages.map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <ul>
        <h3>Frameworks</h3>
        {frameworks.map((fw) => (
          <li key={fw}>{fw}</li>
        ))}
      </ul>
      <ul>
        <h3>Tools</h3>
        {tools.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>
    </div>
    <button
      onClick={() =>
        window.open(
          'https://brewer-dev.s3-us-west-1.amazonaws.com/portfolio/Joanna_Chen_Resume.pdf'
        )
      }
    >
      download
    </button>
  </article>
);

export default Skills;
