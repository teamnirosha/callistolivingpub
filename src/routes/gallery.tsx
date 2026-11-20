import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { EnquiryPopup } from "@/components/EnquiryPopup";
import { GallerySection } from "@/components/GallerySection";
import { Contact, FAQ } from "@/components/Sections";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    links: [
      {
        rel: "canonical",
        href: "https://www.callistoliving.in/gallery",
      },
    ],
    meta: [
      { title: "Architectural Interior Gallery & Archive | Callisto Living" },
      {
        name: "description",
        content:
          "Explore the complete visual portfolio of luxury residences, interior architecture, and bespoke craftsmanship by Callisto Living.",
      },
      {
        property: "og:title",
        content: "Architectural Interior Gallery & Archive | Callisto Living",
      },
      {
        property: "og:description",
        content:
          "Explore the complete visual portfolio of luxury residences, interior architecture, and bespoke craftsmanship by Callisto Living.",
      },
      { property: "og:url", content: "https://www.callistoliving.in/gallery" },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content: "https://www.callistoliving.in/Gallary/interior_design_014.jpeg",
      },
      {
        property: "og:image:alt",
        content: "Callisto Living architectural gallery and interior portfolio",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Architectural Interior Gallery & Archive | Callisto Living",
      },
      {
        name: "twitter:description",
        content:
          "Explore the complete visual portfolio of luxury residences, interior architecture, and bespoke craftsmanship by Callisto Living.",
      },
      {
        name: "twitter:image",
        content: "https://www.callistoliving.in/Gallary/interior_design_014.jpeg",
      },
      {
        name: "twitter:image:alt",
        content: "Callisto Living architectural gallery and interior portfolio",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.callistoliving.in/gallery#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.callistoliving.in/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Gallery",
            "item": "https://www.callistoliving.in/gallery",
          },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": "https://www.callistoliving.in/gallery#collection",
        "url": "https://www.callistoliving.in/gallery",
        "name": "Architectural Interior Gallery & Archive | Callisto Living",
        "description":
          "Explore the complete visual portfolio of luxury residences, interior architecture, and bespoke craftsmanship by Callisto Living.",
        "isPartOf": {
          "@id": "https://www.callistoliving.in/#website",
        },
        "about": {
          "@id": "https://www.callistoliving.in/#studio",
        },
        "breadcrumb": {
          "@id": "https://www.callistoliving.in/gallery#breadcrumb",
        },
      },
    ],
  };

  return (
    <div className="relative bg-[#F3EFE7] text-[#171817] min-h-screen overflow-x-hidden w-full max-w-[100vw]">
      <CustomCursor />
      <Navbar onEnquire={() => setIsEnquiryOpen(true)} />
      <EnquiryPopup open={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />

      {/* JSON-LD Schema for Gallery Collection and Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative z-10 pt-20">
        {/* Semantic Visual Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mx-auto max-w-[1600px] px-6 lg:px-12 pt-4 pb-1 text-[11px] uppercase tracking-[0.25em]">
          <ol className="flex items-center gap-2 text-[#171817]/60">
            <li>
              <Link to="/" className="hover:text-[#DE1D25] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-[#171817]/30">/</li>
            <li aria-current="page" className="font-semibold text-[#171817]">
              Gallery
            </li>
          </ol>
        </nav>
        <GallerySection isFullPage={true} onEnquire={() => setIsEnquiryOpen(true)} />
        <FAQ />
        <Contact onEnquire={() => setIsEnquiryOpen(true)} />
      </main>
    </div>
  );
}
