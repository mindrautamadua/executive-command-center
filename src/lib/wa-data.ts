/**
 * Data statis halaman Workforce Analytics (/workforce-analytics).
 * Periode acuan: Mei 2026 (YTD), data per 31 Mei 2026.
 */

import { PALETTE, SEQ_GREEN } from "./chart-palette";

/* ── KPI Strip ────────────────────────────────────────────────────── */

export interface WaKpi {
  label: string;
  value: string;
  sub: string;
  /** Kosong = tampilkan `compare` saja (mis. "Stabil vs Des 2025"). */
  delta?: string;
  trend?: "up" | "down";
  deltaTone?: "good" | "bad";
  compare: string;
  icon: "users" | "fte" | "newhire" | "turnover" | "tenure" | "ratio" | "age" | "cost";
  tone: "blue" | "green" | "teal" | "red" | "purple" | "amber";
}

export const waKpi: WaKpi[] = [
  {
    label: "Total Headcount",
    value: "70.142",
    sub: "Orang",
    delta: "2,4%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Des 2025",
    icon: "users",
    tone: "blue",
  },
  {
    label: "Total FTE",
    value: "68.921",
    sub: "FTE",
    delta: "2,1%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Des 2025",
    icon: "fte",
    tone: "green",
  },
  {
    label: "New Hire (YTD)",
    value: "2.864",
    sub: "Orang",
    delta: "8,7%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "newhire",
    tone: "teal",
  },
  {
    label: "Turnover Rate (YTD)",
    value: "6,8%",
    sub: "Orang",
    delta: "-1,3 pts",
    trend: "down",
    deltaTone: "bad",
    compare: "vs Mei 2025",
    icon: "turnover",
    tone: "red",
  },
  {
    label: "Average Tenure",
    value: "8,2",
    sub: "Tahun",
    delta: "0,3 thn",
    trend: "up",
    deltaTone: "good",
    compare: "vs Des 2025",
    icon: "tenure",
    tone: "amber",
  },
  {
    label: "Male / Female Ratio",
    value: "73% / 27%",
    sub: "52.076 / 18.066",
    compare: "Stabil vs Des 2025",
    icon: "ratio",
    tone: "purple",
  },
  {
    label: "Average Age",
    value: "38,7",
    sub: "Tahun",
    compare: "Stabil vs Des 2025",
    icon: "age",
    tone: "blue",
  },
  {
    label: "HC Cost to Revenue",
    value: "9,7%",
    sub: "YTD",
    delta: "-0,6 pts",
    trend: "down",
    deltaTone: "bad",
    compare: "vs Mei 2025",
    icon: "cost",
    tone: "green",
  },
];

/* ── 1. Headcount Trend (12 bulan) ────────────────────────────────── */

export const headcountTrend = [
  { name: "Jun 2025", value: 63452 },
  { name: "Jul 2025", value: 63998 },
  { name: "Agu 2025", value: 64321 },
  { name: "Sep 2025", value: 64892 },
  { name: "Okt 2025", value: 65210 },
  { name: "Nov 2025", value: 65812 },
  { name: "Des 2025", value: 68501 },
  { name: "Jan 2026", value: 68732 },
  { name: "Feb 2026", value: 69102 },
  { name: "Mar 2026", value: 69315 },
  { name: "Apr 2026", value: 69742 },
  { name: "Mei 2026", value: 70142 },
];

/* ── 2. Headcount by Organization ─────────────────────────────────── */

export interface DonutRow {
  name: string;
  value: number;
  pct: string;
  color: string;
}

export const headcountByOrg: DonutRow[] = [
  { name: "PTPN IV", value: 23512, pct: "33,5%", color: PALETTE.green },
  { name: "PTPN III", value: 17642, pct: "25,1%", color: PALETTE.blue },
  { name: "PTPN II", value: 11982, pct: "17,1%", color: PALETTE.amber },
  { name: "PTPN I", value: 7654, pct: "10,9%", color: PALETTE.purple },
  { name: "PTPN V", value: 4231, pct: "6,0%", color: PALETTE.slate },
  { name: "PTPN VI", value: 2201, pct: "3,1%", color: "#c3ced9" },
  { name: "Lainnya", value: 920, pct: "1,3%", color: "#dde5ec" },
];

/* ── 3. Headcount by Employment Type ──────────────────────────────── */

export const headcountByType: DonutRow[] = [
  { name: "Karyawan Tetap", value: 52146, pct: "74,3%", color: PALETTE.green },
  { name: "Karyawan PKWT", value: 8732, pct: "12,4%", color: PALETTE.blue },
  { name: "Buruh Harian Lepas", value: 6891, pct: "9,8%", color: PALETTE.amber },
  { name: "Magang / Internship", value: 1243, pct: "1,8%", color: PALETTE.purple },
  { name: "Lainnya", value: 1130, pct: "1,6%", color: PALETTE.slate },
];

/* ── 4. Headcount by Generation ───────────────────────────────────── */

export const headcountByGeneration = [
  { name: "Gen Z (1997-2012)", value: 8912, pct: "12,7%", color: PALETTE.green },
  { name: "Milenial (1981-1996)", value: 31245, pct: "44,5%", color: PALETTE.blue },
  { name: "Gen X (1965-1980)", value: 24118, pct: "34,4%", color: PALETTE.amber },
  { name: "Baby Boomers (1946-1964)", value: 5867, pct: "8,4%", color: PALETTE.purple },
];

/** Skala maksimum sumbu bar generasi. */
export const GENERATION_AXIS_MAX = 40000;

/* ── 5. Headcount by Age Group ────────────────────────────────────── */

export const headcountByAge = [
  { name: "< 25", value: 4321, color: SEQ_GREEN[1] },
  { name: "25 - 30", value: 12845, color: SEQ_GREEN[2] },
  { name: "31 - 35", value: 15732, color: SEQ_GREEN[3] },
  { name: "36 - 40", value: 13421, color: SEQ_GREEN[3] },
  { name: "41 - 45", value: 11102, color: SEQ_GREEN[2] },
  { name: "46 - 50", value: 8214, color: SEQ_GREEN[2] },
  { name: "> 50", value: 4507, color: SEQ_GREEN[1] },
];

/* ── 6. Diversity Snapshot ────────────────────────────────────────── */

export interface DiversityTile {
  label: string;
  value: string;
  sub: string;
  delta: string;
  compare: string;
  icon: "female" | "disability" | "senior" | "tenure";
  tone: "purple" | "blue" | "green" | "teal";
}

export const diversityTiles: DiversityTile[] = [
  {
    label: "Perempuan",
    value: "27%",
    sub: "18.066 Orang",
    delta: "1,2 pts",
    compare: "vs Des 2025",
    icon: "female",
    tone: "purple",
  },
  {
    label: "Disabilitas",
    value: "1,25%",
    sub: "876 Orang",
    delta: "0,08 pts",
    compare: "vs Des 2025",
    icon: "disability",
    tone: "blue",
  },
  {
    label: "Usia > 45 Tahun",
    value: "18,7%",
    sub: "13.121 Orang",
    delta: "0,9 pts",
    compare: "vs Des 2025",
    icon: "senior",
    tone: "green",
  },
  {
    label: "Tenure > 10 Tahun",
    value: "32,4%",
    sub: "22.718 Orang",
    delta: "1,1 pts",
    compare: "vs Des 2025",
    icon: "tenure",
    tone: "teal",
  },
];

export const diversityNote =
  "Kami berkomitmen menciptakan workforce yang beragam, inklusif dan berkelanjutan.";

/* ── 7. Headcount by Job Level ────────────────────────────────────── */

export const headcountByJobLevel = [
  { name: "Direktur & SVP", value: "231", pct: "0,3%", color: PALETTE.green },
  { name: "VP", value: "653", pct: "0,9%", color: PALETTE.blue },
  { name: "Manager", value: "4.892", pct: "7,0%", color: PALETTE.teal },
  { name: "Asisten Manager / Supervisor", value: "12.453", pct: "17,7%", color: PALETTE.purple },
  { name: "Staff", value: "39.128", pct: "55,8%", color: PALETTE.blueSoft },
  { name: "Non Staff / Operator", value: "12.785", pct: "18,3%", color: PALETTE.amber },
];

export const jobLevelTotal = { value: "70.142", pct: "100%" };

/* ── 8. Turnover Rate Trend (12 bulan) ────────────────────────────── */

export const turnoverTrend = [
  { name: "Jun 2025", value: 8.2 },
  { name: "Jul 2025", value: 8.0 },
  { name: "Agu 2025", value: 7.9 },
  { name: "Sep 2025", value: 7.8 },
  { name: "Okt 2025", value: 7.8 },
  { name: "Nov 2025", value: 7.6 },
  { name: "Des 2025", value: 7.4 },
  { name: "Jan 2026", value: 7.2 },
  { name: "Feb 2026", value: 7.1 },
  { name: "Mar 2026", value: 7.0 },
  { name: "Apr 2026", value: 6.9 },
  { name: "Mei 2026", value: 6.8 },
];

/* ── 9. Headcount Movement (YTD, waterfall) ───────────────────────── */

export interface MovementStep {
  /** Label dua baris dipisah "\n". */
  name: string;
  /** Dasar bar melayang (kumulatif sebelum langkah ini). */
  base: number;
  /** Tinggi bar (selalu positif). */
  value: number;
  /** Label nilai bertanda yang ditampilkan di atas bar. */
  label: string;
  kind: "total" | "in" | "out";
}

export const headcountMovement: MovementStep[] = [
  { name: "Headcount\nDes 2025", base: 0, value: 68501, label: "68.501", kind: "total" },
  { name: "New Hire", base: 68501, value: 2864, label: "+2.864", kind: "in" },
  { name: "Internal\nMobility In", base: 71365, value: 1231, label: "+1.231", kind: "in" },
  { name: "Rehire", base: 72596, value: 342, label: "+342", kind: "in" },
  { name: "Turnover", base: 70593, value: 2345, label: "-2.345", kind: "out" },
  { name: "Internal\nMobility Out", base: 70306, value: 287, label: "-287", kind: "out" },
  { name: "Lainnya", base: 70142, value: 164, label: "-164", kind: "out" },
  { name: "Headcount\nMei 2026", base: 0, value: 70142, label: "70.142", kind: "total" },
];

/* ── 10. Insight & Rekomendasi ────────────────────────────────────── */

export interface WaInsight {
  title: string;
  text: string;
  icon: "growth" | "turnover" | "generation" | "retention" | "diversity";
  tone: "green" | "amber" | "blue" | "pink" | "teal";
}

export const waInsights: WaInsight[] = [
  {
    title: "Pertumbuhan Headcount Sehat",
    text: "Headcount tumbuh 2,4% dibanding Des 2025, sejalan dengan kebutuhan bisnis.",
    icon: "growth",
    tone: "green",
  },
  {
    title: "Turnover Menurun",
    text: "Turnover rate turun -1,3 pts dibanding Mei 2025. Pertahankan momentum ini.",
    icon: "turnover",
    tone: "amber",
  },
  {
    title: "Komposisi Generasi Produktif",
    text: "44,5% workforce adalah generasi Milenial, usia produktif (25-40 tahun).",
    icon: "generation",
    tone: "blue",
  },
  {
    title: "Fokus Retensi Talenta Kunci",
    text: "Perhatikan retention pada karyawan dengan masa kerja 3-5 tahun.",
    icon: "retention",
    tone: "pink",
  },
  {
    title: "Diversity Terus Meningkat",
    text: "Persentase perempuan meningkat 1,2 pts. Pertahankan dan tingkatkan.",
    icon: "diversity",
    tone: "teal",
  },
];
