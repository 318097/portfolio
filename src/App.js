import React, { Component } from "react";
import "./App.scss";

import System from "./components/System";
import Dock from "./components/Dock";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeWindows: []
    };
  }
  render() {
    return (
      <div className="container">
        <div className="dock">
          <Dock />
        </div>
        <div className="system">
          <System />
        </div>
      </div>
    );
  }
}

export default App;
