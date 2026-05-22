"use client";

import { useLenis } from "lenis/react";

export default function Footer() {
  const lenis = useLenis();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© 2026 Nur Hadi Imamuddin.</span>
        <button
          className="back-to-top"
          onClick={() => {
            if (lenis) {
              lenis.scrollTo("#home", {
                duration: 1.6,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
              });
            } else {
              const el = document.getElementById("home");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
