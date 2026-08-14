/**
 * Data statis halaman Risk & Compliance (/risk-compliance).
 * Periode acuan: Mei 2026 (YTD), data per 31 Mei 2026.
 */

import { PALETTE } from "./chart-palette";

/* ── Status kepatuhan ─────────────────────────────────────────────── */

export type ComplianceStatus = "Patuh" | "Parsial" | "Kritis";

/** Band skor kepatuhan: Patuh 85-100, Parsial 70-84, Kritis 0-69. */
export const COMPLIANCE_BAND = {
  Patuh: PALETTE.green,
  Parsial: PALETTE.amber,
  Kritis: PALETTE.red,
} as const;

export const statusOfScore = (score: number): ComplianceStatus =>
  score >= 85 ? "Patuh" : score >= 70 ? "Parsial" : "Kritis";

/* ── KPI Strip ────────────────────────────────────────────────────── */

export interface RcKpi {
  label: string;
  value: string;
  /** Sufiks kecil di samping nilai, mis. "/100". */
  valueSuffix?: string;
  sub: string;
  /** Sub berwarna merah (mis. "Perlu Tindakan"). */
  subDanger?: boolean;
  /** Kosong = tampilkan `compare` saja (mis. "Stabil vs Apr 2026"). */
  delta?: string;
  trend?: "up" | "down";
  deltaTone?: "good" | "bad";
  compare: string;
  icon: "score" | "regulation" | "audit" | "case" | "whistle" | "training" | "penalty";
  tone: "green" | "red" | "amber" | "teal" | "blue";
}

export const rcKpi: RcKpi[] = [
  {
    label: "Overall Compliance Score",
    value: "87",
    valueSuffix: "/100",
    sub: "Status: Patuh",
    delta: "+2 pts",
    trend: "up",
    deltaTone: "good",
    compare: "vs Apr 2026",
    icon: "score",
    tone: "green",
  },
  {
    label: "Kepatuhan Regulasi",
    value: "92,4%",
    sub: "Dari 214 Kewajiban Regulasi",
    delta: "+1,2%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Apr 2026",
    icon: "regulation",
    tone: "blue",
  },
  {
    label: "Temuan Audit Terbuka",
    value: "18",
    sub: "Dari 46 Temuan YTD",
    delta: "-5",
    trend: "down",
    deltaTone: "good",
    compare: "vs Apr 2026",
    icon: "audit",
    tone: "amber",
  },
  {
    label: "Kasus Pelanggaran Aktif",
    value: "24",
    sub: "Dalam Proses Penanganan",
    subDanger: true,
    delta: "+3",
    trend: "up",
    deltaTone: "bad",
    compare: "vs Apr 2026",
    icon: "case",
    tone: "red",
  },
  {
    label: "Laporan Whistleblowing",
    value: "31",
    sub: "Laporan Masuk YTD",
    delta: "+4",
    trend: "up",
    deltaTone: "bad",
    compare: "vs Apr 2026",
    icon: "whistle",
    tone: "teal",
  },
  {
    label: "Training Compliance",
    value: "84,6%",
    sub: "Karyawan Tersertifikasi",
    delta: "+3,1%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Apr 2026",
    icon: "training",
    tone: "green",
  },
  {
    label: "Potensi Denda & Sanksi",
    value: "Rp 12,4 M",
    sub: "Estimasi Eksposur",
    delta: "-8,5%",
    trend: "down",
    deltaTone: "good",
    compare: "vs Apr 2026",
    icon: "penalty",
    tone: "red",
  },
];

/* ── 1 & 2. Kepatuhan per area (chart + ringkasan) ────────────────── */

export interface ComplianceArea {
  name: string;
  /** Label pendek untuk sumbu chart. */
  short: string;
  score: number;
  status: ComplianceStatus;
  trend: "up" | "down" | "flat";
  /** Kenaikan skor kepatuhan = membaik. */
  trendTone: "good" | "bad" | "neutral";
  /** Temuan audit terbuka pada area ini. */
  openFindings: number;
  icon:
    | "labor"
    | "safety"
    | "privacy"
    | "ethics"
    | "fraud"
    | "environment"
    | "tax"
    | "industry";
}

export const complianceAreas: ComplianceArea[] = [
  {
    name: "Ketenagakerjaan",
    short: "Ketenagakerjaan",
    score: 94,
    status: "Patuh",
    trend: "up",
    trendTone: "good",
    openFindings: 2,
    icon: "labor",
  },
  {
    name: "K3 (Keselamatan Kerja)",
    short: "K3",
    score: 81,
    status: "Parsial",
    trend: "up",
    trendTone: "good",
    openFindings: 5,
    icon: "safety",
  },
  {
    name: "Perlindungan Data Pribadi",
    short: "Data Privasi",
    score: 68,
    status: "Kritis",
    trend: "up",
    trendTone: "good",
    openFindings: 6,
    icon: "privacy",
  },
  {
    name: "Kode Etik & Integritas",
    short: "Kode Etik",
    score: 90,
    status: "Patuh",
    trend: "flat",
    trendTone: "neutral",
    openFindings: 1,
    icon: "ethics",
  },
  {
    name: "Anti-Fraud & Gratifikasi",
    short: "Anti-Fraud",
    score: 83,
    status: "Parsial",
    trend: "down",
    trendTone: "bad",
    openFindings: 3,
    icon: "fraud",
  },
  {
    name: "Lingkungan & Sosial",
    short: "Lingkungan",
    score: 88,
    status: "Patuh",
    trend: "up",
    trendTone: "good",
    openFindings: 1,
    icon: "environment",
  },
  {
    name: "BPJS & Perpajakan SDM",
    short: "BPJS & Pajak",
    score: 96,
    status: "Patuh",
    trend: "flat",
    trendTone: "neutral",
    openFindings: 0,
    icon: "tax",
  },
  {
    name: "Regulasi Industri Perkebunan",
    short: "Reg. Industri",
    score: 86,
    status: "Patuh",
    trend: "down",
    trendTone: "bad",
    openFindings: 0,
    icon: "industry",
  },
];

/* ── 3. Top 5 Compliance Issues ───────────────────────────────────── */

export interface ComplianceIssue {
  name: string;
  status: ComplianceStatus;
  desc: string;
  units: string;
  exposure: string;
  due: string;
}

export const complianceIssues: ComplianceIssue[] = [
  {
    name: "Perlindungan Data Pribadi (UU PDP)",
    status: "Kritis",
    desc: "6 temuan audit terkait tata kelola data karyawan belum selesai",
    units: "Unit terdampak: Seluruh Holding",
    exposure: "Rp 4,8 M",
    due: "Due: Sep 2026",
  },
  {
    name: "Sertifikasi K3 Operator",
    status: "Parsial",
    desc: "412 operator alat berat belum tersertifikasi ulang",
    units: "Unit terdampak: PTPN III, PTPN IV",
    exposure: "Rp 3,2 M",
    due: "Due: Agu 2026",
  },
  {
    name: "Kasus Fraud Pengadaan",
    status: "Kritis",
    desc: "3 kasus fraud aktif dalam investigasi internal",
    units: "Unit terdampak: PTPN IV, PTPN V",
    exposure: "Rp 2,6 M",
    due: "Due: Jul 2026",
  },
  {
    name: "Kepatuhan Jam Kerja & Lembur",
    status: "Parsial",
    desc: "Pelanggaran batas jam lembur pada masa panen puncak",
    units: "Unit terdampak: PTPN V, PTPN VI",
    exposure: "Rp 1,2 M",
    due: "Due: Okt 2026",
  },
  {
    name: "Refreshment Training Kode Etik",
    status: "Parsial",
    desc: "15,4% karyawan belum menyelesaikan training tahunan",
    units: "Unit terdampak: PTPN I, PTPN II",
    exposure: "Rp 0,6 M",
    due: "Due: Nov 2026",
  },
];

/* ── 4. Compliance Trend (12 bulan) ───────────────────────────────── */

export const complianceTrend = [
  { name: "Jun 25", value: 79 },
  { name: "Jul 25", value: 80 },
  { name: "Agu 25", value: 78 },
  { name: "Sep 25", value: 81 },
  { name: "Okt 25", value: 82 },
  { name: "Nov 25", value: 83 },
  { name: "Des 25", value: 82 },
  { name: "Jan 26", value: 83 },
  { name: "Feb 26", value: 84 },
  { name: "Mar 26", value: 84 },
  { name: "Apr 26", value: 85 },
  { name: "Mei 26", value: 87 },
];

/* ── 5. Compliance Heatmap by Organization ────────────────────────── */

export interface OrgComplianceRow {
  name: string;
  /** Temuan audit terbuka. */
  findings: number;
  /** Kasus pelanggaran aktif. */
  cases: number;
  /** % training compliance. */
  training: number;
  score: number;
}

export const orgComplianceHeatmap: OrgComplianceRow[] = [
  { name: "PTPN I", findings: 2, cases: 3, training: 86, score: 88 },
  { name: "PTPN II", findings: 3, cases: 4, training: 82, score: 84 },
  { name: "PTPN III", findings: 4, cases: 3, training: 88, score: 86 },
  { name: "PTPN IV", findings: 5, cases: 7, training: 79, score: 76 },
  { name: "PTPN V", findings: 3, cases: 5, training: 81, score: 82 },
  { name: "PTPN VI", findings: 1, cases: 2, training: 90, score: 91 },
];

/* ── 6. Breakdown Kasus Pelanggaran ───────────────────────────────── */

export interface CaseCategory {
  name: string;
  /** Proporsi dari total kasus aktif. */
  pct: number;
  trend: "up" | "down" | "flat";
  color: string;
}

export const caseCategories: CaseCategory[] = [
  { name: "Pelanggaran Disiplin", pct: 38, trend: "up", color: PALETTE.red },
  { name: "Pelanggaran Kode Etik", pct: 21, trend: "flat", color: PALETTE.amber },
  { name: "Fraud & Gratifikasi", pct: 13, trend: "up", color: PALETTE.red },
  { name: "Pelanggaran K3", pct: 12, trend: "down", color: PALETTE.green },
  { name: "Pelecehan & Diskriminasi", pct: 8, trend: "down", color: PALETTE.green },
  { name: "Lainnya", pct: 8, trend: "flat", color: PALETTE.slate },
];

/* ── 7. Rekomendasi Tindakan Kepatuhan ────────────────────────────── */

export interface ComplianceAction {
  title: string;
  desc: string;
  status: ComplianceStatus;
  quarter: string;
  icon: "privacy" | "safety" | "investigation" | "training" | "policy";
  tone: "blue" | "purple" | "violet" | "teal" | "green";
}

export const complianceActions: ComplianceAction[] = [
  {
    title: "Program Remediasi UU PDP",
    desc: "Menutup 6 temuan tata kelola data karyawan",
    status: "Kritis",
    quarter: "Q3 2026",
    icon: "privacy",
    tone: "blue",
  },
  {
    title: "Sertifikasi Ulang K3 Massal",
    desc: "Sertifikasi 412 operator alat berat",
    status: "Parsial",
    quarter: "Q3 2026",
    icon: "safety",
    tone: "purple",
  },
  {
    title: "Percepatan Investigasi Fraud",
    desc: "Menuntaskan 3 kasus fraud aktif",
    status: "Kritis",
    quarter: "Q3 2026",
    icon: "investigation",
    tone: "violet",
  },
  {
    title: "Kampanye Training Kode Etik",
    desc: "Menaikkan training compliance ke 95%",
    status: "Parsial",
    quarter: "Q4 2026",
    icon: "training",
    tone: "teal",
  },
  {
    title: "Review Kebijakan Jam Kerja",
    desc: "Penyesuaian pola kerja masa panen puncak",
    status: "Parsial",
    quarter: "Q4 2026",
    icon: "policy",
    tone: "green",
  },
];

export const rcFootnote =
  "Risk & Compliance memantau kepatuhan regulasi ketenagakerjaan, temuan audit, dan kasus pelanggaran secara terpusat sehingga eksposur hukum dan finansial dapat dimitigasi lebih dini.";
