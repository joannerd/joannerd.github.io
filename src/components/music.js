import React from 'react';

const youtubeIds = [
  "v6C7oUaxNec", // Volans
  "nSkBmDacal8", // Allevi
  "iNYOCcg3GNA", // Black House
  "x4ldxK6fcNQ", // Lunsqui
  // "Tbs8hpat8U8", // Cuong
  // "e9e_p3SS1tA", // Hughes
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
