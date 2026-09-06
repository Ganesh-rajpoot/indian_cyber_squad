// 'use client';

// import { motion } from 'framer-motion';

// const blogPosts = [
//   {
//     id: 1,
//     slug: 'what-is-cybersecurity',
//     title: 'What is Cybersecurity?',
//     category: 'Cybersecurity',
//     excerpt: 'Learn the fundamentals of cybersecurity and why it matters in today\'s digital world.',
//     author: 'Admin',
//     date: 'Jan 15, 2026',
//     readTime: '5 min read',
//   },
//   {
//     id: 2,
//     slug: 'how-to-start-career-in-cybersecurity',
//     title: 'How to Start a Career in Cybersecurity',
//     category: 'Career',
//     excerpt: 'A step-by-step guide to building a successful career in cybersecurity.',
//     author: 'Admin',
//     date: 'Jan 20, 2026',
//     readTime: '7 min read',
//   },
//   {
//     id: 3,
//     slug: 'ccna-vs-cybersecurity',
//     title: 'CCNA vs Cybersecurity',
//     category: 'Comparison',
//     excerpt: 'Understanding the differences between CCNA and Cybersecurity career paths.',
//     author: 'Admin',
//     date: 'Jan 25, 2026',
//     readTime: '6 min read',
//   },
// ];

// export function BlogSection() {
//   return (
//     <section id="blogs" className="py-24 bg-[#050505]">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-4xl font-bold text-white text-center">BLOGS</h2>
        
//         <div className="grid md:grid-cols-3 gap-6 mt-10">
//           {blogPosts.map((post, index) => (
//             <motion.div
//               key={post.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="glass-panel p-5 rounded-2xl border border-[#00ffb4]/10 hover:border-[#00ffb4]/30 transition"
//             >
//               <div className="h-32 bg-[#0f1f1a] rounded-xl mb-3 flex items-center justify-center text-[#00ffb4]/20">
//                 📄
//               </div>
//               <span className="text-[#00ffb4] text-xs font-mono">{post.category}</span>
//               <h4 className="text-white font-bold mt-1">{post.title}</h4>
//               <p className="text-gray-400 text-sm mt-1">{post.excerpt}</p>
//               <div className="flex justify-between text-xs text-gray-500 mt-3">
//                 <span>{post.author}</span>
//                 <span>{post.readTime}</span>
//               </div>
//               <a
//                 href={`/blogs/${post.slug}`}
//                 className="text-[#00ffb4] text-sm mt-2 inline-block hover:underline"
//               >
//                 Read More →
//               </a>
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
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    slug: 'what-is-cybersecurity',
    title: 'What is Cybersecurity?',
    category: 'Cybersecurity',
    excerpt: 'Learn the fundamentals of cybersecurity and why it matters in today\'s digital world.',
    author: 'Admin',
    date: 'Jan 15, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop&q=80',
  },
  {
    id: 2,
    slug: 'how-to-start-career-in-cybersecurity',
    title: 'How to Start a Career in Cybersecurity',
    category: 'Career',
    excerpt: 'A step-by-step guide to building a successful career in cybersecurity.',
    author: 'Admin',
    date: 'Jan 20, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop&q=80',
  },
  {
    id: 3,
    slug: 'ccna-vs-cybersecurity',
    title: 'CCNA vs Cybersecurity',
    category: 'Comparison',
    excerpt: 'Understanding the differences between CCNA and Cybersecurity career paths.',
    author: 'Admin',
    date: 'Jan 25, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop&q=80',
  },
  {
    id: 4,
    slug: 'what-is-ethical-hacking',
    title: 'What is Ethical Hacking?',
    category: 'Ethical Hacking',
    excerpt: 'Explore the world of ethical hacking and how it helps organizations protect their digital assets.',
    author: 'Admin',
    date: 'Feb 1, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop&q=80',
  },
  {
    id: 5,
    slug: 'networking-fundamentals',
    title: 'Networking Fundamentals',
    category: 'Networking',
    excerpt: 'Master the basics of computer networking including protocols, topologies, and essential concepts.',
    author: 'Admin',
    date: 'Feb 5, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1535276484715-69c2a1c4f03c?w=800&h=500&fit=crop&q=80',
  },
  {
    id: 6,
    slug: 'common-cybersecurity-threats',
    title: 'Common Cybersecurity Threats',
    category: 'Threats',
    excerpt: 'Learn about the most common cybersecurity threats facing organizations today.',
    author: 'Admin',
    date: 'Feb 10, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1505289436230-9c6769b0f73f?w=800&h=500&fit=crop&q=80',
  },
];

export function BlogSection() {
  return (
    <section id="blogs" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#00ffb4] font-mono text-sm">// BLOGS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            CYBERSECURITY <span className="text-[#00ffb4]">INSIGHTS</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights in cybersecurity and networking.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass-panel rounded-2xl overflow-hidden border border-[#00ffb4]/10 hover:border-[#00ffb4]/40 transition-all duration-300 group"
            >
              {/* Featured Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3 bg-[#00ffb4]/90 text-[#050505] text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </div>
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                  <span className="flex items-center gap-1">
                    <span className="w-6 h-6 rounded-full bg-[#00ffb4]/10 flex items-center justify-center text-[#00ffb4] text-[10px]">👤</span>
                    {post.author}
                  </span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00ffb4] transition-colors line-clamp-2">
                  <Link href={`/blogs/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-400 text-sm line-clamp-2">{post.excerpt}</p>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#00ffb4]/10">
                  <span className="text-xs text-gray-500">📖 {post.readTime}</span>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="text-[#00ffb4] text-sm font-medium hover:underline inline-flex items-center gap-1 group"
                  >
                    Read More
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Blogs CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 bg-[#00ffb4]/10 border border-[#00ffb4]/20 text-[#00ffb4] px-6 py-3 rounded-full hover:bg-[#00ffb4]/20 transition-all duration-300 font-medium"
          >
            View All Blogs
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}