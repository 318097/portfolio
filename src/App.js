import React, { Component, Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import Particles from "react-particles-js";

// import Background from "./components/Background";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import "./App.scss";

const BackgroundChooser = ({ index }) => {
  switch (index) {
    case "PARTICLES":
      const dark = {
        balls: "#242424",
        line: "#454545"
      };

      const light = {
        balls: "#fff",
        line: "#fff"
      };

      const particlesColorScheme = { ...light };

      return (
        <Particles
          height="100vh"
          width="100vw"
          params={{
            particles: {
              number: {
                value: 70
              },
              size: {
                value: 5
              },
              color: {
                value: particlesColorScheme.balls
              },
              line_linked: {
                color: particlesColorScheme.line
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble"
                }
              }
            }
          }}
        />
      );
    case "STACKED":
      return (
        <div className="stacked-background">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
    // case 'CUSTOM':
    //   return <Background />;
    default:
      return <div></div>;
  }
};

const THEMES = ["PARTICLES", "STACKED"];

class App extends Component {
  state = {
    activeSection: "",
    currentBackgroundIndex: 1,
    loading: true
  };

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 3000);
  }

  setActiveSection = section => this.setState({ activeSection: section });

  handleThemeChange = () => {
    const { currentBackgroundIndex } = this.state;
    const newBackgroundIndex =
      currentBackgroundIndex === THEMES.length - 1
        ? 0
        : currentBackgroundIndex + 1;
    this.setState({
      currentBackgroundIndex: newBackgroundIndex
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          {this.state.loading ? (
            <i className="loader fas fa-spinner"></i>
          ) : (
            <Fragment>
              <Navigation activeSection={this.state.activeSection} />
              <Content setActiveSection={this.setActiveSection} />

              <i
                onClick={this.handleThemeChange}
                className="theme-icon fas fa-palette"
              ></i>
            </Fragment>
          )}
          <BackgroundChooser
            index={THEMES[this.state.currentBackgroundIndex]}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
