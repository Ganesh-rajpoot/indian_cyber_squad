'use client';

import { motion } from 'framer-motion';
import { courses } from '@/lib/data';
import { SectionHeading } from './SectionHeading';

export function CoursesSection() {
  return (
    <section id="courses" className="py-24 bg-[#07110d]">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading 
          subtitle="// COURSES"
          title="EXPLORE OUR COURSES"
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-6 rounded-2xl card-hover border border-[#00ffb4]/10 hover:border-[#00ffb4]/60 group"
            >
              <div className="text-4xl mb-4 text-[#00ffb4] group-hover:scale-110 transition">
                {course.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{course.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{course.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-[#00ffb4]/10 text-[#00ffb4] px-2 py-0.5 rounded text-xs">
                  {course.level}
                </span>
                <span className="bg-gray-800 text-gray-300 px-2 py-0.5 rounded text-xs">
                  {course.duration}
                </span>
                <span className="bg-gray-800 text-gray-300 px-2 py-0.5 rounded text-xs">
                  {course.lessons} lessons
                </span>
              </div>
              
              <a 
                href={`/courses/${course.slug}`}
                className="inline-block mt-4 text-[#00ffb4] font-medium text-sm group-hover:underline"
              >
                View Course →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}