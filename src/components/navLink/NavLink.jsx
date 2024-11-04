import { Link } from "react-scroll";
import { useState } from "react";

import "./NavLink.css";

export default function NavLink() {
  const navLinks = [
    { to: "about", label: "À propos" },
    { to: "skills", label: "Compétences" },
    { to: "projects", label: "Projets" },
    { to: "contact", label: "Contact" },
  ];


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <h1>Baptiste Szmoniewski</h1>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link, index) => (
          <li>
            <Link
              href={`#${link.to}`}
              className="nav-link"
              key={index}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}