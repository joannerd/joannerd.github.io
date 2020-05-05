import React, { useState } from 'react';

const Home = () => {
  const firstLine = "joannaChen( );";
  const [name, setName] = useState('');
  const [i, setI] = useState(0);
  if (name.length < 14) {
    setTimeout(() => {
      setName(name + firstLine[i]);
      setI(i + 1);
    }, 150);
  }

  return(
    <article id="home">
      <span>{name}</span>
      <div className="keyboard"></div>
    </article>
  )
}

export default Home;
