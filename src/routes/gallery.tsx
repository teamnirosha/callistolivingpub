import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { EnquiryPopup } from "@/components/EnquiryPopup";
import { GallerySection } from "@/components/GallerySection";
import { Contact, FAQ } from "@/components/Sections";

export const Route = createFileRoute("/gallery")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Architectural Gallery & Archive | Callisto Living" },
      {
        name: "description",
        content:
          "Explore the complete visual portfolio of luxury residences, interior architecture, and bespoke craftsmanship by Callisto Living.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <div className="relative bg-[#F3EFE7] text-[#171817] overflow-x-hidden w-full max-w-[100vw]">
      <CustomCursor />
      <Navbar onEnquire={() => setIsEnquiryOpen(true)} />
      <EnquiryPopup open={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />

      <main className="relative z-10 pt-20">
        <GallerySection isFullPage={true} onEnquire={() => setIsEnquiryOpen(true)} />
        <FAQ />
        <Contact onEnquire={() => setIsEnquiryOpen(true)} />
      </main>
    </div>
  );
}
