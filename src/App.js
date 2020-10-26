import React, { useState } from 'react';
import Profile from './components/Profile';
import CodeProjects from './components/CodeProjects';
import SkillsList from './components/SkillsList';
import Music from './components/Music';
import Photo from './components/Photo';
import Blog from './components/Blog';

const COMPONENTS = {
  profile: 'Profile',
  resume: 'Resume',
  code: 'Code',
  music: 'Music',
  photo: 'Photo',
  blog: 'Blog',
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
      case COMPONENTS.code:
        return <CodeProjects />;
      case COMPONENTS.music:
        return <Music />;
      case COMPONENTS.blog:
        return <Blog />;
      case COMPONENTS.photo:
        return <Photo />;
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
        <div className="social-links">
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
        </div>
        {renderComponent()}
      </main>

      <footer>&copy; 2020 Joanna Chen · LA</footer>
    </>
  );
};

export default App;
