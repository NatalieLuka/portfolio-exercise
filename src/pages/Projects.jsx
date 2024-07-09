import { projects } from "../data/Projects";
import { Link } from "react-router-dom";

export function Projects() {
  return (
    <div>
      <h2>My Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            {" "}
            <h3>{project.title}</h3>
            <Link to={`/projects/${project.id}`}>
              <img src={project.image} alt={project.title} />
            </Link>
            <p>{project.tagline}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
