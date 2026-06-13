'use strict';
'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Building, 
  Building2, 
  Warehouse, 
  Paintbrush, 
  ArrowRight,
  HardHat
} from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      title: 'Residential Buildings',
      description: 'Custom-designed luxury villas, modern apartments, independent houses, and eco-friendly residencies. Engineered with premium materials and compliant with CMDA/DTCP rules.',
      icon: Building,
      link: '/services#residential',
    },
    {
      title: 'Commercial Buildings',
      description: 'State-of-the-art office spaces, corporate hubs, retail outlets, and shopping complexes engineered to foster productivity and support business expansion.',
      icon: Building2,
      link: '/services#commercial',
    },
    {
      title: 'Industrial Projects',
      description: 'Robust factory layouts, modern warehouses, heavy engineering structures, and logistics facilities complying with fire safety, machinery, and electrical codes.',
      icon: Warehouse,
      link: '/services#industrial',
    },
    {
      title: 'Interior Solutions',
      description: 'Complete high-end interior decorations, space planning, bespoke modular kitchens, corporate workspace interiors, and custom furniture setups.',
      icon: Paintbrush,
      link: '/services#interiors',
    },
  ];

  return (
    <section className="py-24 bg-slate-50" id="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-sm font-extrabold uppercase tracking-widest text-brand-green">
            What We Do
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold text-brand-blue tracking-tight">
            Specialized Building Solutions for Chennai Infra
          </p>
          <div className="h-1.5 w-24 bg-brand-green mx-auto rounded-full mt-4" />
          <p className="text-slate-600 text-lg font-light pt-2">
            Veyes Infraas provides end-to-end building engineering solutions, ensuring highest compliance standards and timely execution.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-brand-green-light shadow-sm hover:shadow-xl transition-all duration-300 hover-lift group"
              >
                <div className="bg-brand-blue-light text-brand-blue p-4 rounded-xl inline-block mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                  <Icon className="h-7 w-7" />
                </div>
                
                <h3 className="text-xl font-bold text-brand-blue mb-3 group-hover:text-brand-green transition-colors duration-200">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                  {service.description}
                </p>
                
                <Link 
                  href={service.link}
                  className="inline-flex items-center text-sm font-bold text-brand-blue group-hover:text-brand-green transition-colors duration-200"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-brand-blue text-sm font-bold rounded-lg text-brand-blue bg-transparent hover:bg-brand-blue hover:text-white transition-all duration-200 hover-lift"
          >
            Explore All Services
          </Link>
        </div>

      </div>
    </section>
  );
}
