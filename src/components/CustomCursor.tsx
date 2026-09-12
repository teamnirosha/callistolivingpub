import { useEffect, useRef } from "react";
import { useApp } from "@/lib/store";

const LABEL: Record<string, string> = {
  default: "",
  explore: "Explore",
  view: "View",
  open: "Open",
  drag: "Drag",
};

export function CustomCursor() {
  const ring = useRef<HTMLDivElement>(null);
  const mode = useApp((s) => s.cursor);
  const label = LABEL[mode] || "";

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (!label) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const loop = () => {
      rx += (x - rx) * 0.35;
      ry += (y - ry) * 0.35;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [label]);

  if (!label) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] hidden md:block">
      <div
        ref={ring}
        className="absolute -ml-[42px] -mt-[42px] flex h-[84px] w-[84px] items-center justify-center rounded-full border border-[#DE1D25]/70 bg-[#171817]/75 backdrop-blur-sm shadow-xl transition-transform duration-75"
      >
        <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#F3EFE7]">
          {label}
        </span>
      </div>
    </div>
  );
}
