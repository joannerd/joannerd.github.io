import React, { useEffect } from 'react';
import SocialLinks from './components/social_links';
import Home from './components/home';
import Profile from './components/profile';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import NavBar from './components/navbar';

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const nav = document.querySelector("nav");
    const bars = document.querySelector(".bars");

    bars.addEventListener("mouseover", () => nav.classList.remove("hidden"));
    bars.addEventListener("mouseout", () => nav.classList.add("hidden"));
  });

  return (
    <div className="app">
      <SocialLinks />
      <main>
        <Home />
        <Profile />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <NavBar />
    </div>
  );
}

export default App;
