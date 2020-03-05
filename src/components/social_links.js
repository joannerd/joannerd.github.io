import React from 'react';
import Resume from '../media/Joanna_Chen_Resume.pdf';

const SocialLinks = () => (
  <aside className="social-links">
    <a href="https://angel.co/xchenj"
      className="fab fa-angellist"
      target="_blank"
      rel="noopener noreferrer">{null}</a>
    <a href="https://github.com/junnac"
      className="fab fa-github"
      target="_blank"
      rel="noopener noreferrer">{null}</a>
    <a href="https://www.linkedin.com/in/xchenj/"
      className="fab fa-linkedin"
      target="_blank"
      rel="noopener noreferrer">{null}</a>
    <a href={Resume}
      className="fa fa-file"
      target="_blank"
      rel="noopener noreferrer">{null}</a>
    <a href="mailto:x.chenj@gmail.com"
      className="fa fa-envelope"
      target="_blank"
      rel="noopener noreferrer">{null}</a>
  </aside>
)

export default SocialLinks;