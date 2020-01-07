import React from "react";

class Home extends React.Component {
  componentDidMount() {
    let i = 0;
    let j = 0;
    let firstLine = "joannaChen( );";
    let secondLine = "innovation, creativity, problem solving, team building";

    const typeFirstLine = () => {
      if (i < firstLine.length) {
        document.getElementById("first-line").innerHTML = firstLine.substr(0, i+1);
        i++;
        setTimeout(typeFirstLine, 75);
      }
    }

    const typeSecondLine = () => {
      if (j < secondLine.length) {
        document.getElementById("second-line").innerHTML = secondLine.substr(0, j+1);
        j++;
        setTimeout(typeSecondLine, 75);
      }
    }

    typeFirstLine();
    window.setTimeout(typeSecondLine, 2000)
  }

  render() {
    return(
      <article id="home">
        <div className="keyboard"></div>
        <span id="first-line"></span>
        <br/>
        <span id="second-line"></span>
      </article>
    )
  } 
}

export default Home;