"use client";

import { useEffect, useState } from "react";

const KEY = "ecc-sidebar-collapsed";

/**
 * State collapse sidebar, dibagi semua varian sidebar dan dipersist di
 * localStorage supaya pilihan user konsisten antar halaman/reload.
 * Render awal selalu expanded agar tidak hydration mismatch.
 */
export function useSidebarCollapsed() {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    try {
      setCollapsed(localStorage.getItem(KEY) === "1");
    } catch {}
  }, []);

  const toggle = () =>
    setCollapsed((c) => {
      try {
        localStorage.setItem(KEY, c ? "0" : "1");
      } catch {}
      return !c;
    });

  return { collapsed, toggle };
}
