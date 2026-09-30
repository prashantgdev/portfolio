import React from "react";

export function Footer({ developer }) {
  return (
    <footer>
      <span>© 2026 {developer.name}</span>
      <span>Built with React · Made while learning</span>
    </footer>
  );
}
