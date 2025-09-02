"use client";

import { motion } from "framer-motion";

export default function SecondSection() {
  return (
    <section id="studio" className="relative min-h-screen w-full overflow-hidden" style={{ position: 'sticky', top: 0, zIndex: 10 }}>
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          background: "#000",
          backgroundImage: "url('/Devkia2.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundBlendMode: "normal",
          minHeight: '100vh'
        }}
      />

      {/* Black fade overlays (top and bottom) */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[20vh] z-[5]"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[24vh] z-[5]"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
        }}
      />

      <div className="min-h-screen flex flex-col items-start justify-center text-white text-left relative z-10" style={{ paddingLeft: '6%', paddingRight: '6%' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-[88%] sm:w-[84%] md:w-[62%] lg:w-[48%] xl:w-[42%]"
          style={{
            marginTop: '18vh',
            marginLeft: '6%'
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-[2vh] sm:mb-[2.4vh] md:mb-[3vh] lg:mb-[3.6vh] xl:mb-[4vh]"
            style={{ marginTop: '-6vh' }}
          >
            <span className="inline-block whitespace-nowrap py-[1.2vh] px-[4vw] sm:px-[3.2vw] md:px-[2.4vw] lg:px-[2vw] xl:px-[1.6vw] text-[clamp(1.4vh,3vw,2.2vh)] sm:text-[clamp(1.4vh,2.4vw,2.1vh)] md:text-[clamp(1.3vh,1.6vw,1.8vh)] lg:text-[clamp(1.2vh,1.2vw,1.6vh)] xl:text-[clamp(1.1vh,1vw,1.5vh)] font-medium text-yellow-300 tracking-widest uppercase bg-white/5 backdrop-blur-sm border-[0.2vw] md:border-[0.15vw] lg:border-[0.12vw] xl:border-[0.1vw] border-white/10 rounded-full">
              IN DEPTH
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-bold tracking-tighter leading-[1.12] mb-[4vh] sm:mb-[4.8vh] md:mb-[5.6vh] lg:mb-[6.4vh] xl:mb-[7vh] text-[clamp(3.8vh,9vw,7.2vh)] sm:text-[clamp(4vh,8vw,7.4vh)] md:text-[clamp(4.4vh,5.6vw,7.6vh)] lg:text-[clamp(4.8vh,4.6vw,7.8vh)] xl:text-[clamp(5vh,4vw,8vh)]"
          >
            <span className="block">Inside</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
              DevStag Studio
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-blue-100/80 font-light tracking-wide leading-[1.6] mb-[4vh] sm:mb-[4.8vh] md:mb-[5.6vh] lg:mb-[6.4vh] xl:mb-[7vh] text-[clamp(1.8vh,3.6vw,2.8vh)] sm:text-[clamp(1.8vh,3vw,2.6vh)] md:text-[clamp(1.7vh,2vw,2.4vh)] lg:text-[clamp(1.6vh,1.6vw,2.2vh)] xl:text-[clamp(1.5vh,1.4vw,2vh)] w-[92%] sm:w-[88%] md:w-[85%] lg:w-[82%] xl:w-[78%]"
          >
            Dive deeper into the studio—tools, workflows, and real-time previews that power every build.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-start w-full gap-[4vw] sm:gap-[3.4vw] md:gap-[2.6vw] lg:gap-[2vw] xl:gap-[1.6vw]"
            style={{ marginLeft: '1%' }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 3vw rgba(255, 46, 203, 0.45)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-[#ff2ecb] to-[#d94cf7] rounded-full font-medium uppercase tracking-wider hover:opacity-90 transition-all w-full sm:w-auto py-[1.8vh] sm:py-[1.8vh] md:py-[1.6vh] lg:py-[1.4vh] xl:py-[1.2vh] px-[6vw] sm:px-[5vw] md:px-[4vw] lg:px-[3.2vw] xl:px-[2.8vw] text-[clamp(1.6vh,3.2vw,2.6vh)] sm:text-[clamp(1.6vh,2.6vw,2.4vh)] md:text-[clamp(1.5vh,1.8vw,2.2vh)] lg:text-[clamp(1.4vh,1.5vw,2vh)] xl:text-[clamp(1.3vh,1.3vw,1.8vh)]"
            >
              View features
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/5 backdrop-blur-sm border-white/10 rounded-full font-medium uppercase tracking-wider hover:bg-white/20 transition-all w-full sm:w-auto border-[0.2vw] md:border-[0.15vw] lg:border-[0.12vw] xl:border-[0.1vw] py-[1.8vh] sm:py-[1.8vh] md:py-[1.6vh] lg:py-[1.4vh] xl:py-[1.2vh] px-[6vw] sm:px-[5vw] md:px-[4vw] lg:px-[3.2vw] xl:px-[2.8vw] text-[clamp(1.6vh,3.2vw,2.6vh)] sm:text-[clamp(1.6vh,2.6vw,2.4vh)] md:text-[clamp(1.5vh,1.8vw,2.2vh)] lg:text-[clamp(1.4vh,1.5vw,2vh)] xl:text-[clamp(1.3vh,1.3vw,1.8vh)]"
            >
              See demos
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
        >
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-blue-500/20 blur-xl"
            style={{
              width: '50%',
              height: '2vh'
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}