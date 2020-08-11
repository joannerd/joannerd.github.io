import React from 'react';
import Joanna from '../media/boba-jo.jpg';

const blurbs = [
  "Hi! My name is Joanna Chen. I'm a musician turned programmer, and I love the art of learning and practicing new things.",
  "While I have a focus in JavaScript, React, and Ruby, I've been learning C# and .NET Core and exploring SuperCollider to start live-coding music.",
  "As a concert producer, my eye for elegant and functional stage design has naturally translated to attention and curiosity in web design.",
  "I have a keen attention to detail, quick learning skills, and strong values in work ethic that I attribute to my years of experience as a musician.",
  "On the weekends, I volunteer as Southern California Marimba's Production/Media Manager.",
];

const Profile = () => (
  <article id="profile">
    <div>
      <img src={Joanna} className="joanna-img" alt="joanna" />
    </div>
    <section>
      <h3>Software engineer and percussionist</h3>
      {blurbs.map((blurb, i) => <p key={i}>{blurb}</p>)}
    </section>
  </article>
)

export default Profile;
