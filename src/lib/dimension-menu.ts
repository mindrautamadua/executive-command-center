import type { LucideIcon } from "lucide-react";

/**
 * Tipe menu bersama untuk sidebar dimensi non-SDM (Keuangan, Produksi,
 * Pemasaran, Strategi, Aset, ESG, Risiko). Bentuknya sengaja identik dengan
 * SdmMenuItem/SdmMenuSection di sdm-menu.ts agar pola menunya seragam.
 */
export interface DimensionMenuItem {
  label: string;
  icon: LucideIcon;
  href?: string;
  /** Badge kecil di kanan label, mis. "AI" atau "EU". */
  badge?: string;
}

export interface DimensionMenuSection {
  /** Judul section; kosong = tanpa judul (mis. Executive Overview). */
  title?: string;
  items: DimensionMenuItem[];
}

/**
 * Blok data-trust per dimensi: dipakai footer DimensionSidebar dan
 * DataTrustStrip (src/components/hc/DataTrustStrip.tsx menerima shape ini
 * lewat prop `data`).
 */
export interface DimensionDataTrust {
  asOf: string;
  lastRefresh: string;
  coverage: string;
  quality: string;
  sources: string[];
}
