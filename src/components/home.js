import React, { useEffect } from "react";

const Home = () => {
  let i = 0;
  const typeFirstLine = () => {
    let firstLine = "joannaChen( );";
    if (i < firstLine.length) {
      document.getElementById("first-line").innerHTML = firstLine.substr(0, i+1);
      i++;
      setTimeout(typeFirstLine, 100);
    }
  }

  useEffect(() => {
    typeFirstLine();
  });

  return(
    <article id="home">
      <span id="first-line"></span>
      <div className="keyboard"></div>
    </article>
  )
}

export default Home;