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

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12 z-10 px-4"
            >
                <p className="text-3xl md:text-4xl text-[#D9534F] drop-shadow-sm font-bold tracking-tight">
                    Someone who cares about you left a message.
                </p>
                <p className="text-xl md:text-2xl text-[#D9534F]/80 mt-3 font-medium">
                    Open the envelope to read it.
                </p>
            </motion.div>

            <motion.button
                onClick={handleOpen}
                className="relative group cursor-pointer z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {/* Simple CSS Envelope Graphic for now, but made cuter */}
                <div className="w-72 h-48 bg-[#fffbfa] rounded-xl shadow-xl overflow-hidden relative border-t-[80px] border-t-pink-100 border-x-[144px] border-x-pink-200 border-b-[80px] border-b-pink-300 transition-all group-hover:shadow-2xl">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[120%] z-10 group-hover:scale-110 transition-transform">
                        <div className="w-14 h-14 bg-[#ff6b81] rounded-full shadow-md flex items-center justify-center border-4 border-[#fffbfa]">
                            <span className="text-white text-xl">❤</span>
                        </div>
                    </div>
                </div>
            </motion.button>
        </div>
    );
}
