"use client";

import { motion } from "framer-motion";

/**
 * AmbientBackground renders a fixed container with three layered, slowly drifting
 * gradient blobs using high-blur filtering and GPU-accelerated CSS animations.
 */
export default function AmbientBackground() {
  return (
    <motion.div
      className="ambient-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="ambient-blob blob-1" />
      <div className="ambient-blob blob-2" />
      <div className="ambient-blob blob-3" />
    </motion.div>
  );
}
