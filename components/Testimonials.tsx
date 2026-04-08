import { Star, Quote, CheckCircle } from 'lucide-react';

const reviews = [
  {
    name: "Rick Cordary",
    text: "We hired Calvin, owner of Blue Oasis Pool & Spa Repair Inc, to completely renovate our pool. He was prompt in assessing the project and provided a very fair estimate. The work began and finished right on schedule, and the results are outstanding. I highly recommend Calvin and his team.",
    highlight: "Results are outstanding. Highly recommend Calvin."
  },
  {
    name: "Wendy Aaronson",
    text: "Upgraded my old pool lights to a new LED system and Blue Oasis got the job done quickly. The price was better than my pool company wanted and they know how to do the job right. I will have them replace my pool heater next.",
    highlight: "Price was better and they do the job right."
  },
  {
    name: "Suzette Bedley",
    text: "This is a top notch, no nonsense, straightforward pool company. Excellent communication, customer service and quality work. Very knowledgeable. Cant say enough about them.",
    highlight: "Top notch, no nonsense, and very knowledgeable."
  }
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-deep-navy relative overflow-hidden">
      {/* Subtle Background Water Graphic */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-sky-blue blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-warm-orange blur-[150px] opacity-20" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sky-blue font-bold tracking-[0.3em] uppercase text-xs mb-4">Real Reputation</h2>
          <h3 className="font-heading text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight text-balance">
            5.0 Stars For The <span className="text-warm-orange italic">Pool Whisperer</span>
          </h3>
          <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
            <span className="flex gap-1 text-warm-orange" role="img" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" aria-hidden="true" />
              ))}
            </span>
            <span className="text-white font-bold tracking-wide">15+ Years of Local Trust</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="group bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem] flex flex-col relative hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-2 shadow-premium hover:shadow-premium-hover"
            >
              <Quote className="absolute top-8 right-10 text-white/5 group-hover:text-sky-blue/20 transition-all duration-500" size={56} aria-hidden="true" />
              
              <span className="flex gap-1 text-warm-orange mb-6" role="img" aria-label="5 star review">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" aria-hidden="true" />
                ))}
              </span>

              <div className="mb-6">
                <p className="text-sky-blue font-black text-xs uppercase tracking-[0.15em] mb-3">The Result:</p>
                <p className="text-white text-xl font-bold leading-snug text-balance">
                  &quot;{review.highlight}&quot;
                </p>
              </div>

              <p className="text-gray-400 text-md leading-relaxed mb-8 flex-grow">
                {review.text}
              </p>

              <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sky-blue/20 rounded-full flex items-center justify-center text-sky-blue font-black text-sm border border-sky-blue/20">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-bold flex items-center gap-2 text-sm">
                      {review.name}
                      <CheckCircle size={14} className="text-palm-green" aria-hidden="true" />
                    </p>
                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-0.5">Verified Customer</p>
                  </div>
                </div>
                <div className="text-[9px] font-black text-warm-orange uppercase border border-warm-orange/30 px-2 py-1 rounded-md tracking-tighter">
                  Google Review
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}