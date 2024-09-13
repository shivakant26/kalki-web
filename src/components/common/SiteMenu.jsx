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
                  <Link to="/service/book-keeping">Book keeping </Link>
                </li>
                <li>
                  <Link to="/service/payroll">Payroll</Link>
                </li>
                <li>
                  <Link to="/service/tax">Tax</Link>
                </li>
                <li>
                  <Link to="/service/bill-pay">Bill Pay</Link>
                </li>
                <li>
                  <Link to="">Financial Planning & Investments</Link>
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
