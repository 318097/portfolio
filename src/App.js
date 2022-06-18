import React, { Component, Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { Icon } from "@codedrops/react-ui";
import ReactTooltip from "react-tooltip";
import classnames from "classnames";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import Background from "./components/themes/Background";
import "./App.scss";
import DATA from "./DATA";
import { THEMES } from "./constants";
const {
  basic: { resumeURL },
} = DATA;
class App extends Component {
  constructor(props) {
    super(props);

    const savedTheme = localStorage.getItem("theme");
    const currentBackgroundIndex = savedTheme ? THEMES.indexOf(savedTheme) : 0;

    this.state = {
      activeSection: "about",
      currentBackgroundIndex,
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 300);
  }

  setActiveSection = (activeSection) => this.setState({ activeSection });

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
    // const theme = THEMES[currentBackgroundIndex];
    const theme = THEMES[0];
    const themeWrapperClass = theme ? `${theme.toLowerCase()}-theme` : "";
    return (
      <BrowserRouter>
        <div className={classnames("app", "react-ui", themeWrapperClass)}>
          <Navigation activeSection={activeSection} />
          <Content setActiveSection={this.setActiveSection} />
          {loading && (
            <div className="loader">
              <Icon size={70} type="binary-code-2" />
              <span className="text">Loading..</span>
            </div>
          )}

          {/* <div className="action-container">
            <i
              onClick={this.handleThemeChange}
              data-tip={"Theme"}
              data-effect="solid"
              className="theme-icon fas fa-palette"
            />

            {resumeURL && (
              <a
                className="download-resume"
                data-tip={"Resume"}
                data-effect="solid"
                target="_blank"
                rel="noopener noreferrer"
                href={resumeURL}
                download
                // download={`Resume - Mehul Lakhanpal`}
              >
                <i class="fas fa-save" />
              </a>
            )}
          </div> */}
          <ReactTooltip />
          <Background theme={theme} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
