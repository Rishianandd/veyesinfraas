'use strict';
'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Building2, ShieldCheck, Award } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[90vh] flex items-center bg-brand-blue">
      {/* Background Image - Large Modern Luxury Building */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80')" 
        }}
      />
      
      {/* Blue-Green Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/95 via-brand-blue/80 to-brand-green/85 z-10" />

      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-green/20 rounded-full blur-3xl z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-blue/30 rounded-full blur-3xl z-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero text content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 text-brand-green font-bold text-xs uppercase tracking-widest">
              <Building2 className="h-4 w-4 text-brand-green" />
              <span>Veyes Infraas Projects</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight font-sans tracking-tight">
              BUILDING<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">
                TOMORROW
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-100 max-w-xl font-medium tracking-wide leading-relaxed">
              With Trust & Quality
            </p>

            <p className="text-base text-slate-300 max-w-lg font-light leading-relaxed">
              Veyes Infraas delivers excellence in Residential, Commercial, Industrial and Interior projects across Chennai with a commitment to quality, innovation and timely delivery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact?type=quote"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-brand-green hover:bg-brand-green-dark transition-all duration-200 hover-lift shadow-lg shadow-brand-green/20"
              >
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-base font-bold rounded-xl text-white bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all duration-200 hover-lift"
              >
                View Projects
              </Link>
            </div>

            {/* Micro Trust Stats */}
            <div className="grid grid-cols-2 gap-6 pt-10 border-t border-white/15 max-w-md">
              <div className="flex items-center space-x-3 text-slate-300">
                <ShieldCheck className="h-8 w-8 text-brand-green flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-white uppercase tracking-wider">Safety Certified</p>
                  <p className="text-xs text-slate-400">Zero Incident Record</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Award className="h-8 w-8 text-brand-green flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-white uppercase tracking-wider">BAI Standard Quality</p>
                  <p className="text-xs text-slate-400">ISO 9001 Process Flow</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero visual display (Desktop-only) */}
          <div className="hidden lg:col-span-5 relative z-20">
            <div className="relative w-full h-[550px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80" 
                alt="Large modern luxury building glass skyscraper facade" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/10 text-white">
                <p className="text-3xl font-black text-brand-green">BAI</p>
                <p className="text-xs font-bold tracking-widest uppercase mt-1">Builders Association of India Member</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
