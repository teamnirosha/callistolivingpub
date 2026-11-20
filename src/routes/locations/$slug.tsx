import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, MapPin, Phone, Mail, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { EnquiryPopup } from "@/components/EnquiryPopup";
import { LocalityFooterLinks } from "@/components/Sections";
import { getLocation } from "@/lib/locations";
import { trackWhatsAppClick } from "@/lib/analytics";

export const Route = createFileRoute("/locations/$slug")({
  loader: ({ params }) => {
    const location = getLocation(params.slug);
    if (!location || !location.published) {
      throw notFound();
    }
    return { location };
  },
  head: ({ loaderData, params }) => {
    const location = loaderData?.location || getLocation(params.slug);
    if (!location) return {};
    const pageUrl = `https://www.callistoliving.in/locations/${location.slug}`;
    const imageUrl = `https://www.callistoliving.in${location.heroImage.src}`;

    return {
      links: [
        {
          rel: "canonical",
          href: pageUrl,
        },
      ],
      meta: [
        { title: location.meta.title },
        { name: "description", content: location.meta.description },
        { property: "og:title", content: location.meta.title },
        { property: "og:description", content: location.meta.description },
        { property: "og:url", content: pageUrl },
        { property: "og:image", content: imageUrl },
        { property: "og:image:alt", content: location.heroImage.alt },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: location.meta.title },
        { name: "twitter:description", content: location.meta.description },
        { name: "twitter:image", content: imageUrl },
        { name: "twitter:image:alt", content: location.heroImage.alt },
      ],
    };
  },
  component: LocationPage,
});

function LocationPage() {
  const { location } = Route.useLoaderData();
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
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
          "name": `${location.name}, Pune, Maharashtra`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `https://www.callistoliving.in/locations/${location.slug}#webpage`,
        "url": `https://www.callistoliving.in/locations/${location.slug}`,
        "name": location.meta.title,
        "description": location.meta.description,
        "isPartOf": {
          "@id": "https://www.callistoliving.in/#website",
        },
        "about": {
          "@id": "https://www.callistoliving.in/#studio",
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `https://www.callistoliving.in${location.heroImage.src}`,
        },
        "breadcrumb": {
          "@id": `https://www.callistoliving.in/locations/${location.slug}#breadcrumb`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://www.callistoliving.in/locations/${location.slug}#breadcrumb`,
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
            "name": location.name,
            "item": `https://www.callistoliving.in/locations/${location.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": location.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="relative bg-[#171817] text-[#F3EFE7] min-h-screen overflow-x-hidden w-full max-w-[100vw]">
      <CustomCursor />
      <Navbar onEnquire={() => setIsEnquiryOpen(true)} />
      <EnquiryPopup open={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />

      {/* JSON-LD Schema for Local Search & Entity Knowledge */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative z-10">
        {/* 1. HERO SECTION */}
        <section className="relative flex min-h-[80vh] items-end overflow-hidden pt-32 pb-16">
          <picture className="absolute inset-0 h-full w-full">
            <source srcSet={location.heroImage.src.replace(/\.jpeg$/i, ".avif")} type="image/avif" />
            <source srcSet={location.heroImage.src.replace(/\.jpeg$/i, ".webp")} type="image/webp" />
            <img
              src={location.heroImage.src}
              alt={location.heroImage.alt}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-[#171817] via-[#171817]/75 to-[#171817]/40" />

          <div className="relative mx-auto w-full max-w-[1600px] px-6 text-white md:px-12">
            {/* Semantic Visual Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-6 text-[10px] uppercase tracking-[0.25em]">
              <ol className="flex items-center gap-2 text-[#F3EFE7]/70">
                <li>
                  <Link to="/" className="hover:text-[#DE1D25] transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-[#F3EFE7]/30">/</li>
                <li aria-current="page" className="font-semibold text-[#F3EFE7]">
                  {location.name}
                </li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#DE1D25]/40 bg-[#DE1D25]/10 px-4 py-1.5 backdrop-blur-md mb-6">
              <MapPin size={13} className="text-[#DE1D25]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#DE1D25]">
                {location.name} • {location.zone}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] text-[#F3EFE7] max-w-5xl">
              {location.headline}
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#F3EFE7]/85 font-light">
              {location.subheadline}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => setIsEnquiryOpen(true)}
                className="w-full sm:w-auto text-center bg-[#DE1D25] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-[#171817] cursor-pointer"
              >
                CONSULT OUR PUNE STUDIO →
              </button>
              <Link
                to="/gallery"
                className="w-full sm:w-auto text-center border border-[#F3EFE7]/30 bg-white/5 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#F3EFE7] transition-all duration-300 hover:bg-white/15"
              >
                VIEW ARCHIVE GALLERY
              </Link>
            </div>
          </div>
        </section>

        {/* 2. EDITORIAL NARRATIVE & LOCAL CONTEXT */}
        <section className="mx-auto max-w-[1600px] px-6 py-20 md:px-12 border-b border-[#F3EFE7]/10">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#DE1D25] font-semibold block mb-3">
                SPATIAL ARCHITECTURE & INTERIOR DESIGN
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#F3EFE7] leading-tight">
                Refined living for residences in {location.name}
              </h2>

              <div className="mt-8 space-y-6 text-sm sm:text-base leading-relaxed text-[#F3EFE7]/75 font-light">
                {location.editorialNarrative.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Studio Proximity Badge */}
              <div className="mt-10 rounded-xs border border-[#F3EFE7]/15 bg-white/5 p-6 flex items-start gap-4">
                <ShieldCheck className="h-6 w-6 text-[#DE1D25] shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[#F3EFE7]">
                    Centralized Pune Atelier & Single-Point Accountability
                  </h4>
                  <p className="mt-1.5 text-xs text-[#F3EFE7]/70 leading-relaxed">
                    Operated directly from our studio on Handewadi Road, Pune (PIN 412308), our in-house makers in stone, metal, and cabinetry oversee every project with dedicated site supervision and transparent milestones.
                  </p>
                </div>
              </div>
            </div>

            {/* Verified Locality Geographic Profile */}
            <div className="rounded-xs border border-[#F3EFE7]/15 bg-[#1F201F] p-8 text-[#F3EFE7] flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#DE1D25] font-semibold block mb-2">
                  VERIFIED LOCALITY CONTEXT
                </span>
                <h3 className="font-display text-2xl text-[#F3EFE7]">
                  {location.name} Residential Landscape
                </h3>
                <p className="mt-4 text-xs sm:text-sm text-[#F3EFE7]/70 leading-relaxed">
                  {location.verifiedLocalityContext.geographicProfile}
                </p>

                <div className="mt-8">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#DE1D25] mb-3">
                    Prominent Sectors & Enclaves
                  </h4>
                  <ul className="space-y-2.5">
                    {location.verifiedLocalityContext.majorResidentialCorridors.map((corridor) => (
                      <li key={corridor} className="flex items-center gap-2.5 text-xs text-[#F3EFE7]/80">
                        <CheckCircle2 size={13} className="text-[#DE1D25] shrink-0" />
                        <span>{corridor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-[#F3EFE7]/15 flex items-center justify-between text-xs text-[#F3EFE7]/60">
                <span>Postal Code: {location.postalCode}</span>
                <span>Region: {location.zone}, Pune</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. GENERAL DESIGN CONSIDERATIONS */}
        <section className="mx-auto max-w-[1600px] px-6 py-20 md:px-12 border-b border-[#F3EFE7]/10">
          <div className="max-w-3xl mb-14">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#DE1D25] font-semibold block mb-2">
              ARCHITECTURAL PRINCIPLES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F3EFE7]">
              Design considerations for {location.name} homes
            </h2>
            <p className="mt-4 text-sm text-[#F3EFE7]/70 leading-relaxed">
              Every residential micro-market in Pune presents distinct environmental, spatial, and structural qualities. Our studio approaches each space through structured architectural criteria:
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {location.generalDesignConsiderations.map((item, idx) => (
              <div
                key={item.title}
                className="border border-[#F3EFE7]/15 bg-white/5 p-8 rounded-xs hover:border-[#DE1D25]/50 transition-colors"
              >
                <span className="font-display text-3xl text-[#DE1D25] block mb-4">
                  0{idx + 1}
                </span>
                <h3 className="font-display text-xl text-[#F3EFE7]">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#F3EFE7]/70">
                  {item.explanation}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. RELEVANT STUDIO SERVICES */}
        <section className="mx-auto max-w-[1600px] px-6 py-20 md:px-12 border-b border-[#F3EFE7]/10">
          <div className="max-w-3xl mb-14">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#DE1D25] font-semibold block mb-2">
              STUDIO EXPERTISE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F3EFE7]">
              Turnkey services delivered by Callisto Living
            </h2>
            <p className="mt-4 text-sm text-[#F3EFE7]/70 leading-relaxed">
              We manage all phases in-house with dedicated makers in stone, brass, metal, and cabinetry—eliminating multi-contractor friction.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {location.relevantServices.map((service) => (
              <div
                key={service.name}
                className="border border-[#F3EFE7]/15 bg-[#1F201F] p-8 rounded-xs flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-display text-2xl text-[#F3EFE7]">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#F3EFE7]/70">
                    {service.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#F3EFE7]/10">
                  <button
                    type="button"
                    onClick={() => setIsEnquiryOpen(true)}
                    className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#DE1D25] hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Inquire for this service</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. CRAFT SHOWCASE & PORTFOLIO IMAGES (HONEST ATTRIBUTION) */}
        <section className="mx-auto max-w-[1600px] px-6 py-20 md:px-12 border-b border-[#F3EFE7]/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#DE1D25] font-semibold block mb-2">
                PORTFOLIO DISCIPLINES & CRAFTSMANSHIP
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#F3EFE7]">
                Design concepts & artisanal detail
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-[#F3EFE7]/65 max-w-xl">
                Representative examples of spatial planning, material joinery, and custom architectural finishes crafted by Callisto Living atelier.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/"
                hash="projects"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5B7A7] hover:text-[#DE1D25] transition-colors"
              >
                <span>View Selected Projects</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#DE1D25] hover:text-white transition-colors"
              >
                <span>Explore All 67 Gallery Works</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {location.portfolioShowcase.map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden border border-[#F3EFE7]/15 bg-white/5 rounded-xs"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-black/40">
                  <picture className="block h-full w-full">
                    <source srcSet={item.src.replace(/\.jpeg$/i, ".avif")} type="image/avif" />
                    <source srcSet={item.src.replace(/\.jpeg$/i, ".webp")} type="image/webp" />
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </picture>
                </div>
                <div className="p-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#DE1D25] font-semibold block mb-1.5">
                    {item.designDiscipline}
                  </span>
                  <p className="text-xs sm:text-sm text-[#F3EFE7]/80 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. GENUINE CONSULTATION FAQS */}
        <section className="mx-auto max-w-[1600px] px-6 py-20 md:px-12 border-b border-[#F3EFE7]/10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#DE1D25] font-semibold block mb-2">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#F3EFE7]">
                Interior design questions for {location.name}
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-[#F3EFE7]/70 leading-relaxed">
                Clear answers regarding our consultation process, project timelines, material procurement, and site coordination.
              </p>
            </div>

            <div className="space-y-4">
              {location.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={faq.question}
                    className="border border-[#F3EFE7]/15 rounded-xs overflow-hidden bg-white/5 transition-colors"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between gap-6 p-6 text-left hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      <span className="font-display text-lg sm:text-xl text-[#F3EFE7]">
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-[#DE1D25] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 text-xs sm:text-sm text-[#F3EFE7]/70 leading-relaxed border-t border-[#F3EFE7]/10 pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 7. NEARBY LOCALITY CROSS-LINKS */}
        <section className="mx-auto max-w-[1600px] px-6 py-16 md:px-12 border-b border-[#F3EFE7]/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#DE1D25] font-semibold block mb-1">
                PUNE RESIDENTIAL NETWORK
              </span>
              <h3 className="font-display text-2xl text-[#F3EFE7]">
                Explore Neighbouring Pune Enclaves
              </h3>
            </div>
            <p className="text-xs text-[#F3EFE7]/60">
              Interconnected design services across East & South-East Pune
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {location.nearbyLocations.map((nearby) => (
              <Link
                key={nearby.slug}
                to="/locations/$slug"
                params={{ slug: nearby.slug }}
                className="border border-[#F3EFE7]/20 bg-white/5 px-5 py-3 text-xs uppercase tracking-[0.16em] text-[#F3EFE7] hover:border-[#DE1D25] hover:text-[#DE1D25] transition-all rounded-xs"
              >
                Interior Designer {nearby.name} →
              </Link>
            ))}
            <Link
              to="/"
              className="border border-[#F3EFE7]/20 bg-white/5 px-5 py-3 text-xs uppercase tracking-[0.16em] text-[#F3EFE7]/60 hover:text-white transition-all rounded-xs"
            >
              All Pune Studios
            </Link>
          </div>
        </section>

        {/* 8. VERIFIED STUDIO CONTACT & CALL TO ACTION */}
        <section className="mx-auto max-w-[1600px] px-6 py-20 md:px-12">
          <div className="rounded-xs border border-[#DE1D25]/30 bg-gradient-to-br from-[#1F201F] to-[#171817] p-8 md:p-14">
            <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] items-center">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#DE1D25] font-semibold block mb-3">
                  INITIATE YOUR RESIDENCE
                </span>
                <h2 className="font-display text-3xl sm:text-5xl text-[#F3EFE7] leading-tight">
                  Design your home in {location.name}
                </h2>
                <p className="mt-4 text-xs sm:text-sm text-[#F3EFE7]/70 leading-relaxed max-w-xl">
                  Schedule an introductory consultation at our Pune studio or arrange a virtual design review with our architectural team.
                </p>

                <div className="mt-8 flex flex-wrap gap-6 text-xs text-[#F3EFE7]/80">
                  <a href="tel:08766926173" className="flex items-center gap-2 hover:text-[#DE1D25] transition-colors">
                    <Phone size={14} className="text-[#DE1D25]" />
                    <span>+91 87669 26173</span>
                  </a>
                  <a href="mailto:info@callistoliving.in" className="flex items-center gap-2 hover:text-[#DE1D25] transition-colors">
                    <Mail size={14} className="text-[#DE1D25]" />
                    <span>info@callistoliving.in</span>
                  </a>
                  <span className="flex items-center gap-2">
                    <MapPin size={14} className="text-[#DE1D25]" />
                    <span>FG 1002, Silver Stone, Handewadi Rd, Pune</span>
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button
                  type="button"
                  onClick={() => setIsEnquiryOpen(true)}
                  className="w-full bg-[#DE1D25] px-8 py-5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-[#171817] cursor-pointer text-center"
                >
                  SCHEDULE DESIGN CONSULTATION →
                </button>
                <a
                  href={`https://api.whatsapp.com/send?phone=918766926173&text=Hello%20Callisto%20Living!%20I'm%20interested%20in%20interior%20design%20services%20for%20my%20home%20in%20${encodeURIComponent(location.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick(`location_${location.slug}`)}
                  className="w-full border border-[#25D366]/40 bg-[#25D366]/10 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#25D366] transition-all duration-300 hover:bg-[#25D366] hover:text-white cursor-pointer text-center"
                >
                  CHAT ON WHATSAPP
                </a>
              </div>
            </div>
          </div>
          <LocalityFooterLinks theme="dark" className="mt-14" currentSlug={location.slug} />
        </section>
      </main>
    </div>
  );
}
