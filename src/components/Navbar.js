// Navbar.js
import React from 'react';
import '../styles/Navbar.css';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
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

          <ScrollLink to="about-us" smooth={true} duration={500}>About Us</ScrollLink>

          <RouterLink to="/blog">Blog</RouterLink>
          
          <RouterLink to="/subscribe">Contact Us</RouterLink>

          <a href="https://support.inforge.us/s/login/?ec=302&startURL=%2Fs%2F" target="_blank" rel="noopener noreferrer">
            Customer Login
          </a>

          <a href="https://help.inforge.us/s/" target="_blank" rel="noopener noreferrer">
            Free Consultation
          </a>

          <a href="https://www.linkedin.com/company/inforge-us/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} size='xl' />
          </a>

        </div>

        <div className="menu-icon" >
          <FontAwesomeIcon icon={faBars} style={{color: "#000",}} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
