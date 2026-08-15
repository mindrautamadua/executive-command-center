/**
 * Data statis halaman Kinerja Pabrik (/produksi-operasi/kinerja-pabrik).
 * Periode acuan: 31 Mei 2026 (YTD). Angka fasilitas dari group-baseline.ts
 * (67 pabrik / 64 aktif: 36 PKS, 17 PG, 9 karet, 5 teh).
 */

import { PRODUKSI } from "./group-baseline";
import type { ProdInsight, ProdKpi } from "./produksi-data";

/* ── 1. KPI Strip ─────────────────────────────────────────────────── */

export const pabKpi: ProdKpi[] = [
  {
    label: "Pabrik Aktif",
    value: `${PRODUKSI.pabrikAktif}/${PRODUKSI.pabrikTotal}`,
    sub: "36 PKS · 17 PG · 9 Karet · 5 Teh",
    delta: "3 idle",
    trend: "down",
    deltaTone: "bad",
    compare: "2 PG + 1 karet non-operasi",
    icon: "tbs",
    tone: "blue",
    metric: "Pabrik Aktif",
  },
  {
    label: "Utilisasi PKS",
    value: "78,4%",
    sub: "Target 82,0%",
    delta: "-3,6 ppt",
    trend: "down",
    deltaTone: "bad",
    compare: "vs Target RKAP",
    icon: "oer",
    tone: "amber",
    metric: "Utilisasi Kapasitas PKS",
  },
  {
    label: "Losses CPO",
    value: "1,58%",
    sub: "Norma ≤1,65%",
    delta: "-0,07 ppt",
    trend: "down",
    deltaTone: "good",
    compare: "vs Norma",
    icon: "cpo",
    tone: "green",
    metric: "Total Losses CPO",
  },
  {
    label: "Downtime Tak Terencana",
    value: "4,2%",
    sub: "Target ≤3,5%",
    delta: "+0,7 ppt",
    trend: "up",
    deltaTone: "bad",
    compare: "vs Target RKAP",
    icon: "hpp",
    tone: "red",
    metric: "Unplanned Downtime",
  },
  {
    label: "Throughput PKS",
    value: "1.680",
    sub: "Ton TBS/Jam · Terpasang 2.145",
    delta: "+4,1%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "tbs",
    tone: "teal",
    metric: "Throughput Agregat PKS",
  },
];

/* ── 2. Utilisasi per Jenis Pabrik ────────────────────────────────── */

export interface UtilisasiJenis {
  jenis: string;
  unit: number;
  kapasitas: string;
  utilisasiPct: number;
  targetPct: number;
  note?: string;
}

export const utilisasiByJenis: UtilisasiJenis[] = [
  {
    jenis: "PKS (Sawit)",
    unit: PRODUKSI.pks, // 36
    kapasitas: "2.145 ton TBS/jam",
    utilisasiPct: 78.4,
    targetPct: 82.0,
  },
  {
    jenis: "PG (Gula)",
    unit: PRODUKSI.pg, // 17
    kapasitas: "82,5 rb TCD",
    utilisasiPct: 71.2,
    targetPct: 85.0,
    note: "Musim giling baru mulai Mei — utilisasi bulan pertama giling.",
  },
  {
    jenis: "Pabrik Karet",
    unit: PRODUKSI.pabrikKaret, // 9
    kapasitas: "412 ton KK/hari",
    utilisasiPct: 64.8,
    targetPct: 75.0,
  },
  {
    jenis: "Pabrik Teh",
    unit: PRODUKSI.pabrikTeh, // 5
    kapasitas: "186 ton pucuk/hari",
    utilisasiPct: 70.6,
    targetPct: 78.0,
  },
];

/* ── 3. Losses Breakdown (jumlah = 1,58%) ─────────────────────────── */

export interface LossKomponen {
  komponen: string;
  /** Losses aktual (% terhadap TBS) — jumlah 4 komponen = 1,58. */
  aktualPct: number;
  /** Norma per komponen — jumlah = 1,65. */
  normaPct: number;
}

export const lossesBreakdown: LossKomponen[] = [
  { komponen: "Tandan Kosong (Empty Bunch)", aktualPct: 0.29, normaPct: 0.3 },
  { komponen: "Ampas (Fibre)", aktualPct: 0.54, normaPct: 0.55 },
  { komponen: "Biji (Nut)", aktualPct: 0.28, normaPct: 0.3 },
  { komponen: "Sludge / Drab Akhir", aktualPct: 0.47, normaPct: 0.5 },
];

export const lossesNote =
  "Total losses 1,58% masih di bawah norma 1,65%, tetapi 9 PKS tua melampaui norma pada komponen sludge — target perbaikan decanter di program revitalisasi.";

/* ── 4. Downtime Pareto ───────────────────────────────────────────── */

export interface DowntimePenyebab {
  penyebab: string;
  /** Jam downtime YTD. */
  jam: number;
  /** Porsi terhadap total (%), jumlah = 100. */
  pct: number;
  /** Kumulatif Pareto (%). */
  kumulatifPct: number;
}

export const downtimePareto: DowntimePenyebab[] = [
  { penyebab: "Kerusakan Mekanikal", jam: 2432, pct: 38, kumulatifPct: 38 },
  { penyebab: "Kekurangan Pasokan TBS", jam: 1664, pct: 26, kumulatifPct: 64 },
  { penyebab: "Boiler & Steam", jam: 1024, pct: 16, kumulatifPct: 80 },
  { penyebab: "Listrik / Genset", jam: 768, pct: 12, kumulatifPct: 92 },
  { penyebab: "Lainnya", jam: 512, pct: 8, kumulatifPct: 100 },
];

/* ── 5. Pabrik League Table (top/bottom 5 PKS) ────────────────────── */

export interface PabrikUnit {
  pabrik: string;
  regional: string;
  oerPct: number;
  utilisasiPct: number;
}

export const pabrikLeagueTop: PabrikUnit[] = [
  { pabrik: "PKS Sei Mangkei", regional: "Regional 2", oerPct: 23.8, utilisasiPct: 86.2 },
  { pabrik: "PKS Adolina", regional: "Regional 1", oerPct: 23.5, utilisasiPct: 84.8 },
  { pabrik: "PKS Dolok Ilir", regional: "Regional 2", oerPct: 23.2, utilisasiPct: 83.5 },
  { pabrik: "PKS Sosa", regional: "Regional 1", oerPct: 23.0, utilisasiPct: 82.1 },
  { pabrik: "PKS Sei Rokan", regional: "Regional 3", oerPct: 22.9, utilisasiPct: 85.4 },
];

export const pabrikLeagueBottom: PabrikUnit[] = [
  { pabrik: "PKS Ophir", regional: "Regional 4", oerPct: 20.4, utilisasiPct: 58.2 },
  { pabrik: "PKS Kertajaya", regional: "Regional 5", oerPct: 20.8, utilisasiPct: 61.4 },
  { pabrik: "PKS Rejosari", regional: "Regional 5", oerPct: 21.0, utilisasiPct: 63.8 },
  { pabrik: "PKS Ngabang", regional: "Regional 6", oerPct: 21.2, utilisasiPct: 60.5 },
  { pabrik: "PKS Parindu", regional: "Regional 6", oerPct: 21.3, utilisasiPct: 62.7 },
];

/* ── 6. PG Readiness (17 PG) ──────────────────────────────────────── */

export interface PgUnit {
  pg: string;
  wilayah: string;
  /** Jam berhenti giling (% jam giling tersedia) — target ≤10%. */
  jamBerhentiPct: number;
  /** Overall recovery (%) — target ≥80%. */
  overallRecoveryPct: number;
}

export const PG_JAM_BERHENTI_TARGET_PCT = 10;
export const PG_OVERALL_RECOVERY_TARGET_PCT = 80;

export const pgReadiness: PgUnit[] = [
  { pg: "PG Sei Semayang", wilayah: "Sumut", jamBerhentiPct: 8.4, overallRecoveryPct: 79.6 },
  { pg: "PG Kwala Madu", wilayah: "Sumut", jamBerhentiPct: 9.8, overallRecoveryPct: 78.2 },
  { pg: "PG Cinta Manis", wilayah: "Sumsel", jamBerhentiPct: 14.6, overallRecoveryPct: 74.8 },
  { pg: "PG Bungamayang", wilayah: "Lampung", jamBerhentiPct: 8.9, overallRecoveryPct: 80.4 },
  { pg: "PG Gempolkrep", wilayah: "Jatim", jamBerhentiPct: 12.8, overallRecoveryPct: 76.5 },
  { pg: "PG Ngadiredjo", wilayah: "Jatim", jamBerhentiPct: 6.8, overallRecoveryPct: 82.6 },
  { pg: "PG Pesantren Baru", wilayah: "Jatim", jamBerhentiPct: 9.2, overallRecoveryPct: 79.8 },
  { pg: "PG Tjoekir", wilayah: "Jatim", jamBerhentiPct: 11.4, overallRecoveryPct: 77.1 },
  { pg: "PG Modjopanggoong", wilayah: "Jatim", jamBerhentiPct: 10.6, overallRecoveryPct: 78.0 },
  { pg: "PG Meritjan", wilayah: "Jatim", jamBerhentiPct: 13.2, overallRecoveryPct: 75.4 },
  { pg: "PG Kremboong", wilayah: "Jatim", jamBerhentiPct: 12.1, overallRecoveryPct: 76.2 },
  { pg: "PG Gending", wilayah: "Jatim", jamBerhentiPct: 15.4, overallRecoveryPct: 73.6 },
  { pg: "PG Semboro", wilayah: "Jatim", jamBerhentiPct: 7.2, overallRecoveryPct: 81.8 },
  { pg: "PG Djatiroto", wilayah: "Jatim", jamBerhentiPct: 9.6, overallRecoveryPct: 80.1 },
  { pg: "PG Asembagus", wilayah: "Jatim", jamBerhentiPct: 12.4, overallRecoveryPct: 75.9 },
  { pg: "PG Pradjekan", wilayah: "Jatim", jamBerhentiPct: 13.8, overallRecoveryPct: 74.2 },
  { pg: "PG Wonolangan", wilayah: "Jatim", jamBerhentiPct: 16.2, overallRecoveryPct: 72.8 },
];

export const pgReadinessNote =
  "Rata-rata jam berhenti giling 11,3% (target ≤10%) dan overall recovery 77,4% (target ≥80%) pada bulan pertama giling — 7 PG merah menentukan capaian FY gula 780 rb ton.";

/* ── 7. Program Revitalisasi (6 pabrik) ───────────────────────────── */

export interface RevitalisasiProgram {
  pabrik: string;
  lingkup: string;
  capexRpM: number;
  progressPct: number;
  status: "On Track" | "Waspada" | "Terlambat";
  target: string;
}

/** Total capex program = Rp 2.203 M — bagian RKAP capex pabrik. */
export const revitalisasi: RevitalisasiProgram[] = [
  {
    pabrik: "PG Djatiroto",
    lingkup: "Upgrade gilingan & boiler efisiensi tinggi",
    capexRpM: 620,
    progressPct: 58,
    status: "On Track",
    target: "Q2 2027",
  },
  {
    pabrik: "PG Gempolkrep",
    lingkup: "Revitalisasi stasiun masakan & puteran",
    capexRpM: 540,
    progressPct: 44,
    status: "On Track",
    target: "Q3 2027",
  },
  {
    pabrik: "PG Cinta Manis",
    lingkup: "Modernisasi boiler + automasi giling",
    capexRpM: 480,
    progressPct: 36,
    status: "Waspada",
    target: "Q4 2027",
  },
  {
    pabrik: "PKS Rejosari",
    lingkup: "Penggantian sterilizer & decanter",
    capexRpM: 210,
    progressPct: 62,
    status: "On Track",
    target: "Q1 2027",
  },
  {
    pabrik: "PKS Kertajaya",
    lingkup: "Upgrade kapasitas 30→45 ton TBS/jam",
    capexRpM: 185,
    progressPct: 28,
    status: "Waspada",
    target: "Q2 2027",
  },
  {
    pabrik: "PKS Ophir",
    lingkup: "Overhaul boiler, press & klarifikasi",
    capexRpM: 168,
    progressPct: 21,
    status: "Terlambat",
    target: "Q1 2027",
  },
];

/* ── 8. Insights ──────────────────────────────────────────────────── */

export const pabInsights: ProdInsight[] = [
  {
    title: "Pareto Downtime: 64% dari 2 Penyebab",
    text: "Kerusakan mekanikal (38%) + kekurangan pasokan TBS (26%) mendominasi downtime. Mekanikal dijawab revitalisasi; pasokan dijawab perbaikan rotasi panen & plasma.",
    tone: "red",
  },
  {
    title: "Spread OER Antar-PKS 3,4 ppt",
    text: "PKS terbaik 23,8% vs terburuk 20,4%. Menaikkan 5 PKS terbawah ke rata-rata grup setara ± Rp 180 M/bln pada volume puncak.",
    tone: "amber",
  },
  {
    title: "Losses Terkendali",
    text: "Total losses 1,58% di bawah norma — praktik terbaik Sei Mangkei (decanter 3-phase) siap direplikasi ke 9 PKS tua.",
    tone: "green",
  },
  {
    title: "PG Jelang Puncak Giling",
    text: "7 dari 17 PG di atas ambang jam berhenti 10% pada bulan pertama; jendela perbaikan sebelum puncak giling Jul–Sep sangat pendek.",
    tone: "amber",
  },
];
