"use client";

import { useEffect, useState } from "react";

const KEY = "ecc-nav-mode";

export type NavMode = "ceo" | "fungsional";

/**
 * Mode navigasi sidebar utama: "ceo" (tujuh pintu keputusan) atau
 * "fungsional" (struktur dimensi lengkap). Dipersist di localStorage;
 * render awal selalu "fungsional" agar tidak hydration mismatch.
 */
export function useNavMode() {
  const [mode, setMode] = useState<NavMode>("fungsional");

  useEffect(() => {
    try {
      if (localStorage.getItem(KEY) === "ceo") setMode("ceo");
    } catch {}
  }, []);

  const set = (m: NavMode) => {
    setMode(m);
    try {
      localStorage.setItem(KEY, m);
    } catch {}
  };

  return { mode, set };
}
