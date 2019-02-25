import React, { Component } from "react";
import "./System.scss";

import Window from "./Window";
class Header extends Component {
  render() {
    return (
      <div className="system">
        <header>
          <div>Activities</div>
          <div>
            <i className="m-icon fas fa-wifi" />
            <i className="m-icon fas fa-volume-up" />
            <i className="m-icon fas fa-battery-three-quarters" />
            <i className="m-icon fas fa-caret-down" />
          </div>
        </header>
        <Window />
      </div>
    );
  }
}
export default Header;
