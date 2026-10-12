'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { OrbitalCanvas } from './OrbitalCanvas';
import { ChevronDown, ArrowRight, Code, Terminal, Zap, ShieldCheck } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-28 pb-16 px-4">
      {/* Background Video with Error Isolation */}
      {!videoError && (
        <video
          autoPlay
          loop
          muted
          playsInline
          onError={(e) => {
            e.preventDefault();
            setVideoError(true);
          }}
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen scale-105 pointer-events-none transition-opacity duration-1000"
        >
          <source
            src="/hero-video.mp4"
            type="video/mp4"
            onError={(e) => {
              e.preventDefault();
              setVideoError(true);
            }}
          />
        </video>
      )}

      {/* Dark Vignette Overlay & Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/90 via-bg/70 to-bg pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple/30 via-violet/20 to-electric-blue/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />

      {/* Interactive Orbital & Particle Canvas */}
      <OrbitalCanvas />

      {/* Hero Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-6 sm:gap-7">
        
        {/* Sree Dattha Institute College Banner Logo */}
        <div className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto px-2 transition-transform hover:scale-105 duration-300">
          <img
            src="/college-logo.png"
            alt="Sree Dattha Institute of Engineering & Science"
            className="w-full h-auto max-h-28 sm:max-h-36 md:max-h-44 object-contain mx-auto drop-shadow-[0_4px_20px_rgba(255,255,255,0.12)]"
          />
        </div>

        {/* Highlighted Department Banner */}
        <div className="inline-flex items-center gap-2.5 sm:gap-3 px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-full bg-gradient-to-r from-purple/35 via-violet/30 to-electric-blue/35 border-2 border-purple/80 shadow-[0_0_35px_rgba(139,53,255,0.45)] backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-500">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-cyan animate-ping shrink-0" />
          <span className="text-sm sm:text-base md:text-xl lg:text-2xl font-display font-extrabold tracking-wide sm:tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan via-white to-cyan uppercase drop-shadow-[0_2px_12px_rgba(85,216,255,0.5)]">
            DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING
          </span>
        </div>

        {/* Top Tech Label Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-soft/80 border border-purple/40 text-text-muted text-xs font-mono tracking-widest uppercase shadow-glow-purple/30">
          <span className="text-purple font-semibold">CSE / TECHNICAL CLUB</span>
          <span className="text-white/30">•</span>
          <span>THINK → SOLVE → BUILD</span>
        </div>

        {/* Central Brand Wordmark with Orbital Ring Backdrop */}
        <div className="relative my-1">
          {/* Orbital Decorative Ring Behind Text */}
          <div className="absolute -inset-8 rounded-full border border-purple/30 animate-spin-slow pointer-events-none hidden sm:block opacity-60" />
          <div className="absolute -inset-16 rounded-full border border-electric-blue/20 animate-orbit-rotate pointer-events-none hidden sm:block opacity-40" />

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter text-white drop-shadow-[0_0_35px_rgba(139,53,255,0.6)]">
            NE<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple via-violet to-cyan">XO</span>RA
          </h1>

          {/* Circuit Traces Accent Lines */}
          <div className="flex items-center justify-center gap-4 mt-2">
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent to-purple" />
            <div className="w-2 h-2 rounded-full bg-purple shadow-glow-purple" />
            <div className="h-[1px] w-24 sm:w-36 bg-gradient-to-r from-purple via-cyan to-transparent" />
          </div>
        </div>

        {/* Official Tagline */}
        <p className="text-xl sm:text-3xl md:text-4xl font-display font-medium text-text-primary max-w-3xl leading-tight">
          Think Beyond. <span className="text-purple font-semibold">Solve Smarter.</span> Build the Future.
        </p>

        {/* Introductory Subcopy */}
        <p className="text-sm sm:text-base text-text-muted font-sans max-w-2xl leading-relaxed">
          The official computer science & engineering technical club for competitive coders, hackathon builders, systems architects, and innovators at Sree Dattha Institute of Engineering & Science.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
          <Link
            href="/events"
            className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-purple via-violet to-electric-blue text-white font-mono font-bold text-sm tracking-wider uppercase shadow-glow-purple hover:shadow-glow-blue transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span className="flex items-center gap-2">
              <span>EXPLORE IDEATHON 2026</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/about"
            className="px-8 py-3.5 rounded-full bg-surface/80 border border-purple/40 hover:border-cyan text-text-primary hover:text-cyan font-mono font-medium text-sm tracking-wider uppercase backdrop-blur-md transition-all duration-300 flex items-center gap-2"
          >
            <Terminal className="w-4 h-4 text-cyan" />
            <span>ABOUT CLUB</span>
          </Link>
        </div>

        {/* Core Pillars Quick Ticker */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl pt-8 border-t border-white/10 mt-4">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-surface/50 border border-white/5 backdrop-blur-sm hover:border-purple/30 transition-colors">
            <div className="p-2 rounded-lg bg-purple/20 text-purple border border-purple/40">
              <Code className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs font-mono font-bold text-white">THINK</div>
              <div className="text-[11px] text-text-muted">Analyse & Reason</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-surface/50 border border-white/5 backdrop-blur-sm hover:border-electric-blue/30 transition-colors">
            <div className="p-2 rounded-lg bg-electric-blue/20 text-electric-blue border border-electric-blue/40">
              <Zap className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs font-mono font-bold text-white">SOLVE</div>
              <div className="text-[11px] text-text-muted">Find Effective Solutions</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-surface/50 border border-white/5 backdrop-blur-sm hover:border-cyan/30 transition-colors">
            <div className="p-2 rounded-lg bg-cyan/20 text-cyan border border-cyan/40">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs font-mono font-bold text-white">BUILD</div>
              <div className="text-[11px] text-text-muted">Turn Ideas into Action</div>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-muted opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono tracking-widest uppercase">SCROLL</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-purple" />
      </div>
    </section>
  );
};
