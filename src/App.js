import React, { Component } from "react";
import "./App.scss";

import System from "./components/System";
import Dock from "./components/Dock";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeWindows: []
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="dock">
            <Dock />
          </div>
          <div className="system">
            <System />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
