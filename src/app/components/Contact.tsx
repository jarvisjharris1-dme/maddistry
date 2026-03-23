import { Mail, Instagram, MapPin, FileText } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  return (
    <div className="pt-16 bg-[#FAFAF8]">
      {/* Header */}
      <section className="py-32 px-6 bg-[#1A1A1A] text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-6 block">Connect</span>
          <h1 className="text-6xl md:text-7xl mb-8 font-light tracking-tight">Get in Touch</h1>
          <div className="w-20 h-px bg-[#D4AF37] mx-auto mb-8"></div>
          <p className="text-xl text-white/70 font-light">
            Interested in my work, collaboration opportunities,<br className="hidden md:block" /> or supporting my artistic journey?
          </p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 mb-32">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-3xl mb-12 font-light tracking-tight text-gray-900">Send a Message</h2>
              <form className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-xs mb-4 uppercase tracking-[0.2em] text-gray-500">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-6 py-5 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors bg-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs mb-4 uppercase tracking-[0.2em] text-gray-500">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-6 py-5 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors bg-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-xs mb-4 uppercase tracking-[0.2em] text-gray-500">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-6 py-5 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors bg-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs mb-4 uppercase tracking-[0.2em] text-gray-500">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-6 py-5 border border-gray-300 focus:border-gray-900 focus:outline-none resize-none transition-colors bg-white"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white px-8 py-6 hover:bg-gray-800 transition-all duration-500 text-sm tracking-[0.2em] uppercase"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-3xl mb-12 font-light tracking-tight text-gray-900">Contact Information</h2>
              <div className="space-y-10 mb-16">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 border border-gray-900 flex items-center justify-center">
                      <Mail size={20} strokeWidth={1.5} className="text-gray-900" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">Email</h3>
                    <a
                      href="mailto:info@maddistry.com"
                      className="text-gray-900 hover:text-[#D4AF37] text-lg transition-colors"
                    >
                      info@maddistry.com
                    </a>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 border border-gray-900 flex items-center justify-center">
                      <Instagram size={20} strokeWidth={1.5} className="text-gray-900" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">Instagram</h3>
                    <a
                      href="https://instagram.com/maddistry"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-[#D4AF37] text-lg transition-colors"
                    >
                      @maddistry
                    </a>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 border border-gray-900 flex items-center justify-center">
                      <MapPin size={20} strokeWidth={1.5} className="text-gray-900" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">Location</h3>
                    <p className="text-gray-900 text-lg">
                      Based in the United States
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 border border-gray-900 flex items-center justify-center">
                      <FileText size={20} strokeWidth={1.5} className="text-gray-900" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">Portfolio & CV</h3>
                    <p className="text-gray-600 text-lg font-light">
                      Full portfolio and curriculum vitae available upon request
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 p-10">
                <h3 className="text-xl mb-8 font-light tracking-wide">Opportunities I'm Seeking</h3>
                <ul className="space-y-4 text-gray-600 text-lg font-light">
                  <li className="flex items-start gap-4">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Scholarship opportunities for art education</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Philanthropic support and mentorship</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Gallery exhibition opportunities</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Commission work</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Collaborative art projects</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Workshop and speaking engagements</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center py-20 border-t border-gray-200"
          >
            <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-8 block">Support</span>
            <h2 className="text-4xl md:text-5xl mb-8 font-light tracking-tight text-gray-900">Supporting Young Artists</h2>
            <div className="w-20 h-px bg-[#D4AF37] mx-auto mb-12"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mb-10 text-lg leading-relaxed font-light">
              If you're a philanthropist, educator, or arts advocate interested in supporting emerging talent, 
              I would love to discuss how we can work together to advance contemporary art and art education.
            </p>
            <p className="text-xl text-gray-900 italic font-light">
              I am currently seeking scholarship funding to pursue a Bachelor of Arts degree at a leading institution.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}