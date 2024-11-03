import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
        <ul className="social-icons">
          <li>
            <a href="https://github.com/szmo-gif" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
          </li>

          <li>
            <a href="https://linkedin.com/in/baptiste-szmoniewski" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
          </li>
        </ul>
        <p>
          &copy; {new Date().getFullYear()} Baptiste Szmoniewski. Tous droits réservés.
        </p>
    </footer>
  );
}

export default Footer;
