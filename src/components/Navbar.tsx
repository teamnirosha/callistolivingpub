import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CallistoLogo } from "./CallistoLogo";

const LINKS = [
  { label: "HOME", to: "/" },
  { label: "ABOUT", to: "/", hash: "about" },
  { label: "SERVICES", to: "/", hash: "services" },
  { label: "PROJECTS", to: "/", hash: "projects" },
  { label: "INTERIORS", to: "/", hash: "interiors" },
  { label: "GALLERY", to: "/experience" },
  { label: "CONTACT", to: "/", hash: "contact" },
];

interface NavbarProps {
  onEnquire?: () => void;
}

export function Navbar({ onEnquire }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-[#F3EFE7]/92 backdrop-blur-md border-b border-[#171817]/10 py-3 shadow-xs text-[#171817]"
          : "bg-gradient-to-b from-black/70 via-black/25 to-transparent py-4 text-white"
      }`}
    >
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 lg:px-12">
        {/* LEFT: Official Callisto Living Logo */}
        <Link to="/" className="group flex items-center transition-opacity hover:opacity-90">
          <CallistoLogo
            variant={scrolled ? "dark" : "light"}
            height={42}
            hideTaglineOnMobile={true}
          />
        </Link>

        {/* CENTER: Navigation Links */}
        <div className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              hash={link.hash}
              className={`relative py-1 text-[11px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 group ${
                scrolled
                  ? "text-[#171817]/80 hover:text-[#DE1D25]"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
              {/* Red Hover Underline */}
              <span
                className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#DE1D25] transition-all duration-300 group-hover:w-full"
              />
            </Link>
          ))}
        </div>

        {/* RIGHT: ENQUIRE NOW → Button */}
        <div className="hidden items-center lg:flex">
          {onEnquire && (
            <button
              type="button"
              onClick={onEnquire}
              className={`group inline-flex items-center gap-2 border px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer ${
                scrolled
                  ? "border-[#171817] bg-[#171817] text-[#F3EFE7] hover:bg-[#DE1D25] hover:border-[#DE1D25]"
                  : "border-white/40 bg-white/10 backdrop-blur-xs text-white hover:bg-white hover:text-[#171817] hover:border-white"
              }`}
            >
              <span>ENQUIRE NOW</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          )}
        </div>

        {/* MOBILE CONTROLS */}
        <div className="flex items-center gap-3 lg:hidden">
          {onEnquire && (
            <button
              type="button"
              onClick={onEnquire}
              className={`px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] border transition-colors ${
                scrolled
                  ? "border-[#171817] bg-[#171817] text-[#F3EFE7]"
                  : "border-white/50 bg-white/10 text-white"
              }`}
            >
              ENQUIRE
            </button>
          )}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-1.5 focus:outline-hidden"
            aria-label="Toggle Navigation Menu"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span
                className={`h-0.5 w-full transition-transform duration-300 ${
                  scrolled ? "bg-[#171817]" : "bg-white"
                } ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`h-0.5 w-full transition-opacity duration-300 ${
                  scrolled ? "bg-[#171817]" : "bg-white"
                } ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`h-0.5 w-full transition-transform duration-300 ${
                  scrolled ? "bg-[#171817]" : "bg-white"
                } ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* FULL-SCREEN MOBILE OVERLAY MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[90] flex flex-col justify-between bg-[#171817] px-8 pt-6 pb-10 text-[#F3EFE7] animate-in fade-in slide-in-from-top-4 duration-300 lg:hidden">
          <div className="flex items-center justify-between border-b border-[#F3EFE7]/15 pb-6">
            <CallistoLogo variant="light" height={36} hideTaglineOnMobile={true} />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs uppercase tracking-[0.2em] font-semibold text-[#DE1D25]"
            >
              CLOSE ✕
            </button>
          </div>

          <div className="flex flex-col gap-5 py-6">
            {LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                hash={link.hash}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-3xl tracking-wide text-[#F3EFE7] transition-colors hover:text-[#DE1D25]"
              >
                {link.label}
              </Link>
            ))}
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
                className="mt-5 flex w-full items-center justify-center gap-2 bg-[#DE1D25] py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-[#171817]"
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
