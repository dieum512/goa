import React from 'react'
import {GiHambourgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurentMenu} from 'react-icons/md';
import logo from '../../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={logo} alt='Goa logo'/>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#home">Home</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
