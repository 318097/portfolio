import React, { forwardRef, memo } from "react";
import { Icon } from "@codedrops/react-ui";
import moment from "moment";
// import DATA from "../DATA";
// const {
//   basic: { name },
// } = DATA;

const About = forwardRef(({ label, value }, ref) => {
  const experienceYears = moment()
    .diff(moment("2017-08-01").add(6, "months"), "years", true)
    .toFixed(1);
  return (
    <section ref={ref} id={value} name={value}>
      <div className="intro">
        <p className="basic">
          Hey 👋 I am <span className="highlight ml-2">Mehul Lakhanpal</span> —
          a<span className="highlight ml-2">Full-stack Developer</span> 💻 based
          in
          <span className="highlight ml-2">Bangalore, India</span> 🇮🇳 with ~
          {experienceYears}&nbsp;years of experience building fast, scalable web
          applications.
        </p>
        <p>
          Currently building <span className="highlight ml-2">Code404</span> ,
          and have launched 1 VS Code extension, 5 Chrome extensions, and
          multiple web apps.
        </p>
        <p>
          Open to exciting opportunities and collaborations — feel free to reach
          out!
        </p>
      </div>
    </section>
  );
});

export default memo(About);
