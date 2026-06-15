import { motion } from 'framer-motion'

const invertedIcons = new Set(['Expo', 'GitHub', 'n8n'])

const techs = [
  { name: 'React',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Expo',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg' },
  { name: 'Laravel',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'PHP',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'JavaScript',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Python',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Supabase',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
  { name: 'PostgreSQL',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MySQL',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'TensorFlow',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'Scikit-Learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
  { name: 'n8n',          icon: 'https://cdn.simpleicons.org/n8n/EA4B71' },
  { name: 'Git',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Figma',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Firebase',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg' },
  { name: 'Midtrans',     icon: null },
]

const row1 = techs.slice(0, 8)
const row2 = techs.slice(8, 14)
const row3 = techs.slice(14)

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
}

const iconPop = {
  hidden: { opacity: 0, scale: 0.4, y: 20, rotate: -8 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    transition: { type: 'spring' as const, stiffness: 260, damping: 18, mass: 0.6, delay },
  }),
}

function TechItem({ tech, delay }: { tech: typeof techs[0]; delay: number }) {
  const isInverted = invertedIcons.has(tech.name)
  return (
    <motion.div
      className="flex flex-col items-center gap-2 group"
      variants={iconPop}
      custom={delay}
    >
      <motion.div
        className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center"
        whileHover={{ scale: 1.15, y: -4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      >
        {tech.icon ? (
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-9 h-9 object-contain"
            style={isInverted ? { filter: 'brightness(0) invert(1)' } : undefined}
          />
        ) : (
          <span className="text-xs font-bold text-gray-400 font-poppins">
            {tech.name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </motion.div>
      <span className="text-[9px] tracking-[2px] uppercase text-white font-poppins group-hover:text-gray-400 transition-colors duration-300 text-center leading-tight max-w-[64px]">
        {tech.name}
      </span>
    </motion.div>
  )
}

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="relative w-full bg-black overflow-hidden py-24 lg:py-32">

      {/* Top & bottom fade */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1000px] mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-5"
            variants={fadeUp}
            custom={0}
          >
            <span className="h-px w-10 bg-gray-600" />
            <span className="text-[10px] tracking-[4px] text-gray-500 uppercase font-poppins">Skills</span>
            <span className="h-px w-10 bg-gray-600" />
          </motion.div>
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white font-poppins mb-3"
            variants={fadeUp}
            custom={0.1}
          >
            Tech Stack.
          </motion.h2>
          <motion.p
            className="text-gray-600 text-sm font-poppins tracking-wide"
            variants={fadeUp}
            custom={0.18}
          >
            Languages, frameworks, and tools I work with.
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

          <motion.div
            className="px-8 py-10 md:px-12 md:py-12 flex flex-col items-center gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {row1.map((tech, i) => (
                <TechItem key={tech.name} tech={tech} delay={i * 0.05} />
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {row2.map((tech, i) => (
                <TechItem key={tech.name} tech={tech} delay={(row1.length + i) * 0.05} />
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {row3.map((tech, i) => (
                <TechItem key={tech.name} tech={tech} delay={(row1.length + row2.length + i) * 0.05} />
              ))}
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}