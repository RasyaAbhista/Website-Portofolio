import { motion } from "framer-motion"

const aboutParagraphs = [
  "I am Rasya Abhista Indrabaswara, a sixth-semester Computer Science undergraduate at Universitas Multimedia Nusantara with a strong interest in Full Stack Web Development, Mobile Development, and AI.",
  "I have experience building academic and personal projects using React Native, Laravel, Supabase, JavaScript, PHP, and PostgreSQL — ranging from mobile apps and web platforms to machine learning research.",
  "I am passionate about user-centered digital solutions that are functional, scalable, and impactful, with additional experience in UI/UX design and a continuous interest in AI integration and modern dev practices.",
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-black overflow-hidden py-20 lg:py-28"
    >
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      <div className="relative z-20 max-w-[800px] mx-auto px-6 md:px-12">

        <motion.div
          className="mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="flex items-center gap-3 mb-4"
            variants={fadeUp}
            custom={0}
          >
            <span className="h-px w-10 bg-gray-600" />
            <span className="text-[10px] tracking-[4px] text-gray-500 uppercase font-poppins">
              About Me
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight font-poppins"
            variants={fadeUp}
            custom={0.1}
          >
            Who I Am.
          </motion.h2>
        </motion.div>

        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0.2}
        >
          <span className="absolute -top-3 -left-3 w-3 h-3 bg-white z-10" />
          <span className="absolute -top-3 -right-3 w-3 h-3 bg-white z-10" />
          <span className="absolute -bottom-3 -left-3 w-3 h-3 bg-white z-10" />
          <span className="absolute -bottom-3 -right-3 w-3 h-3 bg-white z-10" />
          <div className="absolute inset-0 border border-white/25 pointer-events-none" />
          <span className="absolute -top-7 left-0 text-[10px] tracking-[3px] text-gray-500 uppercase font-poppins">
            Profile
          </span>

          <div className="px-8 py-8 md:px-10 space-y-4">
            {aboutParagraphs.map((para, i) => (
              <motion.p
                key={i}
                className="text-gray-400 text-sm md:text-base leading-relaxed font-poppins"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeUp}
                custom={0.3 + i * 0.12}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}