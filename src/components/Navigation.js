import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

const navItems = [
  { id: 1, name: "profile" },
  { id: 2, name: "work" },
  { id: 3, name: "skills" },
  { id: 4, name: "contact" },
];

const Navigation = ({ activeSection }) => (
  <nav>
    {navItems.map((item) => (
      <Link
        key={item.id}
        className={`item ${activeSection === item.name ? "active-link" : ""}`}
        to={`#${item.name}`}
      >
        {item.name.toUpperCase()}
      </Link>
    ))}
  </nav>
);

export default Navigation;
