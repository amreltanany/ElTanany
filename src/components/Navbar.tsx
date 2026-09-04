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
          <a href="https://l.instagram.com/?u=https%3A%2F%2Flinktr.ee%2FAmr_ElTanany%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAadijl42YlwyWtuFUmV-0feKI_EM9feLsSQYfsJA6CT3VWPG1IcbSUjHitEmeQ_aem_MZNxS1ONivN3v3KIkJMFVw&e=AUCj6I9zfJLFzd-sUkKZqvV3eGdJos4f061WekHutDR8thvm5KV2oE1VPzGwIazV686KUbF_k7msgv8UC32vuoA5GGMCVHEruGiN_3gDmwtOn_wX3ondNbTkTvVerluJ1HkDAD8" target='blank'className="nav-link">Quick Access</a>
        </div>
        <a
          href="#contact"
          className="text-sm font-body px-5 py-2.5 border border-white/15 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
