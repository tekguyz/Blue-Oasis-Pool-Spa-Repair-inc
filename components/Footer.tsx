import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-white pt-20 pb-10 border-t border-white/10" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <Link href="/" className="font-heading font-bold text-2xl text-white tracking-tight mb-6 block" aria-label="Blue Oasis Home">
              Blue Oasis Pool & Spa Repair Inc
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              South Florida&apos;s Premier Pool Whisperer. Precision diagnostics and premium repairs for luxury pools.
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-bold text-sky-blue uppercase tracking-widest">State Licensed & Fully Insured</p>
              <p className="text-xs text-gray-500 font-mono">CPC1459644</p>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white uppercase tracking-wider">Stay Connected</h4>
            <div className="flex flex-col gap-4">
              <a 
                href="https://www.facebook.com/blueoasispoolandspa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 group min-h-[48px]"
                aria-label="Follow us on Facebook"
              >
                <div className="w-10 h-10 rounded-full bg-sky-blue/10 flex items-center justify-center text-sky-blue group-hover:bg-sky-blue group-hover:text-white transition-all border border-sky-blue/20">
                  <Facebook size={20} aria-hidden="true" />
                </div>
                <span className="text-white font-medium group-hover:text-sky-blue transition-colors">Facebook</span>
              </a>
              <a 
                href="https://www.instagram.com/blueoasis.psr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 group min-h-[48px]"
                aria-label="Follow us on Instagram"
              >
                <div className="w-10 h-10 rounded-full bg-sky-blue/10 flex items-center justify-center text-sky-blue group-hover:bg-sky-blue group-hover:text-white transition-all border border-sky-blue/20">
                  <Instagram size={20} aria-hidden="true" />
                </div>
                <span className="text-white font-medium group-hover:text-sky-blue transition-colors">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white uppercase tracking-wider">Service Areas</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Tamarac, FL (Headquarters)</li>
              <li>Fort Lauderdale, FL</li>
              <li>Coral Springs, FL</li>
              <li>Sunrise, FL</li>
              <li>Plantation, FL</li>
              <li>All of Broward County</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-6">
              <li className="text-gray-400">
                <span className="block text-white font-bold mb-2 uppercase text-xs tracking-widest">Call Calvin:</span>
                <a href="tel:9543831203" className="text-2xl font-black text-white hover:text-warm-orange transition-colors min-h-[48px] flex items-center" aria-label="Call Calvin at (954) 383-1203">(954) 383-1203</a>
              </li>
              <li className="text-gray-400">
                <span className="block text-white font-bold mb-2 uppercase text-xs tracking-widest">Email:</span>
                <a href="mailto:blueoasis.psr@gmail.com" className="hover:text-sky-blue transition-colors font-medium min-h-[48px] flex items-center" aria-label="Email us at blueoasis.psr@gmail.com">blueoasis.psr@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Blue Oasis Pool & Spa Repair Inc. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-500 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors py-2">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors py-2">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
