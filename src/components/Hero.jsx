"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
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
                  I craft digital experiences with a focus on deep logic, sleek
                  aesthetics, and scalable architectures.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.5}>
                <button
                  className="btn"
                  onClick={() => {
                    const el = document.getElementById("works");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
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
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </header>
  );
}
