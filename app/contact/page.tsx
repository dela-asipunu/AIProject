'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for backend team
    console.log('Contact form submitted:', { name, email, message });
  };

  return (
    <div className="min-h-screen bg-background text-text font-sans">
      <Navbar />
      <motion.section
        className="py-20 px-10 flex justify-center"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-md w-full">
          <h1 className="text-4xl font-bold text-primary text-center mb-6">
            Contact Us
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-text mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-text mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-text mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your message"
                rows={4}
                required
              />
            </div>
            <motion.button
              type="submit"
              className="w-full py-3 bg-primary text-white rounded-lg text-lg hover:bg-secondary hover:shadow-custom-hover transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
          <p className="mt-6 text-center">
            <Link
              href="/"
              className="text-primary hover:text-secondary transition-colors duration-300"
            >
              Back to Home
            </Link>
          </p>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
}
