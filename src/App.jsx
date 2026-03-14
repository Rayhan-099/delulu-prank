import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useStore } from './store/appState';
import AudioController from './components/Shared/AudioController';
import Envelope from './components/Wholesome/Envelope';
import Letter from './components/Wholesome/Letter';
import StarJar from './components/Wholesome/StarJar';
import LoadingTerminal from './components/Meme/LoadingTerminal';
import RageBait from './components/Meme/RageBait';
import Aftermath from './components/Meme/Aftermath';

function App() {
  const phase = useStore((state) => state.phase);

  const getBackgroundColor = () => {
    if (phase === 'ragebait' || phase === 'aftermath') return 'var(--color-bg-void-black)';
    if (phase === 'jar_of_stars' || phase === 'loading') return '#1A1A2E'; // Calming dark night sky
    return 'var(--color-bg-pastel-pink)';
  };

  return (
    <div className="w-full h-full relative" style={{
      backgroundColor: getBackgroundColor(),
      transition: 'background-color 2s ease-in-out'
    }}>
      <AudioController />

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
