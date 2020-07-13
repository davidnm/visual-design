import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {

  return (
    <header>
      <p className="cabecera">
        Visual Design Portfolio
      </p>
      <nav>
        <ul>
          <li>
            <NavLink to="/mockups" exact>
              Mockups
            </NavLink>
          </li>
          <li>
            <NavLink to="/images">Images</NavLink>
          </li>
          <li>
            <NavLink to="/gif">Animated GIF</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;