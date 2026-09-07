import { SectionHeading } from '@/components/SectionHeading';
import { newsItems, newsCategories } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

export default function NewsPage() {
  // Get the featured news item
  const featuredNews = newsItems.find(item => item.featured) || newsItems[0];
  // Get other news items (excluding featured)
  const otherNews = newsItems.filter(item => item.id !== featuredNews.id);

  return (
    <main className="min-h-screen pt-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#00ffb4] font-mono text-sm">// NEWS</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">
            CYBERSECURITY <span className="text-[#00ffb4]">NEWS</span>
          </h1>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Stay updated with the latest trends, threats, and innovations in the cybersecurity world.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mt-8 mb-12">
          {newsCategories.map((category) => (
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

        {/* Featured News */}
        <div className="mb-16">
          <div className="glass-panel rounded-2xl overflow-hidden border border-[#00ffb4]/20 hover:border-[#00ffb4]/40 transition-all duration-300 group">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Featured Image */}
              <div className="relative h-[300px] md:h-full min-h-[300px] overflow-hidden">
                <Image
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#00ffb4] text-[#050505] text-xs font-bold px-3 py-1 rounded-full">
                  FEATURED
                </div>
              </div>

              {/* Featured Content */}
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="hidden md:flex items-center gap-2 mb-3">
                  <span className="bg-[#00ffb4]/20 text-[#00ffb4] text-xs px-3 py-1 rounded-full">
                    {featuredNews.category}
                  </span>
                  <span className="text-gray-500 text-xs flex items-center gap-1">
                    <Calendar size={12} />
                    {featuredNews.date}
                  </span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#00ffb4] transition-colors">
                  <Link href={`/news/${featuredNews.slug}`}>
                    {featuredNews.title}
                  </Link>
                </h2>
                
                <p className="text-gray-400 mb-4">{featuredNews.excerpt}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <User size={14} />
                    {featuredNews.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {featuredNews.readTime}
                  </span>
                </div>
                
                <Link
                  href={`/news/${featuredNews.slug}`}
                  className="inline-flex items-center gap-2 text-[#00ffb4] font-medium hover:gap-3 transition-all group"
                >
                  Read Full Story
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherNews.map((news) => (
            <article
              key={news.id}
              className="glass-panel rounded-2xl overflow-hidden border border-[#00ffb4]/10 hover:border-[#00ffb4]/40 transition-all duration-300 group hover:-translate-y-2"
            >
              {/* News Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#00ffb4]/90 text-[#050505] text-xs font-bold px-3 py-1 rounded-full">
                  {news.category}
                </div>
              </div>

              {/* News Content */}
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {news.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {news.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00ffb4] transition-colors line-clamp-2">
                  <Link href={`/news/${news.slug}`}>
                    {news.title}
                  </Link>
                </h3>

                <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                  {news.excerpt}
                </p>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#00ffb4]/10">
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <User size={12} />
                    {news.author}
                  </span>
                  <Link
                    href={`/news/${news.slug}`}
                    className="text-[#00ffb4] text-sm font-medium hover:underline inline-flex items-center gap-1"
                  >
                    Read More
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-[#00ffb4]/30 text-[#00ffb4] rounded-full hover:bg-[#00ffb4]/10 transition-all duration-300 font-medium">
            Load More News
          </button>
        </div>
      </div>
    </main>
  );
}