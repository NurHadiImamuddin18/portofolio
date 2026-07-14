"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const words = [
  "Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo", "Halo"
];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) {
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
      return;
    }
    const timeout = setTimeout(() => {
      setIndex(index + 1);
    }, index === 0 ? 1000 : 150);
    return () => clearTimeout(timeout);
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
    }
  };

  const slideUp = {
    initial: {
      top: 0
    },
    exit: {
      top: "-100vh",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }
  };

  if (!isLoading) return null;
  if (dimension.width === 0) return null;

  return (
    <motion.div 
      variants={slideUp} 
      initial="initial" 
      exit="exit" 
      className="preloader"
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        backgroundColor: "#1C1D20"
      }}
    >
      <motion.p 
        key={index}
        variants={textVariants}
        initial="initial"
        animate="enter"
        exit="exit"
        style={{
          display: "flex",
          color: "white",
          fontSize: "42px",
          alignItems: "center",
          position: "absolute",
          zIndex: 10,
          fontWeight: 400
        }}
      >
        <span style={{
          display: "block",
          width: "10px",
          height: "10px",
          backgroundColor: "white",
          borderRadius: "50%",
          marginRight: "15px"
        }}></span>
        {words[index]}
      </motion.p>
      
      <svg style={{ position: "absolute", top: 0, width: "100%", height: "calc(100% + 300px)", left: 0 }}>
        <motion.path 
          variants={curve} 
          initial="initial" 
          exit="exit" 
          fill="#1C1D20" 
        />
      </svg>
    </motion.div>
  );
}
