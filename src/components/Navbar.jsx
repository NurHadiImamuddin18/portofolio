"use client";

import { useState, useEffect, useCallback } from "react";
import { useLenis } from "lenis/react";
import Magnetic from "./Magnetic";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 150);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((id) => {
    setMenuOpen(false);
    setTimeout(() => {
      if (lenis) {
        lenis.scrollTo(`#${id}`, {
          duration: 1.4,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
    }, 400);
  }, [lenis]);

  const links = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Works", id: "works" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <nav className={`nav-bar ${scrolled ? "hidden" : ""}`}>
        <button className="nav-logo" onClick={() => scrollTo("home")} data-cursor="hover">
          © Code by Nur Hadi
        </button>
        <div className="nav-links-right">
          {links.map(l => (
            <button key={l.id} className="nav-link-inline" onClick={() => scrollTo(l.id)} data-cursor="hover">
              {l.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Floating magnetic burger */}
      <div style={{ position: "fixed", top: "30px", right: "30px", zIndex: 200 }}>
          <button
            className={`menu-float ${scrolled ? "visible" : ""} ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            data-cursor="hover"
          >
            <span></span>
            <span></span>
          </button>
      </div>

      <div className={`fixed-nav-overlay ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(false)}></div>
      
      <div className={`fixed-nav ${menuOpen ? "active" : ""}`}>
        <h4 className="fixed-nav-label">Navigation</h4>
        <div className="fixed-nav-links">
          {links.map((link) => (
            <button
              key={link.id}
              className="fixed-nav-link"
              onClick={() => scrollTo(link.id)}
              data-cursor="hover"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
