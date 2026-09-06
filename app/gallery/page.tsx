import { SectionHeading } from '@/components/SectionHeading';
import Image from 'next/image';

export default function GalleryPage() {
  const galleryImages = [
    { id: 1, category: 'Classroom', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop' },
    { id: 2, category: 'Workshop', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop' },
    { id: 3, category: 'Labs', url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop' },
    { id: 4, category: 'Training', url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop' },
    { id: 5, category: 'Events', url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop' },
    { id: 6, category: 'Students', url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop' },
    { id: 7, category: 'Classroom', url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop' },
    { id: 8, category: 'Workshop', url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop' },
    { id: 9, category: 'Labs', url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop' },
  ];

  const categories = ['All', 'Classroom', 'Workshop', 'Labs', 'Training', 'Events', 'Students'];

  return (
    <main className="min-h-screen pt-20 bg-[#050505]">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            subtitle="// GALLERY"
            title="CYBERSECURITY IN ACTION"
            description="Explore our training facilities, workshops, and events."
            align="center"
          />

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mt-8 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === 'All'
                    ? 'bg-[#00ffb4] text-[#050505]'
                    : 'bg-[#00ffb4]/10 text-gray-300 hover:bg-[#00ffb4]/20 border border-[#00ffb4]/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid - Masonry Style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`group relative overflow-hidden rounded-2xl border border-[#00ffb4]/10 hover:border-[#00ffb4]/40 transition-all duration-300 ${
                  index === 0 ? 'sm:row-span-2' : ''
                }`}
              >
                <div className={`relative ${index === 0 ? 'h-[500px]' : 'h-[300px]'}`}>
                  <Image
                    src={image.url}
                    alt={`${image.category} ${image.id}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <span className="bg-[#00ffb4]/90 text-[#050505] text-xs font-bold px-3 py-1 rounded-full">
                        {image.category}
                      </span>
                      <p className="text-white text-sm mt-2">View Image →</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}