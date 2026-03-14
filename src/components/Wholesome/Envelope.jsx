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
        <div className="flex flex-col items-center justify-center h-full w-full relative">
            {/* Decorative Pinterest Stickers */}
            <motion.img
                src="/assets/images/bow.png"
                alt="cute bow"
                className="absolute top-[15%] left-[10%] w-24 h-24 object-contain mix-blend-multiply opacity-80 rotate-[-15deg]"
                animate={{ y: [0, -10, 0], rotate: [-15, -10, -15] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
                src="/assets/images/stars.png"
                alt="cute stars"
                className="absolute bottom-[20%] left-[15%] w-20 h-20 object-contain mix-blend-multiply opacity-70 rotate-[10deg]"
                animate={{ y: [0, 8, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.img
                src="/assets/images/strawberry.png"
                alt="cute strawberry"
                className="absolute top-[25%] right-[15%] w-20 h-20 object-contain mix-blend-multiply opacity-90 rotate-[15deg]"
                animate={{ y: [0, -12, 0], rotate: [15, 20, 15] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />

            {/* Floating Hearts Background */}
            {[...Array(6)].map((_, i) => (
                <motion.img
                    key={i}
                    src="/assets/images/floating_heart.png"
                    alt="floating heart"
                    className="absolute w-12 h-12 object-contain mix-blend-multiply opacity-50 z-0"
                    initial={{
                        x: Math.random() * window.innerWidth - window.innerWidth / 2,
                        y: window.innerHeight / 2 + 100
                    }}
                    animate={{
                        y: [-100, -window.innerHeight],
                        x: (Math.random() - 0.5) * 200 + (Math.random() * window.innerWidth - window.innerWidth / 2),
                        rotate: [0, 360],
                        opacity: [0, 0.6, 0]
                    }}
                    transition={{
                        duration: 8 + Math.random() * 4,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "linear"
                    }}
                />
            ))}

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12 z-10 px-4"
            >
                <p className="text-3xl md:text-5xl text-[#D9534F] drop-shadow-sm font-bold tracking-tight">
                    Someone who cares about you left a message.
                </p>
                <p className="text-xl md:text-2xl text-[#D9534F]/90 mt-4 font-medium">
                    Open the envelope to read it.
                </p>
            </motion.div>

            <motion.button
                onClick={handleOpen}
                className="relative group cursor-pointer z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {/* Simple CSS Envelope Graphic for now, but made cuter */}
                <div className="w-[320px] h-[220px] bg-[#fffbfa] rounded-2xl shadow-2xl overflow-hidden relative border-t-[100px] border-t-pink-100 border-x-[160px] border-x-pink-200 border-b-[100px] border-b-pink-300 transition-all group-hover:shadow-[0_20px_50px_rgba(255,192,203,0.5)]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-10 group-hover:scale-110 transition-transform">
                        <img src="/assets/images/wax_seal.png" alt="wax seal" className="w-20 h-20 mix-blend-multiply opacity-90" />
                    </div>
                </div>
            </motion.button>
        </div>
    );
}
