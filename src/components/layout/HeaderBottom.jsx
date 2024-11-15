import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../../assets/styles/header/header-bottom.css";

export default function HeaderBottom() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible((prevVisible) => !prevVisible);
  };

  // Hide dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="header-bottom flex">
      <nav>
        <ul className="menu flex">
          <li>
            <NavLink className="flex">
              <i className="fa-solid fa-tractor"></i>Tractors
            </NavLink>
          </li>
          <li>
            <NavLink className="flex">
              <i className="fa-solid fa-screwdriver-wrench"></i>Parts and
              Accessories
            </NavLink>
          </li>
          <li>
            <NavLink className="flex">
              <i className="fa-solid fa-user-gear"></i> Certified Operators
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="account" ref={dropdownRef}>
        <div className="visible flex" onClick={toggleDropdown}>
          <i className="fa-regular fa-user"></i>
          Account
          <i className="fa-solid fa-chevron-down drop-down"></i>
        </div>

        {dropdownVisible && (
          <div className="dropdown-menu flex-clmn">
            <NavLink
              to="/account/signin"
              className="dropdown-item signin btn-primary"
            >
              SIGN IN
            </NavLink>
            <NavLink
              to="/account/index"
              className="dropdown-item flex"
              style={{ borderTop: "var(--border)" }}
            >
              <i className="fa-regular fa-user"></i>
              My Account
            </NavLink>
            <NavLink to="/account/orders" className="dropdown-item flex">
              <i className="fa-solid fa-shop"></i>
              Orders
            </NavLink>
            <NavLink to="/account/saved-items" className="dropdown-item flex">
              <i className="fa-regular fa-bookmark"></i>
              Saved Items
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}
