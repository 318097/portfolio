import React, { forwardRef, memo } from "react";
import { Icon } from "@codedrops/react-ui";
// import DATA from "../DATA";
// const {
//   basic: { name },
// } = DATA;

const About = forwardRef(({ label, value }, ref) => (
  <section ref={ref} id={value} name={value}>
    <div className="intro">
      <p className="basic">
        Hey 👋 I am <span className="highlight ml-2">Mehul Lakhanpal</span>, a
        <span className="highlight ml-2">Full-stack Developer</span> 💻 with ~6
        years of experience from
        <span className="highlight ml-2">Bangalore, India</span> 🇮🇳
      </p>
      <p>
        Currently I am building <span className="highlight ml-2">Code404</span>.
        I have also launched 1 VS Code extension, 4 Chrome extensions & few web
        apps.
      </p>
      <p>Hit me up for interesting opportunities/collaboration.</p>
    </div>
  </section>
));

export default memo(About);
