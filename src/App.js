import React, { Component, Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { Icon } from "@codedrops/react-ui";

import Navigation from "./components/Navigation";
import Content from "./components/Content";
import Background from "./components/themes/Background";
import "./App.scss";

const THEMES = ["CUSTOM-PARTICLES", "STACKED", "NEO"];

class App extends Component {
  constructor(props) {
    super(props);

    const savedTheme = localStorage.getItem("theme");
    this.state = {
      activeSection: "profile",
      currentBackgroundIndex: savedTheme
        ? THEMES.indexOf(Number(savedTheme))
        : THEMES.length - 1,
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 300);
  }

  setActiveSection = (section) => this.setState({ activeSection: section });

  handleThemeChange = () => {
    const { currentBackgroundIndex } = this.state;
    const newBackgroundIndex =
      currentBackgroundIndex === THEMES.length - 1
        ? 0
        : currentBackgroundIndex + 1;

    localStorage.setItem("theme", THEMES[newBackgroundIndex]);
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
