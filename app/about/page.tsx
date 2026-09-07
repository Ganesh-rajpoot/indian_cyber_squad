import { SectionHeading } from '@/components/SectionHeading';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const features = [
    { icon: '🎯', title: 'Practical Learning', desc: 'Hands-on experience with real-world scenarios' },
    { icon: '📚', title: 'Industry Curriculum', desc: 'Courses designed with industry experts' },
    { icon: '💻', title: 'Hands-on Labs', desc: 'Virtual labs for practical training' },
    { icon: '🚀', title: 'Career Focused', desc: 'Job-ready skills and certification support' },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            subtitle="// ABOUT US"
            title="WE DON'T JUST TEACH CYBERSECURITY. WE BUILD CYBER DEFENDERS."
            highlight="BUILD CYBER DEFENDERS"
            description="Indian Cyber Squad is focused on practical cybersecurity and networking education. Industry-oriented curriculum, hands-on labs, and experienced instructors to build real-world skills."
            align="center"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-[#07110d]">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To empower the next generation of cybersecurity professionals with practical skills, 
              industry-relevant knowledge, and hands-on experience. We bridge the gap between 
              theoretical learning and real-world application.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-[#00ffb4]">✓</span>
                <span>Practical, hands-on training</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-[#00ffb4]">✓</span>
                <span>Industry-expert instructors</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-[#00ffb4]">✓</span>
                <span>Career-focused curriculum</span>
              </div>
            </div>
            <Link 
              href="/courses" 
              className="inline-block bg-[#00ffb4] text-[#050505] font-semibold px-8 py-3 rounded-full hover:bg-[#00e6a0] transition shadow-xl shadow-[#00ffb4]/20"
            >
              Explore Our Courses →
            </Link>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden border border-[#00ffb4]/20">
     <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-[#00ffb4]/20 bg-black">
  <Image
    src="https://res.cloudinary.com/dhwhnvqkr/image/upload/v1788748539/IMG_4977_xsrfsu.png"
    alt="Cybersecurity mission"
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-contain"
  />
</div>
        </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose <span className="text-[#00ffb4]">Indian Cyber Squad</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="glass-panel p-6 rounded-2xl border border-[#00ffb4]/10 hover:border-[#00ffb4]/40 transition-all duration-300 text-center group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h4 className="text-white font-semibold text-lg">{feature.title}</h4>
                <p className="text-gray-400 text-sm mt-2">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Stats Section */}
      <section className="py-16 bg-[#07110d]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-[#00ffb4]">500+</div>
            <div className="text-gray-400 text-sm mt-1">Students Trained</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#00ffb4]">4+</div>
            <div className="text-gray-400 text-sm mt-1">Professional Courses</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#00ffb4]">100+</div>
            <div className="text-gray-400 text-sm mt-1">Practical Labs</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#00ffb4]">24/7</div>
            <div className="text-gray-400 text-sm mt-1">Learning Support</div>
          </div>
        </div>
      </section>
    </main>
  );
}