// Navbar.js
import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <a href="/">
            <img id='nchp-logo' src="" alt="Logo" />
          </a>
        </div>
        <div className="nav-links">
          <Link to="services">
            Services
          </Link>
          <Link to="who-we-are">
            Who We Are
          </Link>
          <Link to="contact-us">
            Contact Us
          </Link>
          <Link to="blog">
            Blog
          </Link>
          <Link to="customer-login">
            Customer Login
          </Link>
          <Link to="free-consultation">
            Free Consultation
          </Link>
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