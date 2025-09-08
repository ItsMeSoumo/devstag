"use client";

import React from "react";
import Navbar from '@/components/Navbar';
import { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import LightRays from '@/components/ui/lightrays';

 

// Premium-style Card (aligned with About page aesthetics)
const ModernCard = ({ children, className = "", delay = 0 }) => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, delay }}
      className={`relative overflow-hidden rounded-3xl backdrop-blur-xl border border-white/10 transition-transform duration-300 ${className}`}
      style={{
        background: "linear-gradient(135deg, rgba(147,51,234,0.08) 0%, rgba(79,70,229,0.04) 50%, rgba(219,39,119,0.08) 100%)",
        boxShadow: "0 20px 40px -12px rgba(147,51,234,0.3), inset 0 1px 0 rgba(255,255,255,0.1)"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

 

 

export default function Services() {
  const shouldReduceMotion = useReducedMotion();

  // Memoized tracks (replacing pricing)
  const workTracks = useMemo(() => [
    {
      title: 'Discovery & Strategy',
      subtitle: 'Ideation · Requirements · Tech audit',
      features: [
        'Ideation workshops',
        'Requirement mapping',
        'Technology audits',
        'Creative roadmapping',
      ],
    },
    {
      title: 'Design & Build',
      subtitle: '3D · Animation · AR/VR · Pixel Streaming · VFX',
      features: [
        '3D modeling & animation',
        'AR/VR environments',
        'Pixel streaming applications',
        'VFX production',
      ],
    },
    {
      title: 'Scale & Optimize',
      subtitle: 'Performance · Multi‑platform · Support',
      features: [
        'Performance tuning',
        'Feature expansion',
        'Multi‑platform deployment',
        'Continuous support',
      ],
    },
  ], []);
  

  

  

  return (
    <div className="services-inter">
      <style jsx global>{`
        /* CSS Custom Properties for 4 Responsive Breakpoints */
        .services-inter {
          /* XL: ≥1441px (default) */
          --section-py: 10vh;
          --section-px: 2vw;
          --container-max: 87vw;
          --container-narrow: 75vw;
          --container-tight: 65vw;
          
          /* Typography scale */
          --text-hero: 5.2vw;
          --text-display: 3.6vw;
          --text-heading: 2.8vw;
          --text-subhead: 2.2vw;
          --text-body-lg: 1.8vw;
          --text-body: 1.4vw;
          --text-small: 1.2vw;
          --text-xs: 1vw;
          
          /* Spacing system */
          --space-xs: 0.8vw;
          --space-sm: 1.2vw;
          --space-md: 2vw;
          --space-lg: 3.2vw;
          --space-xl: 5vw;
          --space-xxl: 8vw;
          
          /* Component sizing */
          --card-pad: 3.2vw;
          --card-pad-sm: 2.4vw;
          --card-gap: 2.8vw;
          --button-pad-y: 1.6vh;
          --button-pad-x: 3.2vw;
          --button-text: 1.6vw;
          --icon-size: 2.4vw;
          --dot-size: 1vw;
          --radius: 1.8vw;
          --radius-sm: 1.2vw;
          --radius-lg: 2.4vw;
          --image-height: 24vh;
          --badge-pad-y: 0.8vh;
          --badge-pad-x: 1.6vw;
          --badge-text: 1.2vw;
        }
        
        /* LG: ≤1440px */
        @media (max-width: 90em) {
          .services-inter {
            --section-py: 8vh;
            --text-hero: 6vw;
            --text-display: 4.2vw;
            --text-heading: 3.2vw;
            --text-subhead: 2.6vw;
            --text-body-lg: 2.2vw;
            --text-body: 1.8vw;
            --text-small: 1.4vw;
            --text-xs: 1.2vw;
            --card-pad: 3.6vw;
            --card-pad-sm: 2.8vw;
            --button-pad-x: 3.6vw;
            --button-text: 1.8vw;
            --icon-size: 2.8vw;
            --badge-text: 1.4vw;
          }
        }
        
        /* MD: ≤1024px */
        @media (max-width: 64em) {
          .services-inter {
            --section-py: 6vh;
            --section-px: 4vw;
            --container-max: 92vw;
            --container-narrow: 88vw;
            --container-tight: 84vw;
            --text-hero: 8vw;
            --text-display: 6vw;
            --text-heading: 4.8vw;
            --text-subhead: 3.6vw;
            --text-body-lg: 2.8vw;
            --text-body: 2.4vw;
            --text-small: 2vw;
            --text-xs: 1.8vw;
            --card-pad: 5vw;
            --card-pad-sm: 4vw;
            --card-gap: 4vw;
            --button-pad-y: 2vh;
            --button-pad-x: 5vw;
            --button-text: 2.4vw;
            --icon-size: 4vw;
            --dot-size: 1.5vw;
            --radius: 2.4vw;
            --radius-sm: 1.8vw;
            --radius-lg: 3.2vw;
            --image-height: 28vh;
            --badge-pad-x: 2.4vw;
            --badge-text: 1.8vw;
          }
        }
        
        /* SM: ≤640px */
        @media (max-width: 40em) {
          .services-inter {
            --section-py: 5vh;
            --section-px: 5vw;
            --container-max: 94vw;
            --container-narrow: 92vw;
            --container-tight: 90vw;
            --text-hero: 12vw;
            --text-display: 9vw;
            --text-heading: 7vw;
            --text-subhead: 5.5vw;
            --text-body-lg: 4.2vw;
            --text-body: 3.6vw;
            --text-small: 3.2vw;
            --text-xs: 2.8vw;
            --card-pad: 6vw;
            --card-pad-sm: 5vw;
            --card-gap: 5vw;
            --button-pad-y: 2.5vh;
            --button-pad-x: 6vw;
            --button-text: 3.6vw;
            --icon-size: 5vw;
            --dot-size: 2vw;
            --radius: 3.2vw;
            --radius-sm: 2.4vw;
            --radius-lg: 4vw;
            --image-height: 32vh;
            --badge-pad-x: 3.2vw;
            --badge-text: 2.8vw;
          }
        }
        
        /* Layout utilities */
        .section-spacing {
          padding: var(--section-py) var(--section-px);
        }
        .container-max {
          max-width: var(--container-max);
          margin: 0 auto;
        }
        .container-narrow {
          max-width: var(--container-narrow);
          margin: 0 auto;
        }
        .container-tight {
          max-width: var(--container-tight);
          margin: 0 auto;
        }
        
        /* Typography classes */
        .services-inter .font-montserrat,
        .services-inter .font-outfit {
          font-family: var(--font-inter, Inter), ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }
        .text-display-xl {
          font-size: var(--text-hero);
          line-height: 1.1;
          letter-spacing: -0.02em;
          font-weight: 500;
        }
        .text-display-lg {
          font-size: var(--text-display);
          line-height: 1.2;
          letter-spacing: -0.01em;
          font-weight: 300;
        }
        .text-heading {
          font-size: var(--text-heading);
          line-height: 1.3;
          letter-spacing: -0.01em;
          font-weight: 500;
        }
        .text-subhead {
          font-size: var(--text-subhead);
          line-height: 1.4;
          font-weight: 400;
        }
        .text-body-lg {
          font-size: var(--text-body-lg);
          line-height: 1.6;
          font-weight: 300;
        }
        .text-body {
          font-size: var(--text-body);
          line-height: 1.7;
          font-weight: 300;
        }
        .text-small {
          font-size: var(--text-small);
          line-height: 1.5;
          font-weight: 300;
        }
        .text-xs {
          font-size: var(--text-xs);
          line-height: 1.4;
          font-weight: 400;
        }
        
        /* Gradient text */
        .gradient-primary {
          background: linear-gradient(135deg, #a855f7 0%, #3b82f6 50%, #ec4899 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientFlow 8s ease-in-out infinite;
        }
        .gradient-accent {
          background: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @keyframes gradientFlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        /* Grid layouts */
        .grid-2-col { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: var(--card-gap); 
        }
        @media (min-width: 48em) { 
          .grid-2-col { grid-template-columns: repeat(2, 1fr); } 
        }
        .grid-2x2 { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: var(--card-gap); 
        }
        @media (min-width: 48em) { 
          .grid-2x2 { grid-template-columns: repeat(2, 1fr); } 
        }
        .grid-3-col {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--card-gap);
        }
        @media (min-width: 48em) {
          .grid-3-col { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 64em) {
          .grid-3-col { grid-template-columns: repeat(3, 1fr); }
        }
        
        /* Card components */
        .card-pad { padding: var(--card-pad); }
        .card-pad-sm { padding: var(--card-pad-sm); }
        .card-image-height { height: var(--image-height); }
        .card-radius { border-radius: var(--radius); }
        .card-radius-lg { border-radius: var(--radius-lg); }
        
        /* Button components */
        .btn-fluid {
          padding: var(--button-pad-y) var(--button-pad-x);
          font-size: var(--button-text);
          border-radius: var(--radius);
        }
        
        /* Badge/chip components */
        .badge-fluid {
          padding: var(--badge-pad-y) var(--badge-pad-x);
          font-size: var(--badge-text);
          border-radius: 100vw;
        }
        
        /* Icon utilities */
        .icon-fluid { width: var(--icon-size); height: var(--icon-size); }
        .icon-sm { width: calc(var(--icon-size) * 0.8); height: calc(var(--icon-size) * 0.8); }
        .dot-fluid { width: var(--dot-size); height: var(--dot-size); border-radius: 100vw; }
        
        /* Spacing utilities */
        .space-y-fluid > * + * { margin-top: var(--space-md); }
        .space-y-sm > * + * { margin-top: var(--space-sm); }
        .space-y-lg > * + * { margin-top: var(--space-lg); }
        .gap-fluid { gap: var(--space-md); }
        .gap-sm { gap: var(--space-sm); }
        .gap-lg { gap: var(--space-lg); }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0.01 : 0.6 }}
        className="relative min-h-screen bg-black text-white overflow-hidden"
      >
        <Navbar />
        {/* Minimal premium background */}
        <div className="fixed inset-0 -z-10" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />
          <div className="absolute top-[-10%] left-[-10%] w-[35vw] h-[35vw] bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[-15%] right-[-10%] w-[40vw] h-[40vw] bg-fuchsia-500/10 rounded-full blur-3xl" />
          {!shouldReduceMotion && (
            <>
              <motion.span
                className="absolute w-2.5 h-2.5 rounded-full bg-gradient-to-br from-fuchsia-500/60 to-purple-500/60 blur-[1px]"
                style={{ left: '12%', top: '28%' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5, y: [0, -10, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.span
                className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-violet-400/60 to-indigo-500/60 blur-[1px]"
                style={{ left: '80%', top: '32%' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5, y: [0, -8, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              />
              <motion.span
                className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-pink-500/50 to-purple-500/50 blur-[2px]"
                style={{ left: '25%', top: '70%' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4, y: [0, -12, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
              />
              <motion.span
                className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-cyan-400/60 to-indigo-400/60 blur-[1px]"
                style={{ left: '65%', top: '75%' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.45, y: [0, -9, 0] }}
                transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              />
            </>
          )}
        </div>
        {/* Hero */}
        <section className="section-spacing relative overflow-hidden" aria-labelledby="services-hero-heading">
          <div className="absolute inset-0 pointer-events-none z-0">
            <LightRays
              raysOrigin="top-center"
              raysColor="#8C2EB8"
              raysSpeed={shouldReduceMotion ? 0 : 1.2}
              lightSpread={0.8}
              rayLength={1.1}
              followMouse={shouldReduceMotion ? false : true}
              mouseInfluence={shouldReduceMotion ? 0 : 0.1}
              noiseAmount={shouldReduceMotion ? 0 : 0.1}
              distortion={shouldReduceMotion ? 0 : 0.05}
            />
          </div>
          <div className="container-max relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.8 }}
              className="badge-fluid inline-flex items-center gap-sm text-purple-200/90 font-medium mb-8 bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              Services · Studio Devstag
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 1, delay: shouldReduceMotion ? 0 : 0.2 }}
              className="text-display-xl gradient-primary mb-6"
              id="services-hero-heading"
            >
              Build with clarity.
              <span className="hidden md:inline"> Collaborate with confidence.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.8, delay: shouldReduceMotion ? 0 : 0.4 }}
              className="text-body-lg text-white/80 mb-0 container-narrow"
            >
              Bringing precision, beauty, and innovation to engineering, design, and immersive technology—delivered with performance, inclusivity, and integrity.
            </motion.p>
          </div>
        </section>

        {/* What We Do */}
        <section className="section-spacing" aria-labelledby="capabilities-heading">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10 text-center space-y-sm"
            >
              <h2 className="text-display-lg gradient-primary" id="capabilities-heading">Our Services</h2>
              <p className="text-body text-white/70 container-tight mx-auto">
                Innovative, immersive, and impactful: We craft digital experiences that connect, inspire, and perform.
              </p>
            </motion.div>
            <div className="grid-2x2">
              {[
                { title: 'Pixel Streaming Applications', desc: 'High-end 3D experiences, streamed instantly to any device.', gradient: 'from-purple-500 to-fuchsia-500', image: '/images/floating_1.jpg', alt: 'Pixel streaming app preview' },
                { title: 'Augmented Reality', desc: 'Bring products and stories to life in the real world.', gradient: 'from-indigo-500 to-purple-500', image: '/images/floating_2.jpg', alt: 'Augmented reality experience' },
                { title: 'Virtual Reality', desc: 'Immersive training, simulations, and architectural experiences that inspire, engage, and transform industries.', gradient: 'from-violet-500 to-fuchsia-500', image: '/images/floating_3.jpg', alt: 'Virtual reality training and simulation' },
                { title: 'Architectural Visualization (ArchViz)', desc: 'Turn blueprints into photoreal, interactive 3D experiences.', gradient: 'from-blue-500 to-purple-600', image: '/images/floating_1.jpg', alt: 'Architectural visualization' },
                { title: 'Animation', desc: 'Dynamic visuals that move audiences and simplify storytelling.', gradient: 'from-cyan-500 to-blue-600', image: '/images/floating_2.jpg', alt: 'Animation storyboard' },
                { title: 'Visual Effects (VFX)', desc: 'Cinematic-quality effects that elevate film and media projects.', gradient: 'from-pink-500 to-rose-500', image: '/images/floating_3.jpg', alt: 'Cinematic visual effects' },
              ].map((s, idx) => (
                <ModernCard key={s.title} className="group p-0 hover:-translate-y-1" delay={0.05 * idx}>
                  {/* Media header */}
                  <div className="relative card-image-height w-full overflow-hidden border-b border-white/10">
                    <img
                      src={s.image}
                      alt={s.alt}
                      className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-[1.05]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  </div>
                  {/* Content */}
                  <div className="card-pad space-y-sm">
                    <div className="flex items-start gap-sm mb-4">
                      <span className={`mt-1 inline-block dot-fluid bg-gradient-to-br ${s.gradient}`} aria-hidden="true" />
                      <h3 className="text-heading text-white/95 font-medium">{s.title}</h3>
                    </div>
                    <p className="text-body text-white/75">{s.desc}</p>
                    {s.tags?.length ? (
                      <div className="flex flex-wrap gap-sm mt-4">
                        {s.tags.map((t) => (
                          <span key={t} className="text-xs badge-fluid bg-white/5 border border-white/10 text-white/70">{t}</span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </ModernCard>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="section-spacing" aria-labelledby="benefits-heading">
          <div className="container-max">
            <div className="text-center mb-12 space-y-fluid">
              <div className="badge-fluid inline-flex items-center bg-purple-500/10 border border-purple-500/20 text-purple-400 font-medium mb-6">
                <span className="dot-fluid bg-purple-400 mr-2 animate-pulse" aria-hidden="true"></span>
                BENEFITS
              </div>
              <h2 className="text-display-lg gradient-primary" id="benefits-heading">Why Choose Studio Devstag?</h2>
              <p className="text-white/70 container-narrow text-body">Immersive by design, performance obsessed, and cinematic in execution—built with accessibility and scale at the core.</p>
            </div>
  
            <div className="grid-3-col mb-12">
              {(() => {
                const AnimatedCard = require('@/components/AnimatedCard').default;
                return (
                  <>
                    <AnimatedCard
                      glowColor="rgba(168, 85, 247, 0.4)"
                      depth={15}
                      hoverScale={1.03}
                      className="md:col-span-2 h-full"
                    >
                      <div className="card-pad">
                        <div className="grid-2-col">
                          <div>
                            <div className="flex items-start gap-sm mb-3 justify-center">
                              <span className="mt-1 inline-block dot-fluid bg-gradient-to-br from-purple-500 to-fuchsia-500" aria-hidden="true" />
                              <h3 className="text-heading font-medium text-center break-words">Why Choose Studio Devstag</h3>
                            </div>
                            <ul className="space-y-sm text-white/75 text-body">
                              <li className="flex items-start gap-sm">
                                <svg className="icon-fluid text-green-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                                <span>Immersive by Design: From AR to VR, we craft experiences that inspire and transform industries.</span>
                              </li>
                              <li className="flex items-start gap-sm">
                                <svg className="icon-fluid text-green-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                                <span>Performance Obsessed: Seamless, real-time 3D applications built for scale and accessibility.</span>
                              </li>
                              <li className="flex items-start gap-sm">
                                <svg className="icon-fluid text-green-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                                <span>Cinematic Storytelling: Animation and VFX that elevate ideas with impact, emotion, and polish.</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <div className="flex items-start gap-sm mb-3 justify-center">
                              <span className="mt-1 inline-block dot-fluid bg-gradient-to-br from-indigo-500 to-blue-500" aria-hidden="true" />
                              <h3 className="text-heading font-medium text-center break-words">Built for Trust</h3>
                            </div>
                            <ul className="space-y-sm text-white/75 text-body">
                              <li className="flex items-start gap-sm">
                                <svg className="icon-fluid text-green-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                                <span>Security, reliability, and accessibility—built‑in, always.</span>
                              </li>
                              <li className="flex items-start gap-sm">
                                <svg className="icon-fluid text-green-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                                <span>Clear documentation, handoffs, and long-term maintainability.</span>
                              </li>
                              <li className="flex items-start gap-sm">
                                <svg className="icon-fluid text-green-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                                <span>Scalable design-engineering systems ready for enterprise.</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </AnimatedCard>

                    <AnimatedCard
                      glowColor="rgba(59, 130, 246, 0.4)"
                      depth={15}
                      hoverScale={1.03}
                      className="h-full"
                    >
                      <div className="card-pad">
                        <div className="grid grid-cols-2 gap-sm">
                          <div className="card-pad-sm card-radius bg-white/5 border border-white/10 text-center overflow-visible min-h-[96px] flex flex-col items-center justify-center">
                            <div className="text-subhead font-bold gradient-primary leading-none">99.98%</div>
                            <div className="text-xs text-white/60 mt-1">Uptime</div>
                          </div>
                          <div className="card-pad-sm card-radius bg-white/5 border border-white/10 text-center overflow-visible min-h-[96px] flex flex-col items-center justify-center">
                            <div className="text-subhead font-bold gradient-primary leading-none">A+</div>
                            <div className="text-xs text-white/60 mt-1">Core Web Vitals</div>
                          </div>
                          <div className="card-pad-sm card-radius bg-white/5 border border-white/10 text-center overflow-visible min-h-[96px] flex flex-col items-center justify-center">
                            <div className="text-subhead font-bold gradient-primary leading-none">2×</div>
                            <div className="text-xs text-white/60 mt-1">Ship Faster</div>
                          </div>
                          <div className="card-pad-sm card-radius bg-white/5 border border-white/10 text-center overflow-visible min-h-[96px] flex flex-col items-center justify-center">
                            <div className="text-subhead font-bold gradient-primary leading-none">AA+</div>
                            <div className="text-xs text-white/60 mt-1">Accessibility</div>
                          </div>
                        </div>
                      </div>
                    </AnimatedCard>
                  </>
                );
              })()}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-fluid">
              {(() => {
                const AnimatedCard = require('@/components/AnimatedCard').default;
                const smallGlowMap = [
                  'rgba(168, 85, 247, 0.35)',
                  'rgba(59, 130, 246, 0.35)',
                  'rgba(99, 102, 241, 0.35)',
                  'rgba(139, 92, 246, 0.35)',
                  'rgba(236, 72, 153, 0.35)',
                ];
                return [
                  { title: 'Immersive Innovation', desc: 'From AR to VR, we deliver next‑gen experiences tailored for business, entertainment, and education.', color: 'from-purple-500 to-fuchsia-500' },
                  { title: 'Pixel‑Perfect Performance', desc: 'Real-time, high‑fidelity 3D applications optimized for speed, scale, and seamless user experience.', color: 'from-blue-500 to-purple-500' },
                  { title: 'Cinematic Storytelling', desc: 'Animation and VFX that add impact, emotion, and polish to your brand and projects.', color: 'from-indigo-500 to-cyan-500' },
                  { title: 'Industry‑Focused Solutions', desc: 'Specialized in industrial training, simulations, and ArchViz that solve real‑world challenges.', color: 'from-violet-500 to-purple-500' },
                  { title: 'Scalable & Accessible', desc: 'Built to grow with your vision, while ensuring inclusivity and accessibility at the core.', color: 'from-fuchsia-500 to-pink-500' },
                ].map((b, i) => (
                  <AnimatedCard
                    glowColor={smallGlowMap[0]}
                    depth={10}
                    hoverScale={1.02}
                    className="h-full"
                  >
                    <div className="card-pad-sm text-center overflow-visible min-h-[120px] flex flex-col justify-start">
                      <div className="flex flex-col items-center gap-sm mb-2">
                        <span className={`inline-block dot-fluid bg-gradient-to-br ${b.color}`} aria-hidden="true" />
                        <h4 className="text-body-lg font-medium leading-snug break-words whitespace-normal">{b.title}</h4>
                      </div>
                      <p className="text-white/70 text-small leading-relaxed text-center">{b.desc}</p>
                    </div>
                  </AnimatedCard>
                ));
              })()}
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="section-spacing relative z-10" aria-labelledby="process-heading">
          <div className="container-max">
            <div className="text-center mb-16 space-y-fluid">
              <div className="badge-fluid inline-flex items-center bg-purple-500/10 border border-purple-500/20 text-purple-400 font-medium mb-8">
                <div className="dot-fluid bg-purple-400 mr-2 animate-pulse"></div>
                ENGAGEMENT TRACKS
              </div>
              <h2 className="text-display-lg gradient-primary mb-8" id="process-heading">
                Work With Us Your Way
              </h2>
              <p className="text-body-lg text-gray-300 container-narrow font-light leading-relaxed">
                Choose the approach that fits your goals—from rapid discovery to scalable delivery.
              </p>
            </div>
            <div className="grid-3-col">
              {(() => {
                const AnimatedCard = require('@/components/AnimatedCard').default;
                const glowMap = [
                  'rgba(168, 85, 247, 0.4)',   // purple
                  'rgba(59, 130, 246, 0.4)',   // blue
                  'rgba(236, 72, 153, 0.4)',   // pink
                ];
                return workTracks.map((t, idx) => (
                  <AnimatedCard
                    key={t.title}
                    glowColor={glowMap[idx % glowMap.length]}
                    depth={15}
                    hoverScale={1.03}
                    className="h-full"
                  >
                    <div className="card-pad text-left">
                      <div className="mb-6">
                        <div className="flex items-start gap-sm">
                          <span className="mt-1 inline-block dot-fluid bg-gradient-to-br from-purple-500 to-fuchsia-500" aria-hidden="true" />
                          <h3 className="text-heading font-medium">{t.title}</h3>
                        </div>
                        <p className="text-white/70 mt-2 text-body">{t.subtitle}</p>
                      </div>
                      <ul className="space-y-sm mb-8">
                        {t.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-sm">
                            <svg className="icon-fluid text-green-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                            <span className="text-gray-200 text-body">{f}</span>
                          </li>
                        ))}
                      </ul>
                      <button className="btn-fluid w-full font-semibold transition-all duration-500 bg-gray-800/80 text-gray-100 hover:bg-gray-700/80 border border-gray-600/50 hover:border-white/30">
                        Explore Track
                      </button>
                    </div>
                  </AnimatedCard>
                ));
              })()}
            </div>
          </div>
        </section>

          {/* Featured Technologies Section with AnimatedCard */}
          <section className="section-spacing relative z-10">
            <div className="container-max">
              <div className="text-center mb-16 space-y-fluid">
                <h2 className="text-display-lg font-bold mb-6 gradient-primary">
                  Cutting-Edge Technology
                </h2>
                <p className="text-gray-300 text-body-lg container-narrow font-light leading-relaxed">
                  Innovation powered by real-time engines, web-native interactivity, and creative freedom crafted for true immersion.
                </p>
              </div>
              
              <div className="grid-3-col">
              {(() => {
                const AnimatedCard = require('@/components/AnimatedCard').default;
                return [
                  {
                    title: "Real-Time 3D Engines",
                    description: "Photoreal environments, lifelike physics, and interactive worlds built with next-gen rendering power.",
                    icon: (
                      <svg className="icon-fluid text-purple-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2l7 4v8l-7 4-7-4V6l7-4zm0 0v16" />
                      </svg>
                    ),
                    glowColor: "rgba(168, 85, 247, 0.4)"
                  },
                  {
                    title: "Web & XR Technologies",
                    description: "Browser-ready, device-agnostic, and future-proof — immersive apps that work anywhere, instantly.",
                    icon: (
                      <svg className="icon-fluid text-blue-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h18M3 12h18M3 19h18" />
                      </svg>
                    ),
                    glowColor: "rgba(59, 130, 246, 0.4)"
                  },
                  {
                    title: "Creative & Production Tools",
                    description: "From concept to final frame, our open-source pipeline ensures flexibility, speed, and stunning results.",
                    icon: (
                      <svg className="icon-fluid text-indigo-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 17l-5-5 1.5-1.5L11 14l6.5-6.5L19 9l-8 8z" />
                      </svg>
                    ),
                    glowColor: "rgba(99, 102, 241, 0.4)"
                  }
                ].map((item, index) => (
                  <AnimatedCard 
                    key={index} 
                    glowColor={item.glowColor} 
                    depth={15} 
                    hoverScale={1.03}
                    className="h-full"
                  >
                    <div className="card-pad text-center h-full flex flex-col justify-between">
                      <div>
                        <div className="flex justify-center">{item.icon}</div>
                        <h3 className="text-heading font-bold mb-4">{item.title}</h3>
                        <p className="text-gray-300 text-body font-light leading-relaxed mb-6">{item.description}</p>
                      </div>
                      <button className="btn-fluid mt-auto bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300 border border-white/5 hover:border-white/20">
                        Learn More
                      </button>
                    </div>
                  </AnimatedCard>
                ));
              })()}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="section-spacing" aria-labelledby="cta-heading">
            <div className="container-max container-tight">
              <ModernCard delay={0.9} className="relative overflow-hidden text-center min-h-[420px] md:min-h-[520px]">
                {/* Ambient glows */}
                {!shouldReduceMotion && (
                  <>
                    <motion.span
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-purple-500/25 via-fuchsia-400/15 to-blue-500/25 blur-3xl"
                      initial={{ opacity: 0.6, y: 0 }}
                      animate={{ y: [0, 12, 0] }}
                      transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.span
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-violet-400/10 to-blue-500/20 blur-3xl"
                      initial={{ opacity: 0.5, y: 0 }}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </>
                )}

                <div className="relative z-10 card-pad">
                  {/* Badge */}
                  <div className="badge-fluid mx-auto mb-5 inline-flex items-center gap-2 border border-white/15 bg-white/5 text-white/70">
                    <span className="dot-fluid bg-gradient-to-r from-fuchsia-400 to-blue-400" aria-hidden="true" />
                    <span className="tracking-wide">NEXT STEP</span>
                  </div>

                  <h2 className="text-display-lg gradient-primary mb-4" id="cta-heading">
                    Let’s Build Together
                  </h2>
                  <p id="cta-desc" className="text-gray-300 text-body-lg container-narrow font-light leading-relaxed">
                    Ready to create experiences that inspire, engage, and transform? From cinematic VFX to industrial VR training,
                    from interactive ArchViz to pixel‑streamed worlds, let’s bring your vision to life.
                  </p>

                  {/* Quick benefits */}
                  <ul className="mx-auto mt-6 mb-8 grid container-narrow gap-sm text-left sm:grid-cols-3">
                    {[
                      'Strategy call within 24 hours',
                      'Tailored roadmap in 48 hours',
                      'Scalable, enterprise-grade delivery',
                    ].map((point) => (
                      <li key={point} className="flex items-center gap-2 text-white/80">
                        <svg className="icon-sm text-emerald-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-small">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="btn-fluid group bg-gradient-to-r from-white to-gray-100 text-gray-900 font-semibold text-body-lg hover:shadow-xl hover:shadow-white/30 hover:scale-[1.02] transition-all duration-500">
                      <span className="inline-flex items-center gap-2">
                        Get Started Now
                        <svg className="icon-sm text-gray-900 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </span>
                    </button>
                    <button className="btn-fluid group border-2 border-white/20 bg-white/5 text-gray-100 font-semibold text-body-lg hover:bg-white/10 hover:border-white/40 transition-all duration-500">
                      <span className="inline-flex items-center gap-2">
                        Contact Sales
                        <svg className="icon-sm text-white/90 transition-transform duration-300 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M22 6l-9.5 7.5a2 2 0 01-2.5 0L0 6" />
                        </svg>
                      </span>
                    </button>
                  </div>

                  <p className="mt-6 text-xs text-white/60">No pushy sales. Response within 24 hours.</p>
                </div>
              </ModernCard>
            </div>
          </section>
      </motion.div>
    </div>
  );
}