"use strict";
"use client";

import React from 'react';
import Image from 'next/image';

const associations = [
  { 
    id: 'rotary', 
    name: 'Rotary International',
    src: '/logos/rotary.png',
    alt: 'Rotary International Logo'
  },
  { 
    id: 'rmb', 
    name: 'Rotary Means Business',
    src: '/logos/rmb.png',
    alt: 'RMB Logo'
  },
  { 
    id: 'bai', 
    name: 'Builders Association of India',
    src: '/logos/bai.png',
    alt: 'BAI Logo'
  },
  { 
    id: 'cni', 
    name: 'Construction Services of India',
    src: '/logos/cni.png',
    alt: 'CNI Logo'
  },
];

export default function Associations() {
  return (
    <section className="bg-white py-4 md:py-8 border-t border-slate-100" id="associations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center flex-wrap gap-6 md:gap-10">
          {associations.map((org) => (
            <div key={org.id} className="group flex flex-col items-center justify-center">
              <div className="relative h-16 w-32 md:h-20 md:w-40 flex items-center justify-center">
                <Image
                  src={org.src}
                  alt={org.alt}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 128px, 160px"
                  priority={false}
                />
              </div>
              <span className="mt-2 text-xs md:text-sm font-semibold text-slate-600 text-center">
                {org.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
