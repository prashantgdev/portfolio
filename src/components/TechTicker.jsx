import React from "react";

export function TechTicker({ technologies }) {
  const items = [...technologies, ...technologies];

  return (
    <section className="ticker" aria-label="Technology stack">
      <div>
        {items.map((technology, index) => (
          <span key={`${technology}-${index}`}>
            {technology} <span aria-hidden="true">✦</span>{" "}
          </span>
        ))}
      </div>
    </section>
  );
}
