'use strict';
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, MapPin, Building } from 'lucide-react';

export default function Projects() {
  const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Interiors'];
  
  const [activeCategory, setActiveCategory] = useState('All');

  const projectsList = [
    {
      title: 'Luxury Residential Villas',
      category: 'Residential',
      location: 'Chennai Residential Developments',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498c?auto=format&fit=crop&w=900&q=80',
      link: '/projects/luxury-villas',
      before: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80',
      after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Modern Commercial Complexes',
      category: 'Commercial',
      location: 'Chennai Business District',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
      link: '/projects/commercial-complexes',
    },
    {
      title: 'Industrial Facilities',
      category: 'Industrial',
      location: 'Chennai Industrial Belt',
      image: 'https://images.unsplash.com/photo-1518622220192-5e3a9f6c9c79?auto=format&fit=crop&w=900&q=80',
      link: '/projects/industrial-facilities',
    },
    {
      title: 'Premium Interior Transformations',
      category: 'Interiors',
      location: 'Chennai Interior Fit-Outs',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
      link: '/projects/interior-transformations',
    },
    {
      title: 'Structural Redevelopment',
      category: 'Commercial',
      location: 'Central Chennai',
      image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=900&q=80',
      link: '/projects/structural-redevelopment',
    },
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projectsList 
    : projectsList.filter(project => project.category === activeCategory);

  const featuredBeforeAfter = projectsList[0];

  return (
    <section className="premium-section bg-white py-24" id="projects-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-sm font-black uppercase tracking-[0.34em] text-brand-green">Featured Projects</h2>
            <h3 className="text-3xl font-black tracking-tight text-brand-blue sm:text-4xl">Real construction photography that builds trust instantly</h3>
            <p className="text-slate-600 leading-relaxed">A premium gallery with before-and-after storytelling and polished project presentation.</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-brand-blue text-white shadow-md'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-brand-blue'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7 premium-card overflow-hidden rounded-[2rem] animate-scale-in">
            <div className="grid min-h-[28rem] gap-0 md:grid-cols-2">
              <div className="relative min-h-[18rem] overflow-hidden">
                <img src={featuredBeforeAfter.before} alt="Before renovation" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,18,0.04),rgba(3,7,18,0.42))]" />
                <div className="absolute left-4 top-4 rounded-full bg-black/35 px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em] text-white backdrop-blur-md">Before</div>
              </div>
              <div className="relative min-h-[18rem] overflow-hidden">
                <img src={featuredBeforeAfter.after} alt="After renovation" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,18,0.04),rgba(3,7,18,0.42))]" />
                <div className="absolute left-4 top-4 rounded-full bg-brand-green/90 px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em] text-white backdrop-blur-md">After</div>
              </div>
            </div>
            <div className="p-6">
              <span className="inline-flex rounded-full bg-brand-green-light px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em] text-brand-green">Before / After showcase</span>
              <h4 className="mt-4 text-2xl font-black text-brand-blue">{featuredBeforeAfter.title}</h4>
              <p className="mt-2 text-sm text-slate-600">{featuredBeforeAfter.location}</p>
            </div>
          </div>

          <div className="lg:col-span-5 grid gap-8">
            {filteredProjects.slice(1, 3).map((project, idx) => (
              <div key={project.title} className={`group relative overflow-hidden rounded-[2rem] shadow-sm transition-all duration-300 hover:shadow-xl animate-fade-up stagger-${idx + 1}`}>
                <img src={project.image} alt={project.title} className="h-[14rem] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/35 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="mb-2 inline-flex rounded-md bg-brand-green px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em]">{project.category}</span>
                  <h4 className="text-xl font-bold">{project.title}</h4>
                  <div className="mt-2 flex items-center text-sm text-slate-200">
                    <MapPin className="mr-1 h-4 w-4 text-brand-green" />
                    {project.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, idx) => (
            <div 
              key={idx}
              className={`group relative h-[24rem] overflow-hidden rounded-[1.75rem] border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover-lift animate-scale-in stagger-${(idx % 6) + 1}`}
            >
              <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/38 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col justify-end p-6 text-white">
                <span className="mb-3 inline-flex w-fit rounded-md bg-brand-green px-3 py-1 text-xs font-bold uppercase tracking-wider">{project.category}</span>
                <h4 className="mb-2 text-xl font-bold tracking-tight">{project.title}</h4>
                <div className="mb-4 flex items-center text-sm font-light text-slate-300">
                  <MapPin className="mr-1 h-4 w-4 text-brand-green" />
                  {project.location}
                </div>
                <Link href={project.link} className="mt-1 flex items-center text-sm font-bold text-white group/btn">
                  View Details
                  <span className="ml-2 rounded-full bg-white/20 p-2 transition-all duration-200 group-hover/btn:bg-brand-green">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-xl border border-brand-blue px-8 py-3.5 text-sm font-bold text-brand-blue transition-all duration-200 hover:bg-brand-blue hover:text-white hover-lift"
          >
            Browse All Projects
          </Link>
        </div>

      </div>
    </section>
  );
}
