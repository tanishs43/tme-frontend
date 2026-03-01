import { motion } from 'motion/react';
import { Search, TrendingUp, Facebook, Globe, Video, Palette, Code, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Search,
    name: 'Search Engine Optimization (SEO)',
    outcome: 'Rank higher, drive organic traffic, and dominate search results.',
  },
  {
    icon: TrendingUp,
    name: 'Performance Marketing',
    outcome: 'Data-driven campaigns focused on ROI and scalable growth.',
  },
  {
    icon: Facebook,
    name: 'Meta Ads',
    outcome: 'High-converting Facebook and Instagram ad strategies.',
  },
  {
    icon: Globe,
    name: 'Google Ads',
    outcome: 'Targeted search and display ads for immediate results.',
  },
  {
    icon: Video,
    name: 'Video Editing',
    outcome: 'Engaging video content that captures attention and converts.',
  },
  {
    icon: Palette,
    name: 'Creative Graphic Designing',
    outcome: 'Visual assets that define your brand and drive engagement.',
  },
  {
    icon: Code,
    name: 'Web Design & Growth Assets',
    outcome: 'High-performance websites built for conversion and speed.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-[120px] bg-bg relative overflow-hidden">
      <div className="container mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[2.4rem] font-bold text-white mb-4">What We Execute Best</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            We don't just plan; we execute. Our core services are designed to deliver measurable outcomes for your brand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group p-8 rounded-2xl bg-surface border border-white/5 hover:border-neon transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-neon/10 flex items-center justify-center mb-6 group-hover:bg-neon/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-neon" />
                </div>
                <h3 className="text-[1.4rem] font-semibold text-white mb-3 group-hover:text-neon transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {service.outcome}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-neon group-hover:gap-3 transition-all duration-300"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
