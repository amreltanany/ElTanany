import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PARAGRAPH =
  'After-sale service starts with 2 weeks of full, dedicated support, I dont just deliver a high-performance web platform and walk away — I handle initial maintenance, fine-tuning, and performance monitoring to guarantee your app runs flawlessly from day one.';

export default function TextReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = textRef.current?.querySelectorAll('.reveal-word');
      if (!words) return;

      gsap.to(words, {
        color: '#ffffff',
        stagger: 0.05,
        ease: 'none',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 75%',
          end: 'bottom 40%',
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const words = PARAGRAPH.split(' ');

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 md:py-48 px-6 md:px-12 bg-[#0a0a0a]"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="w-8 h-px bg-[#c8ff00]" />
          <span className="text-xs font-body uppercase tracking-[0.3em] text-white/40">
            WHY WORK WITH ME
          </span>
        </div>

        <div ref={textRef} className="font-body text-3xl md:text-5xl lg:text-6xl leading-[1.3] tracking-tight">
          {words.map((word, i) => (
            <span key={i} className="reveal-word">
              {word}{' '}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
