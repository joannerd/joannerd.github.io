import React from 'react';
import Resume from './media/Joanna_Chen_Resume.pdf';

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/xchenj/" 
        className="fab fa-linkedin"
        target="_blank"
        rel="noopener noreferrer">{null}</a>
      <a href="https://angel.co/xchenj" 
        className="fab fa-angellist"
        target="_blank"
        rel="noopener noreferrer">{null}</a>
      <a href="https://github.com/junnac" 
        className="fab fa-github"
        target="_blank"
        rel="noopener noreferrer">{null}</a>
      <a href="https://www.facebook.com/x.joannachen"
        className="fab fa-facebook-square"
        target="_blank"
        rel="noopener noreferrer">{null}</a>
      <a href="mailto:x.chenj@gmail.com" 
        className="fa fa-envelope"
        target="_blank"
        rel="noopener noreferrer">{null}</a>
      <a href={Resume} 
        className="fa fa-file-text"
        target="_blank"
        rel="noopener noreferrer">{null}</a>
    </div>
  );
}

export default SocialLinks;
