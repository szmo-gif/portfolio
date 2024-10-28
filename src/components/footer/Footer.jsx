import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      //TODO: deleate div
      <div className="footer-content"> 
        <ul className="social-icons">
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
          </li>

          <li>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
          </li>

          <li>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter />
            </a>
          </li>
        </ul>
        <p>
          &copy; {new Date().getFullYear()} Baptiste Szmoniewski. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
