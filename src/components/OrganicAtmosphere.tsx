"use client";

import { useEffect, useRef, useState } from "react";

const SECTIONS = ["top", "about", "projects", "experience", "skills", "contact"] as const;

function prefersFinePointer() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function OrganicAtmosphere() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [currentSection, setCurrentSection] = useState<(typeof SECTIONS)[number]>("top");
  const washRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const scrollTarget = useRef(0);
  const scrollCurrent = useRef(0);
  const activeRef = useRef(false);

  useEffect(() => {
    const nodes = SECTIONS.map((id) => document.getElementById(id)).filter(
      (node): node is HTMLElement => node !== null,
    );
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const id = visible?.target.id;
        if (id && SECTIONS.includes(id as (typeof SECTIONS)[number])) {
          setCurrentSection(id as (typeof SECTIONS)[number]);
        }
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0.15, 0.4, 0.6] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fine = prefersFinePointer();
    const reduce = prefersReducedMotion();
    requestAnimationFrame(() => {
      setEnabled(fine && !reduce);
    });

    if (reduce) {
      document.documentElement.style.setProperty("--scroll-progress", "0");
      document.documentElement.style.setProperty("--tide-x", "0px");
      document.documentElement.style.setProperty("--tide-y", "0px");
      return;
    }

    let isRunning = false;
    let cachedPathLength = 0;
    if (pathRef.current) {
      cachedPathLength = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = `${cachedPathLength}`;
    }

    let raf = 0;
    const tick = () => {
      if (document.hidden) {
        isRunning = false;
        return;
      }

      const ease = 0.12;
      const dx = target.current.x - current.current.x;
      const dy = target.current.y - current.current.y;
      const ds = scrollTarget.current - scrollCurrent.current;

      current.current.x += dx * ease;
      current.current.y += dy * ease;
      scrollCurrent.current += ds * 0.08;

      const progress = scrollCurrent.current;
      const tideX = (progress - 0.5) * 48;
      const tideY = Math.sin(progress * Math.PI * 2) * 28;

      document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(4));
      document.documentElement.style.setProperty("--tide-x", `${tideX.toFixed(2)}px`);
      document.documentElement.style.setProperty("--tide-y", `${tideY.toFixed(2)}px`);
      document.documentElement.style.setProperty("--pointer-x", `${current.current.x.toFixed(1)}px`);
      document.documentElement.style.setProperty("--pointer-y", `${current.current.y.toFixed(1)}px`);

      if (washRef.current) {
        washRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (pathRef.current && cachedPathLength > 0) {
        pathRef.current.style.strokeDashoffset = `${cachedPathLength * (1 - progress)}`;
      }

      // If converged, stop loop until next event to keep CPU at 0%
      if (Math.abs(dx) < 0.2 && Math.abs(dy) < 0.2 && Math.abs(ds) < 0.0008) {
        current.current.x = target.current.x;
        current.current.y = target.current.y;
        scrollCurrent.current = scrollTarget.current;
        isRunning = false;
        return;
      }

      raf = requestAnimationFrame(tick);
    };

    const scheduleTick = () => {
      if (!isRunning && !document.hidden) {
        isRunning = true;
        raf = requestAnimationFrame(tick);
      }
    };

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollTarget.current = max > 0 ? window.scrollY / max : 0;
      scheduleTick();
    };

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (!activeRef.current) {
        activeRef.current = true;
        current.current.x = e.clientX;
        current.current.y = e.clientY;
        setActive(true);
      }
      scheduleTick();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    if (fine) {
      window.addEventListener("mousemove", onMove, { passive: true });
    }

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        isRunning = false;
      } else {
        scheduleTick();
      }
    };

    document.addEventListener("visibilitychange", onVisibility);
    scheduleTick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <>
      <div aria-hidden="true" className="film-grain" />

      <svg
        aria-hidden="true"
        className="pointer-events-none fixed top-[12vh] bottom-[12vh] left-3 z-40 hidden h-[76vh] w-6 opacity-70 lg:block"
        viewBox="0 0 24 400"
        fill="none"
      >
        <path
          d="M12 8 C 4 60, 20 120, 12 180 S 4 300, 12 392"
          stroke="color-mix(in oklab, var(--color-tide) 35%, transparent)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          ref={pathRef}
          d="M12 8 C 4 60, 20 120, 12 180 S 4 300, 12 392"
          stroke="url(#tide-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ transition: "none" }}
        />
        <defs>
          <linearGradient id="tide-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-tide)" />
            <stop offset="55%" stopColor="var(--color-sea)" />
            <stop offset="100%" stopColor="var(--color-bloom)" />
          </linearGradient>
        </defs>
      </svg>

      <nav
        aria-label="Section progress"
        className="pointer-events-none fixed top-1/2 right-3 z-40 hidden -translate-y-1/2 flex-col gap-2 lg:flex"
      >
        {SECTIONS.map((id) => {
          const isCurrent = currentSection === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              aria-current={isCurrent ? "true" : undefined}
              className={`pointer-events-auto size-2.5 transition-transform duration-500 hover:scale-125 focus-organic ${
                isCurrent
                  ? "scale-125 bg-[var(--accent)]"
                  : "bg-[color-mix(in_oklab,var(--color-tide)_40%,transparent)] hover:bg-[var(--accent)]"
              }`}
              style={{ borderRadius: "45% 55% 50% 50%" }}
              aria-label={`Jump to ${id === "top" ? "introduction" : id}`}
            />
          );
        })}
      </nav>

      {enabled && (
        <div
          ref={washRef}
          aria-hidden="true"
          className={`cursor-wash ${active ? "opacity-70" : "opacity-0"}`}
        />
      )}
    </>
  );
}
