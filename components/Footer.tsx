'use client';

import Link from 'next/link';

import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from 'react-icons/fa';

import {
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-[#00ffb4]/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              INDIAN CYBER <span className="text-[#00ffb4]">SQUAD</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              "Master Cybersecurity. Build Your Digital Defense."
            </p>
            <p className="text-gray-500 text-xs">
              Practical cybersecurity & networking education for the next generation of professionals.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[#00ffb4]/10 border border-[#00ffb4]/20 flex items-center justify-center text-[#00ffb4] hover:bg-[#00ffb4]/20 hover:border-[#00ffb4]/40 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram  size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[#00ffb4]/10 border border-[#00ffb4]/20 flex items-center justify-center text-[#00ffb4] hover:bg-[#00ffb4]/20 hover:border-[#00ffb4]/40 transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[#00ffb4]/10 border border-[#00ffb4]/20 flex items-center justify-center text-[#00ffb4] hover:bg-[#00ffb4]/20 hover:border-[#00ffb4]/40 transition-all duration-300"
                aria-label="YouTube"
              >
                <FaYoutube size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[#00ffb4]/10 border border-[#00ffb4]/20 flex items-center justify-center text-[#00ffb4] hover:bg-[#00ffb4]/20 hover:border-[#00ffb4]/40 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 relative">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#00ffb4]"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#00ffb4] transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#00ffb4] transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-[#00ffb4] transition-colors duration-200">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-[#00ffb4] transition-colors duration-200">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-400 hover:text-[#00ffb4] transition-colors duration-200">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#00ffb4] transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Courses */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 relative">
              Our Courses
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#00ffb4]"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/courses/networking" className="text-gray-400 hover:text-[#00ffb4] transition-colors duration-200">
                  Networking
                </Link>
              </li>
              <li>
                <Link href="/courses/ccna" className="text-gray-400 hover:text-[#00ffb4] transition-colors duration-200">
                  CCNA
                </Link>
              </li>
              <li>
                <Link href="/courses/mcsa" className="text-gray-400 hover:text-[#00ffb4] transition-colors duration-200">
                  MCSA
                </Link>
              </li>
              <li>
                <Link href="/courses/cyber-security" className="text-gray-400 hover:text-[#00ffb4] transition-colors duration-200">
                  Cyber Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Legal */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 relative">
              Get In Touch
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#00ffb4]"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <Phone size={16} className="text-[#00ffb4] mt-0.5 flex-shrink-0" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail size={16} className="text-[#00ffb4] mt-0.5 flex-shrink-0" />
                <span>info@indiancybersquad.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={16} className="text-[#00ffb4] mt-0.5 flex-shrink-0" />
                <span>India</span>
              </li>
            </ul>

            {/* Legal Links */}
            <div className="mt-6 pt-6 border-t border-[#00ffb4]/10">
              <h4 className="text-white font-semibold text-sm mb-3">Legal</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/privacy-policy" className="text-gray-500 hover:text-[#00ffb4] transition-colors duration-200">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-500 hover:text-[#00ffb4] transition-colors duration-200">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="text-gray-500 hover:text-[#00ffb4] transition-colors duration-200">
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#00ffb4]/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © {currentYear} <span className="text-[#00ffb4]">Indian Cyber Squad</span>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3 text-xs">
            <span className="text-gray-600">🔒</span>
            <span className="text-gray-500">Secure & Encrypted</span>
            <span className="w-px h-4 bg-gray-700"></span>
            <span className="text-gray-500">⚡ SYSTEM ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}