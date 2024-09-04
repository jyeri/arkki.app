import "./Header.style.scss";
import logo from "./arkki-logo.png";
import whitelogo from "./arkki-logo.svg";
import { useState } from "react";

interface HeaderProps {
    onMenuItemClick: (page: string) => void;
}

export const Header = ({ onMenuItemClick }: HeaderProps) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activePage, setActivePage] = useState("About Us");

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleMenuItemClick = (page: string) => {
        setActivePage(page);
        setIsDropdownOpen(false); // Close the dropdown after selection
        onMenuItemClick(page); // Notify parent component
    };

    return (
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
                    </ul>
                )}
            </div>
        </div>
    );
};