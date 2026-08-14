/**
 * Data statis halaman Talent Intelligence (/talent-intelligence).
 * Periode acuan: Mei 2026 (YTD), data per 31 Mei 2026.
 */

/* ── KPI Strip ────────────────────────────────────────────────────── */

export interface TiKpi {
  label: string;
  value: string;
  sub: string;
  delta: string;
  trend: "up" | "down";
  deltaTone: "good" | "bad";
  compare: string;
  icon: "users" | "hipo" | "coverage" | "succession" | "flight" | "retention" | "density";
  tone: "blue" | "green" | "teal" | "indigo" | "red" | "amber" | "purple";
}

export const tiKpi: TiKpi[] = [
  {
    label: "Total Talenta Aktif",
    value: "3.742",
    sub: "Orang",
    delta: "6,8%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "users",
    tone: "blue",
  },
  {
    label: "High Potential (HiPo)",
    value: "1.068",
    sub: "Orang (28,5%)",
    delta: "8,4%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "hipo",
    tone: "green",
  },
  {
    label: "Critical Role Coverage",
    value: "68%",
    sub: "Ready Now & Ready in 1–2 Yrs",
    delta: "4,5 ppts",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "coverage",
    tone: "teal",
  },
  {
    label: "Succession Ready Now",
    value: "412",
    sub: "Orang (11%)",
    delta: "7,3%",
    trend: "down",
    deltaTone: "bad",
    compare: "vs Mei 2025",
    icon: "succession",
    tone: "indigo",
  },
  {
    label: "Flight Risk (High)",
    value: "186",
    sub: "Orang (5,0%)",
    delta: "1,2 ppts",
    trend: "up",
    deltaTone: "bad",
    compare: "vs Mei 2025",
    icon: "flight",
    tone: "red",
  },
  {
    label: "Internal Retention Rate",
    value: "91%",
    sub: "YTD",
    delta: "2,1 ppts",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "retention",
    tone: "amber",
  },
  {
    label: "Talent Density Index",
    value: "74",
    sub: "(0–100)",
    delta: "6 pts",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "density",
    tone: "purple",
  },
];

/* ── 1. Talent Portfolio (9 Box Grid) ─────────────────────────────── */

export interface NineBoxCell {
  value: string;
  pct: string;
  /** Kunci warna sel — dipetakan ke tint di komponen. */
  tone: "lavender" | "greenSoft" | "green" | "amber" | "amberSoft" | "red";
}

/** Baris dari Potential High → Low; kolom Performance Low → High. */
export const tiNineBox: NineBoxCell[][] = [
  [
    { value: "124", pct: "3,3%", tone: "lavender" },
    { value: "286", pct: "7,6%", tone: "greenSoft" },
    { value: "1.068", pct: "28,5%", tone: "green" },
  ],
  [
    { value: "278", pct: "7,4%", tone: "amber" },
    { value: "876", pct: "23,4%", tone: "amberSoft" },
    { value: "1.086", pct: "29,0%", tone: "greenSoft" },
  ],
  [
    { value: "132", pct: "3,5%", tone: "red" },
    { value: "184", pct: "4,9%", tone: "red" },
    { value: "108", pct: "2,9%", tone: "red" },
  ],
];

export const tiNineBoxLegend: { label: string; color: string }[] = [
  { label: "High Performance High Potential", color: "#1a9c5b" },
  { label: "High Performance Moderate Potential", color: "#7ac943" },
  { label: "Moderate Performance High Potential", color: "#f2c53d" },
  { label: "Moderate Performance Moderate Potential", color: "#f7dc8a" },
  { label: "Low Performance High Potential", color: "#f08c8c" },
  { label: "Low Performance Moderate Potential", color: "#f4a9a9" },
  { label: "Low Performance Low Potential", color: "#f8c6c6" },
];

/* ── 2. Talent Pipeline by Readiness ──────────────────────────────── */

export interface PipelineStage {
  label: string;
  value: string;
  pct: string;
  color: string;
  /** Lebar relatif bar funnel (persen). */
  width: number;
}

export const tiPipeline: PipelineStage[] = [
  { label: "Ready Now", value: "412", pct: "11%", color: "#0f7a44", width: 42 },
  { label: "Ready in 1 – 2 Years", value: "656", pct: "17,5%", color: "#3cae6a", width: 58 },
  { label: "Ready in 3 – 5 Years", value: "1.124", pct: "30,0%", color: "#f2c53d", width: 76 },
  { label: "Future Potential", value: "1.550", pct: "41,5%", color: "#cbd5e1", width: 94 },
];

export const tiPipelineFokus = [
  "Tingkatkan jumlah Ready Now untuk posisi kritikal",
  "Percepat pengembangan talenta Ready in 1-2 Years",
  "Perluas exposure & pengalaman strategis",
];

/* ── 3. Top Talent by Potential ───────────────────────────────────── */

export type Readiness = "Ready Now" | "Ready in 1-2 Yrs" | "Ready in 2-3 Yrs";

export interface TopTalent {
  nama: string;
  jabatan: string;
  unit: string;
  score: string;
  readiness: Readiness;
}

export const tiTopTalent: TopTalent[] = [
  { nama: "Rizky Putra", jabatan: "Asisten Afdeling", unit: "PTPN IV", score: "9,4", readiness: "Ready in 1-2 Yrs" },
  { nama: "Agung Setiawan", jabatan: "Kepala Kebun", unit: "PTPN III", score: "9,2", readiness: "Ready Now" },
  { nama: "Dewi Kartika", jabatan: "Manajer Keuangan", unit: "PTPN I", score: "9,1", readiness: "Ready in 1-2 Yrs" },
  { nama: "Fajar Nugroho", jabatan: "Manajer Pabrik", unit: "PTPN V", score: "8,9", readiness: "Ready Now" },
  { nama: "Yudi Prasetyo", jabatan: "Manajer HR", unit: "PTPN II", score: "8,8", readiness: "Ready in 1-2 Yrs" },
  { nama: "Nadia Arifah", jabatan: "Manajer Sustainability", unit: "PTPN VI", score: "8,7", readiness: "Ready in 2-3 Yrs" },
  { nama: "Budi Santoso", jabatan: "Kepala Engineering", unit: "PTPN IV", score: "8,6", readiness: "Ready Now" },
  { nama: "Maya Sari", jabatan: "Manajer Komersial", unit: "PTPN III", score: "8,6", readiness: "Ready in 2-3 Yrs" },
  { nama: "Andi Kurniawan", jabatan: "Kepala Tanaman", unit: "PTPN V", score: "8,5", readiness: "Ready in 2-3 Yrs" },
  { nama: "Rina Ekawati", jabatan: "Manajer QA/QC", unit: "PTPN I", score: "8,5", readiness: "Ready in 1-2 Yrs" },
];

/* ── 4. Talent Risk Overview ──────────────────────────────────────── */

export const tiRiskDonut = [
  { name: "High Risk", value: 86, pctLabel: "46%", color: "#ef4444" },
  { name: "Medium Risk", value: 72, pctLabel: "39%", color: "#f2a93d" },
  { name: "Low Risk", value: 28, pctLabel: "15%", color: "#1a9c5b" },
];

export interface FlightRisk {
  nama: string;
  jabatan: string;
  score: number;
}

export const tiTopFlightRisk: FlightRisk[] = [
  { nama: "Andi Wijaya", jabatan: "Manajer Pabrik – PTPN V", score: 85 },
  { nama: "Dimas Pratama", jabatan: "Kepala Kebun – PTPN IV", score: 82 },
  { nama: "Siti Rahmawati", jabatan: "Manajer Keuangan – PTPN III", score: 80 },
  { nama: "Hendra Saputra", jabatan: "Asisten Teknik – PTPN II", score: 78 },
  { nama: "Ratna Dewi", jabatan: "Supervisor QC – PTPN I", score: 76 },
];

export const tiRiskNote =
  "86 talenta berisiko tinggi. Perlu tindakan retensi segera.";

/* ── 5. Talent Attributes Insight ─────────────────────────────────── */

export interface TalentAttribute {
  label: string;
  icon: "leadership" | "agility" | "learning" | "technical" | "digital" | "business";
  score: string;
  benchmark: string;
  gap: string;
  gapTone: "good" | "bad";
}

export const tiAttributes: TalentAttribute[] = [
  { label: "Leadership", icon: "leadership", score: "4,2", benchmark: "4,0", gap: "+0,2", gapTone: "good" },
  { label: "Agility & Adaptability", icon: "agility", score: "4,0", benchmark: "3,8", gap: "+0,2", gapTone: "good" },
  { label: "Learning Agility", icon: "learning", score: "4,1", benchmark: "4,0", gap: "+0,1", gapTone: "good" },
  { label: "Technical Expertise", icon: "technical", score: "3,9", benchmark: "4,1", gap: "-0,2", gapTone: "bad" },
  { label: "Digital Literacy", icon: "digital", score: "3,8", benchmark: "4,0", gap: "-0,2", gapTone: "bad" },
  { label: "Business Acumen", icon: "business", score: "4,0", benchmark: "4,1", gap: "-0,1", gapTone: "bad" },
];

export const tiAttributesNote =
  "Perkuat Technical Expertise & Digital Literacy melalui program development targeted.";

/* ── 6. Critical Role Coverage ────────────────────────────────────── */

export interface RoleCoverage {
  posisi: string;
  total: number;
  coverage: string;
  /** Komposisi bar (persen): Ready Now / 1-2 Yrs / 3-5 Yrs / No Successor. */
  split: [number, number, number, number];
}

export const tiRoleCoverage: RoleCoverage[] = [
  { posisi: "General Manager", total: 18, coverage: "72%", split: [39, 33, 17, 11] },
  { posisi: "Kepala Kebun", total: 64, coverage: "66%", split: [34, 32, 22, 12] },
  { posisi: "Manajer Pabrik", total: 42, coverage: "71%", split: [38, 33, 18, 11] },
  { posisi: "Manajer Keuangan", total: 26, coverage: "58%", split: [28, 30, 26, 16] },
  { posisi: "Manajer HR", total: 22, coverage: "64%", split: [32, 32, 22, 14] },
  { posisi: "Manajer Sustainability", total: 16, coverage: "75%", split: [41, 34, 15, 10] },
  { posisi: "Manajer Komersial", total: 20, coverage: "60%", split: [30, 30, 25, 15] },
];

export const tiCoverageLegend = [
  { label: "Ready Now", color: "#0f7a44" },
  { label: "Ready in 1-2 Years", color: "#3cae6a" },
  { label: "Ready in 3-5 Years", color: "#f2c53d" },
  { label: "No Successor", color: "#cbd5e1" },
];

/* ── 7. Talent Development Focus ──────────────────────────────────── */

export interface DevFocus {
  label: string;
  value: string;
  icon: "leadership" | "technical" | "cross" | "strategic";
  tone: "blue" | "purple" | "green" | "teal";
}

export const tiDevFocus: DevFocus[] = [
  { label: "Leadership Acceleration", value: "812", icon: "leadership", tone: "blue" },
  { label: "Technical & Digital Capability", value: "1.245", icon: "technical", tone: "purple" },
  { label: "Cross Functional Exposure", value: "643", icon: "cross", tone: "green" },
  { label: "Strategic Project Assignment", value: "528", icon: "strategic", tone: "teal" },
];

export const tiInvestment = {
  label: "Investment Development (YTD)",
  value: "Rp 24,8 M",
  delta: "12,4%",
  compare: "vs Mei 2025",
  trend: [14, 16, 15, 18, 20, 19, 22, 24, 25] as number[],
};

/* ── 8. Talent Mobility Overview ──────────────────────────────────── */

export interface MobilityRow {
  label: string;
  value: number;
  pct: string;
}

export const tiMobility: MobilityRow[] = [
  { label: "Promosi", value: 128, pct: "38%" },
  { label: "Rotasi Lateral", value: 96, pct: "29%" },
  { label: "Penugasan Proyek", value: 64, pct: "19%" },
  { label: "Transfer Unit", value: 48, pct: "14%" },
];

export const tiMobilityImpact = [
  {
    value: "+0,36 pts",
    text: "Peningkatan Performance rata-rata setelah mobilitas",
    icon: "target" as const,
  },
  {
    value: "87%",
    text: "Mobilitas yang memberikan dampak positif",
    icon: "award" as const,
  },
];
