import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PARAGRAPH = [
  'Website For Rent: Full platform access, hosting, and domain included—pay only after approving the final design.',
  'High Performance Architecture: Built with ultra-fast loading speeds, optimal SEO, and clean scalable code.',
  '2 weeks of dedicated post-launch support and performance fine-tuning included.',
  'End-to-End Security: Automated backups, SSL protection, and robust defense.'
];
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

  const items = PARAGRAPH;

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

        <div ref={textRef} className="font-body text-[1.45rem] leading-[1.3] tracking-tight">
          <ul className="list-disc list-inside space-y-6">
            {items.map((item, i) => (
              <li key={i} className="reveal-word whitespace-nowrap">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
