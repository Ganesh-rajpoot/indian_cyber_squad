'use client';

import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function TopBar() {
  return (
    <div className="bg-[#07110d] border-b border-[#00ffb4]/10 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10 text-xs">
          {/* Left side - Contact Info */}
          <div className="flex items-center gap-6">
            <a 
              href="tel:+919720975115" 
              className="flex items-center gap-2 text-gray-400 hover:text-[#00ffb4] transition-colors duration-200"
            >
              <Phone size={14} className="text-[#00ffb4]" />
              <span>+91 9720975115</span>
            </a>
            <a 
              href="mailto:info@indiancybersquad.com" 
              className="flex items-center gap-2 text-gray-400 hover:text-[#00ffb4] transition-colors duration-200"
            >
              <Mail size={14} className="text-[#00ffb4]" />
              <span>info@indiancybersquad.com</span>
            </a>
            <span className="flex items-center gap-2 text-gray-400">
              <MapPin size={14} className="text-[#00ffb4]" />
              <span>Agra, Uttar Pradesh, India</span>
            </span>
          </div>

          {/* Right side - Status/Quick links */}
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 text-[#00ffb4]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ffb4] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ffb4]"></span>
              </span>
              <span className="font-mono text-[10px] tracking-wider">SYSTEM ONLINE</span>
            </span>
            <span className="text-gray-600">|</span>
            <a href="/contact" className="text-gray-400 hover:text-[#00ffb4] transition-colors duration-200">
              Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}