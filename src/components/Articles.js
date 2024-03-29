import React, { forwardRef, useEffect, useState, memo } from "react";

const Articles = forwardRef(({ label, value }, ref) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const DATA_URL =
        "https://bubblegum-lambda.netlify.app/.netlify/functions/api/rssfeed";

      const response = await fetch(DATA_URL);
      const feed = await response.json();
      setArticles(feed);
    } catch (err) {}
  };

  return (
    <section ref={ref} id={value} name={value}>
      <div className="articles-container">
        {articles.map(({ title, link, createdAt }) => {
          return (
            <a className="link" href={link} key={title} target="__blank">
              {title}
            </a>
          );
        })}
      </div>
    </section>
  );
});

export default memo(Articles);
