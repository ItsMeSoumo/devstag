"use client";

import Navbar from '@/components/Navbar';
import { motion, useReducedMotion } from 'framer-motion';
import { TracingBeam } from '@/components/ui/tracing-beam';
import LightRays from '@/components/ui/lightrays';

const PremiumCard = ({ children, className = "", delay = 0 }) => {
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

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div className="min-h-screen bg-black text-white relative font-inter about-inter">
      <style jsx global>{`
        .section-spacing {
          padding: clamp(4rem, 10vw, 8rem) clamp(1rem, 4vw, 2rem);
        }
        
        .container-max {
          max-width: clamp(300px, 92vw, 1400px);
          margin: 0 auto;
        }

        /* Force Inter across the entire About page, even if nested components use font utility classes */
        .about-inter .font-montserrat,
        .about-inter .font-outfit {
          font-family: var(--font-inter), ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }

        .text-display-xl {
          font-size: clamp(3.5rem, 8vw, 7rem);
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

        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .grid-responsive {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(2rem, 4vw, 3rem);
        }

        @media (min-width: 768px) {
          .grid-responsive { grid-template-columns: repeat(2, 1fr); }
        }

        @media (min-width: 1024px) {
          .grid-responsive { grid-template-columns: repeat(3, 1fr); }
        }

        .grid-2-col {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(3rem, 6vw, 5rem);
        }

        @media (min-width: 768px) {
          .grid-2-col { grid-template-columns: repeat(2, 1fr); }
        }
        
        .grid-2x2 {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(2rem, 4vw, 3rem);
        }
        @media (min-width: 768px) {
          .grid-2x2 { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <Navbar />
      
      {/* Minimal Premium Background */}
      <div className="fixed inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />
        <div className="absolute top-[-10%] left-[-10%] w-[35vw] h-[35vw] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[40vw] h-[40vw] bg-fuchsia-500/10 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="section-spacing relative overflow-hidden" aria-labelledby="about-hero-heading">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <LightRays
            raysOrigin="top-center"
            raysColor="#8C2EB8"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
        <div className="container-max relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full text-purple-200/90 text-sm font-medium mb-8"
            >
              About · Studio Devstag
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 1, delay: shouldReduceMotion ? 0 : 0.2 }}
              className="text-display-xl gradient-primary mb-6 font-inter"
              id="about-hero-heading"
            >
              Modern. Minimal. Premium.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.8, delay: shouldReduceMotion ? 0 : 0.4 }}
              className="text-body-lg text-white/80 mb-0 max-w-3xl mx-auto font-inter"
            >
              We craft timeless digital experiences with a focus on clarity, purpose, and elegance. 
              Lavender and purple gradients guide a restrained aesthetic—where every detail matters.
            </motion.p>
          </div>
        </div>
      </section>

      {/* About Content Block */}
      <section className="section-spacing" aria-labelledby="about-content-heading">
        <div className="container-max">
          <PremiumCard className="p-10 hover:-translate-y-1" delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              {/* Manifesto */}
              <div>
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center" aria-hidden="true">
                    <img
                      src="/globe.svg"
                      alt=""
                      className="w-5 h-5 opacity-90"
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                  <h2 className="text-display-lg gradient-accent font-inter" id="about-content-heading">Who We Are</h2>
                </div>
                <p className="text-body text-white/80 leading-relaxed max-w-2xl font-inter">
                  We blend design, engineering, and narrative to craft products that feel effortless.
                  Simplicity, accessibility, and longevity guide our work—so every experience remains
                  beautiful and usable from mobile to 4K.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Clarity', 'Accessibility', 'Performance'].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/80 font-inter">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Principles - compact rows */}
              <ul className="space-y-4" aria-label="Studio principles">
                {[ 
                  { title: 'Craft meets code', desc: 'Design and engineering working as one.' , gradient: 'from-purple-500 to-fuchsia-500'},
                  { title: 'Accessible by default', desc: 'Inclusive, WCAG-compliant experiences.' , gradient: 'from-indigo-500 to-purple-500'},
                  { title: 'Performance obsessed', desc: 'Fast, smooth, and responsive on every device.' , gradient: 'from-violet-500 to-fuchsia-500'},
                ].map((p) => (
                  <li key={p.title} className="group relative rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
                    <div className="flex gap-3 p-5">
                      <span className={`mt-1 inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-br ${p.gradient}`} aria-hidden="true" />
                      <div>
                        <div className="text-white/95 font-medium font-inter">{p.title}</div>
                        <p className="text-body text-white/70 font-inter">{p.desc}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </PremiumCard>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-spacing" aria-labelledby="vision-heading mission-heading">
        <div className="container-max">
          <div className="grid-2-col items-center">
            <PremiumCard className="p-10 hover:-translate-y-1" delay={0.1}>
              <div className="flex items-start gap-3 mb-6">
                <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" aria-hidden="true" />
                <h2 className="text-display-lg gradient-accent font-inter" id="vision-heading">Our Vision</h2>
              </div>
              <p className="text-body text-white/80 leading-relaxed mb-6 font-inter">
                To pioneer the future of digital interaction by creating experiences that seamlessly 
                blend reality with imagination, setting new standards for immersive technology.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Innovation', 'Quality', 'Impact'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/80 font-inter">
                    {tag}
                  </span>
                ))}
              </div>
            </PremiumCard>

            <PremiumCard className="p-10 hover:-translate-y-1" delay={0.2}>
              <div className="flex items-start gap-3 mb-6">
                <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" aria-hidden="true" />
                <h2 className="text-display-lg gradient-accent font-inter" id="mission-heading">Our Mission</h2>
              </div>
              <p className="text-body text-white/80 leading-relaxed mb-6 font-inter">
                We empower businesses and creators with cutting-edge digital solutions that drive 
                engagement, inspire action, and create lasting connections with their audience.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Creativity', 'Excellence', 'Partnership'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/80 font-inter">
                    {tag}
                  </span>
                ))}
              </div>
            </PremiumCard>
          </div>
        </div>
      </section>

      {/* Our Story (Timeline) */}
      <section className="section-spacing" aria-labelledby="story-heading">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <h2 className="text-display-lg gradient-primary font-inter" id="story-heading">Our Story</h2>
          </motion.div>
          <TracingBeam className="max-w-5xl">
            <PremiumCard className="p-10" delay={0.1}>
              <ol className="relative pl-6 md:pl-8 space-y-8" aria-label="Timeline of milestones">
              {[ 
                { year: '2019', title: 'Founded the Studio', desc: 'Started with a vision to build premium, minimal digital experiences.' },
                { year: '2021', title: 'Scaled Craft & Capability', desc: 'Expanded design and engineering teams to serve larger, complex projects.' },
                { year: '2023', title: 'Immersive & 3D', desc: 'Integrated XR and real‑time 3D to elevate storytelling and interaction.' },
                { year: '2025', title: 'Accessible by Default', desc: 'Shipped an accessibility-first design system that scales beautifully.' }
              ].map((item) => (
                <li key={item.year} className="relative">
                  <span className="absolute -left-3 top-2 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-500" aria-hidden="true" />
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="text-sm text-white/60 font-medium font-inter">{item.year}</span>
                    <h3 className="text-lg text-white/95 font-medium font-inter">{item.title}</h3>
                  </div>
                  <p className="text-body text-white/70 mt-2 font-inter">{item.desc}</p>
                </li>
              ))}
              </ol>
            </PremiumCard>
          </TracingBeam>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-spacing" aria-labelledby="values-heading">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-display-lg gradient-primary font-inter" id="values-heading">Our Values</h2>
          </motion.div>
          <PremiumCard className="p-10 hover:-translate-y-1" delay={0.1}>
            <motion.ul
              className="space-y-4"
              aria-label="Our core values"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12 } },
              }}
            >
              {[
                { title: 'Clarity', desc: 'Less, but better. We remove noise and surface what matters.' , gradient: 'from-purple-500 to-fuchsia-500'},
                { title: 'Trust', desc: 'Reliable, accessible, and secure by default.' , gradient: 'from-purple-400 to-indigo-500'},
                { title: 'Empathy', desc: 'Human-centered decisions grounded in research and care.' , gradient: 'from-fuchsia-500 to-pink-500'},
                { title: 'Performance', desc: 'Fast, smooth, and delightful on every device.' , gradient: 'from-violet-500 to-purple-600'},
              ].map((v, idx) => (
                <motion.li
                  key={v.title}
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
                  variants={{ hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 14 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, ease: 'easeOut' }}
                >
                  <div className="flex gap-3 p-5">
                    <span className={`mt-1 inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-br ${v.gradient}`} aria-hidden="true" />
                    <div>
                      <div className="text-white/95 font-medium font-inter">{v.title}</div>
                      <p className="text-body text-white/70 font-inter">{v.desc}</p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </PremiumCard>
        </div>
      </section>

      {/* Studio Showcase (Photo Space) */}
      <section className="section-spacing" aria-labelledby="showcase-heading">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center"
          >
            <h2 className="text-display-lg gradient-primary font-inter" id="showcase-heading">Studio Showcase</h2>
            <p className="text-body text-white/70 max-w-2xl mx-auto mt-3 font-inter">
              A professional space for photography and highlights. Replace these images with your own studio shots.
            </p>
          </motion.div>

          <PremiumCard className="p-6 md:p-8 hover:-translate-y-1" delay={0.1}>
            <div className="grid-2-col items-stretch">
              {/* Large Feature Photo */}
              <div className="relative h-[320px] sm:h-[420px] md:h-[520px] rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                <img
                  src="/images/floating_1.jpg"
                  alt="Studio portrait or hero visual"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-4 left-4 px-3 py-1.5 glass-effect rounded-full text-sm text-white/90 font-inter">
                  Studio Portrait
                </div>
              </div>

              {/* Supporting Photos */}
              <div className="grid gap-6">
                <div className="relative h-[200px] sm:h-[220px] md:h-[248px] rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                  <img
                    src="/images/floating_2.jpg"
                    alt="Behind the scenes craft detail"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" aria-hidden="true" />
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 glass-effect rounded-full text-xs text-white/90 font-inter">
                    Behind the scenes
                  </div>
                </div>
                <div className="relative h-[200px] sm:h-[220px] md:h-[248px] rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                  <img
                    src="/images/floating_3.jpg"
                    alt="Brand element or ambiance"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" aria-hidden="true" />
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 glass-effect rounded-full text-xs text-white/90 font-inter">
                    Brand element
                  </div>
                </div>
              </div>
            </div>
          </PremiumCard>
        </div>
      </section>
    </div>
  );
}
