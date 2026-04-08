'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'The Whisperer', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <nav 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-deep-navy/5 py-3' 
          : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Branding */}
          <div className="flex-shrink-0">
            <Link href="/" className="group block">
              <span className="font-heading font-black text-2xl text-sky-blue tracking-tighter block leading-none">
                BLUE OASIS
              </span>
              <span className="hidden md:block text-[10px] font-bold text-deep-navy/40 uppercase tracking-[0.2em] mt-0.5 leading-none">
                Pool & Spa Repair Inc
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-deep-navy/70 hover:text-sky-blue font-bold text-sm uppercase tracking-widest transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="tel:9543831203" 
              className="bg-warm-orange hover:bg-warm-orange/90 text-white px-6 py-3 rounded-full font-black text-sm transition-all flex items-center gap-2 shadow-lg hover:shadow-warm-orange/20 hover:-translate-y-0.5"
            >
              <Phone size={16} strokeWidth={3} />
              <span>(954) 383-1203</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-deep-navy p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-xl font-bold text-deep-navy hover:text-sky-blue border-b border-gray-50"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full bg-warm-orange text-white text-center py-5 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-transform"
                >
                  Request Fast Repair
                </Link>
                <a 
                  href="tel:9543831203"
                  className="block text-center mt-6 font-bold text-deep-navy"
                >
                  Call Now: (954) 383-1203
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
