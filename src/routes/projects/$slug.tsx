import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { getProject } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-[#171817] text-[#F3EFE7]">
      <CustomCursor />
      <Navbar />
      <main>
        <section className="relative flex min-h-[75vh] items-end overflow-hidden pt-28">
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171817] via-[#171817]/60 to-transparent" />
          <div className="relative mx-auto w-full max-w-[1600px] px-6 pb-14 text-white md:px-12 md:pb-20">
            <Link
              to="/"
              hash="projects"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#C5B7A7] hover:text-[#DE1D25] transition-colors"
            >
              <span>←</span>
              <span>Back to all projects</span>
            </Link>
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
              <p className="text-xs text-[#F3EFE7]/60 max-w-sm">
                4 curated spatial perspectives showing bespoke materials, joinery details, and ambient lighting.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.galleryImages.slice(0, 4).map((imgUrl, i) => (
                <div
                  key={i}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xs border border-[#F3EFE7]/15 bg-[#222] transition-all duration-500 hover:border-[#DE1D25]"
                >
                  <img
                    src={imgUrl}
                    alt={`${project.title} interior perspective 0${i + 1}`}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-1.06"
                    loading="lazy"
                  />
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
                className="inline-flex items-center gap-3 bg-[#DE1D25] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-[#171817] shadow-lg"
              >
                <span>ENQUIRE FOR THIS STYLE</span>
                <span>→</span>
              </Link>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
