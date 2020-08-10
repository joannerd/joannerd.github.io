import React from 'react';

const youtubeIds = [
  "0kCnhBc8Fvw", // LBT
  "nSkBmDacal8", // Allevi
  "v6C7oUaxNec", // Volans
  "x7xrRkymO74", // Pachelbel
  "x4ldxK6fcNQ", // Lunsqui
  "iNYOCcg3GNA", // Black House
  "e9e_p3SS1tA", // Hughes
];

const Music = () => (
  <ul className="projects">
    {youtubeIds.map(youtubeId => (
      <iframe
        className="project"
        width="400"
        height="250"
        title={youtubeId}
        src={`https://www.youtube.com/embed/${youtubeId}`}
        key={youtubeId}
      />
    ))}
  </ul>
)

export default Music;
