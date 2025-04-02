'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHidden(true); // Hide navbar when scrolling down
      } else {
        setHidden(false); // Show navbar when scrolling up
      }
      lastScrollY = window.scrollY;
    };

    const handleMouseMove = (e) => {
      if (e.clientY < 60) {
        setHidden(false); // Show navbar when mouse moves to top
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const linkVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.1, color: '#f39c12' },
  };

  return (
    <motion.nav
      className="p-4 bg-card-bg text-text flex justify-between items-center fixed top-0 w-full z-20 shadow-md backdrop-blur-md bg-opacity-80"
      initial={{ opacity: 1, y: 0 }}
      animate={hidden ? { opacity: 0, y: -100 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{ pointerEvents: hidden ? 'none' : 'auto' }}
    >
      <div className="text-2xl font-bold">
        <Link
          href="/"
          className="text-primary hover:text-secondary transition-colors duration-300"
        >
          AnansAI
        </Link>
      </div>
      <ul className="flex gap-6">
        {['Home', 'About', 'Products', 'Industries', 'Contact'].map(
          (item, index) => (
            <motion.li
              key={item}
              variants={linkVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={`/${
                  item.toLowerCase() === 'home' ? '' : item.toLowerCase()
                }`}
                className="text-text transition-all duration-300 relative"
              >
                <span className="after:block after:content-[''] after:h-0.5 after:bg-primary after:w-0 after:transition-all after:duration-300 hover:after:w-full">
                  {item}
                </span>
              </Link>
            </motion.li>
          )
        )}
      </ul>
    </motion.nav>
  );
}
