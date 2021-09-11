import React, { forwardRef, useEffect, useState, memo } from "react";

const Articles = forwardRef((props, ref) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const DATA_URL =
      "https://bubblegum-lambda.netlify.app/.netlify/functions/api/rssfeed";

    const response = await fetch(DATA_URL);
    const feed = await response.json();
    setArticles(feed);
  };

  return (
    <section ref={ref} id="articles" name="articles">
      <h2>Articles</h2>

      <div className="articles-container">
        {articles.map(({ title, link, createdAt }) => {
          return (
            <a className="link" href={link} target="__blank">
              {title}
            </a>
          );
        })}
      </div>
    </section>
  );
});

export default memo(Articles);
