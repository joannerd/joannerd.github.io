import React from "react";
import Resume from '../media/Joanna_Chen_Resume.pdf';

const skills = [
  'React', 'Redux', 'JavaScript', 'Ruby', 'Rails', 'HTML5', 'CSS3', 'Vanilla DOM', 'D3', 'AJAX', 'Active Record',
  'AWS', 'Agile Methodology', 'Capybara', 'CRUD', 'Git', 'Heroku', 'jBuilder', 'jQuery', 'JSON', 'MVC', 'Mapbox GL JS',
  'Mocha', 'PostgreSQL', 'REST', 'RSpec', 'SQL', 'TDD', 'Webpack', 'Crowd Compass', 'Cvent', 'Pivotal', 'Salesforce', 'Smartsheet'
]

const About = () => (
  <article id="about">
    <h2>Joanna Chen</h2>
    <section>
      <div>
        <h3>About Me</h3>
        <p>I first learned to code in middle school, where I got really excited about manipulating HTML and CSS for a custom blog layout. In the last year of my music degree, I realized I hadn’t explored programming like how I did when I was younger. I took a Berklee ICE / MIT course for mixed reality development where I was deeply inspired by the innovative ideas and collaborative nature of my peers. I have been diving into software development ever since.</p>
      </div>
      <a href={Resume}
        target="_blank"
        rel="noopener noreferrer"><div className="button resume">RESUME</div></a>

      <div className="skills-container">
        <h3>Skills</h3>
        <ul className="skills">
          {skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  </article>
);

export default About;