import React, { Component } from "react";
import "./Window.scss";
export default class Window extends Component {
  render() {
    return (
      <div className="window">
        <div className="title">
          <h4>Header</h4>
          <div>
            <i className="m-icon far fa-window-minimize" />
            <i className="m-icon fas fa-times" />
          </div>
        </div>
        <div className="content">Content</div>
      </div>
    );
  }
}
