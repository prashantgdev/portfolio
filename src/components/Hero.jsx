import React from "react";
import { Code2, MapPin, ArrowUpRight } from "lucide-react";

export function Hero({ developer }) {
  return (
    <section className="hero section">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="status-dot" aria-hidden="true" />
          {developer.availability}
        </div>

        <h1>
          I build things
          <br />
          <em>{developer.intro.emphasis}.</em>
        </h1>

        <p className="hero-text">{developer.intro.description}</p>

        <div className="hero-actions">
          <a className="button primary" href="#work">
            See my work
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a className="button ghost" href="#about">More about me</a>
        </div>

        <div className="quick-facts">
          {developer.facts.map((fact, index) => (
            <span key={fact}>
              {index > 0 && <span className="fact-separator" aria-hidden="true">•</span>}
              {index === 0 && <MapPin size={15} aria-hidden="true" />}
              {fact}
            </span>
          ))}
        </div>
      </div>

      <HeroCodeCard developer={developer} />
    </section>
  );
}

function HeroCodeCard({ developer }) {
  return (
    <div className="hero-card">
      <div className="card-top">
        <span>currently.js</span>
        <span className="live">● {developer.me.status}</span>
      </div>

      <div className="code-block">
        <div><span className="line-no">01</span><span className="purple">const</span>{" "}<span className="blue">developer</span> = {"{"}</div>
        <div><span className="line-no">02</span>&nbsp; name: <span className="green">"{developer.name}"</span>,</div>
        <div><span className="line-no">03</span>&nbsp; focus: <span className="green">"{developer.me.focus}"</span>,</div>
        <div>
          <span className="line-no">04</span>&nbsp; stack: [
          {developer.me.stack.map((item, index) => (
            <span key={item}>
              <span className="green">"{item}"</span>{index < developer.me.stack.length - 1 ? ", " : ""}
            </span>
          ))}
          ],
        </div>
        <div><span className="line-no">05</span>&nbsp; building: <span className="green">{String(developer.me.building)}</span>,</div>
        <div><span className="line-no">06</span>&nbsp; coffee: <span className="orange">"{developer.me.coffee}"</span></div>
        <div><span className="line-no">07</span>{"}"}</div>
      </div>

      <div className="card-footer">
        <span><Code2 size={15} aria-hidden="true" /> JavaScript</span>
        <span>↳ learning in private</span>
      </div>
    </div>
  );
}
