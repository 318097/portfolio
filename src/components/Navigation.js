import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import "./Navigation.scss";
import { SECTIONS } from "../constants";

const Navigation = ({ activeSection }) => (
  <nav>
    {/* <span className="initials">ML</span> */}
    {SECTIONS.map(({ label, value }) => (
      <Link
        key={value}
        className={classnames("item", {
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
