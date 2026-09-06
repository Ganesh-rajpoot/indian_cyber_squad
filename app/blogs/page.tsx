import { SectionHeading } from '@/components/SectionHeading';
import { blogPosts } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogsPage() {
  // Extended blog data with images
  const blogsWithImages = blogPosts.map((blog, index) => ({
    ...blog,
    image: [
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1535276484715-69c2a1c4f03c?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1505289436230-9c6769b0f73f?w=600&h=400&fit=crop',
    ][index % 6],
  }));

  return (
    <main className="min-h-screen pt-20 bg-[#050505]">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            subtitle="// BLOGS"
            title="CYBERSECURITY INSIGHTS"
            description="Stay updated with the latest trends, tips, and insights in cybersecurity and networking."
            align="center"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {blogsWithImages.map((blog) => (
              <article
                key={blog.id}
                className="glass-panel rounded-2xl overflow-hidden border border-[#00ffb4]/10 hover:border-[#00ffb4]/40 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[#00ffb4]/90 text-[#050505] text-xs font-bold px-3 py-1 rounded-full">
                    {blog.category}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                    <span>{blog.author}</span>
                    <span>•</span>
                    <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00ffb4] transition-colors">
                    <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                  </h3>
                  <p className="text-gray-400 text-sm">{blog.excerpt}</p>
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="inline-block mt-4 text-[#00ffb4] font-medium text-sm hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}