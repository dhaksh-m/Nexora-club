'use client';

import React, { useState } from 'react';
import { LEADERSHIP_MEMBERS } from '@/data/clubData';
import { LeadershipMember } from '@/types';
import {
  Building,
  Sparkles,
  Crown,
  BookOpen
} from 'lucide-react';

const CATEGORY_THEMES: Record<string, {
  glow: string;
  border: string;
  text: string;
  gradient: string;
  dot: string;
}> = {
  'Chief Patron': {
    glow: 'shadow-[0_0_35px_rgba(245,158,11,0.25)] border-amber-500/40',
    border: 'border-amber-500/40',
    text: 'text-amber-400',
    gradient: 'from-amber-400 via-orange-500 to-yellow-300',
    dot: 'bg-amber-400'
  },
  'Patron': {
    glow: 'shadow-[0_0_35px_rgba(85,216,255,0.25)] border-cyan/40',
    border: 'border-cyan/40',
    text: 'text-cyan',
    gradient: 'from-cyan via-electric-blue to-purple',
    dot: 'bg-cyan'
  },
  'Principal': {
    glow: 'shadow-[0_0_35px_rgba(139,53,255,0.25)] border-purple/40',
    border: 'border-purple/40',
    text: 'text-purple',
    gradient: 'from-purple via-violet to-electric-blue',
    dot: 'bg-purple'
  },
  'Head of Department': {
    glow: 'shadow-[0_0_35px_rgba(52,211,153,0.25)] border-emerald-500/40',
    border: 'border-emerald-500/40',
    text: 'text-emerald-400',
    gradient: 'from-emerald-400 via-teal-400 to-cyan',
    dot: 'bg-emerald-400'
  },
  'Faculty Coordinator': {
    glow: 'shadow-[0_0_35px_rgba(129,140,248,0.25)] border-indigo-500/40',
    border: 'border-indigo-500/40',
    text: 'text-indigo-400',
    gradient: 'from-indigo-400 via-purple to-pink-500',
    dot: 'bg-indigo-400'
  }
};

const DEFAULT_THEME = {
  glow: 'shadow-[0_0_30px_rgba(139,53,255,0.25)] border-purple/40',
  border: 'border-purple/40',
  text: 'text-purple',
  gradient: 'from-purple via-violet to-cyan',
  dot: 'bg-purple'
};

const LeaderPortrait: React.FC<{ member: LeadershipMember; theme: typeof DEFAULT_THEME }> = ({ member, theme }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative group w-full">
      <div className={`relative rounded-3xl bg-surface/90 border transition-all duration-300 ${theme.glow} p-6 sm:p-8 flex flex-col items-center justify-center text-center overflow-hidden`}>
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

        {/* Photo or Monogram Frame */}
        {member.photoUrl && !imgError ? (
          <div className={`relative p-1.5 rounded-3xl bg-gradient-to-tr ${theme.gradient} shadow-2xl mb-4 max-w-[200px] w-full aspect-square`}>
            <img
              src={member.photoUrl}
              alt={member.name}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover rounded-[22px] border border-black/40"
            />
          </div>
        ) : (
          <div className={`w-36 h-36 sm:w-40 sm:h-40 rounded-3xl bg-gradient-to-tr ${theme.gradient} p-1.5 shadow-2xl mb-4 flex items-center justify-center`}>
            <div className="w-full h-full rounded-[22px] bg-[#090D1A] flex flex-col items-center justify-center border border-white/10">
              <span className="text-3xl sm:text-4xl font-display font-black text-white tracking-wider">
                {member.name.replace(/^(Sri\.|Dr\.|Prof\.)\s*/, '').split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          </div>
        )}

        {/* Institution Badge */}
        <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-mono text-text-muted bg-surface-soft/80 px-3 py-1 rounded-full border border-white/5">
          <Building className={`w-3.5 h-3.5 ${theme.text}`} />
          <span className="truncate max-w-[240px]">{member.institution}</span>
        </div>
      </div>
    </div>
  );
};

export default function LeadershipPage() {
  const chairman = LEADERSHIP_MEMBERS.find((m) => m.id === 'chairman') || LEADERSHIP_MEMBERS[0];
  const otherLeaders = LEADERSHIP_MEMBERS.filter((m) => m.id !== chairman.id);
  const chairmanTheme = CATEGORY_THEMES['Chief Patron'] || DEFAULT_THEME;

  return (
    <div className="pt-28 pb-24 px-4 max-w-6xl mx-auto space-y-24">

      {/* Page Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-semibold uppercase tracking-widest shadow-[0_0_20px_rgba(245,158,11,0.2)]">
          <Crown className="w-3.5 h-3.5 text-amber-400" />
          <span>GOVERNING BODY & PATRONS</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
          INSTITUTIONAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-violet to-cyan">LEADERSHIP</span>
        </h1>

        <p className="text-text-muted font-sans text-sm sm:text-base leading-relaxed">
          The visionary patrons, leadership, and academic mentors of Sree Dattha Institute of Engineering & Science who champion innovation and guide NEXORA towards excellence.
        </p>
      </div>

      {/* Chairman Sir - Featured Chief Patron Spotlight Card */}
      {chairman && (
        <div className="relative rounded-3xl bg-gradient-to-b from-[#0e1428] to-[#070913] border-2 border-amber-500/40 p-8 sm:p-12 shadow-[0_0_50px_rgba(245,158,11,0.2)] overflow-hidden">
          {/* Decorative Corner Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">

            {/* Chairman Portrait Column */}
            <div className="lg:col-span-5 flex justify-center">
              <LeaderPortrait member={chairman} theme={chairmanTheme} />
            </div>

            {/* Chairman Details & Message Column */}
            <div className="lg:col-span-7 flex flex-col justify-center gap-6">

              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-wide">
                  {chairman.name}
                </h2>

                <p className="text-base sm:text-lg font-mono text-amber-400 font-semibold tracking-wide">
                  {chairman.role}
                </p>

                <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-text-muted">
                  <Building className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{chairman.institution}</span>
                </div>
              </div>



            </div>

          </div>
        </div>
      )}

      {/* Other Heads, Principals, and Mentors Grid */}
      <div className="space-y-12">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan uppercase font-bold tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXECUTIVE & ACADEMIC HEADS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            PATRONS & ACADEMIC DIRECTORS
          </h2>
          <p className="text-text-muted text-xs sm:text-sm font-sans max-w-2xl mx-auto">
            Distinguished academicians, administrators, and department heads empowering the CSE student community.
          </p>
        </div>

        <div className="space-y-12">
          {otherLeaders.map((member, index) => {
            const isEven = index % 2 === 1;
            const theme = CATEGORY_THEMES[member.category] || DEFAULT_THEME;

            return (
              <div
                key={member.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 rounded-3xl bg-surface/70 border ${theme.border} backdrop-blur-md transition-all duration-300 ${theme.glow}`}
              >
                {/* Portrait Column */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  } flex justify-center`}
                >
                  <LeaderPortrait member={member} theme={theme} />
                </div>

                {/* Details Column */}
                <div
                  className={`lg:col-span-7 flex flex-col justify-center gap-5 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-wide">
                      {member.name}
                    </h3>

                    <p className={`text-sm sm:text-base font-mono font-semibold ${theme.text}`}>
                      {member.role}
                    </p>

                    <div className="flex flex-col gap-1 text-xs font-mono text-text-muted">
                      {member.department && (
                        <div className="flex items-center gap-1.5 text-text-primary">
                          <BookOpen className={`w-3.5 h-3.5 ${theme.text}`} />
                          <span>{member.department}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1.5">
                        <Building className={`w-3.5 h-3.5 ${theme.text}`} />
                        <span>{member.institution}</span>
                      </div>
                    </div>
                  </div>



                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* College & Department Heritage Banner */}
      <div className="p-8 sm:p-10 rounded-3xl bg-surface/90 border border-purple/30 text-center space-y-4 shadow-xl">
        <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
          SREE DATTHA INSTITUTE OF ENGINEERING & SCIENCE
        </h3>
        <p className="text-xs sm:text-sm font-mono text-cyan uppercase tracking-wider">
          An Autonomous Institution • Approved by AICTE, Accredited by NAAC, Affiliated to JNTUH
        </p>
        <p className="text-xs sm:text-sm text-text-muted font-sans max-w-2xl mx-auto leading-relaxed">
          Under the benevolence of our honorable Chairman Sir and executive heads, NEXORA continues to set higher benchmarks in student-led technical learning, hackathon triumphs, and software craftsmanship.
        </p>
      </div>

    </div>
  );
}
