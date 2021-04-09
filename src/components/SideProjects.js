import React, { forwardRef, useEffect, useState } from "react";
import { Button } from "@codedrops/react-ui";

const convertProductsListToArray = (links) => {
  return Object.entries(links)
    .map(([platform, value]) => {
      const x = {
        ...value,
        platform,
      };
      if (!x.label)
        x.label = `${platform[0].toUpperCase()}${platform.slice(1)}`;

      return x;
    })
    .filter((item) => !!item.url);
};

const SideProjects = forwardRef((props, ref) => {
  const [sideProjects, setSideProjects] = useState([]);

  useEffect(() => {
    fetchSideProjects();
  }, []);

  const fetchSideProjects = () => {
    const DATA_URL =
      "https://raw.githubusercontent.com/318097/code-drops/master/src/DATA.json";
    fetch(DATA_URL)
      .then((res) => res.json())
      .then((data) =>
        setSideProjects(
          data.products.filter((product) => product.visibleOnPortfolio)
        )
      );
  };

  return (
    <section ref={ref} id="side_projects" name="side_projects">
      <h2>Side Projects</h2>
      <div className="project-list">
        {sideProjects.map(({ id, name, tagline, logo, video, links }) => {
          const filteredLinks = convertProductsListToArray(links).filter(
            (item) => item.platform !== "product"
          );
          return (
            <div className="project-item" key={id}>
              {logo && <img src={logo} alt="logo" className="logo" />}
              <div className="name">{name}</div>
              <div className="tagline">{tagline}</div>
              <div className="links-container">
                {filteredLinks.map(({ platform, label, url }, idx) => (
                  <>
                    {idx > 0 && idx < filteredLinks.length && (
                      <span>&#8226;</span>
                    )}
                    <a
                      key={platform}
                      className="link"
                      href={url}
                      target="__blank"
                    >
                      {label}
                    </a>
                  </>
                ))}
              </div>
              <Button
                onClick={() =>
                  window.open(
                    `${links.product.url}?utm_source=portfolio`,
                    "__blank"
                  )
                }
              >
                {links.product.label}
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
});

export default SideProjects;
