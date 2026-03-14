import React, { useEffect, useState } from 'react';
import { useStore } from '../../store/appState';
import { playSound } from '../Shared/AudioController';

export default function RageBait() {
    const setPhase = useStore((state) => state.setPhase);
    const [step, setStep] = useState(0);

    useEffect(() => {
        const sequence = [
            { delay: 500, action: () => { playSound('vine_boom'); setStep(1); } },
            { delay: 1500, action: () => { playSound('discord_ping'); setStep(2); } },
            { delay: 2500, action: () => { playSound('error_fahhh'); setStep(3); } },
            { delay: 4500, action: () => { setPhase('aftermath'); } }
        ];

        const timeouts = sequence.map(seq =>
            setTimeout(seq.action, seq.delay)
        );

        return () => timeouts.forEach(clearTimeout);
    }, [setPhase]);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative font-sans shake-violent">

            {step >= 1 && (
                <div
                    className="absolute top-[20%] w-[120%] -rotate-6 text-center shadow-black drop-shadow-2xl z-10"
                    style={{ animation: 'pop-in-harsh 0.1s linear' }}
                >
                    <h1 className="text-5xl md:text-7xl font-black text-white italic" style={{ WebkitTextStroke: '2px black' }}>
                        BRO STOP DAYDREAMING 💀
                    </h1>
                </div>
            )}

            {step >= 2 && (
                <div
                    className="absolute top-[45%] w-full rotate-3 text-center z-20"
                    style={{ animation: 'pop-in-harsh 0.1s linear' }}
                >
                    <h1 className="text-4xl md:text-6xl font-black text-red-600 uppercase bg-yellow-300 inline-block px-4 py-2 border-4 border-black border-dashed">
                        YOU CLICKED A RANDOM WEBSITE
                    </h1>
                </div>
            )}

            {step >= 3 && (
                <div
                    className="absolute top-[70%] w-[150%] -rotate-12 text-center z-30"
                    style={{ animation: 'pop-in-harsh 0.1s linear' }}
                >
                    <h1 className="text-5xl md:text-8xl font-black text-white bg-black/80 px-4 py-2" style={{ WebkitTextStroke: '1px red' }}>
                        NOBODY CONFESSED ANYTHING
                    </h1>
                </div>
            )}

        </div>
    );
}
