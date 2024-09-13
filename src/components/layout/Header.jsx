import React from "react";
import SiteLogo from "../common/SiteLogo";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="center-wr">
        <div className="header">
          <SiteLogo />
          <div className="menu">
            <ul>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <a href="">Service</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="cousult-btn">
            <a href="#">Free Consultation</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
