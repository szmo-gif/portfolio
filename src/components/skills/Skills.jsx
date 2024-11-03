import { FaHtml5, FaCss3Alt, FaReact, FaSass, FaGithub, FaJs } from "react-icons/fa";
import { SiRedux, SiSwagger } from "react-icons/si";

import "./skills.css";

export default function Skills() {

  const skills = [
    { name: "HTML", icon: <FaHtml5 className="html-icon" /> },
    { name: "CSS", icon: <FaCss3Alt className="css-icon" /> },
    { name: "Sass", icon: <FaSass className="sass-icon" /> },
    { name: "JavaScript", icon: <FaJs className="js-icon" /> },
    { name: "React", icon: <FaReact className="react-icon" /> },
    { name: "Redux", icon: <SiRedux className="redux-icon" /> },
    { name: "Swagger", icon: <SiSwagger className="swagger-icon" /> },
    { name: "GitHub", icon: <FaGithub className="github-icon" /> },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Mes Compétences</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <figure>
              <i>{skill.icon}</i>
              <figcaption>{skill.name}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
