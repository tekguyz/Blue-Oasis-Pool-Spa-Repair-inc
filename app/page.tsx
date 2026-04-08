import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import TheWhisperer from '@/components/TheWhisperer';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <TheWhisperer />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
