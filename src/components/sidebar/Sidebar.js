import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <div>
      <div className={isOpen ? "sidebar" : "sidebar_close"}>
        <div className="sidebar_elements">
          <Link className="link" to="/">
            <p onClick={toggle}>About</p>
          </Link>
          <Link className="link" to="/services">
            <p onClick={toggle}>Services</p>
          </Link>
          <Link className="link" to="/contact">
            <p onClick={toggle}>Contact</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
