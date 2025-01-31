import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={logo} alt="Goa logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">À propos</a></li>
        <li className="p__opensans"><a href="#services">Services</a></li>
        <li className="p__opensans"><a href="#gallery">Gallery</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />

          <ul className="app__navbar-smallscreen-links">
            <li className="p__opensans"><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
            <li className="p__opensans"><a href="#about" onClick={() => setToggleMenu(false)}>À propos</a></li>
            <li className="p__opensans"><a href="#services" onClick={() => setToggleMenu(false)}>Services</a></li>
            <li className="p__opensans"><a href="#gallery" onClick={() => setToggleMenu(false)}>Gallery</a></li>
            <li className="p__opensans"><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
          </ul>
        </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
