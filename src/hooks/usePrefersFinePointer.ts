"use client";

import { useEffect, useState } from "react";

export function usePrefersFinePointer() {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => setOk(fine.matches && !motion.matches);
    update();

    fine.addEventListener("change", update);
    motion.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      motion.removeEventListener("change", update);
    };
  }, []);

  return ok;
}
