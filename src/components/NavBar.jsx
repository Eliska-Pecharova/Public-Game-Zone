import MobileMenu from "./MobileMenu";
import "./NavBar.css";
import React, { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/images/logo.png" alt="Logo" className="logo" />
        <span className="site-title">PUBLIC GAME ZONE</span>
      </div>

      <div className="navbar-center">
        <ul className="navbar-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Games</a>
          </li>
          <li>
            <a href="#">Forums</a>
          </li>
        </ul>

        <MobileMenu />
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          <img src="/icons/menu.png" alt="menu icon" />
        </button>
      </div>

      <div className="navbar-right">
        <button className="personal-button">
          <img src="/icons/perconal-account.png" alt="personal account icon" />
        </button>

        <button className="search-button">
          Search
          <img src="/icons/icons8-search-48.png" alt="searching icon" />
        </button>
      </div>

      {/* Mobilní menu */}
      <MobileMenu isOpen={menuOpen} />
    </nav>
  );
};

export default NavBar;
