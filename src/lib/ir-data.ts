/**
 * Data statis halaman Industrial Relations (/industrial-relations).
 * Periode acuan: Mei 2026 (YTD), data per 31 Mei 2026.
 */

import { PALETTE } from "./chart-palette";

/* ── KPI Strip ────────────────────────────────────────────────────── */

export interface IrKpi {
  label: string;
  value: string;
  /** Sufiks kecil di samping nilai, mis. "/100". */
  valueSuffix?: string;
  /** Baris kecil di bawah nilai, mis. "Kategori: Baik". */
  sub?: string;
  delta: string;
  trend: "up" | "down";
  deltaTone: "good" | "bad";
  compare: string;
  icon: "index" | "case" | "newcase" | "strike" | "resolution" | "peace";
  tone: "green" | "purple" | "amber" | "red" | "blue" | "violet";
  series: number[];
  color: string;
}

export const irKpi: IrKpi[] = [
  {
    label: "Industrial Relations Index",
    value: "82,6",
    valueSuffix: "/100",
    sub: "Kategori: Baik",
    delta: "+4,8 pts",
    trend: "up",
    deltaTone: "good",
    compare: "vs Apr 2026",
    icon: "index",
    tone: "green",
    series: [74, 75, 76, 75, 77, 78, 77, 79, 80, 79, 81, 82.6],
    color: PALETTE.green,
  },
  {
    label: "Kasus Aktif",
    value: "24",
    delta: "-8 kasus",
    trend: "down",
    deltaTone: "good",
    compare: "vs Apr 2026",
    icon: "case",
    tone: "purple",
    series: [38, 35, 37, 34, 36, 33, 35, 32, 34, 30, 32, 24],
    color: PALETTE.purple,
  },
  {
    label: "Kasus Baru (YTD)",
    value: "36",
    delta: "-12 kasus",
    trend: "down",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "newcase",
    tone: "amber",
    series: [10, 14, 12, 18, 16, 22, 20, 26, 28, 30, 33, 36],
    color: PALETTE.amber,
  },
  {
    label: "Potensi Aksi Mogok",
    value: "2",
    delta: "-1 lokasi",
    trend: "down",
    deltaTone: "good",
    compare: "vs Apr 2026",
    icon: "strike",
    tone: "red",
    series: [5, 4, 5, 3, 4, 5, 3, 4, 3, 4, 3, 2],
    color: PALETTE.red,
  },
  {
    label: "Tingkat Penyelesaian",
    value: "91%",
    delta: "+6%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Apr 2026",
    icon: "resolution",
    tone: "blue",
    series: [80, 82, 81, 83, 84, 85, 84, 86, 87, 86, 88, 91],
    color: PALETTE.blue,
  },
  {
    label: "Hari Tanpa Aksi Mogok",
    value: "128",
    delta: "+18 hari",
    trend: "up",
    deltaTone: "good",
    compare: "vs Apr 2026",
    icon: "peace",
    tone: "violet",
    series: [70, 76, 82, 88, 94, 98, 104, 108, 112, 118, 122, 128],
    color: PALETTE.blueSoft,
  },
];

/* ── 1. Sebaran kasus berdasarkan kategori ────────────────────────── */

export interface CaseCategory {
  name: string;
  value: number;
  pct: string;
  color: string;
}

export const caseCategories: CaseCategory[] = [
  { name: "Perselisihan Hak", value: 9, pct: "37,5%", color: PALETTE.blue },
  { name: "Perselisihan Kepentingan", value: 6, pct: "25,0%", color: PALETTE.green },
  { name: "Perselisihan PHK", value: 4, pct: "16,7%", color: PALETTE.amber },
  { name: "Perselisihan Antar Pekerja", value: 3, pct: "12,5%", color: PALETTE.purple },
  { name: "Lainnya", value: 2, pct: "8,3%", color: PALETTE.slate },
];

/* ── 2. Trend kasus IR (12 bulan terakhir) ────────────────────────── */

export const caseTrend = [
  { name: "Jun 25", baru: 45, selesai: 38 },
  { name: "Jul 25", baru: 52, selesai: 45 },
  { name: "Agu 25", baru: 48, selesai: 49 },
  { name: "Sep 25", baru: 55, selesai: 50 },
  { name: "Okt 25", baru: 60, selesai: 55 },
  { name: "Nov 25", baru: 58, selesai: 53 },
  { name: "Des 25", baru: 61, selesai: 57 },
  { name: "Jan 26", baru: 47, selesai: 43 },
  { name: "Feb 26", baru: 41, selesai: 43 },
  { name: "Mar 26", baru: 40, selesai: 41 },
  { name: "Apr 26", baru: 36, selesai: 30 },
  { name: "Mei 26", baru: 36, selesai: 34 },
];

/* ── 3. Potensi aksi mogok (top 5 lokasi) ─────────────────────────── */

export type RiskLevel = "Tinggi" | "Sedang" | "Rendah";

export const RISK_STYLE: Record<RiskLevel, string> = {
  Tinggi: "bg-[#fdecec] text-[#ef4444]",
  Sedang: "bg-[#fdf3e0] text-[#d98b06]",
  Rendah: "bg-ptpn-greenLight text-ptpn-green",
};

export interface StrikeRisk {
  lokasi: string;
  risk: RiskLevel;
  isu: string;
  trend: "up" | "down" | "flat";
}

export const strikeRisks: StrikeRisk[] = [
  { lokasi: "PTPN IV - Kebun Unit Bah Jambi", risk: "Tinggi", isu: "Upah & Tunjangan", trend: "up" },
  { lokasi: "PTPN III - PKS Sei Mangkei", risk: "Tinggi", isu: "Jam Kerja & Lembur", trend: "up" },
  { lokasi: "PTPN XII - Kebun Kalirejo", risk: "Sedang", isu: "Kesejahteraan", trend: "flat" },
  { lokasi: "PTPN VII - Kebun Rejosari", risk: "Sedang", isu: "PKB", trend: "flat" },
  { lokasi: "PTPN VI - Kebun Padang Luas", risk: "Rendah", isu: "Fasilitas Kerja", trend: "down" },
];

/* ── 4. Penyelesaian kasus ────────────────────────────────────────── */

export interface ResolutionSlice {
  name: string;
  value: number;
  pct: string;
  color: string;
}

export const caseResolution: ResolutionSlice[] = [
  { name: "Selesai", value: 155, pct: "91%", color: PALETTE.green },
  { name: "Dalam Proses", value: 13, pct: "8%", color: PALETTE.amber },
  { name: "Belum Ditangani", value: 2, pct: "1%", color: PALETTE.red },
];

/* ── 5. Kepatuhan hubungan industrial ─────────────────────────────── */

export interface ComplianceRow {
  name: string;
  pct: number;
  icon: "regulation" | "wage" | "pkb" | "worktime" | "safety";
}

export const complianceRows: ComplianceRow[] = [
  { name: "Kepatuhan Terhadap Peraturan Ketenagakerjaan", pct: 96, icon: "regulation" },
  { name: "Kepatuhan Pembayaran Upah", pct: 93, icon: "wage" },
  { name: "Kepatuhan Perjanjian Kerja Bersama (PKB)", pct: 89, icon: "pkb" },
  { name: "Kepatuhan Jam Kerja & Lembur", pct: 87, icon: "worktime" },
  { name: "Kepatuhan Keselamatan & Kesehatan Kerja", pct: 92, icon: "safety" },
];

/* ── 6. Komposisi serikat pekerja ─────────────────────────────────── */

export const unionTotals = {
  members: "18.642",
  membersCaption: "Total Anggota Serikat Pekerja",
  unions: "142",
  unionsCaption: "Serikat Pekerja Aktif",
};

export interface UnionSlice {
  name: string;
  value: number;
  pct: string;
  color: string;
}

export const unionComposition: UnionSlice[] = [
  { name: "FSBUN", value: 45, pct: "45%", color: PALETTE.blue },
  { name: "SPBUN", value: 28, pct: "28%", color: PALETTE.amber },
  { name: "SPKBN", value: 15, pct: "15%", color: PALETTE.purple },
  { name: "Lainnya", value: 12, pct: "12%", color: PALETTE.slate },
];

/* ── 7. Indeks hubungan industrial per region ─────────────────────── */

export interface RegionIndexRow {
  name: string;
  index: string;
  delta: string;
  trend: "up" | "down";
}

export const regionIndex: RegionIndexRow[] = [
  { name: "Regional I - Sumatera Utara", index: "86,5", delta: "5,2", trend: "up" },
  { name: "Regional II - Sumatera Selatan", index: "83,1", delta: "3,4", trend: "up" },
  { name: "Regional III - Jawa Barat", index: "81,9", delta: "4,1", trend: "up" },
  { name: "Regional IV - Jawa Tengah", index: "80,2", delta: "2,8", trend: "up" },
  { name: "Regional V - Jawa Timur", index: "82,7", delta: "0,5", trend: "down" },
  { name: "Regional VI - Kalimantan", index: "84,3", delta: "3,6", trend: "up" },
  { name: "Regional VII - Sulawesi", index: "78,6", delta: "1,2", trend: "down" },
  { name: "Regional VIII - Papua", index: "76,4", delta: "2,3", trend: "down" },
];

export const regionLegend = [
  { label: "≥ 85 (Sangat Baik)", color: PALETTE.green },
  { label: "75 - 84 (Baik)", color: PALETTE.greenSoft },
  { label: "65 - 74 (Cukup)", color: PALETTE.amber },
  { label: "< 65 (Perlu Perbaikan)", color: PALETTE.red },
];

/* ── 8. Top isu industrial relations (YTD) ────────────────────────── */

export interface IrIssueBar {
  name: string;
  count: number;
  pct: string;
  color: string;
}

export const irIssues: IrIssueBar[] = [
  { name: "Upah & Tunjangan", count: 18, pct: "33%", color: PALETTE.red },
  { name: "Jam Kerja & Lembur", count: 9, pct: "17%", color: PALETTE.amber },
  { name: "Kesejahteraan", count: 7, pct: "13%", color: "#eab308" },
  { name: "PKB", count: 6, pct: "11%", color: PALETTE.green },
  { name: "PHK", count: 5, pct: "9%", color: PALETTE.blue },
  { name: "Fasilitas Kerja", count: 4, pct: "7%", color: PALETTE.purple },
  { name: "Lainnya", count: 3, pct: "6%", color: PALETTE.slate },
];

/* ── 9. Rekomendasi & tindak lanjut ───────────────────────────────── */

export type Priority = "Prioritas Tinggi" | "Prioritas Sedang" | "Prioritas Rendah";

export const PRIORITY_STYLE: Record<Priority, string> = {
  "Prioritas Tinggi": "bg-[#fdecec] text-[#ef4444]",
  "Prioritas Sedang": "bg-[#fdf3e0] text-[#d98b06]",
  "Prioritas Rendah": "bg-ptpn-greenLight text-ptpn-green",
};

export interface IrRecommendation {
  text: string;
  priority: Priority;
  icon: "bipartit" | "wage" | "pkb" | "welfare";
  tone: "blue" | "green" | "teal" | "amber";
}

export const irRecommendations: IrRecommendation[] = [
  {
    text: "Perkuat komunikasi bipartit di lokasi dengan potensi risiko tinggi.",
    priority: "Prioritas Tinggi",
    icon: "bipartit",
    tone: "blue",
  },
  {
    text: "Tinjau dan percepat penyelesaian kasus upah & tunjangan.",
    priority: "Prioritas Sedang",
    icon: "wage",
    tone: "green",
  },
  {
    text: "Monitoring implementasi PKB secara berkala.",
    priority: "Prioritas Rendah",
    icon: "pkb",
    tone: "teal",
  },
  {
    text: "Tingkatkan program kesejahteraan pekerja di area operasional.",
    priority: "Prioritas Sedang",
    icon: "welfare",
    tone: "amber",
  },
];

export const irFootnote =
  "Hubungan Industrial yang harmonis merupakan kunci produktivitas dan keberlanjutan perusahaan.";
