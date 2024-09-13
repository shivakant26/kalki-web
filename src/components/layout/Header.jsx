import React, { useState } from "react";
import SiteLogo from "../common/SiteLogo";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import SiteMenu from "../common/SiteMenu";
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header>
      <div className="center-wr">
        <div className="header">
          <SiteLogo />
          <SiteMenu className="menu" />
          <div className="mobile-menu">
            <Hamburger  easing="ease-in" toggled={isOpen} toggle={setOpen} />
            {isOpen && <SiteMenu className="mobile-menu-item" />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
