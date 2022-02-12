import React, { forwardRef, memo } from "react";
import { Icon } from "@codedrops/react-ui";
// import DATA from "../DATA";
// const {
//   basic: { name },
// } = DATA;

const About = forwardRef(({ label, value }, ref) => (
  <section ref={ref} id={value} name={value}>
    <h2>{label}</h2>
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
        development. My hobbies are <span className="highlight">coding</span>
        <Icon size={18} type="tag" className="mr-2" />&
        <span className="highlight ml-2">football</span>
        <Icon size={18} type="football" />
      </p>
    </div>
  </section>
));

export default memo(About);
