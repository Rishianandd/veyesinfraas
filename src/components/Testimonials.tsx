"use strict";
"use client";

import React from 'react';

const testimonials = [
  {
    quote: 'Veyes Infraas delivered our apartment block on time and with exceptional finish. Highly recommended.',
    author: 'R. Srinivasan, Homeowner',
  },
  {
    quote: 'Professional team, clear communication and a smooth handover. The commercial fit-out exceeded expectations.',
    author: 'A. Menon, Business Owner',
  },
  {
    quote: 'Reliable project management and great transparency in billing. A trustworthy construction partner.',
    author: 'K. Raman, Developer',
  },
];

export default function Testimonials() {
  return (
    <section className="premium-section bg-white py-20" id="testimonials">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-sm font-black uppercase tracking-[0.34em] text-brand-green">Testimonials</h2>
        <p className="mt-4 text-3xl font-black text-brand-blue">What our clients say</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div key={idx} className="premium-card rounded-2xl p-6 text-left">
              <p className="text-sm text-slate-700">“{t.quote}”</p>
              <p className="mt-4 text-xs font-bold text-slate-500">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
