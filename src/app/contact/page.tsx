'use strict';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <div className="bg-brand-blue text-white py-20 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-sans">Contact Us</h1>
          <p className="mt-4 text-lg text-brand-blue-light max-w-2xl mx-auto">
            Get in touch with our team of experts today. Let's discuss your next project.
          </p>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
