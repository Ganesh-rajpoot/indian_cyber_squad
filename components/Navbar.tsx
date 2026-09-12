

// 'use client';

// import { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';

// const navLinks = [
//   { name: 'Home', href: '/' },
//   { name: 'About Us', href: '/about' },
//   { name: 'Courses', href: '/courses' },
//   { name: 'News', href: '/news' },
//   { name: 'Gallery', href: '/gallery' },
//   { name: 'Blogs', href: '/blogs' },
//   { name: 'Contact Us', href: '/contact' },
// ];

// export function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 60);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed left-0 w-full z-40 transition-all duration-300 
//       md:top-9 top-0 ${
//       isScrolled 
//         ? 'bg-[#050505] border-b border-[#00ffb4]/15' 
//         : 'bg-[#050505]/60 backdrop-blur-2xl border-b border-[#00ffb4]/5'
//     }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16 md:h-20">
//           {/* Logo + Brand */}
//           <a href="/" className="flex items-center gap-3 shrink-0">
//             <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center overflow-hidden rounded-lg bg-white">
//               <img
//                 src="https://res.cloudinary.com/dhwhnvqkr/image/upload/v1788748539/IMG_4983_h8ch9k.png"
//                 alt="Indian Cyber Squad Logo"
//                 className="w-full h-full object-contain"
//               />
//             </div>

//             <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white whitespace-nowrap">
//               INDIAN CYBER SQUAD
//             </span>
//           </a>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="hover:text-[#00ffb4] transition relative group"
//               >
//                 {link.name}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ffb4] transition-all group-hover:w-full"></span>
//               </a>
//             ))}
//           </div>

//           {/* Desktop CTA */}
//           <div className="hidden md:flex items-center gap-3">
//             <a
//               href="/courses"
//               className="bg-[#00ffb4] text-[#050505] font-semibold px-5 py-2 rounded-full text-sm hover:bg-[#00e6a0] transition shadow-lg shadow-[#00ffb4]/20"
//             >
//               Explore Courses →
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-white p-2 hover:bg-[#00ffb4]/10 rounded-lg transition"
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`md:hidden fixed inset-x-0 top-16 bg-[#0a1210] border-b border-[#00ffb4]/10 transition-all duration-300 ${
//         isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
//       }`}>
//         <div className="px-4 py-6 space-y-4">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="block text-gray-200 hover:text-[#00ffb4] transition font-medium"
//               onClick={() => setIsOpen(false)}
//             >
//               {link.name}
//             </a>
//           ))}
//           <a
//             href="/courses"
//             className="block mt-4 bg-[#00ffb4] text-[#050505] text-center font-semibold px-4 py-2 rounded-full"
//             onClick={() => setIsOpen(false)}
//           >
//             Explore Courses
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// }


// 'use client';

// import { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';

// const navLinks = [
//   { name: 'Home', href: '/' },
//   { name: 'About Us', href: '/about' },
//   { name: 'Courses', href: '/courses' },
//   { name: 'News', href: '/news' },
//   { name: 'Gallery', href: '/gallery' },
//   { name: 'Blogs', href: '/blogs' },
//   { name: 'Contact Us', href: '/contact' },
// ];

// export function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 60);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed left-0 w-full z-40 transition-all duration-300 
//       md:top-9 top-0 ${
//       isScrolled 
//         ? 'bg-[#050505] border-b border-[#00ffb4]/15' 
//         : 'bg-[#050505]/60 backdrop-blur-2xl border-b border-[#00ffb4]/5'
//     }`}>
//       <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-14 md:h-20">
//           {/* Logo + Brand - FIXED: Prevent text breaking */}
//           <a href="/" className="flex items-center gap-2 md:gap-3 shrink-0 min-w-0">
//             <div className="w-8 h-8 md:w-10 md:h-12 flex items-center justify-center overflow-hidden rounded-lg bg-white shrink-0">
//               <img
//                 src="https://res.cloudinary.com/dhwhnvqkr/image/upload/v1788748539/IMG_4983_h8ch9k.png"
//                 alt="Indian Cyber Squad Logo"
//                 className="w-full h-full object-contain"
//               />
//             </div>

//             {/* FIXED: Use whitespace-nowrap to prevent breaking */}
//             <span className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold tracking-tight text-white whitespace-nowrap hidden xs:block">
//               INDIAN CYBER SQUAD
//             </span>
//             {/* Short version for very small screens */}
//             <span className="text-sm font-bold tracking-tight text-white whitespace-nowrap block xs:hidden">
//               ICS
//             </span>
//           </a>

//           {/* Desktop Navigation - FIXED: Better spacing */}
//           <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm font-medium text-gray-300">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="hover:text-[#00ffb4] transition relative group whitespace-nowrap"
//               >
//                 {link.name}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ffb4] transition-all group-hover:w-full"></span>
//               </a>
//             ))}
//           </div>

//           {/* Desktop CTA - FIXED: Prevent text wrapping */}
//           <div className="hidden lg:flex items-center gap-3">
//             <a
//               href="/courses"
//               className="bg-[#00ffb4] text-[#050505] font-semibold px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm hover:bg-[#00e6a0] transition shadow-lg shadow-[#00ffb4]/20 whitespace-nowrap"
//             >
//               Explore Courses →
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="lg:hidden text-white p-1.5 hover:bg-[#00ffb4]/10 rounded-lg transition"
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X size={22} /> : <Menu size={22} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`lg:hidden fixed inset-x-0 top-14 md:top-16 bg-[#0a1210] border-b border-[#00ffb4]/10 transition-all duration-300 ${
//         isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
//       }`}>
//         <div className="px-4 py-4 space-y-3">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="block text-gray-200 hover:text-[#00ffb4] transition font-medium py-1.5"
//               onClick={() => setIsOpen(false)}
//             >
//               {link.name}
//             </a>
//           ))}
//           <a
//             href="/courses"
//             className="block mt-3 bg-[#00ffb4] text-[#050505] text-center font-semibold px-4 py-2.5 rounded-full"
//             onClick={() => setIsOpen(false)}
//           >
//             Explore Courses
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Courses', href: '/courses' },
  { name: 'News', href: '/news' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Contact Us', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed left-0 w-full z-40 transition-all duration-300 
      md:top-8 top-0 ${
      isScrolled 
        ? 'bg-[#050505] border-b border-[#00ffb4]/15' 
        : 'bg-[#050505]/60 backdrop-blur-2xl border-b border-[#00ffb4]/5'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 md:h-20">
          {/* Logo + Brand */}
          <a href="/" className="flex items-center gap-2 md:gap-3 shrink-0 min-w-0">
            <div className="w-7 h-7 md:w-10 md:h-12 flex items-center justify-center overflow-hidden rounded-lg bg-white shrink-0">
              <img
                src="https://res.cloudinary.com/dhwhnvqkr/image/upload/v1788748539/IMG_4983_h8ch9k.png"
                alt="Indian Cyber Squad Logo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Short version for mobile */}
            <span className="text-sm font-bold tracking-tight text-white whitespace-nowrap block md:hidden">
              INDIAN CYBER SQUAD
            </span>
            {/* Full version for desktop */}
            <span className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold tracking-tight text-white whitespace-nowrap hidden md:block">
              INDIAN CYBER SQUAD
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm font-medium text-gray-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#00ffb4] transition relative group whitespace-nowrap"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ffb4] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/courses"
              className="bg-[#00ffb4] text-[#050505] font-semibold px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm hover:bg-[#00e6a0] transition shadow-lg shadow-[#00ffb4]/20 whitespace-nowrap"
            >
              Explore Courses →
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-1.5 hover:bg-[#00ffb4]/10 rounded-lg transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-x-0 top-12 bg-[#0a1210] border-b border-[#00ffb4]/10 transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-200 hover:text-[#00ffb4] transition font-medium py-1.5"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/courses"
            className="block mt-3 bg-[#00ffb4] text-[#050505] text-center font-semibold px-4 py-2.5 rounded-full"
            onClick={() => setIsOpen(false)}
          >
            Explore Courses
          </a>
        </div>
      </div>
    </nav>
  );
}