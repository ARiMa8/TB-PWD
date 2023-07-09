import React from 'react';
import { Link } from 'react-router-dom';
import './style2.css';

const Navbar = () => {
  return (
    <header className="navbar-header">
      <Link to="/" className="logo font-Poppins">Wisata Pulau Seribu</Link>
      <div className="bx bx-menu" id="menu-icon"></div>

      <ul className="navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/destinations">Destinations</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
      </ul>
    </header>
  );
};

export default Navbar;
