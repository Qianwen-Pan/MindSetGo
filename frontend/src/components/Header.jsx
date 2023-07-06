import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

function Header() {
  return (
    <div>
      <nav class="menu">
        <ul>
          
          <nav class="navbar navbar-expand-md sticky-top">
            <a class="navbar-brand" href="#">
              <img
                src="../logo.png"
                alt="Logo"
                class="logo"
                width="200"
                height="200"
              />
            </a>
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="/resources">
                  Resources
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/notification">
                  Notifications
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
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
