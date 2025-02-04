import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaTelegramPlane,
  FaFacebook,
  FaWallet,
  FaTrophy,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { Logo } from "../Logo/Logo";
import "./Navbar.scss";
import { CurrencyModal } from "../Modal/CurrencyModal";
import { NavLink, useNavigate } from "react-router-dom";
import { WalletIcon } from "../Icon/WalletIcon";
import { EyeHideIcon } from "../Icon/EyeHideIcon";
import { EyeShowIcon } from "../Icon/EyeShowIcon";

export const Navbar: React.FC = () => {
  const [data, setCurrency] = useState({
    currency: "USD",
    language: "en",
  });

  const [, setCurrentTime] = useState(new Date());

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCurrencySelect = (value: {
    currency: string;
    language: string;
  }) => {
    setCurrency(value);
  };

  // Update the current time every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer); // Clean up on unmount
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [showBalance, setShowBalance] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  const navigate = useNavigate();

  const handleDepositClick = () => {
    navigate("/deposit");
  };

  return (
    <div>
      <nav className="main-navbar">
        <div className="navbar-container">
          <div className="navbar-left ">
            <NavLink to="/" className={"hidden md:block"}>
              <div className="brand">
                <Logo />
              </div>
            </NavLink>
            <button className="mobile-menu-button" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <div className="top-navbar__left mobile-only">
            <NavLink to="/">
              <Logo />
            </NavLink>
          </div>

          <div className={`main-menu-wrapper ${isMenuOpen ? "active" : ""}`}>
            <div className="main-menu">
              <NavLink to="/sports" className="menu-item sports">
                Sports
              </NavLink>
              <NavLink to="/crash" className="menu-item crash">
                Crash
              </NavLink>
              <NavLink to="/slots" className="menu-item slots">
                Slots
              </NavLink>
              <NavLink to="/arcade" className="menu-item arcade">
                Arcade
              </NavLink>
              <NavLink to="/casino" className="menu-item casino">
                Casino
              </NavLink>
              <NavLink to="/lottery" className="menu-item lottery">
                Lottery
              </NavLink>
              <NavLink to="/fishing" className="menu-item fishing">
                Fishing
              </NavLink>
              <NavLink to="/promotion" className="menu-item promotion">
                Promotion
              </NavLink>
              <NavLink to="/table" className="menu-item table">
                Table
              </NavLink>
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
                <div></div>
              </div>

              <div className="user-actions">
                <button className="btn-deposit" onClick={handleDepositClick}>
                  Deposit
                </button>
                <button className="btn-register">REGISTRATION</button>
                <button className="btn-login">
                  <FaUser />
                  LOG IN
                </button>
              </div>
              {/* contact information */}
              <div className="top-navbar__right mobile-only">
                <div className="top-navbar__right__item">
                  <FaUser />
                  <span>+1 123 456 7890</span>
                </div>
                <div className="top-navbar__right__item">
                  <BiSupport />
                  <span>24/7 Support</span>
                </div>
                <div className="top-navbar__right__item">
                  <FaTelegramPlane />
                  <span>Telegram</span>
                </div>
                <div className="top-navbar__right__item">
                  <FaFacebook />
                  <span>Facebook</span>
                </div>
                <div className="top-navbar__right__item">
                  <MdEmail />
                  <span>Email</span>
                </div>
              </div>
            </div>
          </div>

          <div className="navbar-right desktop-only">
            <div className="user-balance">
              <div className="balance-item">
                <WalletIcon />
                {showBalance ? <span>৳1000</span> : null}

                <span
                  onClick={() => setShowBalance(!showBalance)}
                  style={{
                    color: "white !important",
                  }}
                >
                  {showBalance ? <EyeHideIcon /> : <EyeShowIcon />}
                </span>
              </div>
            </div>

            <div className="user-actions">
              <button className="btn-deposit" onClick={handleDepositClick}>
                Deposit
              </button>
              <button className="btn-register">Sign Up</button>
              <button className="btn-login">
                <FaUser />
                LOG IN
              </button>
            </div>
          </div>
        </div>
      </nav>

      <CurrencyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onChange={handleCurrencySelect}
        value={data}
      />
    </div>
  );
};
