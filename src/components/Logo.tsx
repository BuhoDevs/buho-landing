import React from "react";

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            className={`${className} drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]`}
            aria-label="BuhoSoft Logo"
        >
            <defs>
                <linearGradient id="gradLogo" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
            </defs>
            {/* Main Circle */}
            <circle cx="50" cy="50" r="45" fill="url(#gradLogo)" />

            {/* 'b' Cutout with double ring */}
            <path d="M 35 25 V 75" stroke="#0f0e1b" strokeWidth="8" strokeLinecap="round" />

            {/* Outer Eye Ring */}
            <circle cx="55" cy="50" r="18" stroke="#0f0e1b" strokeWidth="4" fill="none" />

            {/* Inner Eye Ring (The 'b' loop) */}
            <path d="M 55 38 A 12 12 0 1 1 55 62 A 12 12 0 0 1 55 38" stroke="#0f0e1b" strokeWidth="6" fill="none" />

            {/* Pupil */}
            <circle cx="55" cy="50" r="4" fill="#0f0e1b" />
        </svg>
    );
};

export default Logo;
