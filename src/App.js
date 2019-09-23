import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Background from "./components/Background";
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
          <Background />
          <Content setActiveSection={this.setActiveSection} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
