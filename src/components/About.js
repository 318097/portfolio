import React, { forwardRef, memo } from "react";
import { Icon } from "@codedrops/react-ui";
// import DATA from "../DATA";
// const {
//   basic: { name },
// } = DATA;

const About = forwardRef((props, ref) => (
  <section ref={ref} id="about" name="about">
    <h2>About</h2>
    <div className="intro">
      <p>
        Hey 👋 I am <span className="highlight ml-2">Mehul Lakhanpal</span>, a
        <span className="highlight ml-2">Full-stack Developer</span> 💻 from
        <span className="highlight ml-2">Bangalore, India</span> 🇮🇳
      </p>
      <p>
        I am currently working as a Front-end Engineer at{" "}
        <span className="highlight">Toddle</span>
      </p>
      <p>
        In my free time I work on side projects & a bit of micro-blogging on web
        development. My hobies are <span className="highlight">coding</span>
        <Icon size={14} type="tag" className="mr-2" />&
        <span className="highlight ml-2">football</span>
        <Icon size={14} type="football" />
      </p>
    </div>
  </section>
));

export default memo(About);
