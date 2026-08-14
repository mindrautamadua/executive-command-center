import type { Trend } from "./data";
import type { ExecSignal, BodDecision } from "./hc-data";
import type { ChipTone } from "@/components/ui/KpiCard";
import { PALETTE, SEMANTIC } from "./chart-palette";

/* ── KPI strip ───────────────────────────────────────────── */

export interface KinerjaKpi {
  label: string;
  value: string;
  unit?: string;
  /** delta berwarna (naik/turun) */
  delta?: string;
  trend?: Trend;
  /** metrik yang justru bagus ketika turun diberi tone "good" */
  deltaTone?: "good" | "bad";
  compare: string;
  icon: "score" | "users" | "target" | "star" | "warn" | "clock";
  tone: ChipTone;
  line: string;
  series: number[];
}

export const kinerjaKpi: KinerjaKpi[] = [
  {
    label: "Overall Score (Rata-rata)",
    value: "87,6",
    unit: "/100",
    delta: "4,8 pts",
    trend: "up",
    compare: "vs Q1 2026: 82,8",
    icon: "score",
    tone: "purple",
    line: PALETTE.purple,
    series: [30, 36, 32, 39, 34, 42, 37, 45, 40, 47, 43, 50, 46, 53, 57],
  },
  {
    label: "Karyawan Dinilai",
    value: "68.142",
    compare: "97,1% dari total karyawan 70.142",
    icon: "users",
    tone: "green",
    line: PALETTE.green,
    series: [28, 33, 30, 37, 33, 41, 36, 44, 39, 47, 42, 50, 45, 53, 56],
  },
  {
    label: "On Target & Above",
    value: "92,8%",
    delta: "1,3%",
    trend: "up",
    compare: "vs Q1 2026: 91,5%",
    icon: "target",
    tone: "teal",
    line: PALETTE.teal,
    series: [32, 38, 31, 42, 35, 45, 38, 47, 41, 50, 44, 53, 47, 55, 59],
  },
  {
    label: "High Performer",
    value: "18,7%",
    delta: "2,1%",
    trend: "up",
    compare: "vs Q1 2026: 16,6%",
    icon: "star",
    tone: "blue",
    line: PALETTE.blue,
    series: [34, 40, 33, 44, 37, 46, 39, 48, 42, 51, 45, 54, 48, 56, 60],
  },
  {
    label: "Below Target",
    value: "7,2%",
    delta: "1,3%",
    trend: "down",
    // turun = membaik untuk metrik ini
    deltaTone: "good",
    compare: "vs Q1 2026: 8,5%",
    icon: "warn",
    tone: "red",
    line: PALETTE.red,
    series: [50, 45, 53, 42, 48, 40, 46, 38, 44, 36, 42, 34, 40, 32, 36],
  },
  {
    label: "Belum Dinilai",
    value: "2,9%",
    compare: "vs Q1 2026: 6,8%",
    icon: "clock",
    tone: "slate",
    line: PALETTE.slate,
    series: [52, 46, 54, 44, 50, 42, 48, 40, 46, 38, 44, 36, 42, 34, 38],
  },
];

/* ── Distribusi kinerja ──────────────────────────────────── */

/** "On Target" = lulus, bukan peringatan — teal netral, bukan kuning. */
export const KATEGORI_COLOR = {
  Outstanding: SEMANTIC.good,
  "Above Target": SEMANTIC.goodSoft,
  "On Target": PALETTE.teal,
  "Below Target": SEMANTIC.warn,
  Poor: SEMANTIC.bad,
} as const;

export const distribusiKinerja = [
  { name: "Outstanding", range: "(90 — 100)", pct: "18,7%", share: 18.7, jumlah: "12.742", jumlahNum: 12742 },
  { name: "Above Target", range: "(75 — 89)", pct: "53,6%", share: 53.6, jumlah: "36.507", jumlahNum: 36507 },
  { name: "On Target", range: "(60 — 74)", pct: "20,5%", share: 20.5, jumlah: "13.969", jumlahNum: 13969 },
  { name: "Below Target", range: "(40 — 59)", pct: "6,0%", share: 6.0, jumlah: "4.092", jumlahNum: 4092 },
  { name: "Poor", range: "(0 — 39)", pct: "1,2%", share: 1.2, jumlah: "832", jumlahNum: 832 },
].map((d) => ({ ...d, color: KATEGORI_COLOR[d.name as keyof typeof KATEGORI_COLOR] }));

/* ── Trend overall score ─────────────────────────────────── */

export const trendOverall = [
  { name: "Jan 2026", value: 76.4 },
  { name: "Feb 2026", value: 78.1 },
  { name: "Mar 2026", value: 80.3 },
  { name: "Apr 2026", value: 82.8 },
  { name: "Mei 2026", value: 84.2 },
  { name: "Jun 2026", value: 87.6 },
];

/** target overall score organisasi */
export const trendTarget = 85;

/* ── Dimensi ─────────────────────────────────────────────── */

export const dimensi = [
  { label: "Pencapaian Target (KPI)", short: "Target (KPI)", score: "89,2", pct: 89.2, prev: 84.1, delta: "5,1" },
  { label: "Kompetensi", short: "Kompetensi", score: "86,7", pct: 86.7, prev: 82.9, delta: "3,8" },
  { label: "Perilaku & Budaya", short: "Perilaku", score: "84,1", pct: 84.1, prev: 80.9, delta: "3,2" },
  { label: "Inovasi & Improvement", short: "Inovasi", score: "81,6", pct: 81.6, prev: 78.7, delta: "2,9" },
  { label: "Kerjasama & Kolaborasi", short: "Kolaborasi", score: "88,3", pct: 88.3, prev: 83.9, delta: "4,4" },
];

/* ── Unit organisasi ─────────────────────────────────────── */

export const unitOrganisasi = [
  { nama: "PTPN IV Regional 1", score: "91,2", pct: 91.2 },
  { nama: "PTPN III (Persero)", score: "89,1", pct: 89.1 },
  { nama: "PTPN I Regional 3", score: "87,8", pct: 87.8 },
  { nama: "PTPN V", score: "85,6", pct: 85.6 },
  { nama: "PTPN II", score: "84,3", pct: 84.3 },
  { nama: "PTPN IV Regional 2", score: "83,7", pct: 83.7 },
  { nama: "PTPN Holding", score: "82,1", pct: 82.1 },
  { nama: "PalmCo", score: "80,5", pct: 80.5 },
  { nama: "PTPN I Regional 5", score: "79,9", pct: 79.9 },
  { nama: "Supporting Co", score: "78,6", pct: 78.6 },
];

/* ── Level jabatan ───────────────────────────────────────── */

export const levelJabatan = [
  { level: "Direktur", seg: [28, 56, 12, 3, 1], score: "90,4" },
  { level: "General Manager", seg: [23, 54, 15, 6, 2], score: "88,7" },
  { level: "Manager", seg: [17, 50, 27, 3, 2], score: "85,6" },
  { level: "Supervisor", seg: [13, 46, 28, 10, 3], score: "83,1" },
  { level: "Staff", seg: [12, 47, 28, 10, 3], score: "82,0" },
];

export const levelLegend = [
  { label: "Outstanding", color: KATEGORI_COLOR.Outstanding },
  { label: "Above Target", color: KATEGORI_COLOR["Above Target"] },
  { label: "On Target", color: KATEGORI_COLOR["On Target"] },
  { label: "Below Target", color: KATEGORI_COLOR["Below Target"] },
  { label: "Poor", color: KATEGORI_COLOR.Poor },
];

/* ── Pencapaian target organisasi ────────────────────────── */

export const pencapaian = {
  value: 76.8,
  label: "76,8%",
  sub: "Rata-rata Pencapaian",
  delta: "6,3% vs Q1 2026",
};

export const kpiStrategis = [
  { label: "Pertumbuhan Pendapatan", pct: 82 },
  { label: "Efisiensi Operasional", pct: 75 },
  { label: "Produktivitas Kebun", pct: 73 },
  { label: "Kepuasan Pelanggan", pct: 78 },
  { label: "Sustainability Index", pct: 74 },
];

/* ── Ringkasan kinerja tim ───────────────────────────────── */

export const kinerjaTim = [
  {
    tim: "Operasional Kebun",
    unit: "PTPN IV Regional 1",
    score: "91,3",
    onTarget: "78%",
    high: "22%",
    below: "3%",
    trend: "5,4 pts",
  },
  {
    tim: "Pabrik Kelapa Sawit",
    unit: "PalmCo",
    score: "89,2",
    onTarget: "74%",
    high: "19%",
    below: "5%",
    trend: "4,1 pts",
  },
  {
    tim: "Keuangan & Akuntansi",
    unit: "PTPN III (Persero)",
    score: "87,7",
    onTarget: "71%",
    high: "18%",
    below: "7%",
    trend: "3,8 pts",
  },
  {
    tim: "SDM & Umum",
    unit: "PTPN Holding",
    score: "85,6",
    onTarget: "68%",
    high: "15%",
    below: "8%",
    trend: "2,7 pts",
  },
  {
    tim: "Pengembangan Bisnis",
    unit: "PTPN V",
    score: "83,9",
    onTarget: "64%",
    high: "13%",
    below: "9%",
    trend: "2,1 pts",
  },
];

/* ── Performance Intelligence ────────────────────────────── */

export const kinerjaIntelCounts = [
  { label: "Critical Signals", value: 1, tone: "red" },
  { label: "Opportunities", value: 1, tone: "green" },
  { label: "Decisions Pending", value: 3, tone: "amber" },
] as { label: string; value: number; tone: "red" | "green" | "amber" }[];

export const kinerjaSignals: ExecSignal[] = [
  {
    no: "01",
    title: "Chronic Underperformance",
    text: "1.240 karyawan Below Target selama 2+ siklus berturut; 832 di antaranya kategori Poor. Terkonsentrasi di level Supervisor & Staff Regional 2.",
    impactLabel: "Productivity Exposure",
    impactValue: "Rp 38 M",
    tone: "red",
  },
  {
    no: "02",
    title: "Calibration Gap",
    text: "3 unit menunjukkan rating variance ±7,2 pts antar-manager, melebihi ambang kalibrasi. Indikasi leniency bias pada 8 manager.",
    impactLabel: "Fairness Risk",
    impactValue: "3 unit",
    tone: "amber",
  },
  {
    no: "03",
    title: "Goal Misalignment",
    text: "12% individual goals belum terhubung ke strategic objectives; alignment index saat ini 84% dari target 95%.",
    impactLabel: "Alignment Index",
    impactValue: "84%",
    tone: "amber",
  },
];

export const kinerjaRecommendation =
  "Prioritaskan Performance Improvement Program untuk 1.240 chronic underperformer dan kalibrasi lintas-unit pada 3 unit outlier sebelum siklus Q3 2026. Potensi pemulihan produktivitas Rp 38 M.";

/* ── Kalibrasi rating ────────────────────────────────────── */

export interface KalibrasiRow {
  unit: string;
  pre: string;
  post: string;
  /** penyesuaian hasil kalibrasi; negatif = rating diturunkan */
  adj: string;
  arah: "turun" | "naik";
}

/** Post-calibration = angka final yang tampil di chart Kinerja per Unit Organisasi. */
export const kalibrasiUnit: KalibrasiRow[] = [
  { unit: "PTPN IV Regional 1", pre: "92,7", post: "91,2", adj: "-1,5", arah: "turun" },
  { unit: "PTPN III (Persero)", pre: "89,4", post: "89,1", adj: "-0,3", arah: "turun" },
  { unit: "PTPN V", pre: "85,0", post: "85,6", adj: "+0,6", arah: "naik" },
  { unit: "PTPN IV Regional 2", pre: "83,3", post: "83,7", adj: "+0,4", arah: "naik" },
  { unit: "Supporting Co", pre: "77,8", post: "78,6", adj: "+0,8", arah: "naik" },
];

export const kalibrasiStatus = [
  { label: "Kalibrasi Selesai", value: "92%" },
  { label: "Rating Consistency", value: "0,87" },
  { label: "Severity Bias", value: "12 mgr" },
  { label: "Leniency Bias", value: "8 mgr" },
];

/* ── Performance fairness ────────────────────────────────── */

export interface FairnessRow {
  label: string;
  value: string;
  ambang: string;
  status: "ok" | "warn";
}

export const fairnessKinerja: FairnessRow[] = [
  { label: "Rating Variance antar-Manager", value: "±6,4 pts", ambang: "≤ ±5,0 pts", status: "warn" },
  { label: "Calibration Adjustment Rate", value: "7,2%", ambang: "≤ 10%", status: "ok" },
  { label: "Gender Rating Gap", value: "0,8 pts", ambang: "≤ 1,5 pts", status: "ok" },
  { label: "Level Rating Gap (Direktur–Staff)", value: "8,4 pts", ambang: "≤ 6,0 pts", status: "warn" },
  { label: "Unit Bias Flagged", value: "3 unit", ambang: "0 unit", status: "warn" },
];

export const fairnessNote =
  "Variance & gap dihitung dari distribusi rating ternormalisasi per manager, gender, dan level — bukan selisih rata-rata sederhana.";

/* ── Performance risk radar ──────────────────────────────── */

export interface RisikoKinerjaItem {
  label: string;
  value: string;
  sub: string;
  tone: "red" | "amber" | "yellow";
}

export const risikoKinerja: RisikoKinerjaItem[] = [
  {
    label: "Chronic Underperformance",
    value: "1.240",
    sub: "Karyawan Below Target 2+ siklus berturut",
    tone: "red",
  },
  {
    label: "Performance Decline",
    value: "1.842",
    sub: "Karyawan turun >10 pts YoY",
    tone: "amber",
  },
  {
    label: "Manager Rating Bias",
    value: "20 mgr",
    sub: "12 severity + 8 leniency di atas ambang",
    tone: "amber",
  },
  {
    label: "Goal Misalignment",
    value: "12%",
    sub: "Individual goals tak terhubung strategi",
    tone: "yellow",
  },
  {
    label: "No Check-in 90 Hari",
    value: "4.321",
    sub: "Karyawan tanpa check-in manager",
    tone: "yellow",
  },
];

/* ── Dekomposisi overall score ───────────────────────────── */

export interface KomponenScore {
  label: string;
  bobot: string;
  /** bobot numerik utk lebar bar */
  bobotPct: number;
  score: string;
  scorePct: number;
  /** kontribusi tertimbang ke overall (bobot × score) */
  kontribusi: string;
  color: string;
}

/**
 * Formula SMK: Job/KPI 45% + Behavior 25% + Corporate 30% = Overall.
 * Job & Behavior = dimensi "Pencapaian Target (KPI)" dan "Perilaku & Budaya".
 * 0,45×89,2 + 0,25×84,1 + 0,30×88,1 = 87,6.
 */
export const komponenScore: KomponenScore[] = [
  {
    label: "Job / KPI Score",
    bobot: "45%",
    bobotPct: 45,
    score: "89,2",
    scorePct: 89.2,
    kontribusi: "+40,1",
    color: PALETTE.blue,
  },
  {
    label: "Behavior Score",
    bobot: "25%",
    bobotPct: 25,
    score: "84,1",
    scorePct: 84.1,
    kontribusi: "+21,0",
    color: PALETTE.purple,
  },
  {
    label: "Corporate Score",
    bobot: "30%",
    bobotPct: 30,
    score: "88,1",
    scorePct: 88.1,
    kontribusi: "+26,4",
    color: PALETTE.teal,
  },
];

export const overallScore = "87,6";

/** Penyusun kenaikan +4,8 pts vs Q1 2026 (kontribusi tertimbang per komponen). */
export const scoreDriver = [
  { label: "KPI Achievement", value: "+2,3 pts" },
  { label: "Behavior", value: "+0,8 pts" },
  { label: "Corporate Performance", value: "+1,7 pts" },
];

/* ── Konversi high performer → talent ────────────────────── */

export interface FunnelTalenta {
  label: string;
  jumlah: string;
  jumlahNum: number;
  sub: string;
  tone: "green" | "blue" | "purple" | "teal" | "red";
}

export const funnelTalenta: FunnelTalenta[] = [
  { label: "High Performer", jumlah: "12.742", jumlahNum: 12742, sub: "18,7% karyawan dinilai", tone: "green" },
  { label: "High Potential (HiPo)", jumlah: "4.312", jumlahNum: 4312, sub: "33,8% dari high performer", tone: "blue" },
  { label: "Critical Talent", jumlah: "1.842", jumlahNum: 1842, sub: "Menduduki / kandidat critical role", tone: "purple" },
  { label: "Ready Now", jumlah: "624", jumlahNum: 624, sub: "Siap promosi — prioritas suksesi", tone: "teal" },
  { label: "Flight Risk", jumlah: "86", jumlahNum: 86, sub: "Ready Now dengan risiko keluar tinggi", tone: "red" },
];

/* ── Goal alignment (line of sight) ──────────────────────── */

export interface AlignmentStep {
  label: string;
  value: string;
  sub: string;
}

/** Strategy → Individual: rantai cascading goal sampai skor karyawan. */
export const alignmentFlowKinerja: AlignmentStep[] = [
  { label: "Corporate Strategy", value: "5", sub: "Strategic Objectives" },
  { label: "Corporate KPI", value: "76,8%", sub: "Rata-rata pencapaian" },
  { label: "Unit KPI", value: "10 unit", sub: "Tertinggi 91,2 — PTPN IV R1" },
  { label: "Individual KPI", value: "88%", sub: "Goals terhubung strategi" },
  { label: "Employee Performance", value: "87,6", sub: "Overall score Q2 2026" },
];

export const alignmentIndexKinerja = {
  value: "84%",
  target: "95%",
  note: "12% individual goals belum terhubung ke strategic objectives.",
};

/* ── Continuous performance ──────────────────────────────── */

export interface ContinuousRow {
  label: string;
  value: string;
  pct: number;
  target: number;
}

export const continuousPerformance: ContinuousRow[] = [
  { label: "Check-in Completion", value: "82%", pct: 82, target: 90 },
  { label: "1:1 Meeting Completion", value: "76%", pct: 76, target: 85 },
  { label: "Goals Updated (Quarter)", value: "88%", pct: 88, target: 90 },
  { label: "Coaching Completion", value: "71%", pct: 71, target: 80 },
];

export const feedbackFrequency = {
  value: "2,4",
  sub: "Feedback per karyawan per kuartal",
};

/* ── 360° performance signal ─────────────────────────────── */

export interface Rater360 {
  label: string;
  nilai: string;
  pct: number;
  color: string;
}

/** Skala 1-5. Coverage: karyawan struktural yang dinilai multi-rater. */
export const rater360: Rater360[] = [
  { label: "Manager", nilai: "4,3", pct: 86, color: PALETTE.blue },
  { label: "Peer", nilai: "4,1", pct: 82, color: PALETTE.teal },
  { label: "Self", nilai: "4,5", pct: 90, color: PALETTE.purple },
  { label: "Stakeholder", nilai: "4,0", pct: 80, color: PALETTE.slate },
];

export const signal360 = {
  coverage: "8.412",
  coverageSub: "Karyawan struktural ter-cover 360°",
  alignment: "0,84",
  gap: "+0,5",
  gapNote: "Self vs rata-rata penilai lain — indikasi self-awareness gap.",
};

/* ── Reward & development linkage ────────────────────────── */

export interface LinkageRow {
  label: string;
  value: string;
}

export const rewardLinkage: LinkageRow[] = [
  { label: "Merit Eligible (On Target & Above)", value: "63.218" },
  { label: "Bonus Multiplier Outstanding", value: "2,0×" },
  { label: "Bonus Multiplier Above Target", value: "1,4×" },
  { label: "Promosi Prioritas (Ready Now)", value: "624" },
];

export const developmentLinkage: LinkageRow[] = [
  { label: "PIP — Chronic Underperformer", value: "1.240" },
  { label: "Coaching Intensif (Below Target)", value: "4.924" },
  { label: "Learning: Gap Inovasi (81,6)", value: "Problem Solving" },
  { label: "Learning Completion Rate", value: "86%" },
];

/* ── Performance Decision Center ─────────────────────────── */

export const kinerjaDecisionTabs = [
  { label: "Decision Required", count: 2 },
  { label: "Opportunity", count: 1 },
  { label: "Information", count: 3 },
];

export const kinerjaDecisions: BodDecision[] = [
  {
    title: "Chronic Underperformance – 1.240 Karyawan",
    impact: "High Impact",
    tone: "red",
    text: "Below Target 2+ siklus berturut, terkonsentrasi di Supervisor & Staff Regional 2. Rekomendasi: Approve structured Performance Improvement Program.",
    due: "Q3 2026",
  },
  {
    title: "Kalibrasi Rating – 3 Unit Outlier",
    impact: "Medium Impact",
    tone: "amber",
    text: "Rating variance ±7,2 pts antar-manager melebihi ambang. Rekomendasi: Selenggarakan cross-unit calibration session sebelum finalisasi rating Q3.",
    due: "Q3 2026",
  },
  {
    title: "Talent Opportunity – 624 Ready Now",
    impact: "Low Impact",
    tone: "green",
    text: "624 high performer berstatus Ready Now untuk posisi lebih tinggi. Rekomendasi: Prioritaskan succession pipeline & retention plan.",
    due: "Q4 2026",
  },
];

/* ── Insight AI ──────────────────────────────────────────── */

export const insightKinerja = [
  {
    tone: "success" as const,
    judul: "Peningkatan Kinerja Positif",
    isi: "Unit PTPN IV Regional 1 menunjukkan peningkatan kinerja tertinggi (+5,4 pts). Pertahankan strategi yang berjalan.",
  },
  {
    tone: "warning" as const,
    judul: "Perhatian: 832 Karyawan Kategori Poor",
    isi: "Below Target menurun 1,3% dibanding Q1 2026, namun 832 karyawan masih di kategori Poor. Lakukan coaching & monitoring lebih intensif.",
  },
  {
    tone: "info" as const,
    judul: "Fokus Pengembangan",
    isi: "Dimensi Inovasi & Improvement memiliki score terendah. Disarankan program pelatihan inovasi dan problem solving.",
  },
];
