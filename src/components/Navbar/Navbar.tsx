import React, { useState } from "react";
import { FaUser, FaWallet, FaTrophy, FaBars, FaTimes } from "react-icons/fa";
import { Logo } from "../Logo/Logo";
import "./Navbar.scss";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  return (
    <nav className="main-navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="brand">
            <Logo />
          </div>
          <button className="mobile-menu-button" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className={`main-menu-wrapper ${isMenuOpen ? "active" : ""}`}>
          <div className="main-menu">
            <a href="#" className="menu-item active">
              LOBBY
            </a>
            <div className="menu-item has-submenu">
              PROMO
              <div className="mega-menu">{/* Mega menu content */}</div>
            </div>
            <a href="#" className="menu-item">
              SLOTS
            </a>
            <a href="#" className="menu-item">
              LIVE CASINO
            </a>
            <a href="#" className="menu-item">
              1xGAMES
            </a>
            <a href="#" className="menu-item">
              TV GAMES
            </a>
          </div>

          <div className="mobile-actions">
            <div className="user-balance">
              <div className="balance-item">
                <FaWallet />
                <span>€1,234.56</span>
              </div>
              <div className="balance-item">
                <FaTrophy />
                <span>1,234 CP</span>
              </div>
            </div>

            <div className="user-actions">
              <button className="btn-deposit">DEPOSIT</button>
              <button className="btn-register">REGISTRATION</button>
              <button className="btn-login">
                <FaUser />
                LOG IN
              </button>
            </div>
          </div>
        </div>

        <div className="navbar-right desktop-only">
          <div className="user-balance">
            <div className="balance-item">
              <FaWallet />
              <span>€1,234.56</span>
            </div>
            <div className="balance-item">
              <FaTrophy />
              <span>1,234 CP</span>
            </div>
          </div>

          <div className="user-actions">
            <button className="btn-deposit">DEPOSIT</button>
            <button className="btn-register">REGISTRATION</button>
            <button className="btn-login">
              <FaUser />
              LOG IN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
