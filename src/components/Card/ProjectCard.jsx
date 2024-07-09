import "./ProjectCard.css";
import { projects } from "../../data/Projects";
import { useParams } from "react-router-dom";

export function ProjectCard() {
  const { projectId } = useParams();
  const project = projects.find((project) => project.id == projectId);

  return (
    <div className="project-card">
      <h4>{project.title}</h4>
      <p>{project.tagline}</p>
      <img src={project.image} alt={project.title} />
    </div>
  );
}
