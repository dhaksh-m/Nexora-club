'use client';

import React, { useState } from 'react';
import { RAZORPAY_REGISTERED_TEAMS } from '@/data/registeredTeams';
import {
  ShieldCheck,
  Users,
  Search,
  CheckCircle2,
  ExternalLink,
  CreditCard,
  Hash,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Layers,
  Calendar
} from 'lucide-react';

export const RegisteredTeamsDashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [expandedTeamId, setExpandedTeamId] = useState<string | null>(null);

  const filteredTeams = RAZORPAY_REGISTERED_TEAMS.filter((team) => {
    const matchesSearch =
  team.teamName.toLowerCase().includes(searchTerm.toLowerCase()) ||
  (team.members ?? []).some((member) =>
    member.toLowerCase().includes(searchTerm.toLowerCase())
  );
    const matchesSize =
      selectedSize === 'all' ||
      (selectedSize === 'solo' && team.memberCount === 1) ||
      (selectedSize === 'small' && team.memberCount >= 2 && team.memberCount <= 3) ||
      (selectedSize === 'large' && team.memberCount >= 4);

    return matchesSearch && matchesSize;
  });

  const totalMembers = RAZORPAY_REGISTERED_TEAMS.reduce(
    (acc, curr) => acc + curr.memberCount,
    0
  );

  return (
    <section className="relative p-6 sm:p-10 rounded-3xl bg-surface/90 border-2 border-purple/40 backdrop-blur-2xl shadow-[0_0_50px_rgba(139,53,255,0.2)] space-y-8 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Header Bar with Live Gateway Badge */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 relative z-10">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>LIVE RAZORPAY PAYMENT VERIFIED</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-black text-white tracking-tight">
            REGISTERED TEAMS <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple via-violet to-cyan">DASHBOARD</span>
          </h2>
          <p className="text-xs sm:text-sm text-text-muted font-sans">
            Verified team registrations for Nexora Ideathon (27th Oct) processed through Razorpay.
          </p>
        </div>

        {/* Razorpay Gateway Status Pill */}
        <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-surface-soft/80 border border-white/10 text-xs font-mono text-text-muted shrink-0">
          <CreditCard className="w-4 h-4 text-cyan" />
          <div>
            <div className="text-white font-bold">RAZORPAY PAYMENT LINK</div>
            <a
              href="https://rzp.io/rzp/nexora2026"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan text-[11px] hover:underline flex items-center gap-1"
            >
              <span>rzp.io/rzp/nexora2026</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Key Metrics Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 relative z-10 font-mono">
        <div className="p-4 rounded-2xl bg-surface-soft/70 border border-white/5 space-y-1">
          <span className="text-[10px] text-text-muted uppercase">CONFIRMED TEAMS</span>
          <div className="text-2xl sm:text-3xl font-black text-white font-display">
            {RAZORPAY_REGISTERED_TEAMS.length} <span className="text-xs text-cyan font-mono font-normal">Teams</span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-surface-soft/70 border border-white/5 space-y-1">
          <span className="text-[10px] text-text-muted uppercase">TOTAL PARTICIPANTS</span>
          <div className="text-2xl sm:text-3xl font-black text-white font-display">
            {totalMembers} <span className="text-xs text-purple font-mono font-normal">Innovators</span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-surface-soft/70 border border-white/5 space-y-1">
          <span className="text-[10px] text-text-muted uppercase">ENTRY PER TEAM</span>
          <div className="text-2xl sm:text-3xl font-black text-cyan font-display">
            ₹50/- <span className="text-xs text-text-muted font-mono font-normal">Flat</span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-1">
          <span className="text-[10px] text-emerald-400 uppercase font-bold">STATUS</span>
          <div className="text-xl sm:text-2xl font-black text-emerald-400 font-display flex items-center gap-1.5">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span>VERIFIED</span>
          </div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 relative z-10">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by team name or team lead..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-soft border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-cyan transition-colors"
          />
        </div>

        {/* Filter by Team Size */}
        <div className="flex items-center gap-1.5 font-mono text-xs text-text-muted overflow-x-auto pb-1 sm:pb-0">
          <span className="hidden sm:inline text-[11px] mr-1">SIZE:</span>
          {[
            { id: 'all', label: 'ALL' },
            { id: 'solo', label: '1 (SOLO)' },
            { id: 'small', label: '2-3 MEMBERS' },
            { id: 'large', label: '4-5 MEMBERS' }
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedSize(f.id)}
              className={`px-3 py-1.5 rounded-lg border text-[11px] whitespace-nowrap transition-all ${
                selectedSize === f.id
                  ? 'bg-purple/20 border-purple text-white font-bold'
                  : 'bg-surface-soft border-white/5 text-text-muted hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Teams Grid Cards */}
      <div className="space-y-3 relative z-10">
        {filteredTeams.length === 0 ? (
          <div className="p-8 rounded-2xl bg-surface-soft/40 border border-white/5 text-center space-y-2">
            <Users className="w-8 h-8 text-text-muted mx-auto stroke-1" />
            <p className="text-sm font-mono text-text-muted">No teams found matching your query.</p>
          </div>
        ) : (
          filteredTeams.map((team, idx) => {
            const isExpanded = expandedTeamId === team.id;
            return (
              <div
                key={team.id}
                className="p-4 sm:p-5 rounded-2xl bg-surface-soft/60 border border-white/10 hover:border-purple/40 transition-all duration-200 space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  {/* Team Identity */}
                  <div className="flex items-start sm:items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-purple/20 border border-purple/40 text-purple text-xs font-mono font-bold flex items-center justify-center shrink-0">
                      #{idx + 1}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display font-bold text-white text-base sm:text-lg">
                          {team.teamName}
                        </h3>
                        <span className="px-2 py-0.5 rounded-md bg-purple/15 text-purple border border-purple/30 text-[10px] font-mono font-bold">
                          {team.memberCount} {team.memberCount === 1 ? 'MEMBER' : 'MEMBERS'}
                        </span>
                      </div>
                      <p className="text-xs font-mono text-text-muted">
                      {team.memberCount} registered {team.memberCount === 1 ? 'member' : 'members'}
                      </p>
                    </div>
                  </div>

                  {/* Payment & Status Info */}
                  <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
                    

                    {/* Toggle Members Button */}
                    {team.members && team.members.length > 0 && (
                      <button
                        onClick={() => setExpandedTeamId(isExpanded ? null : team.id)}
                        className="p-1.5 rounded-lg bg-surface border border-white/10 text-text-muted hover:text-white transition-colors"
                        title="View team members"
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-cyan" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-purple" />
                        )}
                      </button>
                    )}
                  </div>
                </div>

                
              </div>
            );
          })
        )}
      </div>

      {/* Bottom Live Sync Disclaimer */}
      <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-text-muted gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>PAYMENT GATEWAY: RAZORPAY 256-BIT SSL SECURE</span>
        </div>
        <span>REGISTRATIONS CLOSE SOON • MAX 5 MEMBERS / TEAM</span>
      </div>
    </section>
  );
};
