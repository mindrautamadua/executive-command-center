/**
 * Data statis dimensi ESG & Sustainability (/esg-sustainability).
 * Periode acuan: Mei 2026 (YTD), data per 31 Mei 2026.
 *
 * File ini memuat halaman Executive Overview, Sertifikasi Berkelanjutan,
 * Emisi & Jejak Karbon, dan Program Dekarbonisasi; empat halaman lain
 * (EUDR, Lingkungan Hayati, Sosial & Plasma, Rating & Pendanaan) ada di
 * esg-data-detail.ts. Angka kanonik mengutip src/lib/group-baseline.ts.
 */

import { BASELINE_TRUST, ESG, PEMASARAN, PRODUKSI } from "./group-baseline";
import { PALETTE } from "./chart-palette";
import type { DimensionDataTrust } from "./dimension-menu";

/* ══════════════════════════════════════════════════════════════════════
   TIPE BERSAMA ANTAR-HALAMAN ESG
   ══════════════════════════════════════════════════════════════════════ */

/** KPI mini untuk strip halaman detail (bukan overview). */
export interface EsgPageKpi {
  label: string;
  value: string;
  /** Sufiks kecil di samping nilai, mis. "/100" atau " tCO2e". */
  valueSuffix?: string;
  sub: string;
  delta?: string;
  trend?: "up" | "down";
  deltaTone?: "good" | "bad";
  tone: "green" | "blue" | "teal" | "amber" | "red" | "purple";
}

/** Pasangan insight → rekomendasi di kartu bawah tiap halaman. */
export interface EsgInsight {
  insight: string;
  rekomendasi: string;
}

/** Item keputusan BOD (dipakai overview, dekarbonisasi, rating). */
export interface EsgDecision {
  title: string;
  impact: "High Impact" | "Medium Impact" | "Low Impact";
  tone: "red" | "amber" | "green";
  context: string;
  rekomendasi: string;
  due: string;
}

/** Status RAG program. */
export type RagStatus = "Hijau" | "Amber" | "Merah";

export const RAG_COLOR: Record<RagStatus, string> = {
  Hijau: PALETTE.green,
  Amber: PALETTE.amber,
  Merah: PALETTE.red,
};

/* ══════════════════════════════════════════════════════════════════════
   1. EXECUTIVE OVERVIEW (/esg-sustainability)
   ══════════════════════════════════════════════════════════════════════ */

/* ── 1a. Data Trust ───────────────────────────────────────────────── */

export const esgDataTrust: DimensionDataTrust = {
  asOf: BASELINE_TRUST.asOf,
  lastRefresh: BASELINE_TRUST.lastRefresh,
  coverage: "92,4%",
  quality: "91,8%",
  sources: ["Sustainability Rpt", "SIML", "Satelit/GIS", "PROPER"],
};

/* ── 1b. KPI Strip ────────────────────────────────────────────────── */

export interface EsgKpi {
  label: string;
  value: string;
  valueSuffix?: string;
  sub: string;
  delta?: string;
  trend?: "up" | "down";
  deltaTone?: "good" | "bad";
  compare: string;
  icon: "score" | "cert" | "emission" | "eudr" | "incident" | "plasma" | "tjsl";
  tone: "green" | "blue" | "teal" | "amber" | "red" | "pink";
}

export const esgKpi: EsgKpi[] = [
  {
    label: "Skor ESG Komposit",
    value: "72,4", // = ESG.skorKomposit
    valueSuffix: "/100",
    sub: "Kategori: Baik · komposit 6 pilar",
    delta: "+1,8 pts",
    trend: "up",
    deltaTone: "good",
    compare: "vs FY 2025",
    icon: "score",
    tone: "green",
  },
  {
    label: "Sertifikasi ISPO",
    value: "88,2%", // = ESG.ispoCoveragePct
    sub: "Areal inti · 64/76 unit tersertifikasi",
    delta: "+2,4 pts",
    trend: "up",
    deltaTone: "good",
    compare: "vs Des 2025",
    icon: "cert",
    tone: "blue",
  },
  {
    label: "Intensitas Emisi",
    value: "1,82", // = ESG.intensitasEmisiTco2ePerTonCpo
    valueSuffix: " tCO2e/ton CPO",
    sub: "Scope 1+2 · target 1,48 (2030)",
    delta: "-4,2%",
    trend: "down",
    deltaTone: "good",
    compare: "vs FY 2025",
    icon: "emission",
    tone: "teal",
  },
  {
    label: "EUDR Readiness",
    value: "78", // = ESG.eudrReadiness
    valueSuffix: "/100",
    sub: "Geolokasi 87,6% areal · TTP 92,4% volume",
    delta: "+6 pts",
    trend: "up",
    deltaTone: "good",
    compare: "vs Des 2025",
    icon: "eudr",
    tone: "amber",
  },
  {
    label: "Insiden Lingkungan Signifikan",
    value: "2",
    sub: "YTD · keduanya selesai ditangani",
    delta: "-1",
    trend: "down",
    deltaTone: "good",
    compare: "vs YTD 2025",
    icon: "incident",
    tone: "red",
  },
  {
    label: "Petani Plasma Binaan",
    value: "61.400",
    sub: "KK · areal kemitraan 82 rb ha",
    delta: "+3,1%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Des 2025",
    icon: "plasma",
    tone: "pink",
  },
  {
    label: "Penyaluran TJSL",
    value: "Rp 186 M", // = ESG.tjslYtdRpM
    sub: "YTD · 42,3% RKAP FY Rp 440 M",
    delta: "+12,4%",
    trend: "up",
    deltaTone: "good",
    compare: "vs YTD 2025",
    icon: "tjsl",
    tone: "green",
  },
];

/* ── 1c. ESG Intelligence ─────────────────────────────────────────── */

export interface EsgSignal {
  no: string;
  title: string;
  text: string;
  impactLabel: string;
  impactValue: string;
  tone: "red" | "amber" | "green";
}

export const esgIntelligence: EsgSignal[] = [
  {
    no: "01",
    title: "Jalur Dekarbonisasi -30% Sedikit Tertinggal",
    text: "Intensitas emisi 1,82 tCO2e/ton CPO (progres -14,2% dari baseline 2019) berada di belakang jalur target 2026 sebesar 1,71. FID biogas batch-3 (Rp 420 M) adalah lever terbesar untuk kembali on-track.",
    impactLabel: "Gap ke Jalur 2026",
    impactValue: "+0,11 tCO2e/ton",
    tone: "amber",
  },
  {
    no: "02",
    title: "EUDR: 12,4% Polygon Belum Lengkap",
    text: "Ekspor terpapar EU 18% volume CPO (nilai setahun Rp 4,1 T) wajib due-diligence statement per shipment. Geolokasi polygon baru 87,6% areal; gap terkonsentrasi di pasokan plasma & pihak ketiga.",
    impactLabel: "Nilai Ekspor Terpapar",
    impactValue: "Rp 4,1 T",
    tone: "red",
  },
  {
    no: "03",
    title: "ESG Mulai Menghasilkan Nilai Finansial",
    text: "Premi CSPO Rp 94 M YTD ditambah step-down margin SLL 12,5 bps (outstanding Rp 6,5 T) yang telah terverifikasi — total manfaat ±Rp 97 M YTD, memperkuat business case percepatan RSPO.",
    impactLabel: "Manfaat Finansial YTD",
    impactValue: "±Rp 97 M",
    tone: "green",
  },
];

/* ── 1d. ESG Pillar Radar ─────────────────────────────────────────── */

export interface EsgPillarAxis {
  axis: string;
  /** Skor pilar 0-100. */
  score: number;
  /** Target internal 2027. */
  target: number;
}

/** Skor komposit 72,4 = rata-rata tertimbang (bukan rata-rata sederhana). */
export const pillarRadar: EsgPillarAxis[] = [
  { axis: "Emisi", score: 68, target: 78 },
  { axis: "Sertifikasi", score: 84, target: 90 },
  { axis: "Biodiversitas", score: 71, target: 78 },
  { axis: "Sosial", score: 76, target: 82 },
  { axis: "Governance", score: 92, target: 94 },
  { axis: "Rantai Pasok", score: 65, target: 80 },
];

/* ── 1e. Emission Trajectory (target -30% pada 2030) ──────────────── */

export interface EmissionTrajectoryPoint {
  year: string;
  /** Intensitas aktual (tCO2e/ton CPO); null untuk tahun mendatang. */
  aktual: number | null;
  /** Jalur target linear 2,12 (2019) → 1,48 (2030, -30%). */
  target: number;
}

/** Progres saat ini -14,2% dari baseline 2019 (2,12 → 1,82). */
export const emissionTrajectory: EmissionTrajectoryPoint[] = [
  { year: "2019", aktual: 2.12, target: 2.12 },
  { year: "2020", aktual: 2.09, target: 2.06 },
  { year: "2021", aktual: 2.05, target: 2.0 },
  { year: "2022", aktual: 2.01, target: 1.95 },
  { year: "2023", aktual: 1.96, target: 1.89 },
  { year: "2024", aktual: 1.9, target: 1.83 },
  { year: "2025", aktual: 1.86, target: 1.77 },
  { year: "2026", aktual: 1.82, target: 1.71 }, // aktual = YTD Mei 2026
  { year: "2027", aktual: null, target: 1.65 },
  { year: "2028", aktual: null, target: 1.6 },
  { year: "2029", aktual: null, target: 1.54 },
  { year: "2030", aktual: null, target: 1.48 },
];

/* ── 1f. Cakupan Sertifikasi Kompak per Subholding ────────────────── */

export interface CertCoverageRow {
  subholding: string;
  /** % areal inti tersertifikasi ISPO. */
  ispoPct: number;
  /** % areal inti tersertifikasi RSPO. */
  rspoPct: number;
}

/** Tertimbang areal: ISPO grup 88,2% · RSPO grup 36,4% (PalmCo dominan). */
export const certCoverageCompact: CertCoverageRow[] = [
  { subholding: "PalmCo", ispoPct: 89.4, rspoPct: 38.4 },
  { subholding: "SupportingCo", ispoPct: 72.4, rspoPct: 8.2 },
];

/* ── 1g. ESG Rating Card ──────────────────────────────────────────── */

export interface EsgRatingTrendPoint {
  year: string;
  /** Sustainalytics ESG Risk Score — makin rendah makin baik. */
  score: number;
}

export interface EsgRatingCard {
  agency: string;
  score: number;
  band: string;
  /** Arah membaik (skor risiko turun). */
  trendTone: "good" | "bad";
  trend: EsgRatingTrendPoint[];
}

export const esgRating: EsgRatingCard = {
  agency: "Sustainalytics ESG Risk",
  score: 26.4,
  band: "Medium Risk",
  trendTone: "good",
  trend: [
    { year: "2023", score: 31.2 },
    { year: "2024", score: 29.5 },
    { year: "2025", score: 27.8 },
    { year: "2026", score: 26.4 },
  ],
};

/* ── 1h. Alerts & Notifications ───────────────────────────────────── */

export interface EsgAlert {
  title: string;
  text: string;
  time: string;
  tone: "red" | "amber" | "green" | "blue";
}

export const esgAlerts: EsgAlert[] = [
  {
    title: "Kontrak Q4 ke EU Wajib DDS Lengkap",
    text: "Enforcement EUDR telah berlaku; 12,4% polygon geolokasi belum lengkap — harus tuntas sebelum kontrak pengapalan Q4 2026.",
    time: "Today",
    tone: "red",
  },
  {
    title: "2 Alert Satelit dalam Investigasi",
    text: "Alert deforestasi Regional 3 (Riau, 4,2 ha) dan Regional 5 (Kalbar, 2,8 ha) sedang verifikasi lapangan; 12 alert lain YTD terbukti false positive.",
    time: "1 hari yang lalu",
    tone: "amber",
  },
  {
    title: "IPAL 2 Regional Mendekati Baku Mutu",
    text: "Kepatuhan effluent Regional 3 (94,2%) dan Regional 5 (93,6%) di bawah ambang internal 95%; perbaikan kolam limbah berjalan.",
    time: "2 hari yang lalu",
    tone: "amber",
  },
  {
    title: "Step-down Margin SLL 12,5 bps Tercapai",
    text: "Verifikasi KPI sustainability-linked loan Rp 6,5 T lulus — margin turun 12,5 bps efektif Juni 2026.",
    time: "4 hari yang lalu",
    tone: "green",
  },
];

/* ── 1i. BOD Decision Center ──────────────────────────────────────── */

export const esgDecisions: EsgDecision[] = [
  {
    title: "Capex Biogas Batch-3 Rp 420 M",
    impact: "High Impact",
    tone: "red",
    context:
      "FID 5 PKS biogas batch-3 menunggu persetujuan; lever terbesar menutup gap jalur -30% (intensitas 1,82 vs jalur 1,71).",
    rekomendasi:
      "Setujui FID Rp 420 M dengan target COD bertahap H2 2027; prioritaskan PKS kapasitas ≥45 ton TBS/jam.",
    due: "Q3 2026",
  },
  {
    title: "Mandat EUDR Taskforce Lintas Fungsi",
    impact: "High Impact",
    tone: "amber",
    context:
      "Gap polygon 12,4% areal dan DDS per shipment butuh koordinasi pemasaran-produksi-IT; ekspor EU 18% vol CPO terpapar.",
    rekomendasi:
      "Tetapkan taskforce EUDR di bawah Direktur Pemasaran dengan KPI 100% polygon sebelum kontrak Q4 2026.",
    due: "Q3 2026",
  },
  {
    title: "Target RSPO 45% Areal pada 2027",
    impact: "Medium Impact",
    tone: "green",
    context:
      "Cakupan RSPO 36,4% areal; premi CSPO USD 18,4/ton menghasilkan Rp 94 M YTD — perluasan sertifikasi ber-payback cepat.",
    rekomendasi:
      "Tetapkan target RSPO 45% areal 2027 dan alokasikan biaya audit dalam RKAP 2027.",
    due: "Q4 2026",
  },
];

/* ── 1j. Insight & Rekomendasi ────────────────────────────────────── */

export const esgInsights: EsgInsight[] = [
  {
    insight:
      "Intensitas emisi turun konsisten (-4,2%/thn) namun 0,11 poin di belakang jalur -30%; seluruh gap dapat ditutup oleh biogas batch-3 dan efisiensi boiler.",
    rekomendasi:
      "Percepat FID biogas batch-3 (Q3 2026) dan kunci kontraktor EPC sebelum eskalasi harga.",
  },
  {
    insight:
      "Premi CSPO Rp 94 M YTD baru berasal dari 36,4% areal RSPO — tiap 10 pts kenaikan cakupan bernilai ±Rp 26 M premi setahun.",
    rekomendasi:
      "Sinkronkan pipeline audit RSPO dengan resertifikasi ISPO agar biaya audit gabungan lebih efisien.",
  },
  {
    insight:
      "Cakupan HRDD 84,6% adalah pilar terlemah penilaian sosial Sustainalytics — selaras temuan training compliance di Risk & Compliance SDM.",
    rekomendasi:
      "Perluas HRDD ke seluruh unit dan pemasok inti sebelum asesmen rating 2027.",
  },
];

/* ══════════════════════════════════════════════════════════════════════
   2. SERTIFIKASI BERKELANJUTAN (/esg-sustainability/sertifikasi)
   ══════════════════════════════════════════════════════════════════════ */

/* ── 2a. KPI Strip ────────────────────────────────────────────────── */

export const certKpi: EsgPageKpi[] = [
  {
    label: "Sertifikasi ISPO",
    value: "88,2%",
    sub: "Areal inti · 64/76 unit tersertifikasi",
    delta: "+2,4 pts",
    trend: "up",
    deltaTone: "good",
    tone: "green",
  },
  {
    label: "Sertifikasi RSPO",
    value: "36,4%",
    sub: "Areal inti · target 45% pada 2027",
    delta: "+3,8 pts",
    trend: "up",
    deltaTone: "good",
    tone: "blue",
  },
  {
    label: "ISCC EU",
    value: "12",
    valueSuffix: " PKS",
    sub: "Dari 36 PKS · basis ekspor biofuel",
    delta: "+2",
    trend: "up",
    deltaTone: "good",
    tone: "teal",
  },
  {
    label: "Sertifikat Habis ≤12 Bulan",
    value: "9",
    sub: "Perlu resertifikasi s.d. Mei 2027",
    delta: "+3",
    trend: "up",
    deltaTone: "bad",
    tone: "amber",
  },
];

/* ── 2b. Matriks Sertifikasi Subholding × Skema ───────────────────── */

export interface CertMatrixRow {
  subholding: string;
  skema: "ISPO" | "RSPO" | "ISCC EU" | "ISO 14001";
  certified: number;
  total: number;
  /** % areal tersertifikasi; null jika basis unit (ISCC/ISO). */
  arealPct: number | null;
  status: "On-track" | "Perlu Akselerasi" | "Baseline";
}

/**
 * Basis 76 unit sertifikasi = 58 unit PalmCo + 18 unit SupportingCo
 * (kebun & PKS); ISPO 64/76. SGN memakai ISO 14001 (di luar basis 76).
 */
export const certMatrix: CertMatrixRow[] = [
  { subholding: "PalmCo", skema: "ISPO", certified: 52, total: 58, arealPct: 89.4, status: "On-track" },
  { subholding: "PalmCo", skema: "RSPO", certified: 14, total: 58, arealPct: 38.4, status: "Perlu Akselerasi" },
  { subholding: "PalmCo", skema: "ISCC EU", certified: 12, total: 36, arealPct: null, status: "On-track" },
  { subholding: "SupportingCo", skema: "ISPO", certified: 12, total: 18, arealPct: 72.4, status: "Perlu Akselerasi" },
  { subholding: "SupportingCo", skema: "RSPO", certified: 2, total: 18, arealPct: 8.2, status: "Baseline" },
  { subholding: "SGN", skema: "ISO 14001", certified: 14, total: 17, arealPct: null, status: "On-track" },
];

/* ── 2c. Pipeline Sertifikasi per Kuartal ─────────────────────────── */

export interface CertPipelineQuarter {
  kuartal: string;
  /** Unit dalam audit stage 1. */
  stage1: number;
  /** Unit dalam audit stage 2. */
  stage2: number;
  /** Unit menutup non-conformity. */
  closingNc: number;
  /** Sertifikat terbit. */
  terbit: number;
}

/** 12 unit pipeline ISPO → 70/76 unit (≥90% areal) pada pertengahan 2027. */
export const certPipeline: CertPipelineQuarter[] = [
  { kuartal: "Q3 2026", stage1: 4, stage2: 3, closingNc: 2, terbit: 1 },
  { kuartal: "Q4 2026", stage1: 3, stage2: 3, closingNc: 3, terbit: 1 },
  { kuartal: "Q1 2027", stage1: 2, stage2: 3, closingNc: 3, terbit: 2 },
  { kuartal: "Q2 2027", stage1: 2, stage2: 2, closingNc: 3, terbit: 2 },
];

/* ── 2d. Non-Conformity per Prinsip ISPO ──────────────────────────── */

export interface NcBreakdownRow {
  prinsip: string;
  jumlah: number;
  pct: number;
  color: string;
}

/** Total 118 temuan NC audit ISPO 12 bulan terakhir. */
export const ncBreakdown: NcBreakdownRow[] = [
  { prinsip: "SDM & K3", jumlah: 40, pct: 34, color: PALETTE.red },
  { prinsip: "Pengelolaan Lingkungan", jumlah: 26, pct: 22, color: PALETTE.amber },
  { prinsip: "Legalitas Lahan", jumlah: 19, pct: 16, color: PALETTE.blue },
  { prinsip: "Tanggung Jawab Sosial", jumlah: 14, pct: 12, color: PALETTE.teal },
  { prinsip: "Sistem Manajemen", jumlah: 11, pct: 9, color: PALETTE.purple },
  { prinsip: "Ekonomi Berkelanjutan", jumlah: 5, pct: 4, color: PALETTE.greenSoft },
  { prinsip: "Perbaikan Berkelanjutan", jumlah: 3, pct: 3, color: PALETTE.slate },
];

/** NC SDM/K3 terbanyak — selaras training compliance 84,6% (rc-data). */
export const ncFootnote =
  "Temuan NC prinsip SDM & K3 (34%) terkonsentrasi pada sertifikasi operator dan kelengkapan APD — konsisten dengan Training Compliance 84,6% di modul Risk & Compliance SDM.";

/* ── 2e. Nilai Premi Sertifikasi (CSPO) ───────────────────────────── */

export interface PremiumMonthPoint {
  bulan: string;
  /** Realisasi premi CSPO bulanan (Rp M). */
  rpM: number;
}

export interface PremiumValue {
  /** Premi rata-rata CSPO di atas harga konvensional. */
  premiUsdPerTon: number;
  /** Realisasi premi YTD (Rp M). */
  realisasiYtdRpM: number;
  /** Volume CSPO terjual YTD (rb ton) — ±32% dari CPO YTD 0,99 jt ton. */
  volumeCspoRbTon: number;
  monthly: PremiumMonthPoint[];
}

export const premiumValue: PremiumValue = {
  premiUsdPerTon: 18.4,
  realisasiYtdRpM: 94,
  volumeCspoRbTon: 314,
  monthly: [
    { bulan: "Jan", rpM: 14 },
    { bulan: "Feb", rpM: 16 },
    { bulan: "Mar", rpM: 19 },
    { bulan: "Apr", rpM: 21 },
    { bulan: "Mei", rpM: 24 },
  ],
};

/* ── 2f. Kalender Kedaluwarsa Sertifikat ──────────────────────────── */

export interface CertExpiryItem {
  unit: string;
  skema: "ISPO" | "RSPO" | "ISCC EU";
  habis: string;
  /** Sisa bulan dari 31 Mei 2026. */
  sisaBulan: number;
  status: "Audit terjadwal" | "Closing NC" | "Perlu penjadwalan";
}

/** 9 sertifikat habis ≤12 bulan (s.d. Mei 2027). */
export const expiryCalendar: CertExpiryItem[] = [
  { unit: "PKS Adolina", skema: "ISPO", habis: "Jul 2026", sisaBulan: 2, status: "Closing NC" },
  { unit: "Kebun Dolok Ilir", skema: "ISPO", habis: "Agu 2026", sisaBulan: 3, status: "Audit terjadwal" },
  { unit: "PKS Sei Mangkei", skema: "ISCC EU", habis: "Sep 2026", sisaBulan: 4, status: "Audit terjadwal" },
  { unit: "Kebun Rambutan", skema: "RSPO", habis: "Okt 2026", sisaBulan: 5, status: "Audit terjadwal" },
  { unit: "PKS Rejosari", skema: "ISPO", habis: "Nov 2026", sisaBulan: 6, status: "Perlu penjadwalan" },
  { unit: "Kebun Sei Baruhur", skema: "ISPO", habis: "Jan 2027", sisaBulan: 8, status: "Perlu penjadwalan" },
  { unit: "PKS Terantam", skema: "ISPO", habis: "Feb 2027", sisaBulan: 9, status: "Audit terjadwal" },
  { unit: "Kebun Bekri", skema: "RSPO", habis: "Mar 2027", sisaBulan: 10, status: "Perlu penjadwalan" },
  { unit: "PKS Betung", skema: "ISPO", habis: "Apr 2027", sisaBulan: 11, status: "Perlu penjadwalan" },
];

/* ── 2g. Insight & Rekomendasi ────────────────────────────────────── */

export const certInsights: EsgInsight[] = [
  {
    insight:
      "64/76 unit ISPO dengan pipeline 12 unit — target ≥90% areal 2027 (KPI SLL) tercapai bila tidak ada slip audit >1 kuartal.",
    rekomendasi:
      "Kontrak lembaga sertifikasi multi-tahun untuk mengunci slot audit Q3 2026–Q2 2027.",
  },
  {
    insight:
      "3 sertifikat berstatus 'perlu penjadwalan' pada semester pertama pipeline — risiko lapse yang dapat menghentikan klaim premi unit terkait.",
    rekomendasi:
      "Eskalasi penjadwalan audit PKS Rejosari, Kebun Sei Baruhur, dan Kebun Bekri bulan ini.",
  },
  {
    insight:
      "Premi CSPO USD 18,4/ton pada 314 rb ton CSPO YTD — perluasan RSPO ke 45% areal menambah potensi premi ±Rp 22 M/tahun.",
    rekomendasi:
      "Prioritaskan sertifikasi RSPO pada kebun pemasok PKS ISCC agar volume bersertifikat ganda naik.",
  },
];

/* ══════════════════════════════════════════════════════════════════════
   3. EMISI & JEJAK KARBON (/esg-sustainability/emisi-karbon)
   ══════════════════════════════════════════════════════════════════════ */

/* ── 3a. KPI Strip ────────────────────────────────────────────────── */

export const emisiKpi: EsgPageKpi[] = [
  {
    label: "Emisi Scope 1",
    value: "4,9 jt",
    valueSuffix: " tCO2e",
    sub: "Setahunkan · POME, land use, boiler",
    delta: "-3,1%",
    trend: "down",
    deltaTone: "good",
    tone: "teal",
  },
  {
    label: "Emisi Scope 2",
    value: "0,4 jt",
    valueSuffix: " tCO2e",
    sub: "Listrik jaringan (location-based)",
    delta: "-1,8%",
    trend: "down",
    deltaTone: "good",
    tone: "blue",
  },
  {
    label: "Emisi Scope 3 (Estimasi)",
    value: "3,1 jt",
    valueSuffix: " tCO2e",
    sub: "Rantai pasok & penggunaan produk",
    tone: "purple",
  },
  {
    label: "Intensitas Emisi",
    value: "1,82",
    valueSuffix: " tCO2e/ton CPO",
    sub: "Scope 1+2 · benchmark industri 2,1",
    delta: "-4,2%",
    trend: "down",
    deltaTone: "good",
    tone: "green",
  },
  {
    label: "Metana POME",
    value: "41%",
    sub: "Dari Scope 1 · sumber tunggal terbesar",
    delta: "-2,4 pts",
    trend: "down",
    deltaTone: "good",
    tone: "amber",
  },
];

/* ── 3b. Breakdown per Scope (donut) ──────────────────────────────── */

export interface ScopeSlice {
  name: string;
  /** Emisi setahunkan (jt tCO2e). */
  value: number;
  color: string;
}

export const scopeBreakdown: ScopeSlice[] = [
  { name: "Scope 1", value: 4.9, color: PALETTE.teal },
  { name: "Scope 2", value: 0.4, color: PALETTE.blue },
  { name: "Scope 3 (est)", value: 3.1, color: PALETTE.purple },
];

/* ── 3c. Emisi per Sumber ─────────────────────────────────────────── */

export interface EmissionSource {
  sumber: string;
  /** jt tCO2e per tahun. */
  nilaiJtTon: number;
  /** % dari Scope 1+2. */
  pct: number;
  color: string;
}

/** Menjumlah 5,34 jt ≈ Scope 1+2 (5,3 jt; selisih pembulatan). */
export const emissionBySource: EmissionSource[] = [
  { sumber: "POME (metana)", nilaiJtTon: 2.01, pct: 38, color: PALETTE.red },
  { sumber: "Land use & gambut", nilaiJtTon: 1.24, pct: 23, color: PALETTE.amber },
  { sumber: "Boiler & energi", nilaiJtTon: 0.98, pct: 18, color: PALETTE.blue },
  { sumber: "Pupuk (N2O)", nilaiJtTon: 0.67, pct: 13, color: PALETTE.teal },
  { sumber: "Transport & alat berat", nilaiJtTon: 0.44, pct: 8, color: PALETTE.slate },
];

/* ── 3d. Tren Intensitas vs Benchmark ─────────────────────────────── */

export interface IntensityTrendPoint {
  year: string;
  intensitas: number;
  /** Benchmark rata-rata industri sawit (tCO2e/ton CPO). */
  benchmark: number;
}

export const intensityTrend: IntensityTrendPoint[] = [
  { year: "2021", intensitas: 2.05, benchmark: 2.1 },
  { year: "2022", intensitas: 2.01, benchmark: 2.1 },
  { year: "2023", intensitas: 1.96, benchmark: 2.1 },
  { year: "2024", intensitas: 1.9, benchmark: 2.1 },
  { year: "2025", intensitas: 1.86, benchmark: 2.1 },
  { year: "2026", intensitas: 1.82, benchmark: 2.1 },
];

/* ── 3e. Emisi per Subholding ─────────────────────────────────────── */

export interface EmissionBySubholding {
  name: string;
  /** % dari Scope 1+2 grup. */
  pct: number;
  color: string;
}

export const emissionBySubholding: EmissionBySubholding[] = [
  { name: "PalmCo", pct: 78, color: PALETTE.green },
  { name: "SugarCo (SGN)", pct: 17, color: PALETTE.amber },
  { name: "SupportingCo", pct: 5, color: PALETTE.slate },
];

/* ── 3f. Potensi Monetisasi Karbon ────────────────────────────────── */

export interface CarbonPotentialItem {
  mekanisme: string;
  /** Potensi nilai kumulatif s.d. 2030 (Rp M). */
  potensiRpM: number;
}

export interface CarbonPotential {
  /** Total potensi pendapatan karbon kumulatif s.d. 2030 (Rp M). */
  totalRpM: number;
  desc: string;
  breakdown: CarbonPotentialItem[];
}

export const carbonPotential: CarbonPotential = {
  totalRpM: 210,
  desc: "Potensi pendapatan kredit karbon kumulatif s.d. 2030 dari proyek terdaftar SPE-GRK & IDXCarbon, berbasis avoided emission portofolio dekarbonisasi.",
  breakdown: [
    { mekanisme: "Kredit karbon biogas (SPE-GRK)", potensiRpM: 128 },
    { mekanisme: "Kompos & soil carbon", potensiRpM: 48 },
    { mekanisme: "REC solar PV", potensiRpM: 34 },
  ],
};

/* ── 3g. Footnote Metodologi ──────────────────────────────────────── */

export const emisiFootnote =
  "Inventarisasi GRK mengikuti ISO 14064-1 dan GHG Protocol Corporate Standard; Scope 2 metode location-based; Scope 3 estimasi kategori 1, 4, dan 10 (belum diverifikasi pihak ketiga). Intensitas = Scope 1+2 dibagi produksi CPO setahunkan. Data as-of 31 Mei 2026.";

/* ── 3h. Insight & Rekomendasi ────────────────────────────────────── */

export const emisiInsights: EsgInsight[] = [
  {
    insight:
      "POME menyumbang 2,01 jt tCO2e (38% Scope 1+2) — satu sumber yang dapat dipangkas hingga 70% oleh metana capture di seluruh 36 PKS.",
    rekomendasi:
      "Selesaikan biogas batch-3 lalu susun batch-4 agar seluruh PKS besar ter-cover sebelum 2029.",
  },
  {
    insight:
      "Intensitas 1,82 sudah 13% di bawah benchmark industri 2,1 — posisi kompetitif untuk klaim low-carbon CPO ke buyer EU.",
    rekomendasi:
      "Gunakan verifikasi intensitas per PKS (ISCC) sebagai diferensiasi komersial tim pemasaran.",
  },
  {
    insight:
      "Scope 3 (3,1 jt tCO2e) masih estimasi kasar; regulasi CSRD & permintaan buyer mengarah ke pelaporan terverifikasi.",
    rekomendasi:
      "Mulai program primary data pemasok (pupuk & logistik) untuk 2 kategori Scope 3 terbesar pada 2027.",
  },
];

/* ══════════════════════════════════════════════════════════════════════
   4. PROGRAM DEKARBONISASI (/esg-sustainability/dekarbonisasi)
   ══════════════════════════════════════════════════════════════════════ */

/* ── 4a. KPI Strip ────────────────────────────────────────────────── */

export const dekarbKpi: EsgPageKpi[] = [
  {
    label: "Biogas Beroperasi",
    value: "21",
    valueSuffix: " PKS",
    sub: "Kapasitas 38,6 MW · 9 dalam konstruksi",
    delta: "+4",
    trend: "up",
    deltaTone: "good",
    tone: "green",
  },
  {
    label: "Solar PV Terpasang",
    value: "12,4",
    valueSuffix: " MWp",
    sub: "Target 30 MWp pada 2028",
    delta: "+2,8 MWp",
    trend: "up",
    deltaTone: "good",
    tone: "amber",
  },
  {
    label: "Avoided Emission",
    value: "0,62 jt",
    valueSuffix: " tCO2e",
    sub: "YTD · didominasi metana capture",
    delta: "+18,4%",
    trend: "up",
    deltaTone: "good",
    tone: "teal",
  },
  {
    label: "Capex Dekarbonisasi",
    value: "Rp 1,28 T",
    sub: "Realisasi kumulatif · RKAP program Rp 1,9 T",
    delta: "67,4%",
    trend: "up",
    deltaTone: "good",
    tone: "blue",
  },
  {
    label: "Program Aktif",
    value: "12",
    sub: "6 Hijau · 5 Amber · 1 Merah",
    tone: "purple",
  },
];

/* ── 4b. Abatement Waterfall menuju -30% ──────────────────────────── */

export interface AbatementLever {
  lever: string;
  /** Reduksi intensitas (tCO2e/ton CPO) dari baseline 2,12 → 1,48. */
  reduksi: number;
  status: "Sebagian terealisasi" | "Konstruksi" | "Perencanaan";
}

/** Total 0,64 = 2,12 (2019) - 1,48 (target 2030, -30%). */
export const abatementWaterfall: AbatementLever[] = [
  { lever: "Biogas capture POME", reduksi: 0.28, status: "Sebagian terealisasi" },
  { lever: "Efisiensi boiler & steam", reduksi: 0.12, status: "Sebagian terealisasi" },
  { lever: "Composting tankos", reduksi: 0.09, status: "Sebagian terealisasi" },
  { lever: "Lahan & pupuk presisi", reduksi: 0.06, status: "Konstruksi" },
  { lever: "Solar PV", reduksi: 0.05, status: "Konstruksi" },
  { lever: "B30/B40 fleet", reduksi: 0.04, status: "Perencanaan" },
];

/* ── 4c. Portofolio Program (RAG) ─────────────────────────────────── */

export interface DecarbProgram {
  program: string;
  lever: string;
  status: RagStatus;
  progressPct: number;
  /** Dampak tahunan penuh saat selesai (rb tCO2e/tahun). */
  dampakRbTon: number;
  catatan: string;
}

export const programPortfolio: DecarbProgram[] = [
  { program: "Biogas batch-1 (12 PKS)", lever: "Metana capture", status: "Hijau", progressPct: 100, dampakRbTon: 520, catatan: "Beroperasi penuh sejak 2024" },
  { program: "Biogas batch-2 (9 PKS)", lever: "Metana capture", status: "Hijau", progressPct: 92, dampakRbTon: 380, catatan: "9 beroperasi/konstruksi akhir" },
  { program: "Biogas batch-3 (5 PKS)", lever: "Metana capture", status: "Amber", progressPct: 15, dampakRbTon: 210, catatan: "Menunggu FID Rp 420 M" },
  { program: "Composting tankos 28 kebun", lever: "Limbah padat", status: "Hijau", progressPct: 74, dampakRbTon: 160, catatan: "74% tankos terkomposkan" },
  { program: "Solar PV rooftop gelombang 2", lever: "Energi terbarukan", status: "Hijau", progressPct: 41, dampakRbTon: 28, catatan: "12,4 dari 30 MWp" },
  { program: "Efisiensi boiler 36 PKS", lever: "Efisiensi energi", status: "Amber", progressPct: 56, dampakRbTon: 190, catatan: "Retrofit 20 PKS selesai" },
  { program: "Konversi fleet B30/B40", lever: "Bahan bakar", status: "Hijau", progressPct: 68, dampakRbTon: 64, catatan: "Armada angkut utama" },
  { program: "Water management gambut", lever: "Land use", status: "Amber", progressPct: 44, dampakRbTon: 240, catatan: "Regional 3 & 5 prioritas" },
  { program: "Pemupukan presisi (VRA)", lever: "N2O pupuk", status: "Hijau", progressPct: 62, dampakRbTon: 96, catatan: "Berbasis peta kesuburan" },
  { program: "Belt press & land application", lever: "POME", status: "Amber", progressPct: 38, dampakRbTon: 88, catatan: "Izin land application 2 regional" },
  { program: "Elektrifikasi pompa irigasi SGN", lever: "Efisiensi energi", status: "Merah", progressPct: 22, dampakRbTon: 42, catatan: "Terkendala kapasitas jaringan PLN" },
  { program: "PPA excess power biogas", lever: "Energi terbarukan", status: "Amber", progressPct: 30, dampakRbTon: 54, catatan: "Negosiasi tarif dengan PLN" },
];

/* ── 4d. Sebaran Biogas per Regional ──────────────────────────────── */

export interface BiogasRegionalRow {
  regional: string;
  beroperasi: number;
  konstruksi: number;
  /** Kapasitas terpasang beroperasi (MW). */
  kapasitasMw: number;
}

/** Total 21 beroperasi · 9 konstruksi · 38,6 MW — dari 36 PKS grup. */
export const biogasList: BiogasRegionalRow[] = [
  { regional: "Regional 1 (Sumut)", beroperasi: 6, konstruksi: 2, kapasitasMw: 11.2 },
  { regional: "Regional 2 (Sumut)", beroperasi: 5, konstruksi: 1, kapasitasMw: 9.0 },
  { regional: "Regional 3 (Riau)", beroperasi: 4, konstruksi: 3, kapasitasMw: 7.6 },
  { regional: "Regional 4 (Sumsel–Lampung)", beroperasi: 3, konstruksi: 2, kapasitasMw: 5.4 },
  { regional: "Regional 5 (Kalimantan)", beroperasi: 3, konstruksi: 1, kapasitasMw: 5.4 },
];

/* ── 4e. Marginal Abatement Cost (MAC) ────────────────────────────── */

export interface MacCurveItem {
  lever: string;
  /** Biaya abatement (Rp ribu per tCO2e). */
  biayaRbPerTon: number;
  /** Potensi abatement tahunan (rb tCO2e). */
  potensiRbTon: number;
}

/** Diurut dari biaya terendah — biogas paling ekonomis (Rp 86 rb/tCO2e). */
export const macCurve: MacCurveItem[] = [
  { lever: "Biogas capture", biayaRbPerTon: 86, potensiRbTon: 1110 },
  { lever: "Composting tankos", biayaRbPerTon: 124, potensiRbTon: 160 },
  { lever: "Efisiensi boiler", biayaRbPerTon: 145, potensiRbTon: 190 },
  { lever: "Solar PV", biayaRbPerTon: 210, potensiRbTon: 82 },
  { lever: "B30/B40 fleet", biayaRbPerTon: 265, potensiRbTon: 64 },
];

/* ── 4f. Solar Rollout Kumulatif ──────────────────────────────────── */

export interface SolarRolloutPoint {
  year: string;
  /** Kapasitas kumulatif terpasang (MWp); null untuk tahun mendatang. */
  aktual: number | null;
  /** Jalur target menuju 30 MWp (2028). */
  target: number;
}

export const solarRollout: SolarRolloutPoint[] = [
  { year: "2023", aktual: 2.1, target: 2.0 },
  { year: "2024", aktual: 5.8, target: 6.0 },
  { year: "2025", aktual: 9.6, target: 10.0 },
  { year: "2026", aktual: 12.4, target: 14.0 }, // aktual = YTD Mei
  { year: "2027", aktual: null, target: 22.0 },
  { year: "2028", aktual: null, target: 30.0 },
];

/* ── 4g. Decision Center ──────────────────────────────────────────── */

export const dekarbDecisions: EsgDecision[] = [
  {
    title: "FID Biogas Batch-3 (5 PKS)",
    impact: "High Impact",
    tone: "red",
    context:
      "Capex Rp 420 M, abatement 210 rb tCO2e/thn, MAC terendah portofolio (Rp 86 rb/tCO2e); mundur 1 kuartal menggeser jalur -30%.",
    rekomendasi:
      "Setujui FID Q3 2026; sinkronkan dengan potensi kredit karbon SPE-GRK Rp 128 M.",
    due: "Q3 2026",
  },
  {
    title: "PPA Excess Power Biogas ke PLN",
    impact: "Medium Impact",
    tone: "amber",
    context:
      "21 PKS biogas menghasilkan surplus listrik; negosiasi tarif PPA belum final — potensi pendapatan listrik belum termonetisasi.",
    rekomendasi:
      "Mandatkan tim energi menutup PPA minimal 3 lokasi pilot sebelum akhir 2026.",
    due: "Q4 2026",
  },
];

/* ── 4h. Insight & Rekomendasi ────────────────────────────────────── */

export const dekarbInsights: EsgInsight[] = [
  {
    insight:
      "Realisasi capex program Rp 1,28 T (67,4% dari Rp 1,9 T) berjalan sehat, namun 1 program merah (elektrifikasi pompa SGN) tersandera kapasitas jaringan.",
    rekomendasi:
      "Alihkan sementara anggaran pompa SGN ke akselerasi solar PV yang tidak bergantung jaringan.",
  },
  {
    insight:
      "Avoided emission 0,62 jt tCO2e YTD setara ±23% Scope 1+2 prorata — mayoritas dari biogas batch-1/2 yang sudah beroperasi.",
    rekomendasi:
      "Registrasikan seluruh unit biogas ke SPE-GRK agar avoided emission dapat dikonversi menjadi kredit karbon.",
  },
];

/* ── Referensi baseline (guard konsistensi lint) ──────────────────── */

/** Angka acuan yang dipakai halaman ESG — memastikan impor baseline hidup. */
export const ESG_BASELINE_REF = {
  skorKomposit: ESG.skorKomposit,
  ispoCoveragePct: ESG.ispoCoveragePct,
  intensitasEmisi: ESG.intensitasEmisiTco2ePerTonCpo,
  eudrReadiness: ESG.eudrReadiness,
  tjslYtdRpM: ESG.tjslYtdRpM,
  totalPks: PRODUKSI.pks,
  kebunPlasma: PRODUKSI.kebunPlasma,
  eksporPctVolCpo: PEMASARAN.eksporPctVolCpo,
  kursUsdIdr: PEMASARAN.kursUsdIdr,
} as const;
