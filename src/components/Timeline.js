import React, { forwardRef, useState } from "react";
import moment from "moment";
import { Icon, Timeline } from "@codedrops/react-ui";
import DATA from "../DATA";
const { work } = DATA;

const formatDate = (date) =>
  date ? moment(date, "DD-MM-YYYY").format("MMM, YY") : "Present";

const Work = forwardRef((props, ref) => (
  <section ref={ref} id="work" name="work">
    <h2>Work</h2>
    <Timeline
      items={work}
      renderItem={(item) => <TimelineItem item={item} />}
    />
  </section>
));

const TimelineItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const { name, location, role, start_date, end_date, projects } = item;

  const date = `${formatDate(start_date)} - ${formatDate(end_date)}`;

  return (
    <div key={name} className="timeline-left-container">
      <div className="timeline-card">
        <h3 className="name">
          {name}
          <span className="location">{`(${location})`}</span>
        </h3>

        <h4 className="role">{role}</h4>
        <h4 className="date">{date}</h4>

        {expanded && !!projects.length && (
          <div className="project-container">
            {/* <h5 className="project-title">Projects</h5> */}
            {projects.map(({ name: projectName, description }) => {
              return (
                <div key={projectName}>
                  <h4 className="project-name">{projectName}</h4>
                  <div className="project-description">
                    {description.map((list, i) => (
                      <div className="project-description-item" key={i}>
                        {`- ${list}`}
                      </div>
                    ))}
                  </div>
                  <br />
                </div>
              );
            })}
          </div>
        )}
        {!!projects.length && (
          <Icon
            type="caret"
            size={10}
            className="expand-icon"
            direction={expanded ? "up" : "down"}
            onClick={() => setExpanded((prev) => !prev)}
          />
        )}
      </div>
    </div>
  );
};

export default Work;
