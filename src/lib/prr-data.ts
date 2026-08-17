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

/* ── Risk Appetite ────────────────────────────────────────────────── */

/**
 * Batas toleransi risiko people yang ditetapkan manajemen.
 * Skor di atas nilai ini berarti eksposur melampaui appetite dan
 * memerlukan tindakan mitigasi aktif.
 */
export const RISK_APPETITE = 50;

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
    sub: "18 Pts di Atas Risk Appetite (≤50)",
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
  /** Risk velocity: perubahan skor vs bulan lalu (pts, bertanda). */
  deltaPts: number;
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
    deltaPts: -3,
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
    deltaPts: 5,
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
    deltaPts: 8,
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
    deltaPts: 4,
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
    deltaPts: -5,
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
    deltaPts: -3,
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
    deltaPts: 2,
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
    deltaPts: -4,
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
    deltaPts: -2,
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
    deltaPts: 0,
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
    units: "Unit terdampak: PTPN IV, PTPN IV Regional 3",
    impact: "Rp 48,2 M",
    impacted: "1.245 Orang",
  },
  {
    name: "Turnover Risk",
    level: "High",
    desc: "Turnover karyawan kunci meningkat 18% YoY",
    units: "Unit terdampak: PTPN III, PTPN IV, PTPN IV Regional 3",
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
    units: "Unit terdampak: PTPN I Regional 1, PTPN III, PTPN IV",
    impact: "Rp 14,5 M",
    impacted: "892 Orang",
  },
  {
    name: "Leadership Gap",
    level: "Medium",
    desc: "Gap kompetensi leadership pada level manajerial",
    units: "Unit terdampak: PTPN I Regional 1, PTPN IV Regional 4",
    impact: "Rp 6,2 M",
    impacted: "1.156 Orang",
  },
];

/* ── 4. People Risk Trend (12 bulan aktual + forecast) ────────────── */

export interface RiskTrendPoint {
  name: string;
  /** Skor aktual; kosong pada periode forecast. */
  value?: number;
  /** Skor proyeksi; Mei 26 diisi juga sebagai titik sambung garis. */
  forecast?: number;
  /** Confidence band proyeksi [bawah, atas]. */
  band?: [number, number];
}

export const riskTrend: RiskTrendPoint[] = [
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
  { name: "Mei 26", value: 68, forecast: 68, band: [68, 68] },
  { name: "Jun 26", forecast: 66, band: [63, 69] },
  { name: "Jul 26", forecast: 65, band: [61, 68] },
  { name: "Agu 26", forecast: 63, band: [59, 67] },
  { name: "Sep 26", forecast: 61, band: [56, 66] },
  { name: "Okt 26", forecast: 60, band: [54, 65] },
  { name: "Nov 26", forecast: 58, band: [52, 64] },
  { name: "Des 26", forecast: 57, band: [51, 63] },
];

/* ── 5. Risk Heatmap by Organization ──────────────────────────────── */

export interface OrgRiskRow {
  name: string;
  high: number;
  medium: number;
  low: number;
  score: number;
  /** Driver risiko dominan pada organisasi ini. */
  drivers: string;
  /** Risk trajectory: perubahan skor 3 bulan terakhir (pts, bertanda). */
  trajectory: number;
}

export const orgRiskHeatmap: OrgRiskRow[] = [
  {
    name: "PTPN I",
    high: 2,
    medium: 2,
    low: 1,
    score: 62,
    drivers: "Succession, Skill Gap",
    trajectory: 3,
  },
  {
    name: "PTPN I Regional 1",
    high: 1,
    medium: 3,
    low: 1,
    score: 58,
    drivers: "Leadership, Succession",
    trajectory: -2,
  },
  {
    name: "PTPN III",
    high: 2,
    medium: 2,
    low: 1,
    score: 71,
    drivers: "Turnover, Skill Gap",
    trajectory: 5,
  },
  {
    name: "PTPN IV",
    high: 3,
    medium: 2,
    low: 0,
    score: 76,
    drivers: "Turnover, Vacancy, Succession",
    trajectory: 8,
  },
  {
    name: "PTPN IV Regional 3",
    high: 2,
    medium: 1,
    low: 1,
    score: 65,
    drivers: "Vacancy, Beban Kerja",
    trajectory: -4,
  },
  {
    name: "PTPN IV Regional 4",
    high: 1,
    medium: 2,
    low: 1,
    score: 54,
    drivers: "Engagement, Aging",
    trajectory: -3,
  },
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

/* ── 7. Early Warning Indicators ──────────────────────────────────── */

export interface EarlyWarning {
  risk: string;
  level: RiskLevel;
  /** Sinyal prekursor (leading indicators) beserta arahnya. */
  signals: string[];
  headline: string;
  prediction: string;
}

export const earlyWarnings: EarlyWarning[] = [
  {
    risk: "Turnover Risk",
    level: "High",
    signals: ["Engagement ↓", "Absensi ↑", "Mobilitas Internal ↓", "Daya Saing Kompensasi ↓"],
    headline: "47 talenta kritis menunjukkan ≥3 sinyal prekursor",
    prediction: "Prediksi risiko attrition 12 bulan: 72%",
  },
  {
    risk: "Succession Risk",
    level: "High",
    signals: ["Pensiun Incumbent <18 Bln ↑", "Pipeline Suksesor ↓"],
    headline: "7 dari 12 posisi kritis tanpa suksesor Ready-Now",
    prediction: "5 posisi berisiko kosong tanpa mitigasi segera",
  },
  {
    risk: "Critical Skill Gap",
    level: "High",
    signals: ["Adopsi Digital Tools ↓", "Training Completion ↓"],
    headline: "Adopsi digital tools 34% di bawah target",
    prediction: "Gap kapabilitas melebar 6-9 bulan ke depan",
  },
];

/* ── 8. Control Effectiveness (Inherent vs Residual) ──────────────── */

export interface RiskControlRow {
  risk: string;
  /** Risiko sebelum kontrol mitigasi. */
  inherent: number;
  /** Risiko tersisa setelah kontrol berjalan (= skor register saat ini). */
  residual: number;
  /** Kontrol mitigasi yang sudah berjalan. */
  controls: string;
  /** Efektivitas kontrol (%). */
  effectiveness: number;
}

export const riskControls: RiskControlRow[] = [
  {
    risk: "Critical Position Vacancy",
    inherent: 90,
    residual: 82,
    controls: "Succession program, mobilitas internal",
    effectiveness: 45,
  },
  {
    risk: "Succession Risk",
    inherent: 88,
    residual: 78,
    controls: "Talent pool, program pengembangan suksesor",
    effectiveness: 52,
  },
  {
    risk: "Turnover Risk",
    inherent: 84,
    residual: 74,
    controls: "Retention program, engagement survey",
    effectiveness: 48,
  },
  {
    risk: "Critical Skill Gap",
    inherent: 85,
    residual: 72,
    controls: "Upskilling digital & agronomi",
    effectiveness: 58,
  },
  {
    risk: "Leadership Gap",
    inherent: 74,
    residual: 61,
    controls: "Leadership development program",
    effectiveness: 62,
  },
];

/* ── 9. Rekomendasi Tindakan Prioritas (Risk Treatment) ───────────── */

export interface RiskAction {
  title: string;
  desc: string;
  level: RiskLevel;
  quarter: string;
  /** Penanggung jawab treatment. */
  owner: string;
  /** Skor risiko saat ini (sebelum treatment). */
  before: number;
  /** Ekspektasi skor setelah treatment berjalan. */
  after: number;
  status: "In Progress" | "Planned";
  icon: "succession" | "retention" | "upskilling" | "leadership" | "workload";
  tone: "blue" | "purple" | "violet" | "teal" | "green";
}

export const riskActions: RiskAction[] = [
  {
    title: "Accelerated Succession Program",
    desc: "Mengisi 24 posisi kritis yang kosong",
    level: "High",
    quarter: "Q3 2026",
    owner: "HC & Bisnis",
    before: 82,
    after: 61,
    status: "In Progress",
    icon: "succession",
    tone: "blue",
  },
  {
    title: "Retention Program Karyawan Kunci",
    desc: "Mengurangi risiko turnover karyawan kunci",
    level: "High",
    quarter: "Q3 2026",
    owner: "HC Holding",
    before: 74,
    after: 58,
    status: "In Progress",
    icon: "retention",
    tone: "purple",
  },
  {
    title: "Upskilling Program Digital & Agronomi",
    desc: "Menutup gap kompetensi kritis",
    level: "High",
    quarter: "Q4 2026",
    owner: "HC & Learning Center",
    before: 72,
    after: 55,
    status: "Planned",
    icon: "upskilling",
    tone: "violet",
  },
  {
    title: "Leadership Development Program",
    desc: "Meningkatkan kompetensi leadership manajerial",
    level: "Medium",
    quarter: "Q4 2026",
    owner: "Talent Management",
    before: 61,
    after: 48,
    status: "Planned",
    icon: "leadership",
    tone: "teal",
  },
  {
    title: "Review Struktur & Beban Kerja",
    desc: "Optimasi proses dan redistribusi beban kerja",
    level: "Medium",
    quarter: "Q4 2026",
    owner: "SDM & Organisasi",
    before: 58,
    after: 47,
    status: "Planned",
    icon: "workload",
    tone: "green",
  },
];

/* ── 10. Risk Exposure by Business ────────────────────────────────── */

export interface BusinessExposureRow {
  business: string;
  score: number;
  exposure: string;
  /** Porsi dari total financial exposure (%). */
  share: number;
}

/** Total share = 100%; total exposure = Rp 128,6 M (konsisten dengan KPI). */
export const businessExposure: BusinessExposureRow[] = [
  { business: "Palm Oil", score: 74, exposure: "Rp 68,4 M", share: 53 },
  { business: "Rubber", score: 61, exposure: "Rp 24,2 M", share: 19 },
  { business: "Sugar", score: 58, exposure: "Rp 18,6 M", share: 14 },
  { business: "Tea", score: 49, exposure: "Rp 10,3 M", share: 8 },
  { business: "Supporting & Corporate", score: 42, exposure: "Rp 7,1 M", share: 6 },
];

/* ── 11. Scenario / stress test ───────────────────────────────────── */

export interface ScenarioMetric {
  label: string;
  /** Nilai saat ini; kosong bila metrik murni dampak skenario. */
  from?: string;
  to: string;
}

export const prrScenario = {
  title: "What-if: Attrition Talenta Kritis +20%",
  desc: "Stress test bila turnover talenta kritis memburuk 20% dari baseline Mei 2026.",
  metrics: [
    { label: "Financial Exposure", from: "Rp 128,6 M", to: "Rp 187,0 M" },
    { label: "Overall Risk Score", from: "68", to: "76" },
    { label: "Dampak Produktivitas", to: "-3,2%" },
    { label: "Kebutuhan Replacement", to: "+640 Karyawan" },
  ] as ScenarioMetric[],
};

/* ── 12. BOD People Risk Decision Center ──────────────────────────── */

export interface PrrDecision {
  title: string;
  situation: string;
  decision: string;
  exposure: string;
  due: string;
  tone: "red" | "amber";
}

export const prrDecisions: PrrDecision[] = [
  {
    title: "Critical Position Vacancy",
    situation: "24 posisi kritis kosong lebih dari 3 bulan, terkonsentrasi di PTPN IV Regional 1 & 3.",
    decision: "Setujui accelerated succession program + external talent search untuk 24 posisi.",
    exposure: "Rp 48,2 M",
    due: "Q3 2026",
    tone: "red",
  },
  {
    title: "Key Talent Turnover",
    situation: "Turnover karyawan kunci naik 18% YoY; 47 talenta kritis dengan sinyal attrition.",
    decision: "Setujui targeted retention package untuk populasi talenta kritis berisiko.",
    exposure: "Rp 32,6 M",
    due: "Q3 2026",
    tone: "red",
  },
  {
    title: "Digital & Agronomy Skill Gap",
    situation: "2.341 karyawan terdampak gap kapabilitas digital & agronomi lintas holding.",
    decision: "Setujui accelerated reskilling program Digital & Agronomi gelombang pertama.",
    exposure: "Rp 23,1 M",
    due: "Q4 2026",
    tone: "amber",
  },
];

/* ── 13. Metodologi & catatan interpretasi ────────────────────────── */

export interface PrrMethodNote {
  title: string;
  text: string;
}

export const prrMethodology: PrrMethodNote[] = [
  {
    title: "Metodologi Skor",
    text: "Overall Risk Score = komposit berbobot 10 kategori: Critical Position 18%, Succession 16%, Turnover 14%, Skill 12%, Leadership 10%, Performance 9%, Engagement 7%, Aging 6%, Labor Cost 4%, Industrial Relation 4%. Risk Appetite ditetapkan ≤50.",
  },
  {
    title: "Estimasi Dampak Finansial",
    text: "Estimasi berbasis replacement cost, productivity loss, durasi vacancy, dan biaya historis attrition — bukan angka audited financial loss. Confidence: Medium.",
  },
  {
    title: "Karyawan Terdampak",
    text: "Populasi non-eksklusif: satu karyawan dapat terekspos lebih dari satu risiko, sehingga penjumlahan antar kategori tidak menggambarkan total populasi unik.",
  },
];
