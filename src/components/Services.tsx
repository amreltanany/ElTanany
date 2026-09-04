import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: '01',
    title: 'Qaro2a',
    desc: 'Architecting complex digital ecosystems like Qaro2a, designed for author publishing, e-commerce, and proadcasting. I combine top-tier engineering with sleek UI design to deliver fast, conversion-driven platforms that leave an impact.',
    tags: ['ASP.NET Core', 'SQL Server', 'Onion Architecture', 'JWT Auth'],
  },
  {
    num: '02',
    title: 'Display Egypt',
    desc: 'Engineered DisplayEgypt—a dynamic WordPress platform built for an outdoor advertising leader, highlighting street-level campaigns, digital billboards, and high-impact urban displays.',
    tags: ['WordPress', 'PHP & MySQL', 'SEO & Speed Optimization', 'Responsive Design'],
  },
  {
    num: '03',
    title: 'SAM Constructions',
    desc: 'Built SAM Constructions to translate massive physical engineering achievements—from urban infrastructure to luxury interiors—into a fast, responsive, and visually imposing digital platform.',
    tags: ['WordPress', 'PHP & MySQL', 'SEO & Speed Optimization', 'Responsive Design'],
  },
  {
    num: '04',
    title: 'PERSONAL PORTFOLIO',
    desc: 'Architected a Portfolio to serve as a high-speed central hub for cutting-edge web projects, combining slick motion design, interactive features, and bulletproof code execution.',
    tags: ['TypeScript', 'React + Vite', 'Tailwind CSS'],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-card', {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        },
      });

      gsap.to(gridRef.current, {
        y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.from('.services-heading', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative py-32 md:py-48 px-6 md:px-12 bg-[#0a0a0a] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="services-heading flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#c8ff00]" />
              <span className="text-xs font-body uppercase tracking-[0.3em] text-white/40">
                Last Work
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight">
              What I Can Do<span className="text-[#c8ff00]">.</span>
            </h2>
          </div>
          <p className="text-white/50 font-body max-w-sm leading-relaxed">
            Engineering killer web platforms with bulletproof code, insane speed, and aesthetics that demand attention.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {services.map((s) => (
            <a
              key={s.num}
              href={
                s.num === '01' ? 'https://qaro2a.com/' :
                s.num === '02' ? 'https://displayegypt.com/' :
                s.num === '03' ? 'https://samconstructions-eg.com/' :
                s.num === '04' ? 'https://amreltanany.github.io/new_port/' :
                '#'
              }
              target={
                s.num === '01' || s.num === '02' || s.num === '03' || s.num === '04' ? '_blank' : '_self'
              }
              rel={
                s.num === '01' || s.num === '02' || s.num === '03' || s.num === '04' ? 'noopener noreferrer' : ''
              }
              className="service-card group relative bg-[#0a0a0a] p-8 md:p-12 hover:bg-[#111] transition-colors duration-500 cursor-pointer block"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-display text-sm text-white/30">{s.num}</span>
                <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#c8ff00] group-hover:border-[#c8ff00] transition-colors duration-500">
                  <svg
                    className="w-4 h-4 group-hover:text-black transition-colors duration-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M17 7H8M17 7v9" />
                  </svg>
                </span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
                {s.title}
              </h3>
              <p className="text-white/50 font-body leading-relaxed mb-6 max-w-md">
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-body px-3 py-1.5 rounded-full bg-white/5 text-white/60 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
