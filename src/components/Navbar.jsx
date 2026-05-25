"use client";

import { useState, useEffect, useCallback } from "react";
import { useLenis } from "lenis/react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }

    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

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
          style={{ cursor: "pointer", background: "none", border: "none" }}
        >
          <Image src="/images/logo.png" alt="Logo" width={40} height={40} className="logo-img" style={{ objectFit: 'contain' }} />
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
          {mounted && (
            <div
              className="theme-switch"
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode"
              style={{
                position: "relative",
                width: "40px",
                height: "22px",
                backgroundColor: theme === "light" ? "var(--border)" : "var(--bg-alt)",
                border: "1px solid var(--border)",
                borderRadius: "100px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                padding: "0 3px",
                marginLeft: "8px",
                transition: "background-color 0.3s ease, border-color 0.3s ease",
              }}
            >
              <div
                className="theme-switch-thumb"
                style={{
                  width: "14px",
                  height: "14px",
                  backgroundColor: "var(--text)",
                  borderRadius: "50%",
                  transform: theme === "light" ? "translateX(0)" : "translateX(18px)",
                  transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.3s ease",
                }}
              />
            </div>
          )}
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
