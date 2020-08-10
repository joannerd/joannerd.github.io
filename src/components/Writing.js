import React from 'react';

const months = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
};

const writings = [
  {
    title: 'Why I decided to code',
    pubDate: '2020-08-09 22:51:03',
    mediumId: '2da8e354705e',
    content: `For most of my life, I self-identified as a musician. In my job interviews, I was often asked, "Why did you make the switch from music to coding?"...`,
    tags: ['Music', 'Mental Health', 'Coding']
  },
];

const Writing = () => (
  <article id="writings">
    {writings.map(({ mediumId, title, pubDate, content, tags }) => {
      const date = new Date(pubDate);
      const D = date.getDate();
      const M = months[date.getMonth()];
      const Y = date.getFullYear();

      const tagLinks = tags.map((tag) => (
        <a href={`https://medium.com/tag/${tag}`}
          target="_blank"
          rel="noopener noreferrer"
          key={tag}
        >
          {tag}
        </a>
      ));

      return (
        <div className="project">
          <a href={`https://medium.com/p/${mediumId}`}
            aria-label={`Read ${title} on Joanna's Medium.`}
            target="_blank"
            rel="noopener noreferrer"
            key={mediumId}
          >
            <h3>{title}</h3>
            <h4>{`${M} ${D}, ${Y}`}</h4>
          </a>
          <p>{content}</p>
          <h5>Tags:</h5>
          <span>{tagLinks}</span>
        </div>
      );
    })}
  </article>
);

export default Writing;
