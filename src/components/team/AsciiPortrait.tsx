'use client';

import React, { useState } from 'react';
import { Copy, Check, Eye, Code2, Image as ImageIcon } from 'lucide-react';

export const MEMBER_COLOR_THEMES = [
  {
    name: 'purple',
    badge: 'bg-purple/20 border-purple/40 text-purple',
    glow: 'border-purple/40 shadow-[0_0_25px_rgba(139,53,255,0.35)]',
    text: 'text-purple',
    border: 'border-purple/40',
    terminalBg: 'text-violet border-purple/30',
    dot: 'bg-purple',
    gradient: 'from-purple via-violet to-electric-blue'
  },
  {
    name: 'cyan',
    badge: 'bg-cyan/20 border-cyan/40 text-cyan',
    glow: 'border-cyan/40 shadow-[0_0_25px_rgba(85,216,255,0.35)]',
    text: 'text-cyan',
    border: 'border-cyan/40',
    terminalBg: 'text-cyan border-cyan/30',
    dot: 'bg-cyan',
    gradient: 'from-cyan via-electric-blue to-violet'
  },
  {
    name: 'emerald',
    badge: 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400',
    glow: 'border-emerald-500/40 shadow-[0_0_25px_rgba(52,211,153,0.35)]',
    text: 'text-emerald-400',
    border: 'border-emerald-500/40',
    terminalBg: 'text-emerald-400 border-emerald-500/30',
    dot: 'bg-emerald-400',
    gradient: 'from-emerald-400 via-teal-400 to-cyan'
  },
  {
    name: 'amber',
    badge: 'bg-amber-500/20 border-amber-500/40 text-amber-400',
    glow: 'border-amber-500/40 shadow-[0_0_25px_rgba(251,191,36,0.35)]',
    text: 'text-amber-400',
    border: 'border-amber-500/40',
    terminalBg: 'text-amber-400 border-amber-500/30',
    dot: 'bg-amber-400',
    gradient: 'from-amber-400 via-orange-400 to-rose-400'
  },
  {
    name: 'rose',
    badge: 'bg-rose-500/20 border-rose-500/40 text-rose-400',
    glow: 'border-rose-500/40 shadow-[0_0_25px_rgba(251,113,133,0.35)]',
    text: 'text-rose-400',
    border: 'border-rose-500/40',
    terminalBg: 'text-rose-400 border-rose-500/30',
    dot: 'bg-rose-400',
    gradient: 'from-rose-400 via-pink-500 to-purple'
  },
  {
    name: 'indigo',
    badge: 'bg-indigo-500/20 border-indigo-500/40 text-indigo-400',
    glow: 'border-indigo-500/40 shadow-[0_0_25px_rgba(129,140,248,0.35)]',
    text: 'text-indigo-400',
    border: 'border-indigo-500/40',
    terminalBg: 'text-indigo-400 border-indigo-500/30',
    dot: 'bg-indigo-400',
    gradient: 'from-indigo-400 via-blue-500 to-cyan'
  }
];

interface AsciiPortraitProps {
  name: string;
  asciiArt: string;
  photoUrl: string;
  role: string;
  memberIndex?: number;
  defaultViewMode?: 'photo' | 'ascii';
}

export const AsciiPortrait: React.FC<AsciiPortraitProps> = ({
  name,
  asciiArt,
  photoUrl,
  role,
  memberIndex = 0,
  defaultViewMode = 'photo'
}) => {
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'ascii' | 'photo'>(defaultViewMode);
  const [imgError, setImgError] = useState(false);

  // Select unique color theme based on memberIndex
  const theme = MEMBER_COLOR_THEMES[memberIndex % MEMBER_COLOR_THEMES.length];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(asciiArt || photoUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group w-full">
      {/* Outer Card Frame with assigned color theme */}
      <div className={`relative rounded-2xl bg-surface border transition-all duration-300 ${theme.glow} p-4 sm:p-6 overflow-hidden`}>
        
        {/* Header Control Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
            <span className={`ml-2 font-bold uppercase text-[11px] ${theme.text}`}>
              MEMBER PROFILE
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle Button */}
            <button
              onClick={() => setViewMode(viewMode === 'ascii' ? 'photo' : 'ascii')}
              className="px-2.5 py-1 rounded bg-surface-soft border border-white/10 text-text-muted hover:text-white flex items-center gap-1.5 transition-colors"
              title="Toggle PNG Photo / ASCII View"
            >
              {viewMode === 'photo' ? (
                <>
                  <Code2 className={`w-3.5 h-3.5 ${theme.text}`} />
                  <span className="text-[10px]">VIEW ASCII</span>
                </>
              ) : (
                <>
                  <ImageIcon className={`w-3.5 h-3.5 ${theme.text}`} />
                  <span className="text-[10px]">VIEW PHOTO</span>
                </>
              )}
            </button>

            {/* Copy Button */}
            {viewMode === 'ascii' && (
              <button
                onClick={copyToClipboard}
                className="p-1.5 rounded bg-surface-soft border border-white/10 text-text-muted hover:text-white transition-colors"
                title="Copy ASCII Art"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            )}
          </div>
        </div>

        {/* Content Display: Uploaded Photo vs ASCII Art */}
        {viewMode === 'photo' ? (
          <div className="relative rounded-xl overflow-hidden min-h-[220px] flex flex-col items-center justify-center bg-black/60 border border-white/10 p-4">
            {photoUrl && !imgError ? (
              /* Display actual uploaded photo */
              <div className={`relative p-1 rounded-2xl bg-gradient-to-tr ${theme.gradient} shadow-2xl mb-3`}>
                <img
                  src={photoUrl}
                  alt={name}
                  onError={(e) => {
                    e.preventDefault();
                    setImgError(true);
                  }}
                  className="w-32 h-32 sm:w-36 sm:h-36 object-cover rounded-xl border border-black/40"
                />
              </div>
            ) : (
              /* Fallback Styled Avatar */
              <div className="flex flex-col items-center text-center py-2">
                <div className={`w-24 h-24 rounded-full bg-gradient-to-tr ${theme.gradient} p-1 shadow-lg mb-3`}>
                  <div className="w-full h-full rounded-full bg-surface flex items-center justify-center text-3xl font-display font-black text-white">
                    {name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              </div>
            )}
            <p className="font-display font-bold text-white text-base mt-1">{name}</p>
            <p className={`font-mono text-xs ${theme.text}`}>{role}</p>
          </div>
        ) : (
          /* ASCII Art Display */
          <div className={`relative font-mono text-[10px] sm:text-xs leading-[1.15] tracking-tighter overflow-x-auto whitespace-pre p-2 bg-[#04060C] rounded-xl border border-white/5 font-bold select-all min-h-[220px] flex items-center justify-center ${theme.text}`}>
            <div className="text-center font-mono">
              <pre className="inline-block text-left">{asciiArt || `// ASCII Art for ${name}`}</pre>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
