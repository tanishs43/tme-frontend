import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen pt-[72px] flex items-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-[1200px] px-6 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col gap-8"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-neon/30 bg-neon/5 text-neon text-[0.75rem] font-semibold tracking-widest uppercase">
            RESULT-DRIVEN MARKETING AGENCY
          </div>

          <h1 className="text-[2.4rem] md:text-[4.2rem] font-bold leading-[1.1] tracking-tight text-white">
            We <span className="text-neon">Execute</span> Marketing That Drives Real Growth
          </h1>

          <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
            From traffic to conversions, creatives to campaigns — we focus on execution, performance, and measurable results.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <button className="bg-neon text-bg font-bold px-8 py-4 rounded-lg hover:shadow-[0_0_20px_rgba(255,106,0,0.5)] transition-all duration-300 flex items-center gap-2 group">
              Book a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-transparent text-white border border-white/20 font-bold px-8 py-4 rounded-lg hover:bg-white/5 transition-all duration-300">
              Explore Services
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-text-tertiary uppercase tracking-wider font-medium">
              Helping brands grow through SEO, Ads, Creatives & Web
            </p>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border-2 border-dashed border-neon/40 shadow-[0_0_40px_rgba(255,106,0,0.15)]">
              <img
                src="https://images.unsplash.com/photo-1551288049-bbda38a5f452?auto=format&fit=crop&w=1000&q=80"
                alt="Marketing Growth Dashboard"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-neon/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-neon/10 blur-3xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
