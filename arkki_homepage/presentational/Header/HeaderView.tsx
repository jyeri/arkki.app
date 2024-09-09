import React from "react";
import "../../styles/Header.styles.scss";
import logo from "../../assets/arkki-logo.png";
import whitelogo from "../../assets/arkki-logo.svg";


interface HeaderViewProps {
  isDropdownOpen: boolean;
  activePage: string;
  toggleDropdown: () => void;
  handleMenuItemClick: (page: string) => void;
}

export const HeaderView: React.FunctionComponent<HeaderViewProps> = ({
  isDropdownOpen,
  activePage,
  toggleDropdown,
  handleMenuItemClick,
}) => (
  <div className="HeaderContainer">
    <a href="/">
      <img src={whitelogo} alt={logo} className="HeaderContainer__logo" />
    </a>
    <h1 className="HeaderContainer__text">Arkki jalkapallo</h1>
    <div className="HeaderContainer__dropdown">
      <button className="HeaderContainer__dropdown-button" onClick={toggleDropdown}>
        {activePage}
      </button>
      {isDropdownOpen && (
        <ul className="HeaderContainer__dropdown-menu">
          <li className="HeaderContainer__dropdown-item" onClick={() => handleMenuItemClick("Arkki FUT")}>
            Arkki FUT
          </li>
          <li className="HeaderContainer__dropdown-item" onClick={() => handleMenuItemClick("About Us")}>
            About Us
          </li>
          <li className="HeaderContainer__dropdown-item" onClick={() => handleMenuItemClick("INFO")}>
            Information
          </li>
        </ul>
      )}
    </div>
  </div>
);