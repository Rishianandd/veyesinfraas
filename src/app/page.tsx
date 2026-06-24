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
import Testimonials from '@/components/Testimonials';
import Associations from '@/components/Associations';

import FloatingActionButtons from '@/components/FloatingActionButtons';

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

        {/* Services */}
        <Services />

        {/* Selected Portfolio Highlights Section */}
        <Projects />

        {/* Why Choose */}
        <WhyChooseUs />

        {/* Testimonials */}
        <Testimonials />

        {/* Associations */}
        <Associations />

        {/* Inquiry & Lead Intake Form Section */}
        <Contact />
      </main>

      {/* Corporate Footer */}
      <Footer />
      
      {/* Floating Action Buttons */}
      <FloatingActionButtons />
    </div>
  );
}
