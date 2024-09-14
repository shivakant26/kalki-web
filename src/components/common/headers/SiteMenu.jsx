import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import DropDown from "./DropDown";
import { siteMenuItem } from "../../../utils/constant";

const SiteMenu = ({ className, isMobileMenuOpen, closeMobileMenu }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleDrop = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const handleMenuClick = () => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    }
    setOpenMenu(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdownMenus = document.querySelectorAll(".drop-list");
      const isClickedOutside = Array.from(dropdownMenus).every(
        (menu) => !menu.contains(event.target)
      );
      if (isClickedOutside) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={className}>
      <ul>
        {siteMenuItem.map((menuItem, index) => {
          return (
            <li
              key={index}
              className={menuItem.dropdown ? "drop-list" : ""}
              onClick={menuItem.dropdown ? () => handleDrop("service") : null}
            >
              <Link to={menuItem.slug} onClick={menuItem.dropdown ? "" : handleMenuClick}>
                {menuItem.label}
              </Link>
              {menuItem.dropdown ? <RiArrowDropDownLine /> : ""}
              {menuItem.dropdown && openMenu === "service" && (
                <DropDown
                  items={menuItem.dropdown && menuItem?.dropDownItem}
                  handleMenuClick={handleMenuClick}
                />
              )}
            </li>
          );
        })}
      </ul>
      <div className="cousult-btn">
        <Link to="/contact-us">Free Consultation</Link>
      </div>
    </div>
  );
};

export default SiteMenu;
