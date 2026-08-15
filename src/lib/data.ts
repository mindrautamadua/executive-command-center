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
    value: "Rp 56,80 T",
    delta: "12,45%",
    trend: "up",
    compare: "vs YTD 2024: Rp 50,48 T",
    color: "#22a45d",
    series: s([28, 26, 31, 29, 34, 33, 38, 36, 41, 44, 42, 48, 46, 52, 56]),
  },
  {
    label: "EBITDA",
    value: "Rp 9,62 T",
    delta: "15,30%",
    trend: "up",
    compare: "vs YTD 2024: Rp 8,35 T",
    color: "#2f9bf5",
    series: s([22, 25, 23, 28, 26, 31, 29, 33, 36, 34, 39, 42, 40, 45, 49]),
  },
  {
    label: "LABA BERSIH",
    value: "Rp 4,38 T",
    delta: "18,70%",
    trend: "up",
    compare: "vs YTD 2024: Rp 3,69 T",
    color: "#8b5cf6",
    series: s([18, 21, 19, 24, 22, 27, 25, 30, 28, 34, 32, 38, 41, 44, 50]),
  },
  {
    label: "ROA",
    value: "5,61%",
    delta: "0,82 ppts",
    trend: "up",
    compare: "vs YTD 2024: 4,79%",
    color: "#38b6ff",
    series: s([30, 28, 33, 31, 36, 34, 38, 36, 40, 38, 43, 41, 46, 44, 49]),
  },
  {
    label: "PRODUKSI CPO",
    value: "1,95",
    unit: "Juta Ton",
    delta: "7,25%",
    trend: "up",
    compare: "vs YTD 2024: 1,82 Juta Ton",
    color: "#f5a524",
    series: s([26, 29, 27, 32, 30, 35, 33, 37, 35, 40, 38, 42, 40, 45, 47]),
  },
  {
    label: "HARGA RATA-RATA CPO",
    value: "Rp 12.482",
    unit: "/kg",
    delta: "9,10%",
    trend: "up",
    compare: "vs YTD 2024: Rp 11.43 /kg",
    color: "#5fbf5f",
    series: s([24, 27, 25, 30, 28, 33, 31, 36, 34, 39, 37, 42, 40, 45, 48]),
  },
  {
    label: "HARGA RATA-RATA KARET",
    value: "Rp 18.650",
    unit: "/kg",
    delta: "1,20%",
    trend: "down",
    compare: "vs YTD 2024: Rp 18.87 /kg",
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

export const regional = [
  { name: "Regional 1", color: "#22a45d", value: "Rp 18,65 T", delta: "13,2%", trend: "up" as Trend },
  { name: "Regional 2", color: "#f5a524", value: "Rp 14,21 T", delta: "10,1%", trend: "up" as Trend },
  { name: "Regional 3", color: "#2f9bf5", value: "Rp 9,38 T", delta: "8,7%", trend: "up" as Trend },
  { name: "Regional 4", color: "#ef4444", value: "Rp 7,12 T", delta: "-2,3%", trend: "down" as Trend },
  { name: "Regional 5", color: "#8b5cf6", value: "Rp 7,44 T", delta: "5,6%", trend: "up" as Trend },
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

export const trendKeuangan = bulan.map((m, i) => {
  const base = [30, 31.5, 33, 34.5, 36.5, 38, 40, 41.5, 43.5, 45, 47, 49.5];
  return {
    name: m,
    bar1: base[i] * 0.62,
    bar2: base[i] * 0.38,
    line: base[i] + 4.5,
    dot: base[i] + 4.5,
  };
});

export const komposisiPenjualan = [
  { name: "CPO", value: 58, color: "#3fb56f" },
  { name: "PK", value: 22, color: "#57c8e8" },
  { name: "Karet", value: 10, color: "#8b7cf6" },
  { name: "Tebu", value: 6, color: "#f2c94c" },
  { name: "Lainnya", value: 4, color: "#c9b8f7" },
];

export const produksiSeries = bulan.map((m, i) => ({
  name: m,
  CPO: 1.55 + i * 0.033 + (i % 3 === 0 ? 0.05 : 0),
  PK: 2.05 + i * 0.036 + (i % 4 === 0 ? 0.04 : 0),
  Karet: 0.62 + i * 0.006,
  Tebu: 0.28 + i * 0.004,
}));

export const produksiKpi = [
  { label: "CPO", value: "1,95", unit: "Juta Ton", delta: "7,25%", trend: "up" as Trend },
  { label: "PK", value: "2,48", unit: "Juta Ton", delta: "6,80%", trend: "up" as Trend },
  { label: "KARET", value: "286", unit: "Ribu Ton", delta: "4,12%", trend: "up" as Trend },
  { label: "TEBU", value: "3,21", unit: "Juta Ton", delta: "5,45%", trend: "up" as Trend },
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

export const kpiStrategis = [
  { label: "Market Share CPO Nasional", value: "27,8%", delta: "1,2 ppts", trend: "up" as Trend },
  { label: "Produktivitas CPO", value: "4,25", unit: "Ton/Ha", delta: "0,18", trend: "up" as Trend },
  { label: "Biaya Produksi CPO", value: "Rp 8.432", unit: "/kg", delta: "-2,15%", trend: "down" as Trend },
  { label: "Utilisasi Pabrik Kelapa Sawit", value: "87,3%", delta: "3,2 ppts", trend: "up" as Trend },
  { label: "Return on Equity (ROE)", value: "12,45%", delta: "1,85 ppts", trend: "up" as Trend },
];

export const analitikPrediktif = [
  {
    label: "Proyeksi Produksi CPO 2026",
    value: "4,15",
    unit: "Juta Ton",
    delta: "6,8% vs 2024",
    color: "#22a45d",
    series: [20, 24, 22, 28, 26, 32, 30, 36, 34, 40, 44, 48],
  },
  {
    label: "Proyeksi Pendapatan 2026",
    value: "Rp 125,6 T",
    delta: "8,9% vs 2024",
    color: "#2f9bf5",
    series: [24, 22, 27, 25, 31, 29, 35, 33, 39, 37, 43, 47],
  },
  {
    label: "Proyeksi Laba Bersih 2026",
    value: "Rp 9,8 T",
    delta: "10,2% vs 2024",
    color: "#8b5cf6",
    series: [18, 22, 20, 26, 24, 30, 28, 34, 32, 38, 42, 46],
  },
];

export const liveFeed = [
  { label: "CPO", value: "Rp 12.482", delta: "9,10%", trend: "up" as Trend },
  { label: "PK", value: "Rp 2.548", delta: "6,75%", trend: "up" as Trend },
  { label: "Karet", value: "Rp 18.650", delta: "-1,20%", trend: "down" as Trend },
  { label: "Tebu", value: "Rp 1.225", delta: "3,45%", trend: "up" as Trend },
  { label: "Kurs: USD/IDR", value: "16.325", delta: "0,25%", trend: "up" as Trend },
  { label: "Brent Oil", value: "$82,45", delta: "-0,35%", trend: "down" as Trend },
];

export const komoditasTabs = ["Regional 1", "Regional 2", "Regional 3", "Regional 4", "Regional 5"];
