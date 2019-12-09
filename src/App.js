import React from 'react';
import SocialLinks from './components/social_links';
import Home from './components/home';
import Profile from './components/profile';
import Projects from './components/projects';
import Contact from './components/contact';

class App extends React.Component {
  componentDidMount() {
    const nav = document.querySelector("nav");
    const bars = document.querySelector(".bars");

    bars.addEventListener("mouseover", () => nav.classList.remove("hidden"));
    bars.addEventListener("mouseout", () => nav.classList.add("hidden"));
  }

  render() {
    return (
      <div className="app">
        
        <SocialLinks />

        <main>
          <Home />
          <Profile />
          <Projects />
          <Contact />
          <footer>
            &copy; 2019 Joanna Chen. Made in San Francisco, CA.
          </footer>
        </main>

        <div className="bars">
          <i/>
          <i/>
          <i/>
          <nav className="hidden">
            <li><a href="#home" class="fas fa-angle-up">{null}</a></li>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </nav>
        </div>

      </div>
    );
  }
}

export default App;
