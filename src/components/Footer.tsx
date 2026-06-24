'use strict';
'use client';

import React from 'react';
import Link from 'next/link';
import { HardHat, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-blue-dark text-slate-400 pt-20 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800 animate-fade-up">
          
          {/* Brand & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-brand-blue text-white p-2.5 rounded-xl">
                <HardHat className="h-6 w-6 text-brand-green" />
              </div>
              <span className="font-sans font-black text-2xl tracking-tight text-white leading-none">
                Veyes<span className="text-brand-green"> Infraas</span>
              </span>
            </Link>
            
            <p className="text-sm text-slate-400 font-light leading-relaxed max-w-sm">
              Chennai-based construction and infrastructure specialists for residential buildings, commercial projects, industrial construction, and interior solutions.
            </p>

            <div className="text-xs text-slate-500 font-bold uppercase tracking-wider space-y-1">
              <p>Residential Building | Commercial | Industrial | Interiors</p>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 bg-slate-800 hover:bg-brand-green text-slate-300 hover:text-white rounded-xl transition-colors duration-200"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 bg-slate-800 hover:bg-brand-green text-slate-300 hover:text-white rounded-xl transition-colors duration-200"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 bg-slate-800 hover:bg-brand-green text-slate-300 hover:text-white rounded-xl transition-colors duration-200"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3.5 text-sm font-light">
              <li>
                <Link href="/" className="hover:text-brand-green transition-colors duration-150">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-green transition-colors duration-150">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-green transition-colors duration-150">Services</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-brand-green transition-colors duration-150">Projects</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-green transition-colors duration-150">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services Offered (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-3.5 text-sm font-light">
              <li>
                <Link href="/services#residential" className="hover:text-brand-green transition-colors duration-150">Residential Buildings</Link>
              </li>
              <li>
                <Link href="/services#commercial" className="hover:text-brand-green transition-colors duration-150">Commercial Buildings</Link>
              </li>
              <li>
                <Link href="/services#industrial" className="hover:text-brand-green transition-colors duration-150">Industrial Projects</Link>
              </li>
              <li>
                <Link href="/services#interiors" className="hover:text-brand-green transition-colors duration-150">Interior Solutions</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Sairam Villas, Plot No. 61,<br />
                  Gajalakshmi Street,<br />
                  Lakshmi Nagar,<br />
                  Mudichur Road, Chennai – 600048<br />
                  <span className="text-[10px] text-slate-500 font-bold block mt-0.5">(Opposite Bank of Baroda)</span>
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                <span className="leading-none">
                  +91 94443 85611<br />
                  <span className="block mt-1.5">+91 93810 45611</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-green flex-shrink-0" />
                <a href="mailto:admin@veyesinfraas.co" className="hover:text-brand-green transition-colors">
                  admin@veyesinfraas.co
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom (Copyright, Legal, Back to Top) */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 text-xs font-light animate-fade-up stagger-2">
          <div>
            &copy; {new Date().getFullYear()} Veyes Infraas. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="https://www.veyesinfraas.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-150 font-medium text-brand-green">
              www.veyesinfraas.com
            </a>
            <Link href="/privacy" className="hover:text-white transition-colors duration-150">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-150">Terms & Conditions</Link>
            
            <button
              onClick={handleScrollToTop}
              className="bg-slate-800 hover:bg-brand-green hover:text-white p-2.5 rounded-lg transition-colors duration-200"
              aria-label="Back to Top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
