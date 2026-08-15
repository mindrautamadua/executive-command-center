"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  SUBHOLDING_BY_ID,
  SUBHOLDINGS,
  type SubholdingDef,
  type SubholdingId,
} from "@/lib/subholding";

const STORAGE_KEY = "ecc-subholding";

type SubholdingContextValue = {
  /** Subholding aktif; "all" = konsolidasi grup. */
  active: SubholdingId;
  def: SubholdingDef;
  isFiltered: boolean;
  setActive: (id: SubholdingId) => void;
};

const SubholdingContext = createContext<SubholdingContextValue | null>(null);

function isValid(value: string | null): value is SubholdingId {
  return !!value && SUBHOLDINGS.some((s) => s.id === value);
}

/**
 * Menyimpan pilihan subholding untuk seluruh aplikasi. Pilihan bertahan antar
 * halaman dan antar sesi lewat localStorage, sehingga Direksi dapat menelusuri
 * satu subholding melintasi semua dimensi tanpa memilih ulang.
 */
export function SubholdingProvider({ children }: { children: React.ReactNode }) {
  const [active, setActiveState] = useState<SubholdingId>("all");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isValid(stored)) setActiveState(stored);
    } catch {
      // localStorage bisa diblokir (mode privat) — abaikan.
    }
  }, []);

  const setActive = useCallback((id: SubholdingId) => {
    setActiveState(id);
    try {
      window.localStorage.setItem(STORAGE_KEY, id);
    } catch {
      // abaikan
    }
  }, []);

  const value = useMemo(
    () => ({
      active,
      def: SUBHOLDING_BY_ID[active],
      isFiltered: active !== "all",
      setActive,
    }),
    [active, setActive],
  );

  return <SubholdingContext.Provider value={value}>{children}</SubholdingContext.Provider>;
}

export function useSubholding() {
  const ctx = useContext(SubholdingContext);
  if (!ctx) throw new Error("useSubholding harus dipakai di dalam SubholdingProvider");
  return ctx;
}
