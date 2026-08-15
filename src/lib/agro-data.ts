/**
 * Data statis halaman Agronomi & Replanting (/produksi-operasi/agronomi-replanting),
 * Plasma & Kemitraan (/produksi-operasi/plasma-kemitraan), dan Panen & Logistik
 * (/produksi-operasi/panen-logistik).
 * Periode acuan: 31 Mei 2026 (YTD). Angka induk dari group-baseline.ts
 * (sawit inti 508,7 rb ha, yield 21,9 t/ha, 338 kebun plasma).
 */

import { PRODUKSI, RISIKO } from "./group-baseline";
import type { ProdInsight, ProdRiskLevel } from "./produksi-data";

/* ══ AGRONOMI & REPLANTING ═════════════════════════════════════════ */

/* ── 1. Profil Umur Tanaman (jumlah luas = 508,7 rb ha) ───────────── */

export interface AgeBucket {
  bucket: string;
  rentang: string;
  /** Porsi areal (%), jumlah = 100. */
  pct: number;
  /** Luas (rb ha), jumlah = 508,7. */
  luasRbHa: number;
  /** Yield curve overlay (ton TBS/ha/tahun); TBM belum menghasilkan. */
  yieldTonHa: number;
}

/**
 * Rata-rata tertimbang yield areal menghasilkan = 21,9 t/ha (selaras
 * PRODUKSI.yieldTbsTonHa). Tua + renta 27% jadi driver 40% gap yield.
 */
export const ageProfile: AgeBucket[] = [
  { bucket: "TBM", rentang: "0–3 thn", pct: 12, luasRbHa: 61.0, yieldTonHa: 0 },
  { bucket: "Muda", rentang: "4–8 thn", pct: 18, luasRbHa: 91.6, yieldTonHa: 18.5 },
  { bucket: "Prima", rentang: "9–18 thn", pct: 43, luasRbHa: 218.7, yieldTonHa: 26.0 },
  { bucket: "Tua", rentang: "19–24 thn", pct: 19, luasRbHa: 96.7, yieldTonHa: 19.8 },
  { bucket: "Renta", rentang: ">25 thn", pct: 8, luasRbHa: 40.7, yieldTonHa: 13.2 },
];

/* ── 2. Replanting Roadmap 2026–2030 per Regional ─────────────────── */

export interface ReplantingPlan {
  regional: string;
  /** Target tanam ulang 2026 (ha) — jumlah 7 regional = 12.500. */
  target2026Ha: number;
  /** Realisasi YTD Mei 2026 (ha) — jumlah = 4.180 (33,4%). */
  realisasiYtdHa: number;
  target2027Ha: number;
  target2028Ha: number;
  target2029Ha: number;
  target2030Ha: number;
}

/** Total roadmap: 2026 12.500 · 2027 15.000 · 2028 18.000 · 2029 20.000 · 2030 22.000 ha. */
export const replantingRoadmap: ReplantingPlan[] = [
  { regional: "Regional 1", target2026Ha: 1800, realisasiYtdHa: 620, target2027Ha: 2200, target2028Ha: 2600, target2029Ha: 2900, target2030Ha: 3200 },
  { regional: "Regional 2", target2026Ha: 2400, realisasiYtdHa: 780, target2027Ha: 2900, target2028Ha: 3500, target2029Ha: 3900, target2030Ha: 4300 },
  { regional: "Regional 3", target2026Ha: 2200, realisasiYtdHa: 740, target2027Ha: 2600, target2028Ha: 3100, target2029Ha: 3400, target2030Ha: 3700 },
  { regional: "Regional 4", target2026Ha: 1600, realisasiYtdHa: 520, target2027Ha: 1900, target2028Ha: 2300, target2029Ha: 2600, target2030Ha: 2800 },
  { regional: "Regional 5", target2026Ha: 2000, realisasiYtdHa: 660, target2027Ha: 2400, target2028Ha: 2900, target2029Ha: 3200, target2030Ha: 3500 },
  { regional: "Regional 6", target2026Ha: 1300, realisasiYtdHa: 440, target2027Ha: 1600, target2028Ha: 1900, target2029Ha: 2100, target2030Ha: 2400 },
  { regional: "Regional 7", target2026Ha: 1200, realisasiYtdHa: 420, target2027Ha: 1400, target2028Ha: 1700, target2029Ha: 1900, target2030Ha: 2100 },
];

export const replantingNote =
  "Realisasi YTD 4.180 ha (33,4% target 12.500 ha) — di bawah run-rate linear 41,7%; percepatan H2 masuk agenda Decision Center.";

/* ── 3. Pemupukan: Realisasi vs Rencana per Semester ──────────────── */

export interface PemupukanSemester {
  periode: string;
  /** Rencana aplikasi pupuk (rb ton). */
  rencanaRbTon: number;
  /** Realisasi (rb ton); null = belum berjalan. */
  realisasiRbTon: number | null;
  /** Capaian (%); null = belum berjalan. */
  capaianPct: number | null;
  note?: string;
}

export const pemupukan: PemupukanSemester[] = [
  { periode: "S2 2025", rencanaRbTon: 402, realisasiRbTon: 389, capaianPct: 96.8 },
  {
    periode: "S1 2026",
    rencanaRbTon: 428,
    realisasiRbTon: 361,
    capaianPct: 84.3,
    note: "Tertekan kenaikan harga & keterlambatan pasokan NPK.",
  },
  {
    periode: "S2 2026",
    rencanaRbTon: 415,
    realisasiRbTon: null,
    capaianPct: null,
    note: "Kontrak H2 belum terkunci — menunggu keputusan BOD Jul 2026.",
  },
];

/** Tren harga NPK (Rp/kg) — naik ±25% YoY. */
export interface HargaPupukPoint {
  periode: string;
  hargaRpKg: number;
}

export const hargaPupukTrend: HargaPupukPoint[] = [
  { periode: "Q1 2025", hargaRpKg: 7850 },
  { periode: "Q2 2025", hargaRpKg: 8100 },
  { periode: "Q3 2025", hargaRpKg: 8420 },
  { periode: "Q4 2025", hargaRpKg: 8900 },
  { periode: "Q1 2026", hargaRpKg: 9450 },
  { periode: "Q2 2026", hargaRpKg: 9820 },
];

/* ── 4. Curah Hujan & ENSO ────────────────────────────────────────── */

export interface CurahHujanPoint {
  bulan: string;
  /** Curah hujan aktual rata-rata kebun grup (mm). */
  aktualMm: number;
  /** Normal klimatologis 30 tahun (mm). */
  normalMm: number;
}

/** 12 bulan terakhir (Jun 2025–Mei 2026); total aktual 2.074 vs normal 2.530 mm → anomali -18%. */
export const curahHujanBulanan: CurahHujanPoint[] = [
  { bulan: "Jun 25", aktualMm: 156, normalMm: 180 },
  { bulan: "Jul 25", aktualMm: 142, normalMm: 170 },
  { bulan: "Agu 25", aktualMm: 150, normalMm: 190 },
  { bulan: "Sep 25", aktualMm: 170, normalMm: 210 },
  { bulan: "Okt 25", aktualMm: 188, normalMm: 240 },
  { bulan: "Nov 25", aktualMm: 208, normalMm: 260 },
  { bulan: "Des 25", aktualMm: 210, normalMm: 250 },
  { bulan: "Jan 26", aktualMm: 194, normalMm: 230 },
  { bulan: "Feb 26", aktualMm: 180, normalMm: 220 },
  { bulan: "Mar 26", aktualMm: 170, normalMm: 210 },
  { bulan: "Apr 26", aktualMm: 154, normalMm: 190 },
  { bulan: "Mei 26", aktualMm: 152, normalMm: 180 },
];

export const CURAH_HUJAN_ANOMALI_PCT = -18;

export interface CurahHujanRegional {
  regional: string;
  /** Anomali 12 bulan vs normal (%). */
  anomaliPct: number;
}

export const curahHujanRegional: CurahHujanRegional[] = [
  { regional: "Regional 1", anomaliPct: -12 },
  { regional: "Regional 2", anomaliPct: -14 },
  { regional: "Regional 3", anomaliPct: -19 },
  { regional: "Regional 4", anomaliPct: -16 },
  { regional: "Regional 5", anomaliPct: -22 },
  { regional: "Regional 6", anomaliPct: -24 },
  { regional: "Regional 7", anomaliPct: -21 },
];

/** Indeks ONI (Oceanic Nino Index); ≥ +1,0 = El Nino moderat. */
export interface EnsoPoint {
  periode: string;
  oni: number;
  proyeksi: boolean;
}

export const ensoIndex: EnsoPoint[] = [
  { periode: "Jun 25", oni: -0.2, proyeksi: false },
  { periode: "Agu 25", oni: 0.1, proyeksi: false },
  { periode: "Okt 25", oni: 0.4, proyeksi: false },
  { periode: "Des 25", oni: 0.7, proyeksi: false },
  { periode: "Feb 26", oni: 0.9, proyeksi: false },
  { periode: "Apr 26", oni: 1.1, proyeksi: false },
  { periode: "Jul 26", oni: 1.3, proyeksi: true },
  { periode: "Sep 26", oni: 1.5, proyeksi: true },
];

/* ── 5. Skenario El Nino H2 2026 ──────────────────────────────────── */

export interface ElNinoScenario {
  skenario: string;
  probabilitasPct: number;
  /** Dampak produksi H2 2026 (%). */
  dampakProduksiH2Pct: number;
  /** Setara koreksi TBS FY (jt ton). */
  dampakTbsFyJtTon: number;
  /** Dampak EBITDA grup (Rp T). */
  dampakEbitdaRpT: number;
  note: string;
}

/**
 * Probabilitas El Nino H2 total = 62% (lemah 34 + moderat 28) — selaras
 * RISIKO.elNinoProbabilitasPct (BMKG/NOAA).
 */
export const elNinoScenarios: ElNinoScenario[] = [
  {
    skenario: "Netral",
    probabilitasPct: 38,
    dampakProduksiH2Pct: 0,
    dampakTbsFyJtTon: 0,
    dampakEbitdaRpT: 0,
    note: "Produksi sesuai RKAP; curah hujan kembali mendekati normal.",
  },
  {
    skenario: "El Nino Lemah",
    probabilitasPct: 34,
    dampakProduksiH2Pct: -2,
    dampakTbsFyJtTon: -0.14,
    dampakEbitdaRpT: -0.6,
    note: "Stres air ringan; dampak yield terasa mulai Q4 2026.",
  },
  {
    skenario: "El Nino Moderat",
    probabilitasPct: 28,
    dampakProduksiH2Pct: -6,
    dampakTbsFyJtTon: -0.41,
    dampakEbitdaRpT: -1.9,
    note: "Defisit air meluas; efek lanjutan menekan produksi H1 2027.",
  },
];

export const EL_NINO_PROBABILITAS_PCT = RISIKO.elNinoProbabilitasPct; // 62

/* ── Insights Agronomi ────────────────────────────────────────────── */

export const agroInsights: ProdInsight[] = [
  {
    title: "27% Areal Tua/Renta",
    text: "96,7 rb ha tua + 40,7 rb ha renta menahan yield grup; kurva yield jatuh dari 26,0 (prima) ke 13,2 t/ha (renta). Replanting adalah tuas yield terbesar (40% gap).",
    tone: "red",
  },
  {
    title: "Replanting di Bawah Run-Rate",
    text: "YTD 33,4% vs run-rate linear 41,7%. Regional 6–7 paling tertinggal — justru wilayah dengan profil umur terburuk.",
    tone: "amber",
  },
  {
    title: "Pupuk: Harga Naik, Realisasi Turun",
    text: "Harga NPK +25% YoY, realisasi S1 hanya 84,3%. Defisit pemupukan 2 semester berisiko menekan yield 12–18 bulan ke depan (lag agronomis).",
    tone: "amber",
  },
  {
    title: "ONI Menembus Ambang El Nino",
    text: "ONI April 1,1 dan proyeksi September 1,5; anomali hujan sudah -18%. Aktifkan protokol water management sebelum puncak kemarau.",
    tone: "red",
  },
];

/* ══ PLASMA & KEMITRAAN ════════════════════════════════════════════ */

/* ── 6. Pasokan TBS Plasma ────────────────────────────────────────── */

export interface PlasmaSupplyPoint {
  bulan: string;
  /** TBS plasma diterima PKS (rb ton) — jumlah Jan–Mei = 590. */
  tbsRbTon: number;
}

export const plasmaStats = {
  kebunPlasma: PRODUKSI.kebunPlasma, // 338
  luasRbHa: 78.3,
  /** Yield plasma rata-rata tertimbang (t/ha) vs inti 21,9. */
  yieldTonHa: 16.4,
  /** TBS plasma YTD (rb ton); pihak III non-plasma 250 rb ton. */
  tbsYtdRbTon: 590,
  tbsPihakIIIRbTon: 250,
} as const;

/** Plasma 0,59 + pihak III 0,25 = 0,84 jt ton — selaras sawitWaterfall. */
export const plasmaSupply: PlasmaSupplyPoint[] = [
  { bulan: "Jan", tbsRbTon: 112 },
  { bulan: "Feb", tbsRbTon: 108 },
  { bulan: "Mar", tbsRbTon: 118 },
  { bulan: "Apr", tbsRbTon: 124 },
  { bulan: "Mei", tbsRbTon: 128 },
];

/* ── 7. Plasma Yield Gap per Regional ─────────────────────────────── */

export interface PlasmaYieldRow {
  regional: string;
  /** Luas plasma binaan (rb ha) — jumlah = 78,3. */
  luasPlasmaRbHa: number;
  /** Yield plasma (t/ha). */
  yieldPlasma: number;
  /** Yield inti regional (t/ha) — selaras regionalYield produksi-data. */
  yieldInti: number;
}

/** Rata-rata tertimbang plasma = 16,4 t/ha vs inti 21,9 (gap 5,5 t/ha). */
export const plasmaYieldGap: PlasmaYieldRow[] = [
  { regional: "Regional 1", luasPlasmaRbHa: 14.2, yieldPlasma: 18.2, yieldInti: 23.8 },
  { regional: "Regional 2", luasPlasmaRbHa: 12.8, yieldPlasma: 17.6, yieldInti: 23.4 },
  { regional: "Regional 3", luasPlasmaRbHa: 16.4, yieldPlasma: 17.1, yieldInti: 23.0 },
  { regional: "Regional 4", luasPlasmaRbHa: 9.6, yieldPlasma: 15.8, yieldInti: 21.6 },
  { regional: "Regional 5", luasPlasmaRbHa: 10.8, yieldPlasma: 15.4, yieldInti: 21.2 },
  { regional: "Regional 6", luasPlasmaRbHa: 8.9, yieldPlasma: 14.6, yieldInti: 20.2 },
  { regional: "Regional 7", luasPlasmaRbHa: 5.6, yieldPlasma: 13.2, yieldInti: 18.4 },
];

/* ── 8. PSR Progress (Peremajaan Sawit Rakyat) ────────────────────── */

export const psrProgress = {
  target2026Ha: 6200,
  realisasiYtdHa: 2140,
  capaianPct: 34.5,
  /** Hibah BPDPKS Rp 60 jt/ha. */
  danaPerHaRpJt: 60,
  totalDanaRpM: 372,
  tersalurRpM: 128.4,
  petaniPeserta: 4820,
  note: "PSR plasma binaan didanai hibah BPDPKS Rp 60 jt/ha; hambatan utama legalitas lahan & kelembagaan koperasi.",
} as const;

/* ── 9. Risiko Kemitraan ──────────────────────────────────────────── */

export interface KemitraanRisk {
  risk: string;
  desc: string;
  level: ProdRiskLevel;
  mitigasi: string;
}

export const kemitraanRisks: KemitraanRisk[] = [
  {
    risk: "Side-Selling TBS",
    desc: "Estimasi 8–12% TBS plasma bocor ke PKS swasta saat harga spot tinggi.",
    level: "Tinggi",
    mitigasi: "Harga kompetitif + kontrak pasok berinsentif & pembayaran H+1.",
  },
  {
    risk: "Penetapan Harga TBS Disbun",
    desc: "Formula harga provinsi tertinggal dari pasar; memicu friksi & side-selling.",
    level: "Sedang",
    mitigasi: "Advokasi formula indeks-K + transparansi harga mingguan ke koperasi.",
  },
  {
    risk: "Legalitas Lahan Plasma",
    desc: "Sebagian lahan belum bersertifikat — menghambat PSR & kepatuhan EUDR.",
    level: "Tinggi",
    mitigasi: "Fasilitasi sertifikasi bersama ATR/BPN & pemetaan poligon kebun.",
  },
  {
    risk: "Kelembagaan Koperasi Lemah",
    desc: "Tata kelola & pembukuan koperasi lemah; penyaluran sarana produksi tersendat.",
    level: "Sedang",
    mitigasi: "Pendampingan kelembagaan + digitalisasi transaksi TBS plasma.",
  },
  {
    risk: "Kredit Petani Macet",
    desc: "Kolektibilitas kredit peremajaan sebagian petani menurun saat harga turun.",
    level: "Rendah",
    mitigasi: "Skema grace period selaras umur TBM & asuransi gagal panen.",
  },
];

export const plasmaInsights: ProdInsight[] = [
  {
    title: "Gap Yield Plasma 5,5 t/ha",
    text: "Yield plasma 16,4 vs inti 21,9 t/ha. Intensifikasi agronomi plasma (bibit, pupuk, panen) berpotensi menambah pasokan ±430 rb ton TBS/tahun tanpa tambah lahan.",
    tone: "amber",
  },
  {
    title: "Pasokan Plasma Tumbuh",
    text: "TBS plasma naik konsisten Jan–Mei (112→128 rb ton) seiring perbaikan harga & pembayaran — momentum untuk menekan side-selling.",
    tone: "green",
  },
  {
    title: "Legalitas = Kunci PSR & EUDR",
    text: "PSR baru 34,5% target; hambatan legalitas lahan yang sama juga menghambat traceability EUDR — satu intervensi, dua manfaat.",
    tone: "blue",
  },
];

/* ══ PANEN & LOGISTIK ══════════════════════════════════════════════ */

/* ── 10. Restan TBS per Regional ──────────────────────────────────── */

export interface RestanRow {
  regional: string;
  /** Restan (% TBS panen tidak terangkut ke PKS <24 jam). */
  restanPct: number;
}

/** Norma restan <2%; rata-rata grup tertimbang 1,8%. */
export const RESTAN_NORMA_PCT = 2.0;
export const RESTAN_RATA_GRUP_PCT = 1.8;

export const restanSeries: RestanRow[] = [
  { regional: "Regional 1", restanPct: 1.2 },
  { regional: "Regional 2", restanPct: 1.4 },
  { regional: "Regional 3", restanPct: 1.6 },
  { regional: "Regional 4", restanPct: 1.9 },
  { regional: "Regional 5", restanPct: 2.1 },
  { regional: "Regional 6", restanPct: 2.4 },
  { regional: "Regional 7", restanPct: 2.2 },
];

/* ── 11. FFA vs OER per PKS (scatter) ─────────────────────────────── */

export interface FfaOerPoint {
  pks: string;
  /** Free fatty acid TBS masuk (%) — rata-rata grup 3,1%. */
  ffaPct: number;
  oerPct: number;
}

export const FFA_RATA_GRUP_PCT = 3.1;

export const ffaOerPoints: FfaOerPoint[] = [
  { pks: "Sei Mangkei", ffaPct: 2.4, oerPct: 23.8 },
  { pks: "Adolina", ffaPct: 2.6, oerPct: 23.5 },
  { pks: "Dolok Ilir", ffaPct: 2.7, oerPct: 23.2 },
  { pks: "Sosa", ffaPct: 2.8, oerPct: 23.0 },
  { pks: "Sei Rokan", ffaPct: 2.9, oerPct: 22.9 },
  { pks: "Bah Jambi", ffaPct: 3.0, oerPct: 22.7 },
  { pks: "Tandun", ffaPct: 3.1, oerPct: 22.5 },
  { pks: "Sei Galuh", ffaPct: 3.2, oerPct: 22.2 },
  { pks: "Terantam", ffaPct: 3.4, oerPct: 21.9 },
  { pks: "Parindu", ffaPct: 3.7, oerPct: 21.3 },
  { pks: "Rejosari", ffaPct: 3.8, oerPct: 21.0 },
  { pks: "Ophir", ffaPct: 4.1, oerPct: 20.4 },
];

export const ffaOerNote =
  "Korelasi negatif jelas: tiap +0,5 ppt FFA ≈ -0,9 ppt OER. FFA tinggi bersumber dari restan & rotasi panen panjang — bukan masalah pabrik semata.";

/* ── 12. Armada & Logistik TBS ────────────────────────────────────── */

export const armada = {
  unitTruk: 1860,
  /** Milik sendiri vs sewa (%). */
  porsiMilikPct: 58,
  utilisasiPct: 74.2,
  ritasePerHari: 2.4,
  biayaAngkutRpTon: 86500,
  targetBiayaRpTon: 82000,
  note: "Biaya angkut 5,5% di atas target — rute Regional 6–7 (jarak & kondisi jalan) penyumbang terbesar.",
} as const;

/* ── 13. Rotasi Panen per Regional ────────────────────────────────── */

export interface HarvestCycleRow {
  regional: string;
  /** Rotasi panen aktual (hari); standar 7 hari. */
  rotasiHari: number;
}

export const HARVEST_STANDAR_HARI = 7;

export const harvestCycle: HarvestCycleRow[] = [
  { regional: "Regional 1", rotasiHari: 6.8 },
  { regional: "Regional 2", rotasiHari: 7.1 },
  { regional: "Regional 3", rotasiHari: 7.4 },
  { regional: "Regional 4", rotasiHari: 7.8 },
  { regional: "Regional 5", rotasiHari: 8.2 },
  { regional: "Regional 6", rotasiHari: 8.9 },
  { regional: "Regional 7", rotasiHari: 8.4 },
];

export const panenInsights: ProdInsight[] = [
  {
    title: "3 Regional Lampaui Norma Restan",
    text: "Regional 5–7 restan 2,1–2,4% (norma <2%). Restan adalah akar FFA tinggi → gap OER; perbaikan logistik lebih murah daripada perbaikan pabrik.",
    tone: "red",
  },
  {
    title: "Rotasi Panen Melebar",
    text: "5 dari 7 regional di atas standar 7 hari; Regional 6 mencapai 8,9 hari. Kekurangan pemanen & jalan rusak jadi penyebab utama — link ke program mekanisasi OPEX.",
    tone: "amber",
  },
  {
    title: "Biaya Angkut di Atas Target",
    text: "Rp 86.500/ton vs target Rp 82.000. Optimasi rute + smart weighbridge ditargetkan menutup separuh gap hingga akhir 2026.",
    tone: "amber",
  },
];
