// src/components/Footer.js

import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons'; // Import relevant icons

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: '20px',
    color: 'white',
    textAlign: 'center',
    borderTop: '1px solid rgba(255, 255, 255, 0.3)',
    marginTop: '0',
    width: '100%', // Ensure it fits the page width
    position: 'relative',
  };

  const socialIconStyle = {
    margin: '0 10px',
    color: 'white',
    fontSize: '24px',
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <p>&copy; {new Date().getFullYear()} Gatherly. All Rights Reserved.</p>
        <p>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About Us</Link> | 
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}> Contact</Link> | 
          <Link to="/privacy" style={{ color: 'white', textDecoration: 'none' }}> Privacy Policy</Link>
        </p>
        <div>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle}><Facebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle}><Twitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle}><Instagram /></a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
