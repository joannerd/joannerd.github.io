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
        Hi! My name is Joanna Chen. I'm a musician and former jack-of-all-trades logistics manager turned software engineer. I love to problem solve and work in teams. I recently graduated from App Academy, where I honed my skills in React / Redux and Ruby on Rails. Before transitioning to technology, I was a gigging percussionist who also loved to work in concert production. I was constantly improving my ability to adapt and learn quickly in the practice room and on-the-job producing concerts. Even as a musician, I was always fascinated by technology. I worked intensively with audio and lighting hardware for 5 years as a Concert Services and Audio / Visual team member.
      </p>

      <h3>Inspiration</h3>
      <p>
        I first learned to code in middle school, where I got really excited about manipulating HTML and CSS for a custom blog layout. In my last year of undergrad, I realized I hadn’t explored programming like how I did when I was younger. I took a Berklee ICE / MIT course for mixed reality development where I was deeply inspired by the innovative mindset and collaborative nature of my peers. I have been diving into software development ever since!
      </p>

      <a href={Resume}
        target="_blank"
        rel="noopener noreferrer"><div className="button resume">RESUME</div></a>
    </section>
  </article>
)

export default Profile;