'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, Facebook, Instagram } from 'lucide-react';
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
          ? 'bg-white/95 backdrop-blur-md border-b border-deep-navy/5 py-2' 
          : 'bg-white py-4'
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Branding */}
          <div className="flex-shrink-0">
            <Link href="/" className="group block" aria-label="Blue Oasis Home">
              <span className="font-heading font-black text-2xl text-sky-blue tracking-tighter block leading-none">
                BLUE OASIS
              </span>
              <span className="hidden md:block text-[10px] font-bold text-deep-navy/40 uppercase tracking-[0.2em] mt-0.5 leading-none">
                Pool & Spa Repair Inc
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <div className="flex items-center gap-2 mr-4 border-r border-deep-navy/10 pr-6">
              <a 
                href="https://www.facebook.com/blueoasispoolandspa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-deep-navy/40 hover:text-sky-blue transition-colors rounded-full hover:bg-sky-blue/5"
                aria-label="Visit our Facebook page"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/blueoasis.psr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-deep-navy/40 hover:text-sky-blue transition-colors rounded-full hover:bg-sky-blue/5"
                aria-label="Visit our Instagram profile"
              >
                <Instagram size={20} />
              </a>
            </div>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-deep-navy/70 hover:text-sky-blue font-bold text-sm uppercase tracking-widest transition-colors px-2 py-1"
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="tel:9543831203" 
              className="bg-warm-orange hover:bg-warm-orange/90 text-white px-6 py-3 rounded-full font-black text-sm transition-all flex items-center gap-2 shadow-lg hover:shadow-warm-orange/20 hover:-translate-y-0.5 min-h-[48px]"
              aria-label="Call Calvin at (954) 383-1203"
            >
              <Phone size={16} strokeWidth={3} aria-hidden="true" />
              <span>(954) 383-1203</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-deep-navy p-3 rounded-xl hover:bg-gray-50 transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
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
            id="mobile-menu"
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
                  className="block px-4 py-4 text-xl font-bold text-deep-navy hover:text-sky-blue border-b border-gray-50 min-h-[48px]"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full bg-warm-orange text-white text-center py-5 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-transform min-h-[60px]"
                >
                  Request Fast Repair
                </Link>
                <a 
                  href="tel:9543831203"
                  className="block text-center mt-6 font-bold text-deep-navy py-3 min-h-[48px]"
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
