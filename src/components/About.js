import React, { forwardRef } from "react";
import { Icon } from "@codedrops/react-ui";
import DATA from "../DATA";
const {
  basic: { name },
} = DATA;

const About = forwardRef((props, ref) => (
  <section ref={ref} id="about" name="about">
    <h2>About</h2>
    <p className="intro">
      Hi, I am <span className="highlight">{name}</span> from Bangalore, India
      with 2.5 years of work experience as a{" "}
      <span className="highlight">Full-stack Developer</span>. I am interested
      in working on exciting projects along with best engineers from across the
      world. Apart from <span className="highlight">&lt;coding&#47;&gt;</span>,
      I <Icon size={18} type="heart-2" /> to play{" "}
      <span className="highlight">football</span>{" "}
      <Icon size={20} type="football" />
    </p>
  </section>
));

export default About;
