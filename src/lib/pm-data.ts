/**
 * Data statis halaman People Math & HPI Overview (/people-math-hpi).
 * Periode acuan: Mei 2026 (YTD), data per 31 Mei 2026.
 */

import { PALETTE } from "./chart-palette";

/* ── KPI Strip ────────────────────────────────────────────────────── */

export interface PmKpi {
  label: string;
  value: string;
  /** Satuan kecil di kanan value, mis. "/100". */
  unit?: string;
  sub: string;
  delta: string;
  trend: "up" | "down";
  deltaTone: "good" | "bad";
  compare: string;
  icon: "profiled" | "assessed" | "pmScore" | "bemScore" | "gap" | "opportunity" | "alignment";
  tone: "purple" | "green" | "pink" | "blue" | "amber" | "teal" | "sky";
}

export const pmKpi: PmKpi[] = [
  {
    label: "People Math Profiled",
    value: "38.642",
    sub: "Orang (55,1%)",
    delta: "4,8%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Apr 2026",
    icon: "profiled",
    tone: "purple",
  },
  {
    label: "HPI Assessed",
    value: "27.891",
    sub: "Orang (39,7%)",
    delta: "5,2%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Apr 2026",
    icon: "assessed",
    tone: "green",
  },
  {
    label: "Rata-rata People Math Score",
    value: "78,6",
    unit: "/100",
    sub: "Kategori: Kuat",
    delta: "2,6 pts",
    trend: "up",
    deltaTone: "good",
    compare: "vs Apr 2026",
    icon: "pmScore",
    tone: "pink",
  },
  {
    label: "Rata-rata HPI BEM Score",
    value: "82,1",
    unit: "/100",
    sub: "Kategori: Kuat",
    delta: "3,1 pts",
    trend: "up",
    deltaTone: "good",
    compare: "vs Apr 2026",
    icon: "bemScore",
    tone: "blue",
  },
  {
    label: "Performance Gap (Rata-rata)",
    value: "11,8%",
    sub: "Opportunity Improvement",
    delta: "-1,9 pts",
    trend: "down",
    deltaTone: "good",
    compare: "vs Apr 2026",
    icon: "gap",
    tone: "amber",
  },
  {
    label: "High Improvement Opportunity",
    value: "6.412",
    sub: "Orang (23,0%)",
    delta: "-0,7 pts",
    trend: "down",
    deltaTone: "good",
    compare: "vs Apr 2026",
    icon: "opportunity",
    tone: "teal",
  },
  {
    label: "People Math – HPI Alignment",
    value: "0,72",
    sub: "(0–1 Index)",
    delta: "0,05",
    trend: "up",
    deltaTone: "good",
    compare: "vs Apr 2026",
    icon: "alignment",
    tone: "sky",
  },
];

export const pmInsightUtama = {
  title: "Insight Utama",
  text: "Performance gap terbesar disebabkan oleh faktor Environment. Fokus utama: perbaikan sistem kerja, proses, tools, dan dukungan leadership.",
};

/* ── 1. People Math Dimension Score (radar) ───────────────────────── */

export interface PmDimensi {
  label: string;
  skor: number;
}

/** Urut searah jarum jam mulai dari atas. */
export const pmDimensiRadar: PmDimensi[] = [
  { label: "Thinking Style", skor: 82 },
  { label: "Driving Force", skor: 80 },
  { label: "Interpersonal Style", skor: 76 },
  { label: "Resilience", skor: 74 },
  { label: "Learning Agility", skor: 78 },
  { label: "Emotional Balance", skor: 81 },
];

export const pmDimensiTotal = { skor: "78,6", kategori: "Kuat" };

export const pmDimensiLegend = [
  { label: "Kuat (≥75)", color: PALETTE.green },
  { label: "Sedang (60-74)", color: PALETTE.amber },
  { label: "Perlu Ditingkatkan (<60)", color: PALETTE.red },
];

/* ── 2. HPI BEM Score Overview ────────────────────────────────────── */

export const hpiBemOverview = {
  total: "82,1",
  kategori: "Kuat",
  dimensi: [
    { label: "Behavior (B)", skor: 84, color: PALETTE.green },
    { label: "Environment (E)", skor: 76, color: PALETTE.amber },
    { label: "Mindset (M)", skor: 86, color: PALETTE.green },
  ],
  catatan: "Opportunity terbesar berada pada Dimensi Environment.",
};

/* ── 3. Performance Gap Analysis ──────────────────────────────────── */

export const gapAnalysis = {
  avg: "11,8%",
  rows: [
    { name: "Behavior Gap", value: 3.2, pct: "3,2%", color: PALETTE.red },
    { name: "Environment Gap", value: 5.1, pct: "5,1%", color: PALETTE.amber },
    { name: "Mindset Gap", value: 3.5, pct: "3,5%", color: PALETTE.greenSoft },
  ],
  catatan: "Environment Gap adalah penyebab utama performance gap.",
};

/* ── 4. People Math Profile Cluster ───────────────────────────────── */

export interface ClusterRow {
  name: string;
  pct: string;
  jumlah: string;
  value: number;
  color: string;
}

export const pmCluster: ClusterRow[] = [
  { name: "The Driver", pct: "31%", jumlah: "11.981", value: 11981, color: PALETTE.blue },
  { name: "The Inspirer", pct: "22%", jumlah: "8.512", value: 8512, color: PALETTE.slate },
  { name: "The Analyst", pct: "18%", jumlah: "6.883", value: 6883, color: PALETTE.teal },
  { name: "The Collaborator", pct: "15%", jumlah: "5.792", value: 5792, color: PALETTE.purple },
  { name: "The Stabilizer", pct: "8%", jumlah: "3.094", value: 3094, color: PALETTE.green },
  { name: "The Pioneer", pct: "6%", jumlah: "2.400", value: 2400, color: PALETTE.amber },
];

export const pmClusterTotal = { value: "38.642", caption: "Orang" };

export const pmClusterCatatan =
  "Klaster membantu memahami pola kekuatan alami individu untuk penempatan & pengembangan.";

/* ── 5. HPI Root Cause Analysis ───────────────────────────────────── */

export const rootCause = {
  header: "Dimensi Environment – Gap 5,1% (Tertinggi)",
  rows: [
    { faktor: "Proses kerja belum terstandarisasi", impact: "High", populasi: "12.842 (46%)" },
    { faktor: "Sistem & tools belum optimal", impact: "High", populasi: "10.231 (37%)" },
    { faktor: "Dukungan leadership belum konsisten", impact: "Medium", populasi: "7.421 (27%)" },
    { faktor: "Akses data & informasi terbatas", impact: "Medium", populasi: "6.311 (22%)" },
    { faktor: "Beban kerja tidak seimbang", impact: "Low", populasi: "4.008 (14%)" },
  ] as { faktor: string; impact: "High" | "Medium" | "Low"; populasi: string }[],
  catatan: "Perbaikan faktor di atas berpotensi meningkatkan performance hingga",
  catatanHighlight: "+8–12%.",
};

/* ── 6. HPI Intervention Priority ─────────────────────────────────── */

export interface IntervensiRow {
  prioritas: number;
  intervensi: string;
  dimensi: "B" | "E" | "M";
  impact: string;
  populasi: string;
}

export const intervensiPriority: IntervensiRow[] = [
  { prioritas: 1, intervensi: "Perbaikan Proses & SOP", dimensi: "E", impact: "+4,2%", populasi: "12.842" },
  { prioritas: 2, intervensi: "Digitalisasi Tools & Sistem", dimensi: "E", impact: "+3,1%", populasi: "10.231" },
  { prioritas: 3, intervensi: "Leadership Coaching", dimensi: "M", impact: "+2,8%", populasi: "7.421" },
  { prioritas: 4, intervensi: "Workload Management", dimensi: "E", impact: "+1,9%", populasi: "6.311" },
  { prioritas: 5, intervensi: "Komunikasi & Feedback Loop", dimensi: "B", impact: "+1,5%", populasi: "5.927" },
];

/* ── 7. Employee HPI Profile (contoh) ─────────────────────────────── */

export const contohProfil = {
  nama: "Rizky Pratama",
  jabatan: "Manajer Kebun",
  unit: "PTPN IV",
  badges: ["High Potential", "Ready in 1-2 Years"],
  performance: { skor: "4,3", maks: "/ 5", kategori: "Baik", gap: "12%", gapCaption: "Opportunity" },
  bem: [
    { label: "Behavior (B)", nilai: "4,2", skor: 84, color: PALETTE.green },
    { label: "Environment (E)", nilai: "3,4", skor: 68, color: PALETTE.amber },
    { label: "Mindset (M)", nilai: "4,3", skor: 86, color: PALETTE.green },
  ],
  rootCause: {
    judul: "Environment – Sistem & Tools",
    poin: ["Reporting masih manual", "Data tidak real-time", "Akses analytical tools terbatas"],
    estimasi: "+8 – 12% Performance",
  },
  rekomendasi: [
    { aksi: "Digitalisasi Reporting Kebun", impact: "High Impact", periode: "Q3 2026" },
    { aksi: "Training Advanced Excel & Power BI", impact: "Medium Impact", periode: "Q3 2026" },
    { aksi: "Coaching Time Management", impact: "Low Impact", periode: "Q4 2026" },
  ] as { aksi: string; impact: "High Impact" | "Medium Impact" | "Low Impact"; periode: string }[],
};

export const pmFootnote = {
  parts: [
    { text: "People Math memahami " },
    { text: "WHO", bold: true },
    { text: " seseorang. HPI BEM menjelaskan " },
    { text: "WHY", bold: true },
    { text: " performance belum optimal dan " },
    { text: "HOW", bold: true },
    { text: " memperbaikinya." },
  ],
};
