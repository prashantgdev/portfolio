import React from "react";
import { SectionHeading } from "./SectionHeading";

export function StackSection({ stack, learning, iconMap }) {
  return (
    <section className="section stack-section" id="stack">
      <SectionHeading
        kicker="03 — My toolkit"
        title="Learning the"
        emphasis="stack."
        description={<>I care more about understanding<br />the fundamentals than collecting badges.</>}
      />

      <div className="stack-cards">
        {stack.map((item) => {
          const Icon = iconMap[item.title];
          return (
            <div className="stack-card" key={item.title}>
              {Icon && <Icon size={23} aria-hidden="true" />}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="stack-list">
                {item.technologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
            </div>
          );
        })}
      </div>

      <div className="progress-list">
        {learning.map((item) => (
          <div className="progress-row" key={item.name}>
            <div className="progress-label"><strong>{item.name}</strong><span>{item.stage}</span></div>
            <div className="progress-description">{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
