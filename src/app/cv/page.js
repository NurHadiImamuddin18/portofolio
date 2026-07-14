"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

export default function CurriculumVitae() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  };

  return (
    <main className="cv-page">
      {/* Header */}
      <header className="cv-header">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "30px 0" }}>
            <Link
              href="/"
              style={{
                color: "var(--color-light)",
                textDecoration: "none",
                fontSize: "14px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                opacity: 0.7,
                transition: "opacity 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.7)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1
              style={{
                fontSize: "clamp(48px, 8vw, 120px)",
                fontWeight: 400,
                letterSpacing: "-0.04em",
                lineHeight: 1,
                color: "var(--color-light)",
                marginBottom: "40px",
                paddingBottom: "60px",
                borderBottom: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              Curriculum
              <br />
              Vitae
            </h1>
          </motion.div>
        </div>
      </header>

      {/* Content */}
      <div className="cv-content">
        <div className="container">
          {/* Personal Information */}
          <section className="cv-section">
            <ScrollReveal>
              <h2 className="cv-section-title">Personal Information</h2>
            </ScrollReveal>
            <div className="cv-grid">
              <ScrollReveal delay={0.1}>
                <div className="cv-info-row">
                  <span className="cv-label">Full Name</span>
                  <span className="cv-value">Nur Hadi Imamuddin</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="cv-info-row">
                  <span className="cv-label">Date of Birth</span>
                  <span className="cv-value">January 18, 2005</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="cv-info-row">
                  <span className="cv-label">Location</span>
                  <span className="cv-value">East Java, Indonesia</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <div className="cv-info-row">
                  <span className="cv-label">Email</span>
                  <span className="cv-value">nurhadiimamuddin@gmail.com</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="cv-info-row">
                  <span className="cv-label">LinkedIn</span>
                  <a
                    href="https://www.linkedin.com/in/nur-hadi-imamuddin-0b2b85377/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cv-value cv-link"
                  >
                    linkedin.com/in/nur-hadi-imamuddin
                  </a>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.35}>
                <div className="cv-info-row">
                  <span className="cv-label">GitHub</span>
                  <a
                    href="https://github.com/NurHadiImamuddin18/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cv-value cv-link"
                  >
                    github.com/NurHadiImamuddin18
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Profile Summary */}
          <section className="cv-section">
            <ScrollReveal>
              <h2 className="cv-section-title">Profile</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="cv-paragraph">
                Specializing in web development and smart device integration,
                combining secure backend architecture with a strong
                problem-solving mindset to deliver reliable systems. Passionate
                about creating digital experiences with deep logic, sleek
                aesthetics, and scalable architectures.
              </p>
            </ScrollReveal>
          </section>

          {/* Education */}
          <section className="cv-section">
            <ScrollReveal>
              <h2 className="cv-section-title">Education</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="cv-experience-item">
                <div className="cv-exp-header">
                  <div>
                    <h3 className="cv-exp-title">Software Engineering</h3>
                    <p className="cv-exp-company">Vocational High School</p>
                  </div>
                  <span className="cv-exp-date">2020 — Present</span>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Skills */}
          <section className="cv-section">
            <ScrollReveal>
              <h2 className="cv-section-title">Skills</h2>
            </ScrollReveal>
            <div className="cv-skills-grid">
              {[
                "HTML & CSS",
                "JavaScript",
                "React / Next.js",
                "Node.js",
                "PHP / Laravel",
                "MySQL",
                "Git & GitHub",
                "IoT / Arduino",
                "REST API",
                "Responsive Design",
              ].map((skill, i) => (
                <ScrollReveal key={skill} delay={0.05 * i}>
                  <div className="cv-skill-tag">{skill}</div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
