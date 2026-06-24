'use strict';
'use client';

import React from 'react';
import Link from 'next/link';
import { Building, Building2, Warehouse, Paintbrush, ArrowRight } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      title: 'Residential Construction',
      description: 'Custom homes, villas and apartment projects with a finish-led approach.',
      icon: Building,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80',
      link: '/services#residential',
    },
    {
      title: 'Commercial Buildings',
      description: 'Offices, showrooms and retail spaces designed for impact and performance.',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
      link: '/services#commercial',
    },
    {
      title: 'Industrial Infrastructure',
      description: 'Warehouses and factory structures engineered for durability and efficiency.',
      icon: Warehouse,
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
      link: '/services#industrial',
    },
    {
      title: 'Interior Design & Execution',
      description: 'Luxury interiors, fit-outs and turnkey execution for refined spaces.',
      icon: Paintbrush,
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
      link: '/services#interiors',
    },
  ];

  return (
    <section className="premium-section bg-slate-50 py-24" id="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center space-y-4">
          <h2 className="text-sm font-black uppercase tracking-[0.34em] text-brand-green">Services</h2>
          <p className="text-3xl font-black tracking-tight text-brand-blue sm:text-4xl">Premium construction solutions with a luxury finish</p>
          <p className="text-slate-600 text-base leading-relaxed">Focused service cards, less text, and strong visuals for fast trust.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className={`premium-card group overflow-hidden rounded-[1.75rem] transition-all duration-300 hover-lift animate-fade-up stagger-${(index % 4) + 1}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,18,0.05),rgba(3,7,18,0.72))]" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/25 px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-white backdrop-blur-md">
                    Veyes Infraas
                  </div>
                  <div className="absolute bottom-4 left-4 rounded-2xl bg-white/10 p-3 text-white backdrop-blur-md">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                <div className="space-y-4 p-6">
                  <h3 className="text-xl font-bold tracking-tight text-brand-blue group-hover:text-brand-green transition-colors duration-200">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
                  <Link href={service.link} className="inline-flex items-center text-sm font-bold text-brand-blue transition-colors duration-200 group-hover:text-brand-green">
                    Explore Service
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-xl border border-brand-blue px-8 py-3.5 text-sm font-bold text-brand-blue transition-all duration-200 hover:bg-brand-blue hover:text-white hover-lift"
          >
            Explore All Services
          </Link>
        </div>

      </div>
    </section>
  );
}
