/**
 * Data statis halaman Land Bank & HGU (/aset-investasi/land-bank).
 * Periode acuan: 31 Mei 2026 (YTD). Angka induk dari group-baseline.ts
 * (land bank 1,081 jt ha, HGU habis <5 thn 212 rb ha) dan ast-core.ts.
 */

import type { AstInsight, AstKpi } from "./ast-core";
import { landBankSegments } from "./ast-core";

/* ── 1. KPI Strip ─────────────────────────────────────────────────── */

export const albKpi: AstKpi[] = [
  {
    label: "Total Land Bank",
    value: "1.081",
    sub: "Rb Ha · PalmCo 601 · Tebu 178 · PTPN I 302",
    delta: "-6,2 rb ha",
    trend: "down",
    deltaTone: "bad",
    compare: "vs Des 2025 (pelepasan TORA)",
    icon: "land",
    tone: "blue",
  },
  {
    label: "Bersertifikat Aktif",
    value: "78%",
    sub: "843 rb ha HGU/HGB berlaku",
    delta: "+2,1 ppt",
    trend: "up",
    deltaTone: "good",
    compare: "vs Des 2025",
    icon: "nilai",
    tone: "green",
  },
  {
    label: "Proses Perpanjangan",
    value: "149",
    sub: "Rb Ha · di 4 tahap ATR/BPN",
    delta: "+38 rb ha",
    trend: "up",
    deltaTone: "good",
    compare: "pengajuan baru YTD",
    icon: "hgu",
    tone: "teal",
  },
  {
    label: "Habis < 5 Tahun",
    value: "212",
    sub: "Rb Ha · puncak 2028 (68 rb ha)",
    delta: "19,6%",
    trend: "up",
    deltaTone: "bad",
    compare: "porsi land bank",
    icon: "hgu",
    tone: "amber",
  },
  {
    label: "Belum Bersertifikat",
    value: "42",
    sub: "Rb Ha · dominan eks-okupasi & enclave",
    delta: "-5,4 rb ha",
    trend: "down",
    deltaTone: "good",
    compare: "vs Des 2025",
    icon: "sengketa",
    tone: "red",
  },
];

/**
 * Rekonsiliasi status legal (rb ha): bersertifikat aktif 843,2 + proses
 * perpanjangan 149 + belum bersertifikat 42 + HGU berakhir dalam sengketa
 * berat 46,8 = 1.081.
 */
export const ALB_SENGKETA_BERAT_RB_HA = 46.8;

/* ── 2. Land Bank per Subholding × Peruntukan (stacked) ───────────── */

export interface LandUseRow {
  subholding: string;
  /** Areal tertanam termasuk TBM (rb ha). */
  tertanamRbHa: number;
  /** Emplasemen, pabrik, infrastruktur & idle (rb ha). */
  emplasemenLainRbHa: number;
  cadanganRbHa: number;
  sengketaRbHa: number;
}

/** Diturunkan dari landBankSegments — tiap baris menjumlah ke total segmen. */
export const landBySubholding: LandUseRow[] = landBankSegments.map((s) => ({
  subholding: s.subholding,
  tertanamRbHa: s.tertanamRbHa,
  emplasemenLainRbHa: +(s.totalRbHa - s.tertanamRbHa - s.cadanganRbHa - s.sengketaRbHa).toFixed(1),
  cadanganRbHa: s.cadanganRbHa,
  sengketaRbHa: s.sengketaRbHa,
}));

/* ── 3. HGU Expiry Timeline 2026–2035 ─────────────────────────────── */

export interface HguExpiry {
  tahun: string;
  /** Luas HGU berakhir pada tahun tsb (rb ha). */
  luasRbHa: number;
}

/** Jumlah 2026–2030 = 212 rb ha (selaras ASET.hguHabis5ThnRbHa); puncak 2028. */
export const hguExpiry: HguExpiry[] = [
  { tahun: "2026", luasRbHa: 22 },
  { tahun: "2027", luasRbHa: 45 },
  { tahun: "2028", luasRbHa: 68 },
  { tahun: "2029", luasRbHa: 48 },
  { tahun: "2030", luasRbHa: 29 },
  { tahun: "2031", luasRbHa: 34 },
  { tahun: "2032", luasRbHa: 41 },
  { tahun: "2033", luasRbHa: 38 },
  { tahun: "2034", luasRbHa: 52 },
  { tahun: "2035", luasRbHa: 44 },
];

export const hguExpiryNote =
  "Konsentrasi 2027–2029 (161 rb ha) berada di Regional 2 & 3; lead time perpanjangan HGU 18–30 bulan — pengajuan paling lambat H2 2026.";

/* ── 4. Status Funnel Perpanjangan/Sertifikasi ────────────────────── */

export interface StatusFunnelStage {
  tahap: string;
  /** Luas dalam tahap tsb (rb ha). */
  luasRbHa: number;
  note?: string;
}

/** Basis 191 rb ha = proses perpanjangan 149 + belum bersertifikat 42. */
export const statusFunnel: StatusFunnelStage[] = [
  { tahap: "Permohonan & Pengukuran Kadastral", luasRbHa: 191 },
  { tahap: "Sidang Panitia B", luasRbHa: 138 },
  { tahap: "SK Hak (Kementerian ATR/BPN)", luasRbHa: 96 },
  { tahap: "Sertifikat Terbit (YTD 2026)", luasRbHa: 41, note: "Termasuk 12 rb ha carry-over 2025." },
];

/* ── 5. Utilisasi Lahan (donut) ───────────────────────────────────── */

export interface LandUtilSlice {
  kategori: string;
  /** Porsi land bank (%), jumlah = 100. */
  pct: number;
  /** Luas (rb ha), jumlah = 1.081. */
  luasRbHa: number;
  note?: string;
}

/**
 * Basis fisik penggunaan lahan. Status hukum sengketa (82,4 rb ha) bersifat
 * lintas kategori: okupasi masuk "Okupasi & Idle", klaim pihak ketiga/
 * tumpang tindih izin sebagian besar berada di areal produktif.
 */
export const landUtilization: LandUtilSlice[] = [
  {
    kategori: "Produktif",
    pct: 81,
    luasRbHa: 875.6,
    note: "Tertanam menghasilkan 775,6 + emplasemen, pabrik & pendukung.",
  },
  { kategori: "TBM", pct: 8, luasRbHa: 86.5 },
  { kategori: "Cadangan", pct: 4, luasRbHa: 43.2 },
  { kategori: "Okupasi & Idle", pct: 7, luasRbHa: 75.7, note: "Okupasi 44,5 + idle non-produktif 31,2." },
];

/* ── 6. Tabel Lahan per Wilayah ───────────────────────────────────── */

export interface RegionalLandRow {
  wilayah: string;
  /** Total lahan (rb ha) — jumlah 9 baris = 1.081. */
  totalRbHa: number;
  /** Bersertifikat aktif (rb ha) — jumlah ≈ 843. */
  bersertifikatRbHa: number;
  /** HGU habis < 5 tahun (rb ha) — jumlah = 212. */
  habis5ThnRbHa: number;
  /** Areal sengketa (rb ha) — jumlah = 82,4. */
  sengketaRbHa: number;
}

export const regionalLand: RegionalLandRow[] = [
  { wilayah: "Regional 1 (Sumut)", totalRbHa: 86, bersertifikatRbHa: 68, habis5ThnRbHa: 18, sengketaRbHa: 6.8 },
  { wilayah: "Regional 2 (Sumut)", totalRbHa: 100, bersertifikatRbHa: 76, habis5ThnRbHa: 52, sengketaRbHa: 9.4 },
  { wilayah: "Regional 3 (Riau)", totalRbHa: 104, bersertifikatRbHa: 80, habis5ThnRbHa: 46, sengketaRbHa: 7.2 },
  { wilayah: "Regional 4 (Jambi–Sumbar)", totalRbHa: 74, bersertifikatRbHa: 58, habis5ThnRbHa: 20, sengketaRbHa: 5.4 },
  { wilayah: "Regional 5 (Sumsel–Lampung)", totalRbHa: 85, bersertifikatRbHa: 67, habis5ThnRbHa: 24, sengketaRbHa: 6.6 },
  { wilayah: "Regional 6 (Kalimantan)", totalRbHa: 92, bersertifikatRbHa: 70, habis5ThnRbHa: 16, sengketaRbHa: 5.0 },
  { wilayah: "Regional 7 (Sulawesi–Papua)", totalRbHa: 60, bersertifikatRbHa: 46, habis5ThnRbHa: 12, sengketaRbHa: 4.2 },
  { wilayah: "SGN (Lahan Tebu)", totalRbHa: 178, bersertifikatRbHa: 142, habis5ThnRbHa: 14, sengketaRbHa: 21.2 },
  { wilayah: "PTPN I", totalRbHa: 302, bersertifikatRbHa: 236, habis5ThnRbHa: 10, sengketaRbHa: 16.6 },
];

/* ── 7. Insights ──────────────────────────────────────────────────── */

export const albInsights: AstInsight[] = [
  {
    title: "Puncak Expiry 2028 = 68 Rb Ha",
    text: "Sepertiga expiry < 5 tahun jatuh di satu tahun (2028). Tanpa percepatan pengajuan H2 2026, antrean Panitia B akan menumpuk dan sebagian areal berisiko status quo.",
    tone: "red",
  },
  {
    title: "Funnel Macet di Panitia B",
    text: "Dari 191 rb ha dalam proses, 53 rb ha tertahan antara pengukuran dan sidang Panitia B — mayoritas karena tumpang tindih tata batas & klaim pihak ketiga.",
    tone: "amber",
  },
  {
    title: "PTPN I: Sertifikasi Tertinggi, Utilisasi Terendah",
    text: "PTPN I 78% bersertifikat namun menampung porsi idle terbesar grup — kandidat utama program optimalisasi aset (KSO, sewa, divestasi selektif).",
    tone: "blue",
  },
  {
    title: "Okupasi & Idle 7% Land Bank",
    text: "75,7 rb ha tidak menghasilkan; tiap 10 rb ha yang dipulihkan setara potensi pendapatan ± Rp 260 M/tahun pada yield rata-rata grup.",
    tone: "green",
  },
];
