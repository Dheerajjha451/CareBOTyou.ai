import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <div className="navigation-bar">
      <div className="navbar">
        <div className="navBar">
          <img src="" />
          <nav className="nav-bar">
            <NavLink className="navlink" to="/#">
              {" "}
              Home{" "}
            </NavLink>
            <NavLink className="navlink" to="#">
              {" "}
              Forum
            </NavLink>
            <NavLink className="navlink" to="/blog">
              {" "}
              Blog{" "}
            </NavLink>
            <NavLink className="navlink" to="/signup">
              {" "}
              Sign in{" "}
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
