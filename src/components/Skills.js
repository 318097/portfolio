import React, { forwardRef } from "react";
import DATA from "../DATA";
const { skills } = DATA;

const Skills = forwardRef((props, ref) => (
  <section ref={ref} id="skills" name="skills">
    <h2>Skills</h2>
    <div className="skill-list">
      {skills.map(({ name, highlight }) => (
        <div className={`skill${highlight ? " highlight" : ""}`} key={name}>
          {name}
        </div>
      ))}
    </div>
  </section>
));

export default Skills;
