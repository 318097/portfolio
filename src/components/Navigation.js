import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

const Navigation = ({ activeSection, SECTIONS }) => (
  <nav>
    {SECTIONS.map((item) => (
      <Link
        key={item.value}
        className={`item ${activeSection === item.value ? "active-link" : ""}`}
        to={`#${item.value}`}
      >
        {item.label.toUpperCase()}
      </Link>
    ))}
  </nav>
);

export default Navigation;
