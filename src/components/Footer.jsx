"use client";

import { useState, useEffect } from "react";
import { useLenis } from "lenis/react";

export default function Footer() {
  const lenis = useLenis();
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format: 15:42 PM GMT+7
      const timeString = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        timeZoneName: 'short'
      });
      setTime(timeString);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer" style={{ backgroundColor: "transparent" }}>
      <div className="container footer-inner">
        <div className="footer-left">
          <span>© 2026 Edition</span>
        </div>
        
        <div className="footer-center">
          <span>Local time: {time}</span>
        </div>

        <div className="footer-right">
          <a href="https://linkedin.com/in/nur-hadi-imamuddin-0b2b85377/" target="_blank" rel="noopener noreferrer" className="footer-social" data-cursor="hover">LinkedIn</a>
          <a href="https://github.com/NurHadiImamuddin18/" target="_blank" rel="noopener noreferrer" className="footer-social" data-cursor="hover">GitHub</a>
          <a href="https://www.instagram.com/hyadiv_/" target="_blank" rel="noopener noreferrer" className="footer-social" data-cursor="hover">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
