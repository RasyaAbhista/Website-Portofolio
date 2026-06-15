import { motion } from 'framer-motion';

interface PlaceholderSectionProps {
  id: string;
  title: string;
  description: string;
}

export default function PlaceholderSection({ id, title, description }: PlaceholderSectionProps) {
  return (
    <section
      id={id}
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black text-white font-poppins px-6 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-4xl md:text-6xl font-bold mb-6"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-gray-400 text-base md:text-lg max-w-xl"
      >
        {description}
      </motion.p>
    </section>
  );
}
