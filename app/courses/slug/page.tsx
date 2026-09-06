import { notFound } from 'next/navigation';
import { courses } from '@/lib/data';
import { SectionHeading } from '@/components/SectionHeading';
import Image from 'next/image';
import Link from 'next/link';

// Generate static paths for all courses
export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

// Page component
export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  const learningOutcomes = [
    'Core concepts and fundamentals',
    'Hands-on practical skills',
    'Real-world scenarios',
    'Industry best practices',
    'Troubleshooting techniques',
    'Security implementation',
  ];

  return (
    <main className="min-h-screen pt-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <Link href="/courses" className="inline-flex items-center gap-2 text-[#00ffb4] hover:underline mb-6">
          ← Back to Courses
        </Link>

        {/* Course Header */}
        <div className="glass-panel p-8 rounded-2xl border border-[#00ffb4]/20 mb-8">
          <div className="flex items-start gap-6 flex-wrap">
            <div className="text-7xl">{course.icon}</div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-white">{course.title}</h1>
              <p className="text-gray-400 text-lg mt-2">{course.longDescription || course.description}</p>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="bg-[#00ffb4]/10 text-[#00ffb4] px-3 py-1 rounded-full text-sm">
                  {course.level}
                </span>
                <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                  ⏱ {course.duration}
                </span>
                <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                  📚 {course.lessons} lessons
                </span>
                {course.certificate && (
                  <span className="bg-[#00ffb4]/10 text-[#00ffb4] px-3 py-1 rounded-full text-sm">
                    🎓 Certificate Included
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Course Image */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden border border-[#00ffb4]/10 mb-8">
          <Image
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=400&fit=crop"
            alt={course.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Course Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">About This Course</h2>
              <p className="text-gray-400 leading-relaxed">
                This comprehensive {course.title} course is designed to equip you with 
                practical skills and knowledge needed in today's cybersecurity landscape. 
                You'll learn through hands-on exercises, real-world scenarios, and 
                expert-led instruction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">What You'll Learn</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {learningOutcomes.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <span className="text-[#00ffb4]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="glass-panel p-6 rounded-2xl border border-[#00ffb4]/10">
              <h3 className="text-white font-bold mb-3">Course Includes</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>📹 Video lectures</li>
                <li>📝 Practical assignments</li>
                <li>🔬 Hands-on labs</li>
                <li>📊 Quizzes & assessments</li>
                <li>🎓 Certificate of completion</li>
                <li>💬 24/7 support</li>
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center bg-[#00ffb4] text-[#050505] font-semibold px-6 py-3 rounded-full hover:bg-[#00e6a0] transition mt-4"
              >
                Enroll Now →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}