import projects from "./projects.json";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Mes Projets</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <figure>
            <img
              src={project.image}
              alt={`Aperçu de ${project.name}`}
            />
            <figcaption>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>Technologies : {project.technologies.join(", ")}</p>
              <nav>
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