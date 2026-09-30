import React, { useEffect, useState } from "react";
import { Code2, Database, Server } from "lucide-react";

import { portfolioData } from "./data/portfolio";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TechTicker } from "./components/TechTicker";
import { WorkSection } from "./components/WorkSection";
import { AboutSection } from "./components/AboutSection";
import { StackSection } from "./components/StackSection";
import { JourneySection } from "./components/JourneySection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import "./styles.css";

const stackIcons = {
  Frontend: Code2,
  Backend: Server,
  Data: Database,
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const { developer, navigation, technologies, projects, stack, learning, journey, socials } = portfolioData;

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />

      <Header
        developer={developer}
        navigation={navigation}
        menuOpen={menuOpen}
        scrolled={scrolled}
        onMenuToggle={() => setMenuOpen((open) => !open)}
        onCloseMenu={closeMenu}
      />

      <main id="top">
        <Hero developer={developer} />
        <TechTicker technologies={technologies} />
        <WorkSection projects={projects} />
        <AboutSection developer={developer} />
        <StackSection stack={stack} learning={learning} iconMap={stackIcons} />
        <JourneySection journey={journey} />
        <ContactSection developer={developer} socials={socials} />
      </main>

      <Footer developer={developer} />
    </div>
  );
}
