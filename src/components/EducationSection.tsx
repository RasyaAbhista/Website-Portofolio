import { motion } from 'framer-motion'
import umnLogo from '../assets/umn-logo.png'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
}

const statPop = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 220, damping: 18, mass: 0.6, delay },
  }),
}

export default function EducationSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black text-white font-poppins flex items-center">

      {/* Dots background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-black/30 to-black/70 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4 px-6 md:px-12 lg:px-16 py-24">

        {/* Left: Education details */}
        <motion.div
          className="w-full lg:w-[54%] flex flex-col justify-center order-2 lg:order-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >

          {/* Section label */}
          <motion.div
            className="flex items-center gap-2 mb-6 text-sm tracking-widest text-gray-400 uppercase"
            variants={fadeUp}
            custom={0}
          >
            <span className="h-px w-8 bg-gray-500" />
            Education
          </motion.div>

          {/* Degree title in bracket frame */}
          <motion.div
            className="relative inline-block mb-10 mt-4 self-start"
            variants={fadeUp}
            custom={0.1}
          >
            <span className="absolute -top-3 -left-3 w-3 h-3 bg-white" />
            <span className="absolute -top-3 -right-3 w-3 h-3 bg-white" />
            <span className="absolute -bottom-3 -left-3 w-3 h-3 bg-white" />
            <span className="absolute -bottom-3 -right-3 w-3 h-3 bg-white" />
            <div className="absolute inset-0 border border-white/60" />
            <span className="absolute -top-7 left-0 text-xs tracking-widest text-gray-400 uppercase">
              Degree
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] px-6 py-5">
              Bachelor of
              <br />
              Computer Science
            </h1>
          </motion.div>

          {/* University name */}
          <motion.div className="mb-2" variants={fadeUp} custom={0.2}>
            <p className="text-xs tracking-widest text-gray-500 uppercase mb-1">Institution</p>
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Universitas Multimedia Nusantara
            </h2>
            <p className="text-gray-400 text-sm mt-1">Informatics · 2023 – Present</p>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="h-px w-full bg-gray-800 my-8 origin-left"
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              visible: { scaleX: 1, opacity: 1, transition: { duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] } },
            }}
          />

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-6 mb-10">

            {/* Semester */}
            <motion.div className="relative group" variants={statPop} custom={0.4}>
              <span className="absolute -top-2 -left-2 w-2 h-2 bg-white opacity-60" />
              <span className="absolute -top-2 -right-2 w-2 h-2 bg-white opacity-60" />
              <span className="absolute -bottom-2 -left-2 w-2 h-2 bg-white opacity-60" />
              <span className="absolute -bottom-2 -right-2 w-2 h-2 bg-white opacity-60" />
              <div className="absolute inset-0 border border-white/20 group-hover:border-white/50 transition-colors" />
              <div className="px-4 py-5 text-center">
                <p className="text-xs tracking-widest text-gray-500 uppercase mb-2">Semester</p>
                <p className="text-4xl font-bold text-white">6</p>
              </div>
            </motion.div>

            {/* Cumulative GPA */}
            <motion.div className="relative group" variants={statPop} custom={0.5}>
              <span className="absolute -top-2 -left-2 w-2 h-2 bg-white opacity-60" />
              <span className="absolute -top-2 -right-2 w-2 h-2 bg-white opacity-60" />
              <span className="absolute -bottom-2 -left-2 w-2 h-2 bg-white opacity-60" />
              <span className="absolute -bottom-2 -right-2 w-2 h-2 bg-white opacity-60" />
              <div className="absolute inset-0 border border-white/20 group-hover:border-white/50 transition-colors" />
              <div className="px-4 py-5 text-center">
                <p className="text-xs tracking-widest text-gray-500 uppercase mb-2">IPK</p>
                <p className="text-4xl font-bold text-white">3.27</p>
                <p className="text-xs text-gray-600 mt-1">/ 4.00</p>
              </div>
            </motion.div>

            {/* Latest Semester GPA */}
            <motion.div className="relative group" variants={statPop} custom={0.6}>
              <span className="absolute -top-2 -left-2 w-2 h-2 bg-white opacity-60" />
              <span className="absolute -top-2 -right-2 w-2 h-2 bg-white opacity-60" />
              <span className="absolute -bottom-2 -left-2 w-2 h-2 bg-white opacity-60" />
              <span className="absolute -bottom-2 -right-2 w-2 h-2 bg-white opacity-60" />
              <div className="absolute inset-0 border border-white/20 group-hover:border-white/50 transition-colors" />
              <div className="px-4 py-5 text-center">
                <p className="text-xs tracking-widest text-gray-500 uppercase mb-2">IPS</p>
                <p className="text-4xl font-bold text-white">3.78</p>
                <p className="text-xs text-gray-600 mt-1">/ 4.00</p>
              </div>
            </motion.div>
          </div>

        </motion.div>

        {/* Right: UMN Logo in bounding box — big */}
        <motion.div
          className="relative w-full lg:w-[42%] h-[50vh] sm:h-[60vh] lg:h-[75vh] order-1 lg:order-2 flex items-center justify-center lg:justify-end"
          initial={{ opacity: 0, x: 60, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 70, damping: 16, mass: 0.8 }}
        >
          <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg h-full">
            {/* Corner brackets */}
            <span className="absolute -top-3 -left-3 w-3 h-3 bg-white" />
            <span className="absolute -top-3 -right-3 w-3 h-3 bg-white" />
            <span className="absolute -bottom-3 -left-3 w-3 h-3 bg-white" />
            <span className="absolute -bottom-3 -right-3 w-3 h-3 bg-white" />
            <div className="absolute inset-0 border border-white/60" />
            <span className="absolute -top-7 left-0 text-xs tracking-widest text-gray-400 uppercase">
              University
            </span>
            <img
              src={umnLogo}
              alt="Universitas Multimedia Nusantara"
              className="absolute inset-0 w-full h-full object-contain p-10"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}