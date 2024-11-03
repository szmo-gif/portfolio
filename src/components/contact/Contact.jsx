import React from 'react';
import './contact.css';

import '@fortawesome/fontawesome-free/css/all.min.css';


const Contact = () => {
  return (
    <section className="contact">
      <h2>Contactez-moi</h2>
      <nav>
        <a href="https://www.facebook.com/baptiste.szmoniewski.9" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
          <i className="fab fa-facebook"></i> Facebook
        </a>
        <a href="https://www.instagram.com/baptisteszmoniewski/" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
          <i className="fab fa-instagram"></i> Instagram
        </a>
      </nav>
    </section>
  );
};

export default Contact;
