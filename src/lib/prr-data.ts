/**
 * Data statis halaman People Risk Radar (/people-risk-radar).
 * Periode acuan: Mei 2026 (YTD), data per 31 Mei 2026.
 */

import { PALETTE } from "./chart-palette";

/* ── Level risiko ─────────────────────────────────────────────────── */

export type RiskLevel = "High" | "Medium" | "Low";

/** Warna kanonik per band skor risiko: High 70-100, Medium 40-69, Low 0-39. */
export const RISK_BAND = {
  High: PALETTE.red,
  Medium: PALETTE.amber,
  Low: PALETTE.green,
} as const;

export const levelOfScore = (score: number): RiskLevel =>
  score >= 70 ? "High" : score >= 40 ? "Medium" : "Low";

/* ── KPI Strip ────────────────────────────────────────────────────── */

export interface PrrKpi {
  label: string;
  value: string;
  /** Sufiks kecil di samping nilai, mis. "/100". */
  valueSuffix?: string;
  sub: string;
  /** Sub berwarna merah (mis. "Level: High"). */
  subDanger?: boolean;
  /** Kosong = tampilkan `compare` saja (mis. "Stabil vs Apr 2026"). */
  delta?: string;
  trend?: "up" | "down";
  deltaTone?: "good" | "bad";
  compare: string;
  icon: "score" | "high" | "medium" | "low" | "impacted" | "financial" | "critical";
  tone: "green" | "red" | "amber" | "teal" | "blue";
}

export const prrKpi: PrrKpi[] = [
  {
    label: "Overall People Risk Score",
    value: "68",
    valueSuffix: "/100",
    sub: "Level: High",
    subDanger: true,
    delta: "-4 pts",
    trend: "down",
    deltaTone: "good",
    compare: "vs Apr 2026",
    icon: "score",
    tone: "green",
  },
  {
    label: "Risiko Tinggi",
    value: "5",
    sub: "Dari 10 Risiko",
    delta: "-1",
    trend: "down",
    deltaTone: "good",
    compare: "vs Apr 2026",
    icon: "high",
    tone: "red",
  },
  {
    label: "Risiko Menengah",
    value: "3",
    sub: "Dari 10 Risiko",
    delta: "+1",
    trend: "up",
    deltaTone: "bad",
    compare: "vs Apr 2026",
    icon: "medium",
    tone: "amber",
  },
  {
    label: "Risiko Rendah",
    value: "2",
    sub: "Dari 10 Risiko",
    compare: "Stabil vs Apr 2026",
    icon: "low",
    tone: "green",
  },
  {
    label: "Karyawan Terdampak",
    value: "12.842",
    sub: "Orang",
    delta: "+8,3%",
    trend: "up",
    deltaTone: "bad",
    compare: "vs Apr 2026",
    icon: "impacted",
    tone: "blue",
  },
  {
    label: "Potensi Dampak Finansial",
    value: "Rp 128,6 M",
    sub: "Estimasi Risiko",
    delta: "+6,2%",
    trend: "up",
    deltaTone: "bad",
    compare: "vs Apr 2026",
    icon: "financial",
    tone: "teal",
  },
  {
    label: "Risiko Kritis",
    value: "2",
    sub: "Memerlukan Tindakan Segera",
    compare: "Stabil vs Apr 2026",
    icon: "critical",
    tone: "red",
  },
];

/* ── 1 & 2. Register 10 risiko (radar + ringkasan) ────────────────── */

export interface PeopleRisk {
  name: string;
  /** Label pendek untuk sumbu radar. */
  short: string;
  score: number;
  level: RiskLevel;
  trend: "up" | "down" | "flat";
  /** Kenaikan skor = risiko memburuk. */
  trendTone: "good" | "bad" | "neutral";
  /** "-" = tidak ada estimasi karyawan terdampak. */
  impacted: string;
  icon:
    | "vacancy"
    | "succession"
    | "turnover"
    | "leadership"
    | "skill"
    | "engagement"
    | "aging"
    | "cost"
    | "performance"
    | "industrial";
}

export const peopleRisks: PeopleRisk[] = [
  {
    name: "Critical Position Vacancy",
    short: "Critical Position Vacancy",
    score: 82,
    level: "High",
    trend: "down",
    trendTone: "good",
    impacted: "1.245",
    icon: "vacancy",
  },
  {
    name: "Succession Risk",
    short: "Succession Risk",
    score: 78,
    level: "High",
    trend: "up",
    trendTone: "bad",
    impacted: "892",
    icon: "succession",
  },
  {
    name: "Turnover Risk",
    short: "Turnover Risk",
    score: 74,
    level: "High",
    trend: "up",
    trendTone: "bad",
    impacted: "3.678",
    icon: "turnover",
  },
  {
    name: "Leadership Gap",
    short: "Leadership Gap",
    score: 61,
    level: "Medium",
    trend: "up",
    trendTone: "bad",
    impacted: "1.156",
    icon: "leadership",
  },
  {
    name: "Critical Skill Gap",
    short: "Critical Skill Gap",
    score: 72,
    level: "High",
    trend: "down",
    trendTone: "good",
    impacted: "2.341",
    icon: "skill",
  },
  {
    name: "Engagement Risk",
    short: "Engagement Risk",
    score: 58,
    level: "Medium",
    trend: "down",
    trendTone: "good",
    impacted: "4.210",
    icon: "engagement",
  },
  {
    name: "Aging Workforce",
    short: "Aging Workforce",
    score: 53,
    level: "Medium",
    trend: "up",
    trendTone: "bad",
    impacted: "6.385",
    icon: "aging",
  },
  {
    name: "Labor Cost Risk",
    short: "Labor Cost Risk",
    score: 35,
    level: "Low",
    trend: "down",
    trendTone: "good",
    impacted: "-",
    icon: "cost",
  },
  {
    name: "Performance Risk",
    short: "Performance Risk",
    score: 60,
    level: "Medium",
    trend: "down",
    trendTone: "good",
    impacted: "2.987",
    icon: "performance",
  },
  {
    name: "Industrial Relation Risk",
    short: "Industrial Relation Risk",
    score: 28,
    level: "Low",
    trend: "flat",
    trendTone: "neutral",
    impacted: "-",
    icon: "industrial",
  },
];

/* ── 3. Top 5 Risks Requiring Attention ───────────────────────────── */

export interface TopRisk {
  name: string;
  level: RiskLevel;
  desc: string;
  units: string;
  impact: string;
  impacted: string;
}

export const topRisks: TopRisk[] = [
  {
    name: "Critical Position Vacancy",
    level: "High",
    desc: "24 posisi kritis kosong > 3 bulan",
    units: "Unit terdampak: PTPN IV, PTPN V",
    impact: "Rp 48,2 M",
    impacted: "1.245 Orang",
  },
  {
    name: "Turnover Risk",
    level: "High",
    desc: "Turnover karyawan kunci meningkat 18% YoY",
    units: "Unit terdampak: PTPN III, PTPN IV, PTPN V",
    impact: "Rp 32,6 M",
    impacted: "3.678 Orang",
  },
  {
    name: "Critical Skill Gap",
    level: "High",
    desc: "Kesenjangan skill kritis pada area digital & agronomi",
    units: "Unit terdampak: Seluruh Holding",
    impact: "Rp 23,1 M",
    impacted: "2.341 Orang",
  },
  {
    name: "Succession Risk",
    level: "High",
    desc: "65 posisi kepemimpinan tidak memiliki suksesor siap",
    units: "Unit terdampak: PTPN II, PTPN III, PTPN IV",
    impact: "Rp 14,5 M",
    impacted: "892 Orang",
  },
  {
    name: "Leadership Gap",
    level: "Medium",
    desc: "Gap kompetensi leadership pada level manajerial",
    units: "Unit terdampak: PTPN II, PTPN VI",
    impact: "Rp 6,2 M",
    impacted: "1.156 Orang",
  },
];

/* ── 4. People Risk Trend (12 bulan) ──────────────────────────────── */

export const riskTrend = [
  { name: "Jun 25", value: 72 },
  { name: "Jul 25", value: 74 },
  { name: "Agu 25", value: 76 },
  { name: "Sep 25", value: 73 },
  { name: "Okt 25", value: 71 },
  { name: "Nov 25", value: 69 },
  { name: "Des 25", value: 68 },
  { name: "Jan 26", value: 71 },
  { name: "Feb 26", value: 72 },
  { name: "Mar 26", value: 70 },
  { name: "Apr 26", value: 72 },
  { name: "Mei 26", value: 68 },
];

/* ── 5. Risk Heatmap by Organization ──────────────────────────────── */

export interface OrgRiskRow {
  name: string;
  high: number;
  medium: number;
  low: number;
  score: number;
}

export const orgRiskHeatmap: OrgRiskRow[] = [
  { name: "PTPN I", high: 2, medium: 2, low: 1, score: 62 },
  { name: "PTPN II", high: 1, medium: 3, low: 1, score: 58 },
  { name: "PTPN III", high: 2, medium: 2, low: 1, score: 71 },
  { name: "PTPN IV", high: 3, medium: 2, low: 0, score: 76 },
  { name: "PTPN V", high: 2, medium: 1, low: 1, score: 65 },
  { name: "PTPN VI", high: 1, medium: 2, low: 1, score: 54 },
];

/* ── 6. Top Risk Drivers ──────────────────────────────────────────── */

export interface RiskDriver {
  name: string;
  /** Kontribusi terhadap overall risk score. */
  pct: number;
  trend: "up" | "down" | "flat";
  color: string;
}

export const riskDrivers: RiskDriver[] = [
  { name: "Kurangnya Suksesor Siap", pct: 28, trend: "up", color: PALETTE.red },
  { name: "Kompensasi Tidak Kompetitif", pct: 22, trend: "up", color: PALETTE.red },
  { name: "Beban Kerja Tinggi", pct: 18, trend: "flat", color: PALETTE.amber },
  { name: "Kesenjangan Kompetensi", pct: 15, trend: "up", color: PALETTE.amber },
  { name: "Proses & Sistem Tidak Efisien", pct: 10, trend: "down", color: PALETTE.green },
  { name: "Budaya & Engagement Rendah", pct: 7, trend: "down", color: PALETTE.green },
];

/* ── 7. Rekomendasi Tindakan Prioritas ────────────────────────────── */

export interface RiskAction {
  title: string;
  desc: string;
  level: RiskLevel;
  quarter: string;
  icon: "succession" | "retention" | "upskilling" | "leadership" | "workload";
  tone: "blue" | "purple" | "violet" | "teal" | "green";
}

export const riskActions: RiskAction[] = [
  {
    title: "Accelerated Succession Program",
    desc: "Mengisi 24 posisi kritis yang kosong",
    level: "High",
    quarter: "Q3 2026",
    icon: "succession",
    tone: "blue",
  },
  {
    title: "Retention Program Karyawan Kunci",
    desc: "Mengurangi risiko turnover karyawan kunci",
    level: "High",
    quarter: "Q3 2026",
    icon: "retention",
    tone: "purple",
  },
  {
    title: "Upskilling Program Digital & Agronomi",
    desc: "Menutup gap kompetensi kritis",
    level: "High",
    quarter: "Q4 2026",
    icon: "upskilling",
    tone: "violet",
  },
  {
    title: "Leadership Development Program",
    desc: "Meningkatkan kompetensi leadership manajerial",
    level: "Medium",
    quarter: "Q4 2026",
    icon: "leadership",
    tone: "teal",
  },
  {
    title: "Review Struktur & Beban Kerja",
    desc: "Optimasi proses dan redistribusi beban kerja",
    level: "Medium",
    quarter: "Q4 2026",
    icon: "workload",
    tone: "green",
  },
];

export const prrFootnote =
  "People Risk Radar membantu mengidentifikasi risiko manusia lebih awal sehingga organisasi dapat mengambil tindakan preventif dan meminimalkan dampak terhadap kinerja bisnis.";
