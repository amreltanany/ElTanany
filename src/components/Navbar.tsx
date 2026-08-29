import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.3, ease: 'power3.out' }
      );

      gsap.to(bgRef.current, {
        opacity: 1,
        scrollTrigger: {
          start: 'top -50',
          end: 'top -100',
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 bg-black/40 backdrop-blur-xl border-b border-white/5 opacity-0"
      />
      <div className="relative flex items-center justify-between">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          Amr<span className="text-[#c8ff00]">.</span>
        </a>
        <div className="hidden md:flex items-center gap-10 text-sm font-body text-white/70">
          <a href="#work" className="nav-link">Work</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        <a
          href="#contact"
          className="text-sm font-body px-5 py-2.5 border border-white/15 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
        >
          Let's talk
        </a>
      </div>
    </nav>
  );
}
