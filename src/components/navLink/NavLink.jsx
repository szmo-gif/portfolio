import { Link } from "react-scroll";

import "./NavLink.css";

export default function NavLink() {
  const navLinks = [
    { to: "about", label: "À propos" },
    { to: "skills", label: "Compétences" },
    { to: "projects", label: "Projets" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className="nav">
      <h1>Baptiste Szmoniewski</h1>
      <ul>
        {navLinks.map((link, index) => (
          <li>
            <Link
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