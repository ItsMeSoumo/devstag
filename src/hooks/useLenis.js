"use client";
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const useLenis = (options = {}) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({
      // duration: 2,
      autoRaf: true,
      ...options,
    });

    lenis.on('scroll', (e) => {
      // console.log(e);
    });

    // Keep ScrollTrigger in sync with Lenis scroll position
    lenis.on('scroll', ScrollTrigger.update);

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
    };
  }, [options]);

  return lenisRef.current;
};

export default useLenis;