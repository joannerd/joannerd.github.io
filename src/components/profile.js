import React from "react";
import Resume from '../media/Joanna_Chen_Resume.pdf';

const skills = [
  'React', 'Redux', 'JavaScript', 'Ruby', 'Rails', 'HTML5', 'CSS3', 'Vanilla DOM', 'D3', 'AJAX', 'Active Record',
  'AWS', 'Agile Methodology', 'Capybara', 'CRUD', 'Git', 'Heroku', 'jBuilder', 'jQuery', 'JSON', 'MVC', 'Mapbox GL JS',
  'Mocha', 'PostgreSQL', 'REST', 'RSpec', 'SQL', 'TDD', 'Webpack', 'Cvent', 'Salesforce', 'Smartsheet'
]

const Profile = () => (
  <article id="profile">
    <h2>Profile</h2>
    <section>
      <h3>About</h3>
      <p>
        I'm a musician turned programmer, and I love the art of learning and practicing new things. I received my Bachelor of Music from Boston Conservatory, where I focused on contemporary percussion music and the theory/history of classical music. Even as a musician, I've always been fascinated by technology - the first time I played around with code was in middle school, where I got really excited about being able to manipulate my own blog design. I've also always loved being part of a team. Collaborating with others always made me look forward to spending time on work and practice.
      </p>

      <h3>Inspiration</h3>
      <p>
        In the last year of my music degree, I took a class about VR/AR development. I realized I hadn’t explored programming like how I did when I was younger. My peers and the group projects of the class sparked inspiration in me. The class made me realize I want to spend my life learning and collaborating with hardworking people. I was deeply inspired by the innovative mindset and collaborative nature of my peers - I've been diving into software development ever since.
      </p>

      <a href={Resume}
        target="_blank"
        rel="noopener noreferrer"><div className="button resume">RESUME</div></a>

      <h3>Skills</h3>
      <ul className="skills">
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </section>
  </article>
);

export default Profile;