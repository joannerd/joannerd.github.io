import React from 'react';
import Joanna from '../media/boba-jo.jpg';

const Profile = () => (
  <article id="profile">
    <div>
      <img src={Joanna} className="joanna-img" alt="joanna" />
    </div>
    <section>
      <h3>Software engineer and percussionist</h3>
      <p>
        Hi! I'm Joanna. I'm a musician turned programmer, and I love the art of
        learning. I'm currently a software engineer at{' '}
        <span onClick={() => window.open('http://www.metalpay.com/')}>
          Metal
        </span>
        , learning about the exciting world of{' '}
        <span onClick={() => window.open('https://www.protonchain.com/')}>
          blockchain
        </span>{' '}
        programming and{' '}
        <span onClick={() => window.open('https://blog.metalpay.com/category/profiles/')}>
          crypto
        </span>
        !
      </p>
      <p>
        I have a specialty in{' '}
        <span onClick={() => window.open('https://github.com/joannerd/synewaveshi')}>
          JavaScript
        </span>
        /
        <span onClick={() => window.open('https://github.com/joannerd/pomoplan')}>
          TypeScript
        </span>
        , an avid appreciation of{' '}
        <span onClick={() => window.open('https://github.com/joannerd/csharp-notes')}>
          C#
        </span>{' '}
        design patterns, and a foundation rooted in elegant and readable{' '}
        <span onClick={() => window.open('https://github.com/joannerd/brewer/tree/staging/app/controllers/api')}>
          Ruby
        </span>
        .
      </p>
      <p>
        As a concert producer, my eye for elegant and functional stage design
        naturally translates to mindfulness and attention to detail in web
        design and application architecture.
      </p>
      <p>
        On the weekends, I volunteer as{' '}
        <span onClick={() => window.open('https://scmarimba.org/')}>
          Southern California Marimba
        </span>
        's Production and Media Manager.
      </p>
    </section>
  </article>
);
// const Profile = () => (
//   <article id="profile">
//     <div>
//       <img src={Joanna} className="joanna-img" alt="joanna" />
//     </div>
//     <section>
//       <h3>Software engineer and percussionist</h3>
//       <p>
//         Hi! I'm Joanna. I'm a musician turned programmer, and I love the art of
//         learning. I'm currently a software engineer at{' '}
//         <a
//           href="http://www.metalpay.com/"
//           aria-label="Visit Metal Pay at http://www.metalpay.com/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Metal
//         </a>
//         , learning about the exciting world of{' '}
//         <a
//           href="https://www.protonchain.com/"
//           aria-label="Visit Proton Chain at https://www.protonchain.com/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           blockchain
//         </a>{' '}
//         programming and{' '}
//         <a
//           href="https://blog.metalpay.com/category/profiles/"
//           aria-label="Visit Metal Pay Blog at https://blog.metalpay.com/category/profiles/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           crypto
//         </a>
//         !
//       </p>
//       <p>
//         I have a specialty in{' '}
//         <a
//           href="https://github.com/joannerd/synewaveshi"
//           aria-label="Visit Joanna's JavaScript project at https://github.com/joannerd/synewaveshi"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           JavaScript
//         </a>
//         /
//         <a
//           href="https://github.com/joannerd/pomoplan"
//           aria-label="Visit Joanna's TypeScript project at https://github.com/joannerd/pomoplan"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           TypeScript
//         </a>
//         , an avid appreciation of{' '}
//         <a
//           href="https://github.com/joannerd/csharp-notes"
//           aria-label="Visit Joanna's C# notes at https://github.com/joannerd/csharp-notes"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           C#
//         </a>{' '}
//         design patterns, and a foundation rooted in elegant and readable{' '}
//         <a
//           href="https://github.com/joannerd/brewer/tree/staging/app/controllers/api"
//           aria-label="Visit Joanna's Ruby on Rails API at https://github.com/joannerd/brewer/tree/staging/app/controllers/api"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Ruby
//         </a>
//         .
//       </p>
//       <p>
//         As a concert producer, my eye for elegant and functional stage design
//         naturally translates to mindfulness and attention to detail in web
//         design and application architecture.
//       </p>
//       <p>
//         On the weekends, I volunteer as{' '}
//         <a
//           href="https://scmarimba.org/"
//           aria-label="Visit Southern California Marimba at https://scmarimba.org/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Southern California Marimba
//         </a>
//         's Production and Media Manager.
//       </p>
//     </section>
//   </article>
// );

export default Profile;
