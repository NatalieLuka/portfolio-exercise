import { projects } from "../data/Projects";
import { Link } from "react-router-dom";

export function Projects() {
  return (
    <div>
      <h3>My Projects</h3>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>
              <h2>{project.title}</h2>
              <p>{project.tagline}</p>
              <img src={project.image} alt={project.title} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
