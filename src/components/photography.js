import React from 'react';
import pic1 from '../media/1.png';
import pic2 from '../media/2.png';
import pic3 from '../media/3.png';
import pic4 from '../media/4.png';
// import pic5 from '../media/5.png';
// import pic6 from '../media/6.png';

const photoLinks = [
  pic1,
  pic2,
  pic3,
  pic4,
  // pic5,
  // pic6
];

const Photography = () => (
  <article>
    <a href="https://www.instagram.com/junnacphotos/"
      aria-label="Visit Joanna's Instagram at https://www.instagram.com/junnacphotos/"
      target="_blank"
      rel="noopener noreferrer"
    >
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
    </a>
  </article>
)

export default Photography;
