import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.from('.hero-line', {
        yPercent: 100,
        opacity: 0,
        duration: 1.4,
        stagger: 0.15,
        delay: 0.4,
      })
        .from(subRef.current, { y: 30, opacity: 0, duration: 1 }, '-=0.6')
        .from(tagRef.current, { y: 20, opacity: 0, duration: 0.8 }, '-=0.6')
        .from('.hero-meta', { y: 20, opacity: 0, duration: 0.8, stagger: 0.1 }, '-=0.6');

      gsap.to(bgRef.current, {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(titleRef.current, {
        yPercent: -30,
        opacity: 0.3,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative h-screen w-full overflow-hidden flex flex-col justify-center px-6 md:px-12"
    >
      {/* Parallax background */}
      <div
        ref={bgRef}
        className="absolute inset-0 grid-bg"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(200,255,0,0.04) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 20%, rgba(100,120,255,0.03) 0%, transparent 50%)',
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#c8ff00]/5 blur-[100px]" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div ref={tagRef} className="flex items-center gap-3 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#c8ff00] animate-pulse" />
          <span className="text-xs font-body uppercase tracking-[0.3em] text-white/50">
            Available for select projects — 2026
          </span>
        </div>

        <h1
          ref={titleRef}
          className="font-display font-bold tracking-tighter leading-[0.9]"
        >
          <span className="block overflow-hidden">
            <span className="hero-line block text-[14vw] md:text-[10vw] lg:text-[8.5vw]">
              Building
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line block text-[14vw] md:text-[10vw] lg:text-[8.5vw] text-white/40">
              intelligent,
            </span>
          </span>
          
          <span className="block overflow-hidden">
            <span className="hero-line block text-[14vw] md:text-[10vw] lg:text-[8.5vw]">
              solutions 
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line block text-[14vw] md:text-[10vw] lg:text-[8.5vw]">
             one model <span className="text-white/40">
             at a time
            </span>
            <span className="text-[#c8ff00]">.</span>
            </span>
          </span>
        </h1>

        <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <p
            ref={subRef}
            className="text-lg md:text-xl font-body text-white/60 max-w-md leading-relaxed"
          >
            Software Developer specializing in clean architecture, reliable APIs, and seamless web experiences.
          </p>
          <div className="flex gap-12">
            <div className="hero-meta">
              <div className="text-3xl font-display font-semibold">5+</div>
              <div className="text-xs font-body uppercase tracking-wider text-white/40 mt-1">
                Years
              </div>
            </div>
            <div className="hero-meta">
              <div className="text-3xl font-display font-semibold">40+</div>
              <div className="text-xs font-body uppercase tracking-wider text-white/40 mt-1">
                Projects
              </div>
            </div>
            <div className="hero-meta">
              <div className="text-3xl font-display font-semibold">4</div>
              <div className="text-xs font-body uppercase tracking-wider text-white/40 mt-1">
                PARTNERS
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] font-body uppercase tracking-[0.3em] text-white/30">
          
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
