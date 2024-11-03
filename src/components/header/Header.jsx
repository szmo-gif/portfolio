import React, { useState } from 'react';
import './header.css';

const Header = () => {
  // État pour gérer l'affichage du texte supplémentaire
  const [showMore, setShowMore] = useState(false);

  // Fonction pour afficher le texte supplémentaire au clic
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <header id='about'>
      <hgroup>
        <h1>Bienvenue sur mon site</h1>
        <p>Découvrez mes services et ce que j'ai à vous offrir pour vous aider à réussir.</p>
      </hgroup>

      <button className="cta-button" onClick={handleShowMore}>
        {showMore ? 'Afficher moins' : 'En savoir plus'}
      </button>

      {showMore && (
        <p>
          Je m'appelle Baptiste Szmoniewski, et je suis en pleine reconversion professionnelle. Ancien chimiste, j'ai décidé de me tourner vers le développement web, et plus particulièrement vers le développement Front-End. Après des années passées dans le domaine de la chimie, j'ai entrepris une nouvelle aventure en suivant une formation chez OpenClassrooms, qui m'a permis de devenir développeur front-end. Aujourd'hui, je suis passionné par la création d'interfaces modernes, intuitives et dynamiques, et je continue à apprendre chaque jour pour m'améliorer et créer des expériences utilisateurs exceptionnelles.
        </p>
      )}
    </header>
  );
};

export default Header;
