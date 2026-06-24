'use strict';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Services from '@/components/Services';

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <div className="bg-brand-blue text-white py-20 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-sans">Our Services</h1>
          <p className="mt-4 text-lg text-brand-blue-light max-w-2xl mx-auto">
            Construction, interiors, and project delivery services built for trust and long-term value.
          </p>
        </div>
        <Services />
      </main>
      <Footer />
    </>
  );
}
