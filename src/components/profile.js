import React from 'react';
import Joanna from '../media/boba-jo.jpg';

const blurbs = [
  "Hi! My name is Joanna Chen. I'm a musician turned programmer, and I love the art of learning and practicing new things.",
  "While I have a focus in JavaScript, React, and Ruby, I've been learning C# and .NET Core and exploring SuperCollider to start live-coding music.",
  "As a concert producer, my eye for elegant and functional stage design has naturally translated to attention and curiosity in web design.",
  "With my experience as a musician, I have a keen attention to detail, strong values in work ethic, and a growth-oriented mindset.",
  "I attribute my quick learning skills to my years of practice refining my learning process under fast-paced music deadlines.",
];

const Profile = () => (
  <article id="profile">
    <div>
      <img src={Joanna} className="joanna-img" alt="joanna" />
    </div>
    <section>
      <h3>Software engineer and percussionist</h3>
      {blurbs.map((blurb, i) => <p key={i}>{blurb}</p>)}
      <p key="scmarimba">
        On the weekends, I volunteer as&nbsp;
        <a href="https://scmarimba.org/"
          aria-label="Visit Southern California Marimba at https://scmarimba.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Southern California Marimba</strong>
        </a>        
        's Production/Media Manager.
      </p>
    </section>
  </article>
)

export default Profile;
