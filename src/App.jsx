import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useStore } from './store/appState';
import AudioController from './components/Shared/AudioController';
import FloatingHearts from './components/Shared/FloatingHearts';
import RomanticBorder from './components/Shared/RomanticBorder';
import Envelope from './components/Wholesome/Envelope';
import Letter from './components/Wholesome/Letter';
import StarJar from './components/Wholesome/StarJar';
import LoadingTerminal from './components/Meme/LoadingTerminal';
import RageBait from './components/Meme/RageBait';
import Aftermath from './components/Meme/Aftermath';

function App() {
  const phase = useStore((state) => state.phase);

  const getPhaseClass = () => {
    if (phase === 'ragebait' || phase === 'aftermath') return 'bg-[var(--color-bg-void-black)]';
    if (phase === 'jar_of_stars' || phase === 'loading') return 'bg-gradient-to-t from-[#0f172a] to-[#1e1b4b]';
    return 'bg-wholesome-animated';
  };

  const isWholesome = phase === 'landing' || phase === 'envelope_open';

  return (
    <div className={`w-full h-full relative transition-colors duration-2000 ease-in-out ${getPhaseClass()}`}>
      <AudioController />

      <RomanticBorder />

      {/* Global Floating Hearts in background for wholesome phases */}
      <AnimatePresence>
        {isWholesome && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-0">
            <FloatingHearts count={20} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {phase === 'landing' && (
          <motion.div key="landing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 1 } }} className="absolute inset-0">
            <Envelope />
          </motion.div>
        )}

        {phase === 'envelope_open' && (
          <motion.div key="envelope_open" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 2 } }} className="absolute inset-0">
            <Letter />
          </motion.div>
        )}

        {phase === 'jar_of_stars' && (
          <motion.div key="jar_of_stars" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
            <StarJar />
          </motion.div>
        )}

        {phase === 'loading' && (
          <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
            <LoadingTerminal />
          </motion.div>
        )}

        {phase === 'ragebait' && (
          <motion.div key="ragebait" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
            <RageBait />
          </motion.div>
        )}

        {phase === 'aftermath' && (
          <motion.div key="aftermath" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
            <Aftermath />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
