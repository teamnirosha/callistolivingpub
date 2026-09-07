import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { EnquiryPopup } from "@/components/EnquiryPopup";
import { HeroSection } from "@/components/HeroSection";
import { ApproachSection } from "@/components/ApproachSection";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { GallerySection } from "@/components/GallerySection";
import {
  About,
  Contact,
  FAQ,
  MaterialSection,
  Services,
  Testimonials,
} from "@/components/Sections";

export const Route = createFileRoute("/")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Callisto Living | Premium Interior Design Studio" },
      {
        name: "description",
        content:
          "Callisto Living creates timeless luxury interiors through architecture, bespoke craftsmanship, and thoughtful design.",
      },
      { property: "og:title", content: "Callisto Living | Premium Interior Design Studio" },
      {
        property: "og:description",
        content:
          "Callisto Living creates timeless luxury interiors through architecture, bespoke craftsmanship, and thoughtful design.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("enquiry_popup_dismissed")) {
      return;
    }
    // Defer enquiry popup so it doesn't interrupt initial landing experience
    const timer = window.setTimeout(() => setIsEnquiryOpen(true), 25000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-[#F3EFE7] text-[#171817] overflow-x-hidden w-full max-w-[100vw]">
      <CustomCursor />
      <Navbar onEnquire={() => setIsEnquiryOpen(true)} />
      <EnquiryPopup open={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />

      <main className="relative z-10 overflow-x-hidden w-full max-w-[100vw]">
        <HeroSection onEnquire={() => setIsEnquiryOpen(true)} />
        <ApproachSection />
        <ProjectShowcase />
        <GallerySection onEnquire={() => setIsEnquiryOpen(true)} />
        <MaterialSection />
        <Services />
        <About />
        <Testimonials />
        <FAQ />
        <Contact onEnquire={() => setIsEnquiryOpen(true)} />
      </main>
    </div>
  );
}
