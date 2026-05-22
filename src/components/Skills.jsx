"use client";

import ScrollReveal from "./ScrollReveal";

const columns = [
  {
    title: "Development",
    items: [
      "Front-End Engineering",
      "Back-End Architecture",
      "Database Design",
      "RESTful API Development",
      "IoT Integrations",
    ],
  },
  {
    title: "Technologies",
    items: [
      "HTML5, CSS3, JavaScript",
      "PHP, Python",
      "Laravel, React, Vue.js",
      "MySQL, MongoDB",
      "Git, Node.js",
    ],
  },
  {
    title: "Soft Skills",
    items: [
      "Problem Solving",
      "Critical Thinking",
      "Team Collaboration",
      "Time Management",
      "Effective Communication",
    ],
  },
];

export default function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-label">02 / Skills</h2>
          </div>
        </ScrollReveal>

        <div className="skills-grid">
          {columns.map((col, i) => (
            <ScrollReveal key={col.title} delay={i * 0.1}>
              <h3
                className="skills-col-title"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {col.title}
              </h3>
              <ul className="skills-list">
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
