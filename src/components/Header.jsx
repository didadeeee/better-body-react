import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <img
          src="https://imgur.com/NuTq5MP.png"
          className="nav-bar-logo"
          alt="Logo"
        />
        <nav>
          <div
            className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
            onClick={handleMenuToggle}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className={`nav-container ${isMenuOpen ? "open" : ""}`}>
            <ul className="nav-links">
              <li>
                <a href="#">Lifestyle</a>
              </li>
              <li>
                <a href="#">Beauty</a>
              </li>

              <li>
                <a href="#">Food</a>
              </li>
              <li>
                <a href="#">Relationship</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;