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
        <span className="highlight ml-2">Full-stack Developer</span> 💻 from
        <span className="highlight ml-2">Bangalore, India</span> 🇮🇳
      </p>

      <p className="current-employer">
        I am currently employed at
        <span className="highlight">Toddle</span>
        as Senior Front-end Engineer
      </p>
      <p>
        I mostly spend my leisure time on side projects. I love to play
        <span className="highlight ml-2">football</span>
        <Icon size={18} type="football" />
      </p>
    </div>
  </section>
));

export default memo(About);
