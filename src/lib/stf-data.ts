/**
 * Data statis halaman Program Transformasi (/strategi-kinerja/transformasi).
 * Periode acuan: 31 Mei 2026 (YTD). Angka induk: group-baseline.ts + stg-core.ts.
 */

import type { InitiativeStatus, StgInsight, StgKpi } from "./stg-core";

/* ── 1. KPI Strip ─────────────────────────────────────────────────── */

export const stfKpi: StgKpi[] = [
  {
    label: "Program Transformasi",
    value: "6",
    sub: "4 On Track · 2 At Risk",
    compare: "Stabil vs Q1 2026",
    icon: "transform",
    tone: "blue",
  },
  {
    label: "Transformation Health Index",
    value: "74",
    valueSuffix: "/100",
    sub: "Rata Tertimbang 6 Program",
    delta: "+2 pts",
    trend: "up",
    deltaTone: "good",
    compare: "vs Q1 2026",
    icon: "score",
    tone: "green",
  },
  {
    label: "Benefit Realized YTD",
    value: "Rp 1,86 T",
    sub: "44% dari Target FY Rp 4,2 T",
    delta: "+Rp 0,45 T",
    trend: "up",
    deltaTone: "good",
    compare: "vs Apr 2026",
    icon: "value",
    tone: "teal",
  },
  {
    label: "Adopsi Digital",
    value: "68%",
    sub: "Target 2026: 80%",
    subDanger: true,
    delta: "+4 pts",
    trend: "up",
    deltaTone: "good",
    compare: "vs Q1 2026",
    icon: "digital",
    tone: "amber",
  },
];

/* ── 2. Transformation Health Grid — 6 program ────────────────────── */

export interface TransformationProgram {
  name: string;
  /** Health index program (0-100). */
  health: number;
  /** Progres fisik program (%). */
  progress: number;
  status: InitiativeStatus;
  /** Benefit terealisasi YTD (Rp T) — jumlah 6 program = 1,86. */
  benefitYtdRpT: number;
  /** Sponsor program di Direksi. */
  sponsor: string;
}

export const programs: TransformationProgram[] = [
  {
    name: "Operational Excellence",
    health: 82,
    progress: 66,
    status: "On Track",
    benefitYtdRpT: 0.78,
    sponsor: "Direktur Produksi",
  },
  {
    name: "Hilirisasi",
    health: 78,
    progress: 58,
    status: "On Track",
    benefitYtdRpT: 0.39,
    sponsor: "Direktur Pemasaran",
  },
  {
    name: "Digitalisasi & ERP",
    health: 71,
    progress: 57,
    status: "On Track",
    benefitYtdRpT: 0.13,
    sponsor: "Direktur Keuangan & MR",
  },
  {
    name: "Swasembada Gula 2028",
    health: 64,
    progress: 40,
    status: "At Risk",
    benefitYtdRpT: 0.14,
    sponsor: "Direktur Utama SGN",
  },
  {
    name: "Dekarbonisasi & EBT",
    health: 69,
    progress: 51,
    status: "At Risk",
    benefitYtdRpT: 0.11,
    sponsor: "Direktur Perencanaan",
  },
  {
    name: "Restrukturisasi Portofolio",
    health: 76,
    progress: 62,
    status: "On Track",
    benefitYtdRpT: 0.31,
    sponsor: "Direktur Utama Holding",
  },
];

/* ── 3. Sugar Self-Sufficiency — trajektori produksi gula ─────────── */

export interface SugarTrajectoryPoint {
  year: string;
  /** Produksi gula PTPN (rb ton); kosong untuk tahun target. */
  produksiRbTon?: number;
  /** Jalur target menuju swasembada (rb ton). */
  targetRbTon: number;
  /** "Aktual" | "Proyeksi" | "Target". */
  phase: "Aktual" | "Proyeksi" | "Target";
}

/** 2026 = 780 rb ton (baseline, musim giling mulai Mei) → 1.450 rb ton 2028. */
export const sugarTrajectory: SugarTrajectoryPoint[] = [
  { year: "2024", produksiRbTon: 705, targetRbTon: 705, phase: "Aktual" },
  { year: "2025", produksiRbTon: 742, targetRbTon: 760, phase: "Aktual" },
  { year: "2026", produksiRbTon: 780, targetRbTon: 810, phase: "Proyeksi" },
  { year: "2027", targetRbTon: 1080, phase: "Target" },
  { year: "2028", targetRbTon: 1450, phase: "Target" },
];

/** Konteks gap ke swasembada gula konsumsi. */
export const sugarGapNote = {
  kebutuhanNasionalJtTon: 3.4,
  kontribusiTargetPtpn2028JtTon: 1.45,
  catatan:
    "Swasembada gula konsumsi 2028 mensyaratkan produksi PTPN 1,45 jt ton + swasta/rakyat. Proyeksi 2026 (780 rb ton) tertinggal 30 rb ton dari jalur; perluasan areal & rendemen adalah pengungkit kritis.",
};

/* ── 4. Downstream Progress (% kapasitas onstream) ────────────────── */

export interface DownstreamRow {
  name: string;
  /** Kapasitas desain. */
  capacity: string;
  /** % kapasitas yang sudah onstream. */
  onstreamPct: number;
  /** Target onstream penuh. */
  targetOnstream: string;
}

export const downstreamProgress: DownstreamRow[] = [
  { name: "Refinery CPO", capacity: "2.500 ton/hari", onstreamPct: 35, targetOnstream: "Q2 2027" },
  {
    name: "Minyak Goreng Kemasan",
    capacity: "420 rb ton/thn",
    onstreamPct: 52,
    targetOnstream: "Q4 2026",
  },
  { name: "Bioetanol", capacity: "120 rb KL/thn", onstreamPct: 18, targetOnstream: "Q4 2028" },
];

/* ── 5. Digital Maturity per subholding ───────────────────────────── */

export interface DigitalMaturityRow {
  entity: string;
  /** Skor maturitas digital (skala 1-5). */
  maturity: number;
  /** Adopsi tools digital (%). Blended Group = 68%. */
  adoptionPct: number;
}

export const digitalMaturity: DigitalMaturityRow[] = [
  { entity: "Holding", maturity: 3.7, adoptionPct: 79 },
  { entity: "PalmCo", maturity: 3.4, adoptionPct: 74 },
  { entity: "PTPN I", maturity: 2.9, adoptionPct: 61 },
  { entity: "SGN", maturity: 2.6, adoptionPct: 58 },
];

/* ── 6. Transformation Benefits (waterfall per program) ───────────── */

export interface BenefitStep {
  name: string;
  /** Kontribusi benefit YTD (Rp T) — jumlah = 1,86 (baseline). */
  valueRpT: number;
}

export const benefitsWaterfall: BenefitStep[] = [
  { name: "Operational Excellence", valueRpT: 0.78 },
  { name: "Hilirisasi", valueRpT: 0.39 },
  { name: "Restrukturisasi Portofolio", valueRpT: 0.31 },
  { name: "Swasembada Gula 2028", valueRpT: 0.14 },
  { name: "Digitalisasi & ERP", valueRpT: 0.13 },
  { name: "Dekarbonisasi & EBT", valueRpT: 0.11 },
];

/* ── 7. Insight & rekomendasi ─────────────────────────────────────── */

export const stfInsights: StgInsight[] = [
  {
    title: "Swasembada Gula adalah program paling tertinggal",
    text: "Health 64/100, progres 40%, benefit baru Rp 0,14 T. Dua pengungkit terbesar (areal & restrukturisasi PG) menunggu keputusan BOD — eskalasi ke Radirsus Q3.",
    tone: "bad",
  },
  {
    title: "Adopsi digital menahan realisasi benefit ERP",
    text: "Gap adopsi terbesar di SGN (58%) dan PTPN I (61%). Tanpa adopsi ≥80%, benefit digital 2027 (Rp 0,45 T) berisiko mundur dua kuartal.",
    tone: "warn",
  },
  {
    title: "Operational Excellence layak jadi mesin benefit 2026",
    text: "Menyumbang 42% benefit YTD dengan health tertinggi (82). Perluas rollout wave 3 ke 14 PKS dan replikasi ke pabrik karet/teh PTPN I.",
    tone: "good",
  },
];
