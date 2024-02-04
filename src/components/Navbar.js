// Navbar.js
import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../styles/Navbar.css';
import inforge_logo from '../assets/inforge_logo.webp';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <a href="/">
            <img id="inforge-logo" src={inforge_logo} alt="Logo" />
          </a>
        </div>
        <div className="nav-links">

          <Link to="contact-us">Contact Us</Link>

          <Link to="blog">Blog</Link>

          <Link to="customer-login">Customer Login</Link>

          <Link to="free-consultation">Free Consultation</Link>

          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>

        </div>

        <div className="menu-icon" >

        </div>
      </div>
    </nav>
  );
};

export default Navbar;