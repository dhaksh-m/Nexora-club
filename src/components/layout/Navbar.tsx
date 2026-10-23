'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NexoraLogo } from '@/components/ui/NexoraLogo';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Leadership', path: '/leadership' },
  { name: 'Team', path: '/team' },
  { name: 'Events', path: '/events' },
  { name: 'Gallery', path: '/gallery' },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeIndex = NAV_ITEMS.findIndex((item) => item.path === pathname);
  const itemWidthPercent = 100 / NAV_ITEMS.length;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center px-4 pt-4 pb-2 pointer-events-none">
      {/* ThreeUI Sable Floating Dock Container */}
      <div
        className={`pointer-events-auto w-full max-w-5xl transition-all duration-300 rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between border ${
          scrolled
            ? 'bg-surface/85 backdrop-blur-xl border-border-glow shadow-glow-purple/20'
            : 'bg-surface-soft/60 backdrop-blur-lg border-white/10'
        }`}
      >
        {/* Brand Logo */}
        <NexoraLogo size="md" />

        {/* ThreeUI Sable Animated Center Navigation Dock */}
        <nav
          className="hidden md:flex items-center relative rounded-full p-1 bg-[#090D1A]/80 border border-white/10 shadow-inner"
          onMouseLeave={() => setHoveredIndex(null)}
          aria-label="Main Navigation"
        >
          {/* Animated Sliding Highlight Pill (Sable style) */}
          {hoveredIndex !== null || activeIndex !== -1 ? (
            <div
              className="absolute top-1 bottom-1 rounded-full bg-gradient-to-r from-purple/40 via-violet/40 to-electric-blue/40 border border-purple/50 shadow-glow-purple transition-all duration-300 ease-out"
              style={{
                left: `${
                  (hoveredIndex !== null ? hoveredIndex : activeIndex) * itemWidthPercent
                }%`,
                width: `${itemWidthPercent}%`,
              }}
            />
          ) : null}

          {NAV_ITEMS.map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                onMouseEnter={() => setHoveredIndex(index)}
                onFocus={() => setHoveredIndex(index)}
                className={`relative z-10 w-20 lg:w-24 py-1.5 text-center text-xs font-mono font-medium tracking-wider uppercase transition-colors duration-200 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-purple ${
                  isActive
                    ? 'text-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]'
                    : 'text-text-muted hover:text-white'
                }`}
              >
                {isActive && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan mr-1.5 animate-pulse" />
                )}
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full bg-surface border border-border-glow text-text-primary hover:bg-surface-soft transition-colors focus:outline-none focus:ring-2 focus:ring-purple"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-cyan" /> : <Menu className="w-5 h-5 text-purple" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed inset-x-4 top-20 z-50 md:hidden bg-surface/95 backdrop-blur-2xl border border-purple/30 rounded-2xl p-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-3">
            <div className="text-[10px] font-mono tracking-widest text-text-muted uppercase mb-1">
              /// NEXORA DIRECTORY
            </div>
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-mono tracking-wider uppercase transition-all ${
                    isActive
                      ? 'bg-purple/20 border-purple text-white font-bold'
                      : 'bg-surface-soft/50 border-white/5 text-text-muted hover:text-white hover:border-purple/30'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive ? (
                    <span className="text-xs text-cyan font-bold">[ACTIVE]</span>
                  ) : (
                    <span className="text-xs text-text-muted">→</span>
                  )}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs font-mono text-text-muted">
              <span>CSE TECH CLUB</span>
              <span className="text-cyan font-semibold">2026.1</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
