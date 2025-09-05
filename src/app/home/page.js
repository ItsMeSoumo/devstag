"use client"

import { motion } from "framer-motion";
import { useRef, useEffect, useCallback, useMemo, useState } from "react";
import MagicBento from "@/components/ui/Magicbento";
import DarkVeil from "@/components/ui/Darkveil";
import useLenis from "@/hooks/useLenis";
import Footer from "@/components/Footer";
import { StickyScroll } from "@/components/ui/stcikyreveal";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Intro from "@/components/Intro";
import FloatingGallery from "@/components/FloatingGallery";
import Capsules from "@/components/capsules";
import PortalScrollDemo from "@/components/3D/vrmodel";
import SecondSection from "@/components/secondsection"

export default function Home() {
  // const [isLoaded, setIsLoaded] = useState(false);

  // const handleLoaderComplete = () => {
  //   setIsLoaded(true);
  // };

  // Initialize Lenis for smooth scrolling
  const lenis = useLenis({
    autoRaf: true,
  });

  const worksRef = useRef(null);

  // useEffect(() => {

  // }, [isLoaded]);

  // Add background style to ensure no white space is visible
  useEffect(() => {
    // Set body background to match the deep indigo theme
    document.body.style.backgroundColor = '#0A0F2C';

    // Add CSS to ensure solid background colors
    const style = document.createElement('style');
    style.textContent = `
      .overlap-section {
        margin-top: 50px;
        position: relative;
        z-index: 20;
        background-color: #000000 !important;
        width: 100vw !important;
        margin-left: calc(-50vw + 50%) !important;
        margin-right: calc(-50vw + 50%) !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        padding-bottom: 0 !important;
        margin-bottom: 0 !important;
      }
      section {
        position: relative;
        background-color: inherit;
      }
      @media (max-width: 768px) {
        .sticky-header-section {
          position: static;
        }
        .overlap-section {
          margin-top: -20px;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup when component unmounts
      document.body.style.backgroundColor = '';
      document.head.removeChild(style);
    };
  }, []);

  // Enhanced scroll handler for upward animation
  const handleScroll = useCallback(() => {
    if (!worksRef.current) return;

    const scrollPosition = window.scrollY;
    const triggerPosition = window.innerHeight * 0.2; // Trigger even earlier
    const sectionRect = worksRef.current.getBoundingClientRect();
    const sectionTop = sectionRect.top + window.scrollY;

    // Calculate how close we are to the section
    const distanceToSection = sectionTop - scrollPosition;
    const viewportHeight = window.innerHeight;

    // Always ensure the background color is solid
    worksRef.current.style.backgroundColor = '#8558BD';
    worksRef.current.style.opacity = 1;
    worksRef.current.style.width = '100vw';
    worksRef.current.style.maxWidth = '100%';
    worksRef.current.style.marginLeft = '0';
    worksRef.current.style.marginRight = '0';
    worksRef.current.style.overflowX = 'hidden';

    if (scrollPosition > triggerPosition) {
      // Move section upward as user scrolls down
      const moveUpAmount = Math.min(100, (scrollPosition - triggerPosition) * 0.4);
      const scaleValue = 1 + (Math.min(scrollPosition - triggerPosition, 300) * 0.0001);

      // Apply transformations (keeping opacity at 1)
      worksRef.current.style.transform = `translateY(-${moveUpAmount}px) scale(${scaleValue})`;
      worksRef.current.style.boxShadow = `0px -${moveUpAmount / 2}px ${moveUpAmount * 1.5}px rgba(10, 15, 44, ${moveUpAmount / 300})`;

      // Add margin adjustment to create gap closing effect
      worksRef.current.style.marginTop = `${50 - moveUpAmount / 3}px`;
    } else {
      // Reset to initial state (keeping opacity at 1)
      worksRef.current.style.transform = 'translateY(0) scale(1)';
      worksRef.current.style.boxShadow = '0px 0px 0px rgba(10, 15, 44, 0)';
      worksRef.current.style.marginTop = '50px';
    }
  }, []);

  useEffect(() => {
    if (!lenis) return;

    // Use Lenis for scroll events instead of native scroll
    lenis.on('scroll', () => {
      handleScroll();
    });

    // Initial call to set up the scroll position
    handleScroll();

    return () => {
      if (lenis) {
        lenis.on('scroll');
      }
    };
  }, [handleScroll, lenis]);

  // Early return moved after all hooks
  // if (!isLoaded) {
  //   return <Loader onComplete={handleLoaderComplete} />;
  // }

  return (
    <div style={{ maxWidth: '100vw', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

        {/* Intro Section (hidden on mobile) */}
        <section className="hidden md:block" style={{ position: 'relative', zIndex: 2000 }}>
          <Intro />
        </section>

        <SecondSection />

        {/* 3d VR rotation section (hidden on mobile) */}
        <section
          ref={worksRef}
          className="hidden md:block relative w-full py-20 px-0 mt-[50px] rounded-t-[40px] ml-4 shadow-2xl will-change-transform overlap-section"
          style={{
            // transform: "translateY(0) scale(1)",
            opacity: 1,
            // transition: "transform 0.3s ease-out, opacity 0.3s ease-out, box-shadow 0.3s ease-out",
            zIndex: 20,
            position: "relative",

            backdropFilter: "none",
            marginLeft: 0,
            marginRight: 0,
            width: "100vw",
            maxWidth: "110%",
            overflowX: "hidden"
            // overflowY: "hidden"
          }}
        >
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '-40vw',
            transform: 'translateX(-50%)',
            width: '100vw',
            height: '100vw',
            pointerEvents: 'none',
            zIndex: 1,
            background: 'radial-gradient(ellipse 60% 90% at 50% 0%,rgb(0, 0, 0) 0%, #000 100%)'
          }} />

          {/* Additional solid background layer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="w-full relative z-10"
          >

            <div className="relative w-[100vw]" >
              <PortalScrollDemo />
              {/* <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold text-yellow-300 bg-black/20 backdrop-blur-sm rounded-full border border-white/10">
                PREMIUM PROJECT 2
              </span> */}
            </div>

          </motion.div>
        </section>

        {/* Sticky Videos 1by1 showing section */}
        <section style={{ position: 'relative', zIndex: 2000, }}>
          <Capsules />
        </section>


        {/* As Seen in & Our clients section */}


        {/* Violet 3 boxes section */}
        {/* <TestimonialsSection /> */}

        {/* Magic Bento Box Section */}
        {/* <section style={{
          background: 'transparent',
          zIndex: 21,
          position: 'relative',
          paddingTop: '80px',
          paddingBottom: '80px',
          width: '130vw',
          height: '130vh',
          marginLeft: 'calc(50% - 50vw)',
          marginRight: 'calc(50% - 50vw)',
          isolation: 'isolate',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
            <DarkVeil
              resolutionScale={1}
              noiseIntensity={0.02}
              scanlineIntensity={0.06}
              scanlineFrequency={6}
              warpAmount={0.03}
            />
          </div>
          <div className="w-full max-w-6xl mx-auto px-4 relative z-10">
            <MagicBento
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              disableAnimations={false}
              enableTilt={false}
              enableMagnetism={false}
              enableHoverLift={false}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="132, 0, 255"
            />
          </div>
        </section> */}

        <section style={{
          width: "100vw",
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
          padding: 0,
          border: "none",
          position: "relative",
          zIndex: 30
        }}>
          <svg style={{ display: "none" }}>
            <filter id="wavy-distort">
              <feTurbulence id="turb" baseFrequency="0.02 0.03" numOctaves="2" seed="2" type="fractalNoise" result="turb" />
              <feDisplacementMap in2="turb" in="SourceGraphic" scale="18" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </svg>
          <FloatingGallery />
        </section>

        {/* Footer Section */}
      </div>
      <Footer />
    </div>
  );
}