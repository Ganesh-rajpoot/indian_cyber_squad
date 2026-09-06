import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { AboutSection } from '@/components/AboutSection';
import { CoursesSection } from '@/components/CoursesSection';
import { FeaturedCourse } from '@/components/FeaturedCourse';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { CyberLab } from '@/components/CyberLab';
import { GallerySection } from '@/components/GallerySection';
import { BlogSection } from '@/components/BlogSection';
// import { ContactSection } from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutSection />
      <CoursesSection />
      <FeaturedCourse />
      <WhyChooseUs />
      <CyberLab />
      <GallerySection />
      <BlogSection />
      {/* <ContactSection /> */}
    </>
  );
}