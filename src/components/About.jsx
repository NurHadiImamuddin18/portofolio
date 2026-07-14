"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import Magnetic from "./Magnetic";
import { useLenis } from "lenis/react";

export default function About() {
  const lenis = useLenis();

  const details = [
    { label: "Name", value: "Nur Hadi Imamuddin" },
    { label: "Date of Birth", value: "January 18, 2005" },
    { label: "Location", value: "East Java, Indonesia" },
    { label: "Email", value: "nurhadiimamuddin@gmail.com" },
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        
        <div className="about-top">
          <ScrollReveal>
            <div style={{ position: "relative", width: "clamp(280px, 30vw, 420px)", height: "clamp(350px, 40vw, 530px)", borderRadius: "20px", overflow: "hidden", backgroundColor: "var(--color-lightgray)", marginLeft: "5vw" }}>
              <Image 
                src="/images/adi.png" 
                alt="Nur Hadi Imamuddin" 
                fill 
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="about-body" style={{ marginBottom: "40px" }}>
              Specializing in web development and smart device integration, combining secure backend architecture with a strong problem-solving mindset to deliver reliable systems.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {details.map((d) => (
                <div key={d.label} style={{ display: "flex", gap: "20px" }}>
                  <span style={{ width: "120px", color: "rgba(28,29,32,0.5)", fontSize: "14px", textTransform: "uppercase" }}>{d.label}</span>
                  <span style={{ fontSize: "16px" }}>{d.value}</span>
                </div>
              ))}
            </div>

            <div className="about-btn-wrap" style={{ marginTop: "60px" }}>
              <Magnetic>
                <div className="magnetic-btn-wrap" onClick={() => lenis && lenis.scrollTo("#contact")}>
                  <button className="magnetic-btn">
                    <span>About me</span>
                  </button>
                </div>
              </Magnetic>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
