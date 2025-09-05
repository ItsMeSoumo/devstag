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
      subtitle: 'Ideation workshops, requirement mapping, technology audits, and creative roadmapping.',
      features: [
        'Ideation workshops',
        'Requirement mapping',
        'Technology audits',
        'Creative roadmapping',
      ],
    },
    {
      title: 'Design & Build',
      subtitle: '3D modeling, animation, AR/VR environments, pixel streaming apps, and VFX production.',
      features: [
        '3D modeling & animation',
        'AR/VR environments',
        'Pixel streaming apps',
        'VFX production',
      ],
    },
    {
      title: 'Scale & Optimize',
      subtitle: 'Performance tuning, feature expansion, multi‑platform deployment, and continuous support.',
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
        .section-spacing {
          padding: clamp(4rem, 10vw, 8rem) clamp(1rem, 4vw, 2rem);
        }
        .container-max {
          max-width: clamp(300px, 92vw, 1400px);
          margin: 0 auto;
        }
        .services-inter .font-montserrat,
        .services-inter .font-outfit {
          font-family: var(--font-inter, Inter), ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }
        .text-display-xl {
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: 1.1;
          letter-spacing: -0.02em;
          font-weight: 500;
        }
        .text-display-lg {
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.2;
          letter-spacing: -0.01em;
          font-weight: 300;
        }
        .text-body-lg {
          font-size: clamp(1.125rem, 2vw, 1.375rem);
          line-height: 1.6;
          font-weight: 300;
        }
        .text-body {
          font-size: clamp(1rem, 1.5vw, 1.125rem);
          line-height: 1.7;
          font-weight: 300;
        }
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
        .grid-2-col { display: grid; grid-template-columns: 1fr; gap: clamp(3rem, 6vw, 5rem); }
        @media (min-width: 768px) { .grid-2-col { grid-template-columns: repeat(2, 1fr); } }
        .grid-2x2 { display: grid; grid-template-columns: 1fr; gap: clamp(2rem, 4vw, 3rem); }
        @media (min-width: 768px) { .grid-2x2 { grid-template-columns: repeat(2, 1fr); } }
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
              raysSpeed={1.2}
              lightSpread={0.8}
              rayLength={1.1}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0.1}
              distortion={0.05}
            />
          </div>
          <div className="container-max relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-purple-200/90 text-sm font-medium mb-8 bg-white/5 border border-white/10 backdrop-blur-sm"
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
            </motion.h1>
            {!shouldReduceMotion && (
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="text-display-lg gradient-accent mb-4"
              >
                Collaborate with confidence.
              </motion.h2>
            )}
            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.8, delay: shouldReduceMotion ? 0 : 0.4 }}
              className="text-body-lg text-white/80 mb-0 max-w-3xl mx-auto"
            >
              Bringing precision, beauty, and innovation to engineering, design, and immersive technology—delivered with performance, inclusivity, and integrity.
            </motion.p>
          </div>
        </section>

        {/* Our Services */}
        <section className="section-spacing" aria-labelledby="capabilities-heading">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10 text-center"
            >
              <h2 className="text-display-lg gradient-primary" id="capabilities-heading">Our Services</h2>
              <p className="text-body text-white/70 max-w-3xl mx-auto mt-3">
                Innovative, immersive, and impactful: We craft digital experiences that connect, inspire, and perform.
              </p>
            </motion.div>
            <div className="grid-2x2">
              {[
                {
                  title: 'Pixel Streaming Applications',
                  desc: 'High-end 3D experiences, streamed instantly to any device.',
                  gradient: 'from-purple-500 to-fuchsia-500',
                  image: '/images/floating_1.jpg',
                  alt: 'Pixel streaming 3D experience',
                  tags: ['Pixel Streaming', 'Low Latency', 'Cloud']
                },
                {
                  title: 'Augmented Reality',
                  desc: 'Bring products and stories to life in the real world.',
                  gradient: 'from-indigo-500 to-purple-500',
                  image: '/images/floating_2.jpg',
                  alt: 'Augmented Reality showcase',
                  tags: ['AR', 'WebAR', 'Mobile']
                },
                {
                  title: 'Virtual Reality',
                  desc: 'Immersive training, simulations, and architectural experiences that inspire, engage, and transform industries.',
                  gradient: 'from-violet-500 to-fuchsia-500',
                  image: '/images/floating_3.jpg',
                  alt: 'Virtual Reality experience',
                  tags: ['VR', 'Simulations', 'Training']
                },
                {
                  title: 'Architectural Visualization (ArchViz)',
                  desc: 'Turn blueprints into photoreal, interactive 3D experiences.',
                  gradient: 'from-blue-500 to-purple-600',
                  image: '/images/floating_4.jpg',
                  alt: 'Architectural Visualization',
                  tags: ['ArchViz', 'Photoreal', 'Interactive']
                },
                {
                  title: 'Animation',
                  desc: 'Dynamic visuals that move audiences and simplify storytelling.',
                  gradient: 'from-pink-500 to-purple-500',
                  image: '/images/floating_2.jpg',
                  alt: 'Animation production',
                  tags: ['Animation', 'Motion', '3D']
                },
                {
                  title: 'Visual Effects (VFX)',
                  desc: 'Cinematic-quality effects that elevate film and media projects.',
                  gradient: 'from-cyan-500 to-indigo-500',
                  image: '/images/floating_1.jpg',
                  alt: 'Visual effects production',
                  tags: ['VFX', 'Film', 'Cinematic']
                },
              ].map((s, idx) => (
                <ModernCard key={s.title} className="group p-0 hover:-translate-y-1" delay={0.05 * idx}>
                  {/* Media header */}
                  <div className="relative h-40 md:h-44 w-full overflow-hidden border-b border-white/10">
                    <img
                      src={s.image}
                      alt={s.alt}
                      className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-[1.05]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  </div>
                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-start gap-3 mb-3">
                      <span className={`mt-1 inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-br ${s.gradient}`} aria-hidden="true" />
                      <h3 className="text-white/95 font-medium">{s.title}</h3>
                    </div>
                    <p className="text-body text-white/75">{s.desc}</p>
                    {s.tags?.length ? (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {s.tags.map((t) => (
                          <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">{t}</span>
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
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
                BENEFITS
              </div>
              <h2 className="text-display-lg gradient-primary" id="benefits-heading">Why Choose Studio Devstag?</h2>
              <p className="text-white/70 max-w-3xl mx-auto text-body">Immersive by design, performance obsessed, and cinematic storytelling at the core.</p>
            </div>
  
            <div className="grid md:grid-cols-3 gap-8 mb-12">
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
                      <div className="p-8">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <div className="flex items-start gap-3 mb-3">
                              <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-500" aria-hidden="true" />
                              <h3 className="text-2xl font-medium">Immersive by Design</h3>
                            </div>
                            <ul className="space-y-3 text-white/75">
                              <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                                <span>From AR to VR, we craft experiences that inspire and transform industries.</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <div className="flex items-start gap-3 mb-3">
                              <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500" aria-hidden="true" />
                              <h3 className="text-2xl font-medium">Performance Obsessed</h3>
                            </div>
                            <ul className="space-y-3 text-white/75">
                              <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                                <span>Seamless, real-time 3D applications built for scale and accessibility.</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                                <span>Cinematic Storytelling: Animation and VFX that elevate ideas with impact, emotion, and polish.</span>
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
                      <div className="p-8">
                        <div className="grid grid-cols-2 gap-6">
                          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                            <div className="text-2xl md:text-3xl font-bold gradient-primary">99.98%</div>
                            <div className="text-xs text-white/60 mt-1">Uptime</div>
                          </div>
                          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                            <div className="text-2xl md:text-3xl font-bold gradient-primary">A+</div>
                            <div className="text-xs text-white/60 mt-1">Core Web Vitals</div>
                          </div>
                          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                            <div className="text-2xl md:text-3xl font-bold gradient-primary">2×</div>
                            <div className="text-xs text-white/60 mt-1">Ship Faster</div>
                          </div>
                          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                            <div className="text-2xl md:text-3xl font-bold gradient-primary">AA+</div>
                            <div className="text-xs text-white/60 mt-1">Accessibility</div>
                          </div>
                        </div>
                      </div>
                    </AnimatedCard>
                  </>
                );
              })()}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
                  { title: 'Pixel‑Perfect Performance', desc: 'Real‑time, high‑fidelity 3D applications optimized for speed, scale, and seamless user experience.', color: 'from-blue-500 to-purple-500' },
                  { title: 'Cinematic Storytelling', desc: 'Animation and VFX that add impact, emotion, and polish to your brand and projects.', color: 'from-indigo-500 to-cyan-500' },
                  { title: 'Industry‑Focused Solutions', desc: 'Specialized in industrial training, simulations, and architectural visualization that solve real‑world challenges.', color: 'from-violet-500 to-purple-500' },
                  { title: 'Scalable & Accessible', desc: 'Built to grow with your vision, while ensuring inclusivity and accessibility at the core.', color: 'from-fuchsia-500 to-pink-500' },
                ].map((b, i) => (
                  <AnimatedCard
                    key={b.title}
                    glowColor={smallGlowMap[i % smallGlowMap.length]}
                    depth={12}
                    hoverScale={1.02}
                    className="h-full"
                  >
                    <div className="p-6">
                      <div className="flex items-start gap-3 mb-2">
                        <span className={`mt-1 inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-br ${b.color}`} aria-hidden="true" />
                        <h4 className="text-lg font-medium">{b.title}</h4>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed">{b.desc}</p>
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
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-8">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
                HOW WE WORK
              </div>
              <h2 className="text-display-lg gradient-primary mb-8" id="process-heading">
                Work With Us Your Way
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                Choose the approach that fits your goals—from rapid discovery to scalable delivery.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
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
                    <div className="p-8 text-left">
                      <div className="mb-6">
                        <div className="flex items-start gap-3">
                          <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-500" aria-hidden="true" />
                          <h3 className="text-2xl font-medium">{t.title}</h3>
                        </div>
                        <p className="text-white/70 mt-2">{t.subtitle}</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {t.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                            <span className="text-gray-200">{f}</span>
                          </li>
                        ))}
                      </ul>
                      <button className="w-full py-4 rounded-xl font-semibold text-lg transition-all duration-500 bg-gray-800/80 text-gray-100 hover:bg-gray-700/80 border border-gray-600/50 hover:border-white/30">
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
          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 glow-text luxury-font">
                Cutting-Edge Technologies
              </h2>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
                Innovation powered by real-time engines, web-native interactivity, and creative freedom crafted for true immersion.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {(() => {
                const AnimatedCard = require('@/components/AnimatedCard').default;
                return [
                  {
                    title: "Real-Time 3D Engines",
                    description: "Photoreal environments, lifelike physics, and interactive worlds built with next-gen rendering power.",
                    icon: (
                      <svg className="w-12 h-12 text-purple-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    ),
                    glowColor: "rgba(168, 85, 247, 0.4)"
                  },
                  {
                    title: "Web & XR Technologies",
                    description: "Browser-ready, device-agnostic, and future-proof — immersive apps that work anywhere, instantly.",
                    icon: (
                      <svg className="w-12 h-12 text-blue-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    ),
                    glowColor: "rgba(59, 130, 246, 0.4)"
                  },
                  {
                    title: "Creative & Production Tools",
                    description: "From concept to final frame, our open-source pipeline ensures flexibility, speed, and stunning results.",
                    icon: (
                      <svg className="w-12 h-12 text-indigo-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
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
                    <div className="text-center h-full flex flex-col justify-between">
                      <div>
                        <div className="flex justify-center">{item.icon}</div>
                        <h3 className="text-xl md:text-2xl font-bold mb-4 luxury-font">{item.title}</h3>
                        <p className="text-gray-300 font-light leading-relaxed mb-6">{item.description}</p>
                      </div>
                      <button className="mt-auto bg-white/10 hover:bg-white/20 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 border border-white/5 hover:border-white/20">
                        Learn More
                      </button>
                    </div>
                  </AnimatedCard>
                ));
              })()}
            </div>
          </div>

          {/* CTA Section */}
          <section className="section-spacing" aria-labelledby="cta-heading">
            <div className="container-max max-w-4xl">
              <ModernCard delay={0.9} className="relative overflow-hidden text-center">
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

                <div className="relative z-10 px-6 py-8 md:px-10 md:py-12">
                  {/* Badge */}
                  <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-blue-400" aria-hidden="true" />
                    <span className="tracking-wide">NEXT STEP</span>
                  </div>

                  <h2 className="text-display-lg gradient-primary mb-4" id="cta-heading">
                    Ready to create experiences that inspire, engage, and transform?
                  </h2>
                  <p id="cta-desc" className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
                    From cinematic VFX to industrial VR training, from interactive ArchViz to pixel‑streamed worlds, let’s bring your vision to life.
                  </p>

                  {/* Quick benefits */}
                  <ul className="mx-auto mt-6 mb-8 grid max-w-2xl gap-3 text-left sm:grid-cols-3">
                    {[
                      'Strategy call within 24 hours',
                      'Tailored roadmap in 48 hours',
                      'Scalable, enterprise-grade delivery',
                    ].map((point) => (
                      <li key={point} className="flex items-center gap-2 text-white/80">
                        <svg className="h-4 w-4 text-emerald-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="group bg-gradient-to-r from-white to-gray-100 text-gray-900 py-4 px-8 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-white/30 hover:scale-[1.02] transition-all duration-500">
                      <span className="inline-flex items-center gap-2">
                        Get Started Now
                        <svg className="h-4 w-4 text-gray-900 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </span>
                    </button>
                    <button className="group border-2 border-white/20 bg-white/5 text-gray-100 py-4 px-8 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-500">
                      <span className="inline-flex items-center gap-2">
                        Contact Sales
                        <svg className="h-4 w-4 text-white/90 transition-transform duration-300 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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