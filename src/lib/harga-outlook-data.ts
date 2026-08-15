/**
 * Data statis halaman Harga & Outlook (/pemasaran-penjualan/harga-pasar).
 * Periode acuan: 31 Mei 2026 (YTD). Angka kanonik dari src/lib/group-baseline.ts:
 * spot KPBN Rp 13.680/kg, CIF Rotterdam USD 1.085/ton, HPP CPO Rp 8.950/kg,
 * kurs Rp 16.250, gula lelang Rp 14.850/kg, karet SIR-20 Rp 18.650/kg.
 */

import { PEMASARAN, PRODUKSI } from "./group-baseline";

/* ── 1. Seri harga CPO 24 bulan (Rotterdam vs KPBN vs HPP) ────────── */

export interface PricePoint {
  bulan: string;
  /** CPO CIF Rotterdam, USD/ton. */
  rotterdamUsd: number;
  /** CPO benchmark KPBN, Rp/kg (rata-rata bulanan). */
  kpbnRp: number;
  /** HPP CPO, Rp/kg — band nyaris datar (8.720 → 8.950). */
  hppRp: number;
}

/**
 * Jun 2024 – Mei 2026. Rata-rata KPBN Jan-Mei 2026 = Rp 12.437/kg
 * (ASP realisasi Rp 12.482 = KPBN + premium Rp 45 — lihat pemasaran-data.ts).
 */
export const priceSeries: PricePoint[] = [
  { bulan: "Jun 24", rotterdamUsd: 905, kpbnRp: 10450, hppRp: 8720 },
  { bulan: "Jul 24", rotterdamUsd: 918, kpbnRp: 10620, hppRp: 8720 },
  { bulan: "Agu 24", rotterdamUsd: 932, kpbnRp: 10840, hppRp: 8740 },
  { bulan: "Sep 24", rotterdamUsd: 948, kpbnRp: 11080, hppRp: 8740 },
  { bulan: "Okt 24", rotterdamUsd: 972, kpbnRp: 11420, hppRp: 8760 },
  { bulan: "Nov 24", rotterdamUsd: 998, kpbnRp: 11780, hppRp: 8760 },
  { bulan: "Des 24", rotterdamUsd: 985, kpbnRp: 11640, hppRp: 8780 },
  { bulan: "Jan 25", rotterdamUsd: 962, kpbnRp: 11320, hppRp: 8800 },
  { bulan: "Feb 25", rotterdamUsd: 950, kpbnRp: 11180, hppRp: 8800 },
  { bulan: "Mar 25", rotterdamUsd: 974, kpbnRp: 11460, hppRp: 8820 },
  { bulan: "Apr 25", rotterdamUsd: 978, kpbnRp: 11520, hppRp: 8820 },
  { bulan: "Mei 25", rotterdamUsd: 966, kpbnRp: 11380, hppRp: 8840 },
  { bulan: "Jun 25", rotterdamUsd: 955, kpbnRp: 11240, hppRp: 8840 },
  { bulan: "Jul 25", rotterdamUsd: 972, kpbnRp: 11480, hppRp: 8860 },
  { bulan: "Agu 25", rotterdamUsd: 988, kpbnRp: 11720, hppRp: 8860 },
  { bulan: "Sep 25", rotterdamUsd: 1002, kpbnRp: 11860, hppRp: 8880 },
  { bulan: "Okt 25", rotterdamUsd: 1015, kpbnRp: 12040, hppRp: 8880 },
  { bulan: "Nov 25", rotterdamUsd: 1028, kpbnRp: 12210, hppRp: 8900 },
  { bulan: "Des 25", rotterdamUsd: 1005, kpbnRp: 12350, hppRp: 8900 },
  { bulan: "Jan 26", rotterdamUsd: 1015, kpbnRp: 11595, hppRp: 8950 },
  { bulan: "Feb 26", rotterdamUsd: 1052, kpbnRp: 12135, hppRp: 8950 },
  { bulan: "Mar 26", rotterdamUsd: 1078, kpbnRp: 12515, hppRp: 8950 },
  { bulan: "Apr 26", rotterdamUsd: 1048, kpbnRp: 12305, hppRp: 8950 },
  { bulan: "Mei 26", rotterdamUsd: 1085, kpbnRp: 13635, hppRp: 8950 },
];

export const priceSeriesRefs = {
  spotKpbnRpKg: PEMASARAN.cpoKpbnSpotRpKg,
  cifRotterdamUsdTon: PEMASARAN.cpoCifRotterdamUsdTon,
  hppCpoRpKg: PRODUKSI.hppCpoRpKg,
  catatan:
    "Garis KPBN = rata-rata bulanan; spot 31 Mei Rp 13.680/kg. Band margin = selisih KPBN terhadap HPP CPO.",
} as const;

/* ── 2. Seri gula & karet (12 bulan) ──────────────────────────────── */

export interface GulaKaretPoint {
  bulan: string;
  /** Harga lelang gula, Rp/kg. */
  gulaLelang: number;
  /** HAP gula (acuan pembelian di tingkat produsen), Rp/kg — flat. */
  gulaHap: number;
  /** Karet SICOM (ekuivalen Rp/kg). */
  karetSicom: number;
  /** Karet harga domestik SIR-20, Rp/kg. */
  karetDomestik: number;
}

/** Jun 2025 – Mei 2026; gula lelang Mei 26 = Rp 14.850 (baseline). */
export const gulaKaretSeries: GulaKaretPoint[] = [
  { bulan: "Jun 25", gulaLelang: 13780, gulaHap: 12500, karetSicom: 17980, karetDomestik: 17650 },
  { bulan: "Jul 25", gulaLelang: 13850, gulaHap: 12500, karetSicom: 18040, karetDomestik: 17710 },
  { bulan: "Agu 25", gulaLelang: 13940, gulaHap: 12500, karetSicom: 18120, karetDomestik: 17790 },
  { bulan: "Sep 25", gulaLelang: 14060, gulaHap: 12500, karetSicom: 18210, karetDomestik: 17880 },
  { bulan: "Okt 25", gulaLelang: 14150, gulaHap: 12500, karetSicom: 18300, karetDomestik: 17960 },
  { bulan: "Nov 25", gulaLelang: 14210, gulaHap: 12500, karetSicom: 18390, karetDomestik: 18040 },
  { bulan: "Des 25", gulaLelang: 14250, gulaHap: 12500, karetSicom: 18470, karetDomestik: 18130 },
  { bulan: "Jan 26", gulaLelang: 14320, gulaHap: 12500, karetSicom: 18340, karetDomestik: 17980 },
  { bulan: "Feb 26", gulaLelang: 14410, gulaHap: 12500, karetSicom: 18480, karetDomestik: 18120 },
  { bulan: "Mar 26", gulaLelang: 14520, gulaHap: 12500, karetSicom: 18680, karetDomestik: 18310 },
  { bulan: "Apr 26", gulaLelang: 14640, gulaHap: 12500, karetSicom: 18510, karetDomestik: 18140 },
  { bulan: "Mei 26", gulaLelang: 14850, gulaHap: 12500, karetSicom: 19020, karetDomestik: 18650 },
];

/* ── 3. Price Drivers ─────────────────────────────────────────────── */

export interface PriceDriver {
  driver: string;
  /** Arah dampak terhadap harga CPO. */
  dampak: "Bullish" | "Bearish" | "Netral";
  /** Bobot kontribusi terhadap pergerakan harga (%); total 100. */
  bobotPct: number;
  keterangan: string;
}

export const priceDrivers: PriceDriver[] = [
  {
    driver: "Produksi Malaysia −3% YoY",
    dampak: "Bullish",
    bobotPct: 26,
    keterangan: "Curah hujan rendah Semenanjung; stok MPOB tertekan.",
  },
  {
    driver: "Mandat Biodiesel B40",
    dampak: "Bullish",
    bobotPct: 24,
    keterangan: "Serapan domestik naik struktural; wacana B50 2027 dalam kajian.",
  },
  {
    driver: "Stok global rendah (4,1 jt ton)",
    dampak: "Bullish",
    bobotPct: 20,
    keterangan: "Stok pelaporan utama −8% YoY, terendah 3 tahun.",
  },
  {
    driver: "Minyak nabati substitusi",
    dampak: "Bearish",
    bobotPct: 16,
    keterangan: "Panen kedelai Brasil rekor menekan spread CPO–soyoil.",
  },
  {
    driver: "Kurs Rupiah & suku bunga",
    dampak: "Netral",
    bobotPct: 14,
    keterangan: "Kurs Rp 16.250 relatif stabil; efek dua arah ke harga domestik.",
  },
];

/* ── 4. Outlook Konsensus Q3–Q4 2026 ──────────────────────────────── */

export interface OutlookScenario {
  bear: number;
  base: number;
  bull: number;
}

export interface OutlookRow {
  komoditas: string;
  unit: string;
  q3: OutlookScenario;
  q4: OutlookScenario;
  catatan: string;
}

export const outlookKonsensus: OutlookRow[] = [
  {
    komoditas: "CPO KPBN",
    unit: "Rp/kg",
    q3: { bear: 12400, base: 13600, bull: 14500 },
    q4: { bear: 12100, base: 13900, bull: 15200 },
    catatan: "Base case ditopang B40 & produksi Malaysia lemah; bear case bila panen kedelai membanjiri pasar.",
  },
  {
    komoditas: "CPO CIF Rotterdam",
    unit: "USD/ton",
    q3: { bear: 960, base: 1065, bull: 1150 },
    q4: { bear: 940, base: 1090, bull: 1190 },
    catatan: "Premium Rotterdam melebar bila enforcement EUDR memperketat pasokan tersertifikasi.",
  },
  {
    komoditas: "Gula (Lelang)",
    unit: "Rp/kg",
    q3: { bear: 13900, base: 14600, bull: 15300 },
    q4: { bear: 13600, base: 14400, bull: 15100 },
    catatan: "Puncak musim giling (Mei–Nov) menekan harga Q4; HET membatasi upside.",
  },
  {
    komoditas: "Karet SIR-20",
    unit: "Rp/kg",
    q3: { bear: 17800, base: 18500, bull: 19400 },
    q4: { bear: 17500, base: 18700, bull: 19800 },
    catatan: "Permintaan ban Tiongkok membaik moderat; supply Thailand normal.",
  },
];

/* ── 5. Sensitivitas Kurs & Harga ─────────────────────────────────── */

export interface SensitivityRow {
  skenario: string;
  /** Dampak ke pendapatan FY (Rp T, bertanda dalam string). */
  pendapatan: string;
  /** Dampak ke EBITDA FY (Rp T). */
  ebitda: string;
  tone: "good" | "bad";
}

export const kursSensitivity: SensitivityRow[] = [
  { skenario: "Kurs +5% (≈ Rp 17.060)", pendapatan: "+Rp 0,42 T", ebitda: "+Rp 0,31 T", tone: "good" },
  { skenario: "Kurs −5% (≈ Rp 15.440)", pendapatan: "−Rp 0,42 T", ebitda: "−Rp 0,31 T", tone: "bad" },
  { skenario: "Harga CPO +10%", pendapatan: "+Rp 1,21 T", ebitda: "+Rp 1,05 T", tone: "good" },
  { skenario: "Harga CPO −10%", pendapatan: "−Rp 1,21 T", ebitda: "−Rp 1,05 T", tone: "bad" },
];

export const kursSensitivityNote =
  "Basis: kurs Rp 16.250/USD, pendapatan tertaut USD ± Rp 8,4 T (ekspor 22% volume CPO + kontrak berbasis CIF Rotterdam). Flow-through EBITDA ± 87% untuk perubahan harga CPO.";

/* ── 6. Insight ───────────────────────────────────────────────────── */

export interface HargaInsight {
  title: string;
  text: string;
  tone: "red" | "amber" | "green" | "blue";
}

export const hargaInsights: HargaInsight[] = [
  {
    title: "Jaws harga–HPP melebar",
    text: "KPBN Mei Rp 13.635/kg vs HPP CPO Rp 8.950/kg — spread Rp 4.685/kg, terlebar dalam 24 bulan. Momentum tepat untuk mengunci forward H2.",
    tone: "green",
  },
  {
    title: "Konsensus base case konstruktif",
    text: "Base case KPBN Q3 Rp 13.600 dan Q4 Rp 13.900/kg — di atas rata-rata YTD Rp 12.437. Bear case Rp 12.100 masih di atas HPP + biaya jual.",
    tone: "blue",
  },
  {
    title: "Gula menghadapi musim giling",
    text: "Lelang gula Rp 14.850/kg jelang puncak giling; konsensus Q4 melunak ke Rp 14.400. Percepat pelepasan stok gula lama sebelum tekanan musiman.",
    tone: "amber",
  },
  {
    title: "Risiko dua sisi dari kurs",
    text: "Setiap 5% pelemahan Rupiah menambah pendapatan ± Rp 0,42 T, namun juga menaikkan biaya pupuk & BBM impor — natural hedge parsial di sisi HPP.",
    tone: "amber",
  },
];
