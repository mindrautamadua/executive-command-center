export type Trend = "up" | "down";

export interface KpiStripItem {
  label: string;
  value: string;
  unit?: string;
  delta: string;
  trend: Trend;
  compare: string;
  color: string;
  series: number[];
}

const s = (arr: number[]) => arr;

export const kpiStrip: KpiStripItem[] = [
  {
    label: "PENDAPATAN KONSOLIDASI",
    value: "Rp 24,60 T",
    delta: "9,30%",
    trend: "up",
    compare: "vs YTD 2025: Rp 22,51 T",
    color: "#22a45d",
    series: s([28, 26, 31, 29, 34, 33, 38, 36, 41, 44, 42, 48, 46, 52, 56]),
  },
  {
    label: "EBITDA",
    value: "Rp 6,82 T",
    delta: "12,10%",
    trend: "up",
    compare: "vs YTD 2025: Rp 6,08 T",
    color: "#2f9bf5",
    series: s([22, 25, 23, 28, 26, 31, 29, 33, 36, 34, 39, 42, 40, 45, 49]),
  },
  {
    label: "LABA BERSIH",
    value: "Rp 2,94 T",
    delta: "14,80%",
    trend: "up",
    compare: "vs YTD 2025: Rp 2,56 T",
    color: "#8b5cf6",
    series: s([18, 21, 19, 24, 22, 27, 25, 30, 28, 34, 32, 38, 41, 44, 50]),
  },
  {
    label: "ROA",
    value: "4,60%",
    delta: "0,40 ppts",
    trend: "up",
    compare: "vs YTD 2025: 4,20%",
    color: "#38b6ff",
    series: s([30, 28, 33, 31, 36, 34, 38, 36, 40, 38, 43, 41, 46, 44, 49]),
  },
  {
    label: "PRODUKSI CPO",
    value: "0,99",
    unit: "Juta Ton",
    delta: "7,10%",
    trend: "up",
    compare: "vs YTD 2025: 0,92 Juta Ton",
    color: "#f5a524",
    series: s([26, 29, 27, 32, 30, 35, 33, 37, 35, 40, 38, 42, 40, 45, 47]),
  },
  {
    label: "HARGA RATA-RATA CPO",
    value: "Rp 12.482",
    unit: "/kg",
    delta: "9,10%",
    trend: "up",
    compare: "vs YTD 2025: Rp 11.441 /kg",
    color: "#5fbf5f",
    series: s([24, 27, 25, 30, 28, 33, 31, 36, 34, 39, 37, 42, 40, 45, 48]),
  },
  {
    label: "HARGA RATA-RATA KARET",
    value: "Rp 18.650",
    unit: "/kg",
    delta: "1,20%",
    trend: "down",
    compare: "vs YTD 2025: Rp 18.877 /kg",
    color: "#ef4444",
    series: s([44, 42, 45, 41, 43, 39, 41, 37, 39, 35, 37, 33, 35, 31, 30]),
  },
];

export const operasional = [
  { label: "Afdeling Aktif", value: "1.243", color: "#22a45d", bg: "#e8f7ef", icon: "sprout" },
  { label: "Pabrik Aktif", value: "64", color: "#2f9bf5", bg: "#e7f2fe", icon: "factory" },
  { label: "Karyawan Aktif", value: "70.142", color: "#f5a524", bg: "#fef4e3", icon: "users" },
  { label: "Kebun Plasma", value: "338", color: "#8b5cf6", bg: "#f1ecfe", icon: "layers" },
] as const;

export const mapLegend = [
  { label: "Kebun", value: "528", color: "#22a45d" },
  { label: "Pabrik", value: "67", color: "#2f9bf5" },
  { label: "Terminal", value: "23", color: "#f5a524" },
  { label: "Pelabuhan", value: "7", color: "#8b5cf6" },
];

/** Pendapatan YTD per regional (Rp T) — jumlah 24,60 T sesuai kpiStrip. */
export const regional = [
  { name: "Regional 1", color: "#22a45d", value: "Rp 8,09 T", delta: "13,2%", trend: "up" as Trend },
  { name: "Regional 2", color: "#f5a524", value: "Rp 6,15 T", delta: "10,1%", trend: "up" as Trend },
  { name: "Regional 3", color: "#2f9bf5", value: "Rp 4,06 T", delta: "8,7%", trend: "up" as Trend },
  { name: "Regional 4", color: "#ef4444", value: "Rp 3,08 T", delta: "-2,3%", trend: "down" as Trend },
  { name: "Regional 5", color: "#8b5cf6", value: "Rp 3,22 T", delta: "5,6%", trend: "up" as Trend },
];

export const alerts = [
  {
    level: "RISIKO TINGGI",
    tone: "danger" as const,
    time: "08:30",
    title: "Fluktuasi harga CPO global meningkat signifikan",
    rec: "Rekomendasi: Mitigasi risiko pasar",
  },
  {
    level: "PERHATIAN",
    tone: "warning" as const,
    time: "07:45",
    title: "Realisasi produksi Regional 4 di bawah target",
    rec: "Rekomendasi: Evaluasi operasional kebun",
  },
  {
    level: "INFORMASI",
    tone: "info" as const,
    time: "06:15",
    title: "Kebijakan ekspor CPO terbaru dari pemerintah",
    rec: "Rekomendasi: Penyesuaian strategi pemasaran",
  },
];

export const inisiatif = [
  { label: "Transformasi Digital", value: 78 },
  { label: "Optimalisasi Portofolio Aset", value: 65 },
  { label: "Peningkatan Produktivitas", value: 82 },
  { label: "Pengembangan Talenta", value: 71 },
];

export const berita = [
  {
    date: "12 Agu 2026",
    title: "PTPN Group Catat Kinerja Positif di Semester I 2026",
    hue: 120,
  },
  {
    date: "09 Agu 2026",
    title: "PTPN Perkuat Kemitraan dengan Petani Plasma",
    hue: 95,
  },
  {
    date: "07 Agu 2026",
    title: "Inovasi Teknologi Tingkatkan Produktivitas Kebun",
    hue: 140,
  },
];

const bulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Des"];

/**
 * Pendapatan kumulatif 2026 (Rp T): Jan–Mei realisasi (Mei = Rp 24,6 T sesuai
 * group-baseline), Jun–Des proyeksi menuju RKAP FY Rp 58,4 T. `line` = target
 * RKAP prorata. Bar dipecah PalmCo vs subholding lain (70,7% / 29,3%).
 */
const pendapatanKumulatif = [4.4, 9.0, 14.0, 19.2, 24.6, 29.6, 34.8, 40.2, 45.5, 50.7, 55.1, 58.4];

export const trendKeuangan = bulan.map((m, i) => ({
  name: m,
  bar1: +(pendapatanKumulatif[i] * 0.707).toFixed(2),
  bar2: +(pendapatanKumulatif[i] * 0.293).toFixed(2),
  line: +((58.4 / 12) * (i + 1)).toFixed(2),
  dot: +((58.4 / 12) * (i + 1)).toFixed(2),
}));

/** Komposisi nilai penjualan YTD (%) — selaras revenueByKomoditas di pemasaran-data.ts. */
export const komposisiPenjualan = [
  { name: "CPO", value: 61, color: "#3fb56f" },
  { name: "Hilirisasi", value: 15, color: "#57c8e8" },
  { name: "Gula & Tetes", value: 9, color: "#f2c94c" },
  { name: "PK & PKO", value: 8, color: "#8b7cf6" },
  { name: "Karet, Teh & Lainnya", value: 7, color: "#c9b8f7" },
];

/**
 * Produksi kumulatif 2026 (juta ton): Jan–Mei realisasi (CPO 0,99 · PK 0,203 ·
 * karet 0,0476 · gula 0,092 sesuai group-baseline), Jun–Des proyeksi menuju
 * RKAP FY (CPO 2,53 · PK 0,52 · karet 0,118 · gula 0,78). Gula nol sebelum
 * Mei karena musim giling baru dimulai bulan tersebut.
 */
const KUMULATIF = {
  CPO: [0.19, 0.39, 0.59, 0.79, 0.99, 1.2, 1.42, 1.65, 1.88, 2.1, 2.32, 2.53],
  PK: [0.039, 0.08, 0.122, 0.163, 0.203, 0.246, 0.291, 0.338, 0.385, 0.43, 0.475, 0.52],
  Karet: [0.0095, 0.019, 0.0286, 0.0381, 0.0476, 0.0575, 0.067, 0.077, 0.0865, 0.096, 0.107, 0.118],
  Gula: [0, 0, 0, 0, 0.092, 0.25, 0.41, 0.55, 0.66, 0.73, 0.77, 0.78],
};

export const produksiSeries = bulan.map((m, i) => ({
  name: m,
  CPO: KUMULATIF.CPO[i],
  PK: KUMULATIF.PK[i],
  Karet: KUMULATIF.Karet[i],
  Gula: KUMULATIF.Gula[i],
}));

export const produksiKpi = [
  { label: "CPO", value: "0,99", unit: "Juta Ton", delta: "7,10%", trend: "up" as Trend },
  { label: "PK", value: "203", unit: "Ribu Ton", delta: "6,40%", trend: "up" as Trend },
  { label: "KARET", value: "47,6", unit: "Ribu Ton", delta: "1,90%", trend: "down" as Trend },
  { label: "TEBU", value: "1,24", unit: "Juta Ton", delta: "5,45%", trend: "up" as Trend },
];

export const sdmKpi = [
  { label: "Total Karyawan", value: "70.142", delta: "2,15%", trend: "up" as Trend },
  { label: "Engagement Score", value: "4,21 / 5", delta: "0,18", trend: "up" as Trend },
  { label: "Turnover Rate", value: "2,45%", delta: "-0,35%", trend: "down" as Trend },
];

export const komposisiKaryawan = [
  { name: "Operasional", value: 61, color: "#2f9bf5" },
  { name: "Staf", value: 25, color: "#22a45d" },
  { name: "Profesional", value: 10, color: "#14b8a6" },
  { name: "Manajerial", value: 4, color: "#cbd5e1" },
];

/** Selaras group-baseline: yield CPO/ha, HPP CPO, utilisasi PKS, ROE = laba FY ÷ ekuitas. */
export const kpiStrategis = [
  { label: "Market Share CPO Nasional", value: "5,4%", delta: "0,2 ppts", trend: "up" as Trend },
  { label: "Produktivitas CPO", value: "4,90", unit: "Ton/Ha", delta: "0,14", trend: "up" as Trend },
  {
    label: "Biaya Produksi CPO",
    value: "Rp 8.950",
    unit: "/kg",
    delta: "2,90%",
    trend: "up" as Trend,
    // HPP naik di atas target Rp 8.700 — kenaikan di sini berarti buruk.
    tone: "bad" as const,
  },
  { label: "Utilisasi Pabrik Kelapa Sawit", value: "78,4%", delta: "1,8 ppts", trend: "up" as Trend },
  { label: "Return on Equity (ROE)", value: "10,40%", delta: "0,95 ppts", trend: "up" as Trend },
];

/** Proyeksi tutup tahun 2026 — selaras fyForecast di kba-data.ts & RKAP produksi. */
export const analitikPrediktif = [
  {
    label: "Proyeksi Produksi CPO 2026",
    value: "2,53",
    unit: "Juta Ton",
    delta: "6,8% vs 2025",
    color: "#22a45d",
    series: [20, 24, 22, 28, 26, 32, 30, 36, 34, 40, 44, 48],
  },
  {
    label: "Proyeksi Pendapatan 2026",
    value: "Rp 59,1 T",
    delta: "9,0% vs 2025",
    color: "#2f9bf5",
    series: [24, 22, 27, 25, 31, 29, 35, 33, 39, 37, 43, 47],
  },
  {
    label: "Proyeksi Laba Bersih 2026",
    value: "Rp 6,3 T",
    delta: "10,2% vs 2025",
    color: "#8b5cf6",
    series: [18, 22, 20, 26, 24, 30, 28, 34, 32, 38, 42, 46],
  },
];

export const liveFeed = [
  { label: "CPO", value: "Rp 12.482", delta: "9,10%", trend: "up" as Trend },
  { label: "PK", value: "Rp 2.548", delta: "6,75%", trend: "up" as Trend },
  { label: "Karet", value: "Rp 18.650", delta: "-1,20%", trend: "down" as Trend },
  { label: "Tebu", value: "Rp 1.225", delta: "3,45%", trend: "up" as Trend },
  { label: "Kurs: USD/IDR", value: "16.250", delta: "0,25%", trend: "up" as Trend },
  { label: "Brent Oil", value: "$82,45", delta: "-0,35%", trend: "down" as Trend },
];

export const komoditasTabs = ["Regional 1", "Regional 2", "Regional 3", "Regional 4", "Regional 5"];
