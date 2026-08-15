/**
 * Data statis halaman Scenario Simulation (/scenario-simulation).
 * Periode acuan: 2026 - 2028, data per 31 Mei 2026 (YTD).
 */

import { PALETTE, READINESS } from "./chart-palette";
import type { DonutDatum } from "@/components/ui/DonutChart";

/* ── KPI Strip ────────────────────────────────────────────────────── */

export interface SsKpi {
  label: string;
  value: string;
  sub: string;
  icon: "scenario" | "best" | "saving" | "productivity" | "headcount" | "confidence";
  tone: "blue" | "green" | "purple" | "amber" | "sky" | "teal";
}

export const ssKpi: SsKpi[] = [
  {
    label: "Total Skenario",
    value: "6",
    sub: "Skenario Aktif",
    icon: "scenario",
    tone: "blue",
  },
  {
    label: "Skenario Rekomendasi",
    value: "Skenario C",
    sub: "Strategic Score 88 · ROI 22,4%",
    icon: "best",
    tone: "green",
  },
  {
    label: "Potensi Penghematan Biaya",
    value: "Rp 185,7 M",
    sub: "(Skenario Terbaik)",
    icon: "saving",
    tone: "purple",
  },
  {
    label: "Potensi Tambahan Produktivitas",
    value: "+8,6%",
    sub: "(Skenario Terbaik)",
    icon: "productivity",
    tone: "amber",
  },
  {
    label: "Dampak Headcount 2028",
    value: "-1.024",
    sub: "(vs Baseline Plan)",
    icon: "headcount",
    tone: "sky",
  },
  {
    label: "Confidence Level",
    value: "87%",
    sub: "Tingkat Keyakinan Model",
    icon: "confidence",
    tone: "teal",
  },
];

/* ── 1. Pilih & Kelola Skenario ───────────────────────────────────── */

export interface Scenario {
  name: string;
  desc: string;
  type: string;
  status: "Aktif" | "Draft";
  updated: string;
  /** Skenario terpilih — baris disorot hijau. */
  selected?: boolean;
}

export const scenarios: Scenario[] = [
  {
    name: "Baseline Plan",
    desc: "Rencana dasar sesuai kondisi saat ini",
    type: "Baseline",
    status: "Aktif",
    updated: "31 Mei 2026",
  },
  {
    name: "Skenario A",
    desc: "Ekspansi Operasional & Hiring",
    type: "Growth",
    status: "Aktif",
    updated: "31 Mei 2026",
  },
  {
    name: "Skenario B",
    desc: "Efisiensi Proses & Otomatisasi",
    type: "Efficiency",
    status: "Aktif",
    updated: "31 Mei 2026",
  },
  {
    name: "Skenario C",
    desc: "Transformasi Digital & Reskilling",
    type: "Transformation",
    status: "Aktif",
    updated: "31 Mei 2026",
    selected: true,
  },
  {
    name: "Skenario D",
    desc: "Restrukturisasi & Right Sizing",
    type: "Optimization",
    status: "Draft",
    updated: "30 Mei 2026",
  },
  {
    name: "Skenario E",
    desc: "Konservatif / Cost Control",
    type: "Cost Control",
    status: "Draft",
    updated: "30 Mei 2026",
  },
];

/* ── 2. Perbandingan Dampak Utama ─────────────────────────────────── */

export interface ImpactRow {
  metric: string;
  baseline: string;
  scenario: string;
  diff: string;
  change: string;
  /** Arah panah; kosong = tanpa panah (mis. ROI, Payback). */
  trend?: "up" | "down";
  /** Warna delta; naik/turun sama-sama bisa bagus tergantung metrik. */
  tone?: "good" | "bad";
}

export const impactComparison: ImpactRow[] = [
  {
    metric: "Total Headcount",
    baseline: "73.856",
    scenario: "72.832",
    diff: "-1.024",
    change: "-1,4%",
    trend: "down",
    tone: "good",
  },
  {
    metric: "Biaya HC Tahunan",
    baseline: "Rp 6,82 T",
    scenario: "Rp 6,63 T",
    diff: "-Rp 185,7 M",
    change: "-2,7%",
    trend: "down",
    tone: "good",
  },
  {
    metric: "Produktivitas Index",
    baseline: "100",
    scenario: "108,6",
    diff: "+8,6",
    change: "+8,6%",
    trend: "up",
    tone: "good",
  },
  {
    metric: "Revenue (Estimasi)",
    baseline: "Rp 12,45 T",
    scenario: "Rp 13,42 T",
    diff: "+Rp 968 M",
    change: "+7,8%",
    trend: "up",
    tone: "good",
  },
  {
    metric: "ROI",
    baseline: "–",
    scenario: "22,4%",
    diff: "–",
    change: "–",
  },
  {
    metric: "Payback Period",
    baseline: "–",
    scenario: "2,3 Tahun",
    diff: "–",
    change: "–",
  },
];

/* ── 3. Proyeksi Headcount (2026 - 2028) ──────────────────────────── */

export interface ProjectionPoint {
  year: string;
  baseline: number;
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
}

export const headcountProjection: ProjectionPoint[] = [
  { year: "2026 (F)", baseline: 70142, a: 70142, b: 70142, c: 70142, d: 70142, e: 70142 },
  { year: "2027 (F)", baseline: 71902, a: 73950, b: 71200, c: 71380, d: 69900, e: 69100 },
  { year: "2028 (F)", baseline: 73856, a: 77885, b: 72692, c: 72832, d: 70006, e: 68300 },
];

export interface ProjectionSeries {
  key: keyof Omit<ProjectionPoint, "year">;
  label: string;
  color: string;
}

export const projectionSeries: ProjectionSeries[] = [
  { key: "baseline", label: "Baseline Plan", color: PALETTE.blue },
  { key: "a", label: "Skenario A (Growth)", color: PALETTE.green },
  { key: "b", label: "Skenario B (Efficiency)", color: PALETTE.amber },
  { key: "c", label: "Skenario C (Transformasi)", color: PALETTE.purple },
  { key: "d", label: "Skenario D (Optimization)", color: PALETTE.blueSoft },
  { key: "e", label: "Skenario E (Cost Control)", color: PALETTE.red },
];

/* ── 4. Asumsi Skenario Terpilih ──────────────────────────────────── */

export interface Assumption {
  label: string;
  value: string;
}

export const assumptions: Assumption[] = [
  { label: "Pertumbuhan Bisnis", value: "Moderate Growth (7% per tahun)" },
  { label: "Strategi Talent", value: "Reskilling & Upskilling Fokus (40% talent)" },
  { label: "Otomatisasi Proses", value: "High Automation (35% proses terdampak)" },
  { label: "Kebijakan Hiring", value: "Selective Hiring (Critical Role Only)" },
  { label: "Attrition Rate", value: "8,5% per tahun" },
  { label: "Inflasi Biaya HC", value: "4,5% per tahun" },
];

/* ── 5. Dampak Finansial (2026 - 2028) ────────────────────────────── */

export interface FinancialPoint {
  name: string;
  baseline: number;
  scenario: number;
  roi: number;
}

/** Biaya HC dalam Miliar Rupiah; ROI kumulatif Skenario C dalam persen. */
export const financialImpact: FinancialPoint[] = [
  { name: "2026 (F)", baseline: 6621, scenario: 6410, roi: 8.2 },
  { name: "2027 (F)", baseline: 6873, scenario: 6600, roi: 15.1 },
  { name: "2028 (F)", baseline: 7134, scenario: 6823, roi: 22.4 },
  { name: "Total", baseline: 20628, scenario: 19833, roi: 22.4 },
];

/* ── 6. Dampak Talent Summary (2028) ──────────────────────────────── */

export interface TalentMetric {
  label: string;
  value: string;
  delta: string;
  icon: "coverage" | "skill" | "hipo" | "mobility" | "engagement";
}

export const talentImpact: TalentMetric[] = [
  { label: "Critical Role Coverage", value: "86%", delta: "+6 pts", icon: "coverage" },
  { label: "Skill Readiness Average", value: "78%", delta: "+9 pts", icon: "skill" },
  { label: "High Potential Count", value: "1.068", delta: "+124 org", icon: "hipo" },
  { label: "Internal Mobility Rate", value: "18%", delta: "+5 pts", icon: "mobility" },
  { label: "Employee Engagement", value: "82%", delta: "+7 pts", icon: "engagement" },
];

export interface ReadinessDatum extends DonutDatum {
  count: string;
}

/**
 * Ready Now (1.124) > HiPo (1.068) adalah valid: Ready Now dihitung dari
 * seluruh talent pool suksesi (4.010 orang) yang memenuhi readiness
 * threshold, termasuk non-HiPo — bukan subset populasi HiPo.
 */
export const readinessDefinition =
  "Ready Now = seluruh talent pool (4.010) yang memenuhi readiness threshold, termasuk non-HiPo — bukan subset HiPo (1.068).";

export const talentReadiness: ReadinessDatum[] = [
  { name: "Ready Now", value: 28, count: "1.124", color: READINESS[0] },
  { name: "Ready in 1-2 Years", value: 35, count: "1.406", color: READINESS[1] },
  { name: "Ready in 3-5 Years", value: 25, count: "1.004", color: READINESS[2] },
  { name: "Not Ready", value: 12, count: "476", color: READINESS[3] },
];

/* ── 7. Insight & Rekomendasi (Why / What Could Break / What To Do) ── */

export interface SsInsightBlock {
  kind: "why" | "break" | "action";
  title: string;
  tone: "green" | "red" | "amber";
  text: string;
}

export const ssInsightBlocks: SsInsightBlock[] = [
  {
    kind: "why",
    title: "Mengapa Skenario C Menang?",
    tone: "green",
    text: "Kenaikan produktivitas +8,6% melebihi inflasi biaya HC 4,5% dan menurunkan ketergantungan hiring eksternal — net value Rp 414 M atas investasi Rp 1,85 T.",
  },
  {
    kind: "break",
    title: "Apa yang Bisa Menggagalkan?",
    tone: "red",
    text: "ROI turun di bawah 10% jika adopsi otomatisasi < 22% (asumsi 35%) atau reskilling completion < 60% — dua sensitivitas tertinggi model.",
  },
  {
    kind: "action",
    title: "Apa yang Harus Dilakukan?",
    tone: "amber",
    text: "Amankan roadmap otomatisasi & kapasitas reskilling sebelum approval; kunci review quarterly dengan trigger reforecast bila deviasi > 10%.",
  },
];

/* ── 8. Next Best Action ──────────────────────────────────────────── */

export interface NextAction {
  icon: "approve" | "plan" | "communication";
  title: string;
  desc: string;
  cta: string;
  /** Tombol hijau solid; selain itu outline. */
  primary?: boolean;
}

export const nextActions: NextAction[] = [
  {
    icon: "approve",
    title: "Approve Skenario C",
    desc: "Setujui Skenario C sebagai skenario implementasi utama",
    cta: "Approve & Plan",
    primary: true,
  },
  {
    icon: "plan",
    title: "Detail Implementation Plan",
    desc: "Buat rencana implementasi detail untuk Skenario C",
    cta: "Buat Rencana",
  },
  {
    icon: "communication",
    title: "Communication Plan",
    desc: "Siapkan rencana komunikasi ke stakeholder terkait",
    cta: "Siapkan Komunikasi",
  },
];

/* ── 9. Model Confidence & Risk ───────────────────────────────────── */

export const modelConfidence = { value: 87, caption: "High Confidence" };

/** Dekomposisi composite confidence — 87% bukan angka black box. */
export interface ConfidenceComponent {
  label: string;
  value: number;
}

export const confidenceBreakdown: ConfidenceComponent[] = [
  { label: "Data Quality", value: 92 },
  { label: "Historical Fit", value: 88 },
  { label: "Assumption Reliability", value: 82 },
  { label: "External Market Data", value: 79 },
  { label: "Scenario Stability", value: 91 },
];

/** Risk × Skenario C: probabilitas, dampak, dan eksposur finansial. */
export interface ScenarioRisk {
  name: string;
  prob: string;
  impact: "High" | "Medium" | "Low";
  exposure: string;
}

export const scenarioRisks: ScenarioRisk[] = [
  { name: "Business Growth Shortfall", prob: "40%", impact: "High", exposure: "Rp 142 M" },
  { name: "Talent Availability", prob: "35%", impact: "High", exposure: "Rp 96 M" },
  { name: "Automation Adoption Delay", prob: "25%", impact: "High", exposure: "Rp 118 M" },
  { name: "Teknologi Disruption", prob: "25%", impact: "Medium", exposure: "Rp 64 M" },
  { name: "Perubahan Regulasi", prob: "15%", impact: "Medium", exposure: "Rp 38 M" },
];

export const scenarioRiskScore = { value: 62, caption: "Moderate Risk" };

/* ── 10. Value Creation Bridge (kumulatif 2026-2028) ──────────────── */

/**
 * ROI 22,4% = Net Economic Value / Implementation Investment
 * = Rp 414 M / Rp 1.850 M. Semua komponen kumulatif 3 tahun.
 */
export interface BridgeStep {
  label: string;
  detail: string;
  /** Nilai dalam Miliar Rupiah; negatif = investasi. */
  value: number;
  display: string;
  kind: "invest" | "benefit" | "net";
}

export const valueBridge: BridgeStep[] = [
  {
    label: "Implementation Investment",
    detail: "Reskilling Rp 720 M · Otomatisasi Rp 830 M · Transisi Rp 300 M",
    value: -1850,
    display: "-Rp 1.850 M",
    kind: "invest",
  },
  {
    label: "HC Cost Saving",
    detail: "Efisiensi biaya HC vs baseline (2026-2028)",
    value: 795,
    display: "+Rp 795 M",
    kind: "benefit",
  },
  {
    label: "Productivity Value",
    detail: "Output tambahan dari produktivitas +8,6%",
    value: 420,
    display: "+Rp 420 M",
    kind: "benefit",
  },
  {
    label: "Revenue Margin Uplift",
    detail: "Margin 47% dari revenue uplift kumulatif Rp 1,98 T",
    value: 929,
    display: "+Rp 929 M",
    kind: "benefit",
  },
  {
    label: "Risk Avoidance",
    detail: "Turnover kritis & disrupsi operasional terhindar",
    value: 120,
    display: "+Rp 120 M",
    kind: "benefit",
  },
  {
    label: "Net Economic Value",
    detail: "Total benefit Rp 2.264 M - investasi Rp 1.850 M",
    value: 414,
    display: "+Rp 414 M",
    kind: "net",
  },
];

export const bridgeRoi = {
  value: "22,4%",
  formula: "ROI = Net Economic Value / Implementation Investment (Rp 414 M / Rp 1.850 M)",
};

/* ── 11. Sensitivity Analysis (tornado) ───────────────────────────── */

export interface SensitivityItem {
  factor: string;
  /** Dampak absolut terhadap ROI (pts) bila asumsi bergeser ±1 notch. */
  impact: number;
  display: string;
  dir: "up" | "down";
}

export const roiSensitivity: SensitivityItem[] = [
  { factor: "Automation Adoption", impact: 8.4, display: "±8,4 pts", dir: "up" },
  { factor: "Business Growth", impact: 6.2, display: "±6,2 pts", dir: "up" },
  { factor: "Reskilling Success", impact: 4.1, display: "±4,1 pts", dir: "up" },
  { factor: "Attrition Rate", impact: 3.6, display: "-3,6 pts", dir: "down" },
  { factor: "Inflasi Biaya HC", impact: 2.8, display: "-2,8 pts", dir: "down" },
];

export const sensitivityBreak =
  "ROI jatuh di bawah 10% jika adopsi otomatisasi < 22% — amankan roadmap otomatisasi sebelum approval.";

/* ── 12. Range of Outcomes (P10 / P50 / P90) ──────────────────────── */

export interface OutcomeRangeRow {
  metric: string;
  p10: string;
  p50: string;
  p90: string;
  /** Posisi P50 relatif rentang (0-100) untuk marker bar. */
  pos: number;
}

export const outcomeRanges: OutcomeRangeRow[] = [
  { metric: "Revenue 2028", p10: "Rp 12,6 T", p50: "Rp 13,42 T", p90: "Rp 14,3 T", pos: 48 },
  { metric: "Biaya HC 2028", p10: "Rp 6,45 T", p50: "Rp 6,63 T", p90: "Rp 6,9 T", pos: 40 },
  { metric: "ROI Kumulatif", p10: "9,8%", p50: "22,4%", p90: "31,6%", pos: 58 },
  { metric: "Headcount 2028", p10: "71.900", p50: "72.832", p90: "73.600", pos: 55 },
];

export const outcomeNote =
  "Probabilitas ROI > 15%: 78% (1.000 iterasi simulasi) — keputusan berbasis rentang, bukan single-point forecast.";

/* ── 13. Stress Scenario (Severe Downturn) ────────────────────────── */

export const stressScenario = {
  title: "Severe Downturn",
  desc: "Bukan bagian Skenario A-E — menguji ketahanan Skenario C bila kondisi memburuk.",
  assumptions: [
    "Revenue -15%",
    "Harga komoditas -20%",
    "Attrition +4 pts",
    "Hiring freeze",
    "Otomatisasi delay 12 bln",
  ],
  metrics: [
    { label: "Headcount 2028", from: "72.832", to: "68.200" },
    { label: "Biaya HC", from: "Rp 6,63 T", to: "Rp 6,1 T" },
    { label: "Produktivitas Index", from: "108,6", to: "96" },
    { label: "People Risk Score", from: "54", to: "82" },
    { label: "ROI Kumulatif", from: "22,4%", to: "-4,2%" },
  ],
  exposure: "Total people exposure Rp 310 M — mitigasi: fase investasi bertahap + trigger reforecast.",
};

/* ── 14. Execution Feasibility ────────────────────────────────────── */

export interface FeasibilityDim {
  label: string;
  value: number;
}

export const feasibilityDims: FeasibilityDim[] = [
  { label: "Funding Readiness", value: 82 },
  { label: "Technology Readiness", value: 78 },
  { label: "Talent Readiness", value: 74 },
  { label: "Change Readiness", value: 68 },
  { label: "Leadership Readiness", value: 81 },
];

export const feasibilityOverall = {
  value: 77,
  verdict: "High Value / Medium Execution Complexity",
  note: "Change readiness 68% terendah — perkuat change management & komunikasi sebelum eksekusi.",
};

/* ── 15. Goal Seek / Reverse Scenario ─────────────────────────────── */

export const goalSeek = {
  desc: "BOD menetapkan target — engine mencari konfigurasi asumsi yang diperlukan.",
  targets: [
    { label: "Biaya HC", value: "≤ Rp 6,2 T" },
    { label: "Produktivitas", value: "≥ 110" },
    { label: "Revenue", value: "≥ Rp 13 T" },
    { label: "People Risk", value: "≤ 55" },
  ],
  config: [
    { label: "Otomatisasi", value: "38%" },
    { label: "Reskilling", value: "47%" },
    { label: "Hiring", value: "Critical only" },
    { label: "Attrition", value: "≤ 7%" },
  ],
  expected: [
    { label: "Headcount", value: "71.400" },
    { label: "Biaya HC", value: "Rp 6,18 T" },
    { label: "Produktivitas", value: "111" },
    { label: "Revenue", value: "Rp 13,2 T" },
    { label: "People Risk", value: "54" },
  ],
};

/* ── 16. Strategic Score & BOD Decision Center ────────────────────── */

/** Rekomendasi bukan hanya ROI — value + risk + feasibility + alignment. */
export interface ScoreDim {
  label: string;
  value: number;
}

export const strategicScore = {
  total: 88,
  scenario: "Skenario C",
  breakdown: [
    { label: "Economic Value", value: 92 },
    { label: "Productivity", value: 95 },
    { label: "Strategic Alignment", value: 94 },
    { label: "Talent Capability", value: 87 },
    { label: "Execution Feasibility", value: 79 },
    { label: "Risk Management", value: 71 },
  ] as ScoreDim[],
};

export const approvalConditions = [
  "Automation readiness ≥ 75% sebelum fase 2",
  "Reskilling completion ≥ 80% per gelombang",
  "Total investasi ≤ Rp 1,9 T (approved envelope)",
  "People Risk Score dijaga ≤ 60 sepanjang implementasi",
  "Review realisasi quarterly dengan trigger reforecast",
];

export const decisionLog = [
  { label: "Status", value: "Menunggu Persetujuan BOD" },
  { label: "Owner", value: "HC · Strategy · Finance · Digital" },
  { label: "Sponsor", value: "Direktur SDM" },
  { label: "Review Berikutnya", value: "Q4 2026" },
];
