import React from "react";
import { ArrowUpRight, Github } from "lucide-react";

export function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-visual">
        <span className="project-number">{project.number}</span>
        <div className="visual-lines" aria-hidden="true"><i /><i /><i /><i /></div>
        <div className="visual-window" aria-hidden="true">
          <div className="window-bar"><b /><b /><b /></div>
          <div className="window-content"><span /><span /><span /><span /><span /></div>
        </div>
      </div>

      <div className="project-info">
        <div className="project-meta"><span>{project.type}</span><span>{project.number}</span></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="tags">
          {project.stack.map((technology) => <span key={technology}>{technology}</span>)}
        </div>

        <div className="project-links">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            Live project <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github size={15} aria-hidden="true" /> Source
          </a>
        </div>
      </div>
    </article>
  );
}
