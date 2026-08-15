/**
 * Data statis dimensi Pengadaan (/pengadaan).
 * Periode acuan: Mei 2026 (YTD), data per 31 Mei 2026.
 *
 * File ini memuat halaman Executive Overview, Analitik Belanja, dan
 * Kategori & Komoditas; empat halaman lain (Manajemen Vendor, Kontrak
 * Pengadaan, Proses & Tender, TKDN & Integritas) ada di pgd-data-detail.ts.
 * Angka kanonik mengutip src/lib/group-baseline.ts (konstanta PENGADAAN).
 *
 * Jangkar konsistensi lintas dimensi:
 * - ksb-data.ts  — costComponents & fertilizerFuel (pupuk/BBM = belanja terbesar,
 *                  deviasi harga input tertimbang ≈ +4,8%).
 * - kas-data.ts  — DPO 52 hari (term kontraktual ±41 hari + 11 hari lag bayar).
 * - kcx-data.ts  — capexByCategory; realisasi capex 32,1% tertahan siklus tender.
 * - risk-data-detail.ts — caseByType "Fraud Pengadaan" = 14 laporan.
 * - inv-data.ts  — 42 proyek investasi aktif yang belanjanya lewat pengadaan.
 */

import { BASELINE_TRUST, KEUANGAN, PENGADAAN } from "./group-baseline";
import { PALETTE } from "./chart-palette";
import type { DimensionDataTrust } from "./dimension-menu";

/* ══════════════════════════════════════════════════════════════════════
   TIPE BERSAMA ANTAR-HALAMAN PENGADAAN
   ══════════════════════════════════════════════════════════════════════ */

/** Nada warna kartu/badge yang dipakai komponen src/components/pgd. */
export type PgdTone = "green" | "blue" | "teal" | "amber" | "red" | "purple" | "slate";

/** KPI mini untuk strip halaman detail (bukan overview). */
export interface PgdPageKpi {
  label: string;
  value: string;
  /** Sufiks kecil di samping nilai, mis. " hari" atau "/100". */
  valueSuffix?: string;
  sub: string;
  delta?: string;
  trend?: "up" | "down";
  deltaTone?: "good" | "bad";
  tone: PgdTone;
}

/** Pasangan insight → rekomendasi di kartu bawah tiap halaman. */
export interface PgdInsight {
  insight: string;
  rekomendasi: string;
}

/** Item keputusan BOD (dipakai overview dan halaman kategori). */
export interface PgdDecision {
  title: string;
  impact: "High Impact" | "Medium Impact" | "Low Impact";
  tone: "red" | "amber" | "green";
  context: string;
  rekomendasi: string;
  due: string;
}

/** Status eksekusi umum program/paket pengadaan. */
export type PgdStatus = "On Track" | "At Risk" | "Off Track";

export const PGD_STATUS_COLOR: Record<PgdStatus, string> = {
  "On Track": PALETTE.green,
  "At Risk": PALETTE.amber,
  "Off Track": PALETTE.red,
};

/** Tujuh kategori belanja kanonik — dipakai ulang di seluruh halaman. */
export const PGD_KATEGORI = [
  "Pupuk & Agrokimia",
  "BBM & Energi",
  "Suku Cadang & Pemeliharaan",
  "Jasa Borongan & Panen",
  "Konstruksi & Proyek",
  "Alat Berat & Kendaraan",
  "TI & Lisensi",
] as const;

export type PgdKategori = (typeof PGD_KATEGORI)[number];

/* ══════════════════════════════════════════════════════════════════════
   1. EXECUTIVE OVERVIEW (/pengadaan)
   ══════════════════════════════════════════════════════════════════════ */

/* ── 1a. Data Trust ───────────────────────────────────────────────── */

export const pgdDataTrust: DimensionDataTrust = {
  asOf: BASELINE_TRUST.asOf,
  lastRefresh: BASELINE_TRUST.lastRefresh,
  coverage: "94,6%",
  quality: "93,2%",
  sources: ["SAP MM", "e-Procurement", "Vendor Portal", "TKDN Kemenperin"],
};

/* ── 1b. KPI Strip (7 KPI) ────────────────────────────────────────── */

export interface PgdKpi {
  label: string;
  value: string;
  valueSuffix?: string;
  sub: string;
  delta?: string;
  trend?: "up" | "down";
  deltaTone?: "good" | "bad";
  compare: string;
  icon: "spend" | "saving" | "tkdn" | "vendor" | "cycle" | "eproc" | "concentration";
  tone: PgdTone;
}

export const pgdKpi: PgdKpi[] = [
  {
    label: "Total Belanja YTD",
    value: "Rp 12,4 T", // = PENGADAAN.spendYtdRpT
    sub: "41,6% RKAP FY Rp 29,8 T · prorata 41,7%",
    delta: "+8,4%",
    trend: "up",
    deltaTone: "bad",
    compare: "vs YTD 2025",
    icon: "spend",
    tone: "blue",
  },
  {
    label: "Penghematan Pengadaan",
    value: "Rp 386 M", // = PENGADAAN.penghematanYtdRpM
    sub: "45,4% target FY Rp 850 M · di atas prorata",
    delta: "+Rp 32 M",
    trend: "up",
    deltaTone: "good",
    compare: "vs prorata Rp 354 M",
    icon: "saving",
    tone: "green",
  },
  {
    label: "TKDN Belanja",
    value: "68,4%", // = PENGADAAN.tkdnPct
    sub: "Nilai belanja TKDN Rp 8,48 T · target 65%",
    delta: "+3,4 pts",
    trend: "up",
    deltaTone: "good",
    compare: "vs target 65%",
    icon: "tkdn",
    tone: "teal",
  },
  {
    label: "Vendor Aktif",
    value: "3.482", // = PENGADAAN.vendorAktif
    sub: "128 vendor kritikal · 214 vendor baru YTD",
    delta: "+124",
    trend: "up",
    deltaTone: "good",
    compare: "vs Des 2025",
    icon: "vendor",
    tone: "purple",
  },
  {
    label: "Siklus Pengadaan",
    value: "42",
    valueSuffix: " hari",
    sub: "Target 35 hari · bottleneck evaluasi 11 hari",
    delta: "+7 hari",
    trend: "up",
    deltaTone: "bad",
    compare: "vs target 35 hari",
    icon: "cycle",
    tone: "red",
  },
  {
    label: "Cakupan e-Procurement",
    value: "84%", // = PENGADAAN.eProcCoveragePct
    sub: "Nilai transaksi via e-Proc · target 95%",
    delta: "+6 pts",
    trend: "up",
    deltaTone: "good",
    compare: "vs Des 2025",
    icon: "eproc",
    tone: "blue",
  },
  {
    label: "Konsentrasi Top-20 Vendor",
    value: "43%", // = PENGADAAN.top20SpendPct
    sub: "Rp 5,33 T pada 20 vendor · 0,6% populasi",
    delta: "+2,4 pts",
    trend: "up",
    deltaTone: "bad",
    compare: "vs FY 2025",
    icon: "concentration",
    tone: "amber",
  },
];

/* ── 1c. Procurement Intelligence (3 narasi) ──────────────────────── */

export interface PgdSignal {
  no: string;
  title: string;
  text: string;
  impactLabel: string;
  impactValue: string;
  tone: "red" | "amber" | "green";
}

export const pgdIntelligence: PgdSignal[] = [
  {
    no: "01",
    title: "Siklus 42 Hari Menahan Realisasi Capex",
    text: "Siklus pengadaan 42 hari (target 35) menahan eksekusi paket konstruksi & pabrik. Realisasi capex baru 32,1% dari RKAP Rp 9,6 T — 9,6 pts di bawah prorata; 41 paket senilai Rp 1,96 T tertahan di tahap evaluasi yang memakan 11 hari (target 7).",
    impactLabel: "Nilai Paket Tertahan Evaluasi",
    impactValue: "Rp 1,96 T",
    tone: "red",
  },
  {
    no: "02",
    title: "Konsentrasi Pasokan Pupuk Terlalu Tinggi",
    text: "Pupuk & agrokimia adalah belanja terbesar (Rp 3,6 T, 29% total) namun hanya dilayani 86 vendor dengan 3 prinsipal menguasai 61,4% volume. Indeks harga NPK sudah +6,0% di atas asumsi RKAP dan menekan komponen biaya terbesar pada struktur HPP.",
    impactLabel: "Eksposur Harga Pupuk FY",
    impactValue: "+Rp 242 M",
    tone: "amber",
  },
  {
    no: "03",
    title: "Pengadaan Jadi Kategori Integritas Terbesar",
    text: "14 laporan dugaan fraud pengadaan YTD — kategori terbesar dari 47 laporan WBS grup. Empat kasus telah terbukti dan dua diteruskan ke sanksi/APH; akar masalah terkonsentrasi pada penyusunan HPS dan paket berpeserta tunggal (34 paket, 18,3%).",
    impactLabel: "Laporan Integritas Pengadaan",
    impactValue: "14 dari 47",
    tone: "red",
  },
];

/* ── 1d. Procurement Risk Radar (6 sumbu) ─────────────────────────── */

export interface PgdRiskAxis {
  axis: string;
  /** Skor risiko 0-100; makin tinggi makin berisiko. */
  score: number;
  /** Ambang toleransi internal 2026. */
  target: number;
}

export const pgdRiskRadar: PgdRiskAxis[] = [
  { axis: "Konsentrasi Pasokan", score: 74, target: 55 },
  { axis: "Harga Input", score: 68, target: 50 },
  { axis: "Integritas", score: 62, target: 40 },
  { axis: "Kepatuhan TKDN", score: 32, target: 45 },
  { axis: "Keterlambatan Proses", score: 71, target: 50 },
  { axis: "Kualitas Vendor", score: 46, target: 45 },
];

/* ── 1e. Tren Belanja Bulanan vs RKAP Prorata ─────────────────────── */

export interface PgdSpendPoint {
  month: string;
  /** Realisasi belanja bulan berjalan (Rp T). */
  belanja: number;
  /** Alokasi RKAP prorata bulanan (Rp T). */
  rkapProrata: number;
}

/**
 * Jun'25–Mei'26. Jan'26–Mei'26 menjumlah 12,40 T = PENGADAAN.spendYtdRpT.
 * Prorata 2026 = 29,8 / 12 ≈ 2,48 T/bulan; 2025 memakai RKAP 27,9 T (2,32).
 */
export const spendTrend: PgdSpendPoint[] = [
  { month: "Jun'25", belanja: 2.18, rkapProrata: 2.32 },
  { month: "Jul'25", belanja: 2.34, rkapProrata: 2.32 },
  { month: "Agu'25", belanja: 2.26, rkapProrata: 2.32 },
  { month: "Sep'25", belanja: 2.41, rkapProrata: 2.32 },
  { month: "Okt'25", belanja: 2.52, rkapProrata: 2.32 },
  { month: "Nov'25", belanja: 2.64, rkapProrata: 2.32 },
  { month: "Des'25", belanja: 3.12, rkapProrata: 2.32 },
  { month: "Jan'26", belanja: 2.28, rkapProrata: 2.48 },
  { month: "Feb'26", belanja: 2.34, rkapProrata: 2.48 },
  { month: "Mar'26", belanja: 2.52, rkapProrata: 2.48 },
  { month: "Apr'26", belanja: 2.58, rkapProrata: 2.48 },
  { month: "Mei'26", belanja: 2.68, rkapProrata: 2.48 },
];

/* ── 1f. Tren Penghematan Kumulatif vs Target ─────────────────────── */

export interface PgdSavingsPoint {
  month: string;
  /** Penghematan kumulatif YTD (Rp M). */
  kumulatif: number;
  /** Jalur target prorata dari target FY Rp 850 M. */
  target: number;
}

/** Berakhir Rp 386 M = PENGADAAN.penghematanYtdRpM (45,4% target FY 850). */
export const savingsTrend: PgdSavingsPoint[] = [
  { month: "Jan'26", kumulatif: 62, target: 71 },
  { month: "Feb'26", kumulatif: 138, target: 142 },
  { month: "Mar'26", kumulatif: 214, target: 213 },
  { month: "Apr'26", kumulatif: 302, target: 283 },
  { month: "Mei'26", kumulatif: 386, target: 354 },
];

/* ── 1g. Alerts & Notifications ───────────────────────────────────── */

export interface PgdAlert {
  title: string;
  text: string;
  time: string;
  tone: "red" | "amber" | "green" | "blue";
}

export const pgdAlerts: PgdAlert[] = [
  {
    title: "87 Kontrak Jatuh Tempo dalam 90 Hari",
    text: "Nilai kontrak yang perlu diperpanjang/ditenderkan ulang Rp 2,86 T; 32 di antaranya jatuh tempo Juni 2026 dan belum ada paket pengganti di pipeline.",
    time: "Today",
    tone: "red",
  },
  {
    title: "34 Paket Tender Berpeserta Tunggal",
    text: "18,3% paket aktif (nilai Rp 0,86 T) hanya diikuti satu peserta — bendera merah kompetisi dan pemicu utama telaah integritas pengadaan.",
    time: "1 hari yang lalu",
    tone: "amber",
  },
  {
    title: "Indeks Harga Pupuk NPK +6,0% di Atas RKAP",
    text: "Harga aktual Rp 13.150/kg vs asumsi RKAP Rp 12.400/kg; dampak setahun +Rp 168 M pada komponen biaya terbesar (pemeliharaan tanaman & pupuk).",
    time: "3 hari yang lalu",
    tone: "amber",
  },
  {
    title: "Kontrak Payung BBM Menghemat Rp 38 M",
    text: "Empat kontrak payung BBM & energi mencakup 78,2% belanja kategori dan mengunci harga hingga Q4 2026 — model yang siap direplikasi ke pupuk.",
    time: "5 hari yang lalu",
    tone: "green",
  },
];

/* ── 1h. BOD Decision Center ──────────────────────────────────────── */

export const pgdDecisions: PgdDecision[] = [
  {
    title: "Kontrak Payung Pupuk H2 2026 Rp 2,1 T",
    impact: "High Impact",
    tone: "red",
    context:
      "Belanja pupuk & agrokimia Rp 3,6 T YTD dengan 3 prinsipal menguasai 61,4% volume; harga NPK sudah +6,0% di atas asumsi RKAP dan kontrak payung eksisting hanya menutup 62,4% kategori.",
    rekomendasi:
      "Setujui kontrak payung multi-prinsipal H2 2026 senilai Rp 2,1 T dengan klausul indeksasi bertingkat; target hemat tambahan Rp 96 M dan cakupan kategori naik ke 85%.",
    due: "Q3 2026",
  },
  {
    title: "Sentralisasi Pengadaan Kategori Strategis",
    impact: "High Impact",
    tone: "amber",
    context:
      "Maverick spend 8,4% (Rp 1,04 T) dan siklus 42 hari terutama berasal dari pengadaan tersebar di unit; Regional 5 mencatat maverick 10,6% dan adopsi e-Proc terendah (80%).",
    rekomendasi:
      "Pindahkan 8 kategori strategis ke Central Procurement Office dengan mandat kontrak payung tunggal; target siklus 35 hari dan maverick <5% pada Q2 2027.",
    due: "Q4 2026",
  },
  {
    title: "Sanksi & Pemutusan Vendor Bermasalah",
    impact: "Medium Impact",
    tone: "red",
    context:
      "26 vendor bersanksi (18 sanksi administratif, 8 blacklist) dan 14 laporan integritas pengadaan; sebagian vendor bersanksi masih memegang kontrak berjalan.",
    rekomendasi:
      "Tetapkan kebijakan pemutusan otomatis untuk vendor terbukti dan publikasikan daftar hitam di Vendor Portal; wajibkan pakta integritas pada 100% paket (kini 92,4%).",
    due: "Q3 2026",
  },
];

/* ── 1i. Insight & Rekomendasi ────────────────────────────────────── */

export const pgdInsights: PgdInsight[] = [
  {
    insight:
      "Penghematan Rp 386 M sudah melampaui jalur prorata (Rp 354 M), namun 43,5% di antaranya berasal dari kontrak payung yang baru menutup sebagian kategori strategis.",
    rekomendasi:
      "Perluas kontrak payung dari 42 ke 60 kontrak pada H2 2026, prioritaskan pupuk dan suku cadang yang selisih realisasi-targetnya terbesar.",
  },
  {
    insight:
      "Siklus pengadaan 42 hari adalah penghambat langsung realisasi capex 32,1%; tahap evaluasi (11 hari vs target 7) menyumbang 57% dari total keterlambatan 7 hari.",
    rekomendasi:
      "Terapkan panel evaluator tetap dan SLA evaluasi 7 hari dengan eskalasi otomatis; targetkan siklus 38 hari pada Q4 2026 sebelum puncak belanja capex.",
  },
  {
    insight:
      "Konsentrasi Top-20 vendor naik ke 43% sementara vendor kritikal hanya 128 dari 3.482 — risiko pasokan terkonsentrasi pada segmen yang paling sulit disubstitusi.",
    rekomendasi:
      "Wajibkan dual-sourcing untuk seluruh kategori bottleneck dan jalankan program kualifikasi 40 vendor alternatif pupuk/BBM pada H2 2026.",
  },
];

/* ══════════════════════════════════════════════════════════════════════
   2. ANALITIK BELANJA (/pengadaan/analitik-belanja)
   ══════════════════════════════════════════════════════════════════════ */

/* ── 2a. KPI Strip ────────────────────────────────────────────────── */

export const belanjaKpi: PgdPageKpi[] = [
  {
    label: "Belanja YTD",
    value: "Rp 12,4 T",
    sub: "41,6% RKAP FY Rp 29,8 T",
    delta: "+8,4%",
    trend: "up",
    deltaTone: "bad",
    tone: "blue",
  },
  {
    label: "Addressable Spend",
    value: "86,0%",
    sub: "Rp 10,66 T dapat dioptimalkan sourcing",
    delta: "+1,8 pts",
    trend: "up",
    deltaTone: "good",
    tone: "teal",
  },
  {
    label: "Belanja Terkelola Kontrak",
    value: "72,4%",
    sub: "Rp 8,98 T di bawah kontrak/kontrak payung",
    delta: "+4,2 pts",
    trend: "up",
    deltaTone: "good",
    tone: "green",
  },
  {
    label: "Maverick Spend",
    value: "8,4%",
    sub: "Rp 1,04 T di luar kanal kontrak",
    delta: "-1,6 pts",
    trend: "down",
    deltaTone: "good",
    tone: "amber",
  },
  {
    label: "Rata-rata Nilai PO",
    value: "Rp 186 jt",
    sub: "66.700 PO YTD · 42% bernilai < Rp 50 jt",
    delta: "+Rp 14 jt",
    trend: "up",
    deltaTone: "good",
    tone: "purple",
  },
];

/* ── 2b. Belanja per Kategori (Rp T) ──────────────────────────────── */

export interface PgdSpendCategory {
  name: PgdKategori;
  /** Belanja YTD (Rp T). */
  valueRpT: number;
  /** Porsi terhadap total belanja (%); pembulatan 1 desimal. */
  pct: number;
  color: string;
}

/**
 * Menjumlah 12,40 T = PENGADAAN.spendYtdRpT. Arah selaras costComponents
 * ksb-data.ts: pupuk & BBM (input pemeliharaan tanaman dan pengolahan)
 * adalah kelompok belanja terbesar; jasa borongan/panen sejalan dengan
 * komponen "Panen & Angkut".
 */
export const spendByCategory: PgdSpendCategory[] = [
  { name: "Pupuk & Agrokimia", valueRpT: 3.6, pct: 29.0, color: PALETTE.green },
  { name: "BBM & Energi", valueRpT: 2.15, pct: 17.3, color: PALETTE.blue },
  { name: "Suku Cadang & Pemeliharaan", valueRpT: 1.86, pct: 15.0, color: PALETTE.teal },
  { name: "Jasa Borongan & Panen", valueRpT: 1.72, pct: 13.9, color: PALETTE.amber },
  { name: "Konstruksi & Proyek", valueRpT: 1.64, pct: 13.2, color: PALETTE.purple },
  { name: "Alat Berat & Kendaraan", valueRpT: 0.96, pct: 7.7, color: PALETTE.pink },
  { name: "TI & Lisensi", valueRpT: 0.47, pct: 3.8, color: PALETTE.slate },
];

/* ── 2c. Belanja per Subholding (Rp T) ────────────────────────────── */

export interface PgdSpendSubholding {
  segment: "PalmCo" | "SGN" | "PTPN I";
  valueRpT: number;
  pct: number;
  /** Belanja per Rp pendapatan segmen (%) — intensitas pengadaan. */
  intensitasPct: number;
}

/** Menjumlah 12,40 T; pendapatan segmen mengacu KEUANGAN.segmen. */
export const spendBySubholding: PgdSpendSubholding[] = [
  { segment: "PalmCo", valueRpT: 8.1, pct: 65.3, intensitasPct: 46.6 },
  { segment: "SGN", valueRpT: 2.9, pct: 23.4, intensitasPct: 59.2 },
  { segment: "PTPN I", valueRpT: 1.4, pct: 11.3, intensitasPct: 60.9 },
];

/* ── 2d. Belanja per Jenis Pengadaan (Rp T) ───────────────────────── */

export interface PgdSpendType {
  jenis: "Barang" | "Jasa" | "Konstruksi";
  valueRpT: number;
  pct: number;
  /** Jumlah paket/PO YTD. */
  paket: number;
  color: string;
}

/** Menjumlah 12,40 T. Konstruksi selaras capex realisasi kcx-data.ts. */
export const spendByType: PgdSpendType[] = [
  { jenis: "Barang", valueRpT: 7.44, pct: 60.0, paket: 48200, color: PALETTE.blue },
  { jenis: "Jasa", valueRpT: 3.32, pct: 26.8, paket: 16400, color: PALETTE.teal },
  { jenis: "Konstruksi", valueRpT: 1.64, pct: 13.2, paket: 2100, color: PALETTE.amber },
];

/* ── 2e. Pareto Konsentrasi Vendor ────────────────────────────────── */

export interface PgdParetoPoint {
  /** Label kelompok vendor kumulatif. */
  label: string;
  /** Jumlah vendor kumulatif. */
  vendor: number;
  /** Belanja kumulatif (Rp T). */
  spendRpT: number;
  /** Porsi kumulatif terhadap total belanja (%). */
  cumPct: number;
}

/** Top-20 = 43,0% = PENGADAAN.top20SpendPct; total 3.482 vendor = 100%. */
export const spendPareto: PgdParetoPoint[] = [
  { label: "Top 5", vendor: 5, spendRpT: 2.41, cumPct: 19.4 },
  { label: "Top 10", vendor: 10, spendRpT: 3.67, cumPct: 29.6 },
  { label: "Top 20", vendor: 20, spendRpT: 5.33, cumPct: 43.0 },
  { label: "Top 50", vendor: 50, spendRpT: 7.22, cumPct: 58.2 },
  { label: "Top 100", vendor: 100, spendRpT: 8.66, cumPct: 69.8 },
  { label: "Seluruh Vendor", vendor: 3482, spendRpT: 12.4, cumPct: 100.0 },
];

/* ── 2f. Maverick Spend per Unit ──────────────────────────────────── */

export interface PgdMaverickRow {
  unit: string;
  /** Belanja unit YTD (Rp T). */
  spendRpT: number;
  /** Porsi belanja di luar kanal kontrak (%). */
  maverickPct: number;
  /** Nilai maverick (Rp M). */
  maverickRpM: number;
  status: PgdStatus;
}

/**
 * Belanja unit menjumlah 12,40 T; rata-rata tertimbang maverick = 8,4%
 * (Rp 1,04 T) sesuai KPI halaman.
 */
export const maverickSpend: PgdMaverickRow[] = [
  { unit: "PalmCo Regional 1", spendRpT: 1.9, maverickPct: 6.2, maverickRpM: 118, status: "On Track" },
  { unit: "PalmCo Regional 3", spendRpT: 2.2, maverickPct: 7.4, maverickRpM: 163, status: "On Track" },
  { unit: "PalmCo Regional 4", spendRpT: 2.1, maverickPct: 9.1, maverickRpM: 191, status: "At Risk" },
  { unit: "PalmCo Regional 5", spendRpT: 1.9, maverickPct: 10.6, maverickRpM: 201, status: "Off Track" },
  { unit: "SGN", spendRpT: 2.9, maverickPct: 8.8, maverickRpM: 255, status: "At Risk" },
  { unit: "PTPN I", spendRpT: 1.4, maverickPct: 7.9, maverickRpM: 111, status: "On Track" },
];

/* ── 2g. Profil Termin Pembayaran ─────────────────────────────────── */

export interface PgdPaymentTermRow {
  bucket: string;
  /** Porsi nilai belanja pada termin ini (%). */
  pct: number;
  /** Nilai belanja (Rp T). */
  valueRpT: number;
  tone: "good" | "warn" | "bad";
}

/**
 * Termin kontraktual tertimbang ≈ 41 hari; DPO aktual 52 hari (kas-data.ts)
 * = 41 hari termin + ±11 hari lag proses verifikasi & pembayaran.
 */
export const paymentTermsProfile: PgdPaymentTermRow[] = [
  { bucket: "≤ 14 hari", pct: 6.2, valueRpT: 0.77, tone: "bad" },
  { bucket: "15-30 hari", pct: 24.8, valueRpT: 3.08, tone: "warn" },
  { bucket: "31-45 hari", pct: 28.4, valueRpT: 3.52, tone: "good" },
  { bucket: "46-60 hari", pct: 26.6, valueRpT: 3.3, tone: "good" },
  { bucket: "> 60 hari", pct: 14.0, valueRpT: 1.73, tone: "good" },
];

/** Ringkasan termin vs DPO aktual (jangkar kas-data.ts). */
export const paymentTermsSummary = {
  terminRataHari: 41,
  dpoAktualHari: 52,
  lagProsesHari: 11,
  note: "Termin kontraktual tertimbang 41 hari; DPO grup 52 hari — selisih 11 hari berasal dari lag verifikasi GR/invoice, bukan negosiasi termin.",
} as const;

/* ── 2h. Insight & Rekomendasi ────────────────────────────────────── */

export const belanjaInsights: PgdInsight[] = [
  {
    insight:
      "Addressable spend 86,0% (Rp 10,66 T) namun belanja terkelola kontrak baru 72,4% — selisih 13,6 pts (Rp 1,69 T) adalah ruang penghematan yang belum tersentuh sourcing.",
    rekomendasi:
      "Targetkan belanja terkelola kontrak 82% pada akhir 2026 lewat 18 kontrak payung baru; potensi hemat tambahan Rp 118 M setahun.",
  },
  {
    insight:
      "Maverick spend terkonsentrasi di PalmCo Regional 5 (10,6%) dan SGN (8,8%) — dua unit dengan adopsi e-Procurement terendah, menandakan penyebabnya kanal, bukan kebutuhan.",
    rekomendasi:
      "Kunci pembelian di luar e-Catalog untuk nilai > Rp 50 jt di kedua unit dan jadikan cakupan e-Proc KPI GM Regional 2026.",
  },
  {
    insight:
      "Termin kontraktual 41 hari sudah kompetitif, tetapi DPO aktual 52 hari — 11 hari lag proses menekan relasi vendor kecil tanpa manfaat modal kerja yang direncanakan.",
    rekomendasi:
      "Pangkas lag verifikasi GR/invoice ke 5 hari untuk vendor UMKM (Rp 1,86 T belanja) sambil mempertahankan DPO grup di 52 hari.",
  },
];

/* ══════════════════════════════════════════════════════════════════════
   3. KATEGORI & KOMODITAS (/pengadaan/kategori-komoditas)
   ══════════════════════════════════════════════════════════════════════ */

/* ── 3a. KPI Strip ────────────────────────────────────────────────── */

export const kategoriKpi: PgdPageKpi[] = [
  {
    label: "Kategori Strategis",
    value: "8",
    sub: "Dari 7 kelompok belanja & 24 sub-kategori",
    delta: "+2",
    trend: "up",
    deltaTone: "good",
    tone: "blue",
  },
  {
    label: "Indeks Harga Input",
    value: "+4,8%",
    sub: "Tertimbang vs asumsi RKAP 2026",
    delta: "+1,2 pts",
    trend: "up",
    deltaTone: "bad",
    tone: "red",
  },
  {
    label: "Kontrak Payung Aktif",
    value: "42",
    sub: "Menutup Rp 6,32 T nilai kontrak",
    delta: "+9",
    trend: "up",
    deltaTone: "good",
    tone: "green",
  },
  {
    label: "Cakupan Kategori Strategis",
    value: "76,4%",
    sub: "Belanja kategori strategis di bawah strategi sourcing",
    delta: "+8,6 pts",
    trend: "up",
    deltaTone: "good",
    tone: "teal",
  },
];

/* ── 3b. Matriks Kraljic (nilai belanja × jumlah vendor) ──────────── */

export type KraljicQuadrant = "Leverage" | "Strategic" | "Bottleneck" | "Routine";

export interface PgdCategoryMatrixRow {
  kategori: PgdKategori;
  kuadran: KraljicQuadrant;
  /** Belanja YTD (Rp T) — selaras spendByCategory. */
  valueRpT: number;
  /** Jumlah vendor terdaftar pada kategori utamanya. */
  vendor: number;
  /** Dampak profit 0-100 (sumbu Y Kraljic). */
  dampakProfit: number;
  /** Risiko pasokan 0-100 (sumbu X Kraljic). */
  risikoPasokan: number;
}

/**
 * Belanja menjumlah 12,40 T; vendor menjumlah 3.482 = PENGADAAN.vendorAktif
 * (vendor dihitung pada kategori utamanya agar tidak ganda).
 */
export const categoryMatrix: PgdCategoryMatrixRow[] = [
  { kategori: "Pupuk & Agrokimia", kuadran: "Strategic", valueRpT: 3.6, vendor: 86, dampakProfit: 92, risikoPasokan: 78 },
  { kategori: "BBM & Energi", kuadran: "Bottleneck", valueRpT: 2.15, vendor: 24, dampakProfit: 68, risikoPasokan: 86 },
  { kategori: "Suku Cadang & Pemeliharaan", kuadran: "Leverage", valueRpT: 1.86, vendor: 742, dampakProfit: 64, risikoPasokan: 34 },
  { kategori: "Jasa Borongan & Panen", kuadran: "Routine", valueRpT: 1.72, vendor: 1848, dampakProfit: 42, risikoPasokan: 26 },
  { kategori: "Konstruksi & Proyek", kuadran: "Strategic", valueRpT: 1.64, vendor: 486, dampakProfit: 78, risikoPasokan: 62 },
  { kategori: "Alat Berat & Kendaraan", kuadran: "Leverage", valueRpT: 0.96, vendor: 184, dampakProfit: 56, risikoPasokan: 38 },
  { kategori: "TI & Lisensi", kuadran: "Strategic", valueRpT: 0.47, vendor: 112, dampakProfit: 52, risikoPasokan: 74 },
];

/* ── 3c. Indeks Harga Komoditas 24 Bulan (100 = asumsi RKAP 2026) ── */

export interface PgdPriceIndexPoint {
  month: string;
  /** Indeks harga pupuk NPK; berakhir 106,0 (+6,0% vs asumsi RKAP). */
  npk: number;
  /** Indeks pupuk urea; berakhir 103,7 (+3,7%). */
  urea: number;
  /** Indeks BBM solar industri; berakhir 105,5 (+5,5%). */
  solar: number;
  /** Indeks bahan kimia pabrik; berakhir 104,2 (+4,2%). */
  bahanKimia: number;
}

/**
 * Jun'24–Mei'26. Nilai akhir selaras fertilizerFuel di ksb-data.ts
 * (NPK +6,0% · Urea +3,7% · Solar +5,5%); komposit tertimbang +4,8%.
 */
export const priceIndexTrend: PgdPriceIndexPoint[] = [
  { month: "Jun'24", npk: 94.2, urea: 96.0, solar: 95.4, bahanKimia: 97.1 },
  { month: "Jul'24", npk: 94.8, urea: 96.4, solar: 95.9, bahanKimia: 97.4 },
  { month: "Agu'24", npk: 95.4, urea: 96.8, solar: 96.4, bahanKimia: 97.7 },
  { month: "Sep'24", npk: 96.1, urea: 97.1, solar: 96.9, bahanKimia: 98.0 },
  { month: "Okt'24", npk: 96.8, urea: 97.4, solar: 97.4, bahanKimia: 98.3 },
  { month: "Nov'24", npk: 97.4, urea: 97.7, solar: 97.9, bahanKimia: 98.6 },
  { month: "Des'24", npk: 98.0, urea: 98.0, solar: 98.3, bahanKimia: 98.9 },
  { month: "Jan'25", npk: 98.6, urea: 98.3, solar: 98.7, bahanKimia: 99.2 },
  { month: "Feb'25", npk: 99.2, urea: 98.6, solar: 99.1, bahanKimia: 99.5 },
  { month: "Mar'25", npk: 99.8, urea: 98.9, solar: 99.5, bahanKimia: 99.8 },
  { month: "Apr'25", npk: 100.4, urea: 99.2, solar: 99.9, bahanKimia: 100.1 },
  { month: "Mei'25", npk: 101.0, urea: 99.5, solar: 100.3, bahanKimia: 100.4 },
  { month: "Jun'25", npk: 101.6, urea: 99.8, solar: 100.7, bahanKimia: 100.7 },
  { month: "Jul'25", npk: 102.1, urea: 100.1, solar: 101.2, bahanKimia: 101.0 },
  { month: "Agu'25", npk: 102.6, urea: 100.4, solar: 101.7, bahanKimia: 101.3 },
  { month: "Sep'25", npk: 103.1, urea: 100.7, solar: 102.2, bahanKimia: 101.6 },
  { month: "Okt'25", npk: 103.6, urea: 101.0, solar: 102.7, bahanKimia: 101.9 },
  { month: "Nov'25", npk: 104.0, urea: 101.4, solar: 103.1, bahanKimia: 102.2 },
  { month: "Des'25", npk: 104.4, urea: 101.8, solar: 103.5, bahanKimia: 102.5 },
  { month: "Jan'26", npk: 104.8, urea: 102.2, solar: 103.9, bahanKimia: 102.8 },
  { month: "Feb'26", npk: 105.1, urea: 102.6, solar: 104.3, bahanKimia: 103.2 },
  { month: "Mar'26", npk: 105.4, urea: 103.0, solar: 104.7, bahanKimia: 103.6 },
  { month: "Apr'26", npk: 105.7, urea: 103.4, solar: 105.1, bahanKimia: 103.9 },
  { month: "Mei'26", npk: 106.0, urea: 103.7, solar: 105.5, bahanKimia: 104.2 },
];

/* ── 3d. Risiko Pasokan per Kategori ──────────────────────────────── */

export interface PgdSupplyRiskRow {
  kategori: PgdKategori;
  /** Porsi nilai kategori yang bergantung impor/prinsipal asing (%). */
  ketergantunganImporPct: number;
  /** Jumlah vendor aktif kategori. */
  vendor: number;
  /** Lead time rata-rata pengiriman (hari). */
  leadTimeHari: number;
  /** Porsi belanja kategori pada 3 vendor terbesar (%). */
  konsentrasiTop3Pct: number;
  level: "Tinggi" | "Sedang" | "Rendah";
}

/** Jumlah vendor selaras categoryMatrix (total 3.482). */
export const supplyRiskByCategory: PgdSupplyRiskRow[] = [
  { kategori: "Pupuk & Agrokimia", ketergantunganImporPct: 58.4, vendor: 86, leadTimeHari: 62, konsentrasiTop3Pct: 61.4, level: "Tinggi" },
  { kategori: "BBM & Energi", ketergantunganImporPct: 12.0, vendor: 24, leadTimeHari: 14, konsentrasiTop3Pct: 88.2, level: "Tinggi" },
  { kategori: "TI & Lisensi", ketergantunganImporPct: 72.6, vendor: 112, leadTimeHari: 48, konsentrasiTop3Pct: 54.8, level: "Tinggi" },
  { kategori: "Alat Berat & Kendaraan", ketergantunganImporPct: 64.2, vendor: 184, leadTimeHari: 96, konsentrasiTop3Pct: 42.6, level: "Sedang" },
  { kategori: "Suku Cadang & Pemeliharaan", ketergantunganImporPct: 38.4, vendor: 742, leadTimeHari: 34, konsentrasiTop3Pct: 21.8, level: "Sedang" },
  { kategori: "Konstruksi & Proyek", ketergantunganImporPct: 8.6, vendor: 486, leadTimeHari: 28, konsentrasiTop3Pct: 26.4, level: "Sedang" },
  { kategori: "Jasa Borongan & Panen", ketergantunganImporPct: 0.0, vendor: 1848, leadTimeHari: 10, konsentrasiTop3Pct: 8.2, level: "Rendah" },
];

/* ── 3e. Rencana Strategi Sourcing Kategori Strategis ─────────────── */

export interface PgdSourcingPlanRow {
  kategori: string;
  strategi: "Kontrak Payung" | "Tender Ulang" | "Konsolidasi Volume" | "Dual Sourcing" | "Renegosiasi";
  /** Nilai belanja yang tercakup (Rp T). */
  cakupanRpT: number;
  /** Target penghematan setahun (Rp M). */
  targetHematRpM: number;
  timeline: string;
  status: PgdStatus;
}

/** Delapan inisiatif untuk 8 kategori strategis; total target Rp 486 M/thn. */
export const strategySourcingPlan: PgdSourcingPlanRow[] = [
  { kategori: "Pupuk NPK & Urea", strategi: "Kontrak Payung", cakupanRpT: 2.1, targetHematRpM: 96, timeline: "Q3 2026", status: "At Risk" },
  { kategori: "Pupuk KCl & Dolomit", strategi: "Konsolidasi Volume", cakupanRpT: 0.62, targetHematRpM: 28, timeline: "Q4 2026", status: "On Track" },
  { kategori: "BBM Solar Industri", strategi: "Renegosiasi", cakupanRpT: 1.68, targetHematRpM: 74, timeline: "Q3 2026", status: "On Track" },
  { kategori: "Suku Cadang Pabrik", strategi: "Kontrak Payung", cakupanRpT: 0.84, targetHematRpM: 62, timeline: "Q4 2026", status: "On Track" },
  { kategori: "Jasa Panen & Angkut", strategi: "Tender Ulang", cakupanRpT: 1.12, targetHematRpM: 58, timeline: "Q3 2026", status: "At Risk" },
  { kategori: "Konstruksi & Proyek Capex", strategi: "Tender Ulang", cakupanRpT: 1.64, targetHematRpM: 84, timeline: "Q4 2026", status: "Off Track" },
  { kategori: "Alat Berat & Kendaraan", strategi: "Dual Sourcing", cakupanRpT: 0.96, targetHematRpM: 42, timeline: "Q1 2027", status: "On Track" },
  { kategori: "Lisensi & Layanan TI", strategi: "Konsolidasi Volume", cakupanRpT: 0.47, targetHematRpM: 42, timeline: "Q4 2026", status: "On Track" },
];

/* ── 3f. Kontribusi Penghematan per Kategori ──────────────────────── */

export interface PgdSavingsCategoryRow {
  kategori: PgdKategori;
  /** Target penghematan FY (Rp M). */
  targetFyRpM: number;
  /** Realisasi penghematan YTD (Rp M). */
  realisasiRpM: number;
  /** Progres terhadap target FY (%). */
  progressPct: number;
  status: PgdStatus;
}

/**
 * Target menjumlah 850 M = PENGADAAN.penghematanTargetFyRpM;
 * realisasi menjumlah 386 M = PENGADAAN.penghematanYtdRpM (45,4%).
 */
export const savingsByCategory: PgdSavingsCategoryRow[] = [
  { kategori: "Pupuk & Agrokimia", targetFyRpM: 268, realisasiRpM: 124, progressPct: 46.3, status: "On Track" },
  { kategori: "BBM & Energi", targetFyRpM: 148, realisasiRpM: 68, progressPct: 45.9, status: "On Track" },
  { kategori: "Suku Cadang & Pemeliharaan", targetFyRpM: 136, realisasiRpM: 62, progressPct: 45.6, status: "On Track" },
  { kategori: "Jasa Borongan & Panen", targetFyRpM: 106, realisasiRpM: 48, progressPct: 45.3, status: "On Track" },
  { kategori: "Konstruksi & Proyek", targetFyRpM: 92, realisasiRpM: 42, progressPct: 45.7, status: "On Track" },
  { kategori: "Alat Berat & Kendaraan", targetFyRpM: 58, realisasiRpM: 26, progressPct: 44.8, status: "At Risk" },
  { kategori: "TI & Lisensi", targetFyRpM: 42, realisasiRpM: 16, progressPct: 38.1, status: "At Risk" },
];

/* ── 3g. Insight & Rekomendasi ────────────────────────────────────── */

export const kategoriInsights: PgdInsight[] = [
  {
    insight:
      "Dua kuadran paling menekan — Strategic (pupuk, konstruksi, TI: Rp 5,71 T) dan Bottleneck (BBM: Rp 2,15 T dengan hanya 24 vendor dan konsentrasi Top-3 88,2%) — mencakup 63,4% belanja grup.",
    rekomendasi:
      "Fokuskan 70% kapasitas category manager pada dua kuadran ini; kuadran Routine (1.848 vendor, Rp 1,72 T) dipindahkan penuh ke e-Catalog.",
  },
  {
    insight:
      "Indeks harga input +4,8% di atas asumsi RKAP dengan NPK sebagai penyumbang terbesar (+6,0%); tanpa kontrak payung H2, tekanan berlanjut ke HPP CPO Rp 8.950/kg.",
    rekomendasi:
      "Kunci volume pupuk H2 2026 sebelum musim aplikasi dan pakai klausul indeksasi bertingkat agar eksposur harga terbagi dengan prinsipal.",
  },
  {
    insight:
      "Realisasi penghematan kategori TI & Lisensi (38,1%) dan Alat Berat (44,8%) tertinggal — keduanya berketergantungan impor > 64% sehingga terpapar kurs Rp 16.250/USD.",
    rekomendasi:
      "Prioritaskan konsolidasi lisensi TI multi-unit dan dual sourcing alat berat non-prinsipal; targetkan penutupan gap Rp 46 M pada Q4 2026.",
  },
];

/* ── Referensi lintas dimensi (dipakai kartu konteks halaman) ─────── */

export const pgdCrossRef = {
  capexRealisasiPct: KEUANGAN.capexRealisasiPct,
  capexRkapFyRpT: KEUANGAN.capexRkapFy,
  spendRkapFyRpT: PENGADAAN.spendRkapFyRpT,
  proyekInvestasiAktif: 42,
  note: "42 proyek investasi aktif (inv-data.ts) membelanjakan capex lewat kanal pengadaan; siklus 42 hari adalah penyebab utama realisasi capex 32,1%.",
} as const;
