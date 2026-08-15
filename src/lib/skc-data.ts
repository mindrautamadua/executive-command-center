/**
 * Data statis halaman KPI Korporat & Scorecard (/strategi-kinerja/kpi-korporat).
 * Periode acuan: 31 Mei 2026 (YTD). Skor induk: STRATEGI di group-baseline.ts.
 */

import type { StgInsight, StgKpi } from "./stg-core";

/* ── 1. KPI Strip ─────────────────────────────────────────────────── */

export const skcKpi: StgKpi[] = [
  {
    label: "Skor KPI Group",
    value: "87,4",
    valueSuffix: "/100",
    sub: "Kategori: Baik",
    delta: "+0,6 pts",
    trend: "up",
    deltaTone: "good",
    compare: "vs Q1 2026",
    icon: "score",
    tone: "green",
  },
  {
    label: "PalmCo",
    value: "91,2",
    valueSuffix: "/100",
    sub: "Kategori: Sangat Baik",
    delta: "+0,3 pts",
    trend: "up",
    deltaTone: "good",
    compare: "vs Q1 2026",
    icon: "score",
    tone: "teal",
  },
  {
    label: "SGN",
    value: "82,6",
    valueSuffix: "/100",
    sub: "Turun 2 Kuartal Beruntun",
    subDanger: true,
    delta: "-0,3 pts",
    trend: "down",
    deltaTone: "bad",
    compare: "vs Q1 2026",
    icon: "score",
    tone: "amber",
  },
  {
    label: "PTPN I",
    value: "84,8",
    valueSuffix: "/100",
    sub: "Kategori: Baik",
    delta: "+0,4 pts",
    trend: "up",
    deltaTone: "good",
    compare: "vs Q1 2026",
    icon: "score",
    tone: "blue",
  },
  {
    label: "KPI Merah",
    value: "4",
    valueSuffix: "/32",
    sub: "Rendemen Gula · HPP Gula · Sengketa Lahan · Margin SGN",
    subDanger: true,
    compare: "Stabil vs Q1 2026",
    icon: "red",
    tone: "red",
  },
];

/* ── 2. Scorecard by Perspective (4 perspektif) ───────────────────── */

export interface PerspectiveScore {
  perspective: string;
  score: number;
  /** Bobot perspektif pada skor komposit (%). */
  weight: number;
}

/** Komposit berbobot ≈ 87,4 (skor Group baseline). */
export const perspectives: PerspectiveScore[] = [
  { perspective: "Keuangan", score: 89, weight: 35 },
  { perspective: "Operasional", score: 86, weight: 30 },
  { perspective: "SDM & Organisasi", score: 88, weight: 15 },
  { perspective: "Stakeholder & ESG", score: 85, weight: 20 },
];

/* ── 3. KPI Matrix — 32 KPI RAG (8 per perspektif) ────────────────── */

export type Rag = "green" | "amber" | "red";

export interface KpiItem {
  perspective: "Keuangan" | "Operasional" | "SDM & Organisasi" | "Stakeholder & ESG";
  name: string;
  target: string;
  actual: string;
  /** Skor pencapaian (0-110, capped). */
  score: number;
  rag: Rag;
}

/** 32 KPI: 21 green · 7 amber · 4 red. Angka mengutip group-baseline. */
export const kpiMatrix: KpiItem[] = [
  /* — Keuangan (8) — */
  {
    perspective: "Keuangan",
    name: "Pendapatan Konsolidasi YTD",
    target: "Rp 24,3 T",
    actual: "Rp 24,6 T",
    score: 101,
    rag: "green",
  },
  {
    perspective: "Keuangan",
    name: "EBITDA Margin Group",
    target: "26,0%",
    actual: "27,7%",
    score: 107,
    rag: "green",
  },
  {
    perspective: "Keuangan",
    name: "Laba Bersih YTD",
    target: "Rp 2,55 T",
    actual: "Rp 2,94 T",
    score: 110,
    rag: "green",
  },
  {
    perspective: "Keuangan",
    name: "EBITDA Margin SGN",
    target: "12,0%",
    actual: "8,4%",
    score: 70,
    rag: "red",
  },
  {
    perspective: "Keuangan",
    name: "HPP Gula",
    target: "≤ Rp 11.500/kg",
    actual: "Rp 12.850/kg",
    score: 68,
    rag: "red",
  },
  {
    perspective: "Keuangan",
    name: "Net Debt/EBITDA",
    target: "≤ 1,50x",
    actual: "1,38x",
    score: 104,
    rag: "green",
  },
  {
    perspective: "Keuangan",
    name: "Realisasi Capex",
    target: "35,0%",
    actual: "32,1%",
    score: 92,
    rag: "amber",
  },
  {
    perspective: "Keuangan",
    name: "HPP CPO",
    target: "≤ Rp 8.800/kg",
    actual: "Rp 8.950/kg",
    score: 93,
    rag: "amber",
  },
  /* — Operasional (8) — */
  {
    perspective: "Operasional",
    name: "TBS Diolah YTD",
    target: "4,35 jt ton",
    actual: "4,42 jt ton",
    score: 102,
    rag: "green",
  },
  {
    perspective: "Operasional",
    name: "Produksi CPO YTD",
    target: "0,97 jt ton",
    actual: "0,99 jt ton",
    score: 102,
    rag: "green",
  },
  {
    perspective: "Operasional",
    name: "OER",
    target: "22,8%",
    actual: "22,4%",
    score: 94,
    rag: "amber",
  },
  {
    perspective: "Operasional",
    name: "Yield TBS",
    target: "21,5 ton/ha",
    actual: "21,9 ton/ha",
    score: 102,
    rag: "green",
  },
  {
    perspective: "Operasional",
    name: "Rendemen Gula",
    target: "8,20%",
    actual: "7,45%",
    score: 74,
    rag: "red",
  },
  {
    perspective: "Operasional",
    name: "Utilisasi PKS",
    target: "80,0%",
    actual: "78,4%",
    score: 94,
    rag: "amber",
  },
  {
    perspective: "Operasional",
    name: "Losses Produksi",
    target: "≤ 1,65%",
    actual: "1,58%",
    score: 104,
    rag: "green",
  },
  {
    perspective: "Operasional",
    name: "Restan TBS",
    target: "≤ 2,0%",
    actual: "1,8%",
    score: 105,
    rag: "green",
  },
  /* — SDM & Organisasi (8) — */
  {
    perspective: "SDM & Organisasi",
    name: "Engagement Index",
    target: "76,0",
    actual: "78,4",
    score: 103,
    rag: "green",
  },
  {
    perspective: "SDM & Organisasi",
    name: "Revenue per Employee",
    target: "Rp 1,10 M",
    actual: "Rp 1,18 M",
    score: 107,
    rag: "green",
  },
  {
    perspective: "SDM & Organisasi",
    name: "Turnover Rate",
    target: "≤ 8,0%",
    actual: "6,8%",
    score: 108,
    rag: "green",
  },
  {
    perspective: "SDM & Organisasi",
    name: "Talent Readiness",
    target: "65%",
    actual: "68%",
    score: 105,
    rag: "green",
  },
  {
    perspective: "SDM & Organisasi",
    name: "Milestone Transformasi Selesai",
    target: "47,9%",
    actual: "40,8%",
    score: 85,
    rag: "amber",
  },
  {
    perspective: "SDM & Organisasi",
    name: "Adopsi Digital",
    target: "80%",
    actual: "68%",
    score: 85,
    rag: "amber",
  },
  {
    perspective: "SDM & Organisasi",
    name: "HC Cost to Revenue",
    target: "≤ 10,0%",
    actual: "9,7%",
    score: 103,
    rag: "green",
  },
  {
    perspective: "SDM & Organisasi",
    name: "Suksesor Posisi Kritis",
    target: "70%",
    actual: "72%",
    score: 103,
    rag: "green",
  },
  /* — Stakeholder & ESG (8) — */
  {
    perspective: "Stakeholder & ESG",
    name: "Cakupan ISPO Areal Inti",
    target: "86,0%",
    actual: "88,2%",
    score: 103,
    rag: "green",
  },
  {
    perspective: "Stakeholder & ESG",
    name: "Intensitas Emisi",
    target: "≤ 1,90 tCO2e/t CPO",
    actual: "1,82 tCO2e/t CPO",
    score: 104,
    rag: "green",
  },
  {
    perspective: "Stakeholder & ESG",
    name: "Penyelesaian Sengketa Lahan",
    target: "6,3 rb ha (YTD)",
    actual: "3,1 rb ha",
    score: 49,
    rag: "red",
  },
  {
    perspective: "Stakeholder & ESG",
    name: "EUDR Readiness",
    target: "80/100",
    actual: "78/100",
    score: 98,
    rag: "amber",
  },
  {
    perspective: "Stakeholder & ESG",
    name: "Realisasi TJSL",
    target: "Rp 175 M",
    actual: "Rp 186 M",
    score: 106,
    rag: "green",
  },
  {
    perspective: "Stakeholder & ESG",
    name: "Kepatuhan DMO",
    target: "100%",
    actual: "100%",
    score: 100,
    rag: "green",
  },
  {
    perspective: "Stakeholder & ESG",
    name: "Skor Kepatuhan Regulasi",
    target: "88",
    actual: "89",
    score: 101,
    rag: "green",
  },
  {
    perspective: "Stakeholder & ESG",
    name: "ERM Maturity",
    target: "3,40/5",
    actual: "3,42/5",
    score: 101,
    rag: "green",
  },
];

/* ── 4. Red KPI Focus — detail 4 KPI merah ────────────────────────── */

export interface RedFocus {
  name: string;
  gap: string;
  rootCause: string;
  action: string;
  owner: string;
}

export const redFocus: RedFocus[] = [
  {
    name: "Rendemen Gula",
    gap: "7,45% vs target 8,20% (-0,75 pts)",
    rootCause: "Kualitas tebu rakyat rendah, varietas unggul baru 34% areal, jeda tebang-giling panjang",
    action: "Insentif kemitraan berbasis rendemen + mekanisasi tebang-muat-angkut (STG-18)",
    owner: "Dir. Produksi SGN",
  },
  {
    name: "HPP Gula",
    gap: "Rp 12.850/kg vs target ≤ Rp 11.500/kg (+11,7%)",
    rootCause: "Biaya tetap 11 PG non-kompetitif terdistribusi pada volume giling rendah",
    action: "Percepat keputusan restrukturisasi 11 PG (STG-19) — potensi -Rp 900/kg",
    owner: "Dirut SGN",
  },
  {
    name: "Penyelesaian Sengketa Lahan",
    gap: "3,1 rb ha vs target YTD 6,3 rb ha (49%)",
    rootCause: "Proses mediasi & litigasi 214 kasus berjalan lambat; okupasi terkonsentrasi 3 regional",
    action: "Task force gabungan legal-keamanan + skema kemitraan okupan produktif",
    owner: "Dir. SDM & Umum Holding",
  },
  {
    name: "EBITDA Margin SGN",
    gap: "8,4% vs target 12,0% (-3,6 pts)",
    rootCause: "Kombinasi rendemen rendah & HPP gula tinggi; giling baru mulai Mei",
    action: "Recovery plan musim giling + realisasi efisiensi off-season Rp 180 M",
    owner: "Dir. Keuangan SGN",
  },
];

/* ── 5. Score Trend — 8 kuartal per subholding ────────────────────── */

export interface ScoreTrendPoint {
  quarter: string;
  group: number;
  palmco: number;
  sgn: number;
  ptpn1: number;
}

/** Titik terakhir = skor baseline (87,4 · 91,2 · 82,6 · 84,8). */
export const scoreTrend: ScoreTrendPoint[] = [
  { quarter: "Q3 24", group: 83.1, palmco: 87.5, sgn: 79.8, ptpn1: 80.2 },
  { quarter: "Q4 24", group: 84.0, palmco: 88.2, sgn: 80.5, ptpn1: 81.0 },
  { quarter: "Q1 25", group: 84.6, palmco: 88.9, sgn: 81.4, ptpn1: 81.9 },
  { quarter: "Q2 25", group: 85.2, palmco: 89.6, sgn: 82.0, ptpn1: 82.8 },
  { quarter: "Q3 25", group: 85.9, palmco: 90.1, sgn: 82.9, ptpn1: 83.5 },
  { quarter: "Q4 25", group: 86.4, palmco: 90.6, sgn: 83.4, ptpn1: 84.0 },
  { quarter: "Q1 26", group: 86.8, palmco: 90.9, sgn: 82.9, ptpn1: 84.4 },
  { quarter: "Q2 26", group: 87.4, palmco: 91.2, sgn: 82.6, ptpn1: 84.8 },
];

/* ── 6. KPI Cascade Map (holding → subholding) ────────────────────── */

export interface CascadeTarget {
  entity: "PalmCo" | "SGN" | "PTPN I";
  kpi: string;
  rag: Rag;
}

export interface CascadeRow {
  groupKpi: string;
  perspective: string;
  cascade: CascadeTarget[];
}

export const cascadeMap: CascadeRow[] = [
  {
    groupKpi: "EBITDA Margin Group 26%",
    perspective: "Keuangan",
    cascade: [
      { entity: "PalmCo", kpi: "EBITDA margin 31,2%", rag: "green" },
      { entity: "SGN", kpi: "EBITDA margin 12,0%", rag: "red" },
      { entity: "PTPN I", kpi: "EBITDA margin 19,4%", rag: "green" },
    ],
  },
  {
    groupKpi: "Produksi CPO 2,53 jt ton FY",
    perspective: "Operasional",
    cascade: [
      { entity: "PalmCo", kpi: "TBS diolah & OER 22,8%", rag: "amber" },
      { entity: "PTPN I", kpi: "Pasokan TBS regional", rag: "green" },
    ],
  },
  {
    groupKpi: "Swasembada Gula 1,45 jt ton 2028",
    perspective: "Operasional",
    cascade: [
      { entity: "SGN", kpi: "Rendemen ≥8,2% & areal tebu", rag: "red" },
    ],
  },
  {
    groupKpi: "Value Creation Rp 4,2 T FY",
    perspective: "Keuangan",
    cascade: [
      { entity: "PalmCo", kpi: "Benefit inisiatif Rp 1,12 T YTD", rag: "green" },
      { entity: "SGN", kpi: "Benefit inisiatif Rp 0,31 T YTD", rag: "amber" },
      { entity: "PTPN I", kpi: "Benefit inisiatif Rp 0,24 T YTD", rag: "green" },
    ],
  },
  {
    groupKpi: "Intensitas Emisi ≤1,9 tCO2e/t CPO",
    perspective: "Stakeholder & ESG",
    cascade: [
      { entity: "PalmCo", kpi: "Biogas 18 PKS & co-firing", rag: "green" },
      { entity: "PTPN I", kpi: "Elektrifikasi pabrik", rag: "red" },
    ],
  },
];

/* ── 7. Insight & rekomendasi ─────────────────────────────────────── */

export const skcInsights: StgInsight[] = [
  {
    title: "Seluruh KPI merah bermuara di dua akar: gula & lahan",
    text: "Rendemen, HPP gula, dan margin SGN adalah satu rantai sebab-akibat; sengketa lahan berdiri sendiri. Dua intervensi struktural menuntaskan 4 KPI merah sekaligus.",
    tone: "bad",
  },
  {
    title: "Divergensi PalmCo vs SGN melebar",
    text: "Selisih skor kini 8,6 pts (terlebar 8 kuartal). Pertimbangkan realokasi dukungan PMO & talenta operasional lintas subholding pada musim giling.",
    tone: "warn",
  },
  {
    title: "Skor Group di atas target namun rapuh",
    text: "87,4 ditopang outperformance harga CPO. Pada skenario harga normal, skor turun ±2,1 pts — jaga disiplin KPI biaya agar kategori Baik bertahan.",
    tone: "info",
  },
];
