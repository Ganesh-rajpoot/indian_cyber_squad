'use client';

import { motion } from 'framer-motion';
import { TypingEffect } from './TypingEffect';
import { CyberBackground } from './CyberBackground';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-10">
      <CyberBackground />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block bg-[#00ffb4]/10 border border-[#00ffb4]/20 text-[#00ffb4] px-4 py-1 rounded-full text-xs font-mono tracking-wider">
              ⚡ CYBER DEFENSE SYSTEM
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              MASTER <span className="text-[#00ffb4]">CYBERSECURITY</span>.<br />
              BUILD YOUR DIGITAL DEFENSE.
            </h1>
            
            <p className="text-gray-400 text-lg max-w-lg">
              Learn Networking, CCNA, MCSA and Cybersecurity through practical, 
              career-focused training designed for the next generation of 
              cybersecurity professionals.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="/courses" 
                className="bg-[#00ffb4] text-[#050505] font-semibold px-8 py-3 rounded-full hover:bg-[#00e6a0] transition shadow-xl shadow-[#00ffb4]/20 flex items-center gap-2"
              >
                Explore Courses →
              </a>
              <a 
                href="/about" 
                className="border border-[#00ffb4]/40 text-white px-8 py-3 rounded-full hover:bg-[#00ffb4]/10 transition"
              >
                Start Learning
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="terminal-window w-full max-w-md p-5 text-[#00ffb4] text-sm font-mono mx-auto"
          >
            <div className="flex items-center gap-2 border-b border-[#1a3a32] pb-2 mb-3 text-gray-400 text-xs">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="ml-2">INDIAN CYBER SQUAD // TERMINAL</span>
            </div>
            
            <div className="space-y-1">
              <TypingEffect 
                lines={[
                  'initializing cyber defense system...',
                  'network scanning... ✓',
                  'firewall active ✓',
                  'threat monitoring: ONLINE',
                  'system secured ✓'
                ]}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}