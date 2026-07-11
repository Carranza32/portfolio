"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LiquidBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
        overflow: "hidden",
        backgroundColor: "#060608",
      }}
    >
      {/* Dynamic Blur Layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.85,
          filter: "blur(130px)",
          WebkitFilter: "blur(130px)",
        }}
      >
        {/* Blob 1: Deep Indigo */}
        <motion.div
          animate={{
            x: ["-20%", "20%", "-10%", "-20%"],
            y: ["-10%", "30%", "10%", "-10%"],
            scale: [1, 1.25, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: "5%",
            left: "15%",
            width: "clamp(300px, 45vw, 600px)",
            height: "clamp(300px, 45vw, 600px)",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.22) 0%, transparent 80%)",
          }}
        />

        {/* Blob 2: Royal Purple */}
        <motion.div
          animate={{
            x: ["20%", "-20%", "10%", "20%"],
            y: ["20%", "-15%", "30%", "20%"],
            scale: [1.1, 0.85, 1.2, 1.1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: "20%",
            right: "10%",
            width: "clamp(350px, 50vw, 700px)",
            height: "clamp(350px, 50vw, 700px)",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.18) 0%, transparent 80%)",
          }}
        />

        {/* Blob 3: Deep Emerald Green (Inspired by the soccer design widget's premium atmosphere) */}
        <motion.div
          animate={{
            x: ["-10%", "15%", "-25%", "-10%"],
            y: ["40%", "10%", "-20%", "40%"],
            scale: [0.9, 1.15, 1, 0.9],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            bottom: "10%",
            left: "5%",
            width: "clamp(320px, 48vw, 650px)",
            height: "clamp(320px, 48vw, 650px)",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.14) 0%, transparent 80%)",
          }}
        />

        {/* Blob 4: Cyan Highlight */}
        <motion.div
          animate={{
            x: ["10%", "-10%", "20%", "10%"],
            y: ["30%", "60%", "10%", "30%"],
            scale: [1, 1.3, 0.9, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            bottom: "20%",
            right: "20%",
            width: "clamp(280px, 40vw, 550px)",
            height: "clamp(280px, 40vw, 550px)",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 80%)",
          }}
        />
      </div>

      {/* Subtle Noise / Grid overlay for depth */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.015,
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
