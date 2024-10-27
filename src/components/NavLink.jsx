import { Link } from "react-scroll";

export default function NavLink() {
  return (
    <nav>
      <h1>Baptiste Szmoniewski</h1>
      <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>Accueil</Link>
      <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>A propos</Link>
      <Link to="skills" spy={true} smooth={true} offset={-70} duration={500}>Compétences</Link>
      <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projets</Link>
    </nav>
  )
}