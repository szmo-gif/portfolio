import { Link } from "react-scroll";

export default function NavLink() {
  const navLinks = [
    { to: "about", label: "À propos" },
    { to: "skills", label: "Compétences" },
    { to: "projects", label: "Projets" },
  ];

  return (
    <nav aria-label="Navigation principale">
    <h1>Baptiste Szmoniewski</h1>
    {navLinks.map((link, index) => (
      <Link
        key={index}
        to={link.to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        activeClass="active"
      >
        {link.label}
      </Link>
    ))}
  </nav>
  )
}