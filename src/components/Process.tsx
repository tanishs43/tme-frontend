import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Audit',
    description: 'Understanding brand goals, market, audience, and current performance.',
  },
  {
    number: '02',
    title: 'Strategy & Planning',
    description: 'Building a clear execution roadmap across channels.',
  },
  {
    number: '03',
    title: 'Execution & Optimization',
    description: 'Launching campaigns, creatives, SEO, and continuous improvements.',
  },
  {
    number: '04',
    title: 'Scale & Growth',
    description: 'Doubling down on what works and scaling performance.',
  },
];

export default function Process() {
  return (
    <section id="work" className="py-[120px] bg-bg relative">
      <div className="container mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-[2.4rem] font-bold text-white mb-4">Our Execution Process</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            We follow a systematic approach to ensure every campaign is executed with precision and delivers maximum impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group p-8 rounded-2xl bg-surface border border-white/5 hover:border-neon transition-all duration-300 relative overflow-hidden"
            >
              <div className="relative z-10">
                <span className="text-[3rem] font-bold text-neon/20 group-hover:text-neon transition-colors duration-300 leading-none block mb-6">
                  {step.number}
                </span>
                <h3 className="text-[1.4rem] font-semibold text-white mb-4 group-hover:text-neon transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
