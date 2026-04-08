import Image from 'next/image';
import { CheckCircle2, Quote } from 'lucide-react';

export default function TheWhisperer() {
  return (
    <section id="about" className="py-24 bg-pure-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800&auto=format&fit=crop"
                alt="Calvin, The Pool Whisperer at work"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 bg-deep-navy text-white p-6 rounded-2xl shadow-xl border border-white/10 max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-warm-orange rounded-full flex items-center justify-center text-white font-bold text-xl">
                  15+
                </div>
                <div className="font-heading font-bold text-white text-lg leading-tight">Years of<br/>Experience</div>
              </div>
              <p className="text-xs text-sky-blue font-bold uppercase tracking-wider">State Licensed & Insured</p>
            </div>
          </div>

          <div className="relative">
            {/* Watermark Accent */}
            <Quote className="absolute -top-10 -left-10 text-warm-orange/5 w-64 h-64 -z-10 rotate-12" />
            
            <h2 className="text-sky-blue font-semibold tracking-wide uppercase text-sm mb-3">The Expert Touch</h2>
            <h3 className="font-heading text-4xl md:text-5xl font-bold text-deep-navy mb-6">
              Meet Calvin: <br/>
              <span className="text-warm-orange italic">The Pool Whisperer</span>
            </h3>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-8">
              <p>
                Calvin doesn&apos;t just fix pools; he understands them. With over 15 years of state-licensed expertise, he has earned a reputation across South Florida as the technician who solves the &quot;unsolvable.&quot;
              </p>
              <p>
                While other companies might suggest expensive, unnecessary replacements, Calvin specializes in precision diagnostics. He has a unique ability to pinpoint complex underground leaks and resolve intricate automation failures that leave others scratching their heads.
              </p>
            </div>

            <ul className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                'State Licensed Master Tech',
                'Advanced Leak Detection',
                'Automation Specialist',
                'Diagnostic Expert',
                '15+ Years Experience',
                'Owner-Operated Quality'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-deep-navy font-medium">
                  <CheckCircle2 className="text-palm-green flex-shrink-0" size={20} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-sm">
                <Image
                  src="https://picsum.photos/seed/calvin-face/100/100"
                  alt="Calvin Smith"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <p className="font-heading font-bold text-deep-navy text-lg leading-tight">Calvin Smith</p>
                <p className="text-sm text-gray-500 font-medium">Founder & Lead Technician</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

