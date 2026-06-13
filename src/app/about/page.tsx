'use strict';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/components/About';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <div className="bg-brand-blue text-white py-20 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-sans">About Veyes Infraas</h1>
          <p className="mt-4 text-lg text-brand-blue-light max-w-2xl mx-auto">
            Learn about our legacy, values, and commitment to building sustainable and modern structures in Chennai.
          </p>
        </div>
        <About />
      </main>
      <Footer />
    </>
  );
}
