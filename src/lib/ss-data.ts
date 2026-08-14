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
    label: "Skenario Terbaik (ROI)",
    value: "Skenario C",
    sub: "ROI 22,4%",
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

export const talentReadiness: ReadinessDatum[] = [
  { name: "Ready Now", value: 28, count: "1.124", color: READINESS[0] },
  { name: "Ready in 1-2 Years", value: 35, count: "1.406", color: READINESS[1] },
  { name: "Ready in 3-5 Years", value: 25, count: "1.004", color: READINESS[2] },
  { name: "Not Ready", value: 12, count: "476", color: READINESS[3] },
];

/* ── 7. Insight & Rekomendasi ─────────────────────────────────────── */

export interface SsInsight {
  icon: "roi" | "efficiency" | "skill" | "monitoring";
  tone: "green" | "teal" | "red" | "amber";
  text: string;
}

export const ssInsights: SsInsight[] = [
  {
    icon: "roi",
    tone: "green",
    text: "Skenario C memberikan ROI tertinggi dengan payback period tercepat (2,3 tahun).",
  },
  {
    icon: "efficiency",
    tone: "teal",
    text: "Transformasi digital & reskilling berkontribusi signifikan terhadap efisiensi biaya.",
  },
  {
    icon: "skill",
    tone: "red",
    text: "Fokus pada pengembangan skill digital dan leadership untuk memaksimalkan dampak.",
  },
  {
    icon: "monitoring",
    tone: "amber",
    text: "Monitoring quarterly diperlukan untuk memastikan realisasi sesuai target.",
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

export interface ModelRiskFactor {
  name: string;
  level: "Medium" | "Low";
}

export const modelRiskFactors: ModelRiskFactor[] = [
  { name: "Ekonomi Global", level: "Medium" },
  { name: "Perubahan Regulasi", level: "Low" },
  { name: "Teknologi Disruption", level: "Medium" },
  { name: "Market Competition", level: "Medium" },
  { name: "Talent Availability", level: "Low" },
];
