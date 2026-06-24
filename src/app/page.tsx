'use strict';
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Banner Section */}
        <Hero />

        {/* Construction Capabilities Section */}
        <Services />

        {/* Company Overview Section */}
        <About />

        {/* Selected Portfolio Highlights Section */}
        <Projects />

        {/* Value Proposition & Integrity Section */}
        <WhyChooseUs />

        {/* Inquiry & Lead Intake Form Section */}
        <Contact />
      </main>

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}
