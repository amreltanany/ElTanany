import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ScaleSection from '@/components/ScaleSection';
import TextReveal from '@/components/TextReveal';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export default function App() {
  useSmoothScroll();
  const progress = useScrollProgress();

  return (
    <>
      <div className="noise-overlay noise-animated" />

      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[100] bg-white/5">
        <div
          className="h-full bg-[#c8ff00] origin-left"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <Navbar />
      <main>
        <Hero />
        <ScaleSection />
        <TextReveal />
        <Services />
        <Footer />
      </main>
    </>
  );
}
