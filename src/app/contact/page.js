"use client";
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const GridBackground = () => {
  return (
    <div className="fixed inset-0 w-screen h-screen pointer-events-none z-0 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-black z-0"></div>
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="w-[80vw] h-[80vw] bg-purple-700/40 rounded-full blur-3xl opacity-70 absolute top-[-20vw] left-[-20vw]"></div>
        <div className="w-[60vw] h-[60vw] bg-blue-600/30 rounded-full blur-2xl opacity-60 absolute bottom-[-15vw] right-[-15vw]"></div>
      </div>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h400v400H0z' fill='none'/%3E%3Cpath d='M0 0h400v400H0z' fill='none' stroke='%23ffffff' stroke-width='0.5' stroke-dasharray='5,5'/%3E%3C/svg%3E")`,
          backgroundSize: 'var(--grid-size) var(--grid-size)',
          opacity: 0.15,
        }}
      />
    </div>
  );
};

const FloatingVRElements = () => {
  return (
    <>
      <motion.div
        className="absolute top-1/4 left-1/4 bg-blue-500/10 rounded-full blur-xl"
        style={{ width: '4vw', height: '4vw' }}
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 bg-purple-500/10 rounded-full blur-lg"
        style={{ width: '6vw', height: '6vw' }}
        animate={{ y: [0, 15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
    </>
  );
};

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your submit handler or API call
    alert("Thanks! We'll get back to you shortly.");
  };

  return (
    <div className="contact-inter">
      <style jsx global>{`
        /* CSS Custom Properties for 4 Responsive Breakpoints */
        .contact-inter {
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
          --icon-sm: 1.8vw;
          --dot-size: 1vw;
          --radius: 1.8vw;
          --radius-sm: 1.2vw;
          --radius-lg: 2.4vw;
          --form-height: 3.2vh;
          --badge-pad-y: 0.8vh;
          --badge-pad-x: 1.6vw;
          --badge-text: 1.2vw;
          /* Background grid & textarea */
          --grid-size: 24vw;
          --textarea-min-h: 18vh;
        }
        
        /* LG: ≤1440px */
        @media (max-width: 90em) {
          .contact-inter {
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
            --icon-sm: 2.1vw;
            --form-height: 3.6vh;
            --badge-text: 1.4vw;
            --grid-size: 26vw;
          }
        }
        
        /* MD: ≤1024px */
        @media (max-width: 64em) {
          .contact-inter {
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
            --icon-sm: 3vw;
            --dot-size: 1.5vw;
            --radius: 2.4vw;
            --radius-sm: 1.8vw;
            --radius-lg: 3.2vw;
            --form-height: 4vh;
            --badge-pad-x: 2.4vw;
            --badge-text: 1.8vw;
            --grid-size: 28vw;
            --textarea-min-h: 22vh;
          }
        }
        
        /* SM: ≤640px */
        @media (max-width: 40em) {
          .contact-inter {
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
            --icon-sm: 4vw;
            --dot-size: 2vw;
            --radius: 3.2vw;
            --radius-sm: 2.4vw;
            --radius-lg: 4vw;
            --form-height: 4.5vh;
            --badge-pad-x: 3.2vw;
            --badge-text: 2.8vw;
            --grid-size: 32vw;
            --textarea-min-h: 24vh;
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
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientFlow 8s ease-in-out infinite;
        }
        @keyframes gradientFlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        /* Grid layouts */
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
        .icon-sm { width: var(--icon-sm); height: var(--icon-sm); }
        
        /* Form utilities */
        .form-input {
          height: var(--form-height);
          padding: 0 var(--space-md);
          font-size: var(--text-body);
          border-radius: var(--radius);
          color: #fff;
          background: linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04));
          border: 1px solid rgba(255,255,255,0.14);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            0 6px 18px -8px rgba(0,0,0,0.45);
          outline: none;
          transition: border-color .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .form-textarea {
          padding: var(--space-sm) var(--space-md);
          font-size: var(--text-body);
          border-radius: var(--radius);
          color: #fff;
          background: linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04));
          border: 1px solid rgba(255,255,255,0.14);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            0 6px 18px -8px rgba(0,0,0,0.45);
          outline: none;
          transition: border-color .2s ease, box-shadow .2s ease, background .2s ease;
          min-height: var(--textarea-min-h);
          resize: vertical;
        }
        .select-input {
          appearance: none;
          -webkit-appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right var(--space-md) center;
          background-size: 16px 16px;
          padding-right: calc(var(--space-md) * 2.2);
        }
        .form-input::placeholder, .form-textarea::placeholder {
          color: rgba(255,255,255,0.5);
        }
        .form-input:hover, .form-textarea:hover {
          border-color: rgba(255,255,255,0.22);
          background: linear-gradient(180deg, rgba(255,255,255,0.14), rgba(255,255,255,0.06));
        }
        .form-input:focus, .form-textarea:focus {
          border-color: rgba(59,130,246,0.45);
          box-shadow:
            0 0 0 3px rgba(59,130,246,0.25),
            inset 0 1px 0 rgba(255,255,255,0.10),
            0 10px 28px -10px rgba(80,120,255,0.35);
          background: linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08));
        }
        .form-input:disabled, .form-textarea:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        /* Spacing utilities */
        .space-y-fluid > * + * { margin-top: var(--space-md); }
        .space-y-sm > * + * { margin-top: var(--space-sm); }
        .space-y-lg > * + * { margin-top: var(--space-lg); }
        .space-y-xl > * + * { margin-top: var(--space-xl); }
        .space-y-xxl > * + * { margin-top: var(--space-xxl); }
        .gap-fluid { gap: var(--space-md); }
        .gap-sm { gap: var(--space-sm); }
        .gap-lg { gap: var(--space-lg); }
      `}</style>
    
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <GridBackground />
      <FloatingVRElements />

      <div className="relative z-10 section-spacing container-max space-y-xxl">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center container-narrow space-y-lg"
        >
          <div className="badge-fluid inline-flex items-center bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium">
            CONTACT THE STUDIO
          </div>
          <h1 className="text-display-xl font-bold gradient-primary">
            Let&rsquo;s Talk
          </h1>
          <p className="text-body-lg text-gray-300 leading-relaxed">
            Tell us about your film, interactive, or immersive project. We&rsquo;ll help you plan, prototype, and produce.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 card-radius-lg card-pad border border-white/10"
        >
          <div className="space-y-xl">
            <h2 className="text-heading font-bold">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-lg">
              <div className="grid md:grid-cols-2 gap-lg">
                <div className="space-y-sm">
                  <label className="block text-small text-gray-300 font-medium">Name</label>
                  <input type="text" required className="w-full form-input focus:outline-none transition-all duration-300" placeholder="Your name" />
                </div>
                <div className="space-y-sm">
                  <label className="block text-small text-gray-300 font-medium">Email</label>
                  <input type="email" required className="w-full form-input focus:outline-none transition-all duration-300" placeholder="you@example.com" />
                </div>
                <div className="space-y-sm">
                  <label className="block text-small text-gray-300 font-medium">Company (optional)</label>
                  <input type="text" className="w-full form-input focus:outline-none transition-all duration-300" placeholder="Company name" />
                </div>
                <div className="space-y-sm">
                  <label className="block text-small text-gray-300 font-medium">Project Type</label>
                  <select className="w-full form-input select-input focus:outline-none transition-all duration-300">
                    <option className="text-black">VR / AR Experience</option>
                    <option className="text-black">Cinematic Production</option>
                    <option className="text-black">Real-Time App / Game</option>
                    <option className="text-black">Other</option>
                  </select>
                </div>
              </div>
              <div className="space-y-sm">
                <label className="block text-small text-gray-300 font-medium">Message</label>
                <textarea required rows={5} className="w-full form-textarea focus:outline-none transition-all duration-300" placeholder="Briefly describe your project and timeline" />
              </div>
              <div className="flex justify-center md:justify-end" style={{ paddingTop: 'var(--space-sm)' }}>
                <button type="submit" className="btn-fluid bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="grid-3-col">
            <motion.div 
              whileHover={{ y: -5 }} 
              transition={{ duration: 0.2 }}
              className="bg-white/5 card-radius card-pad border border-white/10 backdrop-blur-sm h-full flex flex-col"
            >
              <div className="space-y-lg flex-1 flex flex-col">
                <div className="icon-fluid bg-blue-500/20 card-radius flex items-center justify-center">
                  <FontAwesomeIcon icon={faEnvelope} className="icon-sm text-blue-400" />
                </div>
                <div className="space-y-sm flex-1">
                  <h3 className="text-subhead font-semibold text-white">Email</h3>
                  <p className="text-gray-300 text-body leading-relaxed">We usually respond within one business day.</p>
                </div>
                <a 
                  href="mailto:contact@devstag.studio" 
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-4 text-body font-medium transition-colors duration-300 mt-auto"
                >
                  contact@devstag.studio
                </a>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }} 
              transition={{ duration: 0.2 }}
              className="bg-white/5 card-radius card-pad border border-white/10 backdrop-blur-sm h-full flex flex-col"
            >
              <div className="space-y-lg flex-1 flex flex-col">
                <div className="icon-fluid bg-purple-500/20 card-radius flex items-center justify-center">
                  <FontAwesomeIcon icon={faPhone} className="icon-sm text-purple-400" />
                </div>
                <div className="space-y-sm flex-1">
                  <h3 className="text-subhead font-semibold text-white">Phone</h3>
                  <p className="text-gray-300 text-body leading-relaxed">Mon–Fri, 10:00–18:00</p>
                </div>
                <a 
                  href="tel:+0000000000" 
                  className="text-purple-400 hover:text-purple-300 underline underline-offset-4 text-body font-medium transition-colors duration-300 mt-auto"
                >
                  +00 0000 000 000
                </a>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }} 
              transition={{ duration: 0.2 }}
              className="bg-white/5 card-radius card-pad border border-white/10 backdrop-blur-sm h-full flex flex-col"
            >
              <div className="space-y-lg flex-1 flex flex-col">
                <div className="icon-fluid bg-indigo-500/20 card-radius flex items-center justify-center">
                  <FontAwesomeIcon icon={faLocationDot} className="icon-sm text-indigo-400" />
                </div>
                <div className="space-y-sm flex-1">
                  <h3 className="text-subhead font-semibold text-white">Location</h3>
                  <p className="text-gray-300 text-body leading-relaxed">Remote-first. Available worldwide.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white/5 card-radius-lg card-pad border border-white/10 text-center"
        >
          <div className="container-tight space-y-xl">
            <div className="space-y-lg">
              <h2 className="text-heading font-bold text-white">Prefer a direct conversation?</h2>
              <p className="text-gray-300 text-body-lg leading-relaxed">We're happy to schedule a call to discuss your goals and scope.</p>
            </div>
            <a 
              href="tel:+0000000000" 
              className="btn-fluid inline-flex items-center gap-sm bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300"
            >
              <FontAwesomeIcon icon={faPhone} className="icon-sm" />
              <span>Call Us</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
    </div>
  );
}