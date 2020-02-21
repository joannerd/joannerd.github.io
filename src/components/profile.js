import React from "react";
import Resume from '../media/Joanna_Chen_Resume.pdf';
import Joanna from '../media/joanna.jpg';

const Profile = () => (
  <article id="profile">
    <div>
      <img src={Joanna} className="joanna-img" alt="joanna" />
    </div>
    <section>
      <h2>Profile</h2>
      <h3>About</h3>
      <p>
        Hi, I'm Joanna Chen and I'm a full stack software engineer! I have a wide background in creative and collaborative industries, ranging from classical percussion performance to client-facing interaction and team communication as a former jack-of-all-trades logistics manager. From coding to practicing music, it's always been my nature to constantly work towards improving myself. From debugging to fixing last-minute event logistic problems of all sorts, I've always loved to problem solve and work in teams.
      </p>
      <h3>Inspiration</h3>
      <p>
        I made the switch to technology so that I could have a life of problem solving, constant learning, and team collaboration. In my last year of music school, I took a VR/AR course at MIT that really sparked inspiration in me. The course gave Berklee musicians and MIT programmers the chance to collaborate and create sprint projects where we came up with a problem to solve, conducted user research, and coded out a minimum viable product.
      </p>
      <h3>Goal</h3>
      <p>
        Being a part of a fast-paced and growth-oriented community of skilled developers is exactly what I'm looking for! I'm looking for an autonomous junior role where I will be challenged to continuously grow at an exponential rate. I have strong skills in Ruby on Rails and React, so I'd love to hit the ground running with those frameworks to make meaningful contributions to a team. I'm also eager to expand my skill set, so I'm more than happy to get hands-on experience with different technologies!
      </p>

      <a href={Resume}
        target="_blank"
        rel="noopener noreferrer"><div className="button resume">RESUME</div></a>
    </section>
  </article>
)

export default Profile;