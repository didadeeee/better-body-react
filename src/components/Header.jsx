import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img
        src="https://imgur.com/NuTq5MP.png"
        className="nav-bar-logo"
        alt="Logo"
      />
      <nav>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="https://betterbody.co/pages/about">About</a>
          </li>
          <li>
            <a href="https://betterbody.co/pages/shop">Shop</a>
          </li>
          <li>
            <a href="https://support.betterbody.co/hc/en-us/requests/new">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
