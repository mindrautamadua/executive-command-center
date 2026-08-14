/**
 * Data statis halaman People Productivity (/people-productivity).
 * Periode acuan: Mei 2026 (YTD), pembanding Mei 2025.
 */

/* ── 1. KPI Strip ─────────────────────────────────────────────────── */

export interface ProduktivitasKpi {
  label: string;
  value: string;
  periode: string;
  delta: string;
  trend: "up" | "down";
  deltaTone: "good" | "bad";
  compare: string;
  icon: "users" | "chart" | "factory" | "database" | "droplet" | "clock" | "trending";
  tone: "green" | "blue" | "purple" | "amber" | "teal";
}

export const produktivitasKpi: ProduktivitasKpi[] = [
  {
    label: "Revenue per Employee",
    value: "Rp 1,18 M",
    periode: "YTD Mei 2026",
    delta: "6,7%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "users",
    tone: "green",
  },
  {
    label: "EBITDA per Employee",
    value: "Rp 326 Jt",
    periode: "YTD Mei 2026",
    delta: "5,3%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "chart",
    tone: "blue",
  },
  {
    label: "Production (Ton) per Employee",
    value: "74,8 Ton",
    periode: "YTD Mei 2026",
    delta: "6,5%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "factory",
    tone: "green",
  },
  {
    label: "Labor Cost per Employee",
    value: "Rp 176,4 Jt",
    periode: "YTD Mei 2026",
    delta: "-3,4%",
    trend: "down",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "database",
    tone: "purple",
  },
  {
    label: "Labor Cost per Ton (TBS)",
    value: "Rp 2.355",
    periode: "YTD Mei 2026",
    delta: "-4,2%",
    trend: "down",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "droplet",
    tone: "amber",
  },
  {
    label: "Labor Cost to Revenue",
    value: "9,7%",
    periode: "YTD Mei 2026",
    delta: "0,6 pts",
    trend: "up",
    deltaTone: "bad",
    compare: "vs Mei 2025",
    icon: "clock",
    tone: "teal",
  },
  {
    label: "Productivity Index (Base 2024 = 100)",
    value: "112",
    periode: "YTD Mei 2026",
    delta: "5,7%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "trending",
    tone: "blue",
  },
];

/* ── 2. Produktivitas Utama (Trend 12 bulan, indeks base 100) ─────── */

export interface TrenProduktivitas {
  name: string;
  revenue: number;
  produksi: number;
  laborCost: number;
  index: number;
}

export const trenProduktivitas: TrenProduktivitas[] = [
  { name: "Jun '25", revenue: 100, produksi: 100, laborCost: 100, index: 106 },
  { name: "Jul '25", revenue: 103, produksi: 101, laborCost: 100, index: 106 },
  { name: "Agu '25", revenue: 105, produksi: 103, laborCost: 99, index: 107 },
  { name: "Sep '25", revenue: 104, produksi: 102, laborCost: 101, index: 107 },
  { name: "Okt '25", revenue: 108, produksi: 104, laborCost: 98, index: 108 },
  { name: "Nov '25", revenue: 111, produksi: 106, laborCost: 97, index: 109 },
  { name: "Des '25", revenue: 110, produksi: 105, laborCost: 98, index: 108 },
  { name: "Jan '26", revenue: 114, produksi: 107, laborCost: 96, index: 109 },
  { name: "Feb '26", revenue: 116, produksi: 108, laborCost: 95, index: 110 },
  { name: "Mar '26", revenue: 118, produksi: 110, laborCost: 96, index: 111 },
  { name: "Apr '26", revenue: 117, produksi: 109, laborCost: 94, index: 110 },
  { name: "Mei '26", revenue: 120, produksi: 111, laborCost: 96, index: 112 },
];

/* ── 3. Produktivitas per Unit Kerja ──────────────────────────────── */

export interface UnitProduktivitas {
  unit: string;
  revenue: string;
  produksi: string;
  index: number;
  total?: boolean;
}

export const unitProduktivitas: UnitProduktivitas[] = [
  { unit: "PTPN III (Persero)", revenue: "1,42 M", produksi: "86,1", index: 118 },
  { unit: "PTPN IV", revenue: "1,28 M", produksi: "79,3", index: 115 },
  { unit: "PTPN I Regional 7", revenue: "1,11 M", produksi: "72,4", index: 110 },
  { unit: "PTPN V", revenue: "0,98 M", produksi: "63,2", index: 104 },
  { unit: "PTPN II", revenue: "0,86 M", produksi: "56,7", index: 97 },
  { unit: "PTPN VI", revenue: "0,77 M", produksi: "52,1", index: 92 },
  { unit: "PTPN Group (Total)", revenue: "1,18 M", produksi: "74,8", index: 112, total: true },
];

/* ── 4. Produktivitas Berdasarkan Jenis Usaha ─────────────────────── */

export interface JenisUsaha {
  lini: string;
  revenue: string;
  produksi: string;
  index: number | null;
  icon: "sawit" | "karet" | "teh" | "gula" | "support";
}

export const jenisUsaha: JenisUsaha[] = [
  { lini: "Kelapa Sawit", revenue: "1,22 M", produksi: "74,8 Ton TBS", index: 114, icon: "sawit" },
  { lini: "Karet", revenue: "0,98 M", produksi: "1,05 Ton Karet", index: 98, icon: "karet" },
  { lini: "Teh", revenue: "1,35 M", produksi: "0,62 Ton Teh", index: 121, icon: "teh" },
  { lini: "Gula", revenue: "1,05 M", produksi: "6,25 Ton Gula", index: 105, icon: "gula" },
  { lini: "Supporting Business", revenue: "0,76 M", produksi: "-", index: null, icon: "support" },
];

/* ── 5. Hubungan Produktivitas dengan Biaya (scatter) ─────────────── */

export interface BiayaVsIndex {
  unit: string;
  laborCostPerTon: number;
  index: number;
  headcount: number;
}

export const biayaVsIndex: BiayaVsIndex[] = [
  { unit: "PTPN III", laborCostPerTon: 2180, index: 118, headcount: 16400 },
  { unit: "PTPN IV", laborCostPerTon: 2355, index: 115, headcount: 14800 },
  { unit: "PTPN I Reg 7", laborCostPerTon: 2450, index: 110, headcount: 9600 },
  { unit: "PTPN V", laborCostPerTon: 2720, index: 104, headcount: 11200 },
  { unit: "PTPN II", laborCostPerTon: 2980, index: 97, headcount: 8900 },
  { unit: "PTPN VI", laborCostPerTon: 3150, index: 92, headcount: 7100 },
];

/* ── 6. Breakdown Produktivitas (drill down PTPN IV) ──────────────── */

export interface BreakdownUnit {
  unit: string;
  revenue: string;
  produksi: string;
  laborCostPerTon: string;
  index: number;
  total?: boolean;
}

export const breakdownPtpnIv: BreakdownUnit[] = [
  { unit: "Kebun Bah Lias", revenue: "1,68 M", produksi: "92,1", laborCostPerTon: "2.102", index: 125 },
  { unit: "Kebun Sei Rokan", revenue: "1,42 M", produksi: "78,5", laborCostPerTon: "2.341", index: 115 },
  { unit: "Pabrik Sei Rokan", revenue: "1,28 M", produksi: "-", laborCostPerTon: "-", index: 112 },
  { unit: "Kebun Adolina", revenue: "1,19 M", produksi: "69,3", laborCostPerTon: "2.620", index: 108 },
  { unit: "Kebun Tanah Putih", revenue: "1,05 M", produksi: "61,8", laborCostPerTon: "2.891", index: 102 },
  { unit: "Kebun Sei Buatan", revenue: "0,92 M", produksi: "50,2", laborCostPerTon: "3.101", index: 94 },
  { unit: "Rata-rata PTPN IV", revenue: "1,28 M", produksi: "74,8", laborCostPerTon: "2.355", index: 115, total: true },
];

/* ── 7. Drivers of Productivity (waterfall YTD) ───────────────────── */

export interface DriverIndex {
  name: string;
  /** Nilai delta; null untuk batang base/total. */
  delta: number | null;
  /** Nilai absolut untuk batang base/total. */
  value?: number;
  kind: "base" | "up" | "down" | "total";
}

export const driversIndex: DriverIndex[] = [
  { name: "Mei 2025 (Base)", delta: null, value: 106, kind: "base" },
  { name: "Peningkatan Produksi", delta: 3.2, kind: "up" },
  { name: "Efisiensi Proses", delta: 2.4, kind: "up" },
  { name: "Mix Produk Lebih Baik", delta: 1.7, kind: "up" },
  { name: "Kenaikan Biaya Tenaga Kerja", delta: -1.3, kind: "down" },
  { name: "Mei 2026 (YTD)", delta: null, value: 112, kind: "total" },
];

/* ── 8. Insight & Rekomendasi ─────────────────────────────────────── */

export interface InsightProduktivitas {
  judul: string;
  isi: string;
  tone: "green" | "amber" | "blue" | "purple";
}

export const insightProduktivitas: InsightProduktivitas[] = [
  {
    judul: "Produktivitas Meningkat",
    isi: "Productivity Index naik 5,7% (106 → 112) dibanding Mei 2025, didorong oleh peningkatan produksi dan efisiensi proses.",
    tone: "green",
  },
  {
    judul: "Labor Cost per Ton Turun",
    isi: "Turun 4,2% seiring efisiensi tenaga kerja dan optimalisasi jam kerja.",
    tone: "amber",
  },
  {
    judul: "Peluang Ekonomi dari Gap",
    isi: "Gap 26 poin (PTPN III 118 vs PTPN VI 92). Menutup 50% gap PTPN II & VI ke rata-rata Group ≈ potensi +Rp 2,9 T revenue per tahun.",
    tone: "blue",
  },
  {
    judul: "Fokus Perbaikan",
    isi: "Pengendalian biaya tenaga kerja dan peningkatan yield menjadi fokus utama.",
    tone: "purple",
  },
];

/* ── 9. Benchmarking Eksternal ────────────────────────────────────── */

export interface BenchmarkBar {
  label: string;
  value: number;
  bar: "green" | "slate" | "greenDark";
}

export const benchmarkEksternal: BenchmarkBar[] = [
  { label: "PTPN Group (YTD Mei 26)", value: 112, bar: "green" },
  { label: "Rata-rata Industri Nasional", value: 100, bar: "slate" },
  { label: "Top Quartile Industri", value: 130, bar: "greenDark" },
];

export const BENCHMARK_MAX = 130;

/** Governance metrik & benchmark (definisi, baseline, sumber). */
export const benchmarkMeta = {
  definisi:
    "Productivity Index = komposit tertimbang Revenue/FTE, Production/FTE & Labor Cost/Ton · Base 2024 = 100.",
  sumber:
    "Benchmark 2025 · Peer: 24 perusahaan perkebunan & agroindustri nasional · dinormalisasi per model bisnis.",
};

/* ── 10. Productivity Intelligence (sintesis eksekutif) ───────────── */

export interface IntelTile {
  label: string;
  value: string;
  sub: string;
  tone: "green" | "blue" | "amber" | "purple";
}

export const produktivitasIntel = {
  headline: {
    delta: "+5,7%",
    detail: "Productivity Index YoY · 106 → 112 (Base 2024 = 100)",
  },
  tiles: [
    {
      label: "Primary Driver",
      value: "Peningkatan Produksi +3,2 pts",
      sub: "53% dari total kenaikan +6,0 pts; disusul efisiensi proses +2,4 pts.",
      tone: "green",
    },
    {
      label: "Cost Efficiency",
      value: "Labor Cost/Ton −4,2%",
      sub: "Efisiensi tenaga kerja & optimalisasi jam kerja menahan laju biaya.",
      tone: "blue",
    },
    {
      label: "Productivity Risk",
      value: "Terkonsentrasi di 3 unit",
      sub: "Kenaikan didominasi PTPN III, IV & Regional 7; gap terbawah 26 pts.",
      tone: "amber",
    },
    {
      label: "Economic Opportunity",
      value: "≈ Rp 2,9 T / tahun",
      sub: "Menutup 50% gap PTPN II & VI ke rata-rata Group (~Rp 0,8 T EBITDA).",
      tone: "purple",
    },
  ] satisfies IntelTile[],
  rekomendasi:
    "Luncurkan program cross-unit productivity transfer — replikasi operating model PTPN III ke PTPN VI & II, target Productivity Index PTPN VI 92 → 105 dalam 12 bulan.",
};
