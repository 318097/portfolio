import React, { forwardRef, useEffect, useState, memo } from "react";
import colors, { Button } from "@codedrops/react-ui";
import ReactTooltip from "react-tooltip";
import { getProducts } from "@codedrops/lib/dist/downloads";

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

  const fetchSideProjects = async () => {
    try {
      const products = await getProducts();

      // console.log("products::-", products);

      setSideProjects(
        products.filter(({ visibility }) => visibility.portfolio)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section ref={ref} id="side_projects" name="side_projects">
      <h2>Projects</h2>

      <div className="project-list">
        {sideProjects.map(
          ({
            id,
            name,
            tagline,
            logo,
            links = {},
            customMessages,
            status,
            social,
          }) => {
            const productLinkObj = links.product;

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
                {productLinkObj && (
                  <Button
                    onClick={() => window.open(productLinkObj.url, "__blank")}
                  >
                    {productLinkObj.label}
                  </Button>
                )}
                {!!social && (
                  <div className="social-links-container">
                    {Object.values(social).map(
                      ({ fontAwesome, label, url }) => (
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={label}
                        >
                          <i className={fontAwesome} />
                        </a>
                      )
                    )}
                  </div>
                )}
                <span
                  className="status"
                  style={{
                    color: status === "LIVE" ? colors.green : colors.watermelon,
                  }}
                >
                  {status}
                </span>
                {customMessages && (
                  <span
                    className="custom-messages"
                    data-tip={customMessages[0]}
                    data-place="left"
                    data-effect="solid"
                  >
                    <i className="fas fa-comment-alt"></i>
                  </span>
                )}
                <ReactTooltip />
              </div>
            );
          }
        )}
      </div>
    </section>
  );
});

export default memo(SideProjects);
