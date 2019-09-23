import React, { useEffect } from "react";
import posed from "react-pose";
import { withRouter } from "react-router-dom";
import Scroll from "react-scroll";
// import ReactMapGL from 'react-map-gl';

import "./Content.scss";
import { profile } from "../info";

const { scroller } = Scroll;

const Div = posed.div({
  visible: {
    opacity: 1,
    transition: { duration: 2000 }
  },
  hidden: { opacity: 0 }
});

const Content = ({ location, setActiveSection }) => {
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

  const list = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "Javascript" },
    { name: "React" },
    { name: "Angular" },
    { name: "Node.js" }
  ];

  return (
    <Div className="box">
      <div id="ContainerElement" className="contentx">
        <section id="profile">
          <h2>Profile</h2>
          <div className="profile">
            <div className="text">
              <p>
                Hi, My name is <span>Mehul Lakhanpal</span> and I am a{" "}
                <span className="role">Web Developer</span>
              </p>
            </div>
          </div>
        </section>

        <section id="work" name="work">
          <h2>Work</h2>
          <div className="timeline">
            {profile.work.map((el, i) => {
              return (
                <div key={i} className="block">
                  <div className="left">
                    <div className="card">
                      <h3>{el.name}</h3>
                      <h4>{el.role}</h4>
                      <h4>
                        {el.start_date} - {el.end_date}
                      </h4>
                    </div>
                  </div>
                  <div className="right">
                    <div className="card">
                      <h3>Projects</h3>
                      {el.projects.map((project, j) => {
                        return (
                          <div key={i + j} className="">
                            <h3>{project.name}</h3>
                            <p>{project.description.join("\n")}</p>
                            <br />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="skills" name="skills">
          <h2>Skills</h2>
          <div className="skill-list">
            {list.map(item => (
              <div className="skill" key={item.name}>
                {item.name}
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
            <h2 className="email">318097@gmail.com</h2>
            <div className="social">
              <a title="Facebook" href="https://www.facebook.com/ml.cr7">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a title="Linkedin" href="https://www.linkedin.com/in/318097/">
                <i className="fab fa-linkedin"></i>
              </a>
              <a title="Github" href="https://github.com/318097">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
      <i className="spinner fas fa-dharmachakra"></i>
    </Div>
  );
};

export default withRouter(Content);
