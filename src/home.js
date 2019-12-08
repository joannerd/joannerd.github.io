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
    const roles = ['an innovator', 'a creative', 'an engineer'];

    let i = 0;
    const interval = window.setInterval(() => {
      this.setState({ role: roles[i] });
      i++;
      if (i === roles.length) window.clearInterval(interval);
    }, 1200);

    this.setState({ interval });
  }

  render() {
    return(
      <div className="home">
        <h1>Hi, my name is Joanna.</h1>
        <h1>I'm {this.state.role}</h1>
        <div className="keyboard"></div>
      </div>
    )
  } 
}

export default Home;