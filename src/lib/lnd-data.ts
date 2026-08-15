import type { Trend } from "./data";
import { PALETTE, SEQ_BLUE, SEQ_GREEN } from "./chart-palette";
import { skillGaps } from "./wp-data";
import type { ChipTone } from "@/components/ui/KpiCard";

/*
 * Definisi metrik (rekonsiliasi Q2 2026):
 * - Tren jam = volume BULANAN; Q2 (Apr–Jun) = 344.110 jam; YTD Jan–Jun = 597.980 jam.
 * - Peserta 29.842 = enrollment Q2 (satu karyawan bisa >1 program); unique learners 21.480.
 * - Headcount holding 51.610 → YTD 11,6 jam/karyawan; proyeksi akhir tahun 23,2 vs target 20.
 * - Skill gap kritis mengacu ke wp-data.skillGaps (top-10, total gap 1.150).
 */

/* ── KPI strip — hierarki capability-first ───────────────── */

export interface LndKpi {
  label: string;
  value: string;
  delta: string;
  trend: Trend;
  compare: string;
  icon: "gap" | "transfer" | "impact" | "roi" | "jam" | "investasi";
  tone: ChipTone;
  line: string;
  series: number[];
  info: string;
}

export const lndKpi: LndKpi[] = [
  {
    label: "Critical Skill Gap Closure",
    value: "38,4%",
    delta: "9,2 pts",
    trend: "up",
    compare: "442 dari 1.150 gap kritis (YTD)",
    icon: "gap",
    tone: "green",
    line: PALETTE.green,
    series: [22, 24, 27, 29, 31, 33, 34, 36, 37, 39, 41, 43, 45, 47, 50],
    info: "Porsi gap 10 skill kritis (sumber: Workforce Planning) yang tertutup intervensi learning YTD 2026 — reskilling lulus asesmen proficiency.",
  },
  {
    label: "Learning Transfer (L3)",
    value: "76%",
    delta: "4,2 pts",
    trend: "up",
    compare: "dari Learning L2 89% · Kirkpatrick",
    icon: "transfer",
    tone: "blue",
    line: PALETTE.blue,
    series: [30, 33, 31, 36, 34, 39, 37, 42, 40, 44, 43, 47, 46, 50, 53],
    info: "Kirkpatrick Level 3: peserta yang menunjukkan perubahan perilaku kerja 90 hari pasca pelatihan (asesmen atasan langsung).",
  },
  {
    label: "Business Results (L4)",
    value: "62%",
    delta: "3,1 pts",
    trend: "up",
    compare: "vs Q1 2026 · Kirkpatrick",
    icon: "impact",
    tone: "purple",
    line: PALETTE.purple,
    series: [28, 31, 29, 34, 32, 36, 35, 39, 37, 41, 40, 44, 43, 46, 49],
    info: "Kirkpatrick Level 4: program dengan indikator hasil (KPI unit, kualitas, safety) yang membaik dan teratribusi ke pelatihan.",
  },
  {
    label: "Est. Learning ROI",
    value: "1,7x",
    delta: "0,2x",
    trend: "up",
    compare: "Value Rp 42,1 M vs Inv. Rp 24,8 M",
    icon: "roi",
    tone: "amber",
    line: PALETTE.amber,
    series: [26, 29, 28, 32, 31, 35, 33, 37, 36, 40, 39, 43, 42, 45, 48],
    info: "Estimasi value terkuantifikasi (produktivitas, retensi, risk avoidance) dibagi total investasi. Program compliance/mandatory dinilai lewat risk reduction, bukan ROI finansial.",
  },
  {
    label: "Jam Pelatihan (Q2)",
    value: "344.110",
    delta: "35,5%",
    trend: "up",
    compare: "vs Q1 2026 · YTD 597.980 jam",
    icon: "jam",
    tone: "teal",
    line: PALETTE.teal,
    series: [30, 36, 33, 40, 35, 43, 38, 46, 41, 48, 44, 52, 47, 55, 59],
    info: "Σ jam kehadiran Apr–Jun 2026. YTD 11,6 jam/karyawan (headcount 51.610); proyeksi akhir tahun 23,2 jam vs target 20 — on track.",
  },
  {
    label: "Training Investment",
    value: "Rp 24,8 M",
    delta: "8,9%",
    trend: "up",
    compare: "Q2 2026 · Cost/Peserta Rp 831 rb",
    icon: "investasi",
    tone: "blue",
    line: PALETTE.blue,
    series: [31, 37, 33, 40, 36, 44, 39, 46, 42, 50, 45, 53, 48, 55, 59],
    info: "Realisasi biaya pelatihan Q2. Cost per peserta (enrollment) Rp 831 rb; cost per jam pelatihan Rp 72 rb.",
  },
];

/* ── Distribusi jam pelatihan per kompetensi + alignment ─── */

export interface DonutSlice {
  name: string;
  jam: string;
  pct: string;
  share: number;
  color: string;
  /** Kebutuhan strategis skill (Workforce Planning). */
  demand: "Critical" | "High" | "Medium" | "—";
  /** Investasi vs demand: under / match / over. */
  align: "under" | "match" | "over" | "none";
}

export const distribusiKompetensi: DonutSlice[] = [
  { name: "Leadership", jam: "61.250", pct: "17,8%", share: 17.8, color: PALETTE.blue, demand: "Medium", align: "over" },
  { name: "Technical", jam: "85.680", pct: "24,9%", share: 24.9, color: PALETTE.green, demand: "Critical", align: "under" },
  { name: "Operational", jam: "75.360", pct: "21,9%", share: 21.9, color: PALETTE.amber, demand: "High", align: "match" },
  { name: "Soft Skill", jam: "63.660", pct: "18,5%", share: 18.5, color: PALETTE.purple, demand: "Medium", align: "over" },
  // Compliance netral (merah hanya untuk alert)
  { name: "Compliance", jam: "36.130", pct: "10,5%", share: 10.5, color: PALETTE.slate, demand: "High", align: "match" },
  { name: "Lainnya", jam: "22.030", pct: "5,6%", share: 5.6, color: PALETTE.teal, demand: "—", align: "none" },
];

export const distribusiTotal = { value: "344.110", caption: "Jam Q2" };

export const alignmentNote =
  "Technical (demand Critical) masih under-invested; Leadership & Soft Skill over-weighted — lihat Skill Gap Closure.";

/* ── Tren jam pelatihan (volume bulanan) ─────────────────── */

export const trenJamPelatihan = [
  { name: "Jan 2026", value: 78540 },
  { name: "Feb 2026", value: 85210 },
  { name: "Mar 2026", value: 90120 },
  { name: "Apr 2026", value: 106230 },
  { name: "Mei 2026", value: 112450 },
  { name: "Jun 2026", value: 125430 },
];

/* ── Learning Value Chain (funnel enrollment → value) ────── */

export interface ChainStage {
  label: string;
  aspek: string;
  pct: number;
  detail: string;
  color: string;
}

/** Funnel Q2: enrollment → completion → Kirkpatrick L2–L4. L1 (Reaksi 96%) tampil sebagai chip. */
export const learningChain: ChainStage[] = [
  { label: "Enrollment", aspek: "29.842 peserta", pct: 100, detail: "Pendaftaran Q2 2026 (bukan unique learner — 21.480 unik)", color: SEQ_BLUE[4] },
  { label: "Completion", aspek: "27.484 peserta", pct: 92.1, detail: "Menyelesaikan program & lulus asesmen akhir", color: SEQ_GREEN[4] },
  { label: "Learning (L2)", aspek: "Penguasaan materi", pct: 89, detail: "Kirkpatrick L2 — uji kompetensi pasca pelatihan", color: SEQ_GREEN[3] },
  { label: "Behavior (L3)", aspek: "Transfer ke pekerjaan", pct: 76, detail: "Perubahan perilaku kerja 90 hari (asesmen atasan)", color: SEQ_GREEN[2] },
  { label: "Results (L4)", aspek: "Dampak hasil", pct: 62, detail: "Perbaikan KPI unit teratribusi ke pelatihan", color: SEQ_GREEN[1] },
];

export const chainReaction = { label: "L1 Reaksi", pct: 96 };

export const chainValue = {
  label: "Est. Business Value",
  value: "Rp 42,1 M",
  note: "Produktivitas + retensi + risk avoidance (model estimasi, bukan klaim kausal)",
};

export const chainInsight =
  "Constraint bukan akuisisi pembelajaran — melainkan transfer-to-job (drop L2→L3 −13 pts, L3→L4 −14 pts).";

/* ── Skill Gap Closure — linkage ke Workforce Planning ───── */

const gapOf = (prefix: string) =>
  Math.abs(skillGaps.find((s) => s.skill.startsWith(prefix))?.gap ?? 0);

export interface GapClosureRow {
  skill: string;
  program: string;
  gapAwal: number;
  tertutup: number;
  sisa: number;
  closure: number;
  coverage: number;
  demand: "Critical" | "High" | "Medium";
  align: "under" | "match" | "over";
}

const mkClosure = (
  skill: string,
  wpPrefix: string,
  program: string,
  tertutup: number,
  coverage: number,
  demand: GapClosureRow["demand"],
  align: GapClosureRow["align"],
): GapClosureRow => {
  const gapAwal = gapOf(wpPrefix);
  return {
    skill,
    program,
    gapAwal,
    tertutup,
    sisa: gapAwal - tertutup,
    closure: Math.round((tertutup / gapAwal) * 100),
    coverage,
    demand,
    align,
  };
};

/** 6 skill teratas dari 10 skill kritis wp-data; total tertutup 442/1.150 (38,4%). */
export const gapClosure: GapClosureRow[] = [
  mkClosure("Mill & Process Engineering", "Mill", "Mill Engineering Academy", 62, 61, "Critical", "under"),
  mkClosure("Data Analytics", "Data Analytics", "Digital Analytics Academy", 76, 58, "Critical", "under"),
  mkClosure("Agronomy Expert", "Agronomy", "Agronomy Center of Excellence", 88, 84, "Critical", "match"),
  mkClosure("Maintenance Reliability", "Maintenance", "Reliability Engineering Program", 54, 66, "High", "under"),
  mkClosure("Digital Transformation", "Digital", "Digital Transformation Academy", 76, 91, "High", "match"),
  mkClosure("Leadership & People Mgmt", "Leadership", "Leadership Excellence Program", 49, 95, "Medium", "over"),
];

export const gapClosureTotal = {
  tertutup: 442,
  total: 1150,
  pct: "38,4%",
  note: "6 skill teratas dari 10 skill kritis Workforce Planning · sisanya lihat detail",
};

export const skillsForecastNote =
  "Forecast 2028: kapasitas L&D menutup ±56% gap Data Analytics (100 orang/tahun) — sisa ±80 orang perlu external hiring.";

/* ── Learning ROI & efisiensi per tier program ───────────── */

export interface RoiTier {
  tier: string;
  programs: number;
  inv: string;
  metric: string;
  metricLabel: string;
  note: string;
  color: string;
}

export const roiTiers: RoiTier[] = [
  {
    tier: "Strategic",
    programs: 18,
    inv: "Rp 9,6 M",
    metric: "2,3x",
    metricLabel: "Est. ROI",
    note: "Value Rp 22,1 M — transformasi & leadership pipeline",
    color: PALETTE.green,
  },
  {
    tier: "Capability",
    programs: 96,
    inv: "Rp 8,2 M",
    metric: "+1,2",
    metricLabel: "Skill Level",
    note: "Kenaikan proficiency rata-rata; cost/skill-point Rp 18,6 jt",
    color: PALETTE.blue,
  },
  {
    tier: "Compliance",
    programs: 74,
    inv: "Rp 4,1 M",
    metric: "−18%",
    metricLabel: "Temuan Audit",
    note: "Dinilai lewat risk reduction, bukan ROI finansial",
    color: PALETTE.amber,
  },
  {
    tier: "Mandatory",
    programs: 60,
    inv: "Rp 2,9 M",
    metric: "98,4%",
    metricLabel: "Compliance Rate",
    note: "Sertifikasi wajib & regulasi",
    color: PALETTE.slate,
  },
];

export const costEfficiency = [
  { label: "Cost / Peserta", value: "Rp 831 rb", delta: "−3,4%" },
  { label: "Cost / Jam Pelatihan", value: "Rp 72 rb", delta: "−8,1%" },
];

export const perfAssociation = {
  trained: "4,18",
  untrained: "3,72",
  diff: "+12,4%",
  note: "Skor kinerja peserta vs non-peserta (asosiasi — bukan klaim kausal).",
};

/* ── Top 5 program berdasarkan business impact ───────────── */

export interface ProgramImpactRow {
  nama: string;
  peserta: string;
  gain: string;
  behavior: string;
  value: string;
  valueNum: number;
  color: string;
}

// Ramp biru satu-hue sesuai peringkat value (1 = paling pekat)
export const topProgram: ProgramImpactRow[] = [
  { nama: "Digital Transformation Academy", peserta: "3.742", gain: "+18%", behavior: "76%", value: "Rp 12,4 M", valueNum: 12.4, color: SEQ_BLUE[4] },
  { nama: "Operational Excellence Training", peserta: "3.210", gain: "+14%", behavior: "82%", value: "Rp 9,8 M", valueNum: 9.8, color: SEQ_BLUE[3] },
  { nama: "Leadership Excellence Program", peserta: "4.892", gain: "+12%", behavior: "79%", value: "Rp 8,6 M", valueNum: 8.6, color: SEQ_BLUE[2] },
  { nama: "Supervisor Development Program", peserta: "2.845", gain: "+11%", behavior: "74%", value: "Rp 5,2 M", valueNum: 5.2, color: SEQ_BLUE[1] },
  { nama: "Safety & Compliance Training", peserta: "2.156", gain: "−18% temuan", behavior: "71%", value: "Rp 3,1 M", valueNum: 3.1, color: SEQ_BLUE[0] },
];

/* ── Program per tipe + outcome per modalitas ────────────── */

export interface TipeSlice {
  name: string;
  jumlah: number;
  pct: string;
  share: number;
  color: string;
  /** Kirkpatrick per modalitas; null = sampel belum memadai. */
  behavior: number | null;
  result: number | null;
}

export const programTipe: TipeSlice[] = [
  { name: "Classroom", jumlah: 86, pct: "34,7%", share: 34.7, color: PALETTE.blue, behavior: 72, result: 59 },
  { name: "E-Learning", jumlah: 78, pct: "31,5%", share: 31.5, color: PALETTE.green, behavior: 64, result: 51 },
  { name: "Blended", jumlah: 52, pct: "21,0%", share: 21.0, color: PALETTE.amber, behavior: 81, result: 69 },
  { name: "Webinar", jumlah: 20, pct: "8,1%", share: 8.1, color: PALETTE.purple, behavior: 55, result: 44 },
  { name: "Lainnya", jumlah: 12, pct: "4,7%", share: 4.7, color: PALETTE.slate, behavior: null, result: null },
];

export const modalityNote =
  "Blended: behavior 81% & result 69% — transfer tertinggi. Rekomendasi porsi 2026: 21% → 30%.";

/* ── Personalized learning (menggantikan view generasi) ──── */

export const personalized = {
  gapEmployees: "12.842",
  paths: "8.426",
  pathsPct: 65.6,
  active: "6.214",
  activePct: 48.4,
  improvement: "+14%",
  note: "Karyawan dengan skill gap kritis yang mendapat learning path personal. Demografi & generasi → drill-down.",
};

/* ── Learning effectiveness per unit organisasi ──────────── */

export interface UnitEffRow {
  unit: string;
  /** [partisipasi, skill gain, transfer, impact] — % */
  nilai: [number, number, number, number];
  index: number;
  karyawan: number;
}

export const unitEffCols = ["Partisipasi", "Skill Gain", "Transfer", "Impact"];

export const unitEffectiveness: UnitEffRow[] = [
  { unit: "PTPN I", nilai: [85, 78, 71, 65], index: 74.8, karyawan: 9820 },
  { unit: "PTPN II", nilai: [82, 74, 69, 61], index: 71.5, karyawan: 8460 },
  { unit: "PTPN III (Persero)", nilai: [87, 82, 78, 70], index: 79.3, karyawan: 12340 },
  { unit: "PTPN IV", nilai: [79, 71, 62, 55], index: 66.8, karyawan: 10150 },
  { unit: "PTPN V", nilai: [75, 68, 59, 51], index: 63.3, karyawan: 7630 },
  { unit: "Holding & Support Co", nilai: [87, 80, 74, 68], index: 77.3, karyawan: 3210 },
];

/** Skala hijau untuk sel heatmap: 0% (pucat) → 100% (pekat). */
export function heatColor(pct: number) {
  const stops = [
    { at: 60, bg: "#eaf7ef", fg: "#4b6b58" },
    { at: 70, bg: "#d6efe0", fg: "#2f6b48" },
    { at: 80, bg: "#b6e3c8", fg: "#215f3c" },
    { at: 88, bg: "#8ed4ac", fg: "#14532d" },
    { at: 101, bg: "#5ec18c", fg: "#0f3f22" },
  ];
  return stops.find((s) => pct < s.at) ?? stops[stops.length - 1];
}

/* ── Top 5 instruktur — effectiveness, bukan rating saja ─── */

export interface Instruktur {
  nama: string;
  bidang: string;
  rating: string;
  gain: string;
  transfer: string;
}

export const topInstruktur: Instruktur[] = [
  { nama: "Dr. Andi Pratama", bidang: "Leadership Expert", rating: "4.9", gain: "+21%", transfer: "81%" },
  { nama: "Dewi Lestari, M.M.", bidang: "Digital Transformation", rating: "4.8", gain: "+19%", transfer: "78%" },
  { nama: "Budi Santoso", bidang: "Operational Excellence", rating: "4.8", gain: "+17%", transfer: "80%" },
  { nama: "Rina Fitriani", bidang: "HR & People Development", rating: "4.7", gain: "+14%", transfer: "72%" },
  { nama: "Ahmad Fauzi", bidang: "Safety & Compliance", rating: "4.7", gain: "+12%", transfer: "74%" },
];

/* ── Insight & rekomendasi AI (diagnostic) ───────────────── */

export interface LndInsight {
  isi: string;
  tone: "info" | "success" | "warning" | "neutral";
}

export const lndInsight: LndInsight[] = [
  {
    isi: "Constraint utama bukan akuisisi pembelajaran (L2 89%), melainkan transfer-to-job: L3 76%, L4 62%. Prioritas: manager reinforcement & workplace application pasca pelatihan.",
    tone: "warning",
  },
  {
    isi: "Capability risk tertinggi: Mill Engineering — gap 200, learning coverage 61%, time-to-proficiency 18 bulan. Sudah dieskalasi ke People Risk Radar.",
    tone: "warning",
  },
  {
    isi: "PTPN V terendah di partisipasi (75%) sekaligus effectiveness index (63,3) — akar masalahnya kualitas transfer, bukan sekadar awareness.",
    tone: "info",
  },
  {
    isi: "Realokasi 2026: geser ±22% investasi dari Leadership (over-weighted) ke Technical & Data Analytics (demand Critical, coverage <60%). Perluas modalitas blended.",
    tone: "success",
  },
];

/* ── BOD Learning Decision Center ────────────────────────── */

export interface LndDecision {
  title: string;
  situation: string;
  decision: string;
  exposure: string;
  due: string;
  tone: "red" | "amber";
}

export const lndDecisions: LndDecision[] = [
  {
    title: "Mill Engineering Capability Risk",
    situation:
      "Gap 200 engineer; learning coverage hanya 61% dengan time-to-proficiency 18 bulan — capability risk tertinggi di radar (82/100).",
    decision:
      "Setujui Mill Engineering Academy Wave 2 (kapasitas 120/tahun) + external hiring 40 engineer.",
    exposure: "Rp 38,4 M",
    due: "Q3 2026",
    tone: "red",
  },
  {
    title: "Succession Development Gap",
    situation:
      "64 dari 286 posisi kritis tanpa development pathway aktif; Ready-Now coverage baru 124 posisi.",
    decision:
      "Setujui accelerated development program untuk 64 posisi kritis tanpa jalur pengembangan.",
    exposure: "Rp 21,6 M",
    due: "Q4 2026",
    tone: "red",
  },
  {
    title: "Transfer-to-Job Constraint",
    situation:
      "Completion 92,1% tetapi Results (L4) hanya 62% — drop terbesar pada transfer perilaku (−13 pts) dan hasil (−14 pts).",
    decision:
      "Wajibkan manager-led reinforcement + workplace project untuk seluruh program strategis 2026.",
    exposure: "Rp 9,3 M value-at-risk",
    due: "Q1 2026",
    tone: "amber",
  },
];
