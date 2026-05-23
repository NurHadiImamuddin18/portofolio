"use client";

import ScrollReveal from "./ScrollReveal";

const career = [
  {
    year: "2023 — Present",
    title: "Freelance Web Developer",
    org: "Independent",
  },
  {
    year: "2022 — 2023",
    title: "Junior Web Developer",
    org: "Tech Agency",
  },
  {
    year: "2021 — 2022",
    title: "Web Development Intern",
    org: "Startup Inc.",
  },
];

const certifications = [
  {
    year: "2025",
    title: "Web Dev Fundamentals",
    org: "Google Digital Garage",
  },
  {
    year: "2025",
    title: "JS Algorithms & Data Structures",
    org: "freeCodeCamp",
  },
  {
    year: "2024",
    title: "PHP & MySQL Full Stack",
    org: "Udemy",
  },
];

function ExpColumn({ title, items, delay = 0 }) {
  return (
    <ScrollReveal delay={delay}>
      <h3
        className="exp-col-title"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h3>
      <div>
        {items.map((item, i) => (
          <div className="exp-row" key={i}>
            <span className="exp-year">{item.year}</span>
            <div>
              <h4 className="exp-title">{item.title}</h4>
              <span className="exp-org">{item.org}</span>
            </div>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}

export default function Experience() {
  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-label">Experience</h2>
          </div>
        </ScrollReveal>

        <div className="exp-grid">
          <ExpColumn title="Career" items={career} delay={0} />
          <ExpColumn title="Certifications" items={certifications} delay={0.12} />
        </div>
      </div>
    </section>
  );
}
