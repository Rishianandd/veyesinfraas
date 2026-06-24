'use strict';
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, ArrowRight, Phone, Mail } from 'lucide-react';
import Associations from './Associations';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="w-full z-50 sticky top-0">

      {/* ════════════════════════════════════
          TOP CONTACT BAR
          Blue background · White text · Quick access
          ════════════════════════════════════ */}
      <div className="hidden md:block bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">

            <div className="flex items-center h-full space-x-6 text-sm font-semibold">
              <div className="flex items-center gap-3">
                <svg className="h-3 w-3 text-white/90" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                <span>Chennai, Tamil Nadu</span>
              </div>

              <a href="mailto:admin@veyesinfraas.co" className="hover:text-brand-green">admin@veyesinfraas.co</a>
              <a href="tel:+919444385611" className="hover:text-brand-green">+91 94443 85611</a>
              <a href="tel:+919381045611" className="hover:text-brand-green">+91 93810 45611</a>
            </div>

            <div className="flex items-center h-full space-x-6 text-sm font-semibold">
              <a href="https://www.veyesinfraas.com" className="hover:text-brand-green">www.veyesinfraas.com</a>
            </div>

          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
          MAIN NAVIGATION BAR
          ════════════════════════════════════ */}
      <header
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-md py-2'
            : 'bg-white border-b border-slate-100 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo — Left */}
            <div className="flex-shrink-0">
              <Link href="/" className="group transition-transform duration-300 hover:scale-[1.02] inline-block">
                <Image
                  src="/logos/veyes-logo.png"
                  alt="Veyes Infraas"
                  width={320}
                  height={90}
                  priority
                  className="h-12 md:h-[70px] w-auto transition-all duration-300"
                />
              </Link>
            </div>

            {/* Navigation — Center (Desktop) */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-bold tracking-wide transition-colors duration-200 relative group ${
                      isActive
                        ? 'text-brand-green'
                        : 'text-brand-blue hover:text-brand-green'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-green transition-all duration-200 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button — Right (Desktop) */}
            <div className="hidden md:flex items-center">
              <Link
                href="/contact?type=quote"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-extrabold rounded-lg text-white bg-brand-green hover:bg-brand-green-dark transition-all duration-200 hover-lift shadow-md shadow-brand-green/10"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-brand-blue hover:text-brand-green hover:bg-slate-50 focus:outline-none transition-colors duration-200"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════
            MOBILE DROPDOWN MENU
            ════════════════════════════════════ */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
          }`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-4 space-y-1 bg-white border-t border-slate-100 shadow-lg">

            {/* Mobile contact quick-access */}
            <div className="px-3 py-3 border-b border-slate-100 mb-2 space-y-1.5">
              <a href="tel:+919444385611" className="flex items-center space-x-2 text-xs font-semibold text-brand-blue hover:text-brand-green transition-colors">
                <Phone className="h-3 w-3 text-brand-green" />
                <span>+91 94443 85611</span>
              </a>
              <a href="tel:+919381045611" className="flex items-center space-x-2 text-xs font-semibold text-brand-blue hover:text-brand-green transition-colors">
                <Phone className="h-3 w-3 text-brand-green" />
                <span>+91 93810 45611</span>
              </a>
              <a href="mailto:admin@veyesinfraas.co" className="flex items-center space-x-2 text-xs font-semibold text-brand-blue hover:text-brand-green transition-colors">
                <Mail className="h-3 w-3 text-brand-green" />
                <span>admin@veyesinfraas.co</span>
              </a>
            </div>

            {/* Nav Links */}
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-semibold transition-colors duration-200 ${
                    isActive
                      ? 'text-brand-green bg-brand-green-light/20'
                      : 'text-brand-blue hover:text-brand-green hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Mobile affiliation badges */}
              <div className="px-3 pt-4 border-t border-slate-100">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Affiliations</p>
                <div className="flex flex-wrap gap-2">
                  {['Rotary', 'RMB', 'BAI', 'CNI'].map((org) => (
                    <span key={org} className="px-2 py-0.5 rounded text-[9px] font-extrabold border border-brand-blue text-brand-blue">
                      {org}
                    </span>
                  ))}
                </div>
              </div>

            {/* Mobile CTA */}
            <div className="px-3 pt-3">
              <Link
                href="/contact?type=quote"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center px-4 py-3 text-base font-bold rounded-lg text-white bg-brand-green hover:bg-brand-green-dark transition-all duration-200 shadow-md"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <Associations />
    </div>
  );
}
