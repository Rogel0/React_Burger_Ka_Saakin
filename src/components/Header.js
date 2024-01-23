import React, { useState } from 'react';
import '../index.css';
import logo from '../images/openmoji_hamburger.png'; // Import the image

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav>
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          ☰
        </div>
        <div className="logo-container">
          <a href="#home" className="logo">
            <img src={logo} alt="logo" /> {/* Use the imported image */}
          </a>
          <div className="animate__animated animate__bounce animate__repeat-3 title">
            Burger ka sakin
          </div>
        </div>
        <ul className={`navlist ${isMenuOpen ? 'mobile-menu' : ''} right`}>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#menu">MENU</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;