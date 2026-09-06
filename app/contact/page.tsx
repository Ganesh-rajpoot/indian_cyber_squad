'use client';

import { useState } from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const message = `
New Course Enquiry - Indian Cyber Squad

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Course: ${formData.course || 'Not selected'}

Message:
${formData.message}
  `.trim();

  const whatsappUrl = `https://wa.me/919720975115?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, '_blank');

  setFormData({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+91 9720975115', href: 'tel:+919720975115' },
    { icon: Mail, label: 'Email', value: 'info@indiancybersquad.com', href: 'mailto:info@indiancybersquad.com' },
    { icon: MapPin, label: 'Address', value: 'Agra,Uttar Pradesh,India', href: '#' },
    { icon: Clock, label: 'Working Hours', value: 'Mon-Sat: 9:00 AM - 6:00 PM', href: '#' },
  ];

  return (
    <main className="min-h-screen pt-20 bg-[#050505]">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            subtitle="// CONTACT"
            title="LET'S BUILD YOUR CYBERSECURITY CAREER"
            description="Have questions? We're here to help. Reach out to us and start your journey today."
            align="center"
          />

          <div className="grid lg:grid-cols-3 gap-8 mt-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div className="glass-panel p-6 rounded-2xl border border-[#00ffb4]/10">
                <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-start gap-3 text-gray-400 hover:text-[#00ffb4] transition-colors group"
                    >
                      <info.icon size={20} className="text-[#00ffb4] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500">{info.label}</p>
                        <p className="text-sm group-hover:text-[#00ffb4] transition-colors">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919720975115"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-600/20 border border-green-500/30 text-green-400 p-4 rounded-2xl hover:bg-green-600/30 transition-all duration-300 group"
              >
                <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
                <span className="font-semibold">Chat on WhatsApp</span>
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-2xl border border-[#00ffb4]/20">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-400 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0a1210] border border-[#00ffb4]/20 rounded-xl px-4 py-3 text-white focus:border-[#00ffb4] outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0a1210] border border-[#00ffb4]/20 rounded-xl px-4 py-3 text-white focus:border-[#00ffb4] outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm text-gray-400 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#0a1210] border border-[#00ffb4]/20 rounded-xl px-4 py-3 text-white focus:border-[#00ffb4] outline-none transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="course" className="block text-sm text-gray-400 mb-1">
                      Course Interested In
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full bg-[#0a1210] border border-[#00ffb4]/20 rounded-xl px-4 py-3 text-white focus:border-[#00ffb4] outline-none transition-colors appearance-none"
                    >
                      <option value="">Select a course</option>
                      <option value="networking">Networking</option>
                      <option value="ccna">CCNA</option>
                      <option value="mcsa">MCSA</option>
                      <option value="cyber-security">Cyber Security</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a1210] border border-[#00ffb4]/20 rounded-xl px-4 py-3 text-white focus:border-[#00ffb4] outline-none transition-colors resize-none"
                    placeholder="Tell us about your learning goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 bg-[#00ffb4] text-[#050505] font-semibold py-3 rounded-full hover:bg-[#00e6a0] transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-[#00ffb4]/20 group"
                >
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}