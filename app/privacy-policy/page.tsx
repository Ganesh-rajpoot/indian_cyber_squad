import Link from 'next/link';
import { SectionHeading } from '@/components/SectionHeading';
import { Shield, Lock, Eye, Database, Users, Mail, FileText, CheckCircle } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const lastUpdated = 'February 15, 2026';

  return (
    <main className="min-h-screen pt-24 bg-[#050505]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-10">
          <Link href="/" className="inline-flex items-center gap-2 text-[#00ffb4] hover:underline mb-4">
            ← Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Shield size={40} className="text-[#00ffb4]" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Privacy <span className="text-[#00ffb4]">Policy</span>
            </h1>
          </div>
          <p className="text-gray-400">
            Last Updated: <span className="text-[#00ffb4]">{lastUpdated}</span>
          </p>
          <div className="h-1 w-20 bg-[#00ffb4] mt-3"></div>
        </div>

        {/* Introduction */}
        <div className="glass-panel p-6 rounded-2xl border border-[#00ffb4]/10 mb-8">
          <p className="text-gray-300 leading-relaxed">
            At <span className="text-[#00ffb4] font-semibold">Indian Cyber Squad</span>, we take your privacy seriously. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
            when you visit our website or use our services. Please read this privacy policy carefully. 
            If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="glass-panel p-6 rounded-2xl border border-[#00ffb4]/10 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Table of Contents</h2>
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            {[
              'Information We Collect',
              'How We Use Your Information',
              'Information Sharing',
              'Data Security',
              'Your Rights',
              'Cookies & Tracking',
              'Third-Party Services',
              'Children\'s Privacy',
              'Changes to This Policy',
              'Contact Us',
            ].map((item, index) => (
              <a 
                key={index}
                href={`#section-${index + 1}`}
                className="text-gray-400 hover:text-[#00ffb4] transition-colors flex items-center gap-2"
              >
                <span className="text-[#00ffb4] text-xs">▸</span>
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div id="section-1" className="glass-panel p-6 rounded-2xl border border-[#00ffb4]/10">
            <div className="flex items-start gap-3 mb-4">
              <Database size={24} className="text-[#00ffb4] mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-white">1. Information We Collect</h2>
                <p className="text-gray-400 text-sm mt-1">We collect information you provide directly to us.</p>
              </div>
            </div>
            <ul className="space-y-2 text-gray-300 text-sm ml-9">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#00ffb4] mt-0.5 flex-shrink-0" />
                <span><strong className="text-white">Personal Information:</strong> Name, email address, phone number, and course preferences.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#00ffb4] mt-0.5 flex-shrink-0" />
                <span><strong className="text-white">Usage Data:</strong> Information about how you interact with our website and services.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#00ffb4] mt-0.5 flex-shrink-0" />
                <span><strong className="text-white">Device Information:</strong> IP address, browser type, operating system, and device identifiers.</span>
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div id="section-2" className="glass-panel p-6 rounded-2xl border border-[#00ffb4]/10">
            <div className="flex items-start gap-3 mb-4">
              <Users size={24} className="text-[#00ffb4] mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-white">2. How We Use Your Information</h2>
                <p className="text-gray-400 text-sm mt-1">We use your information to provide and improve our services.</p>
              </div>
            </div>
            <ul className="space-y-2 text-gray-300 text-sm ml-9">
              <li className="flex items-start gap-2">
                <span className="text-[#00ffb4]">•</span>
                <span>To provide, maintain, and improve our educational services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00ffb4]">•</span>
                <span>To process your course enrollments and payments</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00ffb4]">•</span>
                <span>To send you course updates, promotional materials, and other information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00ffb4]">•</span>
                <span>To respond to your comments, questions, and requests</span>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div id="section-3" className="glass-panel p-6 rounded-2xl border border-[#00ffb4]/10">
            <div className="flex items-start gap-3 mb-4">
              <Eye size={24} className="text-[#00ffb4] mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-white">3. Information Sharing</h2>
                <p className="text-gray-400 text-sm mt-1">How we share your information with third parties.</p>
              </div>
            </div>
            <ul className="space-y-2 text-gray-300 text-sm ml-9">
              <li className="flex items-start gap-2">
                <span className="text-[#00ffb4]">•</span>
                <span>We do not sell, trade, or rent your personal information to third parties</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00ffb4]">•</span>
                <span>We may share information with service providers who assist us in operating our website</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00ffb4]">•</span>
                <span>We may disclose information if required by law or to protect our rights</span>
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div id="section-4" className="glass-panel p-6 rounded-2xl border border-[#00ffb4]/10">
            <div className="flex items-start gap-3 mb-4">
              <Lock size={24} className="text-[#00ffb4] mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-white">4. Data Security</h2>
                <p className="text-gray-400 text-sm mt-1">How we protect your information.</p>
              </div>
            </div>
            <ul className="space-y-2 text-gray-300 text-sm ml-9">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#00ffb4] mt-0.5 flex-shrink-0" />
                <span>We implement industry-standard security measures to protect your data</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#00ffb4] mt-0.5 flex-shrink-0" />
                <span>All sensitive information is encrypted using SSL/TLS technology</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#00ffb4] mt-0.5 flex-shrink-0" />
                <span>Regular security audits and vulnerability assessments are conducted</span>
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div id="section-5" className="glass-panel p-6 rounded-2xl border border-[#00ffb4]/10">
            <div className="flex items-start gap-3 mb-4">
              <FileText size={24} className="text-[#00ffb4] mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-white">5. Your Rights</h2>
                <p className="text-gray-400 text-sm mt-1">Your rights regarding your personal information.</p>
              </div>
            </div>
            <ul className="space-y-2 text-gray-300 text-sm ml-9">
              <li className="flex items-start gap-2">
                <span className="text-[#00ffb4]">•</span>
                <span>Access, update, or delete your personal information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00ffb4]">•</span>
                <span>Opt-out of marketing communications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00ffb4]">•</span>
                <span>Request a copy of your data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00ffb4]">•</span>
                <span>Withdraw consent at any time</span>
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div id="section-6" className="glass-panel p-6 rounded-2xl border border-[#00ffb4]/10">
            <div className="flex items-start gap-3 mb-4">
              <Mail size={24} className="text-[#00ffb4] mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-white">6. Cookies & Tracking</h2>
                <p className="text-gray-400 text-sm mt-1">How we use cookies and similar technologies.</p>
              </div>
            </div>
            <ul className="space-y-2 text-gray-300 text-sm ml-9">
              <li className="flex items-start gap-2">
                <span className="text-[#00ffb4]">•</span>
                <span>We use cookies to enhance your browsing experience</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00ffb4]">•</span>
                <span>Cookies help us understand how you use our website</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00ffb4]">•</span>
                <span>You can control cookie preferences in your browser settings</span>
              </li>
            </ul>
          </div>

          {/* Section 7 */}
          <div id="section-7" className="glass-panel p-6 rounded-2xl border border-[#00ffb4]/10">
            <div className="flex items-start gap-3 mb-4">
              <Database size={24} className="text-[#00ffb4] mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-white">7. Third-Party Services</h2>
                <p className="text-gray-400 text-sm mt-1">Links and services provided by third parties.</p>
              </div>
            </div>
            <ul className="space-y-2 text-gray-300 text-sm ml-9">
              <li className="flex items-start gap-2">
                <span className="text-[#00ffb4]">•</span>
                <span>Our website may contain links to third-party websites</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00ffb4]">•</span>
                <span>We are not responsible for the privacy practices of other sites</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00ffb4]">•</span>
                <span>We encourage you to review the privacy policies of third-party sites</span>
              </li>
            </ul>
          </div>

          {/* Section 8 */}
          <div id="section-8" className="glass-panel p-6 rounded-2xl border border-[#00ffb4]/10">
            <div className="flex items-start gap-3 mb-4">
              <Users size={24} className="text-[#00ffb4] mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-white">8. Children's Privacy</h2>
                <p className="text-gray-400 text-sm mt-1">Our policy regarding children under 13.</p>
              </div>
            </div>
            <ul className="space-y-2 text-gray-300 text-sm ml-9">
              <li className="flex items-start gap-2">
                <span className="text-[#00ffb4]">•</span>
                <span>Our services are not directed to children under 13</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00ffb4]">•</span>
                <span>We do not knowingly collect information from children under 13</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00ffb4]">•</span>
                <span>If we become aware of such data, we will delete it promptly</span>
              </li>
            </ul>
          </div>

          {/* Section 9 */}
          <div id="section-9" className="glass-panel p-6 rounded-2xl border border-[#00ffb4]/10">
            <div className="flex items-start gap-3 mb-4">
              <FileText size={24} className="text-[#00ffb4] mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-white">9. Changes to This Policy</h2>
                <p className="text-gray-400 text-sm mt-1">How we handle updates to this policy.</p>
              </div>
            </div>
            <ul className="space-y-2 text-gray-300 text-sm ml-9">
              <li className="flex items-start gap-2">
                <span className="text-[#00ffb4]">•</span>
                <span>We may update this Privacy Policy periodically</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00ffb4]">•</span>
                <span>We will notify you of any changes by posting the new policy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00ffb4]">•</span>
                <span>Your continued use of the site constitutes acceptance of the changes</span>
              </li>
            </ul>
          </div>

          {/* Section 10 - Contact */}
          <div id="section-10" className="glass-panel p-6 rounded-2xl border border-[#00ffb4]/20 bg-[#00ffb4]/5">
            <div className="flex items-start gap-3 mb-4">
              <Mail size={24} className="text-[#00ffb4] mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-white">10. Contact Us</h2>
                <p className="text-gray-400 text-sm mt-1">If you have questions about this Privacy Policy.</p>
              </div>
            </div>
            <div className="ml-9 space-y-2 text-sm">
              <p className="text-gray-300">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="space-y-1 text-gray-300">
                <p>📧 <a href="mailto:info@indiancybersquad.com" className="text-[#00ffb4] hover:underline">info@indiancybersquad.com</a></p>
                <p>📞 <a href="tel:+919720975115" className="text-[#00ffb4] hover:underline">+91 9720975115</a></p>
                <p>📍 India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-10 text-center text-gray-500 text-xs border-t border-[#00ffb4]/10 pt-6">
          <p>Last Updated: {lastUpdated}</p>
          <p className="mt-1">© {new Date().getFullYear()} Indian Cyber Squad. All Rights Reserved.</p>
        </div>
      </div>
    </main>
  );
}