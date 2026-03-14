import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../../store/appState';
import { playSound } from '../Shared/AudioController';

const folds = [
    { id: 1, text: "You have a way of making people smile." },
    { id: 2, text: "Your energy makes the world feel lighter." },
    { id: 3, text: "Someone really appreciates having you in their life." },
    { id: 4, text: "And they wanted you to know something important..." },
];

export default function Letter() {
    const [currentFoldIndex, setCurrentFoldIndex] = useState(0);
    const setPhase = useStore((state) => state.setPhase);

    const handleNextFold = () => {
        if (currentFoldIndex < folds.length - 1) {
            playSound('soft_page_turn');
            setCurrentFoldIndex(prev => prev + 1);
        }
    };

    const handleContinue = () => {
        playSound('soft_page_turn');
        setPhase('jar_of_stars');
    };

    return (
        <div className="flex flex-col items-center justify-center h-full w-full px-4 overflow-y-auto pt-20 pb-20 relative">

            {/* Background Hearts for continuity */}
            <img src="/assets/images/floating_heart.png" className="absolute top-20 right-10 w-16 opacity-30 mix-blend-multiply rotate-12" />
            <img src="/assets/images/floating_heart.png" className="absolute bottom-40 left-10 w-24 opacity-20 mix-blend-multiply -rotate-12" />

            <div className="w-full max-w-md bg-white/40 backdrop-blur-xl text-gray-800 shadow-[0_8px_32px_0_rgba(255,192,203,0.37)] rounded-xl pt-16 pb-12 px-10 space-y-6 relative border border-white/50" onClick={handleNextFold}>

                {/* Cute Wax Seal Pin at the top */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                    <img src="/assets/images/wax_seal.png" alt="seal" className="w-20 h-20 mix-blend-multiply drop-shadow-md" />
                </div>

                {folds.map((fold, index) => (
                    <AnimatePresence key={fold.id}>
                        {index <= currentFoldIndex && (
                            <motion.div
                                initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                                animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}
                                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                                className="text-3xl text-center border-b border-gray-100 pb-6 mb-2 last:border-0 cursive-text text-gray-700 tracking-wide"
                            >
                                {fold.text}
                            </motion.div>
                        )}
                    </AnimatePresence>
                ))}

                {currentFoldIndex < folds.length - 1 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        className="text-center text-sm text-gray-400 mt-8 animate-pulse font-sans"
                    >
                        Tap to unfold...
                    </motion.div>
                )}
            </div>

            <AnimatePresence>
                {currentFoldIndex === folds.length - 1 && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        onClick={handleContinue}
                        className="mt-8 px-8 py-3 bg-[#E6E6FA] text-gray-800 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all font-sans"
                    >
                        Continue
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
