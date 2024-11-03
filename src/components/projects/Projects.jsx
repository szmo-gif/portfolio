import projects from "./projects.json";
import "./projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Mes Projets</h2>

      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <figure>
              <img
                src={`${import.meta.env.BASE_URL}${project.image.replace('../../public/', '')}`}
                alt={`Aperçu de ${project.name}`}
              />

              <figcaption>
                <h3>{project.name}</h3>

                <p className="project-description">{project.description}</p>
                <p className="project-technologies">Technologies : {project.technologies.join(", ")}</p>

                <nav className="project-links">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" >Voir la démo</a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" >Code Source</a>
                </nav>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}