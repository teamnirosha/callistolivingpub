import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { EnquiryPopup } from "@/components/EnquiryPopup";
import { HeroSection } from "@/components/HeroSection";
import { HeroTrustAndBrands } from "@/components/HeroTrustAndBrands";
import { ApproachSection } from "@/components/ApproachSection";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { GallerySection } from "@/components/GallerySection";
import { CallistoPromisesAndServices } from "@/components/CallistoPromisesAndServices";
import {
  About,
  Contact,
  FAQ,
  Services,
  Testimonials,
} from "@/components/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      {
        rel: "canonical",
        href: "https://www.callistoliving.in/",
      },
    ],
    meta: [
      { title: "Callisto Living | Luxury Interior Designers in Pune" },
      {
        name: "description",
        content:
          "Callisto Living is a luxury interior design studio in Pune, crafting bespoke residential interiors, architectural joinery, and turnkey homes.",
      },
      { property: "og:title", content: "Callisto Living | Luxury Interior Designers in Pune" },
      {
        property: "og:description",
        content:
          "Callisto Living is a luxury interior design studio in Pune, crafting bespoke residential interiors, architectural joinery, and turnkey homes.",
      },
      { property: "og:url", content: "https://www.callistoliving.in/" },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content: "https://www.callistoliving.in/Gallary/interior_design_001.jpeg",
      },
      {
        property: "og:image:alt",
        content: "Callisto Living luxury interior design studio in Pune",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Callisto Living | Luxury Interior Designers in Pune" },
      {
        name: "twitter:description",
        content:
          "Callisto Living is a luxury interior design studio in Pune, crafting bespoke residential interiors, architectural joinery, and turnkey homes.",
      },
      {
        name: "twitter:image",
        content: "https://www.callistoliving.in/Gallary/interior_design_001.jpeg",
      },
      {
        name: "twitter:image:alt",
        content: "Callisto Living luxury interior design studio in Pune",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.callistoliving.in/#website",
        "url": "https://www.callistoliving.in/",
        "name": "Callisto Living",
        "publisher": {
          "@id": "https://www.callistoliving.in/#studio",
        },
      },
      {
        "@type": "InteriorDesignStudio",
        "@id": "https://www.callistoliving.in/#studio",
        "name": "Callisto Living",
        "url": "https://www.callistoliving.in/",
        "telephone": "+91 87669 26173",
        "email": "info@callistoliving.in",
        "image": "https://www.callistoliving.in/Gallary/interior_design_001.jpeg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "FG 1002, Silver Stone, Handewadi Road",
          "addressLocality": "Handewadi, Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "412308",
          "addressCountry": "IN",
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Pune, Maharashtra",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.callistoliving.in/#webpage",
        "url": "https://www.callistoliving.in/",
        "name": "Callisto Living | Luxury Interior Designers in Pune",
        "description":
          "Callisto Living is a luxury interior design studio in Pune, crafting bespoke residential interiors, architectural joinery, and turnkey homes.",
        "isPartOf": {
          "@id": "https://www.callistoliving.in/#website",
        },
        "about": {
          "@id": "https://www.callistoliving.in/#studio",
        },
      },
    ],
  };

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("enquiry_popup_dismissed")) {
      return;
    }
    // Defer enquiry popup so it doesn't interrupt initial landing experience
    const timer = window.setTimeout(() => setIsEnquiryOpen(true), 25000);
    return () => window.clearTimeout(timer);
  }, []);

  // Handle hash scrolling on page load or when navigating with hash
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      const timer = window.setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
      return () => window.clearTimeout(timer);
    }
  }, []);

  return (
    <div className="relative bg-[#F3EFE7] text-[#171817] overflow-x-hidden w-full max-w-[100vw]">
      <CustomCursor />
      <Navbar onEnquire={() => setIsEnquiryOpen(true)} />
      <EnquiryPopup open={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />

      {/* JSON-LD Schema for Local Search, WebSite and Entity Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative z-10 overflow-x-hidden w-full max-w-[100vw]">
        <HeroSection onEnquire={() => setIsEnquiryOpen(true)} />
        <HeroTrustAndBrands />
        <ApproachSection />
        <ProjectShowcase />
        <GallerySection onEnquire={() => setIsEnquiryOpen(true)} />
        <CallistoPromisesAndServices onEnquire={() => setIsEnquiryOpen(true)} />
        <About />
        <Testimonials />
        <FAQ />
        <Contact onEnquire={() => setIsEnquiryOpen(true)} />
      </main>
    </div>
  );
}
