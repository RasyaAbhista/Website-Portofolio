import { motion } from 'framer-motion'
import ppifLogo from '../assets/ppif.webp'
import infiniteLogo from '../assets/infinite.webp'

const experiences = [
  {
    id: 'ppif',
    role: 'PPIF Committee — Encryptor Division',
    org: 'Universitas Multimedia Nusantara',
    logo: ppifLogo,
    points: [
      'Supported the security and operational execution of the Informatics Student Orientation Program (PPIF).',
      'Assisted in participant coordination and ensured activities were conducted according to the event schedule.',
      'Collaborated with committee members to maintain a safe, organized, and engaging environment throughout the event.',
      'Developed teamwork, communication, problem-solving, and event management skills through cross-functional collaboration.',
    ],
  },
  {
    id: 'infinite',
    role: 'Infinite Committee — Logistics Division',
    org: 'Universitas Multimedia Nusantara',
    logo: infiniteLogo,
    points: [
      'Managed event equipment, venue preparation, and logistical requirements for committee activities.',
      'Coordinated the distribution, setup, and maintenance of event resources and facilities.',
      'Ensured all required equipment and materials were available and functioning properly during event operations.',
      'Strengthened organizational, coordination, responsibility, and resource management skills while supporting event success.',
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
}

const cardIn = {
  hidden: (fromLeft: boolean) => ({ opacity: 0, x: fromLeft ? -80 : 80, filter: 'blur(4px)' }),
  visible: () => ({
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring' as const, stiffness: 70, damping: 16, mass: 0.8 },
  }),
}

const logoPop = {
  hidden: { opacity: 0, scale: 0.5, rotate: -10 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: 'spring' as const, stiffness: 220, damping: 16, mass: 0.6, delay },
  }),
}

const pointFade = {
  hidden: { opacity: 0, x: -12 },
  visible: (delay: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative w-full bg-black overflow-hidden py-24 lg:py-32"
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1000px] mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          className="mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="flex items-center gap-3 mb-5" variants={fadeUp} custom={0}>
            <span className="h-px w-10 bg-gray-600" />
            <span className="text-[10px] tracking-[4px] text-gray-500 uppercase font-poppins">
              Track Record
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-poppins leading-tight"
            variants={fadeUp}
            custom={0.1}
          >
            Experience.
          </motion.h2>
        </motion.div>

        {/* Experience cards */}
        <div className="flex flex-col gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardIn}
              custom={i % 2 === 0}
            >
              {/* Corner dots */}
              <span className="absolute -top-2 -left-2 w-2.5 h-2.5 bg-white z-10" />
              <span className="absolute -top-2 -right-2 w-2.5 h-2.5 bg-white z-10" />
              <span className="absolute -bottom-2 -left-2 w-2.5 h-2.5 bg-white z-10" />
              <span className="absolute -bottom-2 -right-2 w-2.5 h-2.5 bg-white z-10" />
              <div className="absolute inset-0 border border-white/20 pointer-events-none" />

              <div className="px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row gap-6 md:gap-10 items-start">

                {/* Circular logo */}
                <motion.div
                  className="flex-shrink-0 mx-auto md:mx-0"
                  variants={logoPop}
                  custom={0.15}
                >
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border border-white/20 bg-white/[0.03]">
                    <img
                      src={exp.logo}
                      alt={exp.role}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Text content */}
                <div className="flex-1">
                  <motion.div variants={fadeUp} custom={0.2}>
                    <h3 className="text-xl md:text-2xl font-bold text-white font-poppins leading-tight mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-gray-500 text-sm font-poppins mb-5">
                      {exp.org}
                    </p>
                  </motion.div>

                  <ul className="space-y-2.5">
                    {exp.points.map((point, pi) => (
                      <motion.li
                        key={pi}
                        className="text-gray-400 text-sm md:text-[15px] leading-relaxed font-poppins flex gap-3"
                        variants={pointFade}
                        custom={0.3 + pi * 0.08}
                      >
                        <span className="text-gray-600 mt-1.5 flex-shrink-0">—</span>
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
