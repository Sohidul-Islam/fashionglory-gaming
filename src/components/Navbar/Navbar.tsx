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

export const Navbar: React.FC = () => {

   const [data, setCurrency] = useState({
      currency: "USD",
      language: "en",
    });
  
    const [currentTime, setCurrentTime] = useState(new Date());
  
  
    const [isModalOpen, setIsModalOpen] = useState(false);
  
  
    const handleCurrencySelect = (value: { currency: string; language: string }) => {
      setCurrency(value);
    };
  
      // Update the current time every second
      useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer); // Clean up on unmount
      }, []);
    
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  return (
    <div>
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

          <div className="top-navbar__left mobile-only">
             
                  <div className="top-navbar__left__item">
                    <div className="currency-selector currency-language-text"
                    onClick={() => setIsModalOpen(true)}
                    >
                      <span>{data.currency}</span> | <span>{data.language}</span>
                    </div>
                  </div>
                  <div className="top-navbar__left__item">
                    <span>{timeZone}</span>
                    <span>{currentTime.toLocaleTimeString()}</span>
                  </div>
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
                <div>
                
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

           <CurrencyModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onChange={handleCurrencySelect}
              value={data}
            />
    </div>
  );
};
