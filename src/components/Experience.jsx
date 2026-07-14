"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import Magnetic from "./Magnetic";

const career = [
  {
    year: "2023 — 2026",
    title: "Associate Degree in Computer Engineering, Department of Information Technology",
    org: "State Polytechnic of Jember",
  },
  {
    year: "2025",
    title: "An Undergraduate Internship Program as part of the University Academic Curriculum",
    org: "PT Telkom Akses Malang Region",
  },
];

const certifications = [
  {
    year: "2025",
    title: "Junior Cyber Security",
    org: "Indonesian Professional Certification Authority (BNSP), valid from July 2025 until July 2028 with Credential ID TIK 1565 31199 2025",
    pdf: "/pdf/01.pdf"
  },
  {
    year: "2025",
    title: "JNS Vocational School Graduate Academy",
    org: "Ministry of Communication and Digital (KOMDIGI) in July 2025 with Credential ID 193105941160-28/VSGA/BLSDM.Komdigi/2025",
    pdf: "/pdf/02.pdf"
  },
  {
    year: "2025",
    title: "Micro Skill Digital Talent Scholarsip 2025",
    org: "Ministry of Communication and Digital (KOMDIGI) for a 2-hour training session in July 2025 with Credential ID 2299815850-4633/MS/BLSDM.Komdigi/2025",
    pdf: "/pdf/03.pdf"
  },
];

function ExpBlock({ categoryTitle, items, delay, onOpenModal, style }) {
  return (
    <div style={style}>
      <ScrollReveal delay={delay}>
        <h3 style={{ fontSize: "11px", textTransform: "uppercase", color: "rgba(28,29,32,0.5)", marginBottom: "20px" }}>{categoryTitle}</h3>
      </ScrollReveal>
      {items.map((item, i) => (
        <ScrollReveal delay={delay + (i * 0.1)} key={i}>
          <div className="services-row" style={{ alignItems: "center" }}>
            <div className="services-title" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <h3 style={{ fontSize: "clamp(24px, 2.5vw, 32px)", fontWeight: 400 }}>{item.year}</h3>
            </div>
            <div className="services-content">
              <h4 style={{ fontSize: "18px", fontWeight: 500, marginBottom: "8px", display: "flex", alignItems: "center", gap: "10px" }}>
                {item.title}
                {item.pdf && (
                  <span
                    style={{ display: "inline-flex", cursor: "pointer", color: "var(--color-blue)" }}
                    onClick={() => onOpenModal(item.pdf)}
                    title="View Certificate"
                  >
                    <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </span>
                )}
              </h4>
              <p style={{ margin: 0 }}>{item.org}</p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}

export default function Experience() {
  const [modalPdf, setModalPdf] = useState(null);

  return (
    <section className="section" id="experience" style={{ paddingBottom: "0", paddingTop: "5em" }}>
      <div className="container">


        <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
          <ExpBlock categoryTitle="Education & Career" items={career} delay={0} onOpenModal={setModalPdf} />
          <ExpBlock categoryTitle="Certifications" items={certifications} delay={0.15} onOpenModal={setModalPdf} />
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "80px", paddingBottom: "20px" }}>
          <Magnetic>
            <a href="#contact" style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--color-dark)",
              color: "#FFFFFF",
              padding: "20px 50px",
              borderRadius: "100px",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: 400,
              position: "relative",
              cursor: "pointer"
            }} data-cursor="hover">
              <span style={{ position: "relative", zIndex: 1 }}>Contact</span>
            </a>
          </Magnetic>
        </div>

        {modalPdf && (
          <div className="pdf-modal-overlay" onClick={() => setModalPdf(null)} style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", background: "rgba(0,0,0,0.8)", zIndex: 9999, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="pdf-modal-content" onClick={(e) => e.stopPropagation()} style={{ width: "80%", height: "80%", background: "#fff", position: "relative" }}>
              <button onClick={() => setModalPdf(null)} style={{ position: "absolute", top: "-40px", right: 0, background: "none", border: "none", color: "#fff", fontSize: "24px" }}>✕</button>
              <iframe src={modalPdf} style={{ width: "100%", height: "100%", border: "none" }} title="Certificate PDF" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
