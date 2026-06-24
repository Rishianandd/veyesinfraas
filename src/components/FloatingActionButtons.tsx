'use strict';
'use client';

import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingActionButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40 pointer-events-auto">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919444385611"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center h-14 w-14 rounded-full bg-green-500 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-green-600 group"
        title="Chat with us on WhatsApp"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
      </a>

      {/* Call Button */}
      <a
        href="tel:+919444385611"
        className="flex items-center justify-center h-14 w-14 rounded-full bg-brand-blue text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-brand-green group"
        title="Call us"
        aria-label="Call Now"
      >
        <Phone className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
      </a>
    </div>
  );
}
