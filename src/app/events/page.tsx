'use client';

import { useEffect, useState } from 'react';
import { NEXORA_IDEATHON_EVENT } from '@/data/clubData';
import { RAZORPAY_REGISTERED_TEAMS } from '@/data/registeredTeams';
import { CheckCircle2, Clock, ExternalLink, Terminal, Users } from 'lucide-react';

const PRESENTATION_GUIDELINE_TITLES = [
  'Presentation & Deliverables',
  'Bring Your Own Laptop'
];

const PRESENTATION_GUIDELINES = [
  {
    title: 'Reporting',
    description: 'Report 15 minutes before your allotted slot.'
  },
  {
    title: 'Dress Code',
    description: 'Wear formal dress with your College ID card and formal shoes.'
  },
  {
    title: 'PPT',
    description: 'Keep slides clear and concise. Using the College logo is mandatory.'
  },
  {
    title: 'Presentation',
    description: 'Each team has 5 minutes for its presentation.'
  },
  {
    title: 'Jury Q&A',
    description: 'The jury Q&A lasts 1 minute.'
  },
  {
    title: 'Team Participation',
    description: 'All members must know the project and their contributions.'
  },
  {
    title: 'Backup',
    description: 'Carry a backup copy of your presentation in PPT or PDF format.'
  },
  {
    title: 'Time Discipline',
    description: 'Strictly adhere to the 6-minute limit.'
  },
  {
    title: 'Professional Conduct',
    description: 'Maintain discipline and interact respectfully with the jury.'
  }
];

const EVALUATION_PARAMETERS = [
  {
    parameter: 'Innovation & Novelty',
    description: 'Originality, creativity, and uniqueness of the idea.',
    marks: 4
  },
  {
    parameter: 'Technical Feasibility & Implementation',
    description: 'Practicality and technology used.',
    marks: 6
  },
  {
    parameter: 'Impact & Usefulness',
    description: 'Problem-solving ability, relevance, and social/user impact.',
    marks: 4
  },
  {
    parameter: 'Presentation & User Experience',
    description: 'Clarity of presentation, communication, design, and ease of use.',
    marks: 6
  }
];

export default function EventsPage() {
  const event = NEXORA_IDEATHON_EVENT;
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateCountdown = () => {
      const targetDate = new Date('2026-10-31T09:00:00+05:30').getTime();
      const difference = targetDate - Date.now();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const eventGuidelines = event.guidelines.filter(
    (guideline) => !PRESENTATION_GUIDELINE_TITLES.includes(guideline.title)
  );
  const presentationGuidelines = PRESENTATION_GUIDELINES;

  const guidelineSection = (
    title: string,
    eyebrow: string,
    guidelines: typeof event.guidelines
  ) => (
    <section className="space-y-6">
      <div className="text-center space-y-2">
        <span className="text-xs font-mono text-cyan uppercase tracking-widest block">
          {eyebrow}
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {guidelines.map((guideline, index) => (
          <article
            key={guideline.title}
            className="p-5 rounded-2xl bg-surface border border-white/10 hover:border-purple/40 transition-all duration-200 space-y-2 group"
          >
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-surface-soft border border-white/10 text-cyan text-xs font-mono font-bold flex items-center justify-center">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-sm font-display font-bold text-white group-hover:text-cyan transition-colors">
                {guideline.title}
              </h3>
            </div>
            <p className="text-xs text-text-muted leading-relaxed font-sans pl-8">
              {guideline.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );

  return (
    <main className="pt-28 pb-24 px-4 max-w-5xl mx-auto space-y-16">
      <header className="text-center space-y-5">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple/15 border border-purple/40 text-purple text-xs font-mono font-semibold uppercase tracking-widest shadow-glow-purple">
          <Terminal className="w-3.5 h-3.5 text-cyan animate-pulse" />
          <span>OFFICIAL EVENT PORTAL // OCTOBER 2026</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
          <span className="text-cyan">NEXORA IDEATHON</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white tracking-tight">
          NEXORA{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple via-violet to-cyan">
            IDEATHON
          </span>
        </h1>
      </header>

      <section
        aria-labelledby="countdown-heading"
        className="relative p-6 sm:p-8 rounded-3xl bg-surface/90 border-2 border-purple/50 backdrop-blur-xl shadow-glow-purple/25 overflow-hidden text-center space-y-6"
      >
        <div className="absolute -right-10 -top-20 w-72 h-72 bg-purple/15 rounded-full blur-[90px] pointer-events-none" />
        <div className="relative space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan uppercase tracking-widest">
              <Clock className="w-4 h-4 text-cyan animate-pulse" />
              <h2 id="countdown-heading">COUNTDOWN TO IDEATHON</h2>
            </div>
            <p className="text-xs font-mono text-text-muted">
              EVENT DATE: <span className="text-white font-bold">{event.date.toUpperCase()} 2026</span>
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { label: 'DAYS', value: timeLeft.days },
              { label: 'HOURS', value: timeLeft.hours },
              { label: 'MINUTES', value: timeLeft.minutes },
              { label: 'SECONDS', value: timeLeft.seconds }
            ].map(({ label, value }) => (
              <div
                key={label}
                className="p-4 sm:p-6 rounded-2xl bg-surface-soft border border-white/10 text-center space-y-1"
              >
                <div className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
                  {String(value).padStart(2, '0')}
                </div>
                <div className="text-xs font-mono text-text-muted uppercase tracking-widest">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative p-6 sm:p-8 rounded-3xl bg-surface/70 border border-purple/30 backdrop-blur-md shadow-[0_0_30px_rgba(139,53,255,0.15)] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-purple/20 border border-purple/40">
              <Users className="w-5 h-5 text-cyan" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-display font-bold text-white">
                Registered Teams
              </h2>
              <p className="text-xs font-mono text-text-muted">
                NEXORA IDEATHON 2026 • Confirmed entries
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {RAZORPAY_REGISTERED_TEAMS.length} Teams Confirmed
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {RAZORPAY_REGISTERED_TEAMS.map((team, index) => (
            <div
              key={team.id}
              className="group flex items-center gap-3 p-3.5 rounded-2xl bg-surface/80 border border-white/8 hover:border-purple/40 hover:shadow-[0_0_15px_rgba(139,53,255,0.2)] transition-all duration-200"
            >
              <div className="shrink-0 w-8 h-8 rounded-xl bg-gradient-to-tr from-purple/50 to-cyan/30 border border-purple/40 flex items-center justify-center text-xs font-mono font-black text-white">
                {index + 1}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-display font-bold text-white truncate group-hover:text-cyan transition-colors">
                  {team.teamName}
                </p>
                <p className="text-[11px] font-mono text-text-muted flex items-center gap-1 mt-0.5">
                  <Users className="w-3 h-3" />
                  {team.memberCount} {team.memberCount === 1 ? 'member' : 'members'}
                </p>
              </div>
              <CheckCircle2 className="shrink-0 w-4 h-4 text-emerald-400" />
            </div>
          ))}
        </div>
      </section>

      {guidelineSection('EVENT GUIDELINES', '/// CODE & PROTOCOL', eventGuidelines)}
      {guidelineSection(
        'PRESENTATION GUIDELINES',
        '/// PRESENTATION PROTOCOL',
        presentationGuidelines
      )}

      <section className="space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-cyan uppercase tracking-widest block">
            /// JURY SCORING
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            EVALUATION PARAMETERS
          </h2>
          <p className="text-sm font-mono text-text-muted">
            NEXORA IDEATHON 2026 • 31st October 2026
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-surface">
          <table className="w-full min-w-[640px] text-left">
            <thead className="bg-surface-soft/80 text-xs font-mono uppercase tracking-wider text-cyan">
              <tr>
                <th scope="col" className="px-4 py-4">S. No</th>
                <th scope="col" className="px-4 py-4">Evaluation Parameter</th>
                <th scope="col" className="px-4 py-4">Brief Description</th>
                <th scope="col" className="px-4 py-4 text-right">Marks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-sm">
              {EVALUATION_PARAMETERS.map((item, index) => (
                <tr key={item.parameter} className="hover:bg-surface-soft/40">
                  <td className="px-4 py-4 font-mono text-text-muted">
                    {String(index + 1).padStart(2, '0')}
                  </td>
                  <th scope="row" className="px-4 py-4 font-display font-bold text-white">
                    {item.parameter}
                  </th>
                  <td className="px-4 py-4 text-text-muted">{item.description}</td>
                  <td className="px-4 py-4 text-right font-mono font-bold text-cyan">
                    {item.marks}
                  </td>
                </tr>
              ))}
              <tr className="bg-purple/10">
                <th scope="row" colSpan={3} className="px-4 py-4 text-right font-display font-bold text-white">
                  TOTAL MARKS
                </th>
                <td className="px-4 py-4 text-right font-mono font-black text-cyan">
                  {EVALUATION_PARAMETERS.reduce((total, item) => total + item.marks, 0)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="p-5 rounded-2xl bg-surface border border-white/10 text-xs sm:text-sm text-text-muted leading-relaxed">
          <span className="font-mono font-bold uppercase tracking-wider text-cyan">Note: </span>
          Judges should award marks within the maximum allocated for each evaluation
          parameter. Evaluation should focus on the idea&apos;s originality, creativity,
          feasibility, problem-solving approach, potential impact, and clarity of
          presentation.
        </p>
      </section>

      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0F1426] via-[#0C1020] to-[#080B14] border-2 border-purple/50 text-center space-y-6 shadow-[0_0_50px_rgba(139,53,255,0.25)] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-purple/20 blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono font-bold uppercase">
            <ExternalLink className="w-3.5 h-3.5" />
            PRESENTATION SUBMISSION
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white">
            Submit Your Presentation
          </h2>
          <a
            href="https://forms.gle/PuAuumZJCZgLVdds9"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple via-violet to-electric-blue text-white font-mono font-bold text-sm sm:text-base tracking-wider uppercase shadow-[0_0_35px_rgba(139,53,255,0.6)] hover:shadow-[0_0_50px_rgba(85,216,255,0.7)] hover:scale-105 transition-all duration-300"
          >
            <span>OPEN PRESENTATION FORM</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </section>

      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0F1426] via-[#0C1020] to-[#080B14] border-2 border-purple/50 text-center shadow-[0_0_50px_rgba(139,53,255,0.25)] relative overflow-hidden">
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
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple via-violet to-electric-blue text-white font-mono font-bold text-sm sm:text-base tracking-wider uppercase shadow-[0_0_35px_rgba(139,53,255,0.6)] hover:shadow-[0_0_50px_rgba(85,216,255,0.7)] hover:scale-105 transition-all duration-300"
          >
            <span>JOIN WHATSAPP COMMUNITY</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </section>
    </main>
  );
}
