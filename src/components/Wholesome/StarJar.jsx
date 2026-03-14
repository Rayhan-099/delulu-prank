import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../../store/appState';
import { playSound } from '../Shared/AudioController';
import { Star } from 'lucide-react';

const starMessages = [
    "You matter more than you think.",
    "You make someone's day brighter.",
    "Your presence is appreciated.",
    "You're stronger than you realize.",
    "Someone notices the little things you do.",
    "And they wanted you to know..."
];

export default function StarJar() {
    const setPhase = useStore((state) => state.setPhase);
    const [stars, setStars] = useState(
        starMessages.map((msg, index) => ({
            id: index,
            message: msg,
            clicked: false,
            xOffset: Math.random() * 60 - 30, // Random scatter in jar
            yOffset: Math.random() * 40 - 20,
        }))
    );

    const [activeMessage, setActiveMessage] = useState(null);

    useEffect(() => {
        playSound('night_ambience');
    }, []);

    const handleStarClick = (id) => {
        if (stars.find(s => s.id === id).clicked) return;

        playSound('sparkle_chime');

        setStars(prev => prev.map(star =>
            star.id === id ? { ...star, clicked: true } : star
        ));

        // Set active message specifically for this star
        setActiveMessage(stars.find(s => s.id === id).message);

        // Clear message after 3 seconds unless it's the last one
        if (id !== starMessages.length - 1) {
            setTimeout(() => {
                setActiveMessage(null);
            }, 3500);
        }
    };

    const allClicked = stars.every(s => s.clicked);

    const handleReveal = () => {
        playSound('soft_page_turn');
        setPhase('loading');
    };

    return (
        <div className="flex flex-col items-center h-full w-full justify-end pb-20 relative overflow-hidden bg-gradient-to-t from-[#0f172a] to-[#1e1b4b]">

            {/* Background Twinkling Stars */}
            <div className="absolute inset-0 z-0 opacity-60">
                {[...Array(40)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{
                            width: Math.random() * 3 + 1 + 'px',
                            height: Math.random() * 3 + 1 + 'px',
                            top: Math.random() * 100 + '%',
                            left: Math.random() * 100 + '%'
                        }}
                        animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
                        transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, delay: Math.random() * 5 }}
                    />
                ))}
            </div>

            {/* Title / Instruction */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 2 }}
                className="absolute top-20 text-center w-full px-4 z-10"
            >
                <p className="text-xl text-[var(--color-bg-lavender)] drop-shadow-md">
                    Each star contains something someone wanted to tell you.
                </p>
                <p className="text-lg text-[var(--color-bg-lavender)]/70 mt-2">
                    Click the jar to open them.
                </p>
            </motion.div>

            {/* Floating Active Message Container */}
            <AnimatePresence>
                {activeMessage && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        animate={{ opacity: 1, y: -40, scale: 1 }}
                        exit={{ opacity: 0, y: -100, transition: { duration: 1 } }}
                        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-4/5 max-w-sm"
                    >
                        <div className="backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl text-center">
                            <p className="text-4xl text-[#FFF5EE] tracking-wide cursive-text drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                                {activeMessage}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Container for Stars and Jar */}
            <div className="relative w-72 h-72 flex justify-center items-end mt-40">

                {/* The Glass Jar Visual */}
                <div className="absolute bottom-0 w-56 h-64 bg-white/5 border border-white/30 rounded-b-[40px] rounded-t-xl backdrop-blur-md shadow-[inset_0_0_30px_rgba(255,255,255,0.2),0_10px_40px_rgba(0,0,0,0.5)] flex justify-center z-10">
                    <div className="absolute -top-5 w-36 h-8 border-2 border-white/40 bg-white/10 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)]"></div>
                    <div className="absolute top-1 w-32 h-2 bg-white/20 rounded-full blur-[2px]"></div>

                    {/* Render individual stars inside mapped out bounds */}
                    {stars.map((star) => (
                        <AnimatePresence key={star.id}>
                            {!star.clicked && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        x: star.xOffset,
                                        y: star.yOffset - 30,
                                    }}
                                    exit={{ opacity: 0, y: -400, scale: 2 }}
                                    whileHover={{ scale: 1.2, filter: 'brightness(1.5) drop-shadow(0 0 10px #fef08a)' }}
                                    onClick={() => handleStarClick(star.id)}
                                    className="absolute bottom-16 cursor-pointer p-2 z-20"
                                >
                                    <Star
                                        className="text-yellow-200 fill-yellow-200/60 drop-shadow-[0_0_15px_rgba(255,255,0,0.8)] animate-pulse"
                                        size={36}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    ))}
                </div>
            </div>
            <AnimatePresence>
                {allClicked && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: 1 } }}
                        onClick={handleReveal}
                        className="absolute bottom-8 px-8 py-3 bg-white text-gray-900 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform z-30"
                    >
                        Reveal who it is
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
