'use strict';
'use client';

import React from 'react';
import { ShieldCheck, Clock3, Award, Landmark } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Quality Assurance',
      description: 'Process checks, material discipline and finish standards that protect every build.',
      icon: Award,
    },
    {
      title: 'On-Time Delivery',
      description: 'Clear scheduling, dependable site coordination and milestone-driven progress.',
      icon: Landmark,
    },
    {
      title: 'Transparent Pricing',
      description: 'Straightforward estimates and open communication from start to finish.',
      icon: ShieldCheck,
    },
    {
      title: 'Experienced Team',
      description: 'Construction, interiors and project execution under one professional team.',
      icon: Clock3,
    },
  ];

  return (
    <section className="premium-section bg-slate-50 py-24" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl space-y-4 text-center">
          <h2 className="text-sm font-black uppercase tracking-[0.34em] text-brand-green">Why Veyes Infraas</h2>
          <p className="text-3xl font-black tracking-tight text-brand-blue sm:text-4xl">Trust, delivery and finish quality that feels premium</p>
          <p className="text-slate-600 leading-relaxed">The four reasons clients choose us before they even request a quote.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div 
                key={idx}
                className={`premium-card flex flex-col items-start rounded-[1.75rem] p-8 transition-all duration-300 hover-lift animate-fade-up stagger-${(idx % 4) + 1}`}
              >
                <div className="mb-6 inline-block rounded-2xl bg-brand-green-light p-4 text-brand-green">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-brand-blue">
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
