'use strict';
'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, MessageCircle, Building2, ShieldCheck, Clock3, BadgeCheck } from 'lucide-react';

const highlights = [
  { label: 'Years', value: '15+' },
  { label: 'Projects', value: '250+' },
  { label: 'Clients', value: '100+' },
  { label: 'Sectors', value: '4' },
];

const trustPoints = [
  'Residential, commercial, industrial and interiors',
  'Chennai-based team with clear communication',
  'Trusted delivery, quality checks and clean handover',
];

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-brand-blue text-white" id="hero">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
          alt="Modern construction project"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,7,18,0.86)_0%,rgba(3,7,18,0.74)_46%,rgba(3,7,18,0.35)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(107,191,69,0.18),transparent_28%),radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_20%)]" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-brand-green/12 blur-3xl animate-drift" />
        <div className="absolute right-[-6rem] bottom-12 h-96 w-96 rounded-full bg-brand-blue/30 blur-3xl animate-float-slow" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 py-28 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid w-full gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 max-w-3xl space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.34em] text-brand-green backdrop-blur-md">
              <Building2 className="h-4 w-4" />
              Premium Construction Company in Chennai
            </div>

            <div className="space-y-5">
              <h1 className="text-5xl font-black leading-[0.92] tracking-tight text-balance sm:text-6xl lg:text-[5rem]">
                Building Excellence Across Chennai
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-200 sm:text-xl">
                Trusted experts in Residential, Commercial, Industrial & Interior Construction.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact?type=quote"
                className="inline-flex items-center justify-center rounded-xl bg-brand-green px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-green/20 transition-all duration-300 hover:bg-brand-green-dark hover-lift"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-xl border border-white/16 bg-white/8 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/14 hover-lift"
              >
                View Projects
              </Link>
            </div>

            <div className="grid gap-3 pt-3 sm:grid-cols-3">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/8 px-4 py-4 backdrop-blur-md">
                  <BadgeCheck className="mt-0.5 h-5 w-5 text-brand-green" />
                  <p className="text-sm leading-relaxed text-slate-100">{point}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 pt-2">
              {highlights.map((item) => (
                <div key={item.label} className="animate-counter px-2 py-3 sm:px-4 sm:py-4 text-center">
                  <p className="text-3xl sm:text-4xl font-black text-brand-green">{item.value}</p>
                  <p className="mt-1 text-[10px] sm:text-xs font-black uppercase tracking-[0.24em] text-white/80">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 animate-scale-in">
            <div className="premium-panel overflow-hidden rounded-[2rem] border-white/20 bg-white/10 p-4 text-white shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                  alt="Construction site and building façade"
                  className="h-[420px] w-full object-cover sm:h-[500px]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,18,0.05)_0%,rgba(3,7,18,0.75)_100%)]" />
                <div className="absolute left-4 top-4 rounded-full border border-white/12 bg-black/25 px-4 py-2 text-[10px] font-black uppercase tracking-[0.32em] backdrop-blur-md">
                  Chennai Projects
                </div>
                <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/12 bg-black/30 p-4 backdrop-blur-md">
                    <div className="flex items-center gap-2 text-brand-green text-[10px] font-black uppercase tracking-[0.3em]">
                      <ShieldCheck className="h-4 w-4" />
                      Trusted delivery
                    </div>
                    <p className="mt-2 text-sm text-slate-100">Clear milestones, quality checks and professional handover.</p>
                  </div>
                  <div className="rounded-2xl border border-white/12 bg-black/30 p-4 backdrop-blur-md">
                    <div className="flex items-center gap-2 text-brand-green text-[10px] font-black uppercase tracking-[0.3em]">
                      <Clock3 className="h-4 w-4" />
                      On-time focus
                    </div>
                    <p className="mt-2 text-sm text-slate-100">Reliable coordination for homeowners, builders and businesses.</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <a
                  href="tel:+919444385611"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-green px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-brand-green-dark hover-lift"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919444385611"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/14 bg-white/8 px-5 py-3 text-sm font-bold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/14 hover-lift"
                >
                  <MessageCircle className="h-4 w-4 text-brand-green" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Floating statistics card */}



      </div>
    </section>
  );
}

