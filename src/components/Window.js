import React, { Component } from "react";
import posed from 'react-pose';
// import ReactMapGL from 'react-map-gl';

import "./Window.scss";
import { profile } from '../info';

/* POSED ANIMATION */
const Box = posed.div({

});
const Div = posed.div({
  visible: {
    opacity: 1,
    transition: { duration: 2000 }
  },
  hidden: { opacity: 0 }
});
/* --------------------------------------- */
/* PAGES */
/* --------------------------------------- */
const Profile = () => {
  return (
    <div className="profile">
      <div className="text">
        <p>
          Hi, My name is <span>Mehul Lakhanpal</span> and I am a <span className="role">
            Web Developer
        </span>
        </p>
      </div>
    </div>
  );
}
const Work = () => {
  return (
    <div className="about">
      <div className="timeline">
        {
          profile.work.map((el, i) => {
            return (
              <div key={i} className="block">
                <div className="left">
                  <div className="card">
                    <h2>{el.name}</h2>
                    <h4>{el.role}</h4>
                    <h4>{el.start_date} - {el.end_date}</h4>
                  </div>
                </div>
                <div className="right">
                  <div className="card">
                    <h3 style={{ textAlign: 'center' }}>Projects</h3>
                    {
                      el.projects.map((project, j) => {
                        return (
                          <div key={i + j} className="">
                            <h3>{project.name}</h3>
                            <h4>{project.description}</h4>
                            <h4>Stack: {project.stack.join(' | ')}</h4>
                            <br />
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
const Contact = () => {
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
  );
}
const Skills = () => {
  const list = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'Javascript' },
    { name: 'React' },
    { name: 'Angular' },
    { name: 'Node.js' },
  ];
  return (
    <div className="skills">
      {
        list.map(
          item =>
            (<Box key={item.name} className="item">{item.name}</Box>)
        )
      }
    </div>
  );
};
/* --------------------------------------- */
/* WINDOW */
/* --------------------------------------- */
export default class Window extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      display: 'me',
    };
  }
  componentWillReceiveProps = (newProps) => {
    const displayType = newProps.location.pathname;
    this.setState({
      display: displayType.slice(1).toUpperCase(),
    });
  }
  componentDidMount = () => {
    this.setState({
      isVisible: true,
    });
  }
  getData = () => {
    const type = this.state.display;
    switch (type) {
      case 'ME':
        return <Profile />;
      case 'CONTACT':
        return <Contact />;
      case 'SKILLS':
        return <Skills />;
      case 'WORK':
        return <Work />;
      default:
        return <Profile />
    }
  }
  render() {
    return (
      <Div className="glass" pose={this.state.isVisible ? 'visible' : 'hidden'}>
        <Div className="window" pose={this.state.isVisible ? 'visible' : 'hidden'}>
          <div className="title">
            <h4>{this.state.display}</h4>
            <i className="close-icon fas fa-dharmachakra"></i>
          </div>
          <div className="content">
            {this.getData()}
          </div>
        </Div>
      </Div>
    );
  }
}
