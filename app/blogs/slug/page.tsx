import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/SectionHeading';

// Generate static paths
export async function generateStaticParams() {
  return blogPosts.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const blog = blogPosts.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  const blogImages = [
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=600&fit=crop',
  ];

  const imageIndex = blogPosts.findIndex((b) => b.id === blog.id) % 3;

  return (
    <main className="min-h-screen pt-24 bg-[#050505]">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <Link href="/blogs" className="inline-flex items-center gap-2 text-[#00ffb4] hover:underline mb-6">
          ← Back to Blogs
        </Link>

        {/* Blog Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
            <span className="bg-[#00ffb4]/10 text-[#00ffb4] px-3 py-1 rounded-full text-xs font-bold">
              {blog.category}
            </span>
            <span>{blog.author}</span>
            <span>•</span>
            <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">{blog.title}</h1>
        </div>

        {/* Featured Image */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden border border-[#00ffb4]/10 mb-8">
          <Image
            src={blogImages[imageIndex]}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Blog Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Understanding the Basics</h2>
          <p className="text-gray-300 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Key Takeaways</h2>
          <ul className="text-gray-300 space-y-2">
            <li>• Lorem ipsum dolor sit amet consectetur</li>
            <li>• Sed do eiusmod tempor incididunt</li>
            <li>• Ut labore et dolore magna aliqua</li>
            <li>• Quis nostrud exercitation ullamco</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Conclusion</h2>
          <p className="text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-6 border-t border-[#00ffb4]/10">
          <p className="text-gray-400 text-sm">Share this article:</p>
          <div className="flex gap-3 mt-2">
            <button className="w-10 h-10 rounded-full bg-[#00ffb4]/10 border border-[#00ffb4]/20 text-[#00ffb4] hover:bg-[#00ffb4]/20 transition">📘</button>
            <button className="w-10 h-10 rounded-full bg-[#00ffb4]/10 border border-[#00ffb4]/20 text-[#00ffb4] hover:bg-[#00ffb4]/20 transition">🐦</button>
            <button className="w-10 h-10 rounded-full bg-[#00ffb4]/10 border border-[#00ffb4]/20 text-[#00ffb4] hover:bg-[#00ffb4]/20 transition">💼</button>
          </div>
        </div>
      </div>
    </main>
  );
}