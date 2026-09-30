import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function JourneySection({ journey }) {
  return (
    <section className="section journey-section">
      <div className="journey-card">
        <div className="journey-icon"><Sparkles size={22} aria-hidden="true" /></div>
        <div>
          <span className="section-kicker">What's next</span>
          <h2>B.Tech → deeper CS → <em>real products.</em></h2>
          <p>{journey}</p>
        </div>
        <span className="arrow-circle" aria-hidden="true"><ArrowUpRight /></span>
      </div>
    </section>
  );
}
