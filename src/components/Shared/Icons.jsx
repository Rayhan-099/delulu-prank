import React from 'react';

export const HeartSVG = ({ className, style }) => (
    <svg viewBox="0 0 32 32" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M16 28 C16 28 4 19.5 4 10.5 C4 6 7.5 3 11 3 C13.5 3 15 4.5 16 6 C17 4.5 18.5 3 21 3 C24.5 3 28 6 28 10.5 C28 19.5 16 28 16 28 Z" />
    </svg>
);

export const WaxSealSVG = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
            <filter id="wobble">
                <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
            </filter>
        </defs>
        <circle cx="50" cy="50" r="45" fill="#D9534F" filter="url(#wobble)" />
        <circle cx="50" cy="50" r="35" fill="#C9302C" />
        <path fill="#FFF5EE" d="M50 70 C50 70 25 50 25 35 C25 25 35 20 42 20 C47 20 50 25 50 25 C50 25 53 20 58 20 C65 20 75 25 75 35 C75 50 50 70 50 70 Z" transform="scale(0.5) translate(50, 30)" />
    </svg>
);

export const BowSVG = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(0, 5) scale(1.0)">
            <path d="M50 50 C20 10 0 40 20 60 C30 70 50 50 50 50 Z" fill="#FFE4E1" stroke="#FFB6C1" strokeWidth="3" />
            <path d="M50 50 C80 10 100 40 80 60 C70 70 50 50 50 50 Z" fill="#FFE4E1" stroke="#FFB6C1" strokeWidth="3" />
            <path d="M45 55 Q20 85 10 95 Q25 80 40 55 Z" fill="#FFE4E1" stroke="#FFB6C1" strokeWidth="3" />
            <path d="M55 55 Q80 85 90 95 Q75 80 60 55 Z" fill="#FFE4E1" stroke="#FFB6C1" strokeWidth="3" />
            <ellipse cx="50" cy="50" rx="10" ry="12" fill="#FFB6C1" />
        </g>
    </svg>
);

export const StrawberrySVG = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M20 40 C20 5 80 5 80 40 C80 75 50 95 50 95 C50 95 20 75 20 40 Z" fill="#FF6347" />
        <path d="M50 25 Q35 15 20 20 Q40 5 50 15 Q60 5 80 20 Q65 15 50 25 Z" fill="#32CD32" />
        <path d="M50 15 Q48 0 55 0" stroke="#228B22" strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="35" cy="40" r="2.5" fill="#FFD700" />
        <circle cx="65" cy="40" r="2.5" fill="#FFD700" />
        <circle cx="50" cy="55" r="2.5" fill="#FFD700" />
        <circle cx="30" cy="60" r="2.5" fill="#FFD700" />
        <circle cx="70" cy="60" r="2.5" fill="#FFD700" />
        <circle cx="45" cy="75" r="2.5" fill="#FFD700" />
        <circle cx="55" cy="75" r="2.5" fill="#FFD700" />
    </svg>
);

export const SparkleStarsSVG = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
        <path fill="#FFD700" d="M50 5 Q50 35 20 35 Q50 35 50 65 Q50 35 80 35 Q50 35 50 5 Z" />
        <path fill="#FFD700" d="M80 55 Q80 70 65 70 Q80 70 80 85 Q80 70 95 70 Q80 70 80 55 Z" />
        <path fill="#FFD700" d="M25 65 Q25 75 15 75 Q25 75 25 85 Q25 75 35 75 Q25 75 25 65 Z" />
    </svg>
);

export const CloudSVG = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M30 65 Q30 80 50 80 Q70 80 70 65 Q85 65 85 50 Q85 30 65 30 Q60 15 45 20 Q30 10 20 30 Q5 35 15 55 Q5 65 20 65 Z" fill="#F0F8FF" stroke="#B0E0E6" strokeWidth="2" />
        <circle cx="35" cy="45" r="3" fill="#2F4F4F" />
        <circle cx="55" cy="45" r="3" fill="#2F4F4F" />
        <path d="M40 55 Q45 60 50 55" fill="none" stroke="#2F4F4F" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="30" cy="50" rx="3" ry="2" fill="#FFC0CB" opacity="0.8" />
        <ellipse cx="60" cy="50" rx="3" ry="2" fill="#FFC0CB" opacity="0.8" />
    </svg>
);

export const FlowerSVG = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(50, 50)">
            <circle cx="0" cy="-20" r="15" fill="#FFB6C1" />
            <circle cx="20" cy="-6" r="15" fill="#FFB6C1" />
            <circle cx="12" cy="16" r="15" fill="#FFB6C1" />
            <circle cx="-12" cy="16" r="15" fill="#FFB6C1" />
            <circle cx="-20" cy="-6" r="15" fill="#FFB6C1" />
            <circle cx="0" cy="0" r="12" fill="#FFD700" />
            <circle cx="-5" cy="-2" r="2" fill="#8B4513" />
            <circle cx="5" cy="-2" r="2" fill="#8B4513" />
            <path d="M-2 5 Q0 8 2 5" fill="none" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" />
        </g>
    </svg>
);
