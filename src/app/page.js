"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Works from "@/components/Works";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // Simple, clean parallax effect: footer starts 200px higher and moves to 0
  const y = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  return (
    <SmoothScroll>
      <AnimatePresence mode="wait">
        <Preloader />
      </AnimatePresence>
      
      <main 
        style={{ 
          position: "relative", 
          zIndex: 2, 
          backgroundColor: "var(--color-light)"
        }}
      >
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Works />
        <Experience />
        
        <div style={{ 
          position: "absolute", 
          bottom: "-99px", // pull it down outside the main content
          left: 0, 
          width: "100%", 
          height: "100px", 
          zIndex: 3,
          pointerEvents: "none",
          filter: "drop-shadow(0px 15px 15px rgba(0,0,0,0.04))"
        }}>
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
            <path d="M0,0 L1440,0 C960,100 480,100 0,0 Z" fill="var(--color-light)" />
          </svg>
        </div>
      </main>

      <motion.div 
        ref={containerRef}
        style={{ 
          y,
          position: "relative", 
          zIndex: 1,
          backgroundColor: "#1C1D20"
        }}
      >
        <Contact />
      </motion.div>
    </SmoothScroll>
  );
}
