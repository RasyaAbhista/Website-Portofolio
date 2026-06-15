import profileImg from '../assets/profiles.png';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
}

const container = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.1, staggerChildren: 0.12 },
  },
}

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black text-white font-poppins py-12 lg:py-0 flex items-center">

      {/* Dot grid background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
          opacity: 0.25,
        }}
      />

      {/* Vignette tengah gelap */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.0) 75%)",
        }}
      />

      {/* Vignette tepi */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.9) 100%)",
        }}
      />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-[1600px] mx-auto w-full flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-4 px-6 md:px-12">
        
        {/* ======================================================= */}
        {/* 1. KHUSUS MOBILE: JUDUL DI ATAS KEPALA (Hidden di Desktop) */}
        {/* ======================================================= */}
        <motion.div 
          className="w-full flex flex-col items-center text-center lg:hidden"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <motion.div className="flex items-center gap-2 mb-4 text-xs tracking-widest text-gray-400 uppercase" variants={fadeUp}>
            <span className="h-px w-6 bg-gray-500" /> I'M A <span className="h-px w-6 bg-gray-500" />
          </motion.div>

          <motion.div className="relative inline-block mb-2 mt-2" variants={fadeUp}>
            <span className="absolute -top-2 -left-2 w-2 h-2 bg-white" />
            <span className="absolute -top-2 -right-2 w-2 h-2 bg-white" />
            <span className="absolute -bottom-2 -left-2 w-2 h-2 bg-white" />
            <span className="absolute -bottom-2 -right-2 w-2 h-2 bg-white" />
            <div className="absolute inset-0 border border-white/60" />
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] tracking-widest text-gray-400 uppercase bg-black px-1">
              Job
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold leading-tight px-4 py-3">
              Full Stack
              <br />
              Website Developer
            </h1>
          </motion.div>
        </motion.div>

        {/* ======================================================= */}
        {/* 2. FOTO PROFIL (Di Mobile Tengah, Di Desktop Kanan) */}
        {/* ======================================================= */}
        <div className="relative w-full lg:w-[52%] h-[35vh] sm:h-[45vh] lg:h-screen order-2 lg:order-2 flex items-center justify-center lg:justify-end">
          <motion.img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-contain object-bottom lg:object-right-bottom lg:-translate-x-32"
            initial={{ opacity: 0, scale: 0.92, filter: 'blur(6px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          />
        </div>

        {/* ======================================================= */}
        {/* 3. DESKRIPSI, TOMBOL, & SOSMED (Di Mobile di Bawah Foto, Di Desktop di Kiri) */}
        {/* ======================================================= */}
        <motion.div
          className="w-full lg:w-[46%] flex flex-col items-center text-center lg:items-start lg:text-left justify-center order-3 lg:order-1"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          {/* JUDUL INI HANYA MUNCUL DI DESKTOP (Hidden di Mobile) */}
          <div className="hidden lg:flex flex-col items-start w-full">
            <motion.div className="flex items-center gap-2 mb-6 text-sm tracking-widest text-gray-400 uppercase" variants={fadeUp}>
              <span className="h-px w-8 bg-gray-500" />
              I'M A
            </motion.div>

            <motion.div className="relative inline-block mb-10 mt-4" variants={fadeUp}>
              <span className="absolute -top-3 -left-3 w-3 h-3 bg-white" />
              <span className="absolute -top-3 -right-3 w-3 h-3 bg-white" />
              <span className="absolute -bottom-3 -left-3 w-3 h-3 bg-white" />
              <span className="absolute -bottom-3 -right-3 w-3 h-3 bg-white" />
              <div className="absolute inset-0 border border-white/60" />
              <span className="absolute -top-7 left-0 text-xs tracking-widest text-gray-400 uppercase">
                Job
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] px-6 py-5">
                Full Stack
                <br />
                Website Developer
              </h1>
            </motion.div>
          </div>

          {/* Sisa konten ini otomatis center di mobile, rata kiri di desktop */}
          <motion.p
            className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-6 lg:mb-10 max-w-md lg:max-w-lg"
            variants={fadeUp}
          >
            I build modern, responsive, and scalable web applications with clean
            code, great performance, and an exceptional user experience —
            turning ideas into polished digital products.
          </motion.p>

          {/* Buttons */}
          <motion.div className="mb-8 lg:mb-12" variants={fadeUp}>
            <div className="relative inline-flex items-center gap-3 px-2 py-1.5 md:px-2.5 md:py-2">
              <span className="absolute -top-[3px] -left-[3px] w-[7px] h-[7px] bg-white z-10" />
              <span className="absolute -top-[3px] -right-[3px] w-[7px] h-[7px] bg-white z-10" />
              <span className="absolute -bottom-[3px] -left-[3px] w-[7px] h-[7px] bg-white z-10" />
              <span className="absolute -bottom-[3px] -right-[3px] w-[7px] h-[7px] bg-white z-10" />
              <div className="absolute inset-0 border border-white/40 pointer-events-none" />

              <a
                href="mailto:rasyabaswara7@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-full font-medium text-xs md:text-sm hover:bg-gray-200 transition-colors"
              >
                Hire Me
              </a>
              <a
                href="https://github.com/RasyaAbhista"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gray-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-medium text-xs md:text-sm hover:border-white transition-colors"
              >
                View Projects
              </a>
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div variants={fadeUp}>
            <p className="text-xs tracking-widest text-gray-500 uppercase mb-4">Follow Me</p>
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a
                href="https://wa.me/6289601191094"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-gray-700 text-white hover:bg-white hover:text-black transition-colors"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.84.5 3.56 1.36 5.03L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.07a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.12.82.83-3.04-.2-.32a8.18 8.18 0 0 1-1.26-4.36c0-4.52 3.68-8.2 8.21-8.2 2.19 0 4.25.86 5.8 2.4a8.14 8.14 0 0 1 2.41 5.8c0 4.52-3.7 8.22-8.19 8.22zm4.49-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.4-.12-.56.12-.17.25-.64.81-.78.97-.15.17-.29.19-.54.06-1.45-.72-2.4-1.29-3.36-2.93-.25-.44.25-.41.72-1.36.08-.17.04-.31-.04-.43-.08-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43-.14 0-.31 0-.48 0-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.13.16 1.76 2.69 4.27 3.66 2.04.8 2.46.64 2.9.6.44-.04 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28z" />
                </svg>
              </a>
              <a href="mailto:rasyabaswara7@gmail.com" className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-gray-700 text-white hover:bg-white hover:text-black transition-colors">
                <Mail size={16} />
              </a>
              <a href="https://www.linkedin.com/in/rasya-abhista-indrabaswara/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-gray-700 text-white hover:bg-white hover:text-black transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="https://github.com/RasyaAbhista" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-gray-700 text-white hover:bg-white hover:text-black transition-colors">
                <Github size={16} />
              </a>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}