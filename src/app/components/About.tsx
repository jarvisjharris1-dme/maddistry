import { Palette, Award, BookOpen, Heart } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import aboutImage from "./assets/830d61ba54a295b05d709d575ced1de615d3bbbe.png";

export function About() {
  return (
    <div className="pt-18 bg-[#FAFAF8]">
      {/* Hero Section */}
      <section className="py-16 px-6 bg-[#1A1A1A] text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-6 block">Artist</span>
          <h1 className="text-6xl md:text-7xl mb-8 font-light tracking-tight">About Madison</h1>
          <div className="w-20 h-px bg-[#D4AF37] mx-auto mb-8"></div>
          <p className="text-xl text-white/70 font-light">
            Young artist with a passion for creating meaningful contemporary art
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-start mb-40">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="aspect-[4/5] overflow-hidden bg-gray-900 sticky top-32"
            >
              <img
                src={aboutImage}
                alt="Madison Harris working on sketches in her studio"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-4xl mb-8 font-light tracking-tight text-gray-900">My Artistic Journey</h2>
                <div className="w-16 h-px bg-[#D4AF37] mb-10"></div>
              </div>
              
              <div className="space-y-8 text-gray-600 leading-relaxed text-lg font-light">
                <p>
                  I am Madison Harris, a passionate young artist dedicated to exploring the depths of the human experience through visual artistry. My artistic journey began at age 8 when I picked up a pencil to sketch on my parent's printer paper. Since then, I have wrestled with my identity as an artist, but I have never doubted that art will be intrinsic to my future.
                </p>
                <p>
                  My current work explores the intimacy and wonder of personal exploration and introspection through the use of many techniques and mediums, but mainly traditional graphite. The field of artistry is so meaningful to me because it allows me to access the depths of my own soul, as well as the stories of the world around me.
                </p>
                <p>
                  Visual imagery and artistry provides the opportunity for a cognitive understanding that surpasses normal language that can be beautifully married with words and history. Currently pursuing advanced art studies, I am actively seeking scholarship opportunities and philanthropic support to further my education at a prestigious arts program.
                </p>
                <p className="text-gray-900 italic">
                  Through my art, and a potential voice as an art director or writer, I hope to create accessibility and relatability to an art world that feels exclusive, open eyes to the possibility of growth or beauty through socioeconomic development, and heal cycles of brokenness in our world.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Skills & Approach */}
          <div className="grid md:grid-cols-4 gap-8 mb-40">
            {[
              {
                icon: Palette,
                title: "Technique",
                description: "Proficient in multiple mediums including acrylic, oil, watercolor, and mixed media",
                delay: 0
              },
              {
                icon: Award,
                title: "Recognition",
                description: "Regional competition finalist and featured artist in local exhibitions",
                delay: 0.1
              },
              {
                icon: BookOpen,
                title: "Education",
                description: "Advanced art program student with focus on contemporary art and art history",
                delay: 0.2
              },
              {
                icon: Heart,
                title: "Vision",
                description: "Creating art that connects people and communicates universal human experiences",
                delay: 0.3
              }
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: item.delay, ease: [0.22, 1, 0.36, 1] }}
                className="text-center p-8 border border-gray-200 hover:border-[#D4AF37] transition-colors duration-500"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 border border-gray-900 text-gray-900 mb-8">
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl mb-4 font-light tracking-wide">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Why Support My Work */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#1A1A1A] text-white p-16 md:p-24"
          >
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-20">
                <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-6 block">Support</span>
                <h2 className="text-5xl md:text-6xl mb-8 font-light tracking-tight">Investment in Emerging Talent</h2>
                <div className="w-20 h-px bg-[#D4AF37] mx-auto"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-16 mb-16">
                <div>
                  <h3 className="text-2xl mb-8 font-light tracking-wide pb-4 border-b border-white/20">Demonstrated Commitment</h3>
                  <ul className="space-y-6 text-white/70 text-lg font-light">
                    <li className="flex items-start gap-4">
                      <span className="text-[#D4AF37] mt-1">•</span>
                      <span>Consistent artistic practice and skill development</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-[#D4AF37] mt-1">•</span>
                      <span>Active participation in art community and exhibitions</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-[#D4AF37] mt-1">•</span>
                      <span>Strong academic performance in advanced art courses</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-[#D4AF37] mt-1">•</span>
                      <span>Volunteer work teaching art to younger students</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl mb-8 font-light tracking-wide pb-4 border-b border-white/20">Future Impact</h3>
                  <ul className="space-y-6 text-white/70 text-lg font-light">
                    <li className="flex items-start gap-4">
                      <span className="text-[#D4AF37] mt-1">•</span>
                      <span>Commitment to creating socially relevant artwork</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-[#D4AF37] mt-1">•</span>
                      <span>Plans to give back to community through art education</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-[#D4AF37] mt-1">•</span>
                      <span>Dedication to pushing boundaries in contemporary art</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-[#D4AF37] mt-1">•</span>
                      <span>Long-term vision for artistic career and contribution</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center border-t border-white/20 pt-16">
                <blockquote className="text-2xl text-white/80 italic max-w-4xl mx-auto leading-relaxed mb-8 font-light">
                  "Supporting young artists is an investment in the future of culture and creativity. With the right opportunities, I am committed to making a meaningful impact in the art world and using my platform to inspire and uplift others."
                </blockquote>
                <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-6"></div>
                <p className="text-lg text-white tracking-[0.2em] uppercase">Madison Harris</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
