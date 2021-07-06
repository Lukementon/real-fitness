import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "../../img/Logo1.png";
import { MenuIcon } from "@heroicons/react/outline";

import { useHistory } from "react-router";

const Nav = ({ toggle }) => {
  const history = useHistory();
  const [show, handleShow] = useState(false);

  const transitionNav = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNav);
    return () => window.removeEventListener("scroll", transitionNav);
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          onClick={() => history.push("/")}
          className="nav_logo"
          src={logo}
          alt=""
        />
        <div className="nav_links">
          <p onClick={() => history.push("/")}>About</p>
          <p onClick={() => history.push("/services")}>Services</p>

          <p onClick={() => history.push("/contact")}>Contact</p>
        </div>

        <MenuIcon onClick={toggle} className="nav_burger" />
      </div>
    </div>
  );
};

export default Nav;
