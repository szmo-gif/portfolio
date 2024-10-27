import { Link } from "react-scroll";

export default function NavLink() {
  const navLinks = [
    { to: "home", label: "Accueil" },
    { to: "about", label: "À propos" },
    { to: "skills", label: "Compétences" },
    { to: "projects", label: "Projets" },
  ];

  return (
    <nav>
      <h1>Baptiste Szmoniewski</h1>
    {navLinks.map((link, index) => (
      <Link key={index} to={link.to} spy={true} smooth={true} offset={-70} duration={500}>
        {link.label}
      </Link>
    ))}
    </nav>
  )
}