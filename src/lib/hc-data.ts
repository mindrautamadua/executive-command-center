/**
 * Data statis halaman HC Executive Command Center (/sdm-talenta).
 * Periode acuan: Mei 2026 (YTD).
 */

/* ── 1. Key Strategic KPI ─────────────────────────────────────────── */

export interface HcKpi {
  label: string;
  value: string;
  sub: string;
  delta: string;
  trend: "up" | "down";
  deltaTone: "good" | "bad";
  compare: string;
  icon: "users" | "trend" | "heart" | "cycle" | "target" | "wallet";
  tone: "blue" | "green" | "pink" | "red" | "teal" | "amber";
}

export const hcKpi: HcKpi[] = [
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
    label: "People Productivity",
    value: "1,18",
    sub: "Revenue / Employee (M Rp)",
    delta: "6,7%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "trend",
    tone: "green",
  },
  {
    label: "Engagement Index",
    value: "78,4",
    sub: "Kategori: Healthy",
    delta: "3,2 pts",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "heart",
    tone: "pink",
  },
  {
    label: "Turnover Rate",
    value: "6,8%",
    sub: "YTD",
    delta: "-1,3 pts",
    trend: "down",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "cycle",
    tone: "red",
  },
  {
    label: "Talent Readiness",
    value: "68%",
    sub: "Ready Now & Ready in 1-2 Yrs",
    delta: "4,5%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "target",
    tone: "teal",
  },
  {
    label: "HC Cost to Revenue",
    value: "9,7%",
    sub: "YTD",
    delta: "-0,6 pts",
    trend: "down",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "wallet",
    tone: "amber",
  },
];

/* ── 2. Strategic Alignment ───────────────────────────────────────── */

export const strategicObjective = "Meningkatkan Produktivitas & Efisiensi Operasional";

export const alignmentFlow = [
  { label: "Workforce Requirement", value: "72.318", sub: "Orang", icon: "workforce" },
  { label: "People Capability", value: "82%", sub: "Capability Index", icon: "capability" },
  { label: "People Performance", value: "85%", sub: "Performance Index", icon: "performance" },
  { label: "Business Outcome", value: "+8,2%", sub: "Produktivitas (Ton/Ha)", icon: "outcome" },
] as const;

/* ── 3. People Risk Radar ─────────────────────────────────────────── */

export interface RiskRadarAxis {
  axis: string;
  /** Tingkat risiko saat ini (0-100). */
  level: number;
  /** Ambang toleransi. */
  tolerance: number;
}

export const riskRadar: RiskRadarAxis[] = [
  { axis: "Vacancy", level: 82, tolerance: 55 },
  { axis: "Succession", level: 78, tolerance: 55 },
  { axis: "Turnover", level: 58, tolerance: 60 },
  { axis: "Leadership", level: 55, tolerance: 60 },
  { axis: "Skill Gap", level: 74, tolerance: 55 },
  { axis: "Compliance", level: 38, tolerance: 65 },
  { axis: "Engagement", level: 34, tolerance: 65 },
  { axis: "HC Cost", level: 47, tolerance: 60 },
];

export type RiskSeverity = "High" | "Medium" | "Low";

export const topRisks: { label: string; severity: RiskSeverity }[] = [
  { label: "Critical Position Vacancy", severity: "High" },
  { label: "Succession Risk", severity: "High" },
  { label: "Turnover Risk", severity: "Medium" },
  { label: "Leadership Gap", severity: "Medium" },
  { label: "Critical Skill Gap", severity: "High" },
];

/* ── 4. People Math & HPI BEM ─────────────────────────────────────── */

export const peopleMath = {
  score: 79,
  kategori: "Strong",
  trend: [72, 74, 73, 76, 75, 78, 79],
};

export const hpiBem = {
  score: 82,
  kategori: "Strong",
  dimensi: [
    { label: "Behavior", value: 88, tone: "green" },
    { label: "Environment", value: 76, tone: "amber" },
    { label: "Mindset", value: 84, tone: "green" },
  ] as { label: string; value: number; tone: "green" | "amber" }[],
  opportunity: "Opportunity terbesar ada pada Environment (Sistem & Proses Kerja).",
};

/* ── 5. BOD Decision Center ───────────────────────────────────────── */

export interface BodDecision {
  title: string;
  impact: "High Impact" | "Medium Impact" | "Low Impact";
  tone: "red" | "amber" | "green";
  text: string;
  due: string;
}

export const bodTabs = [
  { label: "Decision Required", count: 3 },
  { label: "Opportunity", count: 2 },
  { label: "Information", count: 4 },
];

export const bodDecisions: BodDecision[] = [
  {
    title: "Succession Risk – PTPN IV",
    impact: "High Impact",
    tone: "red",
    text: "12 posisi kritikal tidak memiliki suksesor Ready Now. Rekomendasi: Approve accelerated leadership program.",
    due: "Q3 2026",
  },
  {
    title: "Labor Cost – Palm Oil Operations",
    impact: "Medium Impact",
    tone: "amber",
    text: "Labor cost +8,2% sementara productivity hanya +2,1%. Rekomendasi: Review workforce productivity model.",
    due: "Q3 2026",
  },
  {
    title: "Internal Talent Mobility",
    impact: "Low Impact",
    tone: "green",
    text: "127 karyawan high potential dapat mengisi projected vacancies. Potensi saving: Rp 12,6 M.",
    due: "Q2 2026",
  },
];

/* ── 6. People Productivity ───────────────────────────────────────── */

export interface ProductivityRow {
  indikator: string;
  ytd: string;
  yoy: string;
  yoyTrend: "up" | "down";
  yoyTone: "good" | "bad";
  target: string;
}

export const productivityRows: ProductivityRow[] = [
  { indikator: "Revenue / Employee (M Rp)", ytd: "1,18", yoy: "6,7%", yoyTrend: "up", yoyTone: "good", target: "1,25" },
  { indikator: "EBITDA / Employee (M Rp)", ytd: "326", yoy: "5,3%", yoyTrend: "up", yoyTone: "good", target: "345" },
  { indikator: "Production (Ton) / Employee", ytd: "64,3", yoy: "7,1%", yoyTrend: "up", yoyTone: "good", target: "66,0" },
  { indikator: "TBS (Ton) / Employee", ytd: "74,8", yoy: "6,5%", yoyTrend: "up", yoyTone: "good", target: "76,0" },
  { indikator: "Labor Cost / Ton (Rp)", ytd: "176.420", yoy: "-3,4%", yoyTrend: "down", yoyTone: "bad", target: "180.000" },
  { indikator: "Labor Cost / Revenue (%)", ytd: "9,7%", yoy: "-0,6 pts", yoyTrend: "down", yoyTone: "bad", target: "10,0%" },
  { indikator: "Productivity Index (Base 100)", ytd: "112", yoy: "5,2%", yoyTrend: "up", yoyTone: "good", target: "115" },
];

export const productivityNote = "Produktivitas membaik di atas target. Pertahankan momentum!";

/* ── 7. Scenario Simulation ───────────────────────────────────────── */

export interface ScenarioRow {
  skenario: string;
  headcount: string;
  cost: string;
  productivity: string;
  keterangan: string;
  recommended?: boolean;
}

export const scenarioRows: ScenarioRow[] = [
  {
    skenario: "A. No Intervention",
    headcount: "+8,0%",
    cost: "+11,1%",
    productivity: "+1,1%",
    keterangan: "Business as usual",
  },
  {
    skenario: "B. Automation",
    headcount: "+2,0%",
    cost: "+4,3%",
    productivity: "+8,4%",
    keterangan: "Investasi teknologi & automasi proses",
  },
  {
    skenario: "C. Reskill & Redeployment",
    headcount: "+1,2%",
    cost: "+3,2%",
    productivity: "+7,1%",
    keterangan: "Reskilling & mobilitas internal",
  },
  {
    skenario: "D. Optimized (Recommended)",
    headcount: "+1,5%",
    cost: "+3,8%",
    productivity: "+8,6%",
    keterangan: "Kombinasi B + C",
    recommended: true,
  },
];

export const scenarioNote =
  "Skenario D memberikan keseimbangan terbaik antara biaya dan peningkatan produktivitas.";

/* ── 8. Talent Portfolio (9-box) ──────────────────────────────────── */

/** Grid 9-box: baris dari Performance High → Low, kolom Potential Low → High. */
export const nineBox: { value: string; tone: "soft" | "mid" | "strong" }[][] = [
  [
    { value: "128", tone: "mid" },
    { value: "412", tone: "mid" },
    { value: "186", tone: "strong" },
  ],
  [
    { value: "1.235", tone: "soft" },
    { value: "3.742", tone: "mid" },
    { value: "1.068", tone: "mid" },
  ],
  [
    { value: "476", tone: "soft" },
    { value: "1.296", tone: "soft" },
    { value: "389", tone: "soft" },
  ],
];

export const talentStats = {
  star: { label: "High Performance High Potential", value: 186, unit: "Karyawan" },
  rows: [
    { label: "Flight Risk High", value: "32", tone: "red" },
    { label: "Critical Position", value: "54", tone: "red" },
    { label: "Ready Now", value: "41%", tone: "ink" },
  ] as { label: string; value: string; tone: "red" | "ink" }[],
};

/* ── 9. Alerts & Notifications ────────────────────────────────────── */

export interface HcAlert {
  title: string;
  text: string;
  time: string;
  tone: "red" | "amber" | "green" | "blue";
}

export const hcAlerts: HcAlert[] = [
  {
    title: "Risiko Turnover Tinggi",
    text: "Turnover di PTPN IV Regional 2 melebihi ambang batas (6,5%).",
    time: "Today",
    tone: "red",
  },
  {
    title: "Probation Berakhir",
    text: "243 karyawan probation akan berakhir dalam 30 hari.",
    time: "1 hari yang lalu",
    tone: "amber",
  },
  {
    title: "Performance Below Target",
    text: "1.127 karyawan memiliki performance Below Target.",
    time: "2 hari yang lalu",
    tone: "amber",
  },
  {
    title: "Pelatihan Wajib",
    text: "Kepatuhan pelatihan HSSE masih di bawah target (85%).",
    time: "3 hari yang lalu",
    tone: "green",
  },
  {
    title: "Suksesi Mendekat",
    text: "5 posisi kritikal akan kosong dalam 90 hari.",
    time: "3 hari yang lalu",
    tone: "blue",
  },
];

/* ── 10. AI HR Assistant ──────────────────────────────────────────── */

export const aiGreeting = "Good morning, Pak Direktur Utama 👋 Ada yang bisa saya bantu hari ini?";

export const aiChips = [
  "Ringkasan Eksekutif",
  "Analisis Turnover",
  "Top Risk Saat Ini",
  "Rekomendasi Tindakan",
];
