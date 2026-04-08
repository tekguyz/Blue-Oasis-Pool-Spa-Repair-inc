import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    location: 'Fort Lauderdale, FL',
    text: 'Three other companies couldn&apos;t find the leak. Calvin came out, found it in 20 minutes, and had it patched. He truly is the pool whisperer.',
  },
  {
    name: 'Michael Rodriguez',
    location: 'Hollywood, FL',
    text: 'Upgraded our entire system to Pentair automation. Calvin&apos;s attention to detail is unmatched. Everything is perfectly labeled and the app works flawlessly.',
  },
  {
    name: 'David & Lisa Chen',
    location: 'Boca Raton, FL',
    text: 'Calvin diagnosed a pump issue that two other techs missed. He saved us thousands by repairing instead of replacing. Honest, fast, and incredibly skilled.',
  }
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-deep-navy text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-blue/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-warm-orange/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sky-blue font-semibold tracking-wide uppercase text-sm mb-3">5.0 Star Reputation</h2>
          <h3 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-white">Why They Call Him The Whisperer</h3>
          <p className="text-gray-400 text-lg">
            Real stories from homeowners who stopped stressing and started enjoying their pools again.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl relative flex flex-col h-full hover:bg-white/[0.15] transition-colors duration-300"
            >
              <Quote className="absolute top-6 right-6 text-white/10" size={48} />
              
              <div className="flex text-warm-orange mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={20} fill="currentColor" className="fill-warm-orange" />
                ))}
              </div>

              <p className="text-white text-lg leading-relaxed mb-8 relative z-10 flex-grow italic">
                &quot;{testimonial.text}&quot;
              </p>

              <div className="mt-auto pt-6 border-t border-white/10">
                <p className="font-heading font-bold text-lg text-white">{testimonial.name}</p>
                <p className="text-sky-blue text-sm font-medium">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
