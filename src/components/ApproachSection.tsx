import React from "react";
import approachDiscover from "@/assets/approach-discover.jpg";
import approachDesign from "@/assets/approach-design.jpg";
import approachDetail from "@/assets/approach-detail.jpg";
import approachDeliver from "@/assets/approach-deliver.jpg";

interface ApproachStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const APPROACH_STEPS: ApproachStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    subtitle: "Vision & Spatial Design",
    description:
      "We immerse in your lifestyle, exploring materials, lighting, and spatial acoustics to define a clear interior design blueprint tailored to your aspirations.",
    image: approachDiscover,
  },
  {
    number: "02",
    title: "DESIGN",
    subtitle: "Spatial Planning & 3D Realization",
    description:
      "Sculpting balanced proportions, curated color palettes, and custom furniture layouts that harmonize structural elegance with everyday comfort.",
    image: approachDesign,
  },
  {
    number: "03",
    title: "DETAIL",
    subtitle: "Bespoke Millwork & Craftsmanship",
    description:
      "Sourcing rare natural stone, hand-finished brass, and artisan millwork. Every detail is curated and crafted by master artisans.",
    image: approachDetail,
  },
  {
    number: "04",
    title: "DELIVER",
    subtitle: "Seamless Execution & Turnkey Elegance",
    description:
      "Rigorous project management ensures precision installation, white-glove styling, and a flawless reveal of your completed residence.",
    image: approachDeliver,
  },
];

export const ApproachSection: React.FC = () => {
  return (
    <section className="relative bg-[#F3EFE7] py-14 sm:py-20 md:py-24 text-[#171817]">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        {/* EDITORIAL SECTION HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end border-b border-[#171817]/15 pb-8 sm:pb-10">
          <div className="lg:col-span-8">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#DE1D25]">
              OUR APPROACH
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
              DESIGNING <br />
              <span className="italic font-normal text-[#6E665C]">SPACES WITH</span> <br />
              PURPOSE.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pl-6">
            <p className="text-base text-[#6E665C] leading-relaxed font-light">
              Our holistic design philosophy bridges spatial interior intelligence with bespoke craftsmanship, yielding spaces that evoke emotion and stand timeless.
            </p>
          </div>
        </div>

        {/* 4 EDITORIAL STAGES GRID */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {APPROACH_STEPS.map((step) => (
            <div
              key={step.number}
              className="group flex flex-col justify-between border-t border-[#171817]/15 pt-8 transition-transform duration-500 hover:-translate-y-1"
            >
              <div>
                {/* Image Container with Slow Zoom */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#E6E0D4]">
                  <img
                    src={step.image}
                    alt={`${step.title} - ${step.subtitle}`}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-1.06"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-[#171817] px-2.5 py-1 text-[11px] font-semibold text-[#F3EFE7]">
                    {step.number}
                  </div>
                </div>

                {/* Step Metadata */}
                <div className="mt-6">
                  <h3 className="font-display text-3xl font-medium tracking-wide text-[#171817]">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] font-semibold text-[#DE1D25]">
                    {step.subtitle}
                  </p>
                  <p className="mt-3 text-sm text-[#6E665C] leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
