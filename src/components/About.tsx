'use strict';
'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Award, Landmark, GraduationCap } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Completed Units', value: '180+' },
    { label: 'Corporate Partners', value: '50+' },
    { label: 'Chennai Engineers', value: '25+' },
    { label: 'Years of Trust', value: '15+' },
  ];

  const valueProps = [
    'Affiliated Builders Association of India (BAI) Member',
    'RMB Fellowship & Rotary International alignment',
    'Adherence to strict CMDA & DTCP Chennai guidelines',
    'Customized luxury interior layout engineering',
  ];

  return (
    <section className="py-24 bg-white" id="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Images Grid (Left Side) */}
          <div className="lg:col-span-5 grid grid-cols-12 gap-4 relative">
            <div className="absolute inset-0 bg-brand-green/5 rounded-3xl -m-4 z-0" />
            <div className="col-span-8 z-10">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592dedbd82d2?auto=format&fit=crop&w=600&q=80" 
                alt="Modern corporate glass structure" 
                className="rounded-2xl shadow-lg w-full h-[320px] object-cover hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div className="col-span-4 self-end z-10">
              <img 
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=400&q=80" 
                alt="Construction planning" 
                className="rounded-2xl shadow-md w-full h-[180px] object-cover hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div className="col-span-4 z-10">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80" 
                alt="Residential building front" 
                className="rounded-2xl shadow-md w-full h-[180px] object-cover hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div className="col-span-8 z-10">
              <img 
                src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80" 
                alt="Site construction overview" 
                className="rounded-2xl shadow-lg w-full h-[220px] object-cover hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>

          {/* Text Content (Right Side) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-extrabold uppercase tracking-widest text-brand-green">
                About Veyes Infraas
              </h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight leading-tight">
                Crafting Superior Civil Milestones & Interiors Across Chennai
              </h3>
              <div className="h-1.5 w-24 bg-brand-green rounded-full mt-4" />
            </div>

            <p className="text-slate-600 font-light leading-relaxed text-base">
              Veyes Infraas is a leading Chennai-based civil construction, design, and interior contracting firm. Headquartered in Mudichur Road, Chennai, we specialize in translating ambitious blueprints into solid landmarks. Our work spans premium residential buildings (including individual houses at Sairam Villas), commercial developments, large-scale industrial warehouses, and luxury interior design solutions.
            </p>

            <p className="text-slate-600 font-light leading-relaxed text-sm">
              We take pride in our affiliations with industry associations such as the **Builders Association of India (BAI)**, **Construction Network India (CNI)**, and professional fellowships like **Rotary Means Business (RMB)**. These memberships ensure we implement top-tier supply chains, execute fair labor contracts, and offer highly competitive pricing parameters for our clients.
            </p>

            {/* List of Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {valueProps.map((prop, idx) => (
                <div key={idx} className="flex items-start space-x-2.5">
                  <CheckCircle2 className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-700 leading-snug">{prop}</span>
                </div>
              ))}
            </div>

            {/* Stats Counter Display */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <p className="text-3xl font-black text-brand-blue">{stat.value}</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-bold rounded-lg text-white bg-brand-blue hover:bg-brand-blue-dark transition-all duration-200 hover-lift shadow-md"
              >
                Our Values & Heritage
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
