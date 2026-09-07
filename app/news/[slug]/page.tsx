// import { notFound } from 'next/navigation';
// import { newsItems } from '@/lib/data';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, Tag } from 'lucide-react';

// // Generate static paths for all news items
// export async function generateStaticParams() {
//   return newsItems.map((news) => ({
//     slug: news.slug,
//   }));
// }

// // This is the page component for individual news
// export default function NewsDetailPage({ params }: { params: { slug: string } }) {
//   // Find the news item based on the slug
//   const news = newsItems.find((item) => item.slug === params.slug);

//   // If news not found, show 404
//   if (!news) {
//     notFound();
//   }

//   // Get related news (excluding current)
//   const relatedNews = newsItems.filter(item => item.id !== news.id).slice(0, 2);

//   return (
//     <main className="min-h-screen pt-24 bg-[#050505]">
//       <div className="max-w-4xl mx-auto px-4 py-12">
//         {/* Back Button */}
//         <Link 
//           href="/news" 
//           className="inline-flex items-center gap-2 text-[#00ffb4] hover:underline mb-6 transition-colors"
//         >
//           <ArrowLeft size={18} />
//           Back to News
//         </Link>

//         {/* Article Header */}
//         <div className="mb-8">
//           <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
//             <span className="bg-[#00ffb4]/10 text-[#00ffb4] px-3 py-1 rounded-full text-xs font-bold">
//               {news.category}
//             </span>
//             <span className="flex items-center gap-1">
//               <Calendar size={14} />
//               {news.date}
//             </span>
//             <span className="flex items-center gap-1">
//               <Clock size={14} />
//               {news.readTime}
//             </span>
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold text-white">{news.title}</h1>
//           <div className="flex items-center gap-3 mt-4 text-gray-400">
//             <span className="flex items-center gap-1">
//               <User size={16} />
//               {news.author}
//             </span>
//           </div>
//         </div>

//         {/* Featured Image */}
//         <div className="relative h-[400px] rounded-2xl overflow-hidden border border-[#00ffb4]/10 mb-8">
//           <Image
//             src={news.image}
//             alt={news.title}
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>

//         {/* Article Content */}
//         <article className="prose prose-invert prose-lg max-w-none">
//           <div className="text-gray-300 leading-relaxed space-y-6">
//             <p className="text-xl text-gray-200">{news.excerpt}</p>
            
//             {/* Render HTML content */}
//             <div dangerouslySetInnerHTML={{ __html: news.content || '' }} />
//           </div>
//         </article>

//         {/* Tags */}
//         <div className="mt-8 pt-6 border-t border-[#00ffb4]/10">
//           <div className="flex items-center gap-2 flex-wrap">
//             <Tag size={16} className="text-[#00ffb4]" />
//             {news.tags.map((tag) => (
//               <span key={tag} className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
//                 #{tag}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Share & Actions */}
//         <div className="mt-6 pt-6 border-t border-[#00ffb4]/10 flex flex-wrap items-center justify-between gap-4">
//           <div className="flex items-center gap-3">
//             <span className="text-gray-400 text-sm">Share this article:</span>
//             <button className="w-10 h-10 rounded-full bg-[#00ffb4]/10 border border-[#00ffb4]/20 text-[#00ffb4] hover:bg-[#00ffb4]/20 transition flex items-center justify-center">
//               <Share2 size={18} />
//             </button>
//             <button className="w-10 h-10 rounded-full bg-[#00ffb4]/10 border border-[#00ffb4]/20 text-[#00ffb4] hover:bg-[#00ffb4]/20 transition flex items-center justify-center">
//               <Bookmark size={18} />
//             </button>
//           </div>
//           <Link
//             href="/news"
//             className="text-[#00ffb4] hover:underline text-sm"
//           >
//             More News →
//           </Link>
//         </div>

//         {/* Related News */}
//         {relatedNews.length > 0 && (
//           <div className="mt-12 pt-8 border-t border-[#00ffb4]/10">
//             <h3 className="text-2xl font-bold text-white mb-6">Related News</h3>
//             <div className="grid md:grid-cols-2 gap-4">
//               {relatedNews.map((related) => (
//                 <Link
//                   key={related.id}
//                   href={`/news/${related.slug}`}
//                   className="glass-panel p-4 rounded-xl border border-[#00ffb4]/10 hover:border-[#00ffb4]/30 transition-all duration-300 group"
//                 >
//                   <div className="flex items-center gap-4">
//                     <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
//                       <Image
//                         src={related.image}
//                         alt={related.title}
//                         fill
//                         className="object-cover group-hover:scale-110 transition-transform duration-300"
//                       />
//                     </div>
//                     <div>
//                       <h4 className="text-white font-semibold group-hover:text-[#00ffb4] transition-colors line-clamp-2">
//                         {related.title}
//                       </h4>
//                       <span className="text-xs text-gray-500">{related.date}</span>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }

import { notFound } from 'next/navigation';
import { newsItems } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, Tag } from 'lucide-react';

// Generate static paths for all news items
export async function generateStaticParams() {
  return newsItems.map((news) => ({
    slug: news.slug,
  }));
}

// Generate metadata for each news article
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const news = newsItems.find((item) => item.slug === slug);
  
  if (!news) {
    return {
      title: 'News Not Found',
    };
  }

  return {
    title: `${news.title} | Indian Cyber Squad News`,
    description: news.excerpt,
    openGraph: {
      title: news.title,
      description: news.excerpt,
      images: [news.image],
    },
  };
}

// Page component - params is now a Promise
export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params to get the slug
  const { slug } = await params;
  
  // Find the news item based on the slug
  const news = newsItems.find((item) => item.slug === slug);

  // If news not found, show 404
  if (!news) {
    notFound();
  }

  // Get related news (excluding current)
  const relatedNews = newsItems.filter(item => item.id !== news.id).slice(0, 2);

  return (
    <main className="min-h-screen pt-24 bg-[#050505]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link 
          href="/news" 
          className="inline-flex items-center gap-2 text-[#00ffb4] hover:underline mb-6 transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to News
        </Link>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-4 flex-wrap">
            <span className="bg-[#00ffb4]/10 text-[#00ffb4] px-3 py-1 rounded-full text-xs font-bold">
              {news.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {news.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {news.readTime}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {news.title}
          </h1>
          <div className="flex items-center gap-3 mt-4 text-gray-400">
            <span className="flex items-center gap-1">
              <User size={16} />
              {news.author}
            </span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-[#00ffb4]/10 mb-8">
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          <div 
            className="text-gray-300 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: news.content || `<p>${news.excerpt}</p>` }}
          />
        </article>

        {/* Tags */}
        {news.tags && news.tags.length > 0 && (
          <div className="mt-8 pt-6 border-t border-[#00ffb4]/10">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag size={16} className="text-[#00ffb4]" />
              {news.tags.map((tag) => (
                <span key={tag} className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Share & Actions */}
        <div className="mt-6 pt-6 border-t border-[#00ffb4]/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-sm">Share this article:</span>
            <button className="w-10 h-10 rounded-full bg-[#00ffb4]/10 border border-[#00ffb4]/20 text-[#00ffb4] hover:bg-[#00ffb4]/20 transition flex items-center justify-center">
              <Share2 size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#00ffb4]/10 border border-[#00ffb4]/20 text-[#00ffb4] hover:bg-[#00ffb4]/20 transition flex items-center justify-center">
              <Bookmark size={18} />
            </button>
          </div>
          <Link href="/news" className="text-[#00ffb4] hover:underline text-sm">
            More News →
          </Link>
        </div>

        {/* Related News */}
        {relatedNews.length > 0 && (
          <div className="mt-12 pt-8 border-t border-[#00ffb4]/10">
            <h3 className="text-2xl font-bold text-white mb-6">Related News</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {relatedNews.map((related) => (
                <Link
                  key={related.id}
                  href={`/news/${related.slug}`}
                  className="glass-panel p-4 rounded-xl border border-[#00ffb4]/10 hover:border-[#00ffb4]/30 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold group-hover:text-[#00ffb4] transition-colors line-clamp-2">
                        {related.title}
                      </h4>
                      <span className="text-xs text-gray-500">{related.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}