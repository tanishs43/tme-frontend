import { motion } from 'motion/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-bg border-t border-white/5">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="text-xl font-bold tracking-tight">
            <span className="text-white">The Marketing</span>{' '}
            <span className="text-neon">Executors</span>
          </div>

          {/* Center Links */}
          <div className="flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-text-tertiary hover:text-neon transition-colors duration-300">
              Services
            </a>
            <a href="#work" className="text-sm font-medium text-text-tertiary hover:text-neon transition-colors duration-300">
              Work
            </a>
            <a href="#about" className="text-sm font-medium text-text-tertiary hover:text-neon transition-colors duration-300">
              About
            </a>
            <a href="#contact" className="text-sm font-medium text-text-tertiary hover:text-neon transition-colors duration-300">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-text-tertiary">
            © {currentYear} The Marketing Executors. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
