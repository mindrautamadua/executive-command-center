/**
 * Data statis halaman Portofolio Inisiatif (/strategi-kinerja/portofolio-inisiatif).
 * Periode acuan: 31 Mei 2026 (YTD). Register induk: stg-core.ts (28 inisiatif).
 */

import {
  initiatives,
  type InitiativeStatus,
  type InitiativeTheme,
  type StgInsight,
  type StgKpi,
} from "./stg-core";

/* ── 1. KPI Strip ─────────────────────────────────────────────────── */

export const spiKpi: StgKpi[] = [
  {
    label: "Inisiatif Strategis",
    value: "28",
    sub: "5 Tema RJPP 2025-2029",
    compare: "Stabil vs Q1 2026",
    icon: "initiative",
    tone: "blue",
  },
  {
    label: "Nilai Target 2029",
    value: "Rp 12,4 T",
    sub: "EBITDA Uplift Kumulatif",
    compare: "Baseline RJPP",
    icon: "value",
    tone: "teal",
  },
  {
    label: "Kebutuhan Investasi",
    value: "Rp 21,8 T",
    sub: "Teralokasi Rp 14,9 T (68%)",
    subDanger: true,
    delta: "+Rp 1,2 T",
    trend: "up",
    deltaTone: "bad",
    compare: "vs RJPP awal",
    icon: "invest",
    tone: "amber",
  },
  {
    label: "Inisiatif On Track",
    value: "61%",
    sub: "17 dari 28 Inisiatif",
    delta: "+7 pts",
    trend: "up",
    deltaTone: "good",
    compare: "vs Q1 2026",
    icon: "target",
    tone: "green",
  },
];

/* ── 2. Initiative by Theme (stacked status per tema) ─────────────── */

export interface ThemeStatusRow {
  theme: InitiativeTheme;
  onTrack: number;
  atRisk: number;
  offTrack: number;
}

/** Total 17/8/3 — konsisten register stg-core. */
export const initiativeByTheme: ThemeStatusRow[] = [
  { theme: "Operational Excellence", onTrack: 6, atRisk: 2, offTrack: 0 },
  { theme: "Hilirisasi", onTrack: 5, atRisk: 1, offTrack: 0 },
  { theme: "Swasembada Gula", onTrack: 1, atRisk: 2, offTrack: 2 },
  { theme: "Digital", onTrack: 2, atRisk: 2, offTrack: 0 },
  { theme: "EBT & Dekarbonisasi", onTrack: 3, atRisk: 1, offTrack: 1 },
];

/* ── 3. Status Board — 10 inisiatif prioritas ─────────────────────── */

export interface StatusBoardRow {
  id: string;
  name: string;
  owner: string;
  progress: number;
  status: InitiativeStatus;
  nextMilestone: string;
}

export const statusBoard: StatusBoardRow[] = [
  {
    id: "STG-09",
    name: "Refinery CPO Terintegrasi",
    owner: "PalmCo",
    progress: 58,
    status: "On Track",
    nextMilestone: "Mechanical completion train 1 — Sep 2026",
  },
  {
    id: "STG-15",
    name: "Revitalisasi 5 PG Prioritas",
    owner: "SGN",
    progress: 46,
    status: "At Risk",
    nextMilestone: "Commissioning PG Glenmore — Agu 2026",
  },
  {
    id: "STG-16",
    name: "Perluasan Areal Tebu 60 Rb Ha",
    owner: "SGN",
    progress: 28,
    status: "Off Track",
    nextMilestone: "Land clearing 12 rb ha gelombang II — Jul 2026",
  },
  {
    id: "STG-24",
    name: "Biogas 18 PKS (POME-to-Power)",
    owner: "PalmCo",
    progress: 57,
    status: "On Track",
    nextMilestone: "COD 3 unit biogas — Okt 2026",
  },
  {
    id: "STG-20",
    name: "ERP Terintegrasi Group (S/4HANA)",
    owner: "Holding",
    progress: 54,
    status: "At Risk",
    nextMilestone: "Go-live wave 2 (SGN) — Nov 2026",
  },
  {
    id: "STG-10",
    name: "Ekspansi Minyak Goreng Kemasan",
    owner: "PalmCo",
    progress: 64,
    status: "On Track",
    nextMilestone: "Onstream lini kemasan 2 — Sep 2026",
  },
  {
    id: "STG-11",
    name: "Kemitraan Bioetanol Tebu",
    owner: "SGN",
    progress: 38,
    status: "At Risk",
    nextMilestone: "Final term sheet mitra — Jul 2026",
  },
  {
    id: "STG-03",
    name: "Percepatan Replanting Sawit",
    owner: "PalmCo",
    progress: 61,
    status: "On Track",
    nextMilestone: "Tanam ulang 9,4 rb ha semester II — Des 2026",
  },
  {
    id: "STG-19",
    name: "Restrukturisasi 11 PG Non-Kompetitif",
    owner: "SGN",
    progress: 22,
    status: "Off Track",
    nextMilestone: "Keputusan skema per PG — menunggu BOD",
  },
  {
    id: "STG-01",
    name: "Ekselensi Operasional PKS",
    owner: "PalmCo",
    progress: 72,
    status: "On Track",
    nextMilestone: "Rollout wave 3 (14 PKS) — Agu 2026",
  },
];

/* ── 4. Impact vs Effort (scatter) ────────────────────────────────── */

export interface ImpactEffortPoint {
  name: string;
  theme: InitiativeTheme;
  /** Sumbu X: effort = kebutuhan investasi (Rp T). */
  effortRpT: number;
  /** Sumbu Y: impact = target EBITDA uplift 2029 (Rp T). */
  impactRpT: number;
  status: InitiativeStatus;
}

/** 28 titik — diturunkan langsung dari register inisiatif. */
export const impactEffort: ImpactEffortPoint[] = initiatives.map((i) => ({
  name: i.name,
  theme: i.theme,
  effortRpT: i.investRpT,
  impactRpT: i.valueTargetRpT,
  status: i.status,
}));

/* ── 5. At-Risk Initiatives — 8 inisiatif + akar masalah ──────────── */

export interface AtRiskRow {
  id: string;
  name: string;
  owner: string;
  progress: number;
  /** Akar masalah utama. */
  rootCause: string;
  /** Tindakan pemulihan yang diusulkan. */
  recovery: string;
}

/** 8 baris = seluruh inisiatif berstatus At Risk di register. */
export const atRiskList: AtRiskRow[] = [
  {
    id: "STG-15",
    name: "Revitalisasi 5 PG Prioritas",
    owner: "SGN",
    progress: 46,
    rootCause: "Keterlambatan pengadaan long-lead equipment (gilingan & boiler) 3 bulan",
    recovery: "Percepatan LC impor + re-sequencing commissioning 2 PG pertama",
  },
  {
    id: "STG-17",
    name: "Peningkatan Rendemen ≥8,5%",
    owner: "SGN",
    progress: 41,
    rootCause: "Kualitas bahan baku tebu rakyat rendah; varietas unggul baru 34% areal",
    recovery: "Insentif kemitraan berbasis rendemen + akselerasi bibit varietas unggul",
  },
  {
    id: "STG-11",
    name: "Kemitraan Bioetanol Tebu",
    owner: "SGN",
    progress: 38,
    rootCause: "Negosiasi term sheet mitra strategis melewati target; isu alokasi feedstock",
    recovery: "Eskalasi keputusan struktur kemitraan ke Radirsus Q3",
  },
  {
    id: "STG-20",
    name: "ERP Terintegrasi Group (S/4HANA)",
    owner: "Holding",
    progress: 54,
    rootCause: "Kesiapan data master SGN 61%; resistensi perubahan proses di unit",
    recovery: "Task force data cleansing + change management wave 2",
  },
  {
    id: "STG-23",
    name: "Digitalisasi Rantai Pasok & Traceability",
    owner: "PalmCo",
    progress: 48,
    rootCause: "Integrasi data plasma & pihak ketiga di bawah target (TTP 92,4%)",
    recovery: "Onboarding digital 338 kebun plasma bertahap s.d. Q1 2027",
  },
  {
    id: "STG-26",
    name: "PLTS Atap & Ground-Mounted 30 MWp",
    owner: "Holding",
    progress: 39,
    rootCause: "Perizinan interkoneksi & skema power wheeling belum final",
    recovery: "Paralelkan izin per klaster; prioritas lokasi captive use",
  },
  {
    id: "STG-05",
    name: "Revitalisasi Pabrik Karet & Teh",
    owner: "PTPN I",
    progress: 44,
    rootCause: "Margin karet/teh tipis menahan justifikasi capex tahap II",
    recovery: "Revisi scope ke pabrik dengan volume terjamin; sisanya masuk opsi KSO",
  },
  {
    id: "STG-08",
    name: "Perbaikan Tata Kelola Aset Kebun",
    owner: "PTPN I",
    progress: 41,
    rootCause: "Data legalitas aset belum lengkap di 3 regional; sengketa lahan aktif",
    recovery: "Sinkronisasi dengan program sertifikasi HGU & tim penyelesaian sengketa",
  },
];

/* ── 6. Funding by Theme (kebutuhan vs alokasi) ───────────────────── */

export interface FundingRow {
  theme: InitiativeTheme;
  /** Kebutuhan investasi (Rp T) — jumlah = 21,8. */
  kebutuhanRpT: number;
  /** Alokasi disetujui (Rp T) — jumlah = 14,9. */
  alokasiRpT: number;
}

export const fundingByTheme: FundingRow[] = [
  { theme: "Operational Excellence", kebutuhanRpT: 3.4, alokasiRpT: 2.9 },
  { theme: "Hilirisasi", kebutuhanRpT: 6.9, alokasiRpT: 4.8 },
  { theme: "Swasembada Gula", kebutuhanRpT: 5.6, alokasiRpT: 3.2 },
  { theme: "Digital", kebutuhanRpT: 1.7, alokasiRpT: 1.4 },
  { theme: "EBT & Dekarbonisasi", kebutuhanRpT: 4.2, alokasiRpT: 2.6 },
];

/* ── 7. Insight & rekomendasi ─────────────────────────────────────── */

export const spiInsights: StgInsight[] = [
  {
    title: "Konsentrasi risiko di tema Swasembada Gula",
    text: "4 dari 5 inisiatif gula tidak on track (2 At Risk, 2 Off Track) dengan gap alokasi terbesar (Rp 2,4 T). Perlu keputusan restrukturisasi PG sebelum alokasi tambahan.",
    tone: "bad",
  },
  {
    title: "Quick win: kuadran dampak tinggi–effort rendah",
    text: "Ekselensi PKS, pemupukan presisi, dan sentralisasi pengadaan (uplift Rp 1,57 T, investasi Rp 1,43 T) berprogres >65% — kandidat percepatan benefit 2026.",
    tone: "good",
  },
  {
    title: "Hilirisasi butuh kepastian funding mix",
    text: "Gap alokasi hilirisasi Rp 2,1 T terkonsentrasi di refinery tahap II; opsi project financing / kemitraan perlu diputus sebelum FID Q4 2026.",
    tone: "warn",
  },
];
