import React, { useEffect, useState } from 'react';

const months = {
  '00': 'January',
  '01': 'February',
  '02': 'March',
  '03': 'April',
  '04': 'May',
  '05': 'June',
  '06': 'July',
  '07': 'August',
  '08': 'September',
  '09': 'October',
  '10': 'November',
  '11': 'December',
};

const Tags = ({ categories }) => (
  <>
    <h5>Tags:</h5>
    <span className="info">
      {categories.map((tag) => (
        <a
          href={`https://medium.com/tag/${tag}`}
          target="_blank"
          rel="noopener noreferrer"
          key={tag}
        >
          {tag}
        </a>
      ))}
    </span>
  </>
);

const Writing = ({ dateString, categories, guid, title, content }) => {
  return (
    <div className="project" key={guid}>
      <a
        href={guid}
        aria-label={`Read ${title} on Joanna's Medium.`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>{title}</h3>
        <h4>{dateString}</h4>
      </a>
      <p className="content">{content}...</p>
      <Tags categories={categories} />
    </div>
  );
};

const Posts = ({ posts }) => (
  <>
    {posts.map(({ guid, title, pubDate, content, categories }) => {
      const date = pubDate.split(' ')[0].split('-');
      const [YYYY, MM, DD] = date;
      const month = months[MM];
      let day = DD;
      if (DD[0] === '0') day = DD[1];

      const dateString = `${month} ${day}, ${YYYY}`;
      const plainText = content.replace(/<[^>]+>/g, '');
      const trimmedContent = plainText.substring(0, 400);

      return (
        <Writing
          key={guid}
          dateString={dateString}
          categories={categories}
          guid={guid}
          title={title}
          content={trimmedContent}
        />
      );
    })}
  </>
);

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@joannerd');
      const medium = await res.json();
      setPosts(medium.items);
    };
    fetchPosts();
  }, []);

  return (
    <article id="blog">
      <Posts posts={posts} />
    </article>
  );
};
export default Blog;
