import { motion } from 'motion/react';

export default function About() {
  const founders = [
    { name: 'Mr. Anurag Patidar', role: 'Co-Founder' },
    { name: 'Ms. Purvi Jain', role: 'Co-Founder' },
  ];

  return (
    <section id="about" className="py-[120px] bg-bg relative overflow-hidden">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[2.4rem] font-bold text-white mb-8">Execution Over Buzzwords</h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              Founded a year ago, The Marketing Executors was built on a simple principle: results matter more than noise. We are a team of execution-focused marketers who believe in performance, growth, and clarity.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              We don't just provide services; we partner with brands to build growth assets that deliver long-term value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="p-8 rounded-2xl bg-surface border border-white/5 hover:border-neon transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-neon/10 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-neon">
                    {founder.name.split(' ').pop()?.[0]}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{founder.name}</h3>
                <p className="text-text-tertiary uppercase tracking-widest text-xs font-semibold">
                  {founder.role}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
