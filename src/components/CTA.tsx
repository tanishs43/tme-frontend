import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-[120px] bg-bg relative overflow-hidden">
      {/* Radial Neon Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-12 md:p-24 rounded-[40px] bg-surface border border-white/5 text-center relative overflow-hidden"
        >
          {/* Subtle Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon to-transparent" />
          </div>

          <h2 className="text-[2.4rem] md:text-[3.5rem] font-bold text-white mb-6 leading-tight">
            Ready to Scale Your Brand?
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-12">
            Get a free audit or download our growth guide to start your journey towards measurable results.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="bg-neon text-bg font-bold px-10 py-5 rounded-xl hover:shadow-[0_0_30px_rgba(255,106,0,0.6)] transition-all duration-300 flex items-center gap-2 group w-full sm:w-auto justify-center">
              Get a Free Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-transparent text-white border border-white/20 font-bold px-10 py-5 rounded-xl hover:bg-white/5 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center">
              Get a Free Guide
              <Download className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
