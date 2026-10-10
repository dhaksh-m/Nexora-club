'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface NexoraLogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  logoSrc?: string; // Optional custom logo image path e.g. "/logo.png" or "/logo.svg"
}

export const NexoraLogo: React.FC<NexoraLogoProps> = ({
  className = '',
  showText = true,
  size = 'md',
  logoSrc
}) => {
  const [imgError, setImgError] = useState(false);

  const sizeClasses = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl'
  };

  return (
    <Link href="/" className={`group flex items-center gap-3 cursor-pointer select-none ${className}`}>
      <div className={`relative ${sizeClasses[size]} flex items-center justify-center`}>
        {/* Outer Glow Ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple via-violet to-electric-blue blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow" />
        
        {/* Render custom image if available and no error, else render vector emblem */}
        {logoSrc && !imgError ? (
          <img
            src={logoSrc}
            alt="NEXORA Logo"
            onError={(e) => {
              e.preventDefault();
              setImgError(true);
            }}
            className="relative w-full h-full object-contain drop-shadow-[0_0_10px_rgba(139,53,255,0.8)]"
          />
        ) : (
          <svg
            viewBox="0 0 100 100"
            className="relative w-full h-full drop-shadow-[0_0_10px_rgba(139,53,255,0.8)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Orbital Ring */}
            <circle
              cx="50"
              cy="50"
              r="44"
              stroke="url(#purpleBlueGrad)"
              strokeWidth="3"
              strokeDasharray="180 60"
              className="animate-spin-slow origin-center"
            />
            
            {/* Inner Geometric Hex / Diamond Circuit */}
            <polygon
              points="50,15 80,32 80,68 50,85 20,68 20,32"
              stroke="url(#cyanVioletGrad)"
              strokeWidth="2.5"
              fill="rgba(12, 16, 32, 0.7)"
            />

            {/* Circuit Lines & Nodes */}
            <line x1="50" y1="15" x2="50" y2="35" stroke="#55D8FF" strokeWidth="2" strokeLinecap="round" />
            <line x1="80" y1="32" x2="65" y2="42" stroke="#8B35FF" strokeWidth="2" strokeLinecap="round" />
            <line x1="20" y1="32" x2="35" y2="42" stroke="#168BFF" strokeWidth="2" strokeLinecap="round" />

            {/* Core 'N' Symbol */}
            <path
              d="M36 65 V35 L64 65 V35"
              stroke="#F7F8FF"
              strokeWidth="5.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Central Pulsing Tech Node */}
            <circle cx="50" cy="50" r="4" fill="#55D8FF" className="animate-ping" />
            <circle cx="50" cy="50" r="3" fill="#FFFFFF" />

            {/* Gradients */}
            <defs>
              <linearGradient id="purpleBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B35FF" />
                <stop offset="50%" stopColor="#C15BFF" />
                <stop offset="100%" stopColor="#168BFF" />
              </linearGradient>
              <linearGradient id="cyanVioletGrad" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#55D8FF" />
                <stop offset="100%" stopColor="#8B35FF" />
              </linearGradient>
            </defs>
          </svg>
        )}
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-display font-extrabold tracking-wider ${textSizes[size]} text-text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple group-hover:via-violet group-hover:to-cyan transition-all duration-300`}>
            NEXORA
          </span>
          <span className="text-[9px] font-mono tracking-widest text-text-muted uppercase -mt-1">
            CSE / TECHNICAL CLUB
          </span>
        </div>
      )}
    </Link>
  );
};
