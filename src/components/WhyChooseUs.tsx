'use strict';
'use client';

import React from 'react';
import { Shield, Clock, Award, Landmark, HardHat, FileCheck2 } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Rotary & RMB Core Values',
      description: 'Built on the Rotary four-way test of truth and fairness. We promote ethical construction practices, honest raw material billing, and fair work arrangements.',
      icon: Award,
    },
    {
      title: 'Builders Association of India (BAI) Standards',
      description: 'Adhering strictly to BAI guidelines and contract specifications. Every concrete batch, steel grade, and structure passes BAI compliance audits.',
      icon: Landmark,
    },
    {
      title: 'CMDA & DTCP Compliance',
      description: 'Our engineers handle all document approvals, building clearances, setbacks, and floor space indexes (FSI) to secure clean building permits.',
      icon: FileCheck2,
    },
    {
      title: 'Local Soil & Structural Experts',
      description: 'Detailed foundation layouts optimized for Chennai soils (clay, sand, and mixed soils) to withstand seismic loads and water table shifts.',
      icon: Shield,
    },
    {
      title: 'Premium Woodwork & Interiors',
      description: 'Our interiors team builds high-quality modular units using marine ply, luxury laminates, and space-maximizing architecture.',
      icon: HardHat,
    },
    {
      title: 'Guaranteed Timely Delivery',
      description: 'Using specialized scheduling and local logistics management, we ensure structural handovers are completed on time.',
      icon: Clock,
    },
  ];

  return (
    <section className="py-24 bg-slate-50" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-sm font-extrabold uppercase tracking-widest text-brand-green">
            Why Veyes Infraas
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold text-brand-blue tracking-tight">
            Setting the Benchmark for Construction Integrity in Chennai
          </p>
          <div className="h-1.5 w-24 bg-brand-green mx-auto rounded-full mt-4" />
          <p className="text-slate-600 text-lg font-light pt-2">
            Our commitment to quality, speed, and safety distinguishes us. We don't just build structures; we build enduring relationships.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-green-light transition-all duration-300 hover-lift flex flex-col items-start"
              >
                <div className="bg-brand-green-light text-brand-green p-4 rounded-xl mb-6 inline-block">
                  <Icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-lg font-bold text-brand-blue mb-3">
                  {reason.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed font-light">
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
