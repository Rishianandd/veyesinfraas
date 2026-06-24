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
      title: 'Sairam Villas Duplex',
      category: 'Residential',
      location: 'Mudichur Road, Chennai',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      link: '/projects/sairam-villas',
    },
    {
      title: 'Lakshmi Nagar Apartments',
      category: 'Residential',
      location: 'Lakshmi Nagar, Chennai',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
      link: '/projects/lakshmi-apartments',
    },
    {
      title: 'OMR IT Corridor Offices',
      category: 'Commercial',
      location: 'OMR Road, Chennai',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
      link: '/projects/omr-offices',
    },
    {
      title: 'Sriperumbudur Factory Sheds',
      category: 'Industrial',
      location: 'Industrial Park, Sriperumbudur',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
      link: '/projects/sriperumbudur-sheds',
    },
    {
      title: 'Tambaram Modular Residences',
      category: 'Interiors',
      location: 'Tambaram East, Chennai',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80',
      link: '/projects/tambaram-interiors',
    },
    {
      title: 'GST Road Showroom Space',
      category: 'Commercial',
      location: 'GST Road, Chennai',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
      link: '/projects/gst-showroom',
    },
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projectsList 
    : projectsList.filter(project => project.category === activeCategory);

  return (
    <section className="py-24 bg-white" id="projects-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-sm font-extrabold uppercase tracking-widest text-brand-green">
              Our Portfolio
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-brand-blue tracking-tight">
              Showcasing Our Engineering Handovers Across Chennai
            </h3>
            <div className="h-1.5 w-24 bg-brand-green rounded-full mt-4" />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 ${
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div 
              key={idx}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 h-[400px] hover-lift"
            >
              {/* Project Image */}
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/40 to-transparent opacity-90 transition-opacity duration-300" />
              
              {/* Content (Bottom Left) */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10 flex flex-col justify-end">
                <span className="inline-block px-3 py-1 bg-brand-green text-xs font-bold uppercase tracking-wider rounded-md w-fit mb-3">
                  {project.category}
                </span>
                
                <h4 className="text-xl font-bold font-sans tracking-tight mb-2">
                  {project.title}
                </h4>
                
                <div className="flex items-center text-sm text-slate-300 font-light mb-4">
                  <MapPin className="h-4 w-4 mr-1 text-brand-green" />
                  {project.location}
                </div>
                
                <Link 
                  href={project.link}
                  className="flex items-center text-sm font-bold text-white group/btn mt-1"
                >
                  View Details
                  <span className="ml-2 bg-white/20 p-2 rounded-full group-hover/btn:bg-brand-green transition-all duration-200">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-brand-blue text-sm font-bold rounded-lg text-brand-blue bg-transparent hover:bg-brand-blue hover:text-white transition-all duration-200 hover-lift"
          >
            Browse All Projects
          </Link>
        </div>

      </div>
    </section>
  );
}
