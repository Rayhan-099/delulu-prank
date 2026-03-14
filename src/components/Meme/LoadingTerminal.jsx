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
        <div className="w-full h-full bg-[#0D0D0D] flex flex-col items-center justify-center font-mono p-8 text-green-400">

            <div className="w-full max-w-md">
                <div className="mb-4 text-left text-lg">
                    {'>'} {texts[textIndex]}
                    <span className="animate-pulse">_</span>
                </div>

                <div className="w-full h-6 border-2 border-green-500 p-1 rounded-sm">
                    <div
                        className="h-full bg-green-500 transition-all duration-100 ease-linear"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <div className="mt-2 text-right">
                    {progress}% Complete
                </div>
            </div>

        </div>
    );
}
