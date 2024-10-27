import projects from "./projects.json";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Mes Projets</h2>
      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <img
              src={project.image}
              alt={`Aperçu de ${project.name}`}
            />
            <div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>Technologies : {project.technologies.join(", ")}</p>
              <div>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" >Voir la démo</a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" >Code Source</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}