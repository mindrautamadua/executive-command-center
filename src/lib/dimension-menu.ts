import type { LucideIcon } from "lucide-react";
import type { SubholdingId } from "@/lib/subholding";

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
  /**
   * Diisi bila seluruh isi halaman hanya milik satu subholding (mis. produktivitas
   * kebun sawit = PalmCo). Dipakai sidebar untuk meredupkan menu yang di luar
   * cakupan filter aktif, dan oleh ScopeGuard untuk mengganti kartu-kartu kosong
   * dengan satu keterangan tingkat halaman.
   */
  owner?: Exclude<SubholdingId, "all">;
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
  /**
   * Nama domain data (Korporat/Strategi/Keuangan/Risiko/Human Capital).
   * Skor quality bersifat per-domain — label ini mencegah skor domain
   * terbaca sebagai satu "Group Data Trust Index".
   */
  domain?: string;
  /**
   * Rincian dimensi kualitas milik domain ini. Tanpa ini strip memakai
   * rincian default HC — yang membuat semua domain tampak identik.
   */
  qualityBreakdown?: { label: string; value: string }[];
}
