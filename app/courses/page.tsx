import { SectionHeading } from '@/components/SectionHeading';
import { courses } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export default function CoursesPage() {
  return (
    <main className="min-h-screen pt-20 bg-[#050505]">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            subtitle="// COURSES"
            title="EXPLORE OUR COURSES"
            description="Choose from our comprehensive range of cybersecurity and networking courses designed for real-world success."
            align="center"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className="glass-panel p-6 rounded-2xl border border-[#00ffb4]/10 hover:border-[#00ffb4]/60 transition-all duration-300 group"
              >
                <div className="text-5xl mb-4 text-[#00ffb4] group-hover:scale-110 transition-transform">
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
                console.log("FFFFFFFF",course.slug)
                <Link
                  href={`/courses/${course.slug}`}
                  className="inline-block mt-4 text-[#00ffb4] font-medium text-sm group-hover:underline"
                >
                  View Course →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}