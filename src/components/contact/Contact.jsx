import React from 'react';
import './contact.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import IconNav from '../../ui/IconNav';


const Contact = () => {
  const navLinks = [
    { href: "https://www.facebook.com/baptiste.szmoniewski.9/", icone: "fab fa-facebook", style: "social-icon facebook"},
    { href: "https://instagram.com/baptiste.szmoniewski", icone: "fab fa-instagram", style: "social-icon instagram"},
  ]
  return (
    <section className="contact">
      <h2>Contactez-moi</h2>
      <nav>
        {navLinks.map((link, index) => (
          <IconNav key={index} href={link.href} icone={link.icone} style={link.style}/>
        ))}
      </nav>
    </section>
  );
};

export default Contact;
