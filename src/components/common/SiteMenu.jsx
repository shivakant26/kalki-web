import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
const SiteMenu = ({ className }) => {
  const [open, setOpen] = useState(false);
  const handleDrop = () => {
    setOpen(!open)
  };
  console.log(open)
  return (
    <div className={className}>
      <ul>
        <li>
          <Link to="">Home</Link>
        </li>
        <li className="drop-list" onClick={handleDrop}>
          <a >Service</a>
          <RiArrowDropDownLine />
          {open && (
            <div className="drop-down">
              <ul>
                <li>
                  <a href="">Book keeping </a>
                </li>
                <li>
                  <a href="">Payroll</a>
                </li>
                <li>
                  <a href="">Tax</a>
                </li>
                <li>
                  <a href="">Bill Pay</a>
                </li>
                <li>
                  <a href="">Financial Planning & Investments</a>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
      <div className="cousult-btn">
        <a href="#">Free Consultation</a>
      </div>
    </div>
  );
};

export default SiteMenu;
