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

const App = () => (
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

export default App;
