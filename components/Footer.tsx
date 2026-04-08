import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <Link href="/" className="font-heading font-bold text-2xl text-white tracking-tight mb-6 block">
              Blue Oasis Pool & Spa Repair Inc
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              South Florida&apos;s Premier Pool Whisperer.
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-bold text-sky-blue uppercase tracking-widest">State Licensed & Fully Insured</p>
              <p className="text-xs text-gray-500">CPC1459644</p>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Service Areas</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Tamarac, FL</li>
              <li>Fort Lauderdale, FL</li>
              <li>Coral Springs, FL</li>
              <li>Sunrise, FL</li>
              <li>Plantation, FL</li>
              <li>All of Broward County</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Business Hours</h4>
            <ul className="space-y-4 text-gray-400">
              <li><span className="text-white font-medium">Mon–Fri:</span> 8:00 AM – 6:00 PM</li>
              <li><span className="text-white font-medium">Sat:</span> 8:00 AM – 3:00 PM</li>
              <li><span className="text-white font-medium">Sun:</span> Closed</li>
              <li className="pt-2 text-sky-blue font-bold">24/7 Emergency Service</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li className="text-gray-400">
                <span className="block text-white font-medium mb-1">Call Calvin:</span>
                <a href="tel:9543831203" className="text-2xl font-bold text-white hover:text-warm-orange transition-colors">(954) 383-1203</a>
              </li>
              <li className="text-gray-400">
                <span className="block text-white font-medium mb-1">Email:</span>
                <a href="mailto:blueoasis.psr@gmail.com" className="hover:text-sky-blue transition-colors">blueoasis.psr@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Blue Oasis Pool & Spa Repair Inc. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
