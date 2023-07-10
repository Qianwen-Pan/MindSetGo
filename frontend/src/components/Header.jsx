import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

function Header() {
  return (
    <div>
      <nav className="menu">
        <ul>
          
          <nav className="navbar navbar-expand-md sticky-top">
            <a className="navbar-brand" href="#">
              <img
                src="../logo.png"
                alt="Logo"
                className="logo"
                width="200"
                height="200"
              />
            </a>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/resources">
                  Resources
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/notification">
                  Notifications
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/myAccount"
                >
                  My Account
                </a>
              </li>
            </ul>
          </nav>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
