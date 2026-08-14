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

/* ── 0. Data Trust ────────────────────────────────────────────────── */

export const waDataTrust = {
  asOf: "31 Mei 2026",
  lastRefresh: "14 Agu 2026 · 22:14 WIB",
  coverage: "97,8%",
  quality: "92,0%",
  sources: ["SAP HCM", "IHCMS", "Payroll", "LMS", "e-Rekrutmen", "Attendance"],
};

/* ── 0b. Workforce Intelligence (sintesis) ────────────────────────── */

export interface WaIntelSignal {
  no: string;
  title: string;
  text: string;
  impactLabel: string;
  impactValue: string;
  tone: "red" | "amber";
}

export const waIntelCounts = [
  { label: "Critical", value: 2, tone: "red" },
  { label: "Warning", value: 2, tone: "amber" },
  { label: "Horizon", value: "2028", tone: "green" },
] as { label: string; value: number | string; tone: "red" | "green" | "amber" }[];

export const waIntelSignals: WaIntelSignal[] = [
  {
    no: "01",
    title: "Future Workforce Gap",
    text: "Proyeksi shortage 5.600 FTE pada 2028 (demand business plan 76.800 vs supply 71.200).",
    impactLabel: "Business Impact",
    impactValue: "High",
    tone: "red",
  },
  {
    no: "02",
    title: "Productivity Gap",
    text: "Labor cost +8,2% sementara productivity hanya +2,1% di Palm Oil Operations.",
    impactLabel: "Potential Impact",
    impactValue: "Rp 48 M",
    tone: "amber",
  },
  {
    no: "03",
    title: "Critical Skill Shortage",
    text: "Proyeksi shortage 830 kapabilitas AI & Data pada 2028; reskilling rate 6% vs target 12%.",
    impactLabel: "Risk Horizon",
    impactValue: "12 bulan",
    tone: "red",
  },
  {
    no: "04",
    title: "Aging Workforce",
    text: "18,7% workforce (13.121 orang) berusia > 45 tahun; puncak pensiun teknis 2029-2031.",
    impactLabel: "Exposure",
    impactValue: "13.121 Orang",
    tone: "amber",
  },
];

export const waIntelPriority =
  "Prioritaskan reskilling + internal mobility sebelum external hiring — tutup ±60% gap 2028 dari internal. Potensi saving Rp 12,6 M.";

/* ── 0c. Workforce Demand vs Supply ───────────────────────────────── */

export interface DemandSupplyRow {
  year: string;
  supply: number;
  demand: number;
  /** Negatif = shortage. */
  gap: number;
}

/** Demand 2026 = Workforce Requirement RKAP (konsisten Strategic Alignment /sdm-talenta). */
export const demandSupply: DemandSupplyRow[] = [
  { year: "2026", supply: 70142, demand: 72318, gap: -2176 },
  { year: "2027", supply: 70700, demand: 74400, gap: -3700 },
  { year: "2028", supply: 71200, demand: 76800, gap: -5600 },
];

export const demandSupplyHeadline = {
  value: "-5.600 FTE",
  label: "Proyeksi Workforce Gap 2028",
  note: "Tanpa intervensi reskilling, mobility, dan automation.",
};

/** Rantai penurunan demand dari strategi bisnis (business-driver based). */
export const businessDriverChain = [
  { label: "Target Produksi 2026 (RKAP)", value: "+8%", sub: "Ton TBS & Olahan" },
  { label: "Required Capacity", value: "+6,2%", sub: "Jam kerja efektif" },
  { label: "Required Workforce", value: "72.318", sub: "FTE" },
  { label: "Current Supply", value: "70.142", sub: "Headcount aktif" },
];

export const gapClosurePlan = [
  { label: "Targeted Hiring", value: "1.200" },
  { label: "Reskilling & Mobility", value: "600" },
  { label: "Automation Offset", value: "376" },
];

/* ── 0d. Workforce Capacity ───────────────────────────────────────── */

export const workforceCapacity = {
  /** Kapasitas efektif vs FTE teoritis. */
  effectivePct: 82.0,
  effectiveFte: "56.515",
  theoreticalFte: "68.921",
  factors: [
    { label: "Productivity loss (below proficiency)", pct: 6.2 },
    { label: "Seasonal idle / utilization", pct: 4.5 },
    { label: "Absenteeism", pct: 3.1 },
    { label: "Vacancy posisi kritikal", pct: 2.4 },
    { label: "Training & development time", pct: 1.8 },
  ],
  note: "Definisi FTE & konversi BHL/seasonal tersedia di Data Dictionary.",
};

/* ── 0e. Workforce Risk (ringkas) ─────────────────────────────────── */

export interface WaRiskItem {
  label: string;
  value: string;
  sub: string;
  tone: "red" | "amber" | "yellow";
}

export const waRisks: WaRiskItem[] = [
  { label: "Aging Risk", value: "13.121", sub: "Karyawan > 45 tahun (18,7%)", tone: "red" },
  { label: "Critical Skill Risk", value: "830", sub: "Shortage AI & Data 2028", tone: "red" },
  { label: "Attrition Risk", value: "6,8%", sub: "YTD; critical role +2,1 pts di atas rata-rata", tone: "amber" },
  { label: "Succession Risk", value: "12", sub: "Posisi kritikal tanpa suksesor Ready Now", tone: "amber" },
  { label: "Productivity Risk", value: "3", sub: "Unit bisnis di bawah threshold produktivitas", tone: "yellow" },
  { label: "Workforce Cost Risk", value: "9,7%", sub: "HC cost/revenue mendekati threshold 10%", tone: "yellow" },
];

export const waRiskScore = { value: 64, kategori: "Elevated" };

/* ── 1. Headcount Trend (36 bulan) ────────────────────────────────── */

export const headcountTrend = [
  { name: "Jun 2023", value: 60120 },
  { name: "Jul 2023", value: 60340 },
  { name: "Agu 2023", value: 60512 },
  { name: "Sep 2023", value: 60780 },
  { name: "Okt 2023", value: 61020 },
  { name: "Nov 2023", value: 61240 },
  { name: "Des 2023", value: 61980 },
  { name: "Jan 2024", value: 62110 },
  { name: "Feb 2024", value: 62240 },
  { name: "Mar 2024", value: 62180 },
  { name: "Apr 2024", value: 62320 },
  { name: "Mei 2024", value: 62450 },
  { name: "Jun 2024", value: 62610 },
  { name: "Jul 2024", value: 62780 },
  { name: "Agu 2024", value: 62940 },
  { name: "Sep 2024", value: 63020 },
  { name: "Okt 2024", value: 63180 },
  { name: "Nov 2024", value: 63310 },
  { name: "Des 2024", value: 63820 },
  { name: "Jan 2025", value: 63710 },
  { name: "Feb 2025", value: 63520 },
  { name: "Mar 2025", value: 63380 },
  { name: "Apr 2025", value: 63290 },
  { name: "Mei 2025", value: 63410 },
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

/* ── 8. Turnover Rate Trend (36 bulan) ────────────────────────────── */

export const turnoverTrend = [
  { name: "Jun 2023", value: 9.6 },
  { name: "Jul 2023", value: 9.5 },
  { name: "Agu 2023", value: 9.5 },
  { name: "Sep 2023", value: 9.4 },
  { name: "Okt 2023", value: 9.3 },
  { name: "Nov 2023", value: 9.2 },
  { name: "Des 2023", value: 9.0 },
  { name: "Jan 2024", value: 8.9 },
  { name: "Feb 2024", value: 8.9 },
  { name: "Mar 2024", value: 8.8 },
  { name: "Apr 2024", value: 8.8 },
  { name: "Mei 2024", value: 8.7 },
  { name: "Jun 2024", value: 8.7 },
  { name: "Jul 2024", value: 8.6 },
  { name: "Agu 2024", value: 8.6 },
  { name: "Sep 2024", value: 8.5 },
  { name: "Okt 2024", value: 8.4 },
  { name: "Nov 2024", value: 8.4 },
  { name: "Des 2024", value: 8.3 },
  { name: "Jan 2025", value: 8.3 },
  { name: "Feb 2025", value: 8.2 },
  { name: "Mar 2025", value: 8.2 },
  { name: "Apr 2025", value: 8.2 },
  { name: "Mei 2025", value: 8.3 },
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
  /** Insight: apa yang terjadi + driver utamanya. */
  text: string;
  /** Rekomendasi aksi spesifik (decision-grade). */
  rec: string;
  icon: "growth" | "turnover" | "generation" | "skills" | "productivity";
  tone: "green" | "amber" | "blue" | "pink" | "teal";
}

export const waInsights: WaInsight[] = [
  {
    title: "Headcount di Bawah Requirement",
    text: "Headcount +2,4% vs Des 2025, namun masih -2.176 FTE di bawah requirement RKAP 72.318.",
    rec: "Tutup via internal mobility 600 + targeted hiring 1.200 + automation offset.",
    icon: "growth",
    tone: "blue",
  },
  {
    title: "Turnover Turun, Critical Role Rentan",
    text: "Turnover -1,3 pts, didorong turunnya attrition tenure 5-10 tahun. Attrition critical role masih +2,1 pts di atas rata-rata.",
    rec: "Retention intervention 32 critical talent: review kompensasi ke P50 pasar.",
    icon: "turnover",
    tone: "amber",
  },
  {
    title: "Aging di Posisi Teknis",
    text: "18,7% workforce > 45 tahun; puncak pensiun teknis PKS diproyeksikan 2029-2031.",
    rec: "Mulai knowledge transfer + succession pipeline teknis pada 2026.",
    icon: "generation",
    tone: "pink",
  },
  {
    title: "Critical Skill Shortage",
    text: "Proyeksi shortage 830 kapabilitas AI & Data pada 2028; reskilling rate 6% vs target 12%.",
    rec: "Naikkan reskilling ke 12%/tahun (±400 karyawan) + strategic hiring 3 skill teratas.",
    icon: "skills",
    tone: "teal",
  },
  {
    title: "Productivity Gap Palm Oil Ops",
    text: "Labor cost +8,2% sementara productivity hanya +2,1% di Palm Oil Operations.",
    rec: "Review workforce productivity model — agenda BOD Q3 2026 (exposure Rp 48 M).",
    icon: "productivity",
    tone: "green",
  },
];
