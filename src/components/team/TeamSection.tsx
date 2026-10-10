'use client';

import React from 'react';
import { INITIAL_TEAM } from '@/data/clubData';
import { AsciiPortrait, MEMBER_COLOR_THEMES } from './AsciiPortrait';
import { Linkedin, Github, GraduationCap, Building, Terminal, Code } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto space-y-20">
      
      {/* Section Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple/10 border border-purple/30 text-purple text-xs font-mono font-semibold uppercase tracking-widest">
          <Terminal className="w-3.5 h-3.5 text-cyan" />
          <span>CORE TEAM DIRECTORY</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
          MEET THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple via-violet to-cyan">ARCHITECTS</span>
        </h1>
        <p className="text-text-muted font-sans text-sm sm:text-base leading-relaxed">
          Student leaders, developers, and problem-solvers driving technical excellence and community innovation at NEXORA.
        </p>
      </div>

      {/* Alternating Profiles List with Unique Member Colors */}
      <div className="space-y-16">
        {INITIAL_TEAM.map((member, index) => {
          const isEven = index % 2 === 1;
          const theme = MEMBER_COLOR_THEMES[index % MEMBER_COLOR_THEMES.length];

          return (
            <div
              key={member.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 rounded-3xl bg-surface/60 border ${theme.border} backdrop-blur-md transition-all duration-300 ${theme.glow}`}
            >
              {/* Member Portrait Column */}
              <div
                className={`lg:col-span-5 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <AsciiPortrait
                  name={member.name}
                  role={member.role}
                  asciiArt={member.asciiArt || ''}
                  photoUrl={member.photoUrl}
                  memberIndex={index}
                />
              </div>

              {/* Member Details Column */}
              <div
                className={`lg:col-span-7 flex flex-col justify-center gap-5 ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                {/* Header & Badges */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-3 py-1 rounded-full border text-xs font-mono font-bold uppercase ${theme.badge}`}>
                      {member.role}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-surface-soft border border-white/10 text-text-muted text-[11px] font-mono flex items-center gap-1">
                      <GraduationCap className={`w-3 h-3 ${theme.text}`} />
                      {member.year}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-wide">
                    {member.name}
                  </h2>

                  <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                    <Building className={`w-3.5 h-3.5 ${theme.text}`} />
                    <span>{member.department}</span>
                  </div>
                </div>

                {/* Biography */}
                <p className={`text-sm text-text-muted font-sans leading-relaxed border-l-2 ${theme.border} pl-4 py-1 italic bg-surface-soft/40 rounded-r-xl`}>
                  "{member.bio}"
                </p>

                {/* Technical Skills */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-text-muted uppercase tracking-widest flex items-center gap-1.5">
                    <Code className={`w-3 h-3 ${theme.text}`} />
                    TECHNICAL DOMAINS:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 rounded-lg bg-surface-soft border border-white/10 text-xs font-mono text-text-primary hover:${theme.border} hover:${theme.text} transition-colors`}
                      >
                        #{skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social & Contact Links */}
                <div className="pt-4 border-t border-white/10 flex items-center gap-4">
                  {member.linkedinUrl && (
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0077B5]/20 border border-[#0077B5]/50 text-[#0077B5] hover:bg-[#0077B5] hover:text-white text-xs font-mono font-bold transition-all shadow-sm"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LINKEDIN PROFILE</span>
                    </a>
                  )}

                  {member.githubUrl && (
                    <a
                      href={member.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-soft border border-white/20 text-white hover:bg-white hover:text-black text-xs font-mono font-bold transition-all shadow-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span>GITHUB</span>
                    </a>
                  )}
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
