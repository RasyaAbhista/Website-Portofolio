import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { LoadingStage, TimelineSpeed } from './types';
import PlaceholderSection from './components/PlaceholderSection';
import AestheticChatWorkspace from './components/AestheticChatWorkspace';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import TechStackSection from './components/TechStackSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection'
import EducationSection from './components/EducationSection'
import ExperienceSection from './components/ExperienceSection'

export default function App() {
  const [stage, setStage] = useState<LoadingStage>(LoadingStage.CHATBOX_ENTRANCE);
  const [speed, setSpeed] = useState<TimelineSpeed>('normal');

  return (
    <div className="relative min-h-screen bg-[#070709] text-neutral-100 font-sans">

      <AnimatePresence>
        {stage !== LoadingStage.SPLASH && stage !== LoadingStage.HERO_REVEAL && (
          <motion.div
            key="workspace"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              y: "-25vh",
              opacity: 0,
              transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
            }}
            className="fixed inset-0 w-full min-h-screen overflow-hidden"
          >
            <AestheticChatWorkspace speed={speed} onComplete={() => setStage(LoadingStage.HERO_REVEAL)} />
          </motion.div>
        )}
      </AnimatePresence>

      {stage === LoadingStage.HERO_REVEAL && (
        <motion.div
          key="hero"
          initial={{ y: "100vh", scale: 0.95 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full bg-black overflow-hidden"
        >
          <HeroSection />

          <AboutSection />

          <ProjectsSection />
          <TechStackSection />
          <CertificationsSection />

          <ExperienceSection />
          <EducationSection />
          <ContactSection />
        </motion.div>
      )}
    </div>
  );
}