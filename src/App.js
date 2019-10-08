import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Particles from "react-particles-js";

// import Background from "./components/Background";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import "./App.scss";

class App extends Component {
  state = {
    activeSection: ""
  };

  setActiveSection = section => this.setState({ activeSection: section });

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Navigation activeSection={this.state.activeSection} />
          {/* <Background /> */}
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
                  value: "#242424"
                },
                line_linked: {
                  color: "#454545"
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
          <Content setActiveSection={this.setActiveSection} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
