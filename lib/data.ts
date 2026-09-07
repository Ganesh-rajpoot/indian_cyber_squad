// export const navLinks = [
//   { name: 'Home', href: '/' },
//   { name: 'About Us', href: '/about' },
//   { name: 'Courses', href: '/courses' },
//   { name: 'Gallery', href: '/gallery' },
//   { name: 'Blogs', href: '/blogs' },
//   { name: 'Contact Us', href: '/contact' },
// ];

// export const stats = [
//   { value: '500+', label: 'Students Trained' },
//   { value: '4+', label: 'Professional Courses' },
//   { value: '100+', label: 'Practical Labs' },
//   { value: '24/7', label: 'Learning Support' },
// ];

// export const courses = [
//   {
//     id: 'networking',
//     slug: 'networking',
//     title: 'Networking',
//     category: 'Networking',
//     description: 'Build strong networking fundamentals and understand how modern networks operate.',
//     longDescription: 'Comprehensive networking course covering OSI model, TCP/IP, subnetting, routing, switching, and network troubleshooting with hands-on labs.',
//     icon: '🌐',
//     level: 'Beginner',
//     duration: '6 weeks',
//     lessons: 12,
//     certificate: true,
//   },
//   {
//     id: 'ccna',
//     slug: 'ccna',
//     title: 'CCNA',
//     category: 'CCNA',
//     description: 'Learn Cisco networking concepts, routing, switching, network security and practical configurations.',
//     longDescription: 'Complete CCNA training with hands-on labs, real-world scenarios, and exam preparation for Cisco certification.',
//     icon: '🔧',
//     level: 'Intermediate',
//     duration: '8 weeks',
//     lessons: 18,
//     certificate: true,
//   },
//   {
//     id: 'mcsa',
//     slug: 'mcsa',
//     title: 'MCSA',
//     category: 'MCSA',
//     description: 'Develop professional-level knowledge of Microsoft server and infrastructure technologies.',
//     longDescription: 'Microsoft Certified Solutions Associate training covering Windows Server, Active Directory, and infrastructure management.',
//     icon: '💻',
//     level: 'Advanced',
//     duration: '10 weeks',
//     lessons: 20,
//     certificate: true,
//   },
//   {
//     id: 'cyber-security',
//     slug: 'cyber-security',
//     title: 'Cyber Security',
//     category: 'Cyber Security',
//     description: 'Learn cybersecurity fundamentals, ethical hacking concepts, vulnerability assessment, and defensive security.',
//     longDescription: 'Comprehensive cybersecurity training covering ethical hacking, network security, vulnerability assessment, and defensive strategies.',
//     icon: '🔒',
//     level: 'Intermediate',
//     duration: '12 weeks',
//     lessons: 24,
//     certificate: true,
//   },
// ];

// export const features = [
//   'Practical Learning',
//   'Industry-Focused Curriculum',
//   'Hands-on Labs',
//   'Career-Oriented Training',
//   'Expert Guidance',
//   'Certification Support',
// ];

// export const blogPosts = [
//   {
//     id: 1,
//     slug: 'what-is-cybersecurity',
//     title: 'What is Cybersecurity?',
//     category: 'Cybersecurity',
//     excerpt: 'Learn the fundamentals of cybersecurity and why it matters in today\'s digital world. Discover how to protect yourself and your organization.',
//     author: 'Admin',
//     date: '2026-01-15',
//     readTime: '5 min read',
//   },
//   {
//     id: 2,
//     slug: 'how-to-start-career-in-cybersecurity',
//     title: 'How to Start a Career in Cybersecurity',
//     category: 'Career',
//     excerpt: 'A step-by-step guide to building a successful career in cybersecurity. Learn about required skills, certifications, and job opportunities.',
//     author: 'Admin',
//     date: '2026-01-20',
//     readTime: '7 min read',
//   },
//   {
//     id: 3,
//     slug: 'ccna-vs-cybersecurity',
//     title: 'CCNA vs Cybersecurity',
//     category: 'Comparison',
//     excerpt: 'Understanding the differences between CCNA and Cybersecurity career paths. Which one is right for you?',
//     author: 'Admin',
//     date: '2026-01-25',
//     readTime: '6 min read',
//   },
//   {
//     id: 4,
//     slug: 'what-is-ethical-hacking',
//     title: 'What is Ethical Hacking?',
//     category: 'Ethical Hacking',
//     excerpt: 'Explore the world of ethical hacking and how it helps organizations protect their digital assets from cyber threats.',
//     author: 'Admin',
//     date: '2026-02-01',
//     readTime: '8 min read',
//   },
//   {
//     id: 5,
//     slug: 'networking-fundamentals',
//     title: 'Networking Fundamentals',
//     category: 'Networking',
//     excerpt: 'Master the basics of computer networking including protocols, topologies, and essential concepts for IT professionals.',
//     author: 'Admin',
//     date: '2026-02-05',
//     readTime: '6 min read',
//   },
//   {
//     id: 6,
//     slug: 'common-cybersecurity-threats',
//     title: 'Common Cybersecurity Threats',
//     category: 'Threats',
//     excerpt: 'Learn about the most common cybersecurity threats facing organizations today and how to defend against them.',
//     author: 'Admin',
//     date: '2026-02-10',
//     readTime: '5 min read',
//   },
// ];



export const stats = [
  { value: '500+', label: 'Students Trained' },
  { value: '4+', label: 'Professional Courses' },
  { value: '100+', label: 'Practical Labs' },
  { value: '24/7', label: 'Learning Support' },
];

export const courses = [
  {
    id: 'networking',
    slug: 'networking',
    title: 'Networking',
    category: 'Networking',
    description: 'Build strong networking fundamentals and understand how modern networks operate.',
    longDescription: 'Comprehensive networking course covering OSI model, TCP/IP, subnetting, routing, switching, and network troubleshooting with hands-on labs.',
    icon: '🌐',
    level: 'Beginner',
    duration: '6 weeks',
    lessons: 12,
    certificate: true,
    curriculum: [
      'Introduction to Networking',
      'OSI Model and TCP/IP',
      'IP Addressing and Subnetting',
      'Routing Fundamentals',
      'Switching and VLANs',
      'Network Troubleshooting',
    ],
  },
  {
    id: 'ccna',
    slug: 'ccna',
    title: 'CCNA',
    category: 'CCNA',
    description: 'Learn Cisco networking concepts, routing, switching, network security and practical configurations.',
    longDescription: 'Complete CCNA training with hands-on labs, real-world scenarios, and exam preparation for Cisco certification.',
    icon: '🔧',
    level: 'Intermediate',
    duration: '8 weeks',
    lessons: 18,
    certificate: true,
    curriculum: [
      'Cisco IOS Fundamentals',
      'Routing Protocols (OSPF, EIGRP)',
      'Switching and STP',
      'Network Security Fundamentals',
      'WAN Technologies',
      'CCNA Exam Preparation',
    ],
  },
  {
    id: 'mcsa',
    slug: 'mcsa',
    title: 'MCSA',
    category: 'MCSA',
    description: 'Develop professional-level knowledge of Microsoft server and infrastructure technologies.',
    longDescription: 'Microsoft Certified Solutions Associate training covering Windows Server, Active Directory, and infrastructure management.',
    icon: '💻',
    level: 'Advanced',
    duration: '10 weeks',
    lessons: 20,
    certificate: true,
    curriculum: [
      'Windows Server Installation',
      'Active Directory Services',
      'DNS and DHCP Configuration',
      'Group Policy Management',
      'Server Security',
      'MCSA Exam Preparation',
    ],
  },
  {
    id: 'cyber-security',
    slug: 'cyber-security',
    title: 'Cyber Security',
    category: 'Cyber Security',
    description: 'Learn cybersecurity fundamentals, ethical hacking concepts, vulnerability assessment, and defensive security.',
    longDescription: 'Comprehensive cybersecurity training covering ethical hacking, network security, vulnerability assessment, and defensive strategies.',
    icon: '🔒',
    level: 'Intermediate',
    duration: '12 weeks',
    lessons: 24,
    certificate: true,
    curriculum: [
      'Cybersecurity Fundamentals',
      'Network Security',
      'Ethical Hacking Concepts',
      'Vulnerability Assessment',
      'Security Tools',
      'Threat Detection and Response',
      'Defensive Security',
      'Security Best Practices',
    ],
  },
];

export const features = [
  'Practical Learning',
  'Industry-Focused Curriculum',
  'Hands-on Labs',
  'Career-Oriented Training',
  'Expert Guidance',
  'Certification Support',
];

export const blogPosts = [
  {
    id: 1,
    slug: 'what-is-cybersecurity',
    title: 'What is Cybersecurity?',
    category: 'Cybersecurity',
    excerpt: 'Learn the fundamentals of cybersecurity and why it matters in today\'s digital world.',
    author: 'Admin',
    date: '2026-01-15',
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
    date: '2026-01-20',
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
    date: '2026-01-25',
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
    date: '2026-02-01',
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
    date: '2026-02-05',
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
    date: '2026-02-10',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1505289436230-9c6769b0f73f?w=800&h=500&fit=crop&q=80',
  },
];

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Courses', href: '/courses' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Contact Us', href: '/contact' },
];

// Add legal pages to your data
export const legalPages = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms & Conditions', href: '/terms' },
  { name: 'Disclaimer', href: '/disclaimer' },
];


// lib/newsData.ts
export interface NewsItem {
  id: number;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
  tags: string[];
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    slug: 'cybersecurity-trends-2026',
    title: 'Top Cybersecurity Trends to Watch in 2026',
    category: 'Industry Trends',
    excerpt: 'Discover the latest cybersecurity trends shaping the industry in 2026, from AI-powered threats to zero-trust architecture.',
    content: `The cybersecurity landscape is evolving faster than ever. As we move through 2026, several key trends are shaping the future of digital security.

    <h3 className="text-2xl font-bold text-white mt-8 mb-4">AI-Powered Threats</h3>
    <p>Artificial intelligence is being used by both defenders and attackers. Cybercriminals are leveraging AI to create more sophisticated attacks, while security teams use AI for threat detection and response.</p>

    <h3 className="text-2xl font-bold text-white mt-8 mb-4">Zero Trust Architecture</h3>
    <p>Organizations are increasingly adopting zero trust security models that verify every user and device attempting to access resources, regardless of their location.</p>

    <h3 className="text-2xl font-bold text-white mt-8 mb-4">Cloud Security</h3>
    <p>With more businesses moving to the cloud, securing cloud infrastructure has become paramount. Multi-cloud and hybrid cloud environments present unique security challenges.</p>

    <h3 className="text-2xl font-bold text-white mt-8 mb-4">Ransomware Evolution</h3>
    <p>Ransomware attacks are becoming more targeted and sophisticated, with attackers using double extortion tactics and targeting critical infrastructure.</p>

    <h3 className="text-2xl font-bold text-white mt-8 mb-4">IoT Security</h3>
    <p>The proliferation of IoT devices creates new attack vectors that need to be addressed with proper security measures and regular updates.</p>`,
    author: 'Cyber Expert',
    date: 'March 15, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop&q=80',
    featured: true,
    tags: ['Trends', 'AI', 'Zero Trust'],
  },
  {
    id: 2,
    slug: 'ethical-hacking-certification-guide',
    title: 'Complete Guide to Ethical Hacking Certifications',
    category: 'Certifications',
    excerpt: 'A comprehensive guide to the most recognized ethical hacking certifications and how to choose the right one for your career.',
    content: `Choosing the right ethical hacking certification can be overwhelming with so many options available. This guide will help you understand the most recognized certifications and which one aligns with your career goals.

    <h3 className="text-2xl font-bold text-white mt-8 mb-4">CEH (Certified Ethical Hacker)</h3>
    <p>The most popular entry-level certification that covers the basics of ethical hacking, including footprinting, scanning, and system hacking.</p>

    <h3 className="text-2xl font-bold text-white mt-8 mb-4">OSCP (Offensive Security Certified Professional)</h3>
    <p>Known for its hands-on approach, OSCP requires passing a 24-hour practical exam. It's highly respected in the industry.</p>

    <h3 className="text-2xl font-bold text-white mt-8 mb-4">CISSP (Certified Information Systems Security Professional)</h3>
    <p>An advanced certification for experienced security professionals covering a broad range of security topics.</p>`,
    author: 'Security Professional',
    date: 'March 12, 2026',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop&q=80',
    featured: false,
    tags: ['Certification', 'Ethical Hacking', 'Career'],
  },
  {
    id: 3,
    slug: 'ransomware-attacks-on-rise',
    title: 'Ransomware Attacks on Rise: How to Protect Your Business',
    category: 'Threat Alerts',
    excerpt: 'Learn about the increasing ransomware threats and implement effective strategies to safeguard your organization.',
    content: `Ransomware attacks have increased dramatically in 2026, with cybercriminals becoming more sophisticated in their methods. Here's how to protect your business.

    <h3 className="text-2xl font-bold text-white mt-8 mb-4">Understanding Ransomware</h3>
    <p>Ransomware is a type of malware that encrypts files and demands payment for decryption keys. Recent attacks have used double extortion, threatening to release stolen data.</p>

    <h3 className="text-2xl font-bold text-white mt-8 mb-4">Prevention Strategies</h3>
    <ul>
      <li>Regular data backups</li>
      <li>Employee security training</li>
      <li>Multi-factor authentication</li>
      <li>Regular security audits</li>
      <li>Patch management</li>
    </ul>`,
    author: 'Cyber Security Analyst',
    date: 'March 10, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop&q=80',
    featured: false,
    tags: ['Ransomware', 'Security', 'Business'],
  },
  {
    id: 4,
    slug: 'ai-in-cybersecurity',
    title: 'How AI is Revolutionizing Cybersecurity',
    category: 'Technology',
    excerpt: 'Explore how artificial intelligence and machine learning are transforming the cybersecurity landscape.',
    content: `Artificial intelligence and machine learning are fundamentally changing how we approach cybersecurity. From threat detection to automated response, AI is becoming indispensable.

    <h3 className="text-2xl font-bold text-white mt-8 mb-4">AI-Powered Threat Detection</h3>
    <p>Machine learning models can analyze patterns in network traffic and user behavior to identify potential threats before they cause damage.</p>

    <h3 className="text-2xl font-bold text-white mt-8 mb-4">Automated Response</h3>
    <p>AI systems can automatically respond to detected threats, isolating affected systems and preventing the spread of malware.</p>`,
    author: 'AI Security Expert',
    date: 'March 8, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop&q=80',
    featured: false,
    tags: ['AI', 'Machine Learning', 'Technology'],
  },
  {
    id: 5,
    slug: 'cybersecurity-career-roadmap',
    title: 'Cybersecurity Career Roadmap 2026',
    category: 'Career',
    excerpt: 'A step-by-step roadmap to build a successful career in cybersecurity, from entry-level to expert.',
    content: `Building a career in cybersecurity requires strategic planning and continuous learning. Here's your roadmap to success.

    <h3 className="text-2xl font-bold text-white mt-8 mb-4">Entry Level</h3>
    <p>Start with foundational IT knowledge and entry-level certifications like CompTIA Security+ or CEH.</p>

    <h3 className="text-2xl font-bold text-white mt-8 mb-4">Mid-Level</h3>
    <p>Gain experience in specific areas like network security or incident response. Pursue advanced certifications.</p>

    <h3 className="text-2xl font-bold text-white mt-8 mb-4">Senior Level</h3>
    <p>Move into leadership roles or specialized positions like security architect or CISO.</p>`,
    author: 'Career Counselor',
    date: 'March 5, 2026',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=400&fit=crop&q=80',
    featured: false,
    tags: ['Career', 'Roadmap', 'Skills'],
  },
  {
    id: 6,
    slug: 'cloud-security-best-practices',
    title: 'Cloud Security Best Practices for 2026',
    category: 'Cloud Security',
    excerpt: 'Essential best practices to secure your cloud infrastructure and protect sensitive data in the cloud.',
    content: `Cloud security continues to be a top priority for organizations. Follow these best practices to protect your cloud infrastructure.

    <h3 className="text-2xl font-bold text-white mt-8 mb-4">Identity and Access Management</h3>
    <p>Implement strong IAM policies with least-privilege access and multi-factor authentication.</p>

    <h3 className="text-2xl font-bold text-white mt-8 mb-4">Data Protection</h3>
    <p>Encrypt data at rest and in transit. Use key management services to protect encryption keys.</p>

    <h3 className="text-2xl font-bold text-white mt-8 mb-4">Continuous Monitoring</h3>
    <p>Use cloud-native security tools for continuous monitoring and threat detection.</p>`,
    author: 'Cloud Security Expert',
    date: 'March 3, 2026',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop&q=80',
    featured: false,
    tags: ['Cloud', 'Security', 'Best Practices'],
  },
  {
    id: 7,
    slug: 'zero-trust-architecture',
    title: 'Implementing Zero Trust Architecture',
    category: 'Security',
    excerpt: 'Learn how to implement zero trust architecture to enhance your organization\'s security posture.',
    content: `Zero trust is a security framework that assumes no user or device is trustworthy by default. Here's how to implement it.

    <h3 className="text-2xl font-bold text-white mt-8 mb-4">Never Trust, Always Verify</h3>
    <p>Verify every user and device attempting to access resources, regardless of their location.</p>

    <h3 className="text-2xl font-bold text-white mt-8 mb-4">Microsegmentation</h3>
    <p>Divide your network into smaller segments to limit lateral movement of threats.</p>

    <h3 className="text-2xl font-bold text-white mt-8 mb-4">Continuous Monitoring</h3>
    <p>Monitor all network traffic and user behavior for anomalies.</p>`,
    author: 'Security Architect',
    date: 'March 1, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1535276484715-69c2a1c4f03c?w=800&h=400&fit=crop&q=80',
    featured: false,
    tags: ['Zero Trust', 'Architecture', 'Security'],
  },
  {
    id: 8,
    slug: 'cybersecurity-awareness-month',
    title: 'Cybersecurity Awareness: Protecting Your Digital Life',
    category: 'Awareness',
    excerpt: 'Tips and strategies to stay safe online and protect your digital identity from cyber threats.',
    content: `Cybersecurity awareness is essential for everyone. Follow these tips to protect your digital life.

    <h3 className="text-2xl font-bold text-white mt-8 mb-4">Strong Passwords</h3>
    <p>Use unique, complex passwords for each account. Consider using a password manager.</p>

    <h3 className="text-2xl font-bold text-white mt-8 mb-4">Two-Factor Authentication</h3>
    <p>Enable 2FA on all accounts that support it for an extra layer of security.</p>

    <h3 className="text-2xl font-bold text-white mt-8 mb-4">Phishing Awareness</h3>
    <p>Learn to identify phishing attempts. Don't click on suspicious links or download attachments from unknown sources.</p>`,
    author: 'Cyber Awareness Specialist',
    date: 'February 28, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1505289436230-9c6769b0f73f?w=800&h=400&fit=crop&q=80',
    featured: false,
    tags: ['Awareness', 'Digital Security', 'Tips'],
  },
];

export const newsCategories = [
  'All',
  'Industry Trends',
  'Certifications',
  'Threat Alerts',
  'Technology',
  'Career',
  'Cloud Security',
  'Security',
  'Awareness',
];