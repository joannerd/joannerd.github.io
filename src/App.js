import React, { useState } from 'react';
import Profile from './components/Profile';
import ProjectsList from './components/ProjectsList';
import SkillsList from './components/SkillsList';
import Music from './components/Music';
import Photography from './components/Photography';
import Writing from './components/Writing';

const COMPONENTS = {
  profile: 'Profile',
  resume: 'Resume',
  coding: 'Coding',
  music: 'Music',
  writing: 'Writing',
  photography: 'Photography',
};

const App = () => {
  const [activeComponent, setActiveComponent] = useState(COMPONENTS.profile);

  const handleClick = (e) => {
    const componentName = e.target.name;
    if (Object.values(COMPONENTS).includes(componentName)) {
      setActiveComponent(componentName);
    }
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case COMPONENTS.resume:
        return <SkillsList />;
      case COMPONENTS.coding:
        return <ProjectsList />;
      case COMPONENTS.music:
        return <Music />;
      case COMPONENTS.writing:
        return <Writing />;
      case COMPONENTS.photography:
        return <Photography />;
      default:
        return <Profile />;
    }
  }

  return (
    <>
      <h1>Joanna Chen</h1>
      <nav onClick={handleClick}>
        {Object.values(COMPONENTS).map((componentName) => {
          const isActive = componentName === activeComponent ? 'active' : '';
          return (
            <button
              name={componentName}
              key={componentName}
              className={isActive}
            >
              {componentName}
            </button>
          );
        })}
      </nav>

      <main>
        <h2 className="social-links">
          <a
            href="mailto:joannerdchen@gmail.com"
            aria-label="Email Joanna at joannerdchen@gmail.com"
            className="fa fa-envelope"
            target="_blank"
            rel="noopener noreferrer"
          >
            {null}
          </a>
          <a
            href="https://github.com/joannerd"
            aria-label="Visit Joanna's Github at https://github.com/joannerd"
            className="fab fa-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            {null}
          </a>
          <a
            href="https://medium.com/@joannerd"
            aria-label="Visit Joanna's Medium at https://medium.com/@joannerd"
            className="fab fa-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            {null}
          </a>
          <a
            href="https://www.linkedin.com/in/joannerd/"
            aria-label="Visit Joanna's LinkedIn at https://www.linkedin.com/in/joannerd/"
            className="fab fa-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            {null}
          </a>
          <a
            href="https://angel.co/joannerd"
            aria-label="Visit Joanna's Angel List at https://angel.co/joannerd"
            className="fab fa-angellist"
            target="_blank"
            rel="noopener noreferrer"
          >
            {null}
          </a>
        </h2>
        {renderComponent()}
      </main>

      <footer>&copy; 2020 Joanna Chen · LA</footer>
    </>
  );
};

export default App;
