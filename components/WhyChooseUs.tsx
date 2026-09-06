'use client';

import { motion } from 'framer-motion';

const features = [
  'Practical Learning',
  'Industry-Focused Curriculum',
  'Hands-on Labs',
  'Career-Oriented Training',
  'Expert Guidance',
  'Certification Support',
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#07110d]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
          WHY CHOOSE <span className="text-[#00ffb4]">INDIAN CYBER SQUAD?</span>
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-6 rounded-2xl border border-[#00ffb4]/10 hover:border-[#00ffb4]/50 transition text-center"
            >
              <div className="text-3xl text-[#00ffb4]">⚡</div>
              <h4 className="text-white font-bold mt-2">{feature}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}