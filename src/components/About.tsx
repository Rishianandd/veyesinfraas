'use strict';
'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Building2, Award, Landmark, ShieldCheck } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Projects Completed', value: '250+' },
    { label: 'Happy Clients', value: '100+' },
    { label: 'Core Service Areas', value: '4' },
  ];

  const valueProps = [
    'Chennai-based team focused on quality and delivery',
    'Residential, commercial, industrial and interior expertise',
    'Transparent process from estimate to handover',
    'Trusted workmanship backed by association credibility',
  ];

  return (
    <section className="premium-section bg-white py-24" id="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5 animate-scale-in">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-8 overflow-hidden rounded-[2rem] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=80"
                  alt="Construction team at work"
                  className="h-[360px] w-full object-cover"
                />
              </div>
              <div className="col-span-4 overflow-hidden rounded-[2rem] shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80"
                  alt="Project planning board"
                  className="h-[360px] w-full object-cover"
                />
              </div>
              <div className="col-span-4 overflow-hidden rounded-[2rem] shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?auto=format&fit=crop&w=500&q=80"
                  alt="Completed residential building"
                  className="h-[220px] w-full object-cover"
                />
              </div>
              <div className="col-span-8 premium-card rounded-[2rem] p-5">
                <div className="flex items-center gap-3 text-brand-green text-xs font-black uppercase tracking-[0.3em]">
                  <Building2 className="h-4 w-4" />
                  Chennai construction partner
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Trusted execution for homes, businesses and industrial spaces.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8 animate-fade-up stagger-2">
            <div className="space-y-4">
              <h2 className="text-sm font-black uppercase tracking-[0.34em] text-brand-green">
                About Veyes Infraas
              </h2>
              <h3 className="max-w-2xl text-3xl font-black leading-tight tracking-tight text-brand-blue sm:text-4xl">
                Construction built on trust, finish quality and timely delivery.
              </h3>
              <p className="max-w-2xl text-base leading-relaxed text-slate-600">
                We deliver premium construction and interior solutions with a simple promise: clear communication, clean execution and handover you can trust.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {valueProps.map((prop) => (
                <div key={prop} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-4 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-green" />
                  <p className="text-sm leading-relaxed text-slate-700">{prop}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="premium-card rounded-[1.5rem] p-5 text-center sm:text-left">
                  <p className="text-3xl font-black text-brand-blue">{stat.value}</p>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-green/20 bg-brand-green-light px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-brand-green">
                <ShieldCheck className="h-4 w-4" />
                Association-backed trust
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue-light px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-brand-blue">
                <Award className="h-4 w-4" />
                Premium delivery focus
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-slate-600">
                <Landmark className="h-4 w-4" />
                Chennai built
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-xl bg-brand-blue px-6 py-3 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-brand-blue-dark hover-lift"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
