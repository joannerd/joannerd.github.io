import React, { useRef, useState } from 'react';

const NavBar = () => {
  const [hiddenClass, setHiddenClass] = useState('hidden');
  const bars = useRef();
  const handleMouseEnter = () => setHiddenClass('');
  const handleMouseLeave = () => setHiddenClass('hidden');
  
  return (
    <div ref={bars} className="bars" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <i />
      <i />
      <i />
      <nav className={hiddenClass}>
        <li><a href="#home" className="fas fa-angle-up">{null}</a></li>
        <li><a href="#profile">Profile</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#music">Music</a></li>
        <li><a href="#photography">Photo</a></li>
        <li><a href="#contact">Contact</a></li>
      </nav>
    </div>
  );
};

export default NavBar;
