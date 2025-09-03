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
      <div className="absolute inset-0 flex items-center justify-center z-1">
        <div className="w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] bg-purple-700/40 rounded-full blur-3xl opacity-70 absolute top-[-20vw] left-[-20vw]"></div>
        <div className="w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-blue-600/30 rounded-full blur-2xl opacity-60 absolute bottom-[-15vw] right-[-15vw]"></div>
      </div>
      <div
        className="absolute inset-0 z-2"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h400v400H0z' fill='none'/%3E%3Cpath d='M0 0h400v400H0z' fill='none' stroke='%23ffffff' stroke-width='0.5' stroke-dasharray='5,5'/%3E%3C/svg%3E")`,
          backgroundSize: '400px 400px',
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
        className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-lg"
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
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <GridBackground />
      <FloatingVRElements />

      <div className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
            CONTACT THE STUDIO
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Let’s Talk
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Tell us about your film, interactive, or immersive project. We’ll help you plan, prototype, and produce.
          </p>
        </motion.div>

        {/* Contact Methods moved below form */}

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-2xl p-8 md:p-12 border border-white/10 mb-24"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Send us a message</h2>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-300 mb-2">Name</label>
              <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">Email</label>
              <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">Company (optional)</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Company name" />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">Project Type</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40">
                <option className="text-black">VR / AR Experience</option>
                <option className="text-black">Cinematic Production</option>
                <option className="text-black">Real-Time App / Game</option>
                <option className="text-black">Other</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-300 mb-2">Message</label>
              <textarea required rows={5} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Briefly describe your project and timeline" />
            </div>
            <div className="md:col-span-2 flex justify-center md:justify-end">
              <button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-8 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                Send Message
              </button>
            </div>
          </form>
        </motion.div>

        {/* Contact Methods (moved below form) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-24"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -5 }} className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Email</h3>
              <p className="text-gray-300 mb-3">We usually respond within one business day.</p>
              <a href="mailto:contact@devstag.studio" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">contact@devstag.studio</a>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faPhone} className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Phone</h3>
              <p className="text-gray-300 mb-3">Mon–Fri, 10:00–18:00</p>
              <a href="tel:+0000000000" className="text-purple-400 hover:text-purple-300 underline underline-offset-4">+00 0000 000 000</a>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faLocationDot} className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Location</h3>
              <p className="text-gray-300">Remote-first. Available worldwide.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Prefer a direct conversation?</h2>
          <p className="text-gray-300 mb-6">We’re happy to schedule a call to discuss your goals and scope.</p>
          <a href="tel:+0000000000" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-8 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
            <FontAwesomeIcon icon={faPhone} className="w-5 h-5" /> Call Us
          </a>
        </motion.div>
      </div>
    </div>
  );
}