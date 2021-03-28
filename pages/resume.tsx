import styles from '../styles/Resume.module.css';
import * as gtag from '../lib/gtag';

const skills = [
  {
    title: 'Experience',
    list: [
      'Software Engineer',
      'App Academy Instructor',
      'Curriculum Developer',
      'Technical Interviewer',
      'Production Manager',
      'AV Technician',
    ],
  },
  {
    title: 'Languages',
    list: [
      'TypeScript',
      'JavaScript',
      'Python',
      'Ruby',
      'C#',
      'SQL',
      'CSS3',
      'HTML5',
    ],
  },
  {
    title: 'Frameworks',
    list: [
      'React',
      'Flask',
      'Gatsby',
      'Next.js',
      'Node.js',
      '.NET Core',
      'Express.js',
      'Ruby on Rails',
    ],
  },
  {
    title: 'Tools',
    list: [
      'Git',
      'Jira',
      'Zeplin',
      'Docker',
      'GraphQL',
      'MongoDB',
      'PostgreSQL',
      'Google Cloud',
    ],
  },
];

const Skills = (): JSX.Element => {
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
      <div className={styles.skills}>
        {skills.map(({ title, list }) => (
          <ul key={title}>
            <h3 className={styles.title}>{title}</h3>
            {list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ))}
      </div>
      <button
        role="link"
        type="button"
        aria-label="Joanna Chen resume"
        className={styles.resume}
        onClick={viewResume}
      >
        <i className="fas fa-file-download" />
      </button>
    </article>
  );
};

export default Skills;
