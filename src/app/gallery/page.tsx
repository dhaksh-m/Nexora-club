'use client';

import React from 'react';
import { NintendoCRT } from '@/components/crt/NintendoCRT';
import { Terminal } from 'lucide-react';

export default function GalleryPage() {
  return (
    <div className="pt-28 pb-20 px-4 max-w-6xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface border border-purple/40 text-purple text-xs font-mono font-semibold uppercase tracking-widest">
          <Terminal className="w-3.5 h-3.5 text-cyan" />
          <span>VISUAL ARCHIVE // GALLERY CONTROL</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tight">
          NEXORA <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple via-violet to-cyan">GALLERY</span>
        </h1>
        <p className="text-text-muted font-sans text-sm sm:text-base leading-relaxed">
          Photo memories, hackathon highlights, team workshops, and technical events archive.
        </p>
      </div>

      {/* Primary Temporary CRT State displaying exact message requested: MEMORIES UNDER CONSTRUCTION */}
      <div className="space-y-8">
        <NintendoCRT
          title="MEMORIES UNDER CONSTRUCTION"
          subtitle="EXACT SPECIFICATION // RETRO CRT ARCHIVE MONITOR"
          codeMessage="MEDIA_LOAD: 0x9910E4 ... PHOTOGRAPHIC ASSETS UNDER STAGING"
          statusBadge="STAGE 01 // ARCHIVE IN PREPARATION"
          pageType="gallery"
        />
      </div>

    </div>
  );
}
