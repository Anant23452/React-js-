import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="mt-10 flex justify-around bg-black text-white p-5">
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "red" : "white",
              fontWeight: e.isActive ? "bold" : "normal",
            };
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "red" : "white",
              fontWeight: e.isActive ? "bold" : "normal",
            };
          }}
          to="/user"
        >
          User
        </NavLink>
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "red" : "white",
              fontWeight: e.isActive ? "bold" : "normal",
            };
          }}
          to="/about"
        >
          About
        </NavLink>
        <NavLink >Students</NavLink>

      </nav>
    </div>
  );
}

export default Nav;
