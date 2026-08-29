import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScaleSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=200%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        imageRef.current,
        { width: '40vw', height: '40vh', borderRadius: '24px' },
        {
          width: '100vw',
          height: '100vh',
          borderRadius: '0px',
          ease: 'power2.inOut',
        }
      )
        .to(
          labelRef.current,
          { opacity: 0, y: -40, duration: 0.3 },
          0
        )
        .to(
          textRef.current,
          { opacity: 1, y: 0, duration: 0.5 },
          0.5
        )
        .to(
          '.scale-overlay',
          { opacity: 0.4, duration: 0.5 },
          0.5
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative h-screen w-full overflow-hidden bg-[#0a0a0a] flex items-center justify-center"
    >
      {/* Label above image */}
      <div
        ref={labelRef}
        className="absolute top-16 left-1/2 -translate-x-1/2 z-20 text-center"
      >
        <div className="text-xs font-body uppercase tracking-[0.3em] text-white/40 mb-2">
          Featured Project
        </div>
        <div className="font-display text-xl text-white/70">DESIGN & DEVELOP — BEYOND</div>
      </div>

      {/* The scaling container */}
      <div
        ref={containerRef}
        className="relative scale-section flex items-center justify-center"
      >
        <div
          ref={imageRef}
          className="relative overflow-hidden"
          style={{
            width: '40vw',
            height: '40vh',
            backgroundImage:
              'url(/cover.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: '0 40px 80px -20px rgba(0,0,0,0.8)',
          }}
        >
          {/* Dark overlay that fades in as it scales */}
          <div className="scale-overlay absolute inset-0 bg-black opacity-0" />

          {/* Text that appears when fullscreen */}
          <div
            ref={textRef}
            className="absolute inset-0 flex flex-col items-center justify-center opacity-0"
          >
            
            <h2 className="font-display text-5xl md:text-7xl font-bold text-center px-6 leading-tight">
              Where light meets
              <br />
              <span className="">architecture</span>
            </h2>
            <p className="mt-6 text-white/60 font-body text-base md:text-lg max-w-xl text-center px-6">
              Fusing modern UI/UX design with rock-solid full-stack code to bring your digital vision to life.
            </p>
          </div>
        </div>
      </div>

      {/* Hint text at bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-20 pointer-events-none">
        <span className="text-[10px] font-body uppercase tracking-[0.3em] text-white/30">
          Keep scrolling to expand
        </span>
      </div>
    </section>
  );
}
