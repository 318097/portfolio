import React, { Component } from "react";
import "./Icon.scss";
const Icon = ({ info, clickHandler }) => {
  const classList = `${info.icon}`;

  const handleClick = () => console.log("a");

  return (
    <div className="icon">
      <i onClick={handleClick} className={classList} title={info.name} />
    </div>
  );
};
export default Icon;
