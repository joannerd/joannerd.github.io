import React from "react";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      role: 'a web developer',
      interval: ''
     };

    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    const roles = ['a web developer', 'a creative', 'an innovator', 'an engineer'];

    let i = 1;
    const interval = window.setInterval(() => {
      this.setState({ role: roles[i] });
      i++;
      if (i === roles.length) i = 0;
    }, 1200);

    this.setState({ interval });
  }

  render() {
    return(
      <article id="home">
        <h1>Hi, my name is Joanna.</h1>
        <h1>I'm {this.state.role}</h1>
        <div className="keyboard"></div>
      </article>
    )
  } 
}

export default Home;