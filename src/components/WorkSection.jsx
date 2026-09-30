import React from "react";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function WorkSection({ projects }) {
  return (
    <section className="section work-section" id="work">
      <SectionHeading
        kicker="01 — Selected work"
        title="Things I've"
        emphasis="built."
        description={<>Small projects, real lessons.<br />More on the way.</>}
      />

      <div className="project-grid">
        {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
      </div>
    </section>
  );
}
