import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.scss";

export const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-column">
            <h4>About Us</h4>
            <ul>
              <li>
                <a href="#">About 1xCasino</a>
              </li>
              <li>
                <a href="#">Responsible Gaming</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Games</h4>
            <ul>
              <li>
                <a href="#">Slots</a>
              </li>
              <li>
                <a href="#">Live Casino</a>
              </li>
              <li>
                <a href="#">Table Games</a>
              </li>
              <li>
                <a href="#">Jackpot Games</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Payment Methods</a>
              </li>
              <li>
                <a href="#">Bonus Terms</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" className="social-link">
                <FaFacebookF />
              </a>
              <a href="#" className="social-link">
                <FaTwitter />
              </a>
              <a href="#" className="social-link">
                <FaInstagram />
              </a>
              <a href="#" className="social-link">
                <FaTelegram />
              </a>
              <a href="#" className="social-link">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="payment-methods">
            <img src="/payments/visa.png" alt="Visa" />
            <img src="/payments/mastercard.png" alt="Mastercard" />
            <img src="/payments/americanexpress.png" alt="americanexpress" />
            {/* Add more payment methods */}
          </div>
          <div className="footer-text">
            <p>
              GloryBet is operated by Glory Gaming N.V., registered and
              established under the laws of Curacao.
            </p>
            <p>License No: 8048/JAZ2019-015</p>
          </div>
          <div className="copyright">
            <p>&copy; 2024 GloryBet. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
