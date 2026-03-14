import React, { useState, useEffect } from 'react';
import { useStore } from '../../store/appState';
import { playSound, stopAllSounds } from '../Shared/AudioController';

export default function LoadingTerminal() {
    const setPhase = useStore((state) => state.setPhase);
    const [textIndex, setTextIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    const texts = ["Analyzing...", "Scanning messages...", "Checking memories..."];

    useEffect(() => {
        // Text changes
        const textInterval = setInterval(() => {
            setTextIndex(prev => Math.min(prev + 1, texts.length - 1));
        }, 1000);

        // Progress bar fills linearly to 99% then stalls
        let prg = 0;
        const progressInterval = setInterval(() => {
            prg += 7;
            if (prg >= 99) {
                prg = 99;
                clearInterval(progressInterval);
            }
            setProgress(prg);
        }, 100);

        // Transition to drop
        const dropTimeout = setTimeout(() => {
            stopAllSounds();
            playSound('record_scratch');
            setPhase('ragebait');
        }, 3800);

        return () => {
            clearInterval(textInterval);
            clearInterval(progressInterval);
            clearTimeout(dropTimeout);
        };
    }, [setPhase]);

    return (
        <div className="w-full h-full bg-[#050505] flex flex-col items-center justify-center font-mono p-8 text-green-500 relative overflow-hidden">

            {/* Authentic CRT Scanline Overlay */}
            <div className="absolute inset-0 bg-crt z-10 pointer-events-none opacity-50"></div>

            {/* Screen Vignette */}
            <div className="absolute inset-0 z-20 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.9)]"></div>

            <div className="w-full max-w-md z-30 relative drop-shadow-[0_0_10px_rgba(0,255,0,0.8)]">
                <div className="mb-6 text-left text-xl font-bold tracking-widest text-shadow-[0_0_5px_#0f0]">
                    {'>'} {texts[textIndex]}
                    <span className="animate-pulse shadow-green-500/50">_</span>
                </div>

                <div className="w-full h-8 border-4 border-green-500 p-1 rounded-sm shadow-[0_0_15px_rgba(0,255,0,0.4)]">
                    <div
                        className="h-full bg-green-500 transition-all duration-100 ease-linear shadow-[0_0_20px_#0f0]"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <div className="mt-4 text-right font-bold text-shadow-[0_0_5px_#0f0]">
                    {progress}% Complete
                </div>
            </div>

        </div>
    );
}
