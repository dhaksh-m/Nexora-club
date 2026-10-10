'use client';

import React, { useState, useEffect } from 'react';
import { Power, Radio, RefreshCw, Monitor, Zap, Terminal } from 'lucide-react';

interface NintendoCRTProps {
  title: string;
  subtitle?: string;
  codeMessage?: string;
  statusBadge?: string;
  pageType?: 'events' | 'gallery';
}

export const NintendoCRT: React.FC<NintendoCRTProps> = ({
  title,
  subtitle = 'SYSTEM STATUS // UNDER MAINTENANCE',
  codeMessage = 'MODULE_LOAD: 0x8849F2 ... INAUGURAL EVENTS IN SETUP PHASE',
  statusBadge = 'STAGE 01 // CONSTRUCTION',
  pageType = 'events'
}) => {
  const [powerOn, setPowerOn] = useState(true);
  const [colorMode, setColorMode] = useState<'cyan' | 'green' | 'amber' | 'purple'>('cyan');
  const [glitchActive, setGlitchActive] = useState(false);
  const [scanlinesVisible, setScanlinesVisible] = useState(true);
  const [uptimeSeconds, setUptimeSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setUptimeSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const triggerGlitch = () => {
    setGlitchActive(true);
    setTimeout(() => setGlitchActive(false), 600);
  };

  const modeStyles = {
    cyan: {
      text: 'text-cyan',
      glow: 'shadow-[0_0_30px_rgba(85,216,255,0.4)]',
      border: 'border-cyan/40',
      bgGlow: 'bg-cyan/10',
      screenFilter: 'hue-rotate-0'
    },
    green: {
      text: 'text-emerald-400',
      glow: 'shadow-[0_0_30px_rgba(52,211,153,0.4)]',
      border: 'border-emerald-500/40',
      bgGlow: 'bg-emerald-500/10',
      screenFilter: 'hue-rotate-90'
    },
    amber: {
      text: 'text-amber-400',
      glow: 'shadow-[0_0_30px_rgba(251,191,36,0.4)]',
      border: 'border-amber-500/40',
      bgGlow: 'bg-amber-500/10',
      screenFilter: 'hue-rotate-30'
    },
    purple: {
      text: 'text-violet',
      glow: 'shadow-[0_0_30px_rgba(193,91,255,0.4)]',
      border: 'border-violet/40',
      bgGlow: 'bg-violet/10',
      screenFilter: 'hue-rotate-270'
    }
  };

  const currentMode = modeStyles[colorMode];

  return (
    <div className="w-full max-w-4xl mx-auto my-8 p-4 sm:p-8">
      {/* Outer Retro Nintendo CRT TV Monitor Chassis */}
      <div className="relative rounded-3xl bg-gradient-to-b from-[#1C2030] via-[#0E1220] to-[#080B14] p-6 sm:p-10 border-4 border-[#2A314A] shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
        
        {/* Top Cabinet Branding Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-600 shadow-[0_0_8px_#EF4444]" />
            <span className="font-mono text-xs font-bold tracking-widest text-text-muted uppercase">
              NEXORA CRT-9000 // RETRO DISPLAY UNIT
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] text-text-muted">
            <span className="px-2 py-0.5 rounded bg-surface border border-white/10">NINTENDO 64-BIT CRT SYSTEM</span>
            <span className="text-cyan animate-pulse">● REC</span>
          </div>
        </div>

        {/* The CRT Screen Tube Bezels */}
        <div
          className={`relative overflow-hidden rounded-2xl border-4 transition-all duration-500 ${
            powerOn ? currentMode.border : 'border-gray-800'
          } ${powerOn ? currentMode.glow : ''} bg-[#04060A] min-h-[380px] sm:min-h-[460px] flex flex-col justify-between p-6 sm:p-10`}
          style={{
            // Simulated CRT screen barrel distortion curve effect
            borderRadius: '24px',
            boxShadow: powerOn ? 'inset 0 0 80px rgba(0,0,0,0.9), inset 0 0 30px rgba(139,53,255,0.2)' : 'inset 0 0 100px #000'
          }}
        >
          {/* Scanline Overlay (ThreeUI Nintendo CRT Style) */}
          {powerOn && scanlinesVisible && (
            <div
              className="absolute inset-0 pointer-events-none z-20 opacity-30"
              style={{
                backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.75) 50%)',
                backgroundSize: '100% 4px'
              }}
            />
          )}

          {/* RGB Subpixel Shadow Mask Grid */}
          {powerOn && (
            <div
              className="absolute inset-0 pointer-events-none z-10 opacity-15 mix-blend-overlay"
              style={{
                backgroundImage: 'radial-gradient(#FFF 15%, transparent 16%), radial-gradient(#FFF 15%, transparent 16%)',
                backgroundSize: '6px 6px',
                backgroundPosition: '0 0, 3px 3px'
              }}
            />
          )}

          {/* Glitch & Noise Effect Overlay */}
          {glitchActive && (
            <div className="absolute inset-0 bg-cyan/20 mix-blend-difference z-30 animate-pulse" />
          )}

          {/* Screen Off State */}
          {!powerOn ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center text-gray-600 font-mono gap-3">
              <Power className="w-12 h-12 stroke-[1.5]" />
              <p className="text-xs uppercase tracking-widest">[ CRT POWER OFF — PRESS POWER BUTTON BELOW ]</p>
            </div>
          ) : (
            /* Screen Powered ON Content */
            <div className="relative z-30 flex-1 flex flex-col justify-between font-mono animate-crt-flicker">
              
              {/* Screen Top Status Ribbon */}
              <div className="flex items-center justify-between text-xs border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <Terminal className={`w-4 h-4 ${currentMode.text}`} />
                  <span className={`${currentMode.text} font-bold tracking-widest`}>NEXORA_OS v2.6.4</span>
                </div>
                <div className="flex items-center gap-4 text-[11px] text-text-muted">
                  <span>UPTIME: {uptimeSeconds}s</span>
                  <span className="hidden sm:inline">RES: 640x480 @ 60Hz</span>
                  <span className={`px-2 py-0.5 rounded font-bold uppercase ${currentMode.bgGlow} ${currentMode.text}`}>
                    {statusBadge}
                  </span>
                </div>
              </div>

              {/* Central Under Construction Focal Display */}
              <div className="my-8 flex flex-col items-center justify-center text-center gap-6">
                
                {/* Vintage Pixel Art CRT Graphic Badge */}
                <div className="relative p-6 rounded-2xl bg-black/60 border border-white/10 shadow-inner">
                  <div className="text-4xl sm:text-6xl tracking-widest font-black select-none">
                    <span className="text-red-500 animate-pulse">⚠</span>
                  </div>
                </div>

                {/* Primary Under Construction Title */}
                <div className="space-y-2 max-w-2xl">
                  <h2 className={`text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase ${currentMode.text} drop-shadow-[0_0_12px_rgba(85,216,255,0.8)]`}>
                    {title}
                  </h2>
                  <p className="text-xs sm:text-sm text-text-muted tracking-wider uppercase font-medium">
                    {subtitle}
                  </p>
                </div>

                {/* Simulated CLI Terminal Output */}
                <div className="w-full max-w-xl text-left bg-black/80 rounded-xl p-4 border border-white/10 text-xs leading-relaxed space-y-1.5 shadow-2xl">
                  <div className="flex items-center justify-between text-[10px] text-text-muted border-b border-white/10 pb-1 mb-2">
                    <span>&gt; TERMINAL_LOG.TXT</span>
                    <span className="text-cyan">SYS_READY</span>
                  </div>
                  <p className="text-gray-400">
                    <span className="text-purple">$</span> nexora-ctl init --mode={pageType}
                  </p>
                  <p className="text-gray-300">
                    [INFO] Authenticating CSE Technical Club modules... OK
                  </p>
                  <p className={currentMode.text}>
                    [STATUS] {codeMessage}
                  </p>
                  <div className="flex items-center gap-2 pt-1 text-white">
                    <span className="text-cyan">C:\NEXORA\{pageType.toUpperCase()}&gt;</span>
                    <span className="w-2.5 h-4 bg-cyan animate-pulse inline-block" />
                  </div>
                </div>

              </div>

              {/* Screen Bottom Footer info */}
              <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-text-muted pt-3 border-t border-white/10 gap-2">
                <span>PRESS KNOBS BELOW TO ADJUST CRT COLOR / POWER / GLITCH</span>
                <span className="text-cyan">CRT MONOCHROME: {colorMode.toUpperCase()}</span>
              </div>

            </div>
          )}
        </div>

        {/* CRT Control Panel Below Screen */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
          
          {/* Left Controls: Power & Glitch */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPowerOn(!powerOn)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-mono font-bold transition-all shadow-md ${
                powerOn
                  ? 'bg-red-500/20 border-red-500 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                  : 'bg-surface border-white/20 text-text-muted hover:text-white'
              }`}
            >
              <Power className="w-4 h-4" />
              <span>POWER {powerOn ? 'ON' : 'OFF'}</span>
            </button>

            <button
              onClick={triggerGlitch}
              disabled={!powerOn}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-purple/30 text-purple hover:bg-purple/10 text-xs font-mono font-bold transition-all disabled:opacity-40"
            >
              <Zap className="w-4 h-4" />
              <span>GLITCH</span>
            </button>

            <button
              onClick={() => setScanlinesVisible(!scanlinesVisible)}
              disabled={!powerOn}
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-surface border border-white/10 text-text-muted hover:text-white text-xs font-mono transition-all disabled:opacity-40"
            >
              <Monitor className="w-4 h-4" />
              <span>SCANLINES: {scanlinesVisible ? 'ON' : 'OFF'}</span>
            </button>
          </div>

          {/* Right Controls: Color Modes Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-text-muted hidden md:inline">CRT COLOR:</span>
            {(['cyan', 'green', 'amber', 'purple'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setColorMode(mode)}
                disabled={!powerOn}
                className={`w-7 h-7 rounded-lg font-mono text-[10px] font-bold uppercase transition-all flex items-center justify-center border ${
                  colorMode === mode
                    ? 'scale-110 border-white text-white shadow-lg'
                    : 'border-white/10 text-text-muted hover:border-white/40'
                } ${
                  mode === 'cyan'
                    ? 'bg-cyan/30 text-cyan'
                    : mode === 'green'
                    ? 'bg-emerald-500/30 text-emerald-400'
                    : mode === 'amber'
                    ? 'bg-amber-500/30 text-amber-400'
                    : 'bg-violet/30 text-violet'
                }`}
                title={`Switch to ${mode} mode`}
              >
                {mode[0]}
              </button>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
