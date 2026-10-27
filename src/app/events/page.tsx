'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { NEXORA_IDEATHON_EVENT } from '@/data/clubData';
import { RAZORPAY_REGISTERED_TEAMS } from '@/data/registeredTeams';
import {
  Calendar,
  Users,
  Lightbulb,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  AlertCircle,
  ExternalLink,
  Terminal,
  Clock,
  CheckCircle2,
  Trophy
} from 'lucide-react';

export default function EventsPage() {
  const event = NEXORA_IDEATHON_EVENT;

  // Countdown State to 31st Oct
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 15,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    setMounted(true);

    const calculateCountdown = () => {
      // Target: 31st October 2026 09:00 AM IST
      const targetDate = new Date('2026-10-31T09:00:00+05:30').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-28 pb-24 px-4 max-w-5xl mx-auto space-y-16">
      
      {/* Top Breadcrumb & Status Pill */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple/15 border border-purple/40 text-purple text-xs font-mono font-semibold uppercase tracking-widest shadow-glow-purple">
          <Terminal className="w-3.5 h-3.5 text-cyan animate-pulse" />
          <span>OFFICIAL EVENT PORTAL // OCTOBER 2026</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
          <span className="text-cyan">REGISTRATIONS OPEN</span>
        </div>

        {/* Event Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white tracking-tight">
          NEXORA <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple via-violet to-cyan">IDEATHON</span>
        </h1>

        {/* Date & Fee Highlights Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {/* Date Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-purple/40 text-white font-mono text-sm font-bold shadow-md">
            <Calendar className="w-4 h-4 text-cyan" />
            <span>DATE: {event.date}</span>
          </div>

          {/* Registration Fee Highlight Banner */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple/30 to-violet/30 border border-purple text-white font-mono text-sm font-bold shadow-glow-purple">
            <span className="text-yellow-400 font-extrabold text-base">★</span>
            <span>REGISTRATION FEE: <strong className="text-cyan text-base">{event.fee}</strong></span>
          </div>

          {/* Team Size Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-white/10 text-text-muted font-mono text-xs">
            <Users className="w-4 h-4 text-violet" />
            <span>1 TO 5 MEMBERS PER TEAM</span>
          </div>
        </div>
      </div>

      {/* Primary Highlight Card: Single Core Theme */}
      <div className="relative p-8 sm:p-10 rounded-3xl bg-surface/80 border border-purple/40 backdrop-blur-xl shadow-glow-purple/20 overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-purple/15 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute -left-10 -top-10 w-80 h-80 bg-cyan/10 rounded-full blur-[90px] pointer-events-none" />

        <div className="relative z-10 space-y-6">
          

          <div className="space-y-3">
            <h1 className="text-2xl sm:text-4xl font-display font-extrabold text-white leading-tight">
              PROBLEM STATEMENT 1: 
            </h1>

            <h5 className="text-2xl sm:text-4xl font-display font-extrabold text-white leading-tight">
              Solve real life problems faced by students in college or make an existing system easier.
            </h5>
            <h1 className="text-2xl sm:text-4xl font-display font-extrabold text-white leading-tight">
              -- 
            </h1>
            <h1 className="text-2xl sm:text-4xl font-display font-extrabold text-white leading-tight">
              PROBLEM STATEMENT 2: 
            </h1>

            <h5 className="text-2xl sm:text-4xl font-display font-extrabold text-white leading-tight">
              Identify a real-world problem and develop an innovative AI agent that can think, plan, make decisions, use tools, and execute tasks to deliver practical solutions.
            </h5>
            <p className="text-text-muted text-sm sm:text-base font-sans leading-relaxed">
              The Nexora Ideathon has <strong>only one core mission</strong>: to discover creative, practical, and technology-driven ideas that alleviate student challenges, enhance daily academic workflows, or simplify any existing system to be more intuitive, efficient, and accessible.
            </p>
          </div>

          {/* Key Event Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs font-mono">
            <div className="p-3.5 rounded-xl bg-surface-soft/80 border border-white/5 space-y-1">
              <span className="text-text-muted block text-[10px] uppercase">EVENT DATE</span>
              <span className="text-white font-bold text-sm flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-cyan" />
                {event.date}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-purple/10 border border-purple/30 space-y-1">
              <span className="text-purple block text-[10px] uppercase font-bold">ENTRY FEE</span>
              <span className="text-cyan font-bold text-base">
                {event.fee} <span className="text-text-muted text-xs font-normal">(Per Team)</span>
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-surface-soft/80 border border-white/5 space-y-1">
              <span className="text-text-muted block text-[10px] uppercase">TEAM COMPOSITION</span>
              <span className="text-white font-bold text-sm flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-violet" />
                1, 2, 3, 4, or 5 (Max 5)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Countdown to 31st Oct Section (Directly Above Guidelines) */}
      <div className="relative p-6 sm:p-8 rounded-3xl bg-surface/90 border-2 border-purple/50 backdrop-blur-xl shadow-glow-purple/25 overflow-hidden text-center space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan uppercase tracking-widest">
            <Clock className="w-4 h-4 text-cyan animate-pulse" />
            <span>COUNTDOWN TO 31ST OCT</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>NEXORA IDEATHON LAUNCH CLOCK</span>
          </div>
        </div>

        {/* Countdown Timer Blocks with Primary Focus on Days */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {/* Days Block */}
          <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-purple/30 to-surface-soft border-2 border-purple text-center space-y-1 shadow-glow-purple">
            <div className="text-4xl sm:text-6xl font-display font-black text-white tracking-tight drop-shadow-[0_0_20px_rgba(139,53,255,0.8)]">
              {mounted ? String(timeLeft.days).padStart(2, '0') : '15'}
            </div>
            <div className="text-xs font-mono font-bold text-cyan uppercase tracking-widest">
              DAYS LEFT
            </div>
          </div>

          {/* Hours Block */}
          <div className="p-4 sm:p-6 rounded-2xl bg-surface-soft border border-white/10 text-center space-y-1">
            <div className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              {mounted ? String(timeLeft.hours).padStart(2, '0') : '00'}
            </div>
            <div className="text-xs font-mono text-text-muted uppercase tracking-widest">
              HOURS
            </div>
          </div>

          {/* Minutes Block */}
          <div className="p-4 sm:p-6 rounded-2xl bg-surface-soft border border-white/10 text-center space-y-1">
            <div className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              {mounted ? String(timeLeft.minutes).padStart(2, '0') : '00'}
            </div>
            <div className="text-xs font-mono text-text-muted uppercase tracking-widest">
              MINUTES
            </div>
          </div>

          {/* Seconds Block */}
          <div className="p-4 sm:p-6 rounded-2xl bg-surface-soft border border-white/10 text-center space-y-1">
            <div className="text-3xl sm:text-5xl font-display font-bold text-cyan tracking-tight">
              {mounted ? String(timeLeft.seconds).padStart(2, '0') : '00'}
            </div>
            <div className="text-xs font-mono text-text-muted uppercase tracking-widest">
              SECONDS
            </div>
          </div>
        </div>

        <p className="text-xs font-mono text-text-muted">
          EVENT DATE: <span className="text-white font-bold">31ST OCTOBER 2026</span> • ASSEMBLE YOUR TEAM & REGISTER BEFORE SLOTS CLOSE
        </p>
      </div>

      {/* Guidelines & Important Regulations Section */}
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-cyan uppercase tracking-widest block">
            /// CODE & PROTOCOL
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            EVENT GUIDELINES
          </h2>
          <p className="text-text-muted text-xs sm:text-sm font-sans max-w-xl mx-auto">
            Please review the following instructions and policies before proceeding to registration.
          </p>
        </div>

        {/* Important Warning Notice Box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* No Refund Warning Box */}
          <div className="p-5 rounded-2xl bg-red-950/20 border border-red-500/40 text-red-200 flex items-start gap-3.5">
            <ShieldAlert className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className="font-mono text-xs font-bold text-red-400 uppercase tracking-wide">
                No Refund Policy
              </h3>
              <p className="text-xs text-red-300/80 leading-relaxed font-sans">
                There is <strong>strictly NO REFUND</strong> of the registration fee under any circumstances once the fee is submitted.
              </p>
            </div>
          </div>

          {/* Form Accuracy Notice Box */}
          <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/40 text-amber-200 flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wide">
                Accurate Details Required
              </h3>
              <p className="text-xs text-amber-300/80 leading-relaxed font-sans">
                Please make sure to <strong>fill out all details correctly</strong> (Team Lead contact, email, and member names) while completing registration.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Guidelines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {event.guidelines.map((g, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-surface border border-white/10 hover:border-purple/40 transition-all duration-200 space-y-2 group"
            >
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-surface-soft border border-white/10 text-cyan text-xs font-mono font-bold flex items-center justify-center">
                  0{idx + 1}
                </span>
                <h3 className="text-sm font-display font-bold text-white group-hover:text-cyan transition-colors">
                  {g.title}
                </h3>
              </div>
              <p className="text-xs text-text-muted leading-relaxed font-sans pl-8">
                {g.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Registration CTA & Bottom Sign-off Box */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0F1426] via-[#0C1020] to-[#080B14] border-2 border-purple/50 text-center space-y-8 shadow-[0_0_50px_rgba(139,53,255,0.25)] relative overflow-hidden">
        {/* Glow Accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-purple/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OFFICIAL REGISTRATION LINK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-black text-white">
            Ready to Build Your Solution?
          </h2>

          <p className="text-xs sm:text-sm text-text-muted font-sans leading-relaxed">
            Registration fee is just <strong>{event.fee}</strong> per team (1 to 5 members). Ensure all team member details and contact information are entered accurately.
          </p>

          {/* Primary Registration Button */}
          <div className="pt-4 flex flex-col items-center gap-4">
            <a
              href={event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-purple via-violet to-electric-blue text-white font-mono font-bold text-base tracking-wider uppercase shadow-[0_0_35px_rgba(139,53,255,0.6)] hover:shadow-[0_0_50px_rgba(85,216,255,0.7)] hover:scale-105 transition-all duration-300"
            >
              <span>REGISTER FOR NEXORA IDEATHON</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Exact Required Prompt Below Button */}
            <p className="text-sm sm:text-base font-display font-medium text-cyan pt-2 tracking-wide">
              {event.waitingMessage}
            </p>

            {/* Exact Required Organization Subtext */}
            <p className="text-xs font-mono text-text-muted uppercase tracking-widest pt-1 border-t border-white/10 w-full max-w-xl">
              {event.organizedBy}
            </p>
          </div>
        </div>
      </div>

      {/* WhatsApp Community CTA */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0F1426] via-[#0C1020] to-[#080B14] border-2 border-purple/50 text-center shadow-[0_0_50px_rgba(139,53,255,0.25)] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-purple/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white">
            Join Our WhatsApp Community
          </h2>
          <p className="text-xs sm:text-sm text-text-muted font-sans leading-relaxed">
            Join the community to get the latest updates about Nexora Ideathon.
          </p>
          <a
            href={event.whatsappCommunityUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-purple via-violet to-electric-blue text-white font-mono font-bold text-base tracking-wider uppercase shadow-[0_0_35px_rgba(139,53,255,0.6)] hover:shadow-[0_0_50px_rgba(85,216,255,0.7)] hover:scale-105 transition-all duration-300"
          >
            <span>JOIN WHATSAPP COMMUNITY FOR UPDATES</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* ── Registered Teams Section ── */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="rounded-3xl bg-surface/70 border border-purple/30 backdrop-blur-md p-6 sm:p-8 shadow-[0_0_30px_rgba(139,53,255,0.15)] space-y-6">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-purple/20 border border-purple/40">
                <Trophy className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-white">Registered Teams</h3>
                <p className="text-xs font-mono text-text-muted">NEXORA IDEATHON 2026 • Confirmed entries</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {RAZORPAY_REGISTERED_TEAMS.length} Teams Confirmed
            </div>
          </div>

          {/* Teams Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {RAZORPAY_REGISTERED_TEAMS.map((team, index) => (
              <div
                key={team.id}
                className="group flex items-center gap-3 p-3.5 rounded-2xl bg-surface/80 border border-white/8 hover:border-purple/40 hover:shadow-[0_0_15px_rgba(139,53,255,0.2)] transition-all duration-200"
              >
                {/* Team Number Badge */}
                <div className="shrink-0 w-8 h-8 rounded-xl bg-gradient-to-tr from-purple/50 to-cyan/30 border border-purple/40 flex items-center justify-center text-xs font-mono font-black text-white">
                  {index + 1}
                </div>

                {/* Team Info */}
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-display font-bold text-white truncate group-hover:text-cyan transition-colors">
                    {team.teamName}
                  </p>
                  <p className="text-[11px] font-mono text-text-muted flex items-center gap-1 mt-0.5">
                    <Users className="w-3 h-3" />
                    {team.memberCount} {team.memberCount === 1 ? 'member' : 'members'}
                  </p>
                </div>

                {/* Verified tick */}
                <CheckCircle2 className="shrink-0 w-4 h-4 text-emerald-400" />
              </div>
            ))}
          </div>

          {/* Footer note */}
          <p className="text-[11px] font-mono text-text-muted text-center pt-2 border-t border-white/5">
            List updates as payments are verified via Razorpay • Registration fee ₹50 per team
          </p>

        </div>
      </div>

    </div>
  );
}
