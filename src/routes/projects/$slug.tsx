import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { getProject, PROJECTS } from "@/lib/projects";
import { LocalityFooterLinks } from "@/components/Sections";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    const project = loaderData?.project || getProject(params.slug);
    const slug = project?.slug || params?.slug;
    if (!project) return {};

    const pageUrl = `https://www.callistoliving.in/projects/${slug}`;
    const pageTitle = `${project.title} | Luxury Interiors | Callisto Living`;
    const pageDesc = project.intro;
    const pageImage = `https://www.callistoliving.in${project.image}`;
    const imageAlt = `${project.title} interior design by Callisto Living`;

    return {
      links: [
        {
          rel: "canonical",
          href: pageUrl,
        },
      ],
      meta: [
        { title: pageTitle },
        { name: "description", content: pageDesc },
        { property: "og:title", content: pageTitle },
        { property: "og:description", content: pageDesc },
        { property: "og:url", content: pageUrl },
        { property: "og:type", content: "article" },
        { property: "og:image", content: pageImage },
        { property: "og:image:alt", content: imageAlt },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: pageTitle },
        { name: "twitter:description", content: pageDesc },
        { name: "twitter:image", content: pageImage },
        { name: "twitter:image:alt", content: imageAlt },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  const currentIndex = PROJECTS.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : PROJECTS[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `https://www.callistoliving.in/projects/${project.slug}#breadcrumb`,
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
            "name": "Selected Projects",
            "item": "https://www.callistoliving.in/#projects",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": project.title,
            "item": `https://www.callistoliving.in/projects/${project.slug}`,
          },
        ],
      },
      {
        "@type": "CreativeWork",
        "@id": `https://www.callistoliving.in/projects/${project.slug}#project`,
        "url": `https://www.callistoliving.in/projects/${project.slug}`,
        "name": project.title,
        "headline": `${project.title} | ${project.category}`,
        "description": project.intro,
        "genre": project.category,
        "creator": {
          "@id": "https://www.callistoliving.in/#studio",
        },
        "image": `https://www.callistoliving.in${project.image}`,
        "locationCreated": {
          "@type": "Place",
          "name": project.location,
        },
      },
      {
        "@type": "WebPage",
        "@id": `https://www.callistoliving.in/projects/${project.slug}#webpage`,
        "url": `https://www.callistoliving.in/projects/${project.slug}`,
        "name": `${project.title} | Luxury Interiors | Callisto Living`,
        "description": project.intro,
        "isPartOf": {
          "@id": "https://www.callistoliving.in/#website",
        },
        "about": {
          "@id": "https://www.callistoliving.in/#studio",
        },
        "mainEntity": {
          "@id": `https://www.callistoliving.in/projects/${project.slug}#project`,
        },
        "breadcrumb": {
          "@id": `https://www.callistoliving.in/projects/${project.slug}#breadcrumb`,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#171817] text-[#F3EFE7]">
      <CustomCursor />
      <Navbar />

      {/* JSON-LD Schema for Project CreativeWork and Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <section className="relative flex min-h-[75vh] items-end overflow-hidden pt-28">
          <picture className="absolute inset-0 h-full w-full">
            <source srcSet={project.image.replace(/\.jpeg$/i, ".avif")} type="image/avif" />
            <source srcSet={project.image.replace(/\.jpeg$/i, ".webp")} type="image/webp" />
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-[#171817] via-[#171817]/60 to-transparent" />
          <div className="relative mx-auto w-full max-w-[1600px] px-6 pb-14 text-white md:px-12 md:pb-20">
            {/* Semantic Visual Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-6 text-[10px] uppercase tracking-[0.25em]">
              <ol className="flex flex-wrap items-center gap-2 text-[#C5B7A7]">
                <li>
                  <Link to="/" className="hover:text-[#DE1D25] transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-[#C5B7A7]/40">/</li>
                <li>
                  <Link to="/" hash="projects" className="hover:text-[#DE1D25] transition-colors">
                    Selected Projects
                  </Link>
                </li>
                <li aria-hidden="true" className="text-[#C5B7A7]/40">/</li>
                <li aria-current="page" className="font-semibold text-[#F3EFE7]">
                  {project.title}
                </li>
              </ol>
            </nav>
            <p className="mt-8 text-[11px] uppercase tracking-[0.25em] text-[#DE1D25] font-semibold">
              {project.category} • {project.location} ({project.year})
            </p>
            <h1 className="mt-3 font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none text-[#F3EFE7]">
              {project.title}
            </h1>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1600px] gap-14 px-6 py-16 sm:py-20 md:grid-cols-[0.75fr_1.25fr] md:px-12 border-b border-[#F3EFE7]/10">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#DE1D25] font-semibold block mb-2">
              PROJECT SPECIFICATIONS
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-[#F3EFE7]">
              Interior Overview
            </h3>
            <dl className="mt-6 space-y-4 border-t border-[#F3EFE7]/15 pt-5 text-sm">
              <div className="flex justify-between gap-6 border-b border-[#F3EFE7]/10 pb-3">
                <dt className="text-[#F3EFE7]/60">Location</dt>
                <dd className="font-medium text-[#F3EFE7]">{project.location}</dd>
              </div>
              <div className="flex justify-between gap-6 border-b border-[#F3EFE7]/10 pb-3">
                <dt className="text-[#F3EFE7]/60">Total Area</dt>
                <dd className="font-medium text-[#F3EFE7]">{project.area}</dd>
              </div>
              <div className="flex justify-between gap-6 border-b border-[#F3EFE7]/10 pb-3">
                <dt className="text-[#F3EFE7]/60">Scope</dt>
                <dd className="font-medium text-[#DE1D25]">Full Turnkey Interior & Joinery</dd>
              </div>
              <div className="flex justify-between gap-6 pb-2">
                <dt className="text-[#F3EFE7]/60">Design Style</dt>
                <dd className="font-medium text-[#F3EFE7]">{project.category}</dd>
              </div>
            </dl>
          </div>

          <div>
            <p className="font-display text-2xl sm:text-3xl md:text-4xl leading-relaxed text-[#F3EFE7]/90 font-light">
              “{project.intro}”
            </p>
            <div className="mt-10 border-t border-[#F3EFE7]/15 pt-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#DE1D25] font-semibold block mb-3">
                CURATED INTERIOR SPACES
              </span>
              <div className="flex flex-wrap gap-2">
                {project.rooms.map((room) => (
                  <span
                    key={room}
                    className="border border-[#F3EFE7]/20 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-[#F3EFE7] rounded-xs font-medium"
                  >
                    {room}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4 CURATED PROJECT INTERIOR GALLERY IMAGES */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <section className="mx-auto max-w-[1600px] px-6 py-16 sm:py-20 md:px-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#F3EFE7]/15">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#DE1D25] block mb-2">
                  PHOTOGRAPHIC ARCHIVE
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#F3EFE7] font-light">
                  Interior Design <span className="italic text-[#C5B7A7]">Gallery</span>
                </h2>
              </div>
              <div className="flex flex-col sm:items-end gap-2">
                <p className="text-xs text-[#F3EFE7]/60 max-w-sm">
                  4 curated spatial perspectives showing bespoke materials, joinery details, and ambient lighting.
                </p>
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#DE1D25] hover:text-white transition-colors"
                >
                  <span>Explore Full Architectural Archive →</span>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.galleryImages.slice(0, 4).map((imgUrl, i) => (
                <div
                  key={i}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xs border border-[#F3EFE7]/15 bg-[#222] transition-all duration-500 hover:border-[#DE1D25]"
                >
                  <picture className="block h-full w-full">
                    <source srcSet={imgUrl.replace(/\.jpeg$/i, ".avif")} type="image/avif" />
                    <source srcSet={imgUrl.replace(/\.jpeg$/i, ".webp")} type="image/webp" />
                    <img
                      src={imgUrl}
                      alt={`${project.title} interior perspective 0${i + 1}`}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-1.06"
                      loading="lazy"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white font-medium">
                      Interior Perspective 0{i + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/"
                hash="contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#DE1D25] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-[#171817] shadow-lg"
              >
                <span>ENQUIRE FOR THIS STYLE</span>
                <span>→</span>
              </Link>
            </div>
          </section>
        )}

        {/* PREVIOUS / NEXT PROJECT NAVIGATION */}
        <section className="mx-auto max-w-[1600px] px-6 py-14 md:px-12 border-t border-[#F3EFE7]/15">
          <div className="flex flex-col sm:flex-row items-stretch justify-between gap-6">
            <Link
              to="/projects/$slug"
              params={{ slug: prevProject.slug }}
              className="group flex flex-col items-start gap-1 p-5 rounded-xs border border-[#F3EFE7]/10 bg-white/5 hover:border-[#DE1D25]/50 hover:bg-white/10 transition-all flex-1 text-left"
              aria-label={`Previous project: ${prevProject.title}`}
            >
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#DE1D25] font-semibold flex items-center gap-2">
                <span>←</span> <span>PREVIOUS PROJECT</span>
              </span>
              <span className="font-display text-xl sm:text-2xl text-[#F3EFE7] group-hover:text-[#DE1D25] transition-colors">
                {prevProject.title}
              </span>
              <span className="text-xs text-[#F3EFE7]/60">
                {prevProject.category} • {prevProject.location}
              </span>
            </Link>

            <Link
              to="/projects/$slug"
              params={{ slug: nextProject.slug }}
              className="group flex flex-col items-end gap-1 p-5 rounded-xs border border-[#F3EFE7]/10 bg-white/5 hover:border-[#DE1D25]/50 hover:bg-white/10 transition-all flex-1 text-right"
              aria-label={`Next project: ${nextProject.title}`}
            >
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#DE1D25] font-semibold flex items-center gap-2">
                <span>NEXT PROJECT</span> <span>→</span>
              </span>
              <span className="font-display text-xl sm:text-2xl text-[#F3EFE7] group-hover:text-[#DE1D25] transition-colors">
                {nextProject.title}
              </span>
              <span className="text-xs text-[#F3EFE7]/60">
                {nextProject.category} • {nextProject.location}
              </span>
            </Link>
          </div>
        </section>

        {/* PUNE RESIDENTIAL SERVICE CORRIDORS (STUDIO SERVICE AREAS) */}
        <section className="mx-auto max-w-[1600px] px-6 pb-16 md:px-12">
          <LocalityFooterLinks theme="dark" className="mt-0" />
        </section>
      </main>
    </div>
  );
}
