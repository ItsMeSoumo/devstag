"use client";

import Navbar from '@/components/Navbar';
import { motion, useReducedMotion } from 'framer-motion';
import { TracingBeam } from '@/components/ui/tracing-beam';
import LightRays from '@/components/ui/lightrays';
import Image from 'next/image';

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
        boxShadow: "var(--shadow-elev)"
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
        /* Responsive variable system for About page */
        .about-inter {
          --container-max: 86vw;
          --container-narrow: 68vw;
          --section-py: 14vh;
          --section-px: 4vw;

          --fs-display-xl: 7vw;
          --fs-display-lg: 3.2vw;
          --fs-body-lg: 1.6vw;
          --fs-body: 1.25vw;

          --chip-px: 1.2vw;
          --chip-py: 0.6vw;
          --chip-fs: 0.95vw;

          --radius-xxl: 2vw;
          --radius-xl: 1.6vw;
          --radius-lg: 1.2vw;
          --radius-md: 0.8vw;

          --border-w: 0.12vw;

          --gap-sm: 1.2vw;
          --gap-md: 2vw;
          --gap-lg: 3vw;

          --space-sm: 1.2vw;
          --space-md: 2vw;
          --space-lg: 3vw;
          --space-xl: 4vw;

          --card-pad: 3vw;
          --card-pad-sm: 2.2vw;
          --row-pad: 1.8vw;

          --timeline-pl: 3vw;
          --timeline-space-y: 2.4vw;

          --feature-h: 36vw; /* large photo height */
          --support-h: 18vw; /* small photo height */

          --card-blur: 1.2vw;
          --blur-bg: 6vw;

          --shadow-elev: 0 2vh 4vh -1vh rgba(147,51,234,0.28), inset 0 0.2vw 0 rgba(255,255,255,0.06);
          --hover-raise: 1vh;
        }

        /* LG ≤ 1440 */
        @media (max-width: 90em) {
          .about-inter {
            --container-max: 90vw;
            --container-narrow: 72vw;
            --fs-display-xl: 8vw;
            --fs-display-lg: 3.6vw;
            --fs-body-lg: 1.8vw;
            --fs-body: 1.4vw;
            --feature-h: 42vw;
            --support-h: 20vw;
          }
        }

        /* MD ≤ 1024 */
        @media (max-width: 64em) {
          .about-inter {
            --container-max: 94vw;
            --container-narrow: 80vw;
            --section-py: 16vh;
            --section-px: 6vw;
            --fs-display-xl: 9.5vw;
            --fs-display-lg: 4.6vw;
            --fs-body-lg: 2.2vw;
            --fs-body: 2vw;
            --card-pad: 3.6vw;
            --card-pad-sm: 2.8vw;
            --row-pad: 2.4vw;
            --timeline-pl: 4vw;
            --timeline-space-y: 3.2vw;
            --feature-h: 56vw;
            --support-h: 26vw;
            --hover-raise: 1.2vh;
          }
        }

        /* SM ≤ 640 */
        @media (max-width: 40em) {
          .about-inter {
            --container-max: 96vw;
            --container-narrow: 88vw;
            --section-py: 18vh;
            --section-px: 6vw;
            --fs-display-xl: 10.5vw;
            --fs-display-lg: 5.6vw;
            --fs-body-lg: 3.2vw;
            --fs-body: 3vw;
            --card-pad: 4.2vw;
            --card-pad-sm: 3.2vw;
            --row-pad: 3vw;
            --timeline-pl: 6vw;
            --timeline-space-y: 4vw;
            --feature-h: 76vw;
            --support-h: 36vw;
            --hover-raise: 1.6vh;
          }
        }

        .section-spacing {
          padding: var(--section-py) var(--section-px);
        }
        
        .container-max {
          width: min(var(--container-max), 100%);
          margin-left: auto;
          margin-right: auto;
        }

        .container-narrow { width: min(var(--container-narrow), 100%); margin: 0 auto; }

        /* Force Inter across the entire About page, even if nested components use font utility classes */
        .about-inter .font-montserrat,
        .about-inter .font-outfit {
          font-family: var(--font-inter), ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }

        .text-display-xl {
          font-size: var(--fs-display-xl);
          line-height: 1.1;
          letter-spacing: -0.02em;
          font-weight: 500;
        }

        .text-display-lg {
          font-size: var(--fs-display-lg);
          line-height: 1.2;
          letter-spacing: -0.01em;
          font-weight: 300;
        }

        .text-body-lg {
          font-size: var(--fs-body-lg);
          line-height: 1.6;
          font-weight: 300;
        }

        .text-body {
          font-size: var(--fs-body);
          line-height: 1.7;
          font-weight: 300;
        }

        /* Small label text driven by variables */
        .text-caption {
          font-size: calc(var(--fs-body) * 0.85);
          line-height: 1.5;
          letter-spacing: 0.01em;
          font-weight: 400;
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

        .glass-effect { background: rgba(255,255,255,0.05); backdrop-filter: blur(var(--card-blur)); border: var(--border-w) solid rgba(255,255,255,0.1); }

        /* PremiumCard base */
        .premium-card {
          background: linear-gradient(135deg, rgba(147,51,234,0.08) 0%, rgba(79,70,229,0.04) 50%, rgba(219,39,119,0.08) 100%);
          box-shadow: var(--shadow-elev);
          border-width: var(--border-w);
          border-color: rgba(255,255,255,0.1);
          border-style: solid;
          border-radius: var(--radius-xxl);
          backdrop-filter: blur(var(--card-blur));
        }

        /* Chip utility driven by variables */
        .chip { font-size: var(--chip-fs); padding: var(--chip-py) var(--chip-px); line-height: 1; }

        .card-pad { padding: var(--card-pad); }
        .card-pad-sm { padding: var(--card-pad-sm); }
        .hover-raise { transition: transform 0.3s ease; }
        .hover-raise:hover { transform: translateY(calc(-1 * var(--hover-raise))); }

        .grid-responsive {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--gap-md);
        }

        @media (min-width: 48em) {
          .grid-responsive { grid-template-columns: repeat(2, 1fr); }
        }

        @media (min-width: 64em) {
          .grid-responsive { grid-template-columns: repeat(3, 1fr); }
        }

        .grid-2-col { display: grid; grid-template-columns: 1fr; gap: var(--gap-lg); }

        @media (min-width: 48em) {
          .grid-2-col { grid-template-columns: repeat(2, 1fr); }
        }
        
        .grid-2x2 {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--gap-md);
        }
        @media (min-width: 48em) {
          .grid-2x2 { grid-template-columns: repeat(2, 1fr); }
        }

        /* Utility overrides scoped to this page for Tailwind classes used here */
        .about-inter .max-w-5xl { max-width: var(--container-narrow) !important; }
        .about-inter .max-w-3xl { max-width: calc(var(--container-narrow) * 0.8) !important; }
        .about-inter .max-w-2xl { max-width: calc(var(--container-narrow) * 0.6) !important; }
        .about-inter .rounded-3xl { border-radius: var(--radius-xxl) !important; }
        .about-inter .rounded-2xl { border-radius: var(--radius-xl) !important; }
        .about-inter .rounded-xl { border-radius: var(--radius-lg) !important; }
        .about-inter .backdrop-blur-xl { backdrop-filter: blur(var(--card-blur)) !important; }
        .about-inter .text-sm { font-size: calc(var(--fs-body) * 0.85) !important; line-height: 1.5 !important; }
        .about-inter .text-lg { font-size: calc(var(--fs-body) * 1.1) !important; line-height: 1.4 !important; }
        .about-inter .border { border-width: var(--border-w) !important; }
        .about-inter .gap-10 { gap: var(--gap-lg) !important; }
        .about-inter .gap-4 { gap: var(--gap-sm) !important; }
        .about-inter .gap-3 { gap: calc(var(--gap-sm) * 0.8) !important; }
        .about-inter .gap-6 { gap: var(--gap-md) !important; }
        .about-inter .gap-2 { gap: calc(var(--gap-sm) * 0.66) !important; }
        .about-inter .p-5 { padding: var(--row-pad) !important; }
        .about-inter .mb-12 { margin-bottom: var(--space-xl) !important; }
        .about-inter .mb-10 { margin-bottom: var(--space-lg) !important; }
        .about-inter .mb-8 { margin-bottom: var(--space-md) !important; }
        .about-inter .mb-6 { margin-bottom: var(--space-md) !important; }
        .about-inter .mb-5 { margin-bottom: calc(var(--space-md) * 0.8) !important; }
        .about-inter .mt-6 { margin-top: var(--space-md) !important; }
        .about-inter .mt-3 { margin-top: calc(var(--space-sm) * 0.9) !important; }
        .about-inter .mt-2 { margin-top: var(--space-sm) !important; }

        /* Hero eyebrow pill */
        .eyebrow-pill { display: inline-flex; align-items: center; gap: calc(var(--gap-sm) * 0.6); padding: var(--chip-py) var(--chip-px); border-radius: 100vw; }
        .eyebrow-pill.text-sm { font-size: var(--chip-fs); }

        /* Dots and icons */
        .ui-square { width: 3.6vw; height: 3.6vw; min-width: 2.6vw; min-height: 2.6vw; border-radius: var(--radius-xl); display: flex; align-items: center; justify-content: center; }
        .ui-icon { width: 2vw; height: 2vw; min-width: 1.6vw; min-height: 1.6vw; }
        .dot { width: 0.9vw; height: 0.9vw; min-width: 0.7vw; min-height: 0.7vw; border-radius: 100vw; display: inline-block; }
        .timeline-dot { position: absolute; left: -1.4vw; top: 1.2vw; width: 0.9vw; height: 0.9vw; border-radius: 100vw; }
        .icon-invert { filter: brightness(0) invert(1); }

        /* Timeline spacing */
        .timeline-list { position: relative; padding-left: var(--timeline-pl); }
        .timeline-list > li + li { margin-top: var(--timeline-space-y); }

        /* Fluid list vertical spacing utility */
        .list-space-y { display: grid; row-gap: var(--space-sm); }

        /* Image blocks */
        .r-feature-photo { height: var(--feature-h); }
        .r-support-photo { height: var(--support-h); }
        .photo-badge { position: absolute; bottom: 2.4vh; left: 2.4vw; padding: calc(var(--chip-py) * 0.8) calc(var(--chip-px) * 0.8); border-radius: 100vw; font-size: var(--chip-fs); }
        .photo-badge--sm { font-size: calc(var(--chip-fs) * 0.85); }
        .soft-blur { filter: blur(var(--blur-bg)); }
      `}</style>

      <Navbar />
      
      {/* Minimal Premium Background */}
      <div className="fixed inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />
        <div className="absolute top-[-10%] left-[-10%] w-[35vw] h-[35vw] bg-purple-500/10 rounded-full soft-blur" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[40vw] h-[40vw] bg-fuchsia-500/10 rounded-full soft-blur" />
      </div>

      {/* Hero Section */}
      <section className="section-spacing relative overflow-hidden" aria-labelledby="about-hero-heading">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <LightRays
            raysOrigin="top-center"
            raysColor="#8C2EB8"
            raysSpeed={shouldReduceMotion ? 0 : 1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={!shouldReduceMotion}
            mouseInfluence={shouldReduceMotion ? 0 : 0.1}
            noiseAmount={shouldReduceMotion ? 0 : 0.1}
            distortion={shouldReduceMotion ? 0 : 0.05}
            className="custom-rays"
          />
        </div>
        <div className="container-max relative z-10">
          <div className="text-center max-w-5xl mx-auto container-narrow">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.8 }}
              className="eyebrow-pill glass-effect text-purple-200/90 text-sm font-medium mb-8"
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
              Immersive. Innovative. Impactful.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.8, delay: shouldReduceMotion ? 0 : 0.4 }}
              className="text-body-lg text-white/80 mb-0 max-w-3xl mx-auto font-inter"
            >
              At Studio Devstag, simplicity becomes sophistication. We craft digital experiences that balance innovation with elegance,
              guided by a modern aesthetic where every interaction feels intentional and every detail matters.
            </motion.p>
          </div>
        </div>
      </section>

      {/* About Content Block */}
      <section className="section-spacing" aria-labelledby="about-content-heading">
        <div className="container-max">
          <PremiumCard className="premium-card card-pad hover-raise" delay={0.1}>
            <div className="grid-2-col items-start">
              {/* Manifesto */}
              <div>
                <div className="flex items-start gap-4 mb-5">
                  <div className="ui-square bg-gradient-to-br from-purple-500 to-fuchsia-500" aria-hidden="true">
                    <Image
                      src="/globe.svg"
                      alt=""
                      width={32}
                      height={32}
                      className="ui-icon opacity-90 icon-invert"
                    />
                  </div>
                  <h2 className="text-display-lg gradient-accent font-inter" id="about-content-heading">Who We Are</h2>
                </div>
                <p className="text-body text-white/80 max-w-2xl font-inter">
                  Where design merges with engineering to shape digital experiences that are intuitive,
                  accessible, and built to last.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Clarity', 'Accessibility', 'Performance'].map((tag) => (
                    <span key={tag} className="chip rounded-full border border-white/10 bg-white/5 text-white/80 font-inter">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Principles - compact rows */}
              <ul className="list-space-y" aria-label="Studio principles">
              {[ 
                { title: 'Craft meets code', desc: 'Seamless design‑engineering synergy for intuitive products.' , gradient: 'from-purple-500 to-fuchsia-500'},
                { title: 'Accessible by default', desc: 'Inclusivity embedded from the ground up.' , gradient: 'from-indigo-500 to-purple-500'},
                { title: 'Performance obsessed', desc: 'Lightning‑fast, smooth experiences across every device.' , gradient: 'from-violet-500 to-fuchsia-500'},
              ].map((p) => (
                <li key={p.title} className="group relative rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
                    <div className="flex gap-3 p-5">
                      <span className={`mt-1 inline-block dot bg-gradient-to-br ${p.gradient}`} aria-hidden="true" />
                      <div>
                        <h3 className="text-body-lg text-white/95 font-medium font-inter">{p.title}</h3>
                        <p className="text-body text-white/70 mt-2 font-inter">{p.desc}</p>
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
            <PremiumCard className="premium-card card-pad hover-raise" delay={0.1}>
              <div className="flex items-start gap-3 mb-6">
                <span className="mt-1 inline-block dot bg-gradient-to-br from-purple-500 to-pink-500" aria-hidden="true" />
                <h2 className="text-display-lg gradient-accent font-inter" id="vision-heading">Our Vision</h2>
              </div>
              <p className="text-body text-white/80 mb-6 font-inter">
                To pioneer the future of digital interaction by creating experiences that seamlessly 
                blend reality with imagination, setting new standards for immersive technology.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Innovation', 'Quality', 'Impact'].map((tag) => (
                  <span key={tag} className="chip rounded-full border border-white/10 bg-white/5 text-white/80 font-inter">{tag}</span>
                ))}
              </div>
            </PremiumCard>

            <PremiumCard className="premium-card card-pad hover-raise" delay={0.2}>
              <div className="flex items-start gap-3 mb-6">
                <span className="mt-1 inline-block dot bg-gradient-to-br from-blue-500 to-purple-500" aria-hidden="true" />
                <h2 className="text-display-lg gradient-accent font-inter" id="mission-heading">Our Mission</h2>
              </div>
              <p className="text-body text-white/80 mb-6 font-inter">
                We empower businesses and creators with cutting-edge digital solutions that drive 
                engagement, inspire action, and create lasting connections with their audience.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Creativity', 'Excellence', 'Partnership'].map((tag) => (
                  <span key={tag} className="chip rounded-full border border-white/10 bg-white/5 text-white/80 font-inter">{tag}</span>
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
            <PremiumCard className="premium-card card-pad" delay={0.1}>
              <ol className="timeline-list" aria-label="Timeline of milestones">
              {[ 
                { year: '2019', title: 'Born with a Minimal Vision', desc: 'Born from a desire to create minimal, impactful digital experiences.' },
                { year: '2020', title: 'Architectural Visualization in VR', desc: 'Expanded into immersive design for real estate and spaces.' },
                { year: '2021', title: 'Team Expansion', desc: 'Expanded our team, enabling us to take on more ambitious projects.' },
                { year: '2022', title: 'Animated Storytelling', desc: 'Ventured into animated storytelling with cutting‑edge 3D workflows.' },
                { year: '2023', title: 'XR & Real‑time 3D', desc: 'We embraced XR and real‑time 3D to elevate storytelling.' },
                { year: '2024', title: 'Cinematic VFX', desc: 'Entered the cinematic space, delivering high‑quality visual effects for film.' },
                { year: '2025', title: 'Accessibility‑First Design System', desc: 'Making inclusivity our foundation, not an afterthought.' }
              ].map((item) => (
                <li key={item.year} className="relative">
                  <span className="timeline-dot bg-gradient-to-br from-purple-500 to-fuchsia-500" aria-hidden="true" />
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="text-caption text-white/60 font-medium font-inter">{item.year}</span>
                    <h3 className="text-body-lg text-white/95 font-medium font-inter">{item.title}</h3>
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
            <h2 className="text-display-lg gradient-primary font-inter" id="values-heading">Values That Define Us</h2>
          </motion.div>
          <PremiumCard className="premium-card card-pad hover-raise" delay={0.1}>
            <motion.ul
              className="list-space-y"
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
                { title: 'Clarity', desc: 'We strip away the unnecessary to focus on what truly matters.' , gradient: 'from-purple-500 to-fuchsia-500'},
                { title: 'Trust', desc: 'Security, reliability, and accessibility—built‑in, always.' , gradient: 'from-purple-400 to-indigo-500'},
                { title: 'Empathy', desc: 'Our work centers on understanding real human needs.' , gradient: 'from-fuchsia-500 to-pink-500'},
                { title: 'Performance', desc: 'Delightfully fast, any device, any time.' , gradient: 'from-violet-500 to-purple-600'},
              ].map((v, idx) => (
                <motion.li
                  key={v.title}
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
                  variants={{ hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 14 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, ease: 'easeOut' }}
                >
                  <div className="flex gap-3 p-5">
                    <span className={`mt-1 inline-block dot bg-gradient-to-br ${v.gradient}`} aria-hidden="true" />
                    <div>
                      <h3 className="text-body-lg text-white/95 font-medium font-inter">{v.title}</h3>
                      <p className="text-body text-white/70 mt-2 font-inter">{v.desc}</p>
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
              Innovation on display.
            </p>
          </motion.div>

          <PremiumCard className="premium-card card-pad-sm hover-raise" delay={0.1}>
            <div className="grid-2-col items-stretch">
              {/* Large Feature Photo */}
              <div className="relative r-feature-photo rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                <Image
                  src="/images/floating_1.jpg"
                  alt="Studio portrait or hero visual"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" aria-hidden="true" />
                <div className="photo-badge glass-effect rounded-full text-white/90 font-inter">
                  Studio Portrait
                </div>
              </div>

              {/* Supporting Photos */}
              <div className="grid gap-6">
                <div className="relative r-support-photo rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                  <Image
                    src="/images/floating_2.jpg"
                    alt="Behind the scenes craft detail"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" aria-hidden="true" />
                  <div className="photo-badge photo-badge--sm glass-effect rounded-full text-white/90 font-inter">
                    Behind the scenes
                  </div>
                </div>
                <div className="relative r-support-photo rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                  <Image
                    src="/images/floating_3.jpg"
                    alt="Brand element or ambiance"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" aria-hidden="true" />
                  <div className="photo-badge photo-badge--sm glass-effect rounded-full text-white/90 font-inter">
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