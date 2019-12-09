import React from 'react';
import SocialLinks from './social_links';
import Home from './home';
import About from './about';
import Projects from './projects';
import Contact from './contact';

class App extends React.Component {
  componentDidMount() {
    const nav = document.querySelector("nav");
    const bars = document.querySelector(".bars");

    bars.addEventListener("mouseover", () => {
      nav.classList.remove("hidden");
    })
    bars.addEventListener("mouseout", () => {
      nav.classList.add("hidden");
    })
  }

  render() {
    return (
      <div className="app">
        <SocialLinks />
        <main>
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>

        <div className="bars">
          <i/>
          <i/>
          <i/>
          <nav className="hidden">
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </nav>
        </div>

      </div>
    );
  }
}

export default App;
