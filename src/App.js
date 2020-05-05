import React, { useEffect } from 'react';
import SocialLinks from './components/SocialLinks';
import Home from './components/Home';
import Profile from './components/Profile';
import ProjectsList from './components/ProjectsList';
import SkillsList from './components/SkillsList';
import Music from './components/Music';
import Photography from './components/Photography';
import Contact from './components/Contact';
import NavBar from './components/Navbar';

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
        <ProjectsList />
        <SkillsList />
        <Music />
        <Photography />
        <Contact />
      </main>
      <NavBar />
    </div>
  );
}

export default App;
