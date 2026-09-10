import React, { useState } from "react";
import {
  Clock,
  ShieldCheck,
  DollarSign,
  CreditCard,
  Plus,
  Minus,
  UserCheck,
  Layout,
  FileCheck2,
  Wrench,
  Key,
  ArrowRight,
  Award,
  Box,
  CheckCircle2,
  Cpu,
  Layers,
  HeartHandshake,
  CookingPot,
  Maximize2,
  Tv,
  Briefcase,
  Sun,
  Lightbulb,
  Image as ImageIcon,
  Paintbrush,
  Bath,
  Sparkle,
  Home,
  Armchair,
  BedDouble
} from "lucide-react";

// Project Showcase Images
import projectApartment from "@/assets/project-apartment.webp";
import projectMinimal from "@/assets/project-minimal.webp";
import projectVilla from "@/assets/project-villa.webp";
import heroWarm from "@/assets/hero-warm-daylight.jpg";

// End-to-End Custom Icon Images imported via Vite ESM for 100% reliability
import imgModularKitchen from "@/assets/end-to-end/Modular Kitchen.webp";
import imgStorageWardrobe from "@/assets/end-to-end/Storage and Wardrobe.webp";
import imgCrockeryUnit from "@/assets/end-to-end/Crockery Unt.webp";
import imgSpaceSaving from "@/assets/end-to-end/Space Saving Furnitre.webp";
import imgTvUnit from "@/assets/end-to-end/TV unit.png";
import imgStudyTable from "@/assets/end-to-end/Study Table.webp";
import imgFalseCeiling from "@/assets/end-to-end/False Ceiling.webp";
import imgLights from "@/assets/end-to-end/Lights.webp";
import imgWallpaper from "@/assets/end-to-end/wallpaper.webp";
import imgPaints from "@/assets/end-to-end/icons8-paint-roller-80.png";
import imgBathroom from "@/assets/end-to-end/Bathroom.webp";
import imgPoojaUnit from "@/assets/end-to-end/Puja Unit.webp";
import imgFoyer from "@/assets/end-to-end/Foyer.webp";
import imgMovableFurniture from "@/assets/end-to-end/Movable Furniture.webp";
import imgKidsBedroom from "@/assets/end-to-end/Kids Bedroom.webp";

interface CallistoPromisesProps {
  onEnquire: () => void;
}

// Service Icon Component with automatic fallback protection
const ServiceIconImage = ({
  src,
  alt,
  fallbackIcon: FallbackIcon,
}: {
  src: string;
  alt: string;
  fallbackIcon: React.ComponentType<{ className?: string; size?: number; strokeWidth?: number }>;
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <FallbackIcon
        size={52}
        strokeWidth={1.4}
        className="text-[#DE1D25] group-hover:scale-110 transition-transform duration-300"
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className="w-16 h-16 sm:w-20 sm:h-20 object-contain group-hover:scale-110 transition-transform duration-300 filter drop-shadow-xs"
    />
  );
};

export const CallistoPromisesAndServices: React.FC<CallistoPromisesProps> = ({ onEnquire }) => {
  // Accordion state for Promises
  const [openPromise, setOpenPromise] = useState<number | null>(0);

  const promises = [
    {
      id: 0,
      title: "On-Time Delivery",
      icon: Clock,
      details:
        "We enforce strict milestone tracking and dedicated project manager supervision to ensure your home is completed exactly on schedule without delays.",
    },
    {
      id: 1,
      title: "10+ Years Warranty",
      icon: ShieldCheck,
      details:
        "Every custom cabinet, hardware fixture, and structural fitting comes with an extensive 10-year warranty powered by top European hardware engineering.",
    },
    {
      id: 2,
      title: "No Hidden Costs",
      icon: DollarSign,
      details:
        "What we quote in your final BOQ (Bill of Quantities) is what you pay. We lock in material costs prior to manufacturing so there are no unexpected markups.",
    },
    {
      id: 3,
      title: "Bespoke EMI & Flexi Payment",
      icon: CreditCard,
      details:
        "Tailored financial planning with zero-cost EMI options and stage-wise payment schedules so your investment is comfortably paced.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Project Signup",
      desc: "Initial consultation, site measurement & vision mapping.",
      icon: UserCheck,
    },
    {
      step: "02",
      title: "Design Presentation",
      desc: "Photorealistic 3D renders, layout options & material moodboards.",
      icon: Layout,
    },
    {
      step: "03",
      title: "Design Sign-Off",
      desc: "Finalizing 2D/3D working drawings & 100% itemized BOQ approval.",
      icon: FileCheck2,
    },
    {
      step: "04",
      title: "Final Installation",
      desc: "Precision factory manufacturing & seamless white-glove site setup.",
      icon: Wrench,
    },
    {
      step: "05",
      title: "Handover",
      desc: "Deep cleaning, thorough quality check & ceremonial key handover.",
      icon: Key,
    },
  ];

  // 15 End-to-End Home Interior Services with ESM Imports & Fallbacks
  const services = [
    { title: "Modular Kitchen", image: imgModularKitchen, fallback: CookingPot },
    { title: "Storage and Wardrobe", image: imgStorageWardrobe, fallback: Layers },
    { title: "Crockery Unit", image: imgCrockeryUnit, fallback: Box },
    { title: "Space Saving Furniture", image: imgSpaceSaving, fallback: Maximize2 },
    { title: "TV unit", image: imgTvUnit, fallback: Tv },
    { title: "Study Table", image: imgStudyTable, fallback: Briefcase },
    { title: "False Ceiling", image: imgFalseCeiling, fallback: Sun },
    { title: "Lights", image: imgLights, fallback: Lightbulb },
    { title: "Wallpaper", image: imgWallpaper, fallback: ImageIcon },
    { title: "Paints", image: imgPaints, fallback: Paintbrush },
    { title: "Bathroom", image: imgBathroom, fallback: Bath },
    { title: "Pooja Unit", image: imgPoojaUnit, fallback: Sparkle },
    { title: "Foyer", image: imgFoyer, fallback: Home },
    { title: "Movable Furniture", image: imgMovableFurniture, fallback: Armchair },
    { title: "Kids Bedroom", image: imgKidsBedroom, fallback: BedDouble },
  ];

  // Why Choose Callisto Living Features
  const whyChooseUs = [
    {
      number: "01",
      icon: Award,
      title: "In-House Precision Manufacturing",
      desc: "Zero third-party outsourcing. Every custom wardrobe, kitchen module, and millwork piece is manufactured in our German-engineered automated facility.",
    },
    {
      number: "02",
      icon: Cpu,
      title: "Photorealistic 3D Walkthroughs",
      desc: "Visualize your entire home in 4K resolution before execution begins. What you approve in 3D design is 100% what gets built.",
    },
    {
      number: "03",
      icon: ShieldCheck,
      title: "10-Year Comprehensive Warranty",
      desc: "We stand behind our craftsmanship with a solid 10-year warranty on materials, hardware, and structural fittings for ultimate peace of mind.",
    },
    {
      number: "04",
      icon: Clock,
      title: "Guaranteed On-Time Handover",
      desc: "Strict project management protocols ensure your residence is delivered within agreed timelines with daily digital progress updates.",
    },
    {
      number: "05",
      icon: DollarSign,
      title: "Fixed Price & Transparent BOQ",
      desc: "100% itemized pricing upfront with zero hidden charges or surprise budget increases midway through execution.",
    },
    {
      number: "06",
      icon: HeartHandshake,
      title: "Dedicated Interior Concierge",
      desc: "One single expert project manager guides your journey from concept planning to final white-glove styling and key handover.",
    },
  ];

  return (
    <div className="w-full bg-[#F3EFE7] text-[#171817]">
      {/* ========================================================================= */}
      {/* SECTION 1: CALLISTO LIVING PROMISES (LIGHT THEME) */}
      {/* ========================================================================= */}
      <section className="relative py-16 md:py-24 border-b border-[#171817]/15">
        {/* Background Ambient Warm Blurs */}
        <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-[#DE1D25]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#C5B7A7]/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative mx-auto w-full max-w-[1600px] px-6 lg:px-12">
          {/* Header Title */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.3em] text-[#DE1D25] block mb-2 sm:mb-3">
              UNCOMPROMISING STANDARDS
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-[#171817] tracking-tight">
              Callisto Living <span className="font-normal text-[#9A8B7A]">Promises!</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm md:text-base text-[#171817]/70 font-normal max-w-2xl mx-auto">
              Crafting luxury spaces with complete transparency, unyielding quality guarantees, and flawless timeline execution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* LEFT COLUMN: Accordion Cards & CTA */}
            <div className="lg:col-span-6 space-y-4">
              {promises.map((item) => {
                const isOpen = openPromise === item.id;
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    onClick={() => setOpenPromise(isOpen ? null : item.id)}
                    className={`group cursor-pointer rounded-2xl border transition-all duration-300 p-5 md:p-6 ${
                      isOpen
                        ? "border-[#DE1D25] bg-white shadow-[0_10px_30px_rgba(222,29,37,0.1)]"
                        : "border-[#171817]/10 bg-[#FAF8F5] hover:border-[#DE1D25]/40 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-colors ${
                            isOpen
                              ? "bg-[#DE1D25] border-[#DE1D25] text-white shadow-[0_4px_15px_rgba(222,29,37,0.3)]"
                              : "bg-white border-[#171817]/15 text-[#171817]/80 group-hover:text-[#DE1D25] group-hover:border-[#DE1D25]/40"
                          }`}
                        >
                          <IconComponent size={22} strokeWidth={1.8} />
                        </div>
                        <div>
                          <h3 className="font-sans text-lg sm:text-xl font-bold text-[#171817]">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                          isOpen
                            ? "bg-[#DE1D25]/10 border-[#DE1D25] text-[#DE1D25] rotate-180"
                            : "border-[#171817]/20 text-[#171817]/60 group-hover:border-[#DE1D25]/50 group-hover:text-[#DE1D25]"
                        }`}
                      >
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </div>
                    </div>

                    {/* Accordion Expand Body */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-[#171817]/10" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-xs sm:text-sm text-[#171817]/75 font-normal leading-relaxed">
                          {item.details}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Get a Free Quote Button */}
              <div className="pt-4">
                <button
                  type="button"
                  onClick={onEnquire}
                  className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full bg-[#DE1D25] text-white font-bold text-xs sm:text-sm uppercase tracking-[0.2em] shadow-[0_4px_20px_rgba(222,29,37,0.3)] hover:bg-[#c21820] hover:shadow-[0_8px_30px_rgba(222,29,37,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: CIRCULAR & GEOMETRIC IMAGE MOSAIC */}
            <div className="lg:col-span-6 relative flex items-center justify-center py-6">
              <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                {/* Background Decorative Ring */}
                <div className="absolute inset-0 rounded-full border border-dashed border-[#171817]/20 animate-[spin_60s_linear_infinite]" />

                {/* Main Large Center-Top Circle */}
                <div className="absolute top-0 right-4 w-[240px] sm:w-[280px] h-[240px] sm:h-[280px] rounded-full overflow-hidden border-4 border-white shadow-2xl group transition-transform duration-500 hover:scale-105">
                  <img
                    src={heroWarm}
                    alt="Luxury Living Room Interior"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs text-white font-semibold tracking-wide">Living Interior Design</span>
                  </div>
                </div>

                {/* Middle Left Circle */}
                <div className="absolute top-[28%] left-0 w-[180px] sm:w-[210px] h-[180px] sm:h-[210px] rounded-full overflow-hidden border-4 border-white shadow-2xl group transition-transform duration-500 hover:scale-105 z-10">
                  <img
                    src={projectApartment}
                    alt="Bespoke Mandir Showcase"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs text-white font-semibold tracking-wide">Pooja & Sanctuary</span>
                  </div>
                </div>

                {/* Bottom Right Circle */}
                <div className="absolute bottom-2 right-2 w-[190px] sm:w-[220px] h-[190px] sm:h-[220px] rounded-full overflow-hidden border-4 border-white shadow-2xl group transition-transform duration-500 hover:scale-105 z-20">
                  <img
                    src={projectVilla}
                    alt="Master Luxury Bedroom"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs text-white font-semibold tracking-wide">Master Suites</span>
                  </div>
                </div>

                {/* Small Accent Circle */}
                <div className="absolute top-[12%] left-[18%] w-[90px] h-[90px] rounded-full overflow-hidden border-2 border-[#DE1D25] shadow-lg hidden sm:block">
                  <img
                    src={projectMinimal}
                    alt="Modular Kitchen Detail"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Center Badge Floating */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-white/95 backdrop-blur-md border border-[#DE1D25]/40 rounded-full px-5 py-2.5 shadow-xl flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#DE1D25] animate-ping" />
                  <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#171817]">
                    100% Quality Guaranteed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: HOW IT WORKS (LIGHT THEME) */}
      {/* ========================================================================= */}
      <section className="relative py-16 md:py-24 bg-[#FAF8F5] border-b border-[#171817]/15">
        <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.3em] text-[#DE1D25] block mb-2 sm:mb-3">
              SEAMLESS DESIGN EXPERIENCE
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-[#171817] tracking-tight">
              How It <span className="font-normal text-[#9A8B7A]">Works</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm md:text-base text-[#171817]/70 font-normal max-w-2xl mx-auto">
              From initial interior concept to final key handover, experience an effortless journey to your dream home.
            </p>
          </div>

          {/* Process Timeline Steps */}
          <div className="relative mt-10">
            {/* Connecting Timeline Line (Desktop) */}
            <div className="hidden lg:block absolute top-[44px] left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-[#DE1D25]/30 via-[#DE1D25] to-[#C5B7A7]/50 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 relative z-10">
              {processSteps.map((item) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.step}
                    className="group relative flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-[#171817]/10 hover:border-[#DE1D25] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(222,29,37,0.12)]"
                  >
                    {/* Icon Circle */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 rounded-full bg-[#FAF8F5] border-2 border-[#171817]/15 group-hover:border-[#DE1D25] flex items-center justify-center transition-colors duration-300 shadow-md">
                        <IconComp size={28} className="text-[#DE1D25] group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      {/* Step Number Tag */}
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#DE1D25] text-white text-[11px] font-bold flex items-center justify-center shadow-md">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="font-sans text-lg font-bold text-[#171817] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#171817]/70 font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA Button */}
            <div className="mt-14 text-center">
              <button
                type="button"
                onClick={onEnquire}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#DE1D25] text-white font-bold text-xs sm:text-sm uppercase tracking-[0.2em] shadow-[0_4px_20px_rgba(222,29,37,0.3)] hover:bg-[#c21820] hover:shadow-[0_8px_30px_rgba(222,29,37,0.5)] transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <span>Book Free Consultation</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: END-TO-END HOME INTERIOR SERVICES (100% RELIABLE ICON RENDER) */}
      {/* ========================================================================= */}
      <section className="relative py-16 md:py-24 bg-[#F3EFE7] border-b border-[#171817]/15">
        <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.3em] text-[#DE1D25] block mb-2 sm:mb-3">
              HOLISTIC RESIDENTIAL SOLUTIONS
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-[#171817] tracking-tight">
              Our End-to-End Home Interior <span className="font-normal text-[#9A8B7A]">Services</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm md:text-base text-[#171817]/70 font-normal max-w-2xl mx-auto">
              From bespoke modular kitchens to complete home interior transformations crafted by Callisto Living.
            </p>
          </div>

          {/* Clean Grid of 15 Services */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-12 sm:gap-y-16 gap-x-6 sm:gap-x-10">
            {services.map((item, idx) => (
              <div
                key={idx}
                onClick={onEnquire}
                className="group cursor-pointer flex flex-col items-center justify-center text-center transition-transform duration-300 hover:-translate-y-2"
              >
                {/* Custom Icon Image with Fail-Safe Fallback */}
                <div className="relative mb-4 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20">
                  <ServiceIconImage
                    src={item.image}
                    alt={item.title}
                    fallbackIcon={item.fallback}
                  />
                </div>

                {/* Service Title */}
                <h3 className="font-sans text-sm sm:text-base font-semibold text-[#171817] group-hover:text-[#DE1D25] transition-colors leading-snug tracking-tight">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Bottom Banner with Callisto Branding */}
          <div className="mt-20 rounded-3xl p-8 sm:p-12 bg-white border border-[#DE1D25]/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-xl">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DE1D25]">
                CALLISTO LIVING EXCELLENCE
              </span>
              <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#171817] mt-1">
                Ready to transform your residence?
              </h3>
              <p className="text-xs sm:text-sm text-[#171817]/70 font-normal mt-2 max-w-xl">
                Consult with our senior interior designers today and receive a personalized 3D spatial concept & estimate.
              </p>
            </div>
            <button
              type="button"
              onClick={onEnquire}
              className="shrink-0 px-8 py-4 rounded-full bg-[#DE1D25] text-white font-bold text-xs sm:text-sm uppercase tracking-[0.2em] shadow-[0_4px_20px_rgba(222,29,37,0.35)] hover:bg-[#c21820] hover:shadow-[0_8px_30px_rgba(222,29,37,0.5)] transition-all cursor-pointer"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: WHY CHOOSE CALLISTO LIVING */}
      {/* ========================================================================= */}
      <section className="relative py-16 md:py-24 bg-[#FAF8F5]">
        <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.3em] text-[#DE1D25] block mb-2 sm:mb-3">
              THE CALLISTO ADVANTAGE
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-[#171817] tracking-tight">
              Why Choose <span className="font-normal text-[#9A8B7A]">Callisto Living?</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm md:text-base text-[#171817]/70 font-normal max-w-2xl mx-auto">
              Setting the benchmark for luxury home interiors with unmatched craftsmanship, total transparency, and turnkey perfection.
            </p>
          </div>

          {/* 6 Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyChooseUs.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.number}
                  className="group relative p-8 rounded-2xl bg-white border border-[#171817]/10 hover:border-[#DE1D25] hover:shadow-[0_15px_35px_rgba(222,29,37,0.08)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Number Tag + Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-sans text-2xl font-bold text-[#DE1D25]">
                        {item.number}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-[#DE1D25]/10 text-[#DE1D25] flex items-center justify-center group-hover:bg-[#DE1D25] group-hover:text-white transition-all duration-300">
                        <IconComp size={24} strokeWidth={1.8} />
                      </div>
                    </div>

                    <h3 className="font-sans text-lg sm:text-xl font-bold text-[#171817] mb-3 group-hover:text-[#DE1D25] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#171817]/70 font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#171817]/5 flex items-center gap-2 text-xs font-bold text-[#DE1D25]">
                    <CheckCircle2 size={16} />
                    <span>Callisto Standard Guaranteed</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Key Metrics Counter Strip */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 bg-white p-8 sm:p-10 rounded-3xl border border-[#171817]/10 shadow-lg text-center">
            <div>
              <p className="font-sans text-3xl sm:text-4xl font-extrabold text-[#DE1D25]">10+ Years</p>
              <p className="text-xs text-[#171817]/70 font-semibold uppercase tracking-wider mt-1">Material Warranty</p>
            </div>
            <div>
              <p className="font-sans text-3xl sm:text-4xl font-extrabold text-[#DE1D25]">45 Days</p>
              <p className="text-xs text-[#171817]/70 font-semibold uppercase tracking-wider mt-1">Guaranteed Delivery</p>
            </div>
            <div>
              <p className="font-sans text-3xl sm:text-4xl font-extrabold text-[#DE1D25]">100%</p>
              <p className="text-xs text-[#171817]/70 font-semibold uppercase tracking-wider mt-1">In-House Manufacturing</p>
            </div>
            <div>
              <p className="font-sans text-3xl sm:text-4xl font-extrabold text-[#DE1D25]">0%</p>
              <p className="text-xs text-[#171817]/70 font-semibold uppercase tracking-wider mt-1">Hidden Costs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
