'use strict';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <div className="bg-brand-blue text-white py-20 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-sans">Our Projects</h1>
          <p className="mt-4 text-lg text-brand-blue-light max-w-2xl mx-auto">
            Explore real-world residential, commercial, industrial, and interior work from Chennai.
          </p>
        </div>
        <Projects />
      </main>
      <Footer />
    </>
  );
}
