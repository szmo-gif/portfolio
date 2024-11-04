import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import IconNav from '../../ui/IconNav';

function Footer() {
  const navLinks = [
    { href: "https://github.com/szmo-gif", icone: " fab fa-github", style: "social-icon" },
    { href: "https://www.linkedin.com/in/baptiste-szmoniewski/", icone: " fab fa-linkedin", style: "social-icon" },
  ]
  return (
    <footer className="footer">
      <nav className="social-icons">
        {navLinks.map((link, index) => (
          <IconNav key={index} href={link.href} icone={link.icone} style={link.style} />
        ))}
      </nav>

      <p>
        &copy; {new Date().getFullYear()} Baptiste Szmoniewski. Tous droits réservés.
      </p>
    </footer>
  );
}

export default Footer;
