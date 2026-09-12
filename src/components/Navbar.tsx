import { Link } from "@tanstack/react-router";
import React, { useEffect, useState } from "react";
import { CallistoLogo } from "./CallistoLogo";

const LINKS = [
  { id: "home", label: "HOME", to: "/", hash: "" },
  { id: "about", label: "ABOUT", to: "/", hash: "about" },
  { id: "services", label: "SERVICES", to: "/", hash: "services" },
  { id: "projects", label: "PROJECTS", to: "/", hash: "projects" },
  { id: "gallery", label: "GALLERY", to: "/", hash: "gallery" },
  { id: "contact", label: "CONTACT", to: "/", hash: "contact" },
];

interface NavbarProps {
  onEnquire?: () => void;
}

export function Navbar({ onEnquire }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect active section via pathname, hash, and scrollspy
  useEffect(() => {
    if (typeof window === "undefined") return;

    const determineActive = () => {
      const pathname = window.location.pathname;
      const hash = window.location.hash.replace("#", "");

      if (pathname === "/gallery" || pathname === "/Gallary") {
        setActiveId("gallery");
        return;
      }

      if (pathname.startsWith("/projects/")) {
        setActiveId("projects");
        return;
      }

      if (pathname === "/" || pathname === "") {
        const scrollY = window.scrollY;

        // Top of page
        if (scrollY < 180 && !hash) {
          setActiveId("home");
          return;
        }

        // Ordered from bottom of page upwards so closest active section wins
        const sectionOrder = ["contact", "about", "services", "gallery", "projects", "home"];
        const navOffset = 100;
        const triggerPoint = scrollY + navOffset + 80;

        for (const secId of sectionOrder) {
          const el = document.getElementById(secId);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (triggerPoint >= top && triggerPoint < top + height) {
              setActiveId(secId);
              return;
            }
          }
        }

        if (hash && ["about", "services", "projects", "gallery", "contact", "home"].includes(hash)) {
          setActiveId(hash);
        } else if (scrollY < 300) {
          setActiveId("home");
        }
      }
    };

    determineActive();
    window.addEventListener("scroll", determineActive, { passive: true });
    window.addEventListener("hashchange", determineActive);
    window.addEventListener("popstate", determineActive);

    return () => {
      window.removeEventListener("scroll", determineActive);
      window.removeEventListener("hashchange", determineActive);
      window.removeEventListener("popstate", determineActive);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent, to: string = "/", hash?: string, linkId?: string) => {
    setMobileMenuOpen(false);
    const targetId = linkId || (hash ? hash : "home");
    setActiveId(targetId);

    const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";

    if (hash) {
      if (currentPath === "/") {
        const el = document.getElementById(hash);
        if (el) {
          e.preventDefault();
          window.history.pushState(null, "", `/#${hash}`);
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }
    } else if (to === "/" && currentPath === "/") {
      e.preventDefault();
      window.history.pushState(null, "", "/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveId("home");
      return;
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 bg-[#F3EFE7]/95 backdrop-blur-md border-b border-[#171817]/10 text-[#171817] ${
        scrolled ? "py-3 shadow-md" : "py-4 shadow-xs"
      }`}
    >
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 lg:px-12">
        {/* LEFT: Official Callisto Living Logo */}
        <Link
          to="/"
          onClick={(e) => handleNavClick(e, "/", undefined, "home")}
          className="group flex items-center transition-opacity hover:opacity-90"
        >
          <CallistoLogo
            variant="dark"
            height={42}
            hideTaglineOnMobile={true}
          />
        </Link>

        {/* CENTER: Navigation Links with Active Indicators */}
        <div className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => {
            const isActive = activeId === link.id;
            return (
              <Link
                key={link.id}
                to={link.to}
                {...(link.hash ? { hash: link.hash } : {})}
                onClick={(e) => handleNavClick(e, link.to, link.hash, link.id)}
                className={`relative py-2 text-[11px] uppercase tracking-[0.2em] transition-all duration-300 group flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? "text-[#DE1D25] font-bold"
                    : "text-[#171817]/75 font-semibold hover:text-[#DE1D25]"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {/* Active Indicator Pulse Dot */}
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#DE1D25] animate-pulse shrink-0" />
                )}
                <span>{link.label}</span>
                {/* Red Underline Indicator (Solid when active, expands on hover) */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#DE1D25] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* RIGHT: ENQUIRE NOW → Button */}
        <div className="hidden items-center lg:flex">
          {onEnquire && (
            <button
              type="button"
              onClick={onEnquire}
              className="group inline-flex items-center gap-2 border border-[#171817] bg-[#171817] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F3EFE7] transition-all duration-300 hover:bg-[#DE1D25] hover:border-[#DE1D25] hover:text-white cursor-pointer shadow-xs"
            >
              <span>ENQUIRE NOW</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          )}
        </div>

        {/* MOBILE CONTROLS */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-1.5 focus:outline-hidden cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span
                className={`h-0.5 w-full bg-[#171817] transition-transform duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-[#171817] transition-opacity duration-300 ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-0.5 w-full bg-[#171817] transition-transform duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* FULL-SCREEN MOBILE OVERLAY MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[200] flex flex-col justify-between bg-[#171817] px-6 sm:px-8 pt-6 pb-10 text-[#F3EFE7] animate-in fade-in duration-200 lg:hidden w-screen h-screen overflow-y-auto">
          <div className="flex items-center justify-between border-b border-[#F3EFE7]/15 pb-6">
            <CallistoLogo variant="light" height={36} hideTaglineOnMobile={true} />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs uppercase tracking-[0.2em] font-semibold text-[#DE1D25] cursor-pointer px-2 py-1 rounded-xs border border-[#DE1D25]/30 hover:bg-[#DE1D25]/10"
            >
              CLOSE ✕
            </button>
          </div>

          <div className="flex flex-col gap-5 py-6">
            {LINKS.map((link) => {
              const isActive = activeId === link.id;
              return (
                <Link
                  key={link.id}
                  to={link.to}
                  {...(link.hash ? { hash: link.hash } : {})}
                  onClick={(e) => handleNavClick(e, link.to, link.hash, link.id)}
                  className={`flex items-center justify-between font-display text-2xl sm:text-3xl tracking-wide transition-all duration-300 py-2.5 border-b border-[#F3EFE7]/10 ${
                    isActive
                      ? "text-[#DE1D25] font-bold border-l-4 border-l-[#DE1D25] pl-4 bg-white/5"
                      : "text-[#F3EFE7]/80 hover:text-[#DE1D25] pl-2"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive ? (
                    <span className="text-[10px] tracking-[0.2em] font-sans uppercase font-bold text-white bg-[#DE1D25] px-2.5 py-0.5 rounded-xs">
                      ACTIVE
                    </span>
                  ) : (
                    <span className="text-xs text-[#F3EFE7]/30">→</span>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="border-t border-[#F3EFE7]/15 pt-6">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#A89F91]">
              CALLISTO LIVING STUDIO
            </p>
            <p className="mt-1 text-xs text-[#F3EFE7]/70">
              DESIGN | PLAN | LIVE BETTER
            </p>

            {onEnquire && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onEnquire();
                }}
                className="mt-5 flex w-full items-center justify-center gap-2 bg-[#DE1D25] py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-[#171817] cursor-pointer shadow-lg"
              >
                <span>ENQUIRE NOW</span>
                <span>→</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
