import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Star, ShieldCheck, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-[#141E33] text-white overflow-hidden border-b border-white/5">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1530631673369-bc20fdb32288?q=80&w=1920&auto=format&fit=crop"
          alt="Blue Oasis Pool Background"
          fill
          className="object-cover opacity-20 scale-105" // Subtle zoom for depth
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#141E33] via-[#141E33]/90 to-[#141E33]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-blue/10 border border-sky-blue/20 text-sky-blue text-xs font-bold mb-6 tracking-widest uppercase">
              <ShieldCheck size={14} className="animate-pulse" />
              Tamarac & Fort Lauderdale Experts
            </div>
            
            <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.95] mb-6 tracking-tighter text-white">
              THE POOL <br />
              <span className="text-sky-blue">WHISPERER.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-xl leading-relaxed font-medium">
              Calvin brings 15+ years of 5-star diagnostics to your backyard. Specialist in leak detection, automation, and energy-efficient upgrades.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                href="#contact" 
                className="bg-[#F27D26] hover:bg-[#F27D26]/90 text-white px-10 py-5 rounded-xl font-black text-lg transition-all flex items-center justify-center gap-3 shadow-[0_20px_50px_rgba(242,125,38,0.3)] hover:-translate-y-1 active:scale-95"
              >
                Schedule Calvin
                <ArrowRight size={22} strokeWidth={3} />
              </Link>
              
              <Link 
                href="#services" 
                className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all flex items-center justify-center backdrop-blur-xl"
              >
                View Services
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start items-center gap-8 opacity-70">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-tighter">
                <CheckCircle2 className="text-[#00AEEF]" size={18} />
                Licensed & Insured
              </div>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-tighter">
                <Award className="text-[#00AEEF]" size={18} />
                15+ Year Veteran
              </div>
            </div>
          </div>

          {/* Right Column: Visual Component */}
          <div className="relative hidden lg:block group">
            {/* Main Image Frame */}
            <div className="relative h-[600px] w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <Image
                src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200&auto=format&fit=crop"
                alt="Premium Pool Service Result"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141E33]/60 via-transparent to-transparent" />
            </div>

            {/* Floating Review Card - The "Social Proof" Pop */}
            <div className="absolute -bottom-6 -left-12 bg-white p-6 rounded-2xl shadow-2xl max-w-[280px] animate-float">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#F27D26" color="#F27D26" />
                ))}
              </div>
              <p className="text-[#141E33] text-sm italic font-medium leading-snug">
                &quot;Calvin is the only guy we trust with our pool. He found a leak two other companies missed in 10 minutes.&quot;
              </p>
              <p className="mt-3 text-[#141E33]/60 text-[10px] font-bold uppercase tracking-widest">— Wendy, Fort Lauderdale</p>
            </div>

            {/* 5.0 Rating Badge */}
            <div className="absolute -top-6 -right-6 bg-sky-blue p-5 rounded-full shadow-xl rotate-12 flex flex-col items-center justify-center border-4 border-[#141E33]">
               <span className="text-[#141E33] text-2xl font-black leading-none">5.0</span>
               <span className="text-[#141E33] text-[10px] font-black uppercase">Rating</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}