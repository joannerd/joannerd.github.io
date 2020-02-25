import React from "react";

const youtubeIds = [
  "v6C7oUaxNec", // Volans
  "nSkBmDacal8", // Allevi
  "iNYOCcg3GNA", // Black House
  "Tbs8hpat8U8", // Cuong
  "x4ldxK6fcNQ", // Lunsqui
  "e9e_p3SS1tA", // Hughes
];

// const unusedLinks = [
//   "0kCnhBc8Fvw", // LBT
//   "8VwADzA7VAk", // Sueyoshi
//   "x7xrRkymO74", // Mimura
//   "YyGJr4vIvPQ", // Laurello
//   "IKb75hEs1b8", // Lutoslawski
// ];

const Music = () => (
  <article id="music">
    <h2>
      <a href="https://www.youtube.com/c/joannachenpercussion"
        className="fab fa-youtube"
        target="_blank"
        rel="noopener noreferrer">{null}</a>
      Music
    </h2>

    <ul className="projects">
      {youtubeIds.map((youtubeId, i) => (
        <iframe className="project" width="400" height="250" title={youtubeId} src={`https://www.youtube.com/embed/${youtubeId}`} key={i} />
      ))}
    </ul>
  </article>
)

export default Music;