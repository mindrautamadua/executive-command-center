/**
 * Data statis halaman Produktivitas Aset (/aset-investasi/produktivitas-aset).
 * Periode acuan: 31 Mei 2026 (YTD). Angka induk dari group-baseline.ts
 * (yield 21,9 t/ha, OER 22,4%, rendemen gula 7,45%, total aset Rp 132,4 T).
 *
 * Catatan konsistensi: yieldByRegional & ageYieldProfile diturunkan langsung
 * dari regionalYield (produksi-data.ts) dan ageProfile (agro-data.ts) — tidak
 * ada angka yield tandingan di halaman ini. sugarProductivity adalah agregasi
 * klaster dari sugarMillHealth (afs-data.ts).
 */

import { PRODUKSI } from "./group-baseline";
import type { AstInsight, AstKpi } from "./ast-core";
import { ageProfile } from "./agro-data";
import { YIELD_BENCHMARK_SWASTA_TON_HA, regionalYield } from "./produksi-data";

/* ── 1. KPI Strip ─────────────────────────────────────────────────── */

export const apdKpi: AstKpi[] = [
  {
    label: "Yield TBS",
    value: "21,9",
    sub: "Ton/Ha · benchmark swasta 24,0",
    delta: "+2,3%",
    trend: "up",
    deltaTone: "good",
    compare: "vs 2025 (21,4 t/ha)",
    icon: "land",
    tone: "green",
  },
  {
    label: "OER (Rendemen CPO)",
    value: "22,4%",
    sub: "Target RKAP 22,8%",
    delta: "-0,4 ppt",
    trend: "down",
    deltaTone: "bad",
    compare: "vs Target RKAP",
    icon: "pabrik",
    tone: "amber",
  },
  {
    label: "CPO per Hektar",
    value: "4,9",
    sub: "Ton/Ha · yield × OER",
    delta: "+2,7%",
    trend: "up",
    deltaTone: "good",
    compare: "vs 2025 (4,77 t/ha)",
    icon: "land",
    tone: "blue",
  },
  {
    label: "Rendemen Gula",
    value: "7,45%",
    sub: "Benchmark nasional 8,20%",
    delta: "-0,75 ppt",
    trend: "down",
    deltaTone: "bad",
    compare: "vs benchmark nasional",
    icon: "pabrik",
    tone: "teal",
  },
  {
    label: "ROA",
    value: "4,6%",
    sub: "Laba FY Rp 6,1 T ÷ aset Rp 132,4 T",
    delta: "+0,4 ppt",
    trend: "up",
    deltaTone: "good",
    compare: "vs FY 2025",
    icon: "nilai",
    tone: "pink",
  },
  {
    label: "Asset Turnover",
    value: "0,44x",
    sub: "Pendapatan FY Rp 58,4 T ÷ aset",
    delta: "+0,02x",
    trend: "up",
    deltaTone: "good",
    compare: "vs FY 2025 (0,42x)",
    icon: "investasi",
    tone: "red",
  },
];

/** ROA = rkapLabaFy ÷ totalAset; asset turnover = rkapPendapatanFy ÷ totalAset. */
export const APD_ROA_PCT = 4.6;
export const APD_ASSET_TURNOVER = 0.44;
export const APD_CPO_PER_HA_TON = 4.9;
export const APD_RENDEMEN_BENCHMARK_PCT = 8.2;

/* ── 2. Yield per Regional (turunan regionalYield) ────────────────── */

export interface YieldRegionalRow {
  regional: string;
  /** Luas tertanam inti (rb ha) — jumlah 7 regional = 508,7. */
  luasRbHa: number;
  /** Yield TBS (ton/ha/tahun) — identik regionalYield produksi-data. */
  yieldTonHa: number;
  umurRataThn: number;
  /** CPO per ha (ton) = yield × OER grup 22,4%. */
  cpoPerHaTon: number;
  /** Selisih terhadap benchmark swasta 24,0 t/ha (negatif = tertinggal). */
  gapBenchmarkTonHa: number;
}

/** Re-shape regionalYield — tidak ada angka yield baru yang diperkenalkan. */
export const yieldByRegional: YieldRegionalRow[] = regionalYield.map((r) => ({
  regional: r.regional,
  luasRbHa: r.luasRbHa,
  yieldTonHa: r.yieldTonHa,
  umurRataThn: r.umurRataThn,
  cpoPerHaTon: +((r.yieldTonHa * PRODUKSI.oerPct) / 100).toFixed(2),
  gapBenchmarkTonHa: +(r.yieldTonHa - YIELD_BENCHMARK_SWASTA_TON_HA).toFixed(1),
}));

export const YIELD_GRUP_TON_HA = PRODUKSI.yieldTbsTonHa; // 21,9
export const YIELD_BENCHMARK_TON_HA = YIELD_BENCHMARK_SWASTA_TON_HA; // 24,0

export const yieldByRegionalNote =
  "Seluruh regional berada di bawah benchmark swasta 24,0 t/ha. Korelasi negatif jelas dengan umur rata-rata tanaman: Regional 7 (17,2 thn) menghasilkan 18,4 t/ha, Regional 1 (13,8 thn) 23,8 t/ha.";

/* ── 3. Tren Produktivitas 5 Tahun ────────────────────────────────── */

export interface YieldTrendPoint {
  tahun: string;
  /** Yield TBS (ton/ha) — identik protasTrend produksi-data. */
  yieldTonHa: number;
  oerPct: number;
  /** CPO per ha (ton) = yield × OER. */
  cpoPerHaTon: number;
}

export const yieldTrend: YieldTrendPoint[] = [
  { tahun: "2022", yieldTonHa: 19.6, oerPct: 22.1, cpoPerHaTon: 4.33 },
  { tahun: "2023", yieldTonHa: 20.3, oerPct: 22.2, cpoPerHaTon: 4.51 },
  { tahun: "2024", yieldTonHa: 20.9, oerPct: 22.3, cpoPerHaTon: 4.66 },
  { tahun: "2025", yieldTonHa: 21.4, oerPct: 22.3, cpoPerHaTon: 4.77 },
  { tahun: "2026*", yieldTonHa: 21.9, oerPct: 22.4, cpoPerHaTon: 4.91 },
];

export const yieldTrendNote =
  "*2026 = annualized YTD Mei. CPO/ha naik 13,4% dalam 4 tahun (4,33 → 4,91 ton), namun 87% kenaikan berasal dari yield — OER praktis stagnan di kisaran 22,1–22,4%.";

/* ── 4. Profil Umur × Yield (turunan ageProfile) ──────────────────── */

export interface AgeYieldRow {
  bucket: string;
  rentang: string;
  /** Luas (rb ha) — jumlah = 508,7. */
  luasRbHa: number;
  /** Yield bucket (ton TBS/ha); TBM = 0. */
  yieldTonHa: number;
  /** Kontribusi TBS setahun penuh (jt ton) = luas × yield. */
  kontribusiTbsJtTon: number;
}

/**
 * Jumlah kontribusi ≈ 9,83 jt ton TBS inti setahun penuh (basis annualized;
 * TBS inti YTD Mei 3,71 jt ton pada sawitWaterfall produksi-data).
 */
export const ageYieldProfile: AgeYieldRow[] = ageProfile.map((b) => ({
  bucket: b.bucket,
  rentang: b.rentang,
  luasRbHa: b.luasRbHa,
  yieldTonHa: b.yieldTonHa,
  kontribusiTbsJtTon: +((b.luasRbHa * b.yieldTonHa) / 1000).toFixed(2),
}));

export const ageYieldNote =
  "Areal prima (43% luas) menyumbang 58% TBS inti; areal tua & renta (27% luas) hanya 25%. Setiap 10 rb ha yang berpindah dari renta ke prima menambah ±128 rb ton TBS/tahun.";

/* ── 5. Produktivitas Gula per Klaster PG ─────────────────────────── */

export interface SugarClusterRow {
  klaster: string;
  /** Jumlah PG — jumlah 4 klaster = 17. */
  jumlahPg: number;
  /** Kapasitas giling (TCD) — jumlah = 82.500. */
  kapasitasTcd: number;
  /** Utilisasi kapasitas giling (%). */
  utilisasiPct: number;
  /** Rendemen tertimbang klaster (%); rata grup = 7,45. */
  rendemenPct: number;
  /** Proyeksi laba/rugi FY klaster (Rp M) — jumlah = -166. */
  labaRugiRpM: number;
}

/** Agregasi sugarMillHealth (afs-data.ts): 4+4+4+5 = 17 PG, 82.500 TCD. */
export const sugarProductivity: SugarClusterRow[] = [
  { klaster: "Sumatera (Sumut–Sumsel–Lampung)", jumlahPg: 4, kapasitasTcd: 22500, utilisasiPct: 66.9, rendemenPct: 7.24, labaRugiRpM: -192 },
  { klaster: "Jatim Skala Besar (>6.000 TCD)", jumlahPg: 4, kapasitasTcd: 29000, utilisasiPct: 79.4, rendemenPct: 7.81, labaRugiRpM: 330 },
  { klaster: "Jatim Menengah (3.400–5.500 TCD)", jumlahPg: 4, kapasitasTcd: 17200, utilisasiPct: 70.7, rendemenPct: 7.36, labaRugiRpM: -52 },
  { klaster: "Jatim Kecil (<3.300 TCD)", jumlahPg: 5, kapasitasTcd: 13800, utilisasiPct: 61.5, rendemenPct: 6.99, labaRugiRpM: -252 },
];

/** Produktivitas lahan tebu: 10,5 jt ton tebu ÷ 146,0 rb ha tertanam. */
export const TEBU_PRODUKTIVITAS_TON_HA = 71.9;
export const HABLUR_PER_HA_TON = 5.36;

export const sugarProductivityNote =
  "Skala menentukan profitabilitas: klaster >6.000 TCD berutilisasi 79,4% dengan rendemen 7,81% dan untung Rp 330 M, sedangkan klaster <3.300 TCD berutilisasi 61,5%, rendemen 6,99% dan rugi Rp 252 M.";

/* ── 6. Asset Return Quadrant (ROA × utilisasi) ───────────────────── */

export type AssetQuadrant = "Ekspansi" | "Optimalkan" | "Perbaiki" | "Restrukturisasi";

export interface AssetReturnPoint {
  unit: string;
  /** ROA unit (%); rata grup 4,6%. */
  roaPct: number;
  /** Utilisasi aset produktif unit (%). */
  utilisasiPct: number;
  /** Nilai buku aset unit (Rp T) — jumlah 12 unit = 78,3 (ASET.asetTetapRpT). */
  nilaiAsetRpT: number;
  kuadran: AssetQuadrant;
  aksi: string;
}

/**
 * Ambang kuadran: ROA 4,6% (rata grup) × utilisasi 75%.
 * Kanan-atas = Ekspansi, kanan-bawah = Optimalkan, kiri-atas = Perbaiki,
 * kiri-bawah = Restrukturisasi. Jumlah nilaiAsetRpT = 78,3 T.
 */
export const APD_ROA_AMBANG_PCT = 4.6;
export const APD_UTILISASI_AMBANG_PCT = 75.0;

export const assetReturnQuadrant: AssetReturnPoint[] = [
  { unit: "PalmCo Regional 1", roaPct: 7.8, utilisasiPct: 84.2, nilaiAsetRpT: 6.4, kuadran: "Ekspansi", aksi: "Tambah kapasitas hilir & perluasan kemitraan plasma." },
  { unit: "PalmCo Regional 2", roaPct: 8.4, utilisasiPct: 85.6, nilaiAsetRpT: 8.1, kuadran: "Ekspansi", aksi: "Jadikan hub hilirisasi grup (Sei Mangkei)." },
  { unit: "PalmCo Regional 3", roaPct: 7.2, utilisasiPct: 83.4, nilaiAsetRpT: 8.6, kuadran: "Ekspansi", aksi: "Prioritaskan perpanjangan HGU agar momentum terjaga." },
  { unit: "PalmCo Regional 4", roaPct: 4.1, utilisasiPct: 75.0, nilaiAsetRpT: 5.2, kuadran: "Optimalkan", aksi: "Debottlenecking PKS Ophir & percepatan replanting." },
  { unit: "PalmCo Regional 5", roaPct: 4.6, utilisasiPct: 77.5, nilaiAsetRpT: 6.0, kuadran: "Optimalkan", aksi: "Revitalisasi PKS Rejosari & Kertajaya (sudah beranggaran)." },
  { unit: "PalmCo Regional 6", roaPct: 2.4, utilisasiPct: 68.5, nilaiAsetRpT: 6.8, kuadran: "Restrukturisasi", aksi: "Perbaikan jalan produksi + konsolidasi PKS kecil." },
  { unit: "PalmCo Regional 7", roaPct: 1.6, utilisasiPct: 65.8, nilaiAsetRpT: 4.3, kuadran: "Restrukturisasi", aksi: "Kaji ulang skala; opsi kemitraan operasi dengan mitra strategis." },
  { unit: "SGN — Klaster Jatim Besar", roaPct: 5.2, utilisasiPct: 79.4, nilaiAsetRpT: 7.4, kuadran: "Ekspansi", aksi: "Basis proyek bioetanol & co-generation." },
  { unit: "SGN — Klaster Jatim Menengah", roaPct: 0.8, utilisasiPct: 70.7, nilaiAsetRpT: 4.6, kuadran: "Perbaiki", aksi: "Perkuat pasokan tebu rakyat & efisiensi stasiun masakan." },
  { unit: "SGN — Klaster Jatim Kecil", roaPct: -3.8, utilisasiPct: 61.5, nilaiAsetRpT: 3.5, kuadran: "Restrukturisasi", aksi: "Konsolidasi giling; alihkan tebu ke PG efisien terdekat." },
  { unit: "SGN — Klaster Sumatera", roaPct: -1.4, utilisasiPct: 66.9, nilaiAsetRpT: 5.9, kuadran: "Restrukturisasi", aksi: "Selesaikan sengketa Cinta Manis sebagai prasyarat pasokan." },
  { unit: "PTPN I (Karet, Teh & Aneka)", roaPct: 2.1, utilisasiPct: 62.0, nilaiAsetRpT: 11.5, kuadran: "Restrukturisasi", aksi: "Program optimalisasi aset idle: KSO, sewa & divestasi selektif." },
];

export const ASSET_RETURN_TOTAL_RP_T = 78.3;

/* ── 7. Nilai Gap Produktivitas ───────────────────────────────────── */

export interface ProductivityGapRow {
  faktor: string;
  gapSaatIni: string;
  target: string;
  /** Potensi nilai tahunan bila gap ditutup (Rp T) — jumlah = 2,4. */
  potensiRpT: number;
  /** Horizon realisasi. */
  horizon: string;
  aksi: string;
}

/** Jumlah potensi = Rp 2,4 T/tahun terhadap basis pendapatan FY Rp 58,4 T. */
export const productivityGapValue: ProductivityGapRow[] = [
  {
    faktor: "Gap Yield TBS vs Benchmark Swasta",
    gapSaatIni: "21,9 t/ha",
    target: "24,0 t/ha",
    potensiRpT: 1.05,
    horizon: "5–8 tahun (siklus replanting)",
    aksi: "Percepatan replanting 12.500 ha/tahun + pemupukan presisi.",
  },
  {
    faktor: "Gap OER",
    gapSaatIni: "22,4%",
    target: "22,8%",
    potensiRpT: 0.42,
    horizon: "12–18 bulan",
    aksi: "Tekan restan & FFA, replikasi decanter 3-fase ke 9 PKS tua.",
  },
  {
    faktor: "Gap Rendemen Gula",
    gapSaatIni: "7,45%",
    target: "8,20%",
    potensiRpT: 0.58,
    horizon: "2–3 musim giling",
    aksi: "Revitalisasi 5 PG + varietas tebu & tebang-angkut-giling <24 jam.",
  },
  {
    faktor: "Gap Utilisasi PKS",
    gapSaatIni: "78,4%",
    target: "82,0%",
    potensiRpT: 0.35,
    horizon: "12 bulan",
    aksi: "Amankan pasokan plasma/pihak III & tekan downtime mekanikal.",
  },
];

export const PRODUCTIVITY_GAP_TOTAL_RP_T = 2.4;

export const productivityGapNote =
  "Total potensi Rp 2,4 T/tahun setara 4,1% pendapatan RKAP FY Rp 58,4 T dan akan menaikkan ROA dari 4,6% ke ±6,4% tanpa penambahan aset.";

/* ── 8. Insights ──────────────────────────────────────────────────── */

export const apdInsights: AstInsight[] = [
  {
    title: "Aset Tumbuh Lebih Cepat dari Hasilnya",
    text: `Aset tetap naik Rp 16,9 T dalam 4 tahun, tetapi asset turnover baru ${APD_ASSET_TURNOVER}x dan ROA ${APD_ROA_PCT}%. Setiap rupiah capex baru wajib diikat pada target utilisasi & ROA unit.`,
    tone: "red",
  },
  {
    title: "Umur Tanaman = Tuas Terbesar",
    text: "Areal tua & renta 27% luas hanya menyumbang 25% TBS. Ini menjelaskan 40% gap yield 2,1 t/ha dan menjadikan replanting intervensi produktivitas dengan nilai terbesar (Rp 1,05 T/tahun).",
    tone: "amber",
  },
  {
    title: "OER Stagnan 4 Tahun",
    text: "OER hanya bergerak 22,1% → 22,4% sejak 2022 sementara yield naik 11,7%. Perbaikan pabrik & logistik belum mengejar perbaikan kebun — gap Rp 0,42 T/tahun tersedia dalam 12–18 bulan.",
    tone: "amber",
  },
  {
    title: "Skala Menentukan Gula",
    text: `Rendemen klaster PG besar 7,81% vs klaster kecil 6,99%. Konsolidasi giling ke unit >6.000 TCD adalah jalur tercepat menuju benchmark ${APD_RENDEMEN_BENCHMARK_PCT}%.`,
    tone: "blue",
  },
  {
    title: "5 Unit Masuk Kuadran Restrukturisasi",
    text: "Regional 6–7, dua klaster PG dan PTPN I menguasai Rp 32,0 T nilai buku (41% aset tetap) namun ber-ROA ≤2,1%. Di sinilah program optimalisasi & divestasi aset harus dipusatkan.",
    tone: "red",
  },
];
