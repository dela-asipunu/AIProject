'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  return (
    <motion.footer
      className="p-4 bg-card-bg text-text text-center border-t border-gray-200"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <p>
        © 2025{' '}
        <Link
          href="/"
          className="text-primary hover:text-secondary transition-colors duration-300"
        >
          AnansAI
        </Link>
        . All rights reserved.
      </p>
    </motion.footer>
  );
}
