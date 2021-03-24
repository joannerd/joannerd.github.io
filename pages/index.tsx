import { useState, useEffect } from 'react';
import SocialLinks from '../components/SocialLinks';
import Footer from '../components/Footer';
import Profile from '../components/Profile';
import Coding from '../components/Coding';
import Resume from '../components/Resume';
import Music from '../components/Music';
import Photo from '../components/Photo';
import styles from '../styles/Home.module.css';

const COMPONENTS = {
  profile: 'Profile',
  resume: 'Resume',
  code: 'Code',
  music: 'Music',
  photo: 'Photo',
};

const App = () => {
  const [activeComponent, setActiveComponent] = useState<string>(
    COMPONENTS.profile
  );
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState<boolean>(
    false
  );

  const scrollListener = () => {
    const totalHeight = window.innerHeight + window.scrollY;
    const hasScrolled = totalHeight >= document.body.offsetHeight;
    setHasScrolledToBottom(hasScrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  const renderComponent = () => {
    switch (activeComponent) {
      case COMPONENTS.resume:
        return <Resume />;
      case COMPONENTS.code:
        return <Coding />;
      case COMPONENTS.music:
        return <Music />;
      case COMPONENTS.photo:
        return <Photo />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Joanna Chen</h1>
      <nav className={styles.nav}>
        {Object.values(COMPONENTS).map((page) => {
          const isActive = page === activeComponent;
          return (
            <button
              type="button"
              onClick={() => setActiveComponent(page)}
              name={page}
              key={page}
              className={isActive ? styles.activeButton : styles.button}
            >
              {page}
            </button>
          );
        })}
      </nav>

      <main>
        <SocialLinks hasScrolledToBottom={hasScrolledToBottom} />
        {renderComponent()}
      </main>
      <Footer hasScrolledToBottom={hasScrolledToBottom} />
    </div>
  );
};

export default App;
