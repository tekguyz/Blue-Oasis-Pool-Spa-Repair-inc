import { Star } from 'lucide-react';

export default function TrustBar() {
  const reviewPlatforms = ['Google 5-Stars', 'HomeAdvisor', 'Angi', 'Yelp'];
  const brands = ['PENTAIR', 'HAYWARD', 'JANDY', 'ZODIAC', 'AQUACAL', 'AUTOPILOT'];

  return (
    <section className="bg-white border-b border-gray-100 py-10 overflow-hidden" aria-label="Trust and Authorized Brands">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Review Platforms */}
          <div className="flex items-center gap-6 flex-wrap justify-center lg:justify-start">
            <span className="flex text-warm-orange" role="img" aria-label="5 out of 5 stars">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={24} fill="currentColor" aria-hidden="true" />
              ))}
            </span>
            <div className="flex items-center gap-6 border-l border-gray-200 pl-8 flex-wrap justify-center">
              {reviewPlatforms.map((platform) => (
                <span key={platform} className="font-heading font-black text-deep-navy text-xl tracking-tight">
                  {platform}
                </span>
              ))}
            </div>
          </div>

          {/* Authorized Brands (Scrolling/Flex Wrap) */}
          <div className="flex items-center gap-10 grayscale flex-wrap justify-center lg:justify-end">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-deep-navy/70 hidden xl:block mr-2">Authorized Brands:</span>
            {brands.map((brand) => (
              <span key={brand} className="font-heading font-black text-2xl tracking-tighter text-deep-navy/80">
                {brand}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
