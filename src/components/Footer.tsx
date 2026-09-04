import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const bigTextRef = useRef<HTMLHeadingElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-big-text', {
        yPercent: 50,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'center center',
          scrub: 1,
        },
      });

      gsap.to('.footer-big-text', {
        letterSpacing: '-0.06em',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom bottom',
          scrub: 1,
        },
      });

      gsap.from('.footer-info', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen bg-[#0a0a0a] px-6 md:px-12 pt-32 pb-12 flex flex-col justify-between overflow-hidden"
    >
      <div ref={topRef} className="max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-px bg-[#c8ff00]" />
          <span className="text-xs font-body uppercase tracking-[0.3em] text-white/40">
            Get in touch
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="footer-info">
            <h3 className="text-xs font-body uppercase tracking-wider text-white/40 mb-3">
              Email
            </h3>
            <a
              href="mailto:amr_eltanany@outlook.com"
              className="font-display text-2xl md:text-3xl hover:text-[#c8ff00] transition-colors"
            >
              amr_eltanany
            </a>
          </div>
          <div className="footer-info">
            <h3 className="text-xs font-body uppercase tracking-wider text-white/40 mb-3">
              Social
            </h3>
            <div className="flex flex-col gap-2">
              {[
                { name: 'Whatsapp', url: 'https://wa.me/201119708154' },
                { name: 'Instagram', url: 'https://www.instagram.com/amr_eltanany_/' },
                { name: 'Facebook', url: 'https://www.facebook.com/share/1FDPAwWQnF/' },
                { name: 'GitHub', url: 'https://github.com/amreltanany' }
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-lg text-white/70 hover:text-white transition-colors w-fit"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-info">
            <h3 className="text-xs font-body uppercase tracking-wider text-white/40 mb-3">
            </h3>
            <p className="font-body text-white/40 mt-2">Working worldwide</p>
          </div>
        </div>
      </div>

      {/* Massive text */}
      <div className="w-full overflow-hidden">
        <h2
          ref={bigTextRef}
          className="footer-big-text font-display font-bold text-[18vw] leading-[0.85] tracking-tight text-center whitespace-nowrap"
        >
          LET'S BUILD
        </h2>
        <h2 className="footer-big-text font-display font-bold text-[18vw] leading-[0.85] tracking-tight text-center whitespace-nowrap text-white/20">
          SOMETHING.
        </h2>
      </div>
<hr className="border-t border-white/10" />
      
    </footer>
  );
}
