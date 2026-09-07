// 'use client';

// import { motion } from 'framer-motion';
// import { CyberBackground } from './CyberBackground';
// export function AboutSection() {
//   return (
//     <section id="about" className="py-24 bg-[#050505] relative">
//     <CyberBackground />
        
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <span className="text-[#00ffb4] font-mono text-sm">// ABOUT US</span>
//             <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 leading-tight">
//               WE DON'T JUST TEACH CYBERSECURITY.<br/>
//               <span className="text-[#00ffb4]">WE BUILD CYBER DEFENDERS.</span>
//             </h2>
//             <p className="text-gray-400 mt-6 text-lg">
//               Indian Cyber Squad is focused on practical cybersecurity and networking education. 
//               Industry-oriented curriculum, hands-on labs, and experienced instructors to build 
//               real-world skills.
//             </p>
//             <ul className="mt-6 space-y-2 text-gray-300">
//               <li>✓ Practical learning &amp; labs</li>
//               <li>✓ Industry-oriented curriculum</li>
//               <li>✓ Networking &amp; cybersecurity fundamentals</li>
//               <li>✓ Career-focused training</li>
//             </ul>
//             <a
//               href="/about"
//               className="inline-block mt-8 border border-[#00ffb4] text-[#00ffb4] px-8 py-3 rounded-full hover:bg-[#00ffb4]/10 transition"
//             >
//               Know More About Us →
//             </a>
//           </motion.div>
          
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="flex justify-center"
//           >
//             <div className="w-72 h-72 rounded-full bg-[#00ffb4]/5 border border-[#00ffb4]/20 flex items-center justify-center text-[#00ffb4] text-8xl">
//               🛡️
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import { motion } from 'framer-motion';
import { CyberBackground } from './CyberBackground';

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#050505] relative overflow-hidden">
      <CyberBackground />

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-[#00ffb4] font-mono text-sm">
              // ABOUT US
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 leading-tight">
              WE DON'T JUST TEACH CYBERSECURITY.
              <br />
              <span className="text-[#00ffb4]">
                WE BUILD CYBER DEFENDERS.
              </span>
            </h2>

            <p className="text-gray-400 mt-6 text-lg">
              Indian Cyber Squad is focused on practical cybersecurity and
              networking education. Industry-oriented curriculum, hands-on
              labs, and experienced instructors to build real-world skills.
            </p>

            <ul className="mt-6 space-y-2 text-gray-300">
              <li>✓ Practical learning &amp; labs</li>
              <li>✓ Industry-oriented curriculum</li>
              <li>✓ Networking &amp; cybersecurity fundamentals</li>
              <li>✓ Career-focused training</li>
            </ul>

            <a
              href="/about"
              className="inline-block mt-8 border border-[#00ffb4] text-[#00ffb4] px-8 py-3 rounded-full hover:bg-[#00ffb4]/10 transition"
            >
              Know More About Us →
            </a>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md">

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[#00ffb4]/10 blur-3xl rounded-full" />

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden border border-[#00ffb4]/30 shadow-2xl shadow-[#00ffb4]/10">
                <img
                  src="https://res.cloudinary.com/dhwhnvqkr/image/upload/v1788748537/IMG_7803.JPG_da2jps.jpg"
                  alt="Indian Cyber Squad"
                  className="w-full h-auto object-cover"
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

