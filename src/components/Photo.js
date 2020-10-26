import React from 'react';
import pic1 from '../media/1.png';
import pic2 from '../media/2.png';
import pic3 from '../media/3.png';
import pic4 from '../media/4.png';
import pic5 from '../media/5.png';
import pic6 from '../media/6.png';

const photos = [
  {
    link: pic1,
    id: 'B7FMuw2AOaT',
  },
  {
    link: pic2,
    id: 'B6zNMYGAyBC',
  },
  {
    link: pic3,
    id: 'B69tjFagAOT',
  },
  {
    link: pic4,
    id: 'Bnv_r6Bjmn4',
  },
  {
    link: pic5,
    id: 'B641_kjAQNM',
  },
  {
    link: pic6,
    id: 'BlCUgmrjFhM',
  }
];

const Photo = () => (
  <ul className="projects photo">
    {photos.map(({ link, id }) => (
      <a href={`https://www.instagram.com/p/${id}`}
        aria-label={`Visit photo #${id} on Joanna's Instagram`}
        target="_blank"
        rel="noopener noreferrer"
        key={id}
      >
        <img src={link}
          className="project"
          alt={link}
        />
      </a>
    ))}
  </ul>
);

export default Photo;
