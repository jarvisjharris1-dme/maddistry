import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import heroImage from "../assets/1f467b8f869c8a326b06248c48e002d6896f4e9b.png";
import artwork1 from "../assets/e026077a58300885667696daa13c5336dd449756.png";
import artwork2 from "../assets/29f640e7fb2c438c24ecb473de6cac56e20addc1.png";
import artwork3 from "../assets/363cd6de4e6f4a1aa2572a947d8876e01eacf296.png";

export function Home() {
  return (
    <div className="pt-16 bg-[#FAFAF8]">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            src={heroImage}
            alt="Madison Harris at work in her studio"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6">
              <span className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase">Contemporary Artist</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight font-light">
              Madison Harris

            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)' }}>
              Contemporary works exploring the human experience through<br className="hidden md:block" /> intimate portraiture and emotional depth. "This is Not Just Art. It's Maddistry."
            </p>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-3 border border-white/40 text-white px-12 py-5 hover:bg-white hover:text-black transition-all duration-500 text-sm tracking-[0.2em] uppercase backdrop-blur-sm"
            >
              View Collection
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-10 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-24"
          >
            <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-6 block">Selected Works</span>
            <h2 className="text-5xl md:text-6xl text-gray-900 font-light tracking-tight mb-8">Featured Collection</h2>
            <div className="w-20 h-px bg-[#D4AF37] mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {[
              { img: artwork3, title: "Pressure", medium: "Charcoal", year: "2025", delay: 0 },
              { img: artwork2, title: "I'm Her", medium: "Acrylic on Canvas", year: "2025", delay: 0.15 },
              { img: artwork1, title: "What's In A Face", medium: "Charcoal", year: "2026", delay: 0.3 }
            ].map((work, index) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: work.delay, ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-pointer"
              >
                <Link to="/gallery">
                  <div className="aspect-[3/4] overflow-hidden bg-gray-900 mb-8 relative">
                    <img
                      src={work.img}
                      alt={work.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl text-gray-900 mb-3 font-light">{work.title}</h3>
                    <p className="text-sm text-gray-500 tracking-wide">{work.medium}, {work.year}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-center"
          >
            <Link
              to="/gallery"
              className="inline-flex items-center gap-3 border border-gray-900 text-gray-900 px-12 py-5 hover:bg-gray-900 hover:text-white transition-all duration-500 text-sm tracking-[0.2em] uppercase"
            >
              View All Works
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-10 px-6 bg-[#1A1A1A]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <blockquote className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-6 italic">
            "Art allows me to access the depths of my own soul and the stories of the world around me"
          </blockquote>
          <div className="w-20 h-px bg-[#D4AF37] mx-auto mb-5"></div>
          <p className="text-white/60 tracking-[0.2em] text-sm uppercase">Madison Harris</p>
        </motion.div>
      </section>

      {/* Recognition Section */}
      <section className="py-14 px-6 bg-[#FAFAF8]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-6 block">Achievements & Vision</span>
            <h2 className="text-5xl md:text-6xl text-gray-900 font-light tracking-tight mb-8">Recognition & Goals</h2>
            <div className="w-20 h-px bg-[#D4AF37] mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="space-y-8"
            >
              <h3 className="text-2xl text-gray-900 font-light mb-8 pb-4 border-b border-gray-200">Current Achievements</h3>
              <ul className="space-y-6 text-gray-600 text-lg">
                <li className="flex items-start gap-4">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>Contemporary Arts Memphis Fellow (2025)</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>Featured in Local Gallery Exhibition</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>Community Art Program Participant</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>High School Advanced Art Program</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-2xl text-gray-900 font-light mb-8 pb-4 border-b border-gray-200">Future Aspirations</h3>
              <ul className="space-y-6 text-gray-600 text-lg">
                <li className="flex items-start gap-4">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>Pursue Art Degree at prestigious institution</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>Secure funding to deepen my art skills</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>Develop Maddistry signature artistic style and technique</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>Create meaningful art that inspires communities</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
