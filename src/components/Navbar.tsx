'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Flame, ArrowUpRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'about', label: 'About Us', href: '/about' },
    { id: 'projects', label: 'Our Work', href: '/projects' },
    { id: 'skills', label: 'Services', href: '/skills' },
    { id: 'contact', label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled
        ? 'bg-[#38240D]/90 backdrop-blur-xl border-b border-[#FDFBD4]/15 py-3.5 shadow-2xl'
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Left Column: Logo Emblem + Brand Name (Heading Display Font) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/" className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#713600] via-[#C05800] to-[#FDFBD4] p-[1.5px] shadow-lg shadow-[#C05800]/30 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#38240D] rounded-full flex items-center justify-center">
                <Flame size={15} className="text-[#C05800] fill-[#C05800]/20" />
              </div>
            </div>
            <span className="font-heading text-base md:text-lg font-bold tracking-wide text-[#FDFBD4] group-hover:text-[#FDFBD4]/80 transition-colors">
              V. S. REDDY
            </span>
          </Link>
        </motion.div>

        {/* Center Column: Floating Glass Pill Navigation (Manrope font-sans) */}
        <motion.div
          className="hidden md:flex items-center bg-[#FDFBD4]/[0.06] backdrop-blur-xl border border-[#FDFBD4]/15 rounded-full px-2 py-1.5 shadow-2xl shadow-black/60 font-sans text-xs uppercase tracking-wider font-semibold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`relative px-4 py-1.5 transition-all duration-300 rounded-full ${
                  isActive
                    ? 'bg-gradient-to-r from-[#C05800] to-[#713600] text-[#FDFBD4] shadow-md shadow-[#C05800]/40 font-bold'
                    : 'text-[#FDFBD4]/70 hover:text-[#FDFBD4] hover:bg-[#FDFBD4]/10'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </motion.div>

        {/* Right Column: CTA Button (Manrope font-sans) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans"
        >
          <MagneticButton>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C05800] to-[#713600] hover:from-[#d16200] hover:to-[#854000] text-[#FDFBD4] font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#C05800]/30 flex items-center space-x-1.5 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get in touch with us</span>
              <ArrowUpRight size={15} className="stroke-[2.5]" />
            </Link>
          </MagneticButton>
        </motion.div>

      </div>
    </nav>
  );
}
