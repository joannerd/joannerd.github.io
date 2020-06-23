import React from 'react';
import Joanna from '../media/joanna.jpg';

const Profile = () => (
  <article id="profile">
    <div>
      <img src={Joanna} className="joanna-img" alt="joanna" />
    </div>
    <section>
      <h2>Profile</h2>
      <h3>Hi, I'm Joanna!</h3>
      <p>
        I'm a software engineer and percussionist with an eye for design and a specialty in React, Ruby on Rails, Flask, and marimba! As a software curriculum developer, I've been having great time with creating educational coding projects, documentation, and demo videos. I recently produced content to teach state management with React Context, implementation of basic React Hooks, backend API development with Express/Sequelize and Flask/SQLAlchemy, and containerization with Docker.
      </p>
      <br/>
      <p>        
        As a concert production manager, my eye for elegant and functional stage design has naturally translated to attention and curiosity for web design. As a musician, I know the importance of practice and optimization to reach high performance. I attribute my success in learning new coding languages and frameworks to the fast-paced learning process I fine-tuned as a music major and gigging percussionist.
      </p>
    </section>
  </article>
)

export default Profile;
