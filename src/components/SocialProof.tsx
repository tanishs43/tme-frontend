import { motion } from 'motion/react';

export default function SocialProof() {
  const logos = Array.from({ length: 6 });

  return (
    <section className="py-[120px] bg-bg border-y border-white/5 overflow-hidden">
      <div className="container mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[2.4rem] font-bold text-white mb-4">Trusted by Growing Brands</h2>
          <p className="text-text-tertiary text-sm uppercase tracking-widest font-medium">
            Logos will be added later
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50">
          {logos.map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, opacity: 1 }}
              className="w-32 h-12 bg-white/10 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            >
              <div className="w-20 h-4 bg-white/20 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
