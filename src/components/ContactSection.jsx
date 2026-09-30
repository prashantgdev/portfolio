import React from "react";
import { ArrowUpRight, Github, Instagram, Linkedin, Twitter } from "lucide-react";

const socialIcons = { github: Github, linkedin: Linkedin, twitter: Twitter, instagram: Instagram };

export function ContactSection({ developer, socials }) {
  return (
    <section className="section contact-section" id="contact">
      <span className="section-kicker">04 — Get in touch</span>
      <h2>Have an idea?<br /><em>Let's build it.</em></h2>
      <p>I'm always interested in interesting projects, feedback, and meeting other people who like building things.</p>

      <a className="email-link" href={`mailto:${developer.email}`}>
        {developer.email} <ArrowUpRight size={20} aria-hidden="true" />
      </a>

      <div className="socials">
        {socials.map((social) => {
          const Icon = socialIcons[social.icon];
          if (!Icon) return null;
          const isMail = social.url.startsWith("mailto:");

          return (
            <a
              key={social.name}
              href={social.url}
              target={isMail ? undefined : "_blank"}
              rel={isMail ? undefined : "noopener noreferrer"}
            >
              <Icon size={17} aria-hidden="true" /> {social.name}
            </a>
          );
        })}
      </div>
    </section>
  );
}
