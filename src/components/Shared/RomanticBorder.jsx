import React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../../store/appState';

export default function RomanticBorder() {
    const phase = useStore((state) => state.phase);

    // Only show this beautiful border during the wholesome phases
    const isWholesome = phase === 'landing' || phase === 'envelope_open';

    if (!isWholesome) return null;

    return (
        <motion.div
            className="absolute inset-0 pointer-events-none z-50 p-4 sm:p-6 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="w-full h-full border-[12px] border-white/40 rounded-3xl relative drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] mix-blend-overlay">

                {/* Top Left Corner */}
                <div className="absolute -top-6 -left-6 text-white/80 drop-shadow-xl">
                    <svg width="60" height="60" viewBox="0 0 100 100" className="animate-pulse">
                        <path d="M50 80 Q25 50 10 30 A 20 20 0 0 1 50 20 A 20 20 0 0 1 90 30 Q75 50 50 80" fill="currentColor" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="10 5" />
                    </svg>
                </div>

                {/* Top Right Corner */}
                <div className="absolute -top-6 -right-6 text-white/80 drop-shadow-xl rotate-90">
                    <svg width="60" height="60" viewBox="0 0 100 100" className="animate-pulse">
                        <path d="M50 80 Q25 50 10 30 A 20 20 0 0 1 50 20 A 20 20 0 0 1 90 30 Q75 50 50 80" fill="currentColor" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="10 5" />
                    </svg>
                </div>

                {/* Bottom Right Corner */}
                <div className="absolute -bottom-6 -right-6 text-white/80 drop-shadow-xl rotate-180">
                    <svg width="60" height="60" viewBox="0 0 100 100" className="animate-pulse">
                        <path d="M50 80 Q25 50 10 30 A 20 20 0 0 1 50 20 A 20 20 0 0 1 90 30 Q75 50 50 80" fill="currentColor" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="10 5" />
                    </svg>
                </div>

                {/* Bottom Left Corner */}
                <div className="absolute -bottom-6 -left-6 text-white/80 drop-shadow-xl -rotate-90">
                    <svg width="60" height="60" viewBox="0 0 100 100" className="animate-pulse">
                        <path d="M50 80 Q25 50 10 30 A 20 20 0 0 1 50 20 A 20 20 0 0 1 90 30 Q75 50 50 80" fill="currentColor" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="10 5" />
                    </svg>
                </div>

                {/* Subtle inner decorative lines */}
                <div className="absolute inset-2 border-2 border-white/20 rounded-2xl border-dashed"></div>
            </div>
        </motion.div>
    );
}
