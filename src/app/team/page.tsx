import React from 'react';
import { TeamSection } from '@/components/team/TeamSection';

export const metadata = {
  title: 'Team Directory | NEXORA — CSE Technical Club',
  description: 'Meet the student executive team, leads, and core engineers of NEXORA CSE Technical Club.',
};

export default function TeamPage() {
  return (
    <div className="pt-24 pb-20">
      <TeamSection />
    </div>
  );
}
