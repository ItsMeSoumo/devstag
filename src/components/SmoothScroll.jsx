"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  useEffect(() => {
    // Create a single Lenis instance for the whole app
    const lenis = new Lenis({
      duration: 4.2,
      smoothWheel: true,
      smoothTouch: true,
      wheelMultiplier: 0.4,
      touchMultiplier: 0.6,
    });

    // Keep ScrollTrigger in sync with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    // Bridge a custom event that pages can listen to for frame-accurate updates
    const bridge = () => {
      window.dispatchEvent(new CustomEvent("lenis-scroll"));
    };
    lenis.on("scroll", bridge);

    // Drive Lenis via requestAnimationFrame
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Ensure ScrollTrigger computes correctly with smooth scrolling
    // No explicit lenis.update() (not available in this Lenis version)
    ScrollTrigger.refresh();

    // Expose for debugging (dev only)
    if (process.env.NODE_ENV !== "production") {
      // @ts-ignore
      window.__lenis = lenis;
    }

    return () => {
      cancelAnimationFrame(rafId);
      lenis.off("scroll", bridge);
      lenis.destroy();
    };
  }, []);

  return null;
}
