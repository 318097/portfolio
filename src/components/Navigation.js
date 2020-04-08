import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

const navItems = ["profile", "work", "skills", "contact"];

const Navigation = ({ activeSection }) => (
  <nav>
    {navItems.map((item) => (
      <Link
        key={item}
        className={`item ${activeSection === item ? "active-link" : ""}`}
        to={`#${item}`}
      >
        {item.name.toUpperCase()}
      </Link>
    ))}
  </nav>
);

export default Navigation;
