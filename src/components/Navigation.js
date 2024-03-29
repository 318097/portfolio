import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import "./Navigation.scss";
import { SECTIONS } from "../constants";

const Navigation = ({ activeSection }) => (
  <nav>
    {SECTIONS.map(({ label, value }) => (
      <Link
        key={value}
        className={classnames("nav-item", {
          "active-link": activeSection === value,
        })}
        to={`#${value}`}
      >
        {label.toUpperCase()}
      </Link>
    ))}
  </nav>
);

export default Navigation;
