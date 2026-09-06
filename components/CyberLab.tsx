'use client';

import { motion } from 'framer-motion';

export function CyberLab() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="terminal-window p-6"
        >
          <div className="text-[#00ffb4] font-mono text-sm">INDIAN CYBER SQUAD // CYBER LAB</div>
          <div className="border-t border-[#1a3a32] my-3"></div>
          
          <div className="space-y-1 text-gray-300 font-mono text-sm">
            <div>&gt; initializing environment...</div>
            <div>&gt; loading security modules...</div>
            <div>&gt; network status: <span className="text-green-400">SECURE</span></div>
            <div>&gt; threat monitoring: <span className="text-green-400">ACTIVE</span></div>
            <div>&gt; lab environment: <span className="text-green-400">READY</span></div>
          </div>
          
          <a
            href="/courses"
            className="mt-4 inline-block bg-[#00ffb4] text-black font-semibold px-6 py-2 rounded-full text-sm hover:bg-[#00e6a0] transition"
          >
            [ ACCESS LAB ]
          </a>
        </motion.div>
      </div>
    </section>
  );
}