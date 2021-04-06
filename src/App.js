import React, { Component, Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { Icon } from "@codedrops/react-ui";

import Navigation from "./components/Navigation";
import Content from "./components/Content";
import Background from "./components/themes/Background";
import "./App.scss";

const THEMES = ["STACKED", "NEO", "CUSTOM-PARTICLES"];

class App extends Component {
  state = {
    activeSection: "profile",
    currentBackgroundIndex: THEMES.length - 1,
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
    const theme = THEMES[currentBackgroundIndex];
    const themeWrapperClass = theme ? `${theme.toLowerCase()}-theme` : "";
    return (
      <BrowserRouter>
        <div className={`app react-ui ${themeWrapperClass}`}>
          {loading ? (
            <div className="loader">
              <Icon size={70} type="binary-code-2" />
              <span className="text">Loading..</span>
            </div>
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
          <Background theme={theme} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
