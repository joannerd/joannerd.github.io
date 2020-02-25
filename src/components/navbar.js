import React from 'react';

const NavBar = () => (
  <div className="bars">
    <i />
    <i />
    <i />
    <nav className="hidden">
      <li><a href="#home" className="fas fa-angle-up">{null}</a></li>
      <li><a href="#profile">Profile</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#music">Music</a></li>
      <li><a href="#photography">Photography</a></li>
      <li><a href="#contact">Contact</a></li>
    </nav>
  </div>
);

export default NavBar;
