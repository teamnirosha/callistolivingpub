import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import warmDaylight from "@/assets/hero-warm-daylight.jpg";
import darkCinematic from "@/assets/hero-dark-cinematic.jpg";
import beigeContemporary from "@/assets/hero-beige-contemporary.jpg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface HeroOption {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  image: string;
}

export const HERO_OPTIONS: HeroOption[] = [
  {
    id: "warm-daylight",
    number: "01",
    name: "WARM DAYLIGHT",
    subtitle: "Warm daylight luxury living residence",
    image: warmDaylight,
  },
  {
    id: "dark-cinematic",
    number: "02",
    name: "DARK CINEMATIC",
    subtitle: "Sophisticated dark architectural interior",
    image: darkCinematic,
  },
  {
    id: "beige-contemporary",
    number: "03",
    name: "CONTEMPORARY BEIGE",
    subtitle: "Minimal contemporary travertine space",
    image: beigeContemporary,
  },
];

interface HeroSectionProps {
  onEnquire?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onEnquire }) => {
  const [activeOptionIndex, setActiveOptionIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const bgContainerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);

  // Smooth automatic slideshow rotation every 6.5s
  useEffect(() => {
    const startSlideshow = () => {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = window.setInterval(() => {
        setActiveOptionIndex((prev) => (prev + 1) % HERO_OPTIONS.length);
      }, 6500);
    };

    startSlideshow();

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleSelectSlide = (idx: number) => {
    setActiveOptionIndex(idx);
    // Reset timer on user manual selection
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setActiveOptionIndex((prev) => (prev + 1) % HERO_OPTIONS.length);
    }, 6500);
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({ delay: 0.2 });

      if (bgContainerRef.current) {
        tl.fromTo(
          bgContainerRef.current,
          { scale: 1.04, opacity: 0 },
          { scale: 1.0, opacity: 1, duration: 1.4, ease: "power2.out" }
        );
      }

      tl.from(".hero-eyebrow", { y: 10, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=1.0");

      tl.from(
        ".hero-headline-line",
        {
          y: 25,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=0.5"
      );

      tl.from(".hero-description", { y: 15, opacity: 0, duration: 0.7, ease: "power3.out" }, "-=0.4");

      tl.from(
        ".hero-cta-btn",
        { y: 10, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" },
        "-=0.3"
      );

      tl.from(".hero-scroll-indicator, .hero-switcher", { opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.2");

      if (rootRef.current) {
        gsap.to(".hero-parallax-content", {
          y: -30,
          opacity: 0.2,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        if (bgContainerRef.current) {
          gsap.to(bgContainerRef.current, {
            y: 40,
            ease: "none",
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#171817] text-[#F3EFE7]"
    >
      {/* BACKGROUND IMAGE SLIDESHOW WITH DUAL-LAYERED SMOOTH CROSS-FADE */}
      <div ref={bgContainerRef} className="absolute inset-0 z-0 overflow-hidden">
        {HERO_OPTIONS.map((opt, idx) => {
          const isActive = idx === activeOptionIndex;
          return (
            <div
              key={opt.id}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-[1800ms] ease-in-out ${
                isActive
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-[1.03] z-0 pointer-events-none"
              }`}
              style={{ backgroundImage: `url(${opt.image})` }}
            />
          );
        })}
      </div>

      {/* LOCALIZED SUBTLE OVERLAY */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/45 to-transparent w-full md:w-3/5 pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/65 via-transparent to-black/40 pointer-events-none" />

      {/* MAIN CONTENT BINDING - TIGHT SPACING */}
      <div className="hero-parallax-content relative z-20 mx-auto w-full max-w-[1600px] px-6 pt-24 pb-20 md:pt-28 md:pb-24 lg:px-12">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="hero-eyebrow mb-3 inline-flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#DE1D25]" />
            <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.25em] text-[#F3EFE7]/90">
              PREMIUM INTERIOR DESIGN STUDIO
            </span>
          </div>

          {/* Headline: Compact Line Height */}
          <h1 className="font-display leading-[0.82] text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] tracking-tight text-[#F3EFE7]">
            <span className="hero-headline-line block">SPACES</span>
            <span className="hero-headline-line block">THAT</span>
            <span className="hero-headline-line block font-normal italic text-[#C5B7A7]">
              DEFINE YOU
            </span>
          </h1>

          {/* Short Description */}
          <p className="hero-description mt-5 max-w-[500px] text-xs sm:text-sm md:text-base leading-relaxed text-[#F3EFE7]/85 font-light">
            We create timeless luxury interiors where architecture, bespoke craftsmanship, and emotional elegance unite seamlessly.
          </p>

          {/* CTA Group */}
          <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#projects"
              className="hero-cta-btn group inline-flex items-center justify-center gap-2.5 bg-[#F3EFE7] px-7 py-3.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#171817] transition-all duration-300 hover:bg-white hover:shadow-md cursor-pointer"
            >
              <span>EXPLORE OUR WORK</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>

            <button
              type="button"
              onClick={onEnquire}
              className="hero-cta-btn inline-flex items-center justify-center border border-[#F3EFE7]/40 bg-white/5 backdrop-blur-xs px-7 py-3.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#F3EFE7] transition-all duration-300 hover:border-[#F3EFE7] hover:bg-white/15 cursor-pointer"
            >
              VIEW PROJECTS
            </button>
          </div>
        </div>
      </div>

      {/* LOWER SCROLL & EDITORIAL SWITCHER */}
      <div className="absolute bottom-6 left-6 right-6 z-30 flex items-end justify-between md:left-12 md:right-12 pointer-events-auto">
        <div className="hero-scroll-indicator flex items-center gap-3 text-[#F3EFE7]/70">
          <div className="h-8 w-[1px] bg-gradient-to-b from-[#F3EFE7] to-transparent animate-pulse" />
          <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#F3EFE7]/80">
            SCROLL TO EXPLORE
          </span>
        </div>

        <div className="hero-switcher flex items-center gap-1.5 rounded-xs border border-white/15 bg-black/40 p-1 backdrop-blur-md">
          {HERO_OPTIONS.map((opt, idx) => {
            const isActive = idx === activeOptionIndex;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleSelectSlide(idx)}
                className={`flex items-center gap-1.5 px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] transition-all duration-500 cursor-pointer ${
                  isActive
                    ? "bg-[#F3EFE7] text-[#171817] font-semibold"
                    : "text-[#F3EFE7]/70 hover:text-white hover:bg-white/10"
                }`}
                title={opt.subtitle}
              >
                <span className={isActive ? "text-[#DE1D25]" : "opacity-60"}>
                  {opt.number}
                </span>
                <span className="hidden sm:inline">{opt.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
