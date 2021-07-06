import React, { forwardRef, useState } from "react";
import moment from "moment";
import { Icon, Timeline } from "@codedrops/react-ui";
import DATA from "../DATA";
const { timeline } = DATA;

const getDateRange = ({ start_date, end_date }) => {
  if (!start_date) return end_date;

  return `${moment(start_date).format("MMM, YY")} - ${
    end_date === "present" ? "Present" : moment(end_date).format("MMM, YY")
  }`;
};

const Work = forwardRef((props, ref) => (
  <section ref={ref} id="work" name="timeline">
    <h2>Timeline</h2>
    <Timeline
      items={timeline}
      renderItem={(item) => <TimelineItem item={item} />}
    />
  </section>
));

const TimelineItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const {
    title,
    other,
    sub_title,
    start_date,
    end_date,
    description = [],
  } = item;

  const date = getDateRange({ start_date, end_date });

  return (
    <div key={title} className="timeline-card">
      <h3 className="title">
        {title}
        {other && <span className="location">{`(${other})`}</span>}
      </h3>

      <h4 className="sub-title">{sub_title}</h4>
      <h4 className="date">{date}</h4>

      {expanded && !!description.length && (
        <div className="description-container">
          {/* <h5 className="project-title">Projects</h5> */}
          {description.map(({ title, content = [] }) => {
            return (
              <div key={title}>
                <h4 className="description-title">{title}</h4>
                <div className="description-container">
                  {content.map((item, i) => (
                    <div className="description-item" key={i}>
                      {`- ${item}`}
                    </div>
                  ))}
                </div>
                <br />
              </div>
            );
          })}
        </div>
      )}
      {!!description.length && (
        <Icon
          type="caret"
          size={10}
          className="expand-icon"
          direction={expanded ? "up" : "down"}
          onClick={() => setExpanded((prev) => !prev)}
        />
      )}
    </div>
  );
};

export default Work;
