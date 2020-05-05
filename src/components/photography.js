import React from 'react';
import pic1 from '../media/1.png';
import pic2 from '../media/2.png';
import pic3 from '../media/3.png';
import pic4 from '../media/4.png';
import pic5 from '../media/5.png';
import pic6 from '../media/6.png';

const photoLinks = [
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6
];

const Photography = () => (
  <article id="photography">
    <h2>
      <a href="https://www.instagram.com/junnacphotos/"
        className="fab fa-instagram"
        target="_blank"
        rel="noopener noreferrer">
        {null}
      </a>
      Photography
    </h2>

    <ul className="projects">
      {photoLinks.map((link, i) => (
        <img src={link}
          className="project"
          width="400px"
          alt={link}
          key={i}
        />
      ))}
    </ul>
  </article>
)

export default Photography;
