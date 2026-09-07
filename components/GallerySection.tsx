// 'use client';

// import { motion } from 'framer-motion';

// const galleryItems = [1, 2, 3, 4, 5, 6];

// export function GallerySection() {
//   return (
//     <section id="gallery" className="py-24 bg-[#07110d]">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-4xl font-bold text-white text-center">GALLERY</h2>
        
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
//           {galleryItems.map((item, index) => (
//             <motion.div
//               key={item}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ delay: index * 0.05 }}
//               viewport={{ once: true }}
//               className="bg-[#0f1f1a] aspect-square rounded-xl border border-[#00ffb4]/10 hover:scale-[1.02] transition flex items-center justify-center text-[#00ffb4]/40 text-4xl cursor-pointer"
//             >
//               🖼️
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const galleryItems = [
  {
    id: 1,
    title: 'Cybersecurity Training',
    category: 'Classroom',
    image: 'https://res.cloudinary.com/dhwhnvqkr/image/upload/v1788748538/IMG_7811.JPG_htbdje.jpg',
  },
  {
    id: 2,
    title: 'Ethical Hacking Workshop',
    category: 'Workshop',
    image: 'https://res.cloudinary.com/dhwhnvqkr/image/upload/v1788748537/IMG_2717.JPG_kysvwi.jpg',
  },
  {
    id: 3,
    title: 'Network Security Lab',
    category: 'Labs',
    image: 'https://res.cloudinary.com/dhwhnvqkr/image/upload/v1788748537/IMG_7807.JPG_hfh4n5.jpg',
  },
  {
    id: 4,
    title: 'Cybersecurity Research',
    category: 'Training',
    image: 'https://res.cloudinary.com/dhwhnvqkr/image/upload/v1788748537/IMG_1393.JPG_ocjqf3.jpg',
  },
  {
    id: 5,
    title: 'Tech Conference Event',
    category: 'Events',
    image: 'https://res.cloudinary.com/dhwhnvqkr/image/upload/v1788748537/IMG_7816.JPG_eeunmd.jpg',
  },
  {
    id: 6,
    title: 'Students Learning',
    category: 'Students',
    image: 'https://res.cloudinary.com/dhwhnvqkr/image/upload/v1788748538/IMG_7809.JPG_dxkugc.jpg',
  },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-[#07110d]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#00ffb4] font-mono text-sm">// GALLERY</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            CYBERSECURITY <span className="text-[#00ffb4]">IN ACTION</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Explore our training facilities, workshops, and events.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="relative aspect-square rounded-xl overflow-hidden border border-[#00ffb4]/10 hover:border-[#00ffb4]/40 transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedImage(item.id)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              
              {/* Overlay with category */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="bg-[#00ffb4]/90 text-[#050505] text-xs font-bold px-3 py-1 rounded-full inline-block w-fit">
                  {item.category}
                </span>
                <p className="text-white text-sm mt-2 font-medium">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#050505]/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 20 }}
              className="relative max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden border border-[#00ffb4]/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#050505]/80 border border-[#00ffb4]/20 text-white hover:bg-[#00ffb4]/20 transition-colors flex items-center justify-center"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
              
              <div className="relative w-full h-[70vh]">
                <Image
                  src={galleryItems.find(item => item.id === selectedImage)?.image || ''}
                  alt="Gallery image"
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#050505] to-transparent p-6">
                <p className="text-white text-lg font-bold">
                  {galleryItems.find(item => item.id === selectedImage)?.title}
                </p>
                <p className="text-[#00ffb4] text-sm">
                  {galleryItems.find(item => item.id === selectedImage)?.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}