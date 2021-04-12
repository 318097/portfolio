import React, { Component, Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { Icon } from "@codedrops/react-ui";
import ReactTooltip from "react-tooltip";

import Navigation from "./components/Navigation";
import Content from "./components/Content";
import Background from "./components/themes/Background";
import "./App.scss";
import DATA from "./DATA";
const {
  basic: { resumeURL },
} = DATA;

const THEMES = [
  "CUSTOM-PARTICLES",
  "STACKED",
  "NEO",
  "DARK-NIGHT",
  // "PARTICLES",
];

const SECTIONS = [
  { label: "About", value: "about" },
  { label: "Timeline", value: "work" },
  { label: "Side Projects", value: "side_projects" },
  { label: "Tech", value: "skills" },
  { label: "Contact", value: "contact" },
];

class App extends Component {
  constructor(props) {
    super(props);

    const savedTheme = localStorage.getItem("theme");
    this.state = {
      activeSection: "about",
      currentBackgroundIndex: savedTheme
        ? THEMES.indexOf(savedTheme)
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
              <Navigation activeSection={activeSection} SECTIONS={SECTIONS} />
              <Content
                setActiveSection={this.setActiveSection}
                SECTIONS={SECTIONS}
              />

              <div className="action-container">
                <i
                  onClick={this.handleThemeChange}
                  data-tip={"Theme"}
                  data-effect="solid"
                  className="theme-icon fas fa-palette"
                ></i>
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
                <ReactTooltip />
              </div>
            </Fragment>
          )}
          <Background theme={theme} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
