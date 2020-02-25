import React from "react";
import reactLogo from '../media/react.png';
import reduxLogo from '../media/redux.png';
import javaScriptLogo from '../media/javascript.svg';
import rubyLogo from '../media/ruby.svg';
import railsLogo from '../media/rails.svg';
import awsLogo from '../media/aws.svg';
import cssLogo from '../media/css.svg';
import d3Logo from '../media/d3.svg';
import gitLogo from '../media/git.svg';
import htmlLogo from '../media/html.svg';
import jqueryLogo from '../media/jquery.svg';
import postgresqlLogo from '../media/postgresql.svg';
import nodejsLogo from '../media/nodejs.svg';
import mongodbLogo from '../media/mongodb.png';
import mapboxLogo from '../media/mapbox.svg';

const skills = [
  reactLogo,
  reduxLogo,
  javaScriptLogo,
  rubyLogo,
  railsLogo,
  nodejsLogo,
  d3Logo,
  jqueryLogo,
  htmlLogo,
  cssLogo,
  awsLogo,
  mapboxLogo,
  gitLogo,
  postgresqlLogo,
  mongodbLogo,
]

const Skills = () => (
  <article id="skills">
    <h2>Technical Skills</h2>
    <ul className="skill-list">
      {skills.map((skill, i) => (
        <img src={skill} alt={skill} key={i} />
      ))}
    </ul>
  </article>
)

export default Skills;