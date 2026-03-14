import React from 'react';
import { motion } from 'framer-motion';
import { HeartSVG } from './Icons';

export default function FloatingHearts({ count = 15 }) {
    // Generate a random array of hearts
    const hearts = Array.from({ length: count }).map((_, i) => ({
        id: i,
        size: Math.random() * 40 + 20, // 20px to 60px
        left: Math.random() * 100, // 0 to 100%
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 10, // 10s to 20s
        rotation: Math.random() * 360,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    className="absolute text-pink-300 drop-shadow-md"
                    style={{
                        width: `${heart.size}px`,
                        height: `${heart.size}px`,
                        left: `${heart.left}%`,
                    }}
                    initial={{
                        y: '110vh',
                        rotate: heart.rotation,
                        opacity: 0,
                    }}
                    animate={{
                        y: '-20vh',
                        rotate: heart.rotation + (Math.random() > 0.5 ? 180 : -180),
                        opacity: [0, 0.6, 0.6, 0],
                    }}
                    transition={{
                        duration: heart.duration,
                        repeat: Infinity,
                        delay: heart.delay,
                        ease: "linear",
                    }}
                >
                    <HeartSVG className="w-full h-full" />
                </motion.div>
            ))}
        </div>
    );
}
