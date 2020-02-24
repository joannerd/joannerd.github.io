import React from "react";
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
        I'm a full stack software engineer and problem-solving percussionist. I have a wide background in creative and collaborative industries, ranging from music performance to client-facing hospitality and team management as a former jack-of-all-trades logistics manager. From coding to music, it's always been my nature to constantly improve myself. From debugging to resolving last-minute logistics, I'm an avid problem solver and have always been a reliable team member.
      </p>
      <h3>Inspiration</h3>
      <p>
        I made the switch to technology so that I could have a life of problem solving, constant learning, and team collaboration. In my last year of music school, I took a VR/AR course at MIT that really sparked inspiration in me! The course gave Berklee musicians and MIT programmers the chance to collaborate and create sprint projects where we brainstormed problems to solve, conducted user research to validate proof of concept, and coded out minimum viable products.
      </p>
      <h3>Goal</h3>
      <p>
        Joining a fast-paced and growth-oriented community of skilled developers is exactly what I'm looking for! I'm seeking an autonomous junior role where I will be challenged to grow at an exponential rate. I have strong skills in Ruby on Rails and React, so I can definitely hit the ground running to make meaningful contributions to a team. As growth is very important to me, I'm eager to expand my skill set and would love to get hands-on experience with different technologies!
      </p>
    </section>
  </article>
)

export default Profile;