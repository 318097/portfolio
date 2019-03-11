import React, { Component } from "react";
import Icon from "./Icon";
export default class Dock extends Component {
  render() {
    const iconInfo = [
      { id: 1, name: "Home", action: "me" },
      { id: 2, name: "Work", action: "work" },
      { id: 3, name: "Skills", action: "skills" },
      { id: 4, name: "Contact", action: "contact" }
    ];
    const icons = iconInfo.map(icon => {
      return <Icon key={icon.name} info={icon} />;
    });
    return <React.Fragment>{icons}</React.Fragment>;
  }
}
