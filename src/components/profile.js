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
        As a former jack-of-all-trades logistics manager turned software engineer, I love to problem solve and work in teams. Before transitioning to technology, I majored in classical percussion performance. Even as a musician, I was always fascinated by technology. I worked intensively with audio and lighting hardware for 5 years as an Audio/Visual and Production team member.
      </p>

      <h3>Inspiration</h3>
      <p>
        I first learned to code in middle school, where I got really excited about manipulating HTML and CSS for a custom blog layout. In the last year of my music degree, I realized I hadn’t explored programming like how I did when I was younger. I took a Berklee ICE / MIT course for mixed reality development where I was deeply inspired by the innovative ideas and collaborative nature of my peers. I have been diving into software development ever since.
      </p>

      <a href={Resume}
        target="_blank"
        rel="noopener noreferrer"><div className="button resume">RESUME</div></a>
    </section>
  </article>
)

export default Profile;