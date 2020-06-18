import React, { Component, Fragment } from "react";
import { BrowserRouter } from "react-router-dom";

import Navigation from "./components/Navigation";
import Content from "./components/Content";
import Background from "./components/themes/Background";

import "./App.scss";

const THEMES = ["PARTICLES", "STACKED", "CUSTOM_PARTICLES", "NEO"];

class App extends Component {
  state = {
    activeSection: "profile",
    currentBackgroundIndex: 1,
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 3000);
  }

  setActiveSection = (section) => this.setState({ activeSection: section });

  handleThemeChange = () => {
    const { currentBackgroundIndex } = this.state;
    const newBackgroundIndex =
      currentBackgroundIndex === THEMES.length - 1
        ? 0
        : currentBackgroundIndex + 1;
    this.setState({
      currentBackgroundIndex: newBackgroundIndex,
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
          <Background theme={THEMES[currentBackgroundIndex]} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
