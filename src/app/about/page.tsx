'use client';

import React from 'react';
import { CLUB_INFO } from '@/data/clubData';
import {
  Brain,
  Zap,
  Code2,
  Target,
  Eye,
  Compass,
  CheckCircle2,
  Sparkles,
  Users,
  Award,
  Terminal,
  BookOpen
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 px-4 max-w-6xl mx-auto space-y-24">
      
      {/* Page Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface border border-purple/40 text-purple text-xs font-mono font-semibold uppercase tracking-widest">
          <Terminal className="w-3.5 h-3.5 text-cyan" />
          <span>FACULTY & CLUB DIRECTIVE</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tight">
          ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple via-violet to-cyan">NEXORA</span>
        </h1>
        <p className="text-text-muted font-sans text-sm sm:text-base leading-relaxed">
          The technical club exclusively for Computer Science and Engineering students built to turn theoretical knowledge into impactful engineering solutions.
        </p>
      </div>

      {/* About Overview Editorial Card */}
      <div className="p-8 sm:p-12 rounded-3xl bg-surface/80 border border-purple/30 backdrop-blur-xl relative overflow-hidden shadow-glow-purple/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="space-y-6 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            NEXORA CLUB OVERVIEW
          </h2>
          <p className="text-text-muted text-base leading-relaxed font-sans whitespace-pre-line">
            {CLUB_INFO.overview}
          </p>
        </div>
      </div>

      {/* Vision & Mission Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Vision Panel */}
        <div className="lg:col-span-5 p-8 rounded-3xl bg-surface border border-purple/40 space-y-4 relative overflow-hidden shadow-lg">
          <div className="p-3 rounded-xl bg-purple/20 text-purple w-fit border border-purple/40">
            <Eye className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-display font-bold text-white">OUR VISION</h2>
          <p className="text-text-muted text-sm font-sans leading-relaxed">
            "{CLUB_INFO.vision}"
          </p>
        </div>

        {/* Mission Panel */}
        <div className="lg:col-span-7 p-8 rounded-3xl bg-surface border border-cyan/40 space-y-4 relative overflow-hidden shadow-lg">
          <div className="p-3 rounded-xl bg-cyan/20 text-cyan w-fit border border-cyan/40">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-display font-bold text-white">OUR MISSION</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-text-primary">
            {CLUB_INFO.mission.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-surface-soft/60 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Core Objectives */}
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-cyan uppercase tracking-widest block">/// STRATEGIC GOALS</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">CLUB OBJECTIVES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CLUB_INFO.objectives.map((obj) => (
            <div
              key={obj.code}
              className="p-5 rounded-2xl bg-surface border border-white/10 hover:border-purple/40 transition-all space-y-3 group"
            >
              <div className="text-[10px] font-mono text-purple font-bold">{obj.code}</div>
              <h3 className="font-display font-bold text-white text-base group-hover:text-cyan transition-colors">
                {obj.title}
              </h3>
              <p className="text-xs text-text-muted font-sans leading-relaxed">
                {obj.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Core Pillars Anchor: THINK / SOLVE / BUILD */}
      <div className="p-10 rounded-3xl bg-gradient-to-r from-[#0C1020] via-[#11162A] to-[#0C1020] border border-border-glow space-y-8 shadow-2xl">
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white">
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple via-violet to-cyan">THINK / SOLVE / BUILD</span> ANCHOR
          </h2>
          <p className="text-xs font-mono text-text-muted">CORE PILLARS ARCHITECTURE</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLUB_INFO.pillars.map((pillar) => (
            <div key={pillar.id} className="p-6 rounded-2xl bg-surface/80 border border-white/10 space-y-3 text-center">
              <div className="w-12 h-12 rounded-xl bg-purple/20 border border-purple/40 text-purple mx-auto flex items-center justify-center font-mono font-bold text-lg">
                {pillar.title[0]}
              </div>
              <h3 className="text-xl font-display font-bold text-white">{pillar.title}</h3>
              <p className="text-xs font-mono text-cyan">{pillar.subtitle}</p>
              <p className="text-xs text-text-muted font-sans leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Activities & Initiatives */}
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-purple uppercase tracking-widest block">/// CURRICULUM & SPECTRUM</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">SUGGESTED ACTIVITIES</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLUB_INFO.activities.map((act) => (
            <div key={act.name} className="p-6 rounded-2xl bg-surface border border-white/10 space-y-2 hover:border-cyan/40 transition-colors">
              <div className="w-2 h-2 rounded-full bg-cyan" />
              <h3 className="text-lg font-display font-bold text-white">{act.name}</h3>
              <p className="text-xs text-text-muted leading-relaxed font-sans">{act.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Who Can Be Part & Values */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Who can join */}
        <div className="lg:col-span-6 p-8 rounded-3xl bg-surface border border-purple/30 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan uppercase font-bold">
            <Users className="w-4 h-4" />
            <span>WHO CAN BE PART OF NEXORA?</span>
          </div>
          <h3 className="text-2xl font-display font-bold text-white">Exclusively CSE Students</h3>
          <p className="text-sm text-text-muted leading-relaxed font-sans">
            NEXORA is open to Computer Science & Engineering students who are curious about technology and eager to learn, experiment, and grow. Beginners and experienced coders alike are invited to collaborate, build projects, and master problem-solving skills together.
          </p>
        </div>

        {/* Club Values */}
        <div className="lg:col-span-6 p-8 rounded-3xl bg-surface border border-white/10 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-purple uppercase font-bold">
            <Award className="w-4 h-4" />
            <span>CORE VALUES</span>
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            {CLUB_INFO.values.map((v) => (
              <div key={v.title} className="p-3 rounded-xl bg-surface-soft border border-white/5">
                <span className="font-bold text-white block mb-0.5">{v.title}</span>
                <span className="text-text-muted text-[11px] font-sans">{v.description}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Club Spirit & Supporting Lines */}
      <div className="p-10 rounded-3xl bg-surface border border-purple/40 text-center space-y-6">
        <h2 className="text-3xl sm:text-5xl font-display font-black text-white">
          {CLUB_INFO.spirit}
        </h2>
        <div className="max-w-2xl mx-auto space-y-2 text-sm font-mono text-text-muted">
          {CLUB_INFO.supportingLines.map((line, idx) => (
            <p key={idx} className="hover:text-cyan transition-colors">
              // {line}
            </p>
          ))}
        </div>
      </div>

    </div>
  );
}
