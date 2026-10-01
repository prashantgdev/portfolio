import React from "react";

export function AboutSection({ developer }) {
  return (
    <section className="section about-section" id="about">
      <div className="about-grid">
        <div>
          <span className="section-kicker">02 — A little context</span>
          <h2>
            {developer.about.heading.first}
            <br />
            <em>{developer.about.heading.emphasis}</em>
          </h2>
        </div>

        <div className="about-copy">
          {developer.about.paragraphs.map((paragraph, index) => (
            <p key={`${paragraph.text}-${index}`} className={paragraph.type === "lead" ? "lead" : ""}>
              {paragraph.text}
            </p>
          ))}
          <div className="about-signature">— {developer.name.split(" ")[0]} {developer.name.split(" ")[1].split("")[0]}.</div>
        </div>
      </div>
    </section>
  );
}
