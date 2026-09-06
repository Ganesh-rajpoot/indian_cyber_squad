'use client';

import { motion } from 'framer-motion';
import { CyberBackground } from './CyberBackground';
export function FeaturedCourse() {
  return (
    <section className="py-24 bg-[#050505]">
        <CyberBackground/>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-[#00ffb4] font-mono text-sm">// FEATURED</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
              BECOME A CYBERSECURITY PROFESSIONAL
            </h2>
            <p className="text-gray-400 mt-4">
              Complete cybersecurity training: fundamentals, network security, ethical hacking, 
              vulnerability assessment, and defensive security.
            </p>
            <ul className="grid grid-cols-2 gap-1 mt-4 text-gray-300">
              <li>✓ Cybersecurity fundamentals</li>
              <li>✓ Network security</li>
              <li>✓ Web security</li>
              <li>✓ Vulnerability assessment</li>
              <li>✓ Ethical hacking</li>
              <li>✓ Threat detection</li>
              <li>✓ Security tools</li>
              <li>✓ Defensive security</li>
            </ul>
            <a
              href="/courses/cyber-security"
              className="inline-block mt-8 bg-[#00ffb4] text-[#050505] font-semibold px-8 py-3 rounded-full shadow-xl shadow-[#00ffb4]/20 hover:bg-[#00e6a0] transition"
            >
              View Course Details →
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-panel p-6 rounded-2xl border border-[#00ffb4]/20"
          >
            <div className="text-7xl text-[#00ffb4] text-center">📘</div>
            <div className="text-center text-white font-bold text-xl mt-4">
              Cyber Security Masterclass
            </div>
            <div className="text-gray-400 text-sm text-center">
              Includes certificate &amp; hands-on labs
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}