import React, { useState, useEffect } from "react";
import posed from "react-pose";
import { withRouter } from "react-router-dom";
// import ReactMapGL from 'react-map-gl';

import "./Content.scss";
import { profile } from "../info";

const Div = posed.div({
  visible: {
    opacity: 1,
    transition: { duration: 2000 }
  },
  hidden: { opacity: 0 }
});

const Content = props => {
  useEffect(() => {
    console.log(props);
  }, []);

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
      <div className="contentx">
        <section className="profile">
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

        <section>
          <h2>Work</h2>
          <div className="work">
            <div className="timeline">
              {profile.work.map((el, i) => {
                return (
                  <div key={i} className="block">
                    <div className="left">
                      <div className="card">
                        <h2>{el.name}</h2>
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
          </div>
        </section>

        <section className="skills">
          <h2>Skills</h2>
          <div className="">
            {list.map(item => (
              <div className="skill" key={item.name}>
                {item.name}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Contact</h2>

          <div className="contact">
            {/* <ReactMapGL
        mapboxApiAccessToken={'pk.eyJ1IjoiMzE4MDk3IiwiYSI6ImNqdDJhbzhqZDB6YjkzeWxqbXpqZWVyNGgifQ._HOcF0YmpvJ7eAl4JQtFqA'}
        {...viewport}
      /> */}
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
      <i className="close-icon fas fa-dharmachakra"></i>
    </Div>
  );
};

export default withRouter(Content);
