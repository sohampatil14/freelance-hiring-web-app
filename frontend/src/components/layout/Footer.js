import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-logo'>
        <Link to='/' className='link logo logo-footer'>
          Logo
        </Link>
      </div>
      <div className='footer-description'>
        <p>
          A platform to bring developers from all stack and recruiters at one
          place.
        </p>
      </div>
      <div className='footer-links'>
        <ul>
          <li className='footer-link'>Home</li>
          <li className='footer-link'>Disclaimer</li>
          <li className='footer-link'>Cookie Policy</li>
          <li className='footer-link'>Return Policy</li>
          <li className='footer-link'>Term of service</li>
          <li className='footer-link'>Privacy Policy</li>
          <li className='footer-link'>Repory Bugs/Enhancements</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
