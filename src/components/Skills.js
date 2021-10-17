import React, { forwardRef, memo } from "react";
import DATA from "../DATA";
import classnames from "classnames";
const { skills } = DATA;

const Skills = forwardRef(({ label, value }, ref) => (
  <section ref={ref} id={value} name={value}>
    <h2>{label}</h2>
    <div className="skill-list">
      {skills.map(({ name, highlight }) => (
        <div
          className={classnames("skill", { highlight: !!highlight })}
          key={name}
        >
          {name}
        </div>
      ))}
    </div>
  </section>
));

export default memo(Skills);
