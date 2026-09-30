import React from "react";

export function SectionHeading({ kicker, title, emphasis, description }) {
  return (
    <div className="section-heading">
      <div>
        <span className="section-kicker">{kicker}</span>
        <h2>
          {title} <em>{emphasis}</em>
        </h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}
