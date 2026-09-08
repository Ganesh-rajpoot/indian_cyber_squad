
// 'use client';

// import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

// export function TopBar() {
//   return (
//     <div className="fixed top-0 left-0 w-full z-50 bg-[#07110d] border-b border-[#00ffb4]/10 hidden md:block">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-9 text-xs">
//           {/* Left Side - Contact Information */}
//           <div className="flex items-center gap-4 lg:gap-6">
//             {/* Phone */}
//             <a 
//               href="tel:+919720975115" 
//               className="flex items-center gap-1.5 text-gray-400 hover:text-[#00ffb4] transition-colors duration-200 group"
//             >
//               <Phone size={13} className="text-[#00ffb4] group-hover:scale-110 transition-transform" />
//               <span className="font-medium">+91 9720975115</span>
//             </a>
            
//             <span className="text-gray-700">|</span>
            
//             {/* Email */}
//             <a 
//               href="mailto:info@indiancybersquad.com" 
//               className="flex items-center gap-1.5 text-gray-400 hover:text-[#00ffb4] transition-colors duration-200 group"
//             >
//               <Mail size={13} className="text-[#00ffb4] group-hover:scale-110 transition-transform" />
//               <span className="font-medium">info@indiancybersquad.com</span>
//             </a>
            
//             <span className="text-gray-700">|</span>
            
//             {/* Address */}
//             {/* <span className="flex items-center gap-1.5 text-gray-400">
//               <MapPin size={13} className="text-[#00ffb4]" />
//               <span className="font-medium">Agra, Uttar Pradesh, India</span>
//             </span> */}
//           </div>

//           {/* Right Side - Quick Actions */}
//           <div className="flex items-center gap-4">
//             {/* Working Hours */}
//             <span className="flex items-center gap-1.5 text-gray-500">
//               <Clock size={12} className="text-[#00ffb4]" />
//               <span className="text-[10px]">Mon-Sat: 9AM - 6PM</span>
//             </span>
            
//             <span className="text-gray-700">|</span>
            
//             {/* WhatsApp */}
//             <a 
//               href="https://wa.me/919720975115" 
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-1.5 text-green-400 hover:text-green-300 transition-colors duration-200 group"
//             >
//               <MessageCircle size={13} className="group-hover:scale-110 transition-transform" />
//               <span className="font-medium text-[10px]">WhatsApp</span>
//             </a>
            
//             <span className="text-gray-700">|</span>
            
//             {/* Status Indicator */}
//             <span className="flex items-center gap-1.5">
//               <span className="relative flex h-1.5 w-1.5">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ffb4] opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00ffb4]"></span>
//               </span>
//               <span className="text-[#00ffb4] font-mono text-[9px] tracking-wider">SYSTEM ACTIVE</span>
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



'use client';

import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export function TopBar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#07110d] border-b border-[#00ffb4]/10 hidden md:block">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-8 text-[10px] sm:text-xs">
          {/* Left Side - Contact Information */}
          <div className="flex items-center gap-2 lg:gap-4 overflow-x-auto">
            {/* Phone */}
            <a 
              href="tel:+919720975115" 
              className="flex items-center gap-1 text-gray-400 hover:text-[#00ffb4] transition-colors duration-200 whitespace-nowrap"
            >
              <Phone size={12} className="text-[#00ffb4]" />
              <span className="hidden sm:inline">+91 97209 75115</span>
              <span className="sm:hidden">Call</span>
            </a>
            
            <span className="text-gray-700 hidden sm:inline">|</span>
            
            {/* Email */}
            <a 
              href="mailto:info@indiancybersquad.com" 
              className="flex items-center gap-1 text-gray-400 hover:text-[#00ffb4] transition-colors duration-200 whitespace-nowrap"
            >
              <Mail size={12} className="text-[#00ffb4]" />
              <span className="hidden lg:inline">info@indiancybersquad.com</span>
              <span className="lg:hidden">Email</span>
            </a>
            
            <span className="text-gray-700 hidden lg:inline">|</span>
            
            {/* Address */}
            {/* <span className="flex items-center gap-1 text-gray-400 whitespace-nowrap hidden xl:flex">
              <MapPin size={12} className="text-[#00ffb4]" />
              <span>India</span>
            </span> */}
          </div>

          {/* Right Side - Quick Actions */}
          <div className="flex items-center gap-2 lg:gap-4">
            {/* Working Hours */}
            <span className="flex items-center gap-1 text-gray-500 whitespace-nowrap hidden lg:flex">
              <Clock size={11} className="text-[#00ffb4]" />
              <span className="text-[9px]">Mon-Sat: 9AM-6PM</span>
            </span>
            
            <span className="text-gray-700 hidden lg:inline">|</span>
            
            {/* WhatsApp */}
            <a 
              href="https://wa.me/919720975115" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-400 hover:text-green-300 transition-colors duration-200 whitespace-nowrap"
            >
              <MessageCircle size={12} className="hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-[9px]">WhatsApp</span>
            </a>
            
            <span className="text-gray-700 hidden sm:inline">|</span>
            
            {/* Status Indicator */}
            <span className="flex items-center gap-1 whitespace-nowrap">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ffb4] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00ffb4]"></span>
              </span>
              <span className="text-[#00ffb4] font-mono text-[8px] tracking-wider hidden lg:inline">SYSTEM ACTIVE</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}