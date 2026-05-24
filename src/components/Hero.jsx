"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { useLenis } from "lenis/react";

export default function Hero() {
  const lenis = useLenis();
  const titleVariants = {
    hidden: { y: "110%" },
    visible: (i) => ({
      y: 0,
      transition: {
        duration: 1,
        delay: 0.3 + i * 0.15,
        ease: [0.19, 1, 0.22, 1],
      },
    }),
  };

  return (
    <header className="hero" id="home">
      <div className="container">
        <div className="hero-layout">
          <div className="hero-text">
            <ScrollReveal>
              <p className="hero-subtitle">Based in East Java</p>
            </ScrollReveal>

            <h1 className="hero-title" style={{ fontFamily: "var(--font-heading)" }}>
              {["Software", "Engineer."].map((word, i) => (
                <span className="hero-title-line" key={word}>
                  <motion.span
                    style={{ display: "block" }}
                    initial="hidden"
                    animate="visible"
                    custom={i}
                    variants={titleVariants}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            <div className="hero-bottom">
              <ScrollReveal delay={0.4}>
                <p className="hero-desc">
                 Specializing in web development and smart device integration,
                  combining secure backend architecture with a strong problem-solving mindset to deliver reliable systems.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.5}>
                <button
                  className="btn"
                  onClick={() => {
                    if (lenis) {
                      lenis.scrollTo("#works", {
                        duration: 1.4,
                        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                      });
                    } else {
                      const el = document.getElementById("works");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Explore Works
                </button>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal delay={0.3} className="hero-image">
            <div className="hero-img-wrapper">
              <Image
                src="/images/mine.jpeg"
                alt="Nur Hadi Imamuddin"
                width={420}
                height={525}
                priority
                className="hero-img-light"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <Image
                src="/images/minee.png"
                alt="Nur Hadi Imamuddin"
                width={420}
                height={525}
                priority
                className="hero-img-dark"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </header>
  );
}
