import React from "react";
import { Link } from "react-router-dom";
import "./Icon.scss";
const Icon = ({ info }) => {
  return (
    <Link className="icon" to={`/${info.action}`} title={info.name}>
      {info.name.toUpperCase()}
    </Link>
  );
};
export default Icon;
