import React, { useEffect, useRef, forwardRef } from "react";
import posed from "react-pose";
import { withRouter } from "react-router-dom";
import Scroll from "react-scroll";
import moment from "moment";
import { Icon } from "@codedrops/react-ui";
// import ReactMapGL from 'react-map-gl';

import "./Content.scss";
import DATA from "../DATA";

const { scroller } = Scroll;

const CustomDiv = posed.div({
  visible: {
    opacity: 0.8,
    transition: { duration: 2000 },
  },
  hidden: { opacity: 0 },
});

const sections = ["profile", "work", "skills", "contact"];

const Content = ({ location, setActiveSection }) => {
  const scrollRef = useRef(null);

  const inputRefs = {
    profile: useRef(null),
    work: useRef(null),
    skills: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    scrollRef.current.addEventListener("scroll", handleScroll);
    return () => scrollRef.current.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const elementId = location.hash.slice(1);
    scroller.scrollTo(elementId, {
      duration: 1500,
      delay: 100,
      smooth: true,
      containerId: "ContainerElement",
      offset: -80,
    });
    setActiveSection(elementId);
  }, [location]);

  const handleScroll = () => {
    const scrollPosition = scrollRef.current.scrollTop;
    let activeTab = "profile";
    sections.forEach((section) => {
      const offset = inputRefs[section].current.offsetTop;
      if (offset < scrollPosition + 30) activeTab = section;
    });
    setActiveSection(activeTab);
  };
  // const viewport = {
  //   width: 400,
  //   height: 400,
  //   // center: [12.9716, 77.5946],
  //   latitude: 12.9716,
  //   longitude: 77.5946,
  //   // sprite: 'mapbox://styles/mapbox/dark-v9',
  //   zoom: 12,
  // };

  const {
    basic: { name, email },
    work,
    skills,
    social,
  } = DATA;

  return (
    <CustomDiv className="box">
      <div ref={scrollRef} id="ContainerElement" className="content">
        <Profile ref={inputRefs.profile} name={name} />
        <Work ref={inputRefs.work} work={work} />
        <Skills ref={inputRefs.skills} skills={skills} />
        <Contact ref={inputRefs.contact} email={email} social={social} />
      </div>
      {/* <i className="spinner fas fa-dharmachakra"></i> */}
    </CustomDiv>
  );
};

const Profile = forwardRef(({ name }, ref) => (
  <section ref={ref} id="profile" name="profile">
    <h2>Profile</h2>
    <div className="text">
      <p>
        Hi, I am <span className="highlight">{name}</span> from Bangalore, India
        with 2.5 years of work experience as a{" "}
        <span className="highlight">Full-stack Developer</span>. I am interested
        in working on exciting projects along with best engineers from across
        the world. Apart from{" "}
        <span className="highlight">&lt;coding&#47;&gt;</span>, I{" "}
        <Icon size={18} type="heart-2" /> to play{" "}
        <span className="highlight">football</span>{" "}
        <Icon size={20} type="football" />
      </p>
    </div>
  </section>
));

const Work = forwardRef(({ work }, ref) => (
  <section ref={ref} id="work" name="work">
    <h2>Work</h2>
    <div className="timeline">
      {work.map(({ name, location, role, start_date, end_date, projects }) => (
        <div key={name} className="block">
          <div className="left">
            <div className="card">
              <h3>
                <span>
                  {name}, {location}
                </span>
              </h3>

              <h4>{role}</h4>
              <h4>
                {moment(start_date, "DD-MM-YYYY").format("MMM' YY")} -{" "}
                {moment(end_date, "DD-MM-YYYY").format("MMM' YY")}
              </h4>
            </div>
          </div>
          <div className="right">
            <div className="card">
              <h3>Projects</h3>
              {projects.map(({ name: projectName, description }) => {
                return (
                  <div key={projectName}>
                    <h4>{projectName}</h4>
                    <ul>
                      {description.map((list, i) => (
                        <li key={i}>{list}</li>
                      ))}
                    </ul>
                    <br />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
));

const Skills = forwardRef(({ skills }, ref) => (
  <section ref={ref} id="skills" name="skills">
    <h2>Skills</h2>
    <div className="skill-list">
      {skills.map(({ name }) => (
        <div className="skill" key={name}>
          {name}
        </div>
      ))}
    </div>
  </section>
));

const Contact = forwardRef(({ email, social }, ref) => (
  <section ref={ref} id="contact" name="contact">
    <h2>Contact</h2>

    {/* <ReactMapGL
        mapboxApiAccessToken={'pk.eyJ1IjoiMzE4MDk3IiwiYSI6ImNqdDJhbzhqZDB6YjkzeWxqbXpqZWVyNGgifQ._HOcF0YmpvJ7eAl4JQtFqA'}
        {...viewport}
      /> */}
    <div>
      <div>
        Reach out to me at:
        <p className="email">{email}</p>
      </div>
      <br />
      <div className="social">
        {social.map(({ name, url, classname }) => (
          <a key={name} title={name} href={url}>
            <i className={classname}></i>
          </a>
        ))}
      </div>
      <br />
      <div className="website">
        <a href="www.codedrops.tech" target="__blank">
          www.codedrops.tech
        </a>
      </div>
    </div>
  </section>
));

export default withRouter(Content);
