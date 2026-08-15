/**
 * Baseline turunan dimensi Aset & Investasi — data-trust sidebar, tipe bersama,
 * segmen land bank & ringkasan fasilitas produksi yang dipakai lintas halaman
 * /aset-investasi/*.
 * Periode acuan: 31 Mei 2026 (YTD). Angka induk dari group-baseline.ts.
 * Catatan konsistensi: angka pabrik/replanting/yield mengikuti baseline yang
 * sama dengan dimensi Produksi (36 PKS, 17 PG, dst.) — sudut pandang berbeda
 * (aset vs operasi), angka sama.
 */

import type { DimensionDataTrust } from "./dimension-menu";
import { ASET, BASELINE_TRUST, PRODUKSI } from "./group-baseline";

/* ── Data Trust ───────────────────────────────────────────────────── */

export const astDataTrust: DimensionDataTrust = {
  asOf: BASELINE_TRUST.asOf,
  lastRefresh: BASELINE_TRUST.lastRefresh,
  coverage: "93,2%",
  quality: "92,6%",
  sources: ["SIMAK Aset", "ATR/BPN", "e-Proyek", "SAP AA"],
};

/* ── Tipe bersama dimensi Aset & Investasi ────────────────────────── */

/** Insight naratif kecil di footer kartu — dipakai lintas halaman aset. */
export interface AstInsight {
  title: string;
  text: string;
  tone: "red" | "amber" | "green" | "blue";
}

export type AstRiskLevel = "Ekstrem" | "Tinggi" | "Sedang" | "Rendah";

/** Item BOD Decision Center — dipakai overview, sengketa, investasi & optimalisasi. */
export interface AstDecision {
  title: string;
  impact: "High Impact" | "Medium Impact" | "Low Impact";
  tone: "red" | "amber" | "green";
  /** Konteks singkat masalah/peluang. */
  context: string;
  /** Rekomendasi tindakan untuk BOD. */
  rekomendasi: string;
  due: string;
}

/** KPI strip dimensi aset (mirror KeuKpi/ProdKpi). */
export interface AstKpi {
  label: string;
  value: string;
  sub: string;
  delta: string;
  trend: "up" | "down";
  deltaTone: "good" | "bad";
  compare: string;
  icon: "land" | "sengketa" | "hgu" | "nilai" | "pabrik" | "investasi";
  tone: "blue" | "green" | "teal" | "amber" | "red" | "pink";
}

/* ── Land Bank per Subholding ─────────────────────────────────────── */

export interface LandBankSegment {
  subholding: "PalmCo" | "SGN (Lahan Tebu)" | "PTPN I";
  /** Total penguasaan lahan (rb ha) — jumlah 3 segmen = 1.081 (1,081 jt ha). */
  totalRbHa: number;
  /** Areal tertanam termasuk TBM (rb ha); PalmCo = 508,7 selaras baseline. */
  tertanamRbHa: number;
  /** Bagian tertanam yang masih TBM (rb ha) — subset tertanamRbHa. */
  tbmRbHa: number;
  /** Cadangan belum tertanam (rb ha). */
  cadanganRbHa: number;
  /** Areal berstatus sengketa/okupasi (rb ha) — jumlah = 82,4. */
  sengketaRbHa: number;
}

/**
 * Selisih total − (tertanam + cadangan + sengketa) = emplasemen, pabrik,
 * infrastruktur, idle & areal lain. TBM grup = 61,0 (sawit, selaras
 * agro-data ageProfile) + 12,4 (tebu) + 13,1 (PTPN I) = 86,5 rb ha.
 */
export const landBankSegments: LandBankSegment[] = [
  {
    subholding: "PalmCo",
    totalRbHa: 601,
    tertanamRbHa: PRODUKSI.sawitTertanamRbHa, // 508,7
    tbmRbHa: 61.0,
    cadanganRbHa: 19.3,
    sengketaRbHa: 44.6,
  },
  {
    subholding: "SGN (Lahan Tebu)",
    totalRbHa: 178,
    tertanamRbHa: 146.0,
    tbmRbHa: 12.4,
    cadanganRbHa: 8.4,
    sengketaRbHa: 21.2,
  },
  {
    subholding: "PTPN I",
    totalRbHa: 302,
    tertanamRbHa: 207.4,
    tbmRbHa: 13.1,
    cadanganRbHa: 15.5,
    sengketaRbHa: 16.6,
  },
];

/** 1.081 rb ha = 1,081 jt ha (ASET.landBankJtHa). */
export const LAND_BANK_TOTAL_RB_HA = ASET.landBankJtHa * 1000;
export const SENGKETA_TOTAL_RB_HA = ASET.sengketaRbHa; // 82,4
export const SENGKETA_PCT_LAND_BANK = 7.6; // 82,4 / 1.081

/* ── Ringkasan Fasilitas Produksi ─────────────────────────────────── */

export interface FacilitySummary {
  jenis: string;
  unit: number;
  kapasitas: string;
  note?: string;
}

/**
 * 67 pabrik baseline = 36 PKS + 17 PG + 9 karet + 5 teh (64 aktif).
 * Kapasitas PKS: terpasang 2.145 ton TBS/jam (selaras pabrik-data), efektif
 * setelah derating pabrik tua ±1.905 ton TBS/jam; utilisasi 78,4% dihitung
 * terhadap kapasitas terpasang. 4 refinery/hilir di luar 67 pabrik baseline.
 */
export const facilitySummary: FacilitySummary[] = [
  {
    jenis: "PKS (Sawit)",
    unit: PRODUKSI.pks, // 36
    kapasitas: "2.145 ton TBS/jam terpasang",
    note: "Kapasitas efektif ±1.905 ton TBS/jam setelah derating pabrik tua.",
  },
  {
    jenis: "PG (Gula)",
    unit: PRODUKSI.pg, // 17
    kapasitas: "82,5 rb TCD",
    note: "11 dari 17 PG merugi — kandidat revitalisasi/rasionalisasi.",
  },
  {
    jenis: "Pabrik Karet",
    unit: PRODUKSI.pabrikKaret, // 9
    kapasitas: "412 ton KK/hari",
  },
  {
    jenis: "Pabrik Teh",
    unit: PRODUKSI.pabrikTeh, // 5
    kapasitas: "186 ton pucuk/hari",
  },
  {
    jenis: "Refinery & Hilir",
    unit: 4,
    kapasitas: "1,9 jt ton CPO/tahun",
    note: "Di luar 67 pabrik baseline; utilisasi 72%.",
  },
];
