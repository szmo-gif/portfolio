import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {

  //TODO: package for email
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis :', formData);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="contact">
      <h2>Contactez-moi</h2>
      {isSubmitted ? (
        <p>Merci pour votre message ! Je vous répondrai dès que possible.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="name">Nom :</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required

            />
          </fieldset>
          <fieldset >
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </fieldset>
          <fieldset >
            <label htmlFor="message">Message :</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </fieldset>
          <button type="submit">
            Envoyer
          </button>
        </form>
      )}
    </section>
  );
}
