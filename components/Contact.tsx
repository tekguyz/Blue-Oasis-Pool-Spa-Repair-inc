'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Facebook, Instagram, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [mapInteractive, setMapInteractive] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append('form-name', 'contact');

    try {
      const response = await fetch('/forms.html', {
        method: 'POST',
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        body: formData,
      });

      if (response.ok) {
        setIsSuccess(true);
        e.currentTarget.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-pure-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 h-96 w-96 rounded-full bg-sky-blue/5 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Form Column */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100 relative">
            <div className="mb-8">
              <h3 className="font-heading text-3xl font-bold text-deep-navy mb-2">Request Service</h3>
              <p className="text-gray-500 italic">Get the &quot;Pool Whisperer&quot; on the job.</p>
            </div>
            
            {isSuccess && (
              <div className="absolute inset-0 bg-white rounded-3xl flex flex-col items-center justify-center p-8 text-center z-20 animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 bg-palm-green/10 text-palm-green rounded-full flex items-center justify-center mb-6">
                  <Send size={40} />
                </div>
                <h5 className="font-heading text-2xl font-bold text-deep-navy mb-2">Message Sent!</h5>
                <p className="text-gray-600">Thanks for reaching out. Calvin will contact you shortly.</p>
              </div>
            )}

            <form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              name="contact"
              method="POST"
              action="/forms.html"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div style={{ display: 'none' }}>
                <label htmlFor="bot-field">Don&apos;t fill this out: </label>
                <input id="bot-field" name="bot-field" />
              </div>
              
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-deep-navy mb-2 uppercase tracking-wide">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-100 focus:border-sky-blue focus:ring-4 focus:ring-sky-blue/5 outline-none transition-all min-h-[56px]" 
                  placeholder="Your Name" 
                  autoComplete="name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-deep-navy mb-2 uppercase tracking-wide">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    className="w-full px-4 py-4 rounded-xl border-2 border-gray-100 focus:border-sky-blue focus:ring-4 focus:ring-sky-blue/5 outline-none transition-all min-h-[56px]" 
                    placeholder="(954) 383-1203" 
                    autoComplete="tel"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-deep-navy mb-2 uppercase tracking-wide">Service</label>
                  <select 
                    id="service" 
                    name="service" 
                    className="w-full px-4 py-4 rounded-xl border-2 border-gray-100 focus:border-sky-blue focus:ring-4 focus:ring-sky-blue/5 outline-none transition-all bg-white min-h-[56px]"
                    aria-label="Select the service you need"
                  >
                    <option>Equipment Repair</option>
                    <option>Leak Detection</option>
                    <option>Automation System</option>
                    <option>Energy-Efficient Pumps</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-bold text-deep-navy mb-2 uppercase tracking-wide">Address</label>
                <input 
                  type="text" 
                  id="address" 
                  name="address" 
                  required 
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-100 focus:border-sky-blue focus:ring-4 focus:ring-sky-blue/5 outline-none transition-all min-h-[56px]" 
                  placeholder="City, Zip Code" 
                  autoComplete="street-address"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-warm-orange hover:bg-deep-navy text-white font-black py-5 rounded-xl transition-all flex items-center justify-center gap-3 disabled:opacity-70 shadow-premium hover:shadow-premium-hover active:scale-95 uppercase tracking-wider min-h-[60px]"
                aria-label={isSubmitting ? "Sending your request..." : "Request My Estimate"}
              >
                {isSubmitting ? 'Sending...' : 'Request My Estimate'}
                {!isSubmitting && <Send size={20} aria-hidden="true" />}
              </button>
            </form>
          </div>

          {/* Map Column */}
          <div className="lg:sticky lg:top-32 space-y-8">
            <div>
              <h2 className="text-sky-blue font-bold tracking-[0.2em] uppercase text-sm mb-3">Expert Diagnostics</h2>
              <h3 className="font-heading text-4xl lg:text-5xl font-extrabold text-deep-navy mb-4 leading-tight">
                Serving Broward County
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Expert pool and spa repair services across Tamarac, Fort Lauderdale, and surrounding communities.
              </p>
            </div>
            
            {/* The PROVIDED Map Container */}
            <div className="group relative">
              <div className="flex items-center justify-between px-1 mb-3">
                <span className="text-xs font-bold text-deep-navy uppercase tracking-widest flex items-center gap-2">
                  <MapPin size={14} className="text-sky-blue" /> Tamarac & Fort Lauderdale
                </span>
                <a 
                  href="https://maps.google.com/?cid=8506501591724267999&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[10px] font-black text-sky-blue uppercase flex items-center gap-1 hover:underline"
                >
                  Open in Maps <ExternalLink size={10} />
                </a>
              </div>
              
              <div 
                className="w-full h-[300px] lg:h-[350px] rounded-2xl overflow-hidden border-4 border-white shadow-2xl relative cursor-pointer"
                onClick={() => setMapInteractive(true)}
                onMouseLeave={() => setMapInteractive(false)}
              >
                {/* YOUR EXACT IFRAME CODE INTEGRATED BELOW */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114480.08271985978!2d-80.18145800269512!3d26.277802510316775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9057d5f394b6b%3A0x760d2a20d80519df!2sBlue%20Oasis%20Pool%20%26%20Spa%20Repair%20inc!5e0!3m2!1sen!2sus!4v1775665908665!5m2!1sen!2sus" 
                  className={`w-full h-full transition-opacity duration-300 ${mapInteractive ? 'opacity-100' : 'opacity-80'}`}
                  style={{ border: 0 }} 
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Blue Oasis Pool & Spa Repair Inc Location"
                ></iframe>
                
                {!mapInteractive && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-white/95 backdrop-blur-md px-6 py-2 rounded-full shadow-lg text-xs font-bold text-deep-navy border border-sky-blue/10">
                      Tap to interact
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Socials & Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-sky-blue/10 p-2 rounded-lg text-sky-blue"><Phone size={20} /></div>
                <div>
                  <p className="font-black text-deep-navy uppercase text-[10px] tracking-widest">Call Calvin</p>
                  <a href="tel:9543831203" className="text-md font-bold text-gray-700 hover:text-warm-orange transition-colors">(954) 383-1203</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex gap-3">
                  <a href="https://www.facebook.com/blueoasispoolandspa/" target="_blank" rel="noopener noreferrer" className="bg-sky-blue/10 p-2 rounded-lg text-sky-blue hover:bg-sky-blue hover:text-white transition-all"><Facebook size={20} /></a>
                  <a href="https://www.instagram.com/blueoasis.psr/" target="_blank" rel="noopener noreferrer" className="bg-sky-blue/10 p-2 rounded-lg text-sky-blue hover:bg-sky-blue hover:text-white transition-all"><Instagram size={20} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}