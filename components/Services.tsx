'use client';

import { Wrench, Search, Smartphone, Zap, Droplet, Layers } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'Advanced Diagnostics & Repair',
    description: 'Precision troubleshooting for pumps, motors, and filters. We find the root cause where others fail.',
    icon: Wrench,
  },
  {
    title: 'Leak Detection',
    description: 'State-of-the-art acoustic and pressure testing to locate hidden leaks without unnecessary destruction.',
    icon: Search,
  },
  {
    title: 'Smart Pool Automation',
    description: 'Full control of your pool from your smartphone. Manage heating, lighting, and pumps with ease.',
    icon: Smartphone,
  },
  {
    title: 'Energy-Efficient Upgrades',
    description: 'Save on utility bills with high-efficiency Heat Pumps and Variable Speed pumps. Eco-friendly solutions.',
    icon: Zap,
  },
  {
    title: 'Salt Chlorine Generators',
    description: 'Switch to a salt system for softer water and easier maintenance. Expert installation and repair.',
    icon: Droplet,
  },
  {
    title: 'Resurfacing & Tile',
    description: 'Complete aesthetic overhauls. From modern tile work to premium diamond-brite resurfacing.',
    icon: Layers,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50/50 overflow-hidden" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sky-blue font-bold tracking-[0.2em] uppercase text-xs mb-4">Our Expertise</h2>
          <h3 id="services-heading" className="font-heading text-4xl md:text-6xl font-extrabold text-deep-navy mb-8 leading-tight text-balance">
            Comprehensive Technical Capability
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed text-balance">
            South Florida&apos;s most trusted specialists for complex repairs and modern upgrades. We solve the problems others can&apos;t.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-premium hover:shadow-premium-hover hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-sky-blue/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-sky-blue group-hover:text-white transition-all duration-500 text-sky-blue shadow-inner">
                <service.icon size={32} aria-hidden="true" />
              </div>
              <h4 className="font-heading text-2xl font-bold text-deep-navy mb-4 tracking-tight">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

