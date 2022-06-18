import React, { forwardRef, useEffect, useState, memo, Fragment } from "react";
import colors, { Button } from "@codedrops/react-ui";
import ReactTooltip from "react-tooltip";
import { getAndFormatProducts } from "@codedrops/lib/dist/downloads";
import moment from "moment";

const getReleaseData = (release) => {
  if (!release) return "";

  const { month, day, year } = release || {};
  return moment(`${year}-${month}-${day}`).format("D, MMM, YY");
};

const SideProjects = forwardRef(({ label, value }, ref) => {
  const [sideProjects, setSideProjects] = useState([]);

  useEffect(() => {
    fetchSideProjects();
  }, []);

  const fetchSideProjects = async () => {
    try {
      const { others } = await getAndFormatProducts({
        appId: "PORTFOLIO",
        visibilityKey: "portfolio",
        trackingInfo: { utm_medium: "side-projects" },
      });
      setSideProjects(others);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section ref={ref} id={value} name={value}>
      <div className="project-list">
        {sideProjects.map(
          ({
            id,
            name,
            tagline,
            logo,
            linkList = [],
            customMessages,
            status,
            social,
            ctaLabel = "Visit",
            ctaUrl,
            release,
          }) => {
            const releaseDate = getReleaseData(release);
            return (
              <div className="project-item" key={id}>
                {/* {logo && <img src={logo} alt="logo" className="logo" />} */}
                <div className="name">{name}</div>
                <div className="tagline">{tagline}</div>
                {releaseDate && (
                  <div className="release-date">{`Released: ${releaseDate}`}</div>
                )}
                {linkList.length > 0 && (
                  <div className="links-container">
                    {linkList.map(({ platform, label, url }, idx) => (
                      <Fragment key={idx}>
                        {idx > 0 && idx < linkList.length && (
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
                      </Fragment>
                    ))}
                  </div>
                )}
                {ctaUrl && (
                  <Button onClick={() => window.open(ctaUrl, "__blank")}>
                    {ctaLabel}
                  </Button>
                )}
                {/* {!!social && (
                  <div className="social-links-container">
                    {Object.values(social).map(
                      ({ fontAwesome, label, url }) => (
                        <a
                          key={label}
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
                )} */}
                {/* <span
                  className="status"
                  style={{
                    color: status === "LIVE" ? colors.green : colors.watermelon,
                  }}
                >
                  {status}
                </span> */}
                {/* {customMessages && (
                  <span
                    className="custom-messages"
                    data-tip={customMessages[0]}
                    data-place="left"
                    data-effect="solid"
                  >
                    <i className="fas fa-comment-alt"></i>
                  </span>
                )} */}
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
