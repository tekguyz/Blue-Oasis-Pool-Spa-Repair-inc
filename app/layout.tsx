import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css'; 

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  // This tells Next.js the primary URL for the site
  metadataBase: new URL('https://blueoasispool.netlify.app/'),
  
  title: 'Blue Oasis Pool & Spa Repair Inc | Tamarac & Fort Lauderdale Experts',
  description: "15+ years of 5-star pool and spa repair in Broward County. Led by Calvin, the 'Pool Whisperer,' we specialize in leak detection, automation, and energy-efficient pump upgrades.",
  
  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'Blue Oasis Pool & Spa Repair Inc | Tamarac & Fort Lauderdale Experts',
    description: "Professional pool and spa repair in Broward County. Real 5-star service from the 'Pool Whisperer.'",
    url: 'https://blueoasispool.netlify.app/',
    siteName: 'Blue Oasis Pool & Spa Repair Inc',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1920&auto=format&fit=crop',
        width: 1920,
        height: 1080,
        alt: 'Blue Oasis Pool & Spa Repair Inc Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Blue Oasis Pool & Spa Repair Inc',
    description: '5-Star Pool & Spa Repair in Tamarac and Fort Lauderdale.',
    images: ['https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1920&auto=format&fit=crop'],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1530631673369-bc20fdb32288%3Fq%3D80%26w%3D1920%26auto%3Dformat%26fit%3Dcrop&w=1920&q=75"
          imagesrcset="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1530631673369-bc20fdb32288%3Fq%3D80%26w%3D1920%26auto%3Dformat%26fit%3Dcrop&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1530631673369-bc20fdb32288%3Fq%3D80%26w%3D1920%26auto%3Dformat%26fit%3Dcrop&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1530631673369-bc20fdb32288%3Fq%3D80%26w%3D1920%26auto%3Dformat%26fit%3Dcrop&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1530631673369-bc20fdb32288%3Fq%3D80%26w%3D1920%26auto%3Dformat%26fit%3Dcrop&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1530631673369-bc20fdb32288%3Fq%3D80%26w%3D1920%26auto%3Dformat%26fit%3Dcrop&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1530631673369-bc20fdb32288%3Fq%3D80%26w%3D1920%26auto%3Dformat%26fit%3Dcrop&w=1920&q=75 1920w"
          imagesizes="100vw"
        />
      </head>
      <body className="font-sans bg-pure-white text-deep-navy antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}