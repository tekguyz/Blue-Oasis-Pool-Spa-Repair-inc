'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-pure-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Form Column */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100 relative">
            <h3 className="font-heading text-3xl font-bold text-deep-navy mb-6">Request Service</h3>
            
            {isSuccess ? (
              <div className="absolute inset-0 bg-white rounded-3xl flex flex-col items-center justify-center p-8 text-center z-10">
                <div className="w-20 h-20 bg-palm-green/10 text-palm-green rounded-full flex items-center justify-center mb-6">
                  <Send size={40} />
                </div>
                <h5 className="font-heading text-2xl font-bold text-deep-navy mb-2">Message Sent!</h5>
                <p className="text-gray-600">Thanks for reaching out. Calvin or a team member will contact you shortly.</p>
              </div>
            ) : null}

            <form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              name="contact"
              method="POST"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-sky-blue focus:border-transparent outline-none transition-all" placeholder="John Doe" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-sky-blue focus:border-transparent outline-none transition-all" placeholder="(954) 383-1203" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                  <select id="service" name="service" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-sky-blue focus:border-transparent outline-none transition-all bg-white">
                    <option>Equipment Repair</option>
                    <option>Leak Detection</option>
                    <option>Heater Service</option>
                    <option>Automation System</option>
                    <option>Salt System Install</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Service Address</label>
                <input type="text" id="address" name="address" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-sky-blue focus:border-transparent outline-none transition-all" placeholder="123 Main St, Tamarac, FL" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Describe the Issue</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-sky-blue focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us what's going on with your pool..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-warm-orange hover:bg-warm-orange/90 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? 'Sending...' : 'Request Service'}
              </button>
            </form>
          </div>

          {/* Map Column */}
          <div className="lg:sticky lg:top-32">
            <h2 className="text-sky-blue font-semibold tracking-wide uppercase text-sm mb-3">Our Service Area</h2>
            <h3 className="font-heading text-4xl font-bold text-deep-navy mb-6">Serving Broward County</h3>
            <p className="text-gray-600 text-lg mb-8">
              We provide expert pool and spa repair services across Tamarac, Fort Lauderdale, and the surrounding Broward County communities.
            </p>
            
            <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg border-0">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114543.51878415758!2d-80.2858105!3d26.21345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d90613f7b9f36d%3A0x6d9f8e0e0e0e0e0e!2sTamarac%2C%20FL!5e0!3m2!1sen!2sus!4v1712589000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="text-sky-blue mt-1"><Phone size={20} /></div>
                <div>
                  <p className="font-bold text-deep-navy">Call Calvin</p>
                  <a href="tel:9543831203" className="text-gray-600 hover:text-warm-orange transition-colors">(954) 383-1203</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-sky-blue mt-1"><Mail size={20} /></div>
                <div>
                  <p className="font-bold text-deep-navy">Email Us</p>
                  <a href="mailto:blueoasis.psr@gmail.com" className="text-gray-600 hover:text-warm-orange transition-colors">blueoasis.psr@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
