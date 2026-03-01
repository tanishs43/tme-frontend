import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 h-[72px] bg-bg/85 backdrop-blur-md border-b border-neon/15 z-50 flex items-center"
    >
      <div className="container mx-auto max-w-[1200px] px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold tracking-tight">
          <span className="text-white">The Marketing</span>{' '}
          <span className="text-neon">Executors</span>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-neon transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <button className="bg-neon text-bg font-semibold px-6 py-2 rounded-lg text-sm hover:shadow-[0_0_15px_rgba(255,106,0,0.5)] transition-all duration-300">
          Book a Call
        </button>
      </div>
    </motion.nav>
  );
}
