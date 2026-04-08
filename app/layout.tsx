import type {Metadata} from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'Blue Oasis Pool & Spa Repair Inc | Tamarac & Fort Lauderdale Experts',
  description: "15+ years of 5-star pool and spa repair in Broward County. Led by Calvin, the 'Pool Whisperer,' we specialize in leak detection, automation, and energy-efficient pump upgrades.",
  openGraph: {
    title: 'Blue Oasis Pool & Spa Repair Inc | Tamarac & Fort Lauderdale Experts',
    description: "15+ years of 5-star pool and spa repair in Broward County. Led by Calvin, the 'Pool Whisperer,' we specialize in leak detection, automation, and energy-efficient pump upgrades.",
    images: [
      {
        url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1920&auto=format&fit=crop',
        width: 1920,
        height: 1080,
        alt: 'Blue Oasis Pool & Spa Repair Inc',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="font-sans bg-pure-white text-deep-navy antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
