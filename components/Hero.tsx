import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-deep-navy text-white overflow-hidden">
      {/* Background Pattern/Image Overlay */}
      <div className="absolute inset-0 opacity-40 mix-blend-multiply">
        <Image
          src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1920&auto=format&fit=crop"
          alt="Sparkling pool water at twilight"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy via-deep-navy/80 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-blue/10 border border-sky-blue/20 text-sky-blue text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-blue"></span>
              </span>
              Broward County&apos;s #1 Pool Experts
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight text-white">
              Don&apos;t Just Fix Your Pool. <br />
              <span className="text-white">Master It.</span>
            </h1>
            <p className="text-lg text-sky-blue mb-8 max-w-xl leading-relaxed font-medium">
              Led by Calvin, South Florida&apos;s 5.0-Star &quot;Pool Whisperer.&quot; 15+ years of state-licensed expertise in diagnostics, automation, and premium repairs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="bg-warm-orange hover:bg-warm-orange/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Schedule Calvin Today
                <ArrowRight size={20} />
              </Link>
              <Link href="#services" className="bg-transparent border-2 border-sky-blue hover:bg-sky-blue/10 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center backdrop-blur-sm">
                View Our Services
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm font-medium text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-palm-green" size={20} />
                Licensed & Insured
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-palm-green" size={20} />
                Same-Day Diagnostics
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="https://picsum.photos/seed/luxury-pool/800/1200"
              alt="Beautiful luxury pool"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
