'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './AuthContext';

// Card animation variants
const cardVariants = {
  hidden: { opacity: 0.2, y: 30 },
  visible: (index: number) => ({
    opacity: 1.1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: index * 0.18,
      ease: 'easeOut',
    },
  }),
  loop: {
    scale: [1, 1.03, 1],
    transition: {
      duration: 1.9,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Section fade-in animation
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

// Marquee animation for emoji flow
const marqueeVariants = {
  animate: {
    x: [0, -720],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 16,
        ease: 'linear',
      },
    },
  },
};

export default function Home() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const emojis = ['🤖', '🚀', '💻', '⚙️', '🌐', '👍', '🚨', '🧭'];

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  // Render nothing until authenticated (avoids flash of content)
  if (!isAuthenticated) {
    return null; // Or a loading spinner if preferred
  }

  return (
    <div className="min-h-screen bg-background text-text font-sans">
      <Navbar />
      <motion.section
        className="relative h-screen flex flex-col items-center justify-center text-center p-15 bg-background overflow-hidden"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          onError={(e) => console.error('Video failed to load:', e)}
        >
          <source
            src="https://cdn.pixabay.com/video/2023/03/15/154845-808552011_large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
        <div className="relative z-20">
          <motion.h1
            className="text-6xl font-bold max-w-4xl text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease: 'easeOut' }}
          >
            AnansAI
          </motion.h1>
          <motion.p
            className="text-lg mt-4 max-w-2xl text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
          >
            Unlock the power of AI to create compelling, data-driven marketing
            campaigns tailored for your audience.
          </motion.p>
          <Link href="/contact">
            <motion.button
              className="mt-6 px-6 py-3 bg-primary text-white rounded-lg text-lg hover:bg-secondary hover:shadow-custom-hover transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1,
                duration: 0.5,
                type: 'spring',
                stiffness: 120,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </motion.section>
      <section className="py-10 bg-card-bg overflow-hidden">
        <div className="relative">
          <AnimatePresence>
            <motion.div
              className="flex gap-8 whitespace-nowrap"
              variants={marqueeVariants}
              animate="animate"
            >
              {[...emojis, ...emojis].map((emoji, index) => (
                <span
                  key={index}
                  className="text-5xl"
                  style={{ minWidth: '120px', textAlign: 'center' }}
                >
                  {emoji}
                </span>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      <motion.section
        className="py-20 px-10 bg-card-bg"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-semibold text-center mb-10 text-primary">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            'AI Content Optimization',
            'Personalized Messaging',
            'Data-Driven Insights',
            'Automated A/B Testing',
            'Predictive Analytics',
            'Brand Voice Customization',
            'Real-Time Performance Analysis',
            'Customer Journey Mapping',
            'Multi-Channel AI Integration',
          ].map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-card-bg rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              animate="loop"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-medium text-text">{service}</h3>
              <p className="mt-2 text-gray-600">
                Harness AI to enhance your marketing efforts and maximize ROI.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <motion.section
        className="py-20 px-10 bg-background"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-semibold text-center mb-10 text-primary">
          Success Stories
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            'Fortune 500 Brand Growth',
            'E-Commerce AI Boost',
            'SaaS Retention Strategy',
            'Retail Consumer Behavior Insights',
            'Healthcare AI-Powered Campaigns',
          ].map((caseStudy, index) => (
            <motion.div
              key={index}
              className="p-6 bg-card-bg rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-medium text-text">{caseStudy}</h3>
              <p className="mt-2 text-gray-600">
                Discover how AI-driven insights transformed marketing
                strategies.
              </p>
              <Link
                href="/case-studies"
                className="text-primary mt-4 block hover:text-secondary transition-colors duration-300"
              >
                Read More
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <motion.section
        className="py-20 px-10 bg-card-bg"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-semibold text-center mb-10 text-primary">
          How AI Works
        </h2>
        <motion.p
          className="text-center max-w-2xl mx-auto text-gray-600 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Our AI analyzes millions of customer interactions to craft the most
          effective marketing messages, driving higher engagement and
          conversions.
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            'Deep Learning Models',
            'Behavioral Predictive Analysis',
            'Adaptive Content Generation',
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-card-bg rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-medium text-text">{feature}</h3>
              <p className="mt-2 text-gray-600">
                Our AI dynamically adjusts marketing campaigns based on
                real-time audience responses.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <motion.section
        className="py-20 px-10 bg-primary text-center text-white"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-semibold">
          Ready to Revolutionize Your Marketing?
        </h2>
        <p className="text-lg mt-4">
          Let AI take your brand to the next level.
        </p>
        <Link href="/contact">
          <motion.button
            className="mt-6 px-6 py-3 bg-white text-primary rounded-lg text-lg hover:bg-secondary hover:text-text hover:shadow-custom-hover transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </Link>
      </motion.section>
      <Footer />
    </div>
  );
}
