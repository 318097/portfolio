import React, { useEffect } from "react";
import posed from "react-pose";
import { withRouter } from "react-router-dom";
import Scroll from "react-scroll";
// import ReactMapGL from 'react-map-gl';

import "./Content.scss";
import { profile } from "../info";

const { scroller } = Scroll;

const CustomDiv = posed.div({
  visible: {
    opacity: 0.8,
    transition: { duration: 2000 }
  },
  hidden: { opacity: 0 }
});

const Content = ({ location, setActiveSection }) => {
  const { basic: { name, email }, work, skills, social } = profile;

  useEffect(() => {
    const elementId = location.hash.slice(1);
    scroller.scrollTo(elementId, {
      duration: 1500,
      delay: 100,
      smooth: true,
      containerId: "ContainerElement",
      offset: -80
    });
    setActiveSection(elementId);
  }, [location]);

  // const viewport = {
  //   width: 400,
  //   height: 400,
  //   // center: [12.9716, 77.5946],
  //   latitude: 12.9716,
  //   longitude: 77.5946,
  //   // sprite: 'mapbox://styles/mapbox/dark-v9',
  //   zoom: 12,
  // };

  return (
    <CustomDiv className="box">
      <div id="ContainerElement" className="content">
        <section id="profile" name="profile">
          <h2>Profile</h2>
          <div className="text">
            <p>
              Hi, I am <span>{name}</span> from India with 2+ years of work experience as a <span>Web Developer</span>. I am interested in working on exciting projects along with best engineers from across the world. Apart from <span>&lt;coding&#47;&gt;</span>, I <span style={{ color: 'tomato', fontSize: '120%' }}>&#9825;</span> to play <span>football</span>.
            </p>
          </div>
        </section>

        <section id="work" name="work">
          <h2>Work</h2>
          <div className="timeline">
            {work.map(({ name, role, start_date, end_date, projects }) => (
              <div key={name} className="block">
                <div className="left">
                  <div className="card">
                    <h3>{name}</h3>
                    <h4>{role}</h4>
                    <h4>
                      {start_date} - {end_date}
                    </h4>
                  </div>
                </div>
                <div className="right">
                  <div className="card">
                    <h3>Projects</h3>
                    {projects.map(({ name: projectName, description }) => {
                      return (
                        <div key={projectName}>
                          <h3>{projectName}</h3>
                          <ul>
                            {description.map((list, i) => <li key={i}>{list}</li>)}
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

        <section id="skills" name="skills">
          <h2>Skills</h2>
          <div className="skill-list">
            {skills.map(({ name }) => (
              <div className="skill" key={name}>
                {name}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" name="contact">
          <h2>Contact</h2>

          {/* <ReactMapGL
        mapboxApiAccessToken={'pk.eyJ1IjoiMzE4MDk3IiwiYSI6ImNqdDJhbzhqZDB6YjkzeWxqbXpqZWVyNGgifQ._HOcF0YmpvJ7eAl4JQtFqA'}
        {...viewport}
      /> */}
          <div>
            <h2 className="email">{email}</h2>
            <div className="social">
              {
                social.map(({ name, url, classname }) => <a key={name} title={name} href={url}><i className={classname}></i></a>)
              }
            </div>
          </div>
        </section>
      </div>
      <i className="spinner fas fa-dharmachakra"></i>
    </CustomDiv>
  );
};

export default withRouter(Content);
