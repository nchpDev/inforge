import React, { useState } from 'react';
import '../styles/Navbar.css';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import inforge_logo from '../assets/inforge_logo.webp';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSpecialtiesClick = () => {
    setShowDropdown(!showDropdown); // Toggle the dropdown when "Our Specialties" is clicked
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <a href="/">
            <img id="inforge-logo" src={inforge_logo} alt="Logo" />
          </a>
        </div>

        <div className="nav-links">
          <ScrollLink to="services" smooth={true} duration={500}>Services</ScrollLink>
          <RouterLink to="/apps">Apps</RouterLink>
          <div className="specialties-dropdown">
            <button className="specialties-button" onClick={handleSpecialtiesClick}>
              Our Specialties
            </button>
            <div>
                  {showDropdown && (
                <div className="dropdown-menu">
                  <RouterLink to="/salesforce-cpq">Salesforce CPQ</RouterLink>
                  <RouterLink to="/salesforce-b2b-commerce">Salesforce B2B Commerce</RouterLink>
                  <RouterLink to="/non-profit">Non Profit</RouterLink>
                  <RouterLink to="/zendesk-to-salesforce">Zendesk to Salesforce Service Cloud Migration</RouterLink>
                  <RouterLink to="/salesforce-whatsapp">Salesforce Whatsapp Integration</RouterLink>
                </div>
              )}
            </div>
          </div>
          <a href="https://support.inforge.us/s/login/?ec=302&startURL=%2Fs%2F" target="_blank" rel="noopener noreferrer">
            Contact Us
          </a>
          <a href="https://www.linkedin.com/company/inforge-us/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} size='xl' />
          </a>
        </div>

        <div className="menu-icon" onClick={handleDropdownToggle}>
          <FontAwesomeIcon icon={faBars} style={{color: "#000",}} />
        </div>
      </div>

      
    </nav>
  );
};

export default Navbar;
