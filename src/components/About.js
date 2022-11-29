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
      <p>
        In my off time, I am mostly on{" "}
        <span className="highlight">side projects</span>, otherwise play
        <span className="highlight ml-2">soccer</span>
        <Icon size={18} type="football" /> , movies, PS or books
      </p>
      <p>Hit me up for interesting opportunities or collaboration</p>
    </div>
  </section>
));

export default memo(About);
