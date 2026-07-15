"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import Magnetic from "./Magnetic";
import Marquee from "./Marquee";

export default function Hero() {
  return (
    <header className="hero" id="home">
      <div
        className="container"
        style={{ position: "relative", zIndex: 2, height: "100%" }}
      >
        <div className="hero-content">
          {/* Left: Dark Pill with Globe */}
          <ScrollReveal delay={0.3}>
            <div className="hero-pill">
              <p className="hero-pill-text">
                Based <br /> in <br /> East Java
              </p>
              <Magnetic>
                <div className="hero-pill-globe">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" />
                    <ellipse cx="50" cy="50" rx="20" ry="45" />
                    <ellipse cx="50" cy="50" rx="45" ry="20" />
                    <path d="M 50 5 L 50 95 M 5 50 L 95 50" />
                  </svg>
                </div>
              </Magnetic>
            </div>
          </ScrollReveal>

          {/* Right: Text & Arrow */}
          <ScrollReveal delay={0.4}>
            <div className="hero-right-block">
              <svg
                className="hero-arrow"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M7 7l10 10M17 7v10H7" />
              </svg>
              <h2 className="hero-right-title">
                Software <br /> Engineer.
              </h2>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom Marquee (Overlays Image) */}
      <div className="hero-marquee-container">
        <ScrollReveal delay={0.2}>
          <Marquee speed={25}>
            <span className="marquee-item">
              Nur Hadi Imamuddin <span className="marquee-dash">—</span>
            </span>
          </Marquee>
        </ScrollReveal>
      </div>
    </header>
  );
}
