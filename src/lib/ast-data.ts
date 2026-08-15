/**
 * Data statis halaman Aset & Investasi — Executive Overview (/aset-investasi).
 * Periode acuan: 31 Mei 2026 (YTD). Angka induk dari group-baseline.ts (ASET,
 * KEUANGAN) dan ast-core.ts (segmen land bank).
 */

import type { AstDecision, AstKpi } from "./ast-core";
import { landBankSegments } from "./ast-core";

/* ── 1. KPI Strip ─────────────────────────────────────────────────── */

export const astKpi: AstKpi[] = [
  {
    label: "Land Bank",
    value: "1,081 jt ha",
    sub: "Tertanam 862,1 rb ha · 3 subholding",
    delta: "-0,6%",
    trend: "down",
    deltaTone: "bad",
    compare: "vs Des 2025 (pelepasan TORA)",
    icon: "land",
    tone: "blue",
  },
  {
    label: "Areal Sengketa",
    value: "82,4 rb ha",
    sub: "7,6% land bank · 214 kasus",
    delta: "-6,8 rb ha",
    trend: "down",
    deltaTone: "good",
    compare: "diselesaikan YTD 2026",
    icon: "sengketa",
    tone: "red",
  },
  {
    label: "HGU Habis < 5 Thn",
    value: "212 rb ha",
    sub: "Puncak 2028 · 68 rb ha",
    delta: "149 rb ha",
    trend: "up",
    deltaTone: "good",
    compare: "sedang proses perpanjangan",
    icon: "hgu",
    tone: "amber",
  },
  {
    label: "Nilai Aset Tetap",
    value: "Rp 78,3 T",
    sub: "59,1% total aset Rp 132,4 T",
    delta: "+5,0%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Des 2025",
    icon: "nilai",
    tone: "green",
  },
  {
    label: "Utilisasi PKS",
    value: "78,4%",
    sub: "Terpasang 2.145 ton TBS/jam",
    delta: "-3,6 ppt",
    trend: "down",
    deltaTone: "bad",
    compare: "vs Target RKAP 82,0%",
    icon: "pabrik",
    tone: "teal",
  },
  {
    label: "Pipeline Investasi",
    value: "Rp 21,8 T",
    sub: "42 proyek aktif · 6 PSN",
    delta: "+Rp 2,4 T",
    trend: "up",
    deltaTone: "good",
    compare: "vs Des 2025",
    icon: "investasi",
    tone: "pink",
  },
];

/* ── 2. Asset Intelligence (3 narasi) ─────────────────────────────── */

export interface AstSignal {
  no: string;
  title: string;
  text: string;
  impactLabel: string;
  impactValue: string;
  tone: "red" | "amber" | "green";
}

export const astIntelCounts = [
  { label: "Critical Signals", value: 2, tone: "red" },
  { label: "Opportunities", value: 1, tone: "green" },
  { label: "Decisions Pending", value: 3, tone: "amber" },
] as { label: string; value: number; tone: "red" | "green" | "amber" }[];

export const assetIntelligence: AstSignal[] = [
  {
    no: "01",
    title: "Konsentrasi HGU Expiry 2027–2029",
    text: "161 rb ha HGU berakhir 2027–2029, terkonsentrasi di Regional 2 & 3 (98 rb ha). Proses perpanjangan butuh 18–30 bulan — keterlambatan berisiko status quo hukum & rawan okupasi.",
    impactLabel: "Areal Terekspos",
    impactValue: "161 rb ha",
    tone: "red",
  },
  {
    no: "02",
    title: "11 PG Rugi — Kandidat Rasionalisasi",
    text: "11 dari 17 PG merugi (drag margin SGN 14,1%). 5 PG masuk program revitalisasi Rp 3,1 T; 6 PG sisanya kandidat rasionalisasi/konsolidasi giling — keputusan portofolio dibutuhkan sebelum musim giling 2027.",
    impactLabel: "Kerugian Proyeksi FY",
    impactValue: "Rp -0,6 T",
    tone: "amber",
  },
  {
    no: "03",
    title: "Okupasi Naik di Sumut",
    text: "Areal okupasi Regional 1–2 (Sumut) naik ke 16,2 rb ha; tren meluas ke areal HGU yang menunggu perpanjangan. Putusan kasasi Padang Halaban yang inkracht membuka jendela enforcement H2 2026.",
    impactLabel: "Areal Okupasi Sumut",
    impactValue: "16,2 rb ha",
    tone: "red",
  },
];

export const astRecommendation =
  "Amankan legal dasar aset: prioritaskan perpanjangan HGU 2027–2029, eksekusi enforcement Sumut selagi ada putusan inkracht, dan putuskan portofolio 6 PG non-revitalisasi sebelum RKAP 2027.";

/* ── 3. Komposisi Land Bank per Subholding (stacked) ──────────────── */

export interface LandCompositionRow {
  subholding: string;
  /** Tertanam menghasilkan (rb ha). */
  menghasilkanRbHa: number;
  tbmRbHa: number;
  cadanganRbHa: number;
  sengketaRbHa: number;
  /** Emplasemen, pabrik, infrastruktur, idle & lain (rb ha). */
  lainRbHa: number;
}

/** Diturunkan langsung dari landBankSegments — jumlah baris = total segmen. */
export const landBankComposition: LandCompositionRow[] = landBankSegments.map((s) => ({
  subholding: s.subholding,
  menghasilkanRbHa: +(s.tertanamRbHa - s.tbmRbHa).toFixed(1),
  tbmRbHa: s.tbmRbHa,
  cadanganRbHa: s.cadanganRbHa,
  sengketaRbHa: s.sengketaRbHa,
  lainRbHa: +(s.totalRbHa - s.tertanamRbHa - s.cadanganRbHa - s.sengketaRbHa).toFixed(1),
}));

/* ── 4. Asset Risk Radar (6 sumbu) ────────────────────────────────── */

export interface AstRiskAxis {
  axis: string;
  /** Tingkat risiko saat ini (0-100). */
  level: number;
  /** Ambang toleransi. */
  tolerance: number;
}

export const assetRiskRadar: AstRiskAxis[] = [
  { axis: "Legal Lahan", level: 76, tolerance: 55 },
  { axis: "Umur Tanaman", level: 68, tolerance: 60 },
  { axis: "Kondisi Pabrik", level: 64, tolerance: 60 },
  { axis: "Idle Asset", level: 55, tolerance: 50 },
  { axis: "Eksekusi Proyek", level: 58, tolerance: 55 },
  { axis: "Lingkungan & Perizinan", level: 46, tolerance: 60 },
];

/* ── 5. Tren Nilai Aset Tetap (5 tahun) ───────────────────────────── */

export interface AssetValuePoint {
  tahun: string;
  /** Nilai buku aset tetap (Rp T); 2026 = posisi 31 Mei. */
  asetTetapRpT: number;
  /** Capex tahun berjalan (Rp T); 2026 = RKAP FY 9,6. */
  capexRpT: number;
}

export const assetValueTrend: AssetValuePoint[] = [
  { tahun: "2022", asetTetapRpT: 61.4, capexRpT: 5.2 },
  { tahun: "2023", asetTetapRpT: 66.2, capexRpT: 6.1 },
  { tahun: "2024", asetTetapRpT: 70.8, capexRpT: 7.4 },
  { tahun: "2025", asetTetapRpT: 74.6, capexRpT: 8.8 },
  { tahun: "2026*", asetTetapRpT: 78.3, capexRpT: 9.6 },
];

export const assetValueNote = "*2026 = posisi 31 Mei; capex 2026 = RKAP FY (realisasi YTD Rp 3,08 T).";

/* ── 6. Utilization Snapshot ──────────────────────────────────────── */

export interface UtilizationRow {
  fasilitas: string;
  utilisasiPct: number;
  targetPct: number;
  note?: string;
}

/** Selaras pabrik-data utilisasiByJenis; refinery dari ast-core facilitySummary. */
export const utilizationSnapshot: UtilizationRow[] = [
  { fasilitas: "PKS (36 unit)", utilisasiPct: 78.4, targetPct: 82.0 },
  {
    fasilitas: "PG (17 unit)",
    utilisasiPct: 71.2,
    targetPct: 85.0,
    note: "Bulan pertama musim giling — proyeksi puncak giling 82%.",
  },
  { fasilitas: "Refinery & Hilir (4 unit)", utilisasiPct: 72.0, targetPct: 85.0 },
  { fasilitas: "Pabrik Karet (9 unit)", utilisasiPct: 64.8, targetPct: 75.0 },
  { fasilitas: "Pabrik Teh (5 unit)", utilisasiPct: 70.6, targetPct: 78.0 },
];

/* ── 7. Strategic Alignment (target FY dimensi aset) ──────────────── */

export interface AstAlignmentTarget {
  label: string;
  realisasi: string;
  targetFy: string;
  /** Progress terhadap target FY (%). */
  progressPct: number;
  /** Prorata waktu berjalan (%), pembanding progress. */
  prorataPct: number;
  tone: "good" | "warn" | "bad";
}

export const astAlignment: AstAlignmentTarget[] = [
  {
    label: "Replanting 2026",
    realisasi: "4.180 ha",
    targetFy: "12.500 ha",
    progressPct: 33.4,
    prorataPct: 41.7,
    tone: "warn",
  },
  {
    label: "Penyelesaian Sengketa",
    realisasi: "6,8 rb ha",
    targetFy: "15 rb ha",
    progressPct: 45.3,
    prorataPct: 41.7,
    tone: "good",
  },
  {
    label: "Divestasi Aset Non-Inti",
    realisasi: "Rp 0,4 T",
    targetFy: "Rp 1,2 T",
    progressPct: 33.3,
    prorataPct: 41.7,
    tone: "warn",
  },
  {
    label: "Realisasi Capex",
    realisasi: "Rp 3,08 T",
    targetFy: "Rp 9,6 T",
    progressPct: 32.1,
    prorataPct: 41.7,
    tone: "warn",
  },
];

/* ── 8. BOD Decision Center ───────────────────────────────────────── */

export const astDecisions: AstDecision[] = [
  {
    title: "Persetujuan Paket Divestasi Non-Inti",
    impact: "Medium Impact",
    tone: "amber",
    context:
      "Realisasi divestasi Rp 0,4 T dari target FY Rp 1,2 T; paket aset non-inti Rp 0,8 T (lahan idle + 54 bangunan) sudah selesai penilaian KJPP.",
    rekomendasi:
      "Setujui paket divestasi Rp 0,8 T ke tahap transaksi mengikuti kaidah governance BUMN/Danantara.",
    due: "Q3 2026",
  },
  {
    title: "Perpanjangan HGU Prioritas 2027–2029",
    impact: "High Impact",
    tone: "red",
    context:
      "161 rb ha HGU berakhir 2027–2029 (konsentrasi Regional 2 & 3); lead time perpanjangan 18–30 bulan dan sebagian areal rawan okupasi.",
    rekomendasi:
      "Setujui anggaran percepatan sertifikasi & perpanjangan Rp 280 M + task force HGU bersama ATR/BPN.",
    due: "Jul 2026",
  },
  {
    title: "Go/No-Go Bioetanol SGN",
    impact: "High Impact",
    tone: "red",
    context:
      "FID proyek bioetanol Rp 2,8 T (PSN) menunggu keputusan; kepastian pasokan molases & offtake mandat E5 menjadi prasyarat bankability.",
    rekomendasi:
      "Putuskan FID dengan syarat kontrak offtake minimal 70% kapasitas & penguatan pasokan tebu 5 tahun.",
    due: "Agu 2026",
  },
];

/* ── 9. Alerts & Notifications ────────────────────────────────────── */

export interface AstAlert {
  title: string;
  text: string;
  time: string;
  tone: "red" | "amber" | "green" | "blue";
}

export const astAlerts: AstAlert[] = [
  {
    title: "Klaster HGU Riau Masuk Jendela Kritis",
    text: "28 rb ha HGU Regional 3 berakhir Q1 2028 — sisa waktu proses < 20 bulan.",
    time: "Today",
    tone: "red",
  },
  {
    title: "Kasasi Padang Halaban Dimenangkan",
    text: "Putusan inkracht atas 3,9 rb ha; tim enforcement disiapkan untuk eksekusi H2 2026.",
    time: "2 hari yang lalu",
    tone: "green",
  },
  {
    title: "Kondisi Boiler PG Wonolangan Kritis",
    text: "Indeks kondisi 48/100; risiko berhenti giling di puncak musim — opsi konsolidasi giling disiapkan.",
    time: "3 hari yang lalu",
    tone: "amber",
  },
  {
    title: "KSO Kawasan Sei Mangkei Ditandatangani",
    text: "Nilai kontrak Rp 680 M (30 tahun) — kontributor terbesar pendapatan kemitraan 2026.",
    time: "5 hari yang lalu",
    tone: "blue",
  },
];

/* ── 10. Insight & Rekomendasi ────────────────────────────────────── */

export interface AstRekomendasi {
  insight: string;
  rekomendasi: string;
}

export const astInsights: AstRekomendasi[] = [
  {
    insight:
      "Nilai aset tetap tumbuh Rp 16,9 T dalam 4 tahun, tetapi ROA baru 4,6% — pertumbuhan aset belum diimbangi produktivitas (asset turnover 0,44x).",
    rekomendasi:
      "Kaitkan persetujuan capex baru dengan target utilisasi & ROA per unit; prioritaskan debottlenecking sebelum penambahan kapasitas.",
  },
  {
    insight:
      "Sengketa 82,4 rb ha (7,6% land bank) menahan nilai jaminan & compliance EUDR; 54% berupa okupasi yang cenderung permanen bila dibiarkan > 5 tahun.",
    rekomendasi:
      "Kombinasikan enforcement selektif (putusan inkracht) dengan konversi kemitraan bagi okupan produktif jangka panjang.",
  },
  {
    insight:
      "Pipeline investasi Rp 21,8 T terkonsentrasi di hilirisasi (38%), namun 29% proyek berjalan di bawah kurva-S rencana.",
    rekomendasi:
      "Terapkan gate review kuartalan dengan opsi realokasi dana dari proyek terlambat ke proyek on-track ber-IRR tinggi.",
  },
];
