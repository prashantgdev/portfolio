import React from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Header({
  developer,
  navigation,
  menuOpen,
  scrolled,
  onMenuToggle,
  onCloseMenu,
}) {
  const handle = developer.handle.split(/(?=\.)/);

  return (
    <header className="nav-wrap">
      <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`} aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label={`${developer.name} home`} onClick={onCloseMenu}>
          <span className="brand-mark">&lt;/&gt;</span>
          <span>
            {handle[0]}
            <span className="muted">{handle[1]}</span>
          </span>
        </a>

        <div id="primary-navigation" className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={onCloseMenu}>
              {item.label}
            </a>
          ))}
        </div>

        <a className="nav-cta" href="#contact" onClick={onCloseMenu}>
          Let's talk
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>

        <button
          className="menu-btn"
          type="button"
          onClick={onMenuToggle}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
}
