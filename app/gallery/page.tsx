import { SectionHeading } from '@/components/SectionHeading';
import Image from 'next/image';

export default function GalleryPage() {
  const galleryImages = [
    { id: 1, category: 'Classroom', url: 'https://res.cloudinary.com/dhwhnvqkr/image/upload/v1788748539/IMG_4111.JPG_yjknqu.jpg' },
    { id: 2, category: 'Workshop', url: 'https://res.cloudinary.com/dhwhnvqkr/image/upload/v1788748538/IMG_7814.JPG_tchxdj.jpg' },
    { id: 3, category: 'Labs', url: 'https://res.cloudinary.com/dhwhnvqkr/image/upload/v1788748538/IMG_7811.JPG_htbdje.jpg' },
    { id: 4, category: 'Training', url: 'https://res.cloudinary.com/dhwhnvqkr/image/upload/v1788748538/IMG_7809.JPG_dxkugc.jpg' },
    { id: 5, category: 'Events', url: 'https://res.cloudinary.com/dhwhnvqkr/image/upload/v1788748538/IMG_7812.JPG_e6uneo.jpg' },
    { id: 6, category: 'Students', url: 'https://res.cloudinary.com/dhwhnvqkr/image/upload/v1788748537/IMG_7815.JPG_zek2b8.jpg' },
    { id: 7, category: 'Classroom', url: 'https://res.cloudinary.com/dhwhnvqkr/image/upload/v1788748537/IMG_7805.JPG_rxlo8i.jpg' },
    { id: 8, category: 'Workshop', url: 'https://res.cloudinary.com/dhwhnvqkr/image/upload/v1788748537/IMG_7804.JPG_ta0ep5.jpg' },
    { id: 9, category: 'Labs', url: 'https://res.cloudinary.com/dhwhnvqkr/image/upload/v1788748537/IMG_7816.JPG_eeunmd.jpg' },
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