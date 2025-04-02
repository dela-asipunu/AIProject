'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: index * 0.2, ease: 'easeOut' },
  }),
};

export default function Industries() {
  const industries = [
    {
      name: 'E-Commerce',
      desc: 'Boost sales with personalized recommendations.',
    },
    {
      name: 'Healthcare',
      desc: 'Enhance patient engagement with AI insights.',
    },
    { name: 'SaaS', desc: 'Optimize user retention and growth.' },
  ];

  return (
    <div className="min-h-screen bg-background text-text font-sans">
      <Navbar />
      <motion.section
        className="py-20 px-10"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl font-bold text-primary text-center mb-10">
          Industries We Serve
        </h1>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="p-6 bg-card-bg rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-medium text-text">
                {industry.name}
              </h2>
              <p className="mt-2 text-gray-600">{industry.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/"
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
}
