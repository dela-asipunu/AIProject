'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function About() {
  return (
    <div className="min-h-screen bg-background text-text font-sans">
      <Navbar />
      <motion.section
        className="py-20 px-10 text-center"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl font-bold text-primary mb-6">About AnansAI</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-4">
          AnansAI is a cutting-edge platform leveraging artificial intelligence
          to revolutionize marketing strategies. Our mission is to empower
          businesses with data-driven insights and personalized solutions.
        </p>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Founded by a team of AI experts and marketing innovators, we’re
          committed to pushing the boundaries of what’s possible in digital
          engagement.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-all duration-300"
        >
          Back to Home
        </Link>
      </motion.section>
      <Footer />
    </div>
  );
}
