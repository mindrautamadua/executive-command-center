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
    label: "Performance Opportunity Gap",
    value: "11,8%",
    sub: "Rata-rata Ruang Perbaikan",
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
    sub: "Strong · Benchmark grup 0,68 · Top quartile 0,81",
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
  text: "Performance gap terbesar berasal dari sisi Environmental Supports (Data, Instruments, Incentives) — 64% total gap. Fokus utama: kejelasan ekspektasi & feedback, sistem/tools kerja, dan keterkaitan insentif dengan outcome.",
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

/**
 * Behavior Engineering Model (Thomas F. Gilbert) — 6 sel dalam 2 kelompok:
 * Environmental Supports (Data, Instruments, Incentives) dan
 * Person's Repertory of Behavior (Knowledge, Capacity, Motives).
 */
export const hpiBemOverview = {
  total: "82,1",
  kategori: "Kuat",
  kelompok: [
    {
      judul: "Environmental Supports",
      sel: [
        { label: "Data (Informasi)", kode: "DAT", skor: 76, color: PALETTE.green },
        { label: "Instruments (Sarana)", kode: "INS", skor: 73, color: PALETTE.amber },
        { label: "Incentives (Insentif)", kode: "INC", skor: 81, color: PALETTE.green },
      ],
    },
    {
      judul: "Person's Repertory of Behavior",
      sel: [
        { label: "Knowledge (Pengetahuan)", kode: "KNW", skor: 88, color: PALETTE.green },
        { label: "Capacity (Kapasitas)", kode: "CAP", skor: 89, color: PALETTE.green },
        { label: "Motives (Motif)", kode: "MOT", skor: 86, color: PALETTE.green },
      ],
    },
  ],
  catatan: "Opportunity terbesar berada pada sel Instruments (sarana & sistem kerja).",
};

/* ── 3. Performance Gap Analysis ──────────────────────────────────── */

export const gapAnalysis = {
  avg: "11,8%",
  rows: [
    { name: "Data Gap", value: 2.1, pct: "2,1%", color: PALETTE.blue },
    { name: "Instruments Gap", value: 3.4, pct: "3,4%", color: PALETTE.red },
    { name: "Incentives Gap", value: 2.0, pct: "2,0%", color: PALETTE.amber },
    { name: "Knowledge Gap", value: 1.6, pct: "1,6%", color: PALETTE.teal },
    { name: "Capacity Gap", value: 1.3, pct: "1,3%", color: PALETTE.purple },
    { name: "Motives Gap", value: 1.4, pct: "1,4%", color: PALETTE.greenSoft },
  ],
  catatanHighlight: "Environmental Supports",
  catatan: "menyumbang 7,5% dari 11,8% total gap (64%) — sel Instruments terbesar.",
};

/* ── 4. People Math Profile Cluster ───────────────────────────────── */

export interface ClusterRow {
  name: string;
  pct: string;
  jumlah: string;
  value: number;
  color: string;
}

/** Jumlah seluruh klaster harus = 38.642 (KPI People Math Profiled & center donut). */
export const pmCluster: ClusterRow[] = [
  { name: "The Driver", pct: "31%", jumlah: "11.981", value: 11981, color: PALETTE.blue },
  { name: "The Inspirer", pct: "22%", jumlah: "8.512", value: 8512, color: PALETTE.slate },
  { name: "The Analyst", pct: "18%", jumlah: "6.883", value: 6883, color: PALETTE.teal },
  { name: "The Collaborator", pct: "15%", jumlah: "5.792", value: 5792, color: PALETTE.purple },
  { name: "The Stabilizer", pct: "8%", jumlah: "3.094", value: 3094, color: PALETTE.green },
  { name: "The Pioneer", pct: "6%", jumlah: "2.380", value: 2380, color: PALETTE.amber },
];

export const pmClusterTotal = { value: "38.642", caption: "Orang" };

export const pmClusterCatatan =
  "Klaster membantu memahami pola kekuatan alami individu untuk penempatan & pengembangan.";

/* ── 5. HPI Root Cause Analysis ───────────────────────────────────── */

export const rootCause = {
  header: "Environmental Supports – Gap 7,5% (64% dari total gap)",
  rows: [
    { faktor: "Instruments — Sistem & tools kerja belum optimal", impact: "High", populasi: "12.842 (46%)" },
    { faktor: "Data — Ekspektasi & SOP belum terstandarisasi", impact: "High", populasi: "10.231 (37%)" },
    { faktor: "Data — Feedback kinerja belum rutin & spesifik", impact: "Medium", populasi: "7.421 (27%)" },
    { faktor: "Incentives — Insentif belum terkait outcome kerja", impact: "Medium", populasi: "6.311 (22%)" },
    { faktor: "Instruments — Waktu & beban kerja tidak seimbang", impact: "Low", populasi: "4.008 (14%)" },
  ] as { faktor: string; impact: "High" | "Medium" | "Low"; populasi: string }[],
  catatan: "Estimated Improvement Potential:",
  catatanHighlight: "+8–12%",
  metodologi:
    "Estimasi berbasis model — dari driver ter-asesmen & pola intervensi historis, belum tervalidasi eksperimen terkontrol.",
};

/* ── 6. Intervention Portfolio ────────────────────────────────────── */

/** Kode sel Behavior Engineering Model — lihat `BEM_SEL`. */
export type BemSel = "DAT" | "INS" | "INC" | "KNW" | "CAP" | "MOT";

export const BEM_SEL: Record<BemSel, { nama: string; kelompok: "Environmental" | "Repertory" }> = {
  DAT: { nama: "Data (Informasi)", kelompok: "Environmental" },
  INS: { nama: "Instruments (Sarana)", kelompok: "Environmental" },
  INC: { nama: "Incentives (Insentif)", kelompok: "Environmental" },
  KNW: { nama: "Knowledge (Pengetahuan)", kelompok: "Repertory" },
  CAP: { nama: "Capacity (Kapasitas)", kelompok: "Repertory" },
  MOT: { nama: "Motives (Motif)", kelompok: "Repertory" },
};

export interface IntervensiRow {
  prioritas: number;
  intervensi: string;
  dimensi: BemSel;
  impact: string;
  populasi: string;
  /** Estimasi biaya program (ilustratif — final di business case). */
  cost: string;
  confidence: "High" | "Medium" | "Low";
  status: "Berjalan" | "Pilot" | "Perencanaan";
  valueCost: "Sangat Tinggi" | "Tinggi" | "Sedang";
}

export const intervensiPriority: IntervensiRow[] = [
  { prioritas: 1, intervensi: "Standardisasi Ekspektasi & SOP", dimensi: "DAT", impact: "+4,2%", populasi: "12.842", cost: "Rp 12,5 M", confidence: "High", status: "Berjalan", valueCost: "Sangat Tinggi" },
  { prioritas: 2, intervensi: "Digitalisasi Tools & Sistem Kerja", dimensi: "INS", impact: "+3,1%", populasi: "10.231", cost: "Rp 28,0 M", confidence: "Medium", status: "Pilot", valueCost: "Tinggi" },
  { prioritas: 3, intervensi: "Feedback Loop & Coaching Rutin", dimensi: "DAT", impact: "+2,8%", populasi: "7.421", cost: "Rp 9,8 M", confidence: "Medium", status: "Berjalan", valueCost: "Tinggi" },
  { prioritas: 4, intervensi: "Insentif Berbasis Outcome", dimensi: "INC", impact: "+1,9%", populasi: "6.311", cost: "Rp 4,2 M", confidence: "Medium", status: "Perencanaan", valueCost: "Sedang" },
  { prioritas: 5, intervensi: "Upskilling Analytics & Reporting", dimensi: "KNW", impact: "+1,5%", populasi: "5.927", cost: "Rp 2,6 M", confidence: "High", status: "Berjalan", valueCost: "Sedang" },
];

export const intervensiPortfolioCatatan =
  "Cost & expected impact adalah estimasi perencanaan (ilustratif); angka final mengikuti business case masing-masing intervensi.";

/* ── 7. Employee HPI Profile (contoh) ─────────────────────────────── */

export const contohProfil = {
  nama: "Rizky Pratama",
  jabatan: "Manajer Kebun",
  unit: "PTPN IV",
  badges: ["High Potential", "Ready in 1-2 Years"],
  performance: { skor: "4,3", maks: "/ 5", kategori: "Baik", gap: "12%", gapCaption: "Opportunity" },
  bem: [
    { label: "Data", nilai: "3,7", skor: 74, color: PALETTE.amber },
    { label: "Instruments", nilai: "3,4", skor: 68, color: PALETTE.amber },
    { label: "Incentives", nilai: "3,9", skor: 78, color: PALETTE.green },
    { label: "Knowledge", nilai: "4,3", skor: 86, color: PALETTE.green },
    { label: "Capacity", nilai: "4,4", skor: 88, color: PALETTE.green },
    { label: "Motives", nilai: "4,2", skor: 84, color: PALETTE.green },
  ],
  rootCause: {
    judul: "Instruments – Sistem & Tools",
    poin: ["Reporting masih manual", "Data tidak real-time", "Akses analytical tools terbatas"],
    estimasi: "+8 – 12% Performance",
    estimasiTooltip:
      "Estimasi berbasis model — dari driver ter-asesmen & pola intervensi historis, belum tervalidasi eksperimen terkontrol.",
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
    { text: " seseorang. HPI BEM (Behavior Engineering Model — Gilbert, 6 sel) menjelaskan " },
    { text: "WHY", bold: true },
    { text: " performance belum optimal dan " },
    { text: "HOW", bold: true },
    { text: " memperbaikinya. Metodologi: " },
    { text: "PTPN HPI-BEM v1.0", bold: true },
    { text: " (adaptasi Gilbert BEM, governed) — skor grup merepresentasikan populasi ter-asesmen." },
  ],
};

/* ── People Performance Intelligence ──────────────────────────────── */

export interface PmIntelSignal {
  no: string;
  tone: "red" | "amber" | "green";
  title: string;
  text: string;
  impactLabel: string;
  impactValue: string;
}

export const pmIntelSignals: PmIntelSignal[] = [
  {
    no: "S1",
    tone: "red",
    title: "High Improvement Opportunity",
    text: "6.412 karyawan (23,0% populasi ter-asesmen) memiliki ruang perbaikan performance tinggi.",
    impactLabel: "Populasi",
    impactValue: "6.412 orang",
  },
  {
    no: "S2",
    tone: "red",
    title: "Environmental Supports Dominan",
    text: "Data + Instruments + Incentives menyumbang 64% dari total performance opportunity gap (7,5% dari 11,8%).",
    impactLabel: "Kontribusi gap",
    impactValue: "64%",
  },
  {
    no: "S3",
    tone: "amber",
    title: "Sel Instruments Terlemah",
    text: "12.842 karyawan terdampak sistem & tools kerja belum optimal — sel BEM dengan gap terbesar (3,4%).",
    impactLabel: "Populasi",
    impactValue: "12.842 orang",
  },
  {
    no: "S4",
    tone: "green",
    title: "HPI Membaik",
    text: "Rata-rata HPI-BEM naik 3,1 pts vs April 2026, seiring turunnya gap sel Instruments.",
    impactLabel: "Tren",
    impactValue: "+3,1 pts MoM",
  },
];

export const pmIntelCounts = [
  { label: "Kritis", value: 2, tone: "red" },
  { label: "Perhatian", value: 1, tone: "amber" },
  { label: "Positif", value: 1, tone: "green" },
] as { label: string; value: number; tone: "red" | "amber" | "green" }[];

export const pmIntelRecommendation =
  "Prioritaskan sel Data (ekspektasi, SOP, feedback) & Instruments (tools, sistem) sebelum menambah training individual — 64% gap berada di Environmental Supports, bukan pada repertoire orang (Knowledge/Capacity/Motives).";

/* ── Cluster Intelligence (Role Fit & Productivity Linkage) ───────── */

export interface ClusterIntelRow {
  name: string;
  pct: string;
  color: string;
  bestFit: string[];
  /** Index produktivitas relatif; 100 = rata-rata grup. */
  produktivitas: number;
  performance: string;
  flightRisk: string;
  flightTone: "red" | "amber" | "green";
  fokusDev: string;
}

export const clusterIntel: ClusterIntelRow[] = [
  { name: "The Driver", pct: "31%", color: PALETTE.blue, bestFit: ["Operations", "Commercial", "Transformation"], produktivitas: 118, performance: "4,4", flightRisk: "8%", flightTone: "amber", fokusDev: "Coaching stakeholder management" },
  { name: "The Inspirer", pct: "22%", color: PALETTE.slate, bestFit: ["Commercial", "HC", "Change Mgmt"], produktivitas: 114, performance: "4,3", flightRisk: "6%", flightTone: "amber", fokusDev: "Eksekusi & orientasi detail" },
  { name: "The Analyst", pct: "18%", color: PALETTE.teal, bestFit: ["Finance", "Risk", "Planning"], produktivitas: 108, performance: "4,1", flightRisk: "5%", flightTone: "amber", fokusDev: "Komunikasi & agility" },
  { name: "The Collaborator", pct: "15%", color: PALETTE.purple, bestFit: ["HC", "Service", "Cross-unit"], produktivitas: 106, performance: "4,0", flightRisk: "4%", flightTone: "green", fokusDev: "Assertiveness & decision making" },
  { name: "The Stabilizer", pct: "8%", color: PALETTE.green, bestFit: ["Operations Rutin", "QA", "Admin"], produktivitas: 101, performance: "3,9", flightRisk: "3%", flightTone: "green", fokusDev: "Adaptabilitas terhadap perubahan" },
  { name: "The Pioneer", pct: "6%", color: PALETTE.amber, bestFit: ["Inovasi", "R&D", "Transformation"], produktivitas: 120, performance: "4,5", flightRisk: "11%", flightTone: "red", fokusDev: "Retention plan & fokus prioritas" },
];

export const clusterIntelCatatan =
  "Productivity index (100 = rata-rata grup) & flight risk berasal dari linkage People Productivity + Talent Intelligence — data ilustratif.";

/* ── Intervention Outcome Tracking (Closed Loop) ──────────────────── */

export interface OutcomeStep {
  tahap: string;
  nilai: string;
  detail: string;
}

export const outcomeLoop = {
  stages: ["Assess", "Diagnose", "Intervene", "Measure", "Learn"],
  pilotLabel: "Pilot Tracking — Digitalisasi Reporting Kebun (PTPN IV · 1.240 Manajer & Asisten Kebun)",
  steps: [
    { tahap: "Assess", nilai: "HPI-INS 68", detail: "Baseline sel Instruments populasi pilot" },
    { tahap: "Diagnose", nilai: "Instruments – Tools", detail: "Reporting manual, data tidak real-time" },
    { tahap: "Intervene", nilai: "Digital Reporting", detail: "Rollout Q1–Q2 2026" },
    { tahap: "Adoption", nilai: "87%", detail: "Pengguna aktif mingguan" },
    { tahap: "HPI Change", nilai: "68 → 76", detail: "+8 pts dalam 2 kuartal" },
    { tahap: "Performance", nilai: "4,1 → 4,4", detail: "Rata-rata skor performance" },
    { tahap: "Business Impact", nilai: "+6,2%", detail: "Produktivitas unit pilot" },
  ] as OutcomeStep[],
  learning:
    "Intervensi terbukti efektif untuk populasi manajer kebun. Rekomendasi: scale ke 14 unit dengan profil root cause serupa (estimasi populasi 9.800 orang).",
  catatan:
    "Data pilot ilustratif — outcome tracking penuh membutuhkan data intervensi & produktivitas aktual per unit.",
};

/* ── Methodology (modal ⓘ) ───────────────────────────────────────── */

export interface MetodologiSection {
  judul: string;
  items: [string, string][];
}

export const metodologi = {
  versi: "PTPN HPI-BEM v1.0 (adaptasi Gilbert Behavior Engineering Model)",
  sections: [
    {
      judul: "People Math Score",
      items: [
        ["Definisi", "Skor komposit pola individu dari 6 dimensi: Thinking Style, Driving Force, Interpersonal Style, Resilience, Learning Agility, Emotional Balance."],
        ["Skala", "0–100; Kuat ≥75, Sedang 60–74, Perlu Ditingkatkan <60."],
        ["Bobot & formula", "Proprietary — governed oleh tim metodologi; bobot per dimensi ditinjau tahunan."],
        ["Normalisasi", "Standardisasi terhadap norma populasi PTPN Group."],
        ["Sumber data", "Asesmen People Math (self-assessment + verifikasi), siklus 2025–2026."],
      ],
    },
    {
      judul: "PTPN HPI-BEM Score",
      items: [
        ["Definisi", "Human Performance Index berbasis Behavior Engineering Model (Thomas F. Gilbert, 1978) — 6 sel dalam 2 kelompok."],
        ["Environmental Supports", "Data (ekspektasi, guide, feedback), Instruments (tools, sistem, waktu, material), Incentives (finansial & non-finansial, karier)."],
        ["Person's Repertory", "Knowledge (pengetahuan & keterampilan), Capacity (kapasitas & kesesuaian penempatan), Motives (motif & kesesuaian dengan pekerjaan)."],
        ["Skala", "0–100 per sel; skor grup = rata-rata populasi ter-asesmen."],
        ["Sumber data", "Survey & asesmen HPI-BEM — 27.891 responden (39,7% populasi)."],
        ["Benchmark", "Internal antar-PTPN; benchmark eksternal belum tersedia."],
        ["Confidence", "Medium — coverage parsial, recency asesmen < 6 bulan."],
      ],
    },
    {
      judul: "Governance",
      items: [
        ["Kepemilikan", "Tim Metodologi HC Holding — perubahan melalui review board."],
        ["Review cycle", "Tahunan, atau saat perubahan besar struktur organisasi."],
        ["Akses detail", "Formula lengkap tersedia bagi peran terotorisasi (BOD-1 HC)."],
      ],
    },
  ] as MetodologiSection[],
  disclaimer:
    "Konten metodologi bersifat placeholder — versi final ditetapkan tim metodologi HC Holding.",
};

/* ── Intelligence Coverage Strip ──────────────────────────────────── */

export const pmCoverage = {
  asOf: "31 Mei 2026",
  basis: "70.142 karyawan",
  peopleMath: { pct: "55,1%", detail: "38.642 orang" },
  hpi: { pct: "39,7%", detail: "27.891 orang" },
  combined: { pct: "36,4%", detail: "25.530 orang dengan kedua asesmen" },
  confidence: "Medium" as const,
  catatan: "Skor grup merepresentasikan populasi ter-asesmen, bukan seluruh karyawan.",
};
