import React, { Component } from "react";
import Icon from "./Icon";
export default class Dock extends Component {
  render() {
    const iconInfo = [
      { id: 1, name: "Home", icon: "fas fa-user-circle", action: "" },
      { id: 2, name: "About", icon: "fas fa-info-circle", action: "" },
      { id: 3, name: "Skills", icon: "fas fa-dumbbell", action: "" },
      { id: 4, name: "Contact", icon: "fas fa-question", action: "" }
    ];
    const icons = iconInfo.map(icon => {
      return <Icon key={icon.id} info={icon} />;
    });
    return <div>{icons}</div>;
  }
}
