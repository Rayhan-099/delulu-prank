import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../../store/appState';
import { playSound } from '../Shared/AudioController';

export default function Envelope() {
    const setPhase = useStore((state) => state.setPhase);
    const unlockAudio = useStore((state) => state.unlockAudio);

    const handleOpen = () => {
        unlockAudio();
        playSound('paper_rustle');
        setPhase('envelope_open');
    };

    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-8"
            >
                <p className="text-2xl text-[var(--color-text-warm-white)] drop-shadow-md">
                    Someone who cares about you left a message.
                </p>
                <p className="text-xl text-[var(--color-text-warm-white)]/80 mt-2">
                    Open the envelope to read it.
                </p>
            </motion.div>

            <motion.button
                onClick={handleOpen}
                className="relative group cursor-pointer"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {/* Simple CSS Envelope Graphic for now */}
                <div className="w-64 h-48 bg-white rounded-lg shadow-xl overflow-hidden relative border-t-[80px] border-t-gray-100 border-x-[128px] border-x-gray-200 border-b-[80px] border-b-gray-300">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[120%] z-10">
                        <div className="w-12 h-12 bg-[var(--color-envelope-red)] rounded-full shadow-inner flex items-center justify-center">
                            <span className="text-white text-xs opacity-80">❤</span>
                        </div>
                    </div>
                </div>
            </motion.button>
        </div>
    );
}
