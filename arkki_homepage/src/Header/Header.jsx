import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/arkki-logo.svg'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <a href='http://localhost:5173/'>
        <img src={logo} alt="Team Logo" className="logo"  />
      </a>
      <h1 className="team-name">Arkki</h1>
      <ul className="menu cf">
        <li onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
          <a href="">Main menu</a>
          {isOpen && (
            <ul className="submenu">
              <li><a href="">Landing page</a></li>
              <li><a href="">Squad builder</a></li>
              <li><a href="">About us</a></li>
            </ul>
          )}
        </li>
      </ul>
    </header>
  );
};

export default Header;