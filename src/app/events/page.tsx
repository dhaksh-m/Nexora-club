'use client';

import React, { useState } from 'react';
import { NintendoCRT } from '@/components/crt/NintendoCRT';
import { UNCONFIRMED_EVENT } from '@/data/clubData';
import { Calendar, Terminal } from 'lucide-react';

export default function EventsPage() {
  const [eventConfirmed] = useState(UNCONFIRMED_EVENT.isConfirmed);

  return (
    <div className="pt-28 pb-20 px-4 max-w-6xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface border border-purple/40 text-purple text-xs font-mono font-semibold uppercase tracking-widest">
          <Terminal className="w-3.5 h-3.5 text-cyan" />
          <span>EVENTS PORTAL // CALENDAR CONTROL</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tight">
          NEXORA <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple via-violet to-cyan">EVENTS</span>
        </h1>
        <p className="text-text-muted font-sans text-sm sm:text-base leading-relaxed">
          Technical hackathons, speed coding contests, debugging battles, and expert learning sessions.
        </p>
      </div>

      {/* Primary Temporary CRT State */}
      {!eventConfirmed ? (
        <div className="space-y-8">
          <NintendoCRT
            title="EVENTS UNDER CONSTRUCTION"
            subtitle="TEMPORARY STATE // AWAITING EXECUTIVE CONFIRMATION"
            codeMessage="STATUS_LOG: 0x8849F2 ... HACKATHON SPECS & SPEAKER DATES UNDER INSTRUCTION"
            statusBadge="STAGE 01 // UNDER CONSTRUCTION"
            pageType="events"
          />
        </div>
      ) : (
        /* Confirmed Event Display State */
        <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-surface border border-purple/40 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan">
            <Calendar className="w-4 h-4" />
            <span>CONFIRMED EVENT</span>
          </div>
          <h2 className="text-3xl font-display font-bold text-white">{UNCONFIRMED_EVENT.title}</h2>
          <p className="text-text-muted text-sm leading-relaxed">{UNCONFIRMED_EVENT.description}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs text-text-primary pt-4 border-t border-white/10">
            <div>
              <span className="text-text-muted block text-[10px]">DATE</span>
              <span>{UNCONFIRMED_EVENT.date}</span>
            </div>
            <div>
              <span className="text-text-muted block text-[10px]">VENUE</span>
              <span>{UNCONFIRMED_EVENT.venue}</span>
            </div>
            <div>
              <span className="text-text-muted block text-[10px]">CATEGORY</span>
              <span>{UNCONFIRMED_EVENT.category}</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
