import React, { useState } from 'react';

const Home = () => {
  const firstLine = 'joannaChen( );';
  const [i, setI] = useState(0);
  setTimeout(() => setI(i + 1), 125);

  return (
    <article id="home">
      <span>{firstLine.substring(0, i)}</span>
      <div className="keyboard"></div>
    </article>
  )
}

export default Home;
