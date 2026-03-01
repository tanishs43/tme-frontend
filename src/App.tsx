import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import SocialProof from './components/SocialProof';
import CTA from './components/CTA';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-bg selection:bg-neon selection:text-bg"
    >
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <SocialProof />
        <CTA />
        <InquiryForm />
      </main>
      <Footer />
    </motion.div>
  );
}
