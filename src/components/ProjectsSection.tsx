import { ExternalLink, Download, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

import darahKitaImg from '../assets/project/DarahKita.png';
import klikKameraImg from '../assets/project/klikkamera.png';
import nusaTenggaraImg from '../assets/project/nusatenggara.png';
import tixGoImg from '../assets/project/TixGo.png';

const invertedIcons = new Set(['Expo', 'GitHub'])

const techIcons: Record<string, string> = {
  // React ecosystem
  'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  // Expo
  'Expo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg',
  // Supabase
  'Supabase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
  'Supabase Authentication': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
  'Supabase Realtime': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
  // DB
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  // Languages
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  // Frameworks/tools
  'Laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
  'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  // ML
  'TensorFlow / Keras': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  'Pandas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
  'NumPy': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
  // Maps
  'Google Maps API / Leaflet': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
  'Google OAuth': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
  // Streamlit
  'Streamlit': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg',
}

const projects = [
  {
    id: '01',
    title: 'DarahKita',
    year: '2026',
    description:
      'A mobile app connecting blood donors with recipients using real-time location data. Features interactive maps showing hospitals and donation events, QR-code verified check-ins, and a gamification system that rewards donors with XP and redeemable points.',
    image: darahKitaImg,
    imageFit: 'cover' as const,
    tech: ['React Native', 'Expo', 'Supabase', 'PostgreSQL', 'Supabase Authentication', 'Supabase Realtime', 'React Native Maps', 'Geolocation API', 'QR/Barcode Scanner', 'JavaScript'],
    links: [
      { label: 'Download Aplikasi', url: 'https://drive.google.com/file/d/1pqH3Md3Kw2eBK5lq9s1JVOlgzEsO5OAG/view?usp=sharing', icon: 'download' as const },
      { label: 'Lihat Video', url: 'https://drive.google.com/file/d/1eHZDg0yeWJD5hWsOwj2W4j-doQQhNqAo/view?usp=drive_link', icon: 'video' as const },
    ],
  },
  {
    id: '02',
    title: 'KlikKamera',
    year: 'Ongoing',
    description:
      'A full-stack camera rental platform with React frontend and Laravel backend. Includes Midtrans payment gateway, Google OAuth, email OTP authentication, and a complete rental management system with REST API architecture.',
    image: klikKameraImg,
    imageFit: 'contain' as const,
    tech: ['React', 'Laravel', 'PHP', 'MySQL', 'phpMyAdmin', 'Midtrans Payment Gateway', 'Google OAuth', 'Email OTP Authentication', 'REST API', 'Git', 'GitHub'],
    links: [
      { label: 'Lihat Project', url: '#', icon: 'external' as const },
    ],
  },
  {
    id: '03',
    title: 'Explore NTT',
    year: '2023',
    description:
      'A tourism website promoting East Nusa Tenggara destinations with real-time OpenWeather and BMKG earthquake data integration. Features interactive maps, cultural content, and responsive design for a full digital travel experience.',
    image: nusaTenggaraImg,
    imageFit: 'contain' as const,
    tech: ['React', 'HTML', 'CSS', 'JavaScript', 'OpenWeather API', 'BMKG API', 'Google Maps API / Leaflet', 'REST API Integration'],
    links: [
      { label: 'Lihat Project', url: 'https://nusa-tenggara-timur-landing-page.vercel.app/', icon: 'external' as const },
    ],
  },
  {
    id: '04',
    title: 'TixGo',
    year: '2026',
    description:
      'A campus event platform prototype for Tangerang universities. Users browse events, register digitally, and check in via QR/barcode scanning. Organizers manage attendees and the system auto-generates PDF certificates for participants.',
    image: tixGoImg,
    imageFit: 'cover' as const,
    tech: ['React Native', 'Expo', 'JavaScript', 'Figma', 'QR/Barcode Scanner', 'PDF Generation', 'UI/UX Design'],
    links: [
      { label: 'Lihat Project', url: 'https://github.com/RasyaAbhista/TixGo', icon: 'external' as const },
    ],
  },
]

const featuredProjects = [
  {
    id: '05',
    title: 'Hospital LoS Prediction',
    year: '2025',
    description:
      'A machine learning research project comparing Linear Regression, Random Forest, and CNN for predicting patient hospitalization duration. Covers full pipeline: preprocessing, feature analysis, training, evaluation, and comparative analysis.',
    tech: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'Scikit-Learn', 'TensorFlow / Keras', 'Linear Regression', 'Random Forest', 'Convolutional Neural Network (CNN)', 'Data Visualization'],
    links: [
      { label: 'Lihat Project', url: 'https://github.com/RasyaAbhista/Hospital-LoS-Prediction', icon: 'external' as const },
    ],
  },
  {
    id: '06',
    title: 'FitConnect',
    year: '2025',
    description:
      'A fitness mobile app UI/UX concept combining activity tracking, XP-based leveling, and community challenges. Designed around user-centered principles with clean navigation and social features to drive long-term exercise consistency.',
    tech: ['Figma', 'UI/UX Design', 'User Research', 'Wireframing', 'Prototyping', 'Design System'],
    links: [
      { label: 'Lihat di Figma', url: 'https://www.figma.com/design/Hk2xR9Oft8MXJxtRiV47sV/Fit-Connect?t=c35QzYk5pyifk2Gg-0', icon: 'external' as const },
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

const slideX = {
  hidden: (fromLeft: boolean) => ({ opacity: 0, x: fromLeft ? -120 : 120, filter: 'blur(4px)' }),
  visible: () => ({
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring' as const, stiffness: 70, damping: 16, mass: 0.8 },
  }),
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
}

function TechBadge({ name }: { name: string }) {
  const icon = techIcons[name]
  const isInverted = invertedIcons.has(name)
  return (
    <div className="flex items-center gap-1.5 px-2.5 py-1.5 border border-white/10 bg-white/[0.03]">
      {icon ? (
        <img
          src={icon}
          alt={name}
          className="w-3.5 h-3.5 object-contain"
          style={isInverted ? { filter: 'brightness(0) invert(1)' } : undefined}
        />
      ) : (
        <span className="w-1.5 h-1.5 rounded-full bg-gray-600 flex-shrink-0" />
      )}
      <span className="text-[10px] tracking-wider uppercase font-poppins text-gray-500 whitespace-nowrap">{name}</span>
    </div>
  )
}

type LinkIcon = 'external' | 'download' | 'video'

interface ProjectLink {
  label: string
  url: string
  icon: LinkIcon
}

function LinkIconEl({ icon }: { icon: LinkIcon }) {
  if (icon === 'download') return <Download size={13} />
  if (icon === 'video') return <PlayCircle size={13} />
  return <ExternalLink size={13} />
}

function ProjectLinks({ links }: { links: ProjectLink[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium font-poppins text-white border border-white/30 px-5 py-2.5 hover:bg-white hover:text-black transition-colors duration-200"
        >
          {l.label}
          <LinkIconEl icon={l.icon} />
        </a>
      ))}
    </div>
  )
}

interface Project {
  id: string
  title: string
  year: string
  description: string
  image?: string
  imageFit?: 'cover' | 'contain'
  tech: string[]
  links: ProjectLink[]
}

interface ProjectCardProps {
  project: Project
  reverse: boolean
}

function ProjectCard({ project, reverse }: ProjectCardProps) {
  const fit = project.imageFit ?? 'cover'

  return (
    <motion.div
      className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} w-full border-b border-white/10`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={slideX}
      custom={!reverse}
    >

      {/* Image side */}
      <motion.div
        className="w-full lg:w-1/2 relative overflow-hidden bg-black min-h-[300px] lg:min-h-[480px] m-6 lg:m-10 lg:my-12 flex-shrink-0 lg:w-[calc(50%-5rem)] flex items-center justify-center"
        variants={fadeUp}
        custom={0.1}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className={`absolute inset-0 w-full h-full ${fit === 'cover' ? 'object-cover' : 'object-contain'}`}
          />
        ) : (
          <>
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[120px] font-bold text-white/[0.04] select-none font-poppins leading-none">
                {project.id}
              </span>
            </div>
          </>
        )}
      </motion.div>

      {/* Text side — with boundary box */}
      <div className="w-full lg:flex-1 flex flex-col justify-center px-6 lg:px-10 py-8 lg:py-12">

        <motion.div className="flex items-center gap-3 mb-5" variants={fadeUp} custom={0.2}>
          <span className="h-px w-8 bg-gray-600" />
          <span className="text-[10px] tracking-[4px] text-gray-500 uppercase font-poppins">
            {project.year}
          </span>
        </motion.div>

        {/* Title */}
        <motion.div className="relative mb-6" variants={fadeUp} custom={0.3}>
          <span className="absolute -top-6 -left-1 text-[56px] font-bold text-white/[0.04] select-none font-poppins leading-none pointer-events-none">
            {project.id}
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-white font-poppins leading-tight">
            {project.title}
          </h3>
        </motion.div>

        {/* Boundary box: description + tech + button */}
        <motion.div className="relative" variants={fadeUp} custom={0.4}>
          {/* Corner dots */}
          <span className="absolute -top-2 -left-2 w-2.5 h-2.5 bg-white z-10" />
          <span className="absolute -top-2 -right-2 w-2.5 h-2.5 bg-white z-10" />
          <span className="absolute -bottom-2 -left-2 w-2.5 h-2.5 bg-white z-10" />
          <span className="absolute -bottom-2 -right-2 w-2.5 h-2.5 bg-white z-10" />
          <div className="absolute inset-0 border border-white/20 pointer-events-none" />

          <div className="px-6 py-6 space-y-6">

            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-poppins">
              {project.description}
            </p>

            {/* Tech stack icons */}
            <div>
              <p className="text-[9px] tracking-[3px] uppercase text-gray-600 font-poppins mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => <TechBadge key={t} name={t} />)}
              </div>
            </div>

            <ProjectLinks links={project.links} />

          </div>
        </motion.div>

      </div>
    </motion.div>
  )
}

interface FeaturedCardProps {
  project: Project
}

function FeaturedCard({ project }: FeaturedCardProps) {
  return (
    <motion.div
      className="relative w-full max-w-3xl mx-auto flex flex-col items-center text-center px-6 lg:px-10 py-16 lg:py-20 border-b border-white/10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={scaleIn}
    >
      {/* Giant ghost number */}
      <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[120px] lg:text-[160px] font-bold text-white/[0.03] select-none font-poppins leading-none pointer-events-none">
        {project.id}
      </span>

      <motion.div className="relative flex items-center gap-3 mb-5" variants={fadeUp} custom={0.1}>
        <span className="h-px w-8 bg-gray-600" />
        <span className="text-[10px] tracking-[4px] text-gray-500 uppercase font-poppins">
          {project.year}
        </span>
        <span className="h-px w-8 bg-gray-600" />
      </motion.div>

      <motion.h3
        className="relative text-3xl md:text-4xl font-bold text-white font-poppins leading-tight mb-6"
        variants={fadeUp}
        custom={0.2}
      >
        {project.title}
      </motion.h3>

      {/* Boundary box: description + tech + button */}
      <motion.div className="relative w-full max-w-2xl" variants={fadeUp} custom={0.3}>
        {/* Corner dots */}
        <span className="absolute -top-2 -left-2 w-2.5 h-2.5 bg-white z-10" />
        <span className="absolute -top-2 -right-2 w-2.5 h-2.5 bg-white z-10" />
        <span className="absolute -bottom-2 -left-2 w-2.5 h-2.5 bg-white z-10" />
        <span className="absolute -bottom-2 -right-2 w-2.5 h-2.5 bg-white z-10" />
        <div className="absolute inset-0 border border-white/20 pointer-events-none" />

        <div className="px-6 py-8 space-y-6 flex flex-col items-center">

          <p className="text-gray-400 text-sm md:text-base leading-relaxed font-poppins">
            {project.description}
          </p>

          {/* Tech stack icons */}
          <div className="w-full">
            <p className="text-[9px] tracking-[3px] uppercase text-gray-600 font-poppins mb-3">Tech Stack</p>
            <div className="flex flex-wrap justify-center gap-2">
              {project.tech.map(t => <TechBadge key={t} name={t} />)}
            </div>
          </div>

          <ProjectLinks links={project.links} />

        </div>
      </motion.div>

    </motion.div>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full bg-black overflow-hidden">

      {/* Section header */}
      <motion.div
        className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pt-24 pb-16 border-b border-white/10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="flex items-center gap-3 mb-5">
          <span className="h-px w-10 bg-gray-600" />
          <span className="text-[10px] tracking-[4px] text-gray-500 uppercase font-poppins">
            Selected Work
          </span>
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-white font-poppins leading-tight">
          Projects.
        </h2>
      </motion.div>

      {/* Project list (with images, alternating sides) */}
      <div className="relative z-10 max-w-[1400px] mx-auto">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} reverse={i % 2 !== 0} />
        ))}
      </div>

      {/* Featured projects (no image, centered) */}
      <div className="relative z-10 max-w-[1400px] mx-auto">
        {featuredProjects.map((project) => (
          <FeaturedCard key={project.id} project={project} />
        ))}
      </div>

    </section>
  )
}