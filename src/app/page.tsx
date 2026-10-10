'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HeroSection } from '@/components/hero/HeroSection';
import { CLUB_INFO, INITIAL_TEAM } from '@/data/clubData';
import { AsciiPortrait } from '@/components/team/AsciiPortrait';
import {
  Brain,
  Zap,
  Code2,
  Terminal,
  ArrowRight,
  Sparkles,
  Users
} from 'lucide-react';

export default function HomePage() {
  const [activePillar, setActivePillar] = useState<'think' | 'solve' | 'build'>('think');

  return (
    <div className="space-y-24 pb-20">
      {/* 1. Cinematic Video Hero */}
      <HeroSection />

      {/* 2. Short Club Introduction */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="p-8 sm:p-12 rounded-3xl bg-surface/70 border border-purple/30 backdrop-blur-xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple/10 rounded-full blur-[90px] pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan uppercase tracking-widest">
                <Terminal className="w-4 h-4" />
                <span>/// CSE TECHNICAL CLUB DIRECTIVE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                Beyond Theoretical Learning. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple via-violet to-cyan">
                  Transforming Ideas into Action.
                </span>
              </h2>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed font-sans">
                {CLUB_INFO.overview}
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col justify-center items-start md:items-end gap-3 font-mono text-xs text-text-muted border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
              <div className="px-3.5 py-2 rounded-xl bg-surface-soft border border-white/10 w-full text-left">
                <span className="text-cyan font-bold block mb-1">ELIGIBILITY</span>
                <span>Computer Science & Engineering Students</span>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-surface-soft border border-white/10 w-full text-left">
                <span className="text-purple font-bold block mb-1">FOCUS</span>
                <span>Algorithms, Hackathons, System Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Pillars: THINK / SOLVE / BUILD */}
      <section className="max-w-6xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-purple/40 text-purple text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-cyan" />
            <span>FOUNDATIONAL METHODOLOGY</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight">
            THE THREE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple via-violet to-cyan">PILLARS</span>
          </h2>
          <p className="text-text-muted text-sm font-sans">
            Our structured roadmap to engineering excellence: from conceptual analysis to deployed software.
          </p>
        </div>

        {/* Pillar Selection Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLUB_INFO.pillars.map((pillar) => {
            const isActive = activePillar === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id as any)}
                className={`p-6 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group ${
                  isActive
                    ? 'bg-surface border-purple shadow-glow-purple scale-[1.02]'
                    : 'bg-surface-soft/40 border-white/10 hover:border-purple/40 hover:bg-surface-soft'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-2xl font-mono font-black ${isActive ? 'text-cyan' : 'text-text-muted'}`}>
                    0{CLUB_INFO.pillars.indexOf(pillar) + 1}
                  </span>
                  <div className={`p-3 rounded-xl ${isActive ? 'bg-purple/20 text-purple border border-purple/50' : 'bg-surface text-text-muted'}`}>
                    {pillar.id === 'think' && <Brain className="w-6 h-6" />}
                    {pillar.id === 'solve' && <Zap className="w-6 h-6" />}
                    {pillar.id === 'build' && <Code2 className="w-6 h-6" />}
                  </div>
                </div>

                <h3 className="text-2xl font-display font-extrabold text-white mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs font-mono text-cyan mb-3">{pillar.subtitle}</p>
                <p className="text-xs text-text-muted leading-relaxed font-sans">
                  {pillar.description}
                </p>

                {isActive && (
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-mono text-purple font-bold">
                    <span>EXPLORE PILLAR</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* 4. Real Activities & Initiatives Preview */}
      <section className="max-w-6xl mx-auto px-4 space-y-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-b border-white/10 pb-6 gap-4">
          <div>
            <span className="text-xs font-mono text-cyan uppercase tracking-widest block mb-2">
              /// WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              ACTIVITIES & INITIATIVES
            </h2>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-xs font-mono text-purple hover:text-cyan font-bold transition-colors"
          >
            <span>VIEW ALL INITIATIVES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLUB_INFO.activities.slice(0, 6).map((act, i) => (
            <div
              key={act.name}
              className="p-6 rounded-2xl bg-surface/50 border border-white/10 hover:border-purple/40 backdrop-blur-sm transition-all group"
            >
              <div className="text-xs font-mono text-cyan mb-2">MOD_0{i + 1}</div>
              <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-purple transition-colors">
                {act.name}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                {act.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Team Teaser Section */}
      <section className="max-w-6xl mx-auto px-4 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono text-purple uppercase tracking-widest block">
            /// EXECUTIVE LEADERSHIP
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white">
            MEET THE NEXORA TEAM
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INITIAL_TEAM.slice(0, 2).map((member, idx) => (
            <div key={member.id} className="p-6 rounded-3xl bg-surface border border-white/10 space-y-4">
              <AsciiPortrait
                name={member.name}
                role={member.role}
                asciiArt={member.asciiArt || ''}
                photoUrl={member.photoUrl}
                memberIndex={idx}
              />
              <div className="flex items-center justify-between pt-2">
                <div>
                  <h4 className="font-display font-bold text-white text-lg">{member.name}</h4>
                  <p className="text-xs font-mono text-cyan">{member.role}</p>
                </div>
                <Link
                  href="/team"
                  className="px-3.5 py-1.5 rounded-xl bg-surface-soft border border-white/10 text-xs font-mono text-text-muted hover:text-white hover:border-purple transition-all"
                >
                  FULL PROFILE →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-surface-soft border border-purple/40 text-white font-mono font-bold text-xs tracking-wider uppercase hover:bg-purple/20 hover:border-purple transition-all"
          >
            <Users className="w-4 h-4 text-cyan" />
            <span>VIEW COMPLETE TEAM DIRECTORY</span>
          </Link>
        </div>
      </section>

      {/* 6. Closing Invitation / Spirit */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6 pt-10">
        <div className="p-10 rounded-3xl bg-gradient-to-b from-surface via-surface-soft to-bg border border-border-glow shadow-glow-purple">
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white mb-4">
            Be Curious. Be Creative. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple via-violet to-cyan">
              Be NEXORA.
            </span>
          </h2>
          <p className="text-text-muted text-sm sm:text-base font-sans max-w-xl mx-auto mb-6">
            Join a thriving community of CSE student engineers building solutions that make a real difference.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-purple text-white font-mono font-bold text-xs tracking-wider uppercase shadow-glow-purple hover:bg-violet transition-all"
          >
            <span>LEARN MORE ABOUT US</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
