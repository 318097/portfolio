import React, { Component } from "react";
import "./App.scss";

import System from "./components/System";
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="nav">
            <Nav />
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
