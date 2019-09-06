import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Background from "./components/Background";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Navigation />
          <Background />
          <Content />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
