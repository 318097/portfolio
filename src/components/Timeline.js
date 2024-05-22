import React, { forwardRef, useState, memo } from "react";
import moment from "moment";
import { Icon, Timeline as ReactTimeline } from "@codedrops/react-ui";
import DATA from "../DATA";
const { timeline } = DATA;

const getDateRange = ({ startDate, endDate }) => {
  if (!startDate) return endDate;

  const start = moment(startDate).format("MMM, YY");
  const end =
    endDate === "present" ? "Present" : moment(endDate).format("MMM, YY");

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
    subTitle,
    startDate,
    endDate,
    description = [],
    isOpen,
    tagline,
  } = item;

  const [expanded, setExpanded] = useState(Boolean(isOpen));

  const date = getDateRange({ startDate, endDate });

  return (
    <div key={title} className="timeline-card">
      <h3 className="title">
        {title}
        {other && expanded && <span className="location">{`(${other})`}</span>}
      </h3>
      <h3 className="tagline">{tagline}</h3>
      <div style={{ margin: "12px 0" }}>
        <h5 className="sub-title">{subTitle}</h5>
        <h5 className="date">{date}</h5>
      </div>

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
