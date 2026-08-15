/**
 * Data statis halaman Biaya Produksi (/produksi-operasi/biaya-produksi) dan
 * Operational Excellence (/produksi-operasi/operational-excellence).
 * Periode acuan: 31 Mei 2026 (YTD). HPP CPO Rp 8.950/kg dari group-baseline.ts.
 */

import { PRODUKSI } from "./group-baseline";
import type { ProdInsight, ProdKpi } from "./produksi-data";

/* ══ BIAYA PRODUKSI ════════════════════════════════════════════════ */

/* ── 1. HPP Waterfall CPO (jumlah = Rp 8.950/kg) ──────────────────── */

export interface HppKomponen {
  komponen: string;
  /** Kontribusi HPP (Rp/kg CPO) — jumlah 5 komponen = 8.950. */
  nilaiRpKg: number;
  /** Alokasi target RKAP (Rp/kg) — jumlah = 8.700. */
  targetRpKg: number;
}

export const HPP_CPO_RP_KG = PRODUKSI.hppCpoRpKg; // 8.950
export const HPP_TARGET_RP_KG = 8700;

export const hppKomponen: HppKomponen[] = [
  { komponen: "Panen & Perawatan Tanaman", nilaiRpKg: 2240, targetRpKg: 2210 },
  { komponen: "Pupuk & Agro-Input", nilaiRpKg: 2150, targetRpKg: 1990 },
  { komponen: "Angkut TBS", nilaiRpKg: 890, targetRpKg: 850 },
  { komponen: "Pengolahan Pabrik", nilaiRpKg: 1680, targetRpKg: 1650 },
  { komponen: "Overhead & Umum", nilaiRpKg: 1990, targetRpKg: 2000 },
];

export const hppNote =
  "HPP Rp 8.950/kg vs target Rp 8.700 (+2,9%). Deviasi terbesar di pupuk (+Rp 160/kg, harga NPK +25% YoY) dan angkut (+Rp 40/kg).";

/* ── 2. HPP Trend Bulanan vs Harga Jual (jaws) ────────────────────── */

export interface HppTrendPoint {
  bulan: string;
  /** HPP CPO (Rp/kg). */
  hppRpKg: number;
  /** Harga jual realisasi rata-rata (Rp/kg). */
  hargaJualRpKg: number;
}

/**
 * Rata-rata harga jual Jan–Mei 2026 = Rp 12.482/kg — selaras
 * PEMASARAN.cpoAvgYtdRpKg. Mei = realisasi rata-rata (spot akhir Mei 13.680).
 */
export const hppTrend: HppTrendPoint[] = [
  { bulan: "Jun 25", hppRpKg: 8580, hargaJualRpKg: 11850 },
  { bulan: "Jul 25", hppRpKg: 8560, hargaJualRpKg: 11920 },
  { bulan: "Agu 25", hppRpKg: 8610, hargaJualRpKg: 12040 },
  { bulan: "Sep 25", hppRpKg: 8640, hargaJualRpKg: 12180 },
  { bulan: "Okt 25", hppRpKg: 8700, hargaJualRpKg: 12350 },
  { bulan: "Nov 25", hppRpKg: 8760, hargaJualRpKg: 12520 },
  { bulan: "Des 25", hppRpKg: 8720, hargaJualRpKg: 12400 },
  { bulan: "Jan 26", hppRpKg: 8810, hargaJualRpKg: 11980 },
  { bulan: "Feb 26", hppRpKg: 8860, hargaJualRpKg: 12240 },
  { bulan: "Mar 26", hppRpKg: 8900, hargaJualRpKg: 12510 },
  { bulan: "Apr 26", hppRpKg: 8930, hargaJualRpKg: 12760 },
  { bulan: "Mei 26", hppRpKg: 8950, hargaJualRpKg: 12920 },
];

export const hppTrendNote =
  "Jaws masih positif (margin kas Rp 3.970/kg per Mei) tetapi HPP naik 4,3% dalam 12 bulan — kenaikan harga jual menutupi inflasi biaya, bukan efisiensi.";

/* ── 3. HPP Benchmark ─────────────────────────────────────────────── */

export interface HppBenchmarkRow {
  entitas: string;
  hppRpKg: number;
  /** Penanda baris PTPN. */
  isPtpn: boolean;
}

export const hppBenchmark: HppBenchmarkRow[] = [
  { entitas: "PTPN Group", hppRpKg: 8950, isPtpn: true },
  { entitas: "Rata-rata Industri", hppRpKg: 8600, isPtpn: false },
  { entitas: "Peer Swasta Terbaik", hppRpKg: 7900, isPtpn: false },
];

export const hppBenchmarkNote =
  "Gap Rp 1.050/kg vs peer swasta terbaik ≈ Rp 2,6 T/tahun pada volume FY 2,53 jt ton — dua pertiga gap dari yield & profil umur, sepertiga dari efisiensi pabrik/logistik.";

/* ── 4. HPP per Regional (flag outlier) ───────────────────────────── */

export interface CostRegionalRow {
  regional: string;
  hppRpKg: number;
  /** Outlier = deviasi >5% di atas rata-rata grup. */
  outlier: boolean;
  driver: string;
}

/** Rata-rata tertimbang luas ≈ Rp 8.950/kg — selaras baseline. */
export const costPerRegional: CostRegionalRow[] = [
  { regional: "Regional 1", hppRpKg: 8420, outlier: false, driver: "Skala & yield tinggi" },
  { regional: "Regional 2", hppRpKg: 8560, outlier: false, driver: "Utilisasi PKS baik" },
  { regional: "Regional 3", hppRpKg: 8680, outlier: false, driver: "Biaya angkut moderat" },
  { regional: "Regional 4", hppRpKg: 9120, outlier: false, driver: "Yield di bawah rata-rata" },
  { regional: "Regional 5", hppRpKg: 9040, outlier: false, driver: "Restan & rotasi panen panjang" },
  { regional: "Regional 6", hppRpKg: 9680, outlier: true, driver: "Jarak angkut & jalan rusak, yield rendah" },
  { regional: "Regional 7", hppRpKg: 9480, outlier: true, driver: "Skala kecil, areal renta dominan" },
];

/* ── 5. Inisiatif Efisiensi Biaya (jumlah = Rp 412 M YTD) ─────────── */

export interface EfisiensiProgram {
  program: string;
  /** Kontribusi penghematan YTD (Rp M) — jumlah 5 program = 412. */
  kontribusiRpM: number;
  status: "On Track" | "Waspada";
}

export const efisiensiInisiatif: EfisiensiProgram[] = [
  { program: "Mekanisasi panen & angkut buah", kontribusiRpM: 128, status: "On Track" },
  { program: "Renegosiasi & sentralisasi pengadaan pupuk", kontribusiRpM: 96, status: "Waspada" },
  { program: "Efisiensi energi pabrik (co-firing cangkang)", kontribusiRpM: 74, status: "On Track" },
  { program: "Optimasi rute logistik TBS", kontribusiRpM: 62, status: "On Track" },
  { program: "Digitalisasi timbangan (smart weighbridge)", kontribusiRpM: 52, status: "On Track" },
];

export const bppInsights: ProdInsight[] = [
  {
    title: "Pupuk Penyumbang Deviasi Terbesar",
    text: "+Rp 160/kg vs alokasi target. Kontrak H2 terpusat (Decision Center) menahan eskalasi; substitusi kompos tankos menutup sisa gap.",
    tone: "red",
  },
  {
    title: "Regional 6–7 Outlier Biaya",
    text: "HPP Rp 9.480–9.680/kg (7–8% di atas grup). Kombinasi yield rendah + jarak angkut; perbaikan jalan produksi masuk prioritas capex.",
    tone: "amber",
  },
  {
    title: "Efisiensi Rp 412 M YTD",
    text: "5 program biaya berjalan sesuai rencana (run-rate FY ± Rp 1,0 T) — bagian dari dampak OPEX Rp 680 M EBITDA plus uplift volume.",
    tone: "green",
  },
];

/* ══ OPERATIONAL EXCELLENCE ════════════════════════════════════════ */

/* ── 6. KPI OPEX ──────────────────────────────────────────────────── */

export const opexKpi: ProdKpi[] = [
  {
    label: "Inisiatif Aktif",
    value: "24",
    sub: "5 Workstream",
    delta: "+6",
    trend: "up",
    deltaTone: "good",
    compare: "vs Des 2025",
    icon: "tbs",
    tone: "blue",
    metric: "Inisiatif OPEX Aktif",
  },
  {
    label: "Dampak EBITDA",
    value: "Rp 680 M",
    sub: "YTD · Target FY Rp 1,64 T",
    delta: "41,5%",
    trend: "up",
    deltaTone: "good",
    compare: "dari Target FY",
    icon: "hpp",
    tone: "green",
    metric: "Dampak EBITDA OPEX",
  },
  {
    label: "Inisiatif On-Track",
    value: "71%",
    sub: "17 Hijau · 5 Kuning · 2 Merah",
    delta: "-4 ppt",
    trend: "down",
    deltaTone: "bad",
    compare: "vs Q1 2026",
    icon: "oer",
    tone: "amber",
    metric: "OPEX On-Track Rate",
  },
  {
    label: "Maturity Rata-rata",
    value: "3,1",
    sub: "/5 · Target 2026: 3,5",
    delta: "+0,3",
    trend: "up",
    deltaTone: "good",
    compare: "vs Des 2025",
    icon: "gula",
    tone: "teal",
    metric: "OPEX Maturity Index",
  },
];

/* ── 7. Portofolio Inisiatif (12 terbesar dari 24) ────────────────── */

export type OpexWorkstream =
  | "Mekanisasi"
  | "Digital & Data"
  | "Pabrik & Energi"
  | "Agronomi"
  | "Supply Chain";

export interface OpexInitiative {
  inisiatif: string;
  workstream: OpexWorkstream;
  /** Dampak EBITDA YTD (Rp M). */
  dampakRpM: number;
  status: "Hijau" | "Kuning" | "Merah";
  progressPct: number;
  owner: string;
}

/**
 * 12 inisiatif terbesar dari 24; jumlah dampak 12 inisiatif = Rp 680 M
 * (12 sisanya fase mobilisasi, dampak belum material).
 */
export const opexInitiatives: OpexInitiative[] = [
  { inisiatif: "Mekanisasi panen & angkut buah", workstream: "Mekanisasi", dampakRpM: 132, status: "Hijau", progressPct: 68, owner: "Dir. Produksi" },
  { inisiatif: "Mekanisasi perawatan (semprot drone)", workstream: "Mekanisasi", dampakRpM: 82, status: "Kuning", progressPct: 46, owner: "Dir. Produksi" },
  { inisiatif: "Digital mill command center", workstream: "Digital & Data", dampakRpM: 68, status: "Hijau", progressPct: 72, owner: "Dir. Operasi" },
  { inisiatif: "Precision agriculture (drone & sensor)", workstream: "Digital & Data", dampakRpM: 46, status: "Hijau", progressPct: 54, owner: "Dir. Produksi" },
  { inisiatif: "Smart weighbridge 36 PKS", workstream: "Digital & Data", dampakRpM: 42, status: "Hijau", progressPct: 81, owner: "Dir. Operasi" },
  { inisiatif: "Optimasi losses PKS (decanter & press)", workstream: "Pabrik & Energi", dampakRpM: 64, status: "Hijau", progressPct: 58, owner: "Dir. Operasi" },
  { inisiatif: "Co-firing cangkang & efisiensi boiler", workstream: "Pabrik & Energi", dampakRpM: 52, status: "Hijau", progressPct: 63, owner: "Dir. Operasi" },
  { inisiatif: "Reduksi downtime terencana (RCM)", workstream: "Pabrik & Energi", dampakRpM: 32, status: "Kuning", progressPct: 41, owner: "Dir. Operasi" },
  { inisiatif: "Pemupukan presisi berbasis analisis daun", workstream: "Agronomi", dampakRpM: 58, status: "Kuning", progressPct: 39, owner: "Dir. Produksi" },
  { inisiatif: "Standardisasi BMP kebun (best practice)", workstream: "Agronomi", dampakRpM: 44, status: "Hijau", progressPct: 66, owner: "Dir. Produksi" },
  { inisiatif: "Optimasi rute logistik TBS", workstream: "Supply Chain", dampakRpM: 38, status: "Hijau", progressPct: 70, owner: "Dir. Operasi" },
  { inisiatif: "Sentralisasi pengadaan pupuk & suku cadang", workstream: "Supply Chain", dampakRpM: 22, status: "Merah", progressPct: 24, owner: "Dir. Keuangan" },
];

/* ── 8. Impact Waterfall per Workstream (jumlah = Rp 680 M) ───────── */

export interface OpexImpactStep {
  workstream: OpexWorkstream;
  dampakRpM: number;
}

/**
 * Jumlah = Rp 680 M EBITDA YTD. Komponen penurunan biaya Rp 412 M
 * (selaras efisiensiInisiatif); sisanya Rp 268 M uplift volume/yield.
 */
export const opexImpactWaterfall: OpexImpactStep[] = [
  { workstream: "Mekanisasi", dampakRpM: 214 },
  { workstream: "Digital & Data", dampakRpM: 156 },
  { workstream: "Pabrik & Energi", dampakRpM: 148 },
  { workstream: "Agronomi", dampakRpM: 102 },
  { workstream: "Supply Chain", dampakRpM: 60 },
];

/* ── 9. Maturity Radar per Regional ───────────────────────────────── */

export interface OpexMaturityRow {
  regional: string;
  /** Skor maturity operational excellence (1–5). */
  skor: number;
}

export const OPEX_MATURITY_TARGET = 3.5;

export const opexMaturity: OpexMaturityRow[] = [
  { regional: "Regional 1", skor: 3.6 },
  { regional: "Regional 2", skor: 3.5 },
  { regional: "Regional 3", skor: 3.3 },
  { regional: "Regional 4", skor: 3.0 },
  { regional: "Regional 5", skor: 3.0 },
  { regional: "Regional 6", skor: 2.6 },
  { regional: "Regional 7", skor: 2.5 },
];

/* ── 10. Milestone Kuartalan 2026 ─────────────────────────────────── */

export interface OpexMilestone {
  kuartal: string;
  milestone: string;
  status: "Selesai" | "Berjalan" | "Rencana";
}

export const opexMilestones: OpexMilestone[] = [
  { kuartal: "Q1 2026", milestone: "Rollout smart weighbridge di 18 PKS gelombang pertama", status: "Selesai" },
  { kuartal: "Q2 2026", milestone: "Digital mill command center live di 12 PKS + mekanisasi panen 4 regional", status: "Selesai" },
  { kuartal: "Q3 2026", milestone: "Kontrak pupuk H2 terpusat + co-firing cangkang 8 PKS tambahan", status: "Berjalan" },
  { kuartal: "Q4 2026", milestone: "Precision agriculture penuh 7 regional + RCM di seluruh PKS prioritas", status: "Rencana" },
];

export const opexInsights: ProdInsight[] = [
  {
    title: "41,5% Target FY di Bulan ke-5",
    text: "Dampak Rp 680 M sedikit di bawah run-rate linear (41,7%), namun mayoritas dampak mekanisasi & digital terakru di H2 — proyeksi FY tetap Rp 1,64 T.",
    tone: "green",
  },
  {
    title: "1 Inisiatif Merah: Sentralisasi Pengadaan",
    text: "Progress 24%; blocker harmonisasi kebijakan pengadaan antar subholding. Eskalasi ke BOD bersamaan keputusan kontrak pupuk H2.",
    tone: "red",
  },
  {
    title: "Maturity Timpang Antar Regional",
    text: "Regional 1–2 sudah 3,5–3,6 vs Regional 6–7 masih 2,5–2,6. Replikasi playbook regional matang lebih cepat daripada membangun dari nol.",
    tone: "amber",
  },
];
