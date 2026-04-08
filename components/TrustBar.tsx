import { Star } from 'lucide-react';
import Image from 'next/image';

export default function TrustBar() {
  const reviewPlatforms = ['Google 5-Stars', 'HomeAdvisor', 'Angi', 'Yelp'];
  const brands = ['PENTAIR', 'HAYWARD', 'JANDY', 'ZODIAC', 'AQUACAL', 'AUTOPILOT'];

  return (
    <section className="bg-white border-b border-gray-100 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Review Platforms */}
          <div className="flex items-center gap-6 flex-wrap justify-center lg:justify-start">
            <div className="flex text-warm-orange">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <div className="flex items-center gap-4 border-l border-gray-200 pl-6 flex-wrap justify-center">
              {reviewPlatforms.map((platform) => (
                <span key={platform} className="font-heading font-bold text-deep-navy/80 text-lg">
                  {platform}
                </span>
              ))}
            </div>
          </div>

          {/* Authorized Brands (Scrolling/Flex Wrap) */}
          <div className="flex items-center gap-8 opacity-60 grayscale flex-wrap justify-center lg:justify-end">
            <span className="text-sm font-medium uppercase tracking-wider text-deep-navy/60 hidden xl:block mr-2">Authorized Brands:</span>
            {brands.map((brand) => (
              <span key={brand} className="font-heading font-bold text-xl tracking-tight">
                {brand}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
