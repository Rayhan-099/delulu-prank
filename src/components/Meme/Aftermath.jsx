import React, { useState } from 'react';
import { useStore } from '../../store/appState';
import { motion } from 'framer-motion';

export default function Aftermath() {
    const setPhase = useStore((state) => state.setPhase);
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        const shareData = {
            title: 'A Message Someone Left For You',
            text: 'Someone who cares about you left a message...',
            url: window.location.href,
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.error('Error sharing', err);
            }
        } else {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleRetry = () => {
        setPhase('landing');
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center font-sans px-4 bg-[var(--color-bg-void-black)] text-white">

            <motion.h1
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.8 }}
                className="text-4xl md:text-6xl font-black text-center mb-12 uppercase text-red-500"
            >
                THIS IS WHY YOU'RE DELULU
            </motion.h1>

            <ul className="text-2xl md:text-4xl font-black uppercase text-center space-y-6 mb-16">
                <motion.li initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                    GO DRINK WATER
                </motion.li>
                <motion.li initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 }}>
                    FINISH YOUR WORK
                </motion.li>
                <motion.li initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} className="text-yellow-400">
                    AND TOUCH GRASS
                </motion.li>
            </ul>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="flex flex-col gap-4 w-full max-w-sm"
            >
                <button
                    onClick={handleShare}
                    className="w-full py-4 bg-green-500 hover:bg-green-600 text-white font-black text-lg rounded-xl shadow-lg transition-colors"
                >
                    {copied ? "LINK COPIED!" : "SEND TO ANOTHER DAYDREAMER"}
                </button>

                <button
                    onClick={handleRetry}
                    className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 font-bold text-sm rounded-xl transition-colors"
                >
                    TRY AGAIN
                </button>
            </motion.div>

        </div>
    );
}
