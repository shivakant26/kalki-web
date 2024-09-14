import React, { useState } from "react";
import SiteLogo from "../common/headers/SiteLogo";
import Hamburger from "hamburger-react";
import SiteMenu from "../common/headers/SiteMenu";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const closeMobileMenu = () => {
    setOpen(false);
  };

  return (
    <header>
      <div className="center-wr">
        <div className="header">
          <SiteLogo />
          <SiteMenu className="menu" isMobileMenuOpen={false} />
          <div className="mobile-menu">
            <Hamburger easing="ease-in" toggled={isOpen} toggle={setOpen} />
            {isOpen && (
              <SiteMenu
                className="mobile-menu-item"
                isMobileMenuOpen={isOpen}
                closeMobileMenu={closeMobileMenu}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
