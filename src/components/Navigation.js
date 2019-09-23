import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

const Navigation = ({ activeSection }) => {
  const navItems = [
    { id: 1, name: "profile" },
    { id: 2, name: "work" },
    { id: 3, name: "skills" },
    { id: 4, name: "contact" }
  ];

  return (
    <nav>
      {navItems.map(item => (
        <Link
          key={item.id}
          className={activeSection === item.name ? "active-link item" : "item"}
          to={`#${item.name}`}
        >
          {item.name.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
