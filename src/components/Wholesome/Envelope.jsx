import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../../store/appState';
import { playSound } from '../Shared/AudioController';
import { BowSVG, SparkleStarsSVG, StrawberrySVG, WaxSealSVG, CloudSVG, FlowerSVG } from '../Shared/Icons';

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
            {/* Decorative Transparent SVGs */}
            <motion.div
                className="absolute top-[10%] left-[5%] w-24 h-24 rotate-[-15deg] pointer-events-none z-10"
                animate={{ y: [0, -10, 0], rotate: [-15, -10, -15] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <BowSVG className="w-full h-full drop-shadow-lg opacity-90" />
            </motion.div>
            <motion.div
                className="absolute top-[12%] right-[10%] w-24 h-24 rotate-[15deg] pointer-events-none z-10"
                animate={{ y: [0, 10, 0], rotate: [15, 20, 15] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
                <CloudSVG className="w-full h-full drop-shadow-lg opacity-90" />
            </motion.div>
            <motion.div
                className="absolute bottom-[20%] left-[10%] w-24 h-24 rotate-[10deg] pointer-events-none z-10"
                animate={{ y: [0, 8, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
                <SparkleStarsSVG className="w-full h-full drop-shadow-lg opacity-90" />
            </motion.div>
            <motion.div
                className="absolute bottom-[25%] right-[10%] w-24 h-24 rotate-[25deg] pointer-events-none z-10"
                animate={{ y: [0, -6, 0], rotate: [25, 30, 25] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
                <FlowerSVG className="w-full h-full drop-shadow-lg opacity-90" />
            </motion.div>
            <motion.div
                className="absolute top-[40%] right-[5%] w-20 h-20 rotate-[-10deg] pointer-events-none z-10"
                animate={{ y: [0, -12, 0], rotate: [-10, -5, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            >
                <StrawberrySVG className="w-full h-full drop-shadow-lg opacity-90" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16 z-10 px-4 mt-8"
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
                className="relative group cursor-pointer z-10 flex flex-col items-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {/* Bouncing Text Indicator */}
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    className="absolute -top-12 text-[#D9534F] font-bold tracking-widest text-sm uppercase opacity-80"
                >
                    CLICK ME ↓
                </motion.div>

                {/* Simple CSS Envelope Graphic for now, but made cuter */}
                <div className="w-[320px] h-[220px] bg-[#fffbfa] rounded-2xl shadow-2xl overflow-hidden relative border-t-[100px] border-t-pink-100 border-x-[160px] border-x-pink-200 border-b-[100px] border-b-pink-300 transition-all group-hover:shadow-[0_20px_50px_rgba(255,192,203,0.5)]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-10 group-hover:scale-110 transition-transform">
                        <WaxSealSVG className="w-20 h-20 drop-shadow-xl" />
                    </div>
                </div>
            </motion.button>
        </div>
    );
}
