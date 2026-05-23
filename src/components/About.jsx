"use client";

import ScrollReveal from "./ScrollReveal";

export default function About() {
  const details = [
    { label: "Name", value: "Nur Hadi Imamuddin" },
    { label: "Date of Birth", value: "January 18, 2005" },
    { label: "Location", value: "East Java, Indonesia" },
    { label: "Email", value: "nurhadiimamuddin@gmail.com" },
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-label">About</h2>
          </div>
        </ScrollReveal>

        <div className="about-grid">
          <ScrollReveal>
            <p className="about-lead" style={{ fontFamily: "var(--font-heading)" }}>
              Crafting the perfect balance between robust engineering and minimalist design.
            </p>
            <p className="about-body">
              From web applications to smart IoT integrations, I engineer robust systems designed around the user. I believe that achieving true simplicity requires meticulous craftsmanship.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="details-list">
              {details.map((d) => (
                <div className="detail-item" key={d.label}>
                  <span className="detail-label">{d.label}</span>
                  <span className="detail-value">{d.value}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
