import { motion } from 'motion/react';
import { Send, Phone } from 'lucide-react';

export default function InquiryForm() {
  return (
    <section id="contact" className="py-[120px] bg-bg relative">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[2.4rem] md:text-[3.5rem] font-bold text-white mb-8 leading-tight">
              Let's Execute Your <span className="text-neon">Growth</span> Strategy
            </h2>
            <p className="text-lg text-text-secondary max-w-lg mb-12">
              Have a project in mind? Or just want to say hi? Fill out the form and we'll get back to you within 24 hours.
            </p>

            <div className="flex items-center gap-6 p-6 rounded-2xl bg-surface border border-white/5 hover:border-neon transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-neon/10 flex items-center justify-center group-hover:bg-neon/20 transition-colors duration-300">
                <Phone className="w-6 h-6 text-neon" />
              </div>
              <div>
                <p className="text-sm text-text-tertiary uppercase tracking-widest font-medium mb-1">
                  Call us directly
                </p>
                <a href="tel:8103544912" className="text-xl font-bold text-white hover:text-neon transition-colors">
                  8103544912
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-10 rounded-[32px] bg-surface border border-white/5 relative overflow-hidden"
          >
            <h3 className="text-[1.8rem] font-bold text-white mb-8">Send Us an Inquiry</h3>
            
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-text-tertiary uppercase tracking-widest">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full bg-bg border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-text-tertiary focus:outline-none focus:border-neon transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-text-tertiary uppercase tracking-widest">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-bg border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-text-tertiary focus:outline-none focus:border-neon transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-text-tertiary uppercase tracking-widest">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full bg-bg border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-text-tertiary focus:outline-none focus:border-neon transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-text-tertiary uppercase tracking-widest">Message</label>
                <textarea
                  placeholder="Tell us about your project"
                  rows={4}
                  className="w-full bg-bg border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-text-tertiary focus:outline-none focus:border-neon transition-colors resize-none"
                />
              </div>

              <button className="w-full bg-neon text-bg font-bold px-8 py-5 rounded-xl hover:shadow-[0_0_20px_rgba(255,106,0,0.5)] transition-all duration-300 flex items-center justify-center gap-2 group">
                Submit Inquiry
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
