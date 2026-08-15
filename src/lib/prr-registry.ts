/**
 * Registri risiko people & organisasi (All Risks) — turunan detail dari
 * People Risk Radar. Satu baris = satu risiko terdaftar dengan skor inherent
 * (sebelum kontrol) dan residual (setelah kontrol berjalan).
 *
 * Skor = Likelihood x Impact, skala 1-5 per dimensi (maks 25).
 */

export type RiskLevelAll = "Critical" | "High" | "Medium" | "Low";
export type RiskTrendDir = "up" | "down" | "flat";
export type RiskStatus = "Active" | "Mitigating" | "Monitoring" | "Closed";

export type RiskCategory =
  | "People & Culture"
  | "Talent Management"
  | "Operational"
  | "Compliance"
  | "Technology & Data"
  | "Financial"
  | "Other";

export interface RiskRecord {
  id: string;
  title: string;
  category: RiskCategory;
  inherent: { likelihood: number; impact: number; score: number };
  residual: { likelihood: number; impact: number; score: number };
  level: RiskLevelAll;
  trend: RiskTrendDir;
  owner: string;
  status: RiskStatus;
  lastReview: string;
}

/** [no, judul, kategori, iL, iI, rL, rI, level, trend, owner, status, tglReview] */
type Row = [
  number,
  string,
  RiskCategory,
  number,
  number,
  number,
  number,
  RiskLevelAll,
  RiskTrendDir,
  string,
  RiskStatus,
  string,
];

const ROWS: Row[] = [
  [1, "Succession risk for critical leadership positions", "People & Culture", 5, 4, 3, 3, "Critical", "up", "Group CHRO", "Active", "13 Mei 2026"],
  [2, "Labor cost escalation beyond budget", "Financial", 4, 4, 3, 2, "High", "up", "Group CFO", "Active", "12 Mei 2026"],
  [3, "High turnover in key talent", "Talent Management", 4, 3, 3, 2, "High", "up", "Group CHRO", "Active", "10 Mei 2026"],
  [4, "Digital capability gap", "Technology & Data", 4, 3, 3, 2, "High", "flat", "Group CIO", "Active", "11 Mei 2026"],
  [5, "Non-compliance with labor regulations", "Compliance", 3, 4, 2, 2, "Medium", "down", "Group Legal", "Active", "09 Mei 2026"],
  [6, "Inadequate performance management", "People & Culture", 3, 3, 2, 2, "Medium", "down", "Group CHRO", "Active", "08 Mei 2026"],
  [7, "Data privacy breach", "Technology & Data", 3, 4, 2, 2, "Medium", "down", "Group CIO", "Active", "07 Mei 2026"],
  [8, "Workforce skill obsolescence", "Talent Management", 3, 3, 2, 2, "Medium", "flat", "Group CHRO", "Active", "06 Mei 2026"],
  [9, "Industrial relations disruption", "People & Culture", 3, 4, 2, 2, "Medium", "down", "Group IR", "Active", "05 Mei 2026"],
  [10, "System integration failure", "Technology & Data", 2, 3, 2, 2, "Low", "down", "Group CIO", "Active", "04 Mei 2026"],
  [11, "Critical position vacancy above 90 days", "Talent Management", 5, 4, 4, 3, "Critical", "up", "Group CHRO", "Mitigating", "13 Mei 2026"],
  [12, "Leadership pipeline concentration in 3 regionals", "People & Culture", 4, 5, 3, 4, "Critical", "up", "Group CHRO", "Mitigating", "12 Mei 2026"],
  [13, "Mass retirement of BOD-2 within 12 months", "People & Culture", 5, 4, 4, 3, "Critical", "up", "Group CHRO", "Active", "12 Mei 2026"],
  [14, "Loss of agronomy technical expertise", "Talent Management", 4, 5, 3, 4, "Critical", "up", "Dir. Produksi", "Mitigating", "11 Mei 2026"],
  [15, "Mill engineering capability shortage", "Operational", 5, 4, 4, 3, "Critical", "up", "Dir. Operasi", "Active", "11 Mei 2026"],
  [16, "Pay equity gap triggering attrition", "Financial", 4, 4, 3, 3, "Critical", "up", "Group CHRO", "Mitigating", "10 Mei 2026"],
  [17, "Safety incident recurrence at high-risk units", "Operational", 4, 5, 3, 3, "Critical", "flat", "Dir. K3", "Active", "10 Mei 2026"],
  [18, "Workforce productivity below group baseline", "Operational", 4, 3, 3, 3, "High", "up", "Dir. Operasi", "Active", "09 Mei 2026"],
  [19, "Overtime cost overrun at processing units", "Financial", 4, 3, 3, 2, "High", "up", "Group CFO", "Mitigating", "09 Mei 2026"],
  [20, "Employee engagement decline in field workforce", "People & Culture", 4, 3, 3, 2, "High", "down", "Group CHRO", "Monitoring", "08 Mei 2026"],
  [21, "Recruitment funnel quality deterioration", "Talent Management", 4, 3, 3, 2, "High", "flat", "Group CHRO", "Active", "08 Mei 2026"],
  [22, "Learning investment not converting to capability", "Talent Management", 3, 4, 3, 3, "High", "flat", "Group CHRO", "Monitoring", "07 Mei 2026"],
  [23, "HRIS data quality below assurance threshold", "Technology & Data", 4, 3, 3, 2, "High", "down", "Group CIO", "Mitigating", "07 Mei 2026"],
  [24, "Contract labor compliance exposure", "Compliance", 4, 4, 3, 2, "High", "down", "Group Legal", "Active", "06 Mei 2026"],
  [25, "Outsourcing vendor governance weakness", "Compliance", 3, 4, 3, 2, "High", "flat", "Group Procurement", "Active", "06 Mei 2026"],
  [26, "Absenteeism above tolerance at 6 units", "Operational", 4, 3, 3, 2, "High", "up", "Dir. Operasi", "Monitoring", "05 Mei 2026"],
  [27, "Span of control imbalance in support functions", "Operational", 3, 3, 3, 2, "Medium", "flat", "Group CHRO", "Active", "05 Mei 2026"],
  [28, "Talent poaching by competitor agribusiness", "Talent Management", 4, 4, 3, 3, "High", "up", "Group CHRO", "Monitoring", "04 Mei 2026"],
  [29, "Pension fund obligation escalation", "Financial", 3, 4, 3, 3, "High", "up", "Group CFO", "Active", "04 Mei 2026"],
  [30, "Culture integration lag post-restructuring", "People & Culture", 4, 3, 3, 2, "High", "down", "Group CHRO", "Mitigating", "03 Mei 2026"],
  [31, "Diversity target shortfall at leadership level", "People & Culture", 3, 3, 2, 2, "Medium", "flat", "Group CHRO", "Monitoring", "03 Mei 2026"],
  [32, "Grievance backlog beyond service level", "Compliance", 3, 3, 2, 2, "Medium", "down", "Group IR", "Mitigating", "02 Mei 2026"],
  [33, "Manpower planning accuracy below target", "Operational", 3, 3, 2, 2, "Medium", "flat", "Group CHRO", "Active", "02 Mei 2026"],
  [34, "Onboarding effectiveness gap for new hires", "Talent Management", 3, 3, 2, 2, "Medium", "down", "Group CHRO", "Monitoring", "01 Mei 2026"],
  [35, "Payroll processing error rate", "Operational", 3, 3, 2, 2, "Medium", "down", "Group CFO", "Mitigating", "30 Apr 2026"],
  [36, "Employee data access control weakness", "Technology & Data", 3, 3, 2, 2, "Medium", "flat", "Group CIO", "Active", "30 Apr 2026"],
  [37, "Shift scheduling inefficiency in harvesting", "Operational", 3, 3, 2, 2, "Medium", "down", "Dir. Operasi", "Monitoring", "29 Apr 2026"],
  [38, "Health and safety training coverage gap", "Compliance", 3, 3, 2, 2, "Medium", "down", "Dir. K3", "Mitigating", "29 Apr 2026"],
  [39, "Internal mobility rate below plan", "Talent Management", 3, 3, 2, 2, "Medium", "flat", "Group CHRO", "Monitoring", "28 Apr 2026"],
  [40, "Union negotiation timeline slippage", "People & Culture", 3, 3, 2, 2, "Medium", "flat", "Group IR", "Active", "28 Apr 2026"],
  [41, "Knowledge transfer gap in retiring roles", "People & Culture", 3, 3, 2, 2, "Medium", "down", "Group CHRO", "Mitigating", "27 Apr 2026"],
  [42, "Whistleblowing channel underutilization", "Compliance", 2, 3, 2, 2, "Medium", "flat", "Group Legal", "Monitoring", "27 Apr 2026"],
  [43, "Remote work policy inconsistency", "Other", 2, 3, 2, 2, "Low", "flat", "Group CHRO", "Monitoring", "26 Apr 2026"],
  [44, "Employee wellbeing program adoption low", "Other", 2, 3, 2, 1, "Low", "down", "Group CHRO", "Monitoring", "26 Apr 2026"],
  [45, "Vendor training quality variance", "Compliance", 2, 2, 1, 2, "Low", "flat", "Group Procurement", "Monitoring", "25 Apr 2026"],
  [46, "Workforce reporting cadence delay", "Technology & Data", 2, 2, 1, 2, "Low", "down", "Group CIO", "Closed", "25 Apr 2026"],
  [47, "Recognition program coverage gap", "People & Culture", 2, 2, 1, 1, "Low", "down", "Group CHRO", "Closed", "24 Apr 2026"],
];

export const allRisks: RiskRecord[] = ROWS.map(
  ([no, title, category, iL, iI, rL, rI, level, trend, owner, status, lastReview]) => ({
    id: `RISK-2026-${String(no).padStart(3, "0")}`,
    title,
    category,
    inherent: { likelihood: iL, impact: iI, score: iL * iI },
    residual: { likelihood: rL, impact: rI, score: rL * rI },
    level,
    trend,
    owner,
    status,
    lastReview,
  }),
);

export const RISK_LEVELS: RiskLevelAll[] = ["Critical", "High", "Medium", "Low"];

export const RISK_CATEGORIES: RiskCategory[] = [
  "People & Culture",
  "Talent Management",
  "Operational",
  "Compliance",
  "Technology & Data",
  "Financial",
  "Other",
];

export const RISK_STATUSES: RiskStatus[] = ["Active", "Mitigating", "Monitoring", "Closed"];

export const riskOwners = [...new Set(allRisks.map((r) => r.owner))].sort();

function countLevel(level: RiskLevelAll) {
  return allRisks.filter((r) => r.level === level).length;
}

export const averageRiskScore =
  Math.round((allRisks.reduce((s, r) => s + r.inherent.score, 0) / allRisks.length) * 10) / 10;

export interface AllRisksKpi {
  label: string;
  value: string;
  share?: string;
  delta: string;
  trend: RiskTrendDir;
  tone: "neutral" | "red" | "amber" | "green";
  compare: string;
  suffix?: string;
}

/** KPI ringkas di atas registri; delta dibandingkan review bulan sebelumnya. */
export const allRisksKpi: AllRisksKpi[] = [
  {
    label: "Total Risks",
    value: String(allRisks.length),
    delta: "5",
    trend: "up",
    tone: "green",
    compare: "vs Apr 2026",
  },
  {
    label: "Critical",
    value: String(countLevel("Critical")),
    share: `${((countLevel("Critical") / allRisks.length) * 100).toFixed(1).replace(".", ",")}%`,
    delta: "2",
    trend: "up",
    tone: "red",
    compare: "vs Apr 2026",
  },
  {
    label: "High",
    value: String(countLevel("High")),
    share: `${((countLevel("High") / allRisks.length) * 100).toFixed(1).replace(".", ",")}%`,
    delta: "1",
    trend: "up",
    tone: "red",
    compare: "vs Apr 2026",
  },
  {
    label: "Medium",
    value: String(countLevel("Medium")),
    share: `${((countLevel("Medium") / allRisks.length) * 100).toFixed(1).replace(".", ",")}%`,
    delta: "-1",
    trend: "down",
    tone: "amber",
    compare: "vs Apr 2026",
  },
  {
    label: "Low",
    value: String(countLevel("Low")),
    share: `${((countLevel("Low") / allRisks.length) * 100).toFixed(1).replace(".", ",")}%`,
    delta: "0",
    trend: "flat",
    tone: "green",
    compare: "vs Apr 2026",
  },
  {
    label: "Average Risk Score",
    value: averageRiskScore.toFixed(1).replace(".", ","),
    suffix: "/25",
    delta: "-1,3",
    trend: "down",
    tone: "green",
    compare: "vs Apr 2026",
  },
];

/** Distribusi risiko per kategori (untuk donut). */
export const riskByCategory = RISK_CATEGORIES.map((category) => {
  const count = allRisks.filter((r) => r.category === category).length;
  return {
    category,
    count,
    share: (count / allRisks.length) * 100,
  };
}).filter((c) => c.count > 0);

/**
 * Matriks heatmap inherent risk 5x5 (likelihood x impact),
 * baris = likelihood Very High -> Very Low, kolom = impact Very Low -> Very High.
 */
export const HEATMAP_LIKELIHOOD = ["Very High", "High", "Medium", "Low", "Very Low"];
export const HEATMAP_IMPACT = ["Very Low", "Low", "Medium", "High", "Very High"];

export const riskHeatmap = HEATMAP_LIKELIHOOD.map((_, row) => {
  const likelihood = 5 - row;
  return HEATMAP_IMPACT.map((__, col) => {
    const impact = col + 1;
    return {
      likelihood,
      impact,
      score: likelihood * impact,
      count: allRisks.filter(
        (r) => r.inherent.likelihood === likelihood && r.inherent.impact === impact,
      ).length,
    };
  });
});

/** Tren jumlah risiko per level, 6 bulan terakhir. */
export const riskLevelTrend = [
  { name: "Des 2025", Critical: 5, High: 12, Medium: 17, Low: 5 },
  { name: "Jan 2026", Critical: 6, High: 13, Medium: 18, Low: 5 },
  { name: "Feb 2026", Critical: 6, High: 13, Medium: 19, Low: 6 },
  { name: "Mar 2026", Critical: 7, High: 14, Medium: 19, Low: 6 },
  { name: "Apr 2026", Critical: 6, High: 14, Medium: 19, Low: 6 },
  { name: "Mei 2026", Critical: 8, High: 15, Medium: 18, Low: 6 },
];

/** Driver yang paling sering muncul sebagai penyebab risiko terdaftar. */
export const topRiskDrivers = [
  { label: "Leadership Gap", count: 12 },
  { label: "Skill Mismatch", count: 9 },
  { label: "High Turnover", count: 8 },
  { label: "Regulatory Change", count: 7 },
  { label: "System Downtime", count: 6 },
];
