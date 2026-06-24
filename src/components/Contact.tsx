'use strict';
'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted Inquiry to Veyes Infraas:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'Residential',
        message: '',
      });
    }, 4000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Registered Office',
      details: (
        <span>
          Sairam Villas, Plot No. 61,<br />
          Gajalakshmi Street,<br />
          Lakshmi Nagar,<br />
          Mudichur Road, Chennai – 600048<br />
          <span className="font-semibold text-slate-700">(Opposite Bank of Baroda)</span>
        </span>
      ),
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: (
        <span>
          +91 94443 85611<br />
          +91 93810 45611
        </span>
      ),
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'admin@veyesinfraas.co',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Mon - Sat: 9:00 AM - 6:00 PM (Sunday Closed)',
    },
  ];

  return (
    <>
      <section className="bg-brand-blue text-white py-12" id="contact-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-black">Ready to start your project?</h3>
              <p className="mt-2 text-slate-200">Get a competitive quote within 48 hours. Trusted delivery and clear milestones.</p>
            </div>

            <div className="flex gap-3">
              <a href="tel:+919444385611" className="inline-flex items-center gap-2 rounded-xl bg-brand-green px-6 py-3 text-sm font-bold text-white hover:bg-brand-green-dark transition-all">Call Now</a>
              <a href="https://wa.me/919444385611" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/8 px-6 py-3 text-sm font-bold text-white backdrop-blur-md">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <section className="premium-section py-24 bg-white" id="contact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Contact Details (Left Side) */}
          <div className="lg:col-span-5 space-y-10 animate-fade-up">
            <div className="space-y-4">
              <h2 className="text-sm font-extrabold uppercase tracking-widest text-brand-green">
                Contact Us
              </h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-brand-blue tracking-tight leading-tight">
                Let’s discuss your next project in Chennai
              </h3>
              <div className="h-1.5 w-24 bg-brand-green rounded-full mt-4" />
              <p className="text-slate-600 font-light leading-relaxed pt-2">
                Reach out for residential, commercial, industrial, and interior construction enquiries. Our team is focused on clear communication, timely delivery, and trusted execution.
              </p>
            </div>

            {/* Info Cards Stack */}
            <div className="space-y-6">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <div key={idx} className="flex space-x-4">
                    <div className="bg-brand-blue-light text-brand-blue p-3.5 rounded-xl h-fit flex-shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-blue text-sm uppercase tracking-wider">
                        {info.title}
                      </h4>
                      <div className="text-slate-600 text-sm mt-1 font-light leading-relaxed">
                        {info.details}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Inquiry Form (Right Side) */}
          <div className="lg:col-span-7 animate-scale-in stagger-2">
            <div className="premium-card rounded-[2rem] p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-green/10 rounded-full blur-2xl -mr-6 -mt-6" />
              
              <h3 className="text-2xl font-bold text-brand-blue mb-6">
                Send an Inquiry
              </h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 bg-white rounded-[1.75rem] border border-slate-100 p-6 animate-fade-up">
                  <CheckCircle className="h-16 w-16 text-brand-green" />
                  <h4 className="text-xl font-bold text-brand-blue">Message Sent Successfully!</h4>
                  <p className="text-slate-500 text-sm max-w-sm">
                    Thank you for reaching out. A representative from Veyes Infraas will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue-light transition-all duration-200"
                      />
                    </div>
                    
                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue-light transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 94443 85611"
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue-light transition-all duration-200"
                      />
                    </div>

                    {/* Project Type */}
                    <div className="space-y-2">
                      <label htmlFor="projectType" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        id="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue-light transition-all duration-200"
                      >
                        <option value="Residential">Residential Construction</option>
                        <option value="Commercial">Commercial Buildings</option>
                        <option value="Industrial">Industrial Projects</option>
                        <option value="Interiors">Interior Solutions</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Inquiry Details
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project requirements..."
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue-light transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-4 border border-transparent text-sm font-bold rounded-2xl text-white bg-brand-green hover:bg-brand-green-dark hover-lift transition-all duration-200 shadow-md shadow-brand-green/10"
                  >
                    Get Free Quote
                    <Send className="ml-2 h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
      </section>
    </>
  );
}
