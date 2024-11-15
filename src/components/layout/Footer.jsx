import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/hello-tractor-logo.png";
import playStore from "../../assets/icons/play-store.svg";
import appStore from "../../assets/icons/app-store.svg";
import masterCard from "../../assets/icons/mastercard.svg";
import visa from "../../assets/icons/visa.svg";
import stripe from "../../assets/icons/stripe.svg";

import "../../assets/styles/footer/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-columns">
          {/* Top Categories */}
          <div className="footer-column">
            <h3>Top Categories</h3>
            <ul>
              <li>
                <NavLink to="/categories/tractors">Tractors</NavLink>
              </li>
              <li>
                <NavLink to="/categories/implements">Farm Implements</NavLink>
              </li>
              <li>
                <NavLink to="/categories/harvesting">
                  Harvesting Equipment
                </NavLink>
              </li>
              <li>
                <NavLink to="/categories/irrigation">
                  Irrigation Systems
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="footer-column">
            <h3>Useful Links</h3>
            <ul>
              <li>
                <NavLink to="/seller">Become a Seller</NavLink>
              </li>
              <li>
                <NavLink to="/account">My Account</NavLink>
              </li>
              <li>
                <NavLink to="/orders">My Orders</NavLink>
              </li>
              <li>
                <NavLink to="/saved">Saved Items</NavLink>
              </li>
              <li>
                <NavLink to="/faq">FAQ</NavLink>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-column">
            <h3>Legal</h3>
            <ul>
              <li>
                <NavLink to="/terms-of-service">Terms of Service</NavLink>
              </li>
              <li>
                <NavLink to="/privacy-policy">Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink to="/return-policy">Return Policy</NavLink>
              </li>
              <li>
                <NavLink to="/selling-guidelines">Selling Guidelines</NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer middle */}
        <div className="footer-middle flex">
          <div className="left flex">
            <img src={stripe} alt="Stripe Logo" />
            <img src={visa} alt="Visa Logo" />
            <img src={masterCard} alt="Master Card Logo" />
            <img src="" alt="" />
          </div>
          <div className="right flex">
            <img
              src={playStore}
              alt="Play Store Logo"
              style={{ height: "3rem" }}
            />
            <img
              src={appStore}
              alt="App Store Logo"
              style={{ height: "6rem" }}
            />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-brand">
            <img src={logo} alt="Hello Tractor Logo" />
          </div>
          <p>&copy; 2024 Hello Tractor. All rights reserved.</p>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
