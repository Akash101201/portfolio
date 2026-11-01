"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

// Singleton IntersectionObserver shared across all Reveal components
let sharedObserver: IntersectionObserver | null = null;
const observerCallbacks = new WeakMap<Element, () => void>();

function getSharedObserver(): IntersectionObserver | null {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) return null;

  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            const cb = observerCallbacks.get(entry.target);
            if (cb) cb();
            sharedObserver?.unobserve(entry.target);
            observerCallbacks.delete(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -40px 0px" },
    );
  }

  return sharedObserver;
}

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = getSharedObserver();
    if (!observer) {
      el.classList.add("is-visible");
      return;
    }

    observer.observe(el);
    return () => {
      observer.unobserve(el);
      observerCallbacks.delete(el);
    };
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
