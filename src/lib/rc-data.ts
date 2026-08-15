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
    sub: "214 Kewajiban: 198 Patuh · 11 Parsial · 5 Non",
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
    sub: "7 Overdue · Rata-rata 74 Hari Terbuka",
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
    sub: "42% Substantiated · 0 Retaliasi",
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
    sub: "Gross · Residual Rp 3,6 M Setelah Mitigasi",
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
  /** Skor minimum yang dapat diterima (compliance tolerance). */
  tolerance: number;
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
    tolerance: 90,
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
    tolerance: 85,
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
    tolerance: 85,
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
    tolerance: 85,
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
    tolerance: 90,
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
    tolerance: 80,
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
    tolerance: 90,
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
    tolerance: 80,
    icon: "industry",
  },
];

/* ── 3. Top 5 Compliance Issues ───────────────────────────────────── */

export type ResidualLevel = "Tinggi" | "Sedang" | "Rendah";

export interface ComplianceIssue {
  name: string;
  status: ComplianceStatus;
  desc: string;
  units: string;
  exposure: string;
  due: string;
  /** Penanggung jawab remediasi. */
  owner: string;
  /** Umur isu sejak pertama teridentifikasi (hari). */
  ageDays: number;
  /** Progress remediasi (%). */
  remediation: number;
  /** Efektivitas kontrol terkait isu ini (%). */
  controlEff: number;
  residual: ResidualLevel;
}

export const complianceIssues: ComplianceIssue[] = [
  {
    name: "Perlindungan Data Pribadi (UU PDP)",
    status: "Kritis",
    desc: "6 temuan audit terkait tata kelola data karyawan belum selesai",
    units: "Unit terdampak: Seluruh Holding",
    exposure: "Rp 4,8 M",
    due: "Due: Sep 2026",
    owner: "CIO / HC Data Governance",
    ageDays: 143,
    remediation: 42,
    controlEff: 58,
    residual: "Tinggi",
  },
  {
    name: "Sertifikasi K3 Operator",
    status: "Parsial",
    desc: "412 operator alat berat belum tersertifikasi ulang",
    units: "Unit terdampak: PTPN III, PTPN IV",
    exposure: "Rp 3,2 M",
    due: "Due: Agu 2026",
    owner: "Direktur Operasional",
    ageDays: 96,
    remediation: 68,
    controlEff: 64,
    residual: "Sedang",
  },
  {
    name: "Kasus Fraud Pengadaan",
    status: "Kritis",
    desc: "3 kasus fraud aktif dalam investigasi internal",
    units: "Unit terdampak: PTPN IV, PTPN V",
    exposure: "Rp 2,6 M",
    due: "Due: Jul 2026",
    owner: "SPI / Komite Audit",
    ageDays: 118,
    remediation: 74,
    controlEff: 70,
    residual: "Tinggi",
  },
  {
    name: "Kepatuhan Jam Kerja & Lembur",
    status: "Parsial",
    desc: "Pelanggaran batas jam lembur pada masa panen puncak",
    units: "Unit terdampak: PTPN V, PTPN VI",
    exposure: "Rp 1,2 M",
    due: "Due: Okt 2026",
    owner: "Direktur SDM",
    ageDays: 64,
    remediation: 35,
    controlEff: 83,
    residual: "Sedang",
  },
  {
    name: "Refreshment Training Kode Etik",
    status: "Parsial",
    desc: "15,4% karyawan belum menyelesaikan training tahunan",
    units: "Unit terdampak: PTPN I, PTPN II",
    exposure: "Rp 0,6 M",
    due: "Due: Nov 2026",
    owner: "Head of Compliance",
    ageDays: 51,
    remediation: 83,
    controlEff: 88,
    residual: "Rendah",
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
  /** Eksposur finansial (bagian dari total Rp 12,4 M). */
  exposure: string;
  trend: "up" | "down" | "flat";
  /** Naik = membaik. */
  trendTone: "good" | "bad" | "neutral";
  priority: "Tinggi" | "Sedang" | "Rendah";
}

/** Eksposur per organisasi menjumlah ke total Rp 12,4 M. */
export const orgComplianceHeatmap: OrgComplianceRow[] = [
  { name: "PTPN I", findings: 2, cases: 3, training: 86, score: 88, exposure: "0,9", trend: "flat", trendTone: "neutral", priority: "Rendah" },
  { name: "PTPN II", findings: 3, cases: 4, training: 82, score: 84, exposure: "1,3", trend: "up", trendTone: "good", priority: "Sedang" },
  { name: "PTPN III", findings: 4, cases: 3, training: 88, score: 86, exposure: "1,9", trend: "up", trendTone: "good", priority: "Sedang" },
  { name: "PTPN IV", findings: 5, cases: 7, training: 79, score: 76, exposure: "4,3", trend: "down", trendTone: "bad", priority: "Tinggi" },
  { name: "PTPN V", findings: 3, cases: 5, training: 81, score: 82, exposure: "3,1", trend: "down", trendTone: "bad", priority: "Tinggi" },
  { name: "PTPN VI", findings: 1, cases: 2, training: 90, score: 91, exposure: "0,9", trend: "up", trendTone: "good", priority: "Rendah" },
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
  /** Skor risiko sebelum remediasi (0-100, makin tinggi makin berisiko). */
  riskBefore: number;
  /** Progress pelaksanaan (%). */
  progress: number;
  /** Ekspektasi skor risiko setelah remediasi selesai. */
  riskAfter: number;
}

export const complianceActions: ComplianceAction[] = [
  {
    title: "Program Remediasi UU PDP",
    desc: "Menutup 6 temuan tata kelola data karyawan",
    status: "Kritis",
    quarter: "Q3 2026",
    icon: "privacy",
    tone: "blue",
    riskBefore: 88,
    progress: 42,
    riskAfter: 61,
  },
  {
    title: "Sertifikasi Ulang K3 Massal",
    desc: "Sertifikasi 412 operator alat berat",
    status: "Parsial",
    quarter: "Q3 2026",
    icon: "safety",
    tone: "purple",
    riskBefore: 81,
    progress: 68,
    riskAfter: 54,
  },
  {
    title: "Percepatan Investigasi Fraud",
    desc: "Menuntaskan 3 kasus fraud aktif",
    status: "Kritis",
    quarter: "Q3 2026",
    icon: "investigation",
    tone: "violet",
    riskBefore: 92,
    progress: 74,
    riskAfter: 67,
  },
  {
    title: "Kampanye Training Kode Etik",
    desc: "Menaikkan training compliance ke 95%",
    status: "Parsial",
    quarter: "Q4 2026",
    icon: "training",
    tone: "teal",
    riskBefore: 72,
    progress: 83,
    riskAfter: 59,
  },
  {
    title: "Review Kebijakan Jam Kerja",
    desc: "Penyesuaian pola kerja masa panen puncak",
    status: "Parsial",
    quarter: "Q4 2026",
    icon: "policy",
    tone: "green",
    riskBefore: 65,
    progress: 35,
    riskAfter: 48,
  },
];

/* ── 8. Control Effectiveness per Area ────────────────────────────── */

export interface ControlRow {
  area: string;
  /** Total kontrol terpasang. */
  controls: number;
  effective: number;
  partial: number;
  failed: number;
  /** (effective + 0.5*partial) / controls, dibulatkan. */
  effectiveness: number;
  residual: ResidualLevel;
}

export const controlRows: ControlRow[] = [
  { area: "Perlindungan Data Pribadi", controls: 12, effective: 5, partial: 4, failed: 3, effectiveness: 58, residual: "Tinggi" },
  { area: "K3 (Keselamatan Kerja)", controls: 14, effective: 7, partial: 4, failed: 3, effectiveness: 64, residual: "Sedang" },
  { area: "Anti-Fraud & Gratifikasi", controls: 10, effective: 6, partial: 2, failed: 2, effectiveness: 70, residual: "Tinggi" },
  { area: "Ketenagakerjaan & Jam Kerja", controls: 12, effective: 9, partial: 2, failed: 1, effectiveness: 83, residual: "Sedang" },
  { area: "Kode Etik & Integritas", controls: 8, effective: 6, partial: 2, failed: 0, effectiveness: 88, residual: "Rendah" },
  { area: "BPJS & Perpajakan SDM", controls: 9, effective: 8, partial: 1, failed: 0, effectiveness: 94, residual: "Rendah" },
];

/** Rata-rata tertimbang efektivitas kontrol seluruh area. */
export const overallControlEffectiveness = 75;

/* ── 9. Audit Finding Aging ───────────────────────────────────────── */

export interface AgingBucket {
  label: string;
  count: number;
  color: string;
}

/** Total = 18 temuan terbuka. */
export const auditAging: AgingBucket[] = [
  { label: "< 30 hari", count: 5, color: PALETTE.green },
  { label: "30–90 hari", count: 6, color: PALETTE.amber },
  { label: "90–180 hari", count: 4, color: "#f0662d" },
  { label: "> 180 hari", count: 3, color: PALETTE.red },
];

export const auditStats = {
  overdue: 7,
  avgDaysOpen: 74,
  closureRate: 81, // % temuan YTD yang sudah ditutup tepat waktu
};

/* ── 10. Speak-Up Intelligence (Whistleblowing) ───────────────────── */

export const speakUp = {
  reports: 31,
  substantiated: 13, // 42%
  investigating: 7, // 23%
  unsubstantiated: 11, // 35%
  avgInvestigationDays: 28,
  overdueCases: 5,
  retaliationCases: 0,
  repeatOffense: 4,
};

/* ── 11. Severity Kasus Aktif + Fraud Intelligence ────────────────── */

export interface CaseSeverity {
  label: "Kritis" | "Tinggi" | "Sedang" | "Rendah";
  count: number;
  color: string;
}

/** Total = 24 kasus aktif. */
export const caseSeverities: CaseSeverity[] = [
  { label: "Kritis", count: 3, color: PALETTE.red },
  { label: "Tinggi", count: 7, color: "#f0662d" },
  { label: "Sedang", count: 10, color: PALETTE.amber },
  { label: "Rendah", count: 4, color: PALETTE.green },
];

export const fraudIntel = {
  activeCases: 3,
  potentialLoss: "Rp 2,6 M",
  recovered: "Rp 0,9 M",
  recoveryRate: 35,
  avgCriticalAgeDays: 72,
};

/* ── 12. Regulatory Obligation Register + Change Radar ────────────── */

/** 214 kewajiban regulasi: 198 + 11 + 5. */
export const obligationRegister = {
  total: 214,
  compliant: 198,
  partial: 11,
  nonCompliant: 5,
  dueNext30: 7,
  dueNext90: 18,
  changePending: 4,
};

export interface RegChange {
  name: string;
  /** Tanggal mulai berlaku. */
  effective: string;
  impact: string;
  affected: string;
  /** Kesiapan organisasi (%). */
  readiness: number;
  action: string;
  severity: "Kritis" | "Parsial";
}

export const regChanges: RegChange[] = [
  {
    name: "RPP Turunan UU PDP (Data Pekerja)",
    effective: "Mar 2027",
    impact: "Tata kelola data & sistem HRIS",
    affected: "±70K karyawan",
    readiness: 55,
    action: "Update kebijakan + sistem + training",
    severity: "Kritis",
  },
  {
    name: "Revisi Permenaker Sertifikasi K3",
    effective: "Okt 2026",
    impact: "Operasional kebun & pabrik",
    affected: "412 operator alat berat",
    readiness: 71,
    action: "Percepat sertifikasi ulang massal",
    severity: "Parsial",
  },
  {
    name: "PP Pengupahan — Formula UMP Baru",
    effective: "Jan 2027",
    impact: "Payroll & anggaran SDM",
    affected: "±70K karyawan",
    readiness: 62,
    action: "Simulasi dampak + penyesuaian struktur upah",
    severity: "Parsial",
  },
];

/* ── 13. Financial Exposure Waterfall ─────────────────────────────── */

/** Gross = maksimum denda; expected = tertimbang probabilitas;
 *  residual = expected setelah program mitigasi berjalan. */
export const exposureWaterfall = [
  { label: "Gross Exposure", value: "Rp 12,4 M", desc: "Maksimum denda & sanksi" },
  { label: "Expected Exposure", value: "Rp 7,9 M", desc: "Tertimbang probabilitas" },
  { label: "Mitigation Cost", value: "Rp 2,3 M", desc: "Biaya program remediasi" },
  { label: "Residual Exposure", value: "Rp 3,6 M", desc: "Setelah mitigasi efektif" },
];

/* ── 14. BOD Compliance Decision Center ───────────────────────────── */

export interface RcDecision {
  prioritas: "danger" | "warning";
  label: string;
  title: string;
  context: string;
  exposure: string;
  /** Eskalasi eksposur jika keputusan ditunda: [3 bulan, 6 bulan]. */
  ifDelayed: [string, string];
  rekomendasi: string;
}

export const rcDecisions: RcDecision[] = [
  {
    prioritas: "danger",
    label: "Keputusan Diperlukan",
    title: "Remediasi UU PDP",
    context: "6 temuan kritis tata kelola data, umur 143 hari, kontrol efektif hanya 58%",
    exposure: "Rp 4,8 M",
    ifDelayed: ["Rp 7,1 M", "Rp 10,3 M"],
    rekomendasi: "Setujui program remediasi dipercepat + anggaran data governance",
  },
  {
    prioritas: "danger",
    label: "Keputusan Diperlukan",
    title: "Sertifikasi Ulang K3",
    context: "412 operator alat berat belum tersertifikasi ulang, due Agu 2026",
    exposure: "Rp 3,2 M",
    ifDelayed: ["Rp 4,5 M", "Rp 6,1 M"],
    rekomendasi: "Setujui anggaran sertifikasi massal segera (batch prioritas PTPN III-IV)",
  },
  {
    prioritas: "warning",
    label: "Tindakan Manajemen",
    title: "Training Kode Etik",
    context: "15,4% karyawan belum menyelesaikan training tahunan",
    exposure: "Rp 0,6 M",
    ifDelayed: ["Rp 0,9 M", "Rp 1,3 M"],
    rekomendasi: "Wajibkan penyelesaian sebelum penutupan siklus kinerja",
  },
];

export const RC_DECISION_STYLE: Record<
  RcDecision["prioritas"],
  { border: string; chip: string }
> = {
  danger: { border: "#ef4444", chip: "bg-[#fdecec] text-[#ef4444]" },
  warning: { border: "#f5a524", chip: "bg-[#fdf3e0] text-[#d98b06]" },
};

export const rcFootnote =
  "Risk & Compliance memantau kepatuhan regulasi ketenagakerjaan, temuan audit, dan kasus pelanggaran secara terpusat sehingga eksposur hukum dan finansial dapat dimitigasi lebih dini. Overall Compliance Score (87/100) adalah komposit tertimbang dari kepatuhan regulasi, efektivitas kontrol, penutupan audit, severitas pelanggaran, training compliance, dan indikator conduct — berbeda dari Kepatuhan Regulasi (92,4%) yang murni persentase kewajiban regulasi terpenuhi. Data as-of 31 Mei 2026 · Data Quality Score 96,4%.";
