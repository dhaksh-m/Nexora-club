import React from 'react';
import Link from 'next/link';
import { NexoraLogo } from '@/components/ui/NexoraLogo';
import { CLUB_INFO } from '@/data/clubData';
import { Terminal, Heart, Code2, Sparkles, Shield, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-surface border-t border-border-glow pt-16 pb-12 overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-purple/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-10 relative z-10">
        
        {/* Brand Column */}
        <div className="md:col-span-5 space-y-4">
          <NexoraLogo size="lg" />
          <p className="text-text-muted text-sm font-sans max-w-md leading-relaxed">
            {CLUB_INFO.overview.slice(0, 180)}...
          </p>
          
          <div className="p-3 rounded-xl bg-surface-soft border border-white/5 inline-block text-xs font-mono text-cyan">
            <span className="font-bold">SPIRIT:</span> "{CLUB_INFO.spirit}"
          </div>
        </div>

        {/* Links Column */}
        <div className="md:col-span-3 space-y-3 font-mono text-xs">
          <div className="text-text-primary font-bold tracking-widest uppercase mb-4 text-purple">
            /// NAVIGATION
          </div>
          <ul className="space-y-2.5">
            {[
              { name: 'Home', path: '/' },
              { name: 'About NEXORA', path: '/about' },
              { name: 'Meet the Team', path: '/team' },
              { name: 'Events Portal', path: '/events' },
              { name: 'Gallery Archive', path: '/gallery' },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="text-text-muted hover:text-white transition-colors inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">→ {link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Pillars Column */}
        <div className="md:col-span-4 space-y-3 font-mono text-xs">
          <div className="text-text-primary font-bold tracking-widest uppercase mb-4 text-cyan">
            /// CORE PILLARS
          </div>
          <div className="space-y-2">
            {CLUB_INFO.pillars.map((pillar) => (
              <div key={pillar.id} className="p-2.5 rounded-lg bg-surface-soft/60 border border-white/5">
                <span className="font-bold text-white">{pillar.title}</span> —{' '}
                <span className="text-text-muted">{pillar.subtitle}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-4 mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-text-muted gap-4">
        <div>
          © {new Date().getFullYear()} NEXORA CSE TECHNICAL CLUB. ALL RIGHTS RESERVED.
        </div>
        <div className="flex items-center gap-2 text-cyan">
          <span>BUILT BY DHAKSH </span>
        </div>
      </div>
    </footer>
  );
};
