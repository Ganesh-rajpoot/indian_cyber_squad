// 'use client';

// import { useState, useEffect } from 'react';
// import { TopBar } from './TopBar';
// import { Menu, X } from 'lucide-react';
// import { MdHeight } from 'react-icons/md';

// const navLinks = [
//   { name: 'Home', href: '/' },
//   { name: 'About Us', href: '/about' },
//   { name: 'Courses', href: '/courses' },
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
    
    


//     <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
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
//     <nav className={`fixed top-9 left-0 w-full z-40 transition-all duration-300 ${
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
//       <div className={`md:hidden fixed inset-x-0 top-[calc(4rem+36px)] bg-[#0a1210] border-b border-[#00ffb4]/10 transition-all duration-300 ${
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
      md:top-9 top-0 ${
      isScrolled 
        ? 'bg-[#050505] border-b border-[#00ffb4]/15' 
        : 'bg-[#050505]/60 backdrop-blur-2xl border-b border-[#00ffb4]/5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo + Brand */}
          <a href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center overflow-hidden rounded-lg bg-white">
              <img
                src="https://res.cloudinary.com/dhwhnvqkr/image/upload/v1788748539/IMG_4983_h8ch9k.png"
                alt="Indian Cyber Squad Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white whitespace-nowrap">
              INDIAN CYBER SQUAD
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#00ffb4] transition relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ffb4] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/courses"
              className="bg-[#00ffb4] text-[#050505] font-semibold px-5 py-2 rounded-full text-sm hover:bg-[#00e6a0] transition shadow-lg shadow-[#00ffb4]/20"
            >
              Explore Courses →
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-[#00ffb4]/10 rounded-lg transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-x-0 top-16 bg-[#0a1210] border-b border-[#00ffb4]/10 transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-200 hover:text-[#00ffb4] transition font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/courses"
            className="block mt-4 bg-[#00ffb4] text-[#050505] text-center font-semibold px-4 py-2 rounded-full"
            onClick={() => setIsOpen(false)}
          >
            Explore Courses
          </a>
        </div>
      </div>
    </nav>
  );
}