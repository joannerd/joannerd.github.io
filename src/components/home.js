import React from "react";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      firstLine: '',
      secondLine: ''
     };

    this.setState = this.setState.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  componentDidMount() {
    let i = 0;
    let j = 0;
    let firstLine = "Hello, my name is Joanna.";
    let secondLine = "Welcome to my portfolio.";

    const typeFirstLine = () => {
      if (i < firstLine.length) {
        document.getElementById("first-line").value = firstLine.substr(0, i+1);
        i++;
        setTimeout(typeFirstLine, 75);
      }
    }

    const typeSecondLine = () => {
      if (j < secondLine.length) {
        document.getElementById("second-line").value = secondLine.substr(0, j+1);
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
        <input type="text" onChange={this.update("firstLine")} id="first-line" />
        <input type="text" onChange={this.update("secondLine")} id="second-line" />
        <div className="keyboard"></div>
      </article>
    )
  } 
}

export default Home;