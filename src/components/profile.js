import React from 'react';
import Joanna from '../media/joanna.jpg';

const Profile = () => (
  <article id="profile">
    <div>
      <img src={Joanna} className="joanna-img" alt="joanna" />
    </div>
    <section>
      <h2>Profile</h2>
      <h3>Hi, I'm Joanna Chen!</h3>
      <p>
        I'm a software engineer and curriculum developer who loves to instill
        passion for exploration! I have a background in creative and 
        collaborative industries, ranging from percussion performance to 
        client-facing team management. From coding to music, it's always been 
        my nature to constantly grow and improve myself. As a curriculum 
        developer, I’ve grown exponentially by diving in with fearless 
        enthusiasm! I learned at a rapid pace to spearhead new coding projects 
        and create instructional videos for the next generation of software 
        engineers.
      </p>
      <h3>Inspiration</h3>
      <p>
        I made the switch to technology so that I could have a life of problem 
        solving, constant learning, and team collaboration. In my last year of 
        music school, I took a VR/AR course at MIT that really sparked 
        inspiration in me! The course gave Berklee musicians and MIT programmers 
        the chance to collaborate and create sprint projects where we 
        brainstormed problems to solve, conducted user research to validate 
        proof of concept, and coded out minimum viable products.
      </p>
    </section>
  </article>
)

export default Profile;
