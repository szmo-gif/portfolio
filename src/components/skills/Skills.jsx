import { FaHtml5, FaCss3Alt, FaReact, FaSass, FaGithub, FaJs } from "react-icons/fa";
import { SiRedux, SiSwagger } from "react-icons/si";

import "./skills.css";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 style={{ color: "#E34F26" }} /> },
    { name: "CSS", icon: <FaCss3Alt style={{ color: "#1572B6" }} /> },
    { name: "Sass", icon: <FaSass style={{ color: "#CC6699" }} /> },
    { name: "JavaScript", icon: <FaJs style={{ color: "#F7DF1E", backgroundColor: "black" }} /> },
    { name: "React", icon: <FaReact style={{ color: "#61DAFB" }} /> },
    { name: "Redux", icon: <SiRedux style={{ color: "#764ABC" }} /> },
    { name: "Swagger", icon: <SiSwagger style={{ color: "#85EA2D" }} /> },
    { name: "GitHub", icon: <FaGithub style={{ color: "#181717" }} /> },
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
