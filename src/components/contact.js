import React from 'react';
import Resume from '../media/Joanna_Chen_Resume.pdf';

const Contact = () => (
  <article id="contact">
    <h2>Contact</h2>
    <section>
      <div>
        about questions, collaboration opportunities, or just to say hi.
      </div>

      <div className="contact-links">
        <a href="mailto:joannerdchen@gmail.com"
          target="_blank"
          rel="noopener noreferrer">
          joannerdchen@gmail.com
        </a>
        <a href="https://github.com/junnac"
          target="_blank"
          rel="noopener noreferrer">
          github
        </a>
        <a href="https://www.linkedin.com/in/joannerd/"
          target="_blank"
          rel="noopener noreferrer">
          linkedin
        </a>
        <a href="https://angel.co/joannerd"
          target="_blank"
          rel="noopener noreferrer">
          angel list
        </a>
        <a href={Resume}
          target="_blank"
          rel="noopener noreferrer">
          resume
        </a>
      </div>
    </section>

    <a href="#home" className="fas fa-chevron-up">{null}</a>
    <footer>
      &copy; 2020 Joanna Chen · LA
    </footer>
  </article>
)

export default Contact;
