import React, { Component, Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import Particles from "react-particles-js";

// import Background from "./components/Background";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import "./App.scss";

const BackgroundChooser = ({ theme }) => {
  switch (theme) {
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
          style={{ background: "#171717" }}
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
    const { loading, activeSection, currentBackgroundIndex } = this.state;
    return (
      <BrowserRouter>
        <div className="container">
          {loading ? (
            <i className="loader fas fa-spinner"></i>
          ) : (
            <Fragment>
              <Navigation activeSection={activeSection} />
              <Content setActiveSection={this.setActiveSection} />

              <i
                onClick={this.handleThemeChange}
                className="theme-icon fas fa-palette"
              ></i>
            </Fragment>
          )}
          <BackgroundChooser theme={THEMES[currentBackgroundIndex]} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
