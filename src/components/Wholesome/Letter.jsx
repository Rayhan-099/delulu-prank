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
        <div className="flex flex-col items-center justify-center h-full w-full px-4 overflow-y-auto pt-20 pb-20">

            <div className="w-full max-w-md bg-white text-gray-800 shadow-2xl rounded-sm p-8 space-y-6 relative" onClick={handleNextFold}>

                {folds.map((fold, index) => (
                    <AnimatePresence key={fold.id}>
                        {index <= currentFoldIndex && (
                            <motion.div
                                initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                                animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}
                                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                                className="text-2xl text-center border-b border-gray-100 pb-4 last:border-0"
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
                        className="text-center text-sm text-gray-400 mt-8 animate-pulse"
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
                        className="mt-8 px-8 py-3 bg-[var(--color-bg-lavender)] text-gray-800 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                    >
                        Continue
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
