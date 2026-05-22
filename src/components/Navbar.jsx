"use client";

import { useState, useEffect, useCallback } from "react";
import { useLenis } from "lenis/react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback(
    (id) => {
      setMenuOpen(false);
      if (lenis) {
        lenis.scrollTo(`#${id}`, {
          duration: 1.4,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    },
    [lenis]
  );

  const links = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Works", id: "works" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="nav-inner">
        <button
          className="nav-logo"
          onClick={() => scrollTo("home")}
          style={{ cursor: "pointer", background: "none", border: "none", fontFamily: "var(--font-heading)" }}
        >
          NHI.
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          {links.map((link) => (
            <button
              key={link.id}
              className="nav-link"
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          className={`nav-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
