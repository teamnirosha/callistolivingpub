import React from "react";
import { Link } from "@tanstack/react-router";
import { PROJECTS } from "@/lib/projects";

const CATEGORIES: Record<string, string> = {
  "the-black-house": "Residential Architecture",
  "modern-minimal-residence": "Interior Architecture",
  "contemporary-villa": "Private Estate",
  "luxury-apartment": "Penthouse Residence",
  "boutique-office": "Boutique Workspace",
};

export const ProjectShowcase: React.FC = () => {
  return (
    <section id="projects" className="relative bg-[#171817] pt-12 md:pt-16 pb-24 text-[#F3EFE7] min-h-screen flex flex-col justify-start">
      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
        {/* COMPACT EDITORIAL INTRO HEADER - FITS IN ONE VIEWPORT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-end pb-5 lg:pb-6 border-b border-[#F3EFE7]/15">
          {/* LEFT: Eyebrow + 2-Line Editorial Heading */}
          <div className="lg:col-span-7">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] text-[#DE1D25] block mb-2">
              SELECTED PORTFOLIO
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] leading-[0.84] tracking-tight text-[#F3EFE7]">
              <span className="block">ARCHITECTURAL</span>
              <span className="block font-normal italic text-[#C5B7A7]">WORKS</span>
            </h2>
          </div>

          {/* RIGHT: Compact Description */}
          <div className="lg:col-span-5 lg:pl-4">
            <p className="max-w-[480px] text-xs sm:text-sm md:text-base text-[#F3EFE7]/75 font-light leading-[1.5]">
              A curated collection of bespoke residential estates, luxury penthouses, and minimal architectural sanctuaries across the globe.
            </p>
          </div>
        </div>

        {/* FEATURED PROJECT LIST - FIRST IMAGE APPEARS IMMEDIATELY */}
        <div className="mt-6 md:mt-8 space-y-12 md:space-y-16">
          {PROJECTS.map((project, idx) => {
            const category = CATEGORIES[project.slug] || "Luxury Interior";
            const isFeatured = idx === 0;

            return (
              <div key={project.slug} className="group flex flex-col justify-between">
                {/* Cinematic Image Container */}
                <Link
                  to="/projects/$slug"
                  params={{ slug: project.slug }}
                  className="relative block w-full overflow-hidden bg-[#222] rounded-xs"
                >
                  <div
                    className={`relative w-full overflow-hidden ${
                      isFeatured
                        ? "aspect-[16/7.2] max-h-[440px] md:max-h-[500px]"
                        : "aspect-[16/8.5] max-h-[380px]"
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-1.04"
                      loading={idx === 0 ? "eager" : "lazy"}
                    />
                    {/* Subtle Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </Link>

                {/* Project Metadata Bar */}
                <div className="mt-4 flex flex-wrap items-baseline justify-between border-b border-[#F3EFE7]/10 pb-5 gap-3">
                  <div>
                    <div className="flex items-center gap-2.5 text-[10px] uppercase tracking-[0.2em] text-[#C5B7A7] font-medium">
                      <span>{category}</span>
                      <span>•</span>
                      <span>{project.location}</span>
                    </div>
                    <h3 className="mt-1 font-display text-2xl sm:text-3xl md:text-4xl font-normal text-[#F3EFE7] transition-colors duration-300 group-hover:text-[#C5B7A7]">
                      <Link to="/projects/$slug" params={{ slug: project.slug }}>
                        {project.title}
                      </Link>
                    </h3>
                  </div>

                  <div className="flex items-center gap-6">
                    <span className="text-xs font-mono text-[#F3EFE7]/50">
                      {project.year}
                    </span>
                    <Link
                      to="/projects/$slug"
                      params={{ slug: project.slug }}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F3EFE7] transition-all duration-300 group-hover:text-[#DE1D25] group-hover:translate-x-1"
                    >
                      <span>VIEW PROJECT</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
