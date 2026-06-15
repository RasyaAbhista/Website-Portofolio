import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import hciaAI from '/src/assets/HCIA-AI V3.5 Course.png'
import hciaGauss from '/src/assets/HCIA-openGauss V1.0 Course.png'
import pythonInter from '/src/assets/intermediate.png'
import pythonIntro from '/src/assets/introduction.png'

const certs = [
  {
    id: 'hcia-ai',
    title: 'HCIA-AI V3.5',
    issuer: 'Huawei Talent Online',
    description: 'Fundamentals of AI and related technologies.',
    image: hciaAI,
    tags: ['AI', 'ML', 'Deep Learning'],
    color: '#e4453a',
    imageHeight: 220,
    imagePosition: 'top center',
  },
  {
    id: 'hcia-gauss',
    title: 'HCIA-openGauss V1.0',
    issuer: 'Huawei ICT Academy',
    description: 'openGauss DB architecture, deployment, and operations.',
    image: hciaGauss,
    tags: ['Database', 'openGauss'],
    color: '#e4453a',
    imageHeight: 220,
    imagePosition: 'top center',
  },
  {
    id: 'python-inter',
    title: 'Python Intermediate',
    issuer: 'SoloLearn',
    description: 'Data structures, modules, error handling.',
    image: pythonInter,
    tags: ['Python', 'OOP'],
    color: '#149EF2',
    imageHeight: 140,
    imagePosition: 'center center',
  },
  {
    id: 'python-intro',
    title: 'Intro to Python',
    issuer: 'SoloLearn',
    description: 'Python syntax, control flow, and functions.',
    image: pythonIntro,
    tags: ['Python', 'Basics'],
    color: '#149EF2',
    imageHeight: 140,
    imagePosition: 'center center',
  },
]

interface Cert {
  id: string
  title: string
  issuer: string
  description: string
  image: string
  tags: string[]
  color: string
  imageHeight: number
  imagePosition: string
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
}

const cardIn = {
  hidden: (rot: number) => ({ opacity: 0, y: 40, scale: 0.85, rotate: rot * 3 }),
  visible: (custom: { rot: number; delay: number }) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: custom.rot,
    transition: { type: 'spring' as const, stiffness: 180, damping: 18, mass: 0.7, delay: custom.delay },
  }),
}

function CertCard({ cert, index, onClick }: { cert: Cert; index: number; onClick: () => void }) {
  const rotations = [-1.5, 1.2, -1, 1.8]
  const rot = rotations[index % rotations.length]

  return (
    <motion.div
      className="group relative cursor-pointer w-[210px] sm:w-[210px] flex-shrink-0"
      variants={cardIn}
      custom={{ rot, delay: index * 0.12 }}
      whileHover={{ rotate: 0, y: -10, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      onClick={onClick}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: `0 0 0 1px ${cert.color}66, 0 12px 40px ${cert.color}1a`,
          zIndex: 10,
        }}
      />

      <div
        className="relative flex flex-col h-[380px]"
        style={{
          background: '#0a0a0a',
          border: '1px solid rgba(255,255,255,0.09)',
        }}
      >
        {/* Color tab */}
        <div style={{ height: '3px', background: cert.color, flexShrink: 0 }} />

        {/* Image */}
        <div style={{
          height: `${cert.imageHeight}px`,
          flexShrink: 0,
          overflow: 'hidden',
          background: '#111',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          position: 'relative',
        }}>
          <img
            src={cert.image}
            alt={cert.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: cert.imagePosition,
              display: 'block',
              filter: 'brightness(0.9)',
              transition: 'transform 0.4s ease, filter 0.3s ease',
            }}
            className="group-hover:scale-105 group-hover:brightness-100"
          />
          {/* Click hint */}
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'rgba(0,0,0,0.35)' }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
            </svg>
          </div>
        </div>

        {/* Info */}
        <div style={{ padding: '11px 13px 13px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <p
            className="font-poppins"
            style={{
              fontSize: '7.5px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: cert.color,
              margin: '0 0 5px 0',
              lineHeight: 1,
            }}
          >
            {cert.issuer}
          </p>
          <h3
            className="font-poppins font-semibold text-white"
            style={{ fontSize: '11.5px', lineHeight: '1.3', margin: '0 0 6px 0' }}
          >
            {cert.title}
          </h3>
          <p
            className="font-poppins"
            style={{
              fontSize: '9px',
              color: 'rgba(255,255,255,0.38)',
              lineHeight: '1.55',
              margin: '0 0 9px 0',
            }}
          >
            {cert.description}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: 'auto' }}>
            {cert.tags.map(tag => (
              <span
                key={tag}
                className="font-poppins"
                style={{
                  fontSize: '7px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.3)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '2px 6px',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function Lightbox({ cert, onClose }: { cert: Cert; onClose: () => void }) {
  return (
    <motion.div
      onClick={onClose}
      initial={{ background: 'rgba(0,0,0,0)', backdropFilter: 'blur(0px)' }}
      animate={{ background: 'rgba(0,0,0,0.82)', backdropFilter: 'blur(18px)' }}
      exit={{ background: 'rgba(0,0,0,0)', backdropFilter: 'blur(0px)' }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="px-4 text-center"
        style={{
          position: 'absolute',
          top: '20px',
          right: '24px',
          left: '24px',
          color: 'rgba(255,255,255,0.5)',
          fontSize: '10px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          fontFamily: 'Poppins, sans-serif',
          pointerEvents: 'none',
        }}
      >
        Klik mana aja untuk tutup
      </motion.div>

      <motion.div
        onClick={e => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.85, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 16 }}
        transition={{ type: 'spring', stiffness: 260, damping: 24, mass: 0.8 }}
        style={{
          maxWidth: '680px',
          width: '100%',
        }}
      >
        <img
          src={cert.image}
          alt={cert.title}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            boxShadow: `0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px ${cert.color}44`,
          }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function CertificationsSection() {
  const [activeCert, setActiveCert] = useState<Cert | null>(null)

  return (
    <section
      id="certifications"
      className="relative w-full bg-black overflow-hidden py-16 sm:py-24 lg:py-32"
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 md:px-12">

        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="flex items-center justify-center gap-3 mb-5" variants={fadeUp} custom={0}>
            <span className="h-px w-10 bg-gray-600" />
            <span className="text-[10px] tracking-[4px] text-gray-500 uppercase font-poppins">Credentials</span>
            <span className="h-px w-10 bg-gray-600" />
          </motion.div>
          <motion.h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-poppins mb-3" variants={fadeUp} custom={0.1}>
            Certifications.
          </motion.h2>
          <motion.p className="text-gray-600 text-sm font-poppins tracking-wide" variants={fadeUp} custom={0.18}>
            Courses and certificates I've completed.
          </motion.p>
        </motion.div>

        {/* Boundary box */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          custom={0.1}
        >
          <span className="absolute -top-3 -left-3 w-3 h-3 bg-white z-10" />
          <span className="absolute -top-3 -right-3 w-3 h-3 bg-white z-10" />
          <span className="absolute -bottom-3 -left-3 w-3 h-3 bg-white z-10" />
          <span className="absolute -bottom-3 -right-3 w-3 h-3 bg-white z-10" />
          <div className="absolute inset-0 border border-white/20 pointer-events-none" />

          <div className="px-4 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14">
            <motion.div
              className="flex justify-start sm:justify-center gap-4 sm:gap-5 flex-nowrap overflow-x-auto sm:overflow-x-visible -mx-4 px-4 sm:mx-0 sm:px-0 pb-2 sm:pb-0 snap-x snap-mandatory sm:snap-none scrollbar-hide"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {certs.map((cert, i) => (
                <div key={cert.id} className="snap-start">
                  <CertCard
                    cert={cert}
                    index={i}
                    onClick={() => setActiveCert(cert)}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

      </div>

      <AnimatePresence>
        {activeCert && (
          <Lightbox cert={activeCert} onClose={() => setActiveCert(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}