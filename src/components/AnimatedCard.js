"use client";

import React, { useState } from "react";

export default function AnimatedCard({
  children,
  glowColor = "rgba(168, 85, 247, 0.25)",
  depth = 12,
  hoverScale = 1.03,
  className = "",
}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`relative rounded-2xl transition-transform duration-300 ease-out ${className}`}
      style={{
        transform: `scale(${hover ? hoverScale : 1})`,
        willChange: "transform",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Glow layer */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          boxShadow: `0 0 ${depth * 2}px ${glowColor}, inset 0 0 ${depth}px ${glowColor}`,
          opacity: hover ? 1 : 0.5,
          transition: "opacity 250ms ease",
        }}
      />

      {/* Content */}
      <div className="relative z-10 rounded-2xl">
        {children}
      </div>

      {/* Subtle border */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-2xl"
        style={{
          border: "1px solid rgba(255,255,255,0.06)",
          zIndex: 0,
        }}
      />
    </div>
  );
}
