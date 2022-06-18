import React, { forwardRef, useState, memo } from "react";
import moment from "moment";
import { Icon, Timeline as ReactTimeline } from "@codedrops/react-ui";
import DATA from "../DATA";
const { timeline } = DATA;

const getDateRange = ({ start_date, end_date }) => {
  if (!start_date) return end_date;

  const start = moment(start_date).format("MMM, YY");
  const end =
    end_date === "present" ? "Present" : moment(end_date).format("MMM, YY");

  return `${start} - ${end}`;
};

const Timeline = forwardRef(({ label, value }, ref) => (
  <section ref={ref} id={value} name={value}>
    <ReactTimeline
      items={timeline}
      renderItem={(item) => <TimelineItem item={item} />}
    />
  </section>
));

const TimelineItem = ({ item }) => {
  const {
    title,
    other,
    sub_title,
    start_date,
    end_date,
    description = [],
    isOpen,
    tagline,
  } = item;

  const [expanded, setExpanded] = useState(Boolean(isOpen));

  const date = getDateRange({ start_date, end_date });

  return (
    <div key={title} className="timeline-card">
      <h3 className="title">
        {title}
        {other && <span className="location">{`(${other})`}</span>}
      </h3>
      <h5 className="tagline">{tagline}</h5>

      <h4 className="sub-title">{sub_title}</h4>
      <h4 className="date">{date}</h4>

      {expanded && !!description.length && (
        <div className="work-description">
          {description.map(({ title, content = [] }) => {
            return (
              <div key={title}>
                <h4 className="description-title">{title}</h4>
                <ul className="description-container">
                  {content.map((item, i) => (
                    <li className="description-item" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
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

export default memo(Timeline);
