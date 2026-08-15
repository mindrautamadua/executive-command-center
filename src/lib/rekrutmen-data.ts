import type { Trend } from "./data";
import type { ChipTone } from "@/components/ui/KpiCard";
import { PALETTE, SEQ_BLUE } from "./chart-palette";

/*
 * Periode kanonik seluruh halaman: Semester I 2026 (Jan–Jun).
 * Rantai resmi yang wajib reconcile di semua kartu:
 *   Applied 4.789 → Screening 2.845 → Assessment 1.562 → Interview 892
 *   → Offer 398 → Offer Accepted 312 → Onboard 240.
 * Requisition 156 & Open 72 adalah snapshot posisi Juni 2026.
 */

/* ── Executive Scorecard (KPI strip) ─────────────────────── */

export interface RekrutmenKpi {
  label: string;
  value: string;
  delta?: string;
  trend?: Trend;
  /** metrik yang justru bagus ketika turun diberi tone "good" */
  deltaTone?: "good" | "bad";
  compare: string;
  icon:
    | "fulfillment"
    | "critical"
    | "quality"
    | "retensi"
    | "ttf"
    | "rate"
    | "cost"
    | "risk";
  tone: ChipTone;
  info?: string;
  line: string;
  series: number[];
  /** gauge cincin menggantikan sparkline */
  gauge?: { pct: number; color: string };
}

/** Urutan disengaja: Quality & Demand dulu, Speed & Cost belakangan. */
export const rekrutmenKpi: RekrutmenKpi[] = [
  {
    label: "Workforce Plan Fulfillment",
    value: "33,6%",
    delta: "8,4%",
    trend: "up",
    compare: "312 / 928 kebutuhan eksternal 2026",
    icon: "fulfillment",
    tone: "amber",
    info: "Offer accepted YTD (312) dibanding kebutuhan rekrutmen eksternal 2026 dari Workforce Planning (928 dari net requirement 3.714). Onboard fulfillment: 240 / 928 = 25,9%.",
    line: PALETTE.amber,
    series: [],
    gauge: { pct: 33.6, color: PALETTE.amber },
  },
  {
    label: "Critical Role Fulfillment",
    value: "7,1%",
    delta: "2,3%",
    trend: "up",
    compare: "3 dari 42 critical role terisi",
    icon: "critical",
    tone: "red",
    info: "42 requisition critical role terbuka (subset 212 posisi kritis Succession Planning); baru 3 onboard. 24 posisi kosong > 3 bulan (People Risk Radar).",
    line: PALETTE.red,
    series: [],
    gauge: { pct: 7.1, color: PALETTE.red },
  },
  {
    label: "Quality of Hire",
    value: "4,15",
    delta: "0,08",
    trend: "up",
    compare: "dari 5,00 · cohort hire 2025",
    icon: "quality",
    tone: "purple",
    info: "Indeks komposit: performance 6 bulan (35%), retensi 12 bulan (20%), produktivitas (20%), kepuasan manajer (15%), culture fit (10%).",
    line: PALETTE.purple,
    series: [30, 34, 32, 37, 35, 40, 38, 43, 41, 46, 44, 49, 47, 52, 55],
  },
  {
    label: "Retensi Hire 12 Bulan",
    value: "91,4%",
    delta: "1,2%",
    trend: "up",
    compare: "444 / 486 cohort hire 2025 bertahan",
    icon: "retensi",
    tone: "green",
    line: PALETTE.green,
    series: [],
    gauge: { pct: 91.4, color: PALETTE.green },
  },
  {
    label: "Time to Fill (Hari)",
    value: "28,6",
    delta: "-4,2 hari",
    trend: "down",
    // makin cepat terisi = makin baik
    deltaTone: "good",
    compare: "Time to Hire: 22,4 hari",
    icon: "ttf",
    tone: "teal",
    info: "Time to Fill = requisition dibuka → posisi terisi. Time to Hire = kandidat apply → offer accepted (median 22,4 hari).",
    line: PALETTE.teal,
    series: [58, 52, 55, 49, 52, 46, 49, 43, 46, 41, 44, 38, 41, 36, 33],
  },
  {
    label: "Offer Acceptance Rate",
    value: "78,4%",
    delta: "7,1%",
    trend: "up",
    compare: "312 diterima dari 398 offer",
    icon: "rate",
    tone: "blue",
    line: PALETTE.blue,
    series: [],
    gauge: { pct: 78.4, color: PALETTE.blue },
  },
  {
    label: "Cost per Hire",
    value: "Rp 4,21 Jt",
    delta: "-6,8%",
    trend: "down",
    // biaya turun = efisiensi naik
    deltaTone: "good",
    compare: "vs Sem I 2025",
    icon: "cost",
    tone: "slate",
    line: PALETTE.slate,
    series: [52, 48, 54, 47, 51, 45, 49, 44, 47, 42, 45, 40, 43, 38, 36],
  },
  {
    label: "Hiring Risk Index",
    value: "62",
    delta: "4 poin",
    trend: "up",
    deltaTone: "bad",
    compare: "Skala 0–100 · Sedang–Tinggi",
    icon: "risk",
    tone: "amber",
    info: "Driver utama: critical role fulfillment 7,1%, gap workforce plan 616, TTF Manager Agronomy 45 hari, eksposur vacancy Rp 48,2 M (People Risk Radar).",
    line: PALETTE.amber,
    series: [],
    gauge: { pct: 62, color: PALETTE.amber },
  },
];

/* ── requisition by status (donut, snapshot Juni 2026) ───── */

export const requisitionStatus = [
  { name: "Open", value: 72, pct: "46,2%", color: PALETTE.blue },
  { name: "In Progress", value: 48, pct: "30,8%", color: PALETTE.green },
  { name: "On Hold", value: 18, pct: "11,5%", color: PALETTE.amber },
  { name: "Closed", value: 18, pct: "11,5%", color: PALETTE.slate },
];

export const totalRequisition = "156";

/* ── tren rekrutmen (bulanan; onboard Sem I = 240) ───────── */

export const trenRekrutmen = [
  { name: "Jan 2026", requisition: 112, hire: 34 },
  { name: "Feb 2026", requisition: 128, hire: 38 },
  { name: "Mar 2026", requisition: 142, hire: 42 },
  { name: "Apr 2026", requisition: 156, hire: 38 },
  { name: "Mei 2026", requisition: 168, hire: 42 },
  { name: "Jun 2026", requisition: 156, hire: 46 },
];

/* ── funnel pipeline ─────────────────────────────────────── */

export interface PipelineStage {
  stage: string;
  value: string;
  /** nilai numerik — lebar pita dihitung proporsional dari sini */
  valueNum: number;
  pct: string;
  color: string;
}

/** Warna sekuensial SEQ_BLUE: makin dalam tahapan, makin pekat. */
export const rekrutmenPipeline: PipelineStage[] = [
  { stage: "Applied", value: "4.789", valueNum: 4789, pct: "100%", color: SEQ_BLUE[0] },
  { stage: "Screening", value: "2.845", valueNum: 2845, pct: "59,4%", color: SEQ_BLUE[1] },
  { stage: "Assessment", value: "1.562", valueNum: 1562, pct: "32,6%", color: SEQ_BLUE[2] },
  { stage: "Interview", value: "892", valueNum: 892, pct: "18,6%", color: SEQ_BLUE[3] },
  { stage: "Offer", value: "398", valueNum: 398, pct: "8,3%", color: SEQ_BLUE[4] },
  { stage: "Offer Accepted", value: "312", valueNum: 312, pct: "6,5%", color: "#1b4a99" },
];

export const conversionRate = "6,5%";

/** Setelah offer accepted: 240 sudah onboard, 72 menunggu tanggal mulai. */
export const onboardNote = "Onboard: 240 · menunggu start date: 72";

/* ── SLA & bottleneck per tahap (median hari) ────────────── */

export type SlaTone = "green" | "amber" | "red";

export interface SlaStage {
  stage: string;
  target: number;
  actual: number;
  /** porsi terhadap total siklus Time to Hire 22,4 hari */
  share: string;
  tone: SlaTone;
}

/** Jumlah median seluruh tahap = Time to Hire 22,4 hari. */
export const funnelSla: SlaStage[] = [
  { stage: "Screening", target: 3, actual: 3.2, share: "14%", tone: "amber" },
  { stage: "Assessment", target: 5, actual: 5.8, share: "26%", tone: "amber" },
  { stage: "Interview", target: 5, actual: 4.6, share: "21%", tone: "green" },
  { stage: "Hiring Manager Review", target: 3, actual: 6.7, share: "30%", tone: "red" },
  { stage: "Offer Approval", target: 2.5, actual: 2.1, share: "9%", tone: "green" },
];

export const slaSummary = {
  timeToHire: "22,4 hari",
  breach: 18,
  bottleneck:
    "Hiring Manager Review 6,7 hari (target 3) = 30% total siklus — bottleneck terbesar.",
};

/* ── source quality (bukan sekadar volume) ───────────────── */

export interface SourceQualityRow {
  sumber: string;
  kandidat: string;
  kandidatNum: number;
  /** onboard Sem I per sumber — total 240 */
  hire: number;
  hireRate: string;
  qoh: string;
  qohN: number;
  color: string;
}

export const sourceQuality: SourceQualityRow[] = [
  {
    sumber: "Employee Referral",
    kandidat: "1.245",
    kandidatNum: 1245,
    hire: 86,
    hireRate: "6,9%",
    qoh: "4,5",
    qohN: 4.5,
    color: PALETTE.green,
  },
  {
    sumber: "Job Portal",
    kandidat: "1.956",
    kandidatNum: 1956,
    hire: 72,
    hireRate: "3,7%",
    qoh: "3,9",
    qohN: 3.9,
    color: PALETTE.blue,
  },
  {
    sumber: "Company Website",
    kandidat: "862",
    kandidatNum: 862,
    hire: 42,
    hireRate: "4,9%",
    qoh: "4,1",
    qohN: 4.1,
    color: PALETTE.amber,
  },
  {
    sumber: "Social Media",
    kandidat: "438",
    kandidatNum: 438,
    hire: 23,
    hireRate: "5,3%",
    qoh: "3,7",
    qohN: 3.7,
    color: PALETTE.purple,
  },
  {
    sumber: "Others",
    kandidat: "288",
    kandidatNum: 288,
    hire: 17,
    hireRate: "5,9%",
    qoh: "3,8",
    qohN: 3.8,
    color: PALETTE.slate,
  },
];

export const sourceQualityNote =
  "Referral: volume kandidat 26% tetapi hire rate & kualitas tertinggi — sumber paling bernilai.";

/* ── rekrutmen per unit organisasi (onboard = 240) ───────── */

export interface UnitRow {
  unit: string;
  requisition: number;
  hire: number;
  ttf: string;
}

export const rekrutmenUnit: UnitRow[] = [
  { unit: "PTPN III (Persero)", requisition: 64, hire: 99, ttf: "24,5" },
  { unit: "PTPN IV", requisition: 28, hire: 44, ttf: "26,1" },
  { unit: "PTPN I", requisition: 24, hire: 36, ttf: "29,7" },
  { unit: "PTPN V", requisition: 18, hire: 27, ttf: "31,2" },
  { unit: "PTPN II", requisition: 12, hire: 17, ttf: "32,8" },
  { unit: "PalmCo", requisition: 8, hire: 13, ttf: "22,3" },
  { unit: "Supporting Co", requisition: 2, hire: 4, ttf: "19,5" },
];

export const unitTotal = { requisition: 156, hire: 240 };

/* ── time to fill trend ──────────────────────────────────── */

export const timeToFillTrend = [
  { name: "Jan 2026", value: 32.8 },
  { name: "Feb 2026", value: 31.6 },
  { name: "Mar 2026", value: 30.1 },
  { name: "Apr 2026", value: 29.8 },
  { name: "Mei 2026", value: 29.0 },
  { name: "Jun 2026", value: 28.6 },
];

/** benchmark industri time to fill (hari) */
export const ttfBenchmark = 30;

/* ── aktivitas terbaru ───────────────────────────────────── */

export type AktivitasTone = "biru" | "hijau" | "kuning" | "abu";

export interface Aktivitas {
  judul: string;
  detail?: string;
  oleh?: string;
  jam: string;
  tone: AktivitasTone;
  icon: "check" | "user" | "alert" | "refresh" | "close";
}

export const aktivitasTerbaru: Aktivitas[] = [
  {
    judul: "Req. RQ-2505-156 telah disetujui",
    detail: "Posisi: Manager Sustainability",
    oleh: "oleh Direktur SDM & Umum",
    jam: "09:41",
    tone: "biru",
    icon: "check",
  },
  {
    judul: "Kandidat Andi Pratama lolos ke tahap Interview HR",
    detail: "Posisi: Assistant Manager Finance",
    jam: "09:15",
    tone: "hijau",
    icon: "user",
  },
  {
    // offer diterima = kabar baik, bukan peringatan
    judul: "Offer telah diterima oleh Siti Aisyah",
    detail: "Posisi: Staff Accounting",
    jam: "08:52",
    tone: "hijau",
    icon: "check",
  },
  {
    judul: "Dashboard rekrutmen Sem I 2026 telah diperbarui",
    jam: "08:30",
    tone: "hijau",
    icon: "refresh",
  },
  {
    judul: "Req. RQ-2505-155 telah ditutup",
    detail: "Posisi: Asisten Kebun",
    jam: "08:10",
    tone: "abu",
    icon: "close",
  },
];

/** Kelas chip pastel dark-mode-safe per tone aktivitas. */
export const AKTIVITAS_TONE: Record<AktivitasTone, string> = {
  biru: "tone-blue",
  hijau: "tone-green",
  kuning: "tone-amber",
  abu: "tone-slate",
};

/* ── requisition by job family ───────────────────────────── */

export interface JobFamilyRow {
  family: string;
  requisition: number;
  reqPct: string;
  reqPctN: number;
  hire: number;
  hirePct: string;
  hirePctN: number;
  open: number;
}

/** Hire = onboard Sem I (total 240); Open reconcile ke status donut (72). */
export const requisitionJobFamily: JobFamilyRow[] = [
  {
    family: "Operations",
    requisition: 46,
    reqPct: "29,5%",
    reqPctN: 29.5,
    hire: 86,
    hirePct: "35,8%",
    hirePctN: 35.8,
    open: 20,
  },
  {
    family: "Agronomy & Sustainability",
    requisition: 28,
    reqPct: "17,9%",
    reqPctN: 17.9,
    hire: 39,
    hirePct: "16,3%",
    hirePctN: 16.3,
    open: 13,
  },
  {
    family: "Finance & Accounting",
    requisition: 22,
    reqPct: "14,1%",
    reqPctN: 14.1,
    hire: 33,
    hirePct: "13,8%",
    hirePctN: 13.8,
    open: 10,
  },
  {
    family: "Sales & Marketing",
    requisition: 18,
    reqPct: "11,5%",
    reqPctN: 11.5,
    hire: 25,
    hirePct: "10,4%",
    hirePctN: 10.4,
    open: 8,
  },
  {
    family: "Human Capital",
    requisition: 16,
    reqPct: "10,3%",
    reqPctN: 10.3,
    hire: 28,
    hirePct: "11,7%",
    hirePctN: 11.7,
    open: 6,
  },
  {
    family: "ICT & Digital",
    requisition: 14,
    reqPct: "9,0%",
    reqPctN: 9.0,
    hire: 18,
    hirePct: "7,5%",
    hirePctN: 7.5,
    open: 8,
  },
  {
    family: "Legal & Compliance",
    requisition: 12,
    reqPct: "7,7%",
    reqPctN: 7.7,
    hire: 11,
    hirePct: "4,6%",
    hirePctN: 4.6,
    open: 7,
  },
];

export const jobFamilyTotal = { requisition: 156, hire: 240, open: 72 };

/* ── kualitas hire ───────────────────────────────────────── */

export const kualitasHire = {
  skor: "4,15",
  skala: "dari 5,00",
  pct: 83,
  bintang: 4,
};

export const kualitasHireBar = [
  { label: "Meets Expectation", pct: 68, color: PALETTE.green },
  { label: "Exceeds Expectation", pct: 24, color: PALETTE.blue },
  { label: "Below Expectation", pct: 6, color: PALETTE.amber },
  { label: "Poor Performance", pct: 2, color: PALETTE.red },
];

/* ── workforce plan → recruitment execution ──────────────── */

export interface FulfillmentStep {
  label: string;
  value: string;
  sub?: string;
}

/** Angka 928 & 3.714 konsisten dengan Workforce Planning (wp-data). */
export const wpFulfillmentChain: FulfillmentStep[] = [
  {
    label: "Kebutuhan Eksternal 2026",
    value: "928",
    sub: "dari net requirement 3.714 (Workforce Planning)",
  },
  { label: "Requisition Aktif", value: "156", sub: "snapshot Juni 2026" },
  { label: "Offer Accepted YTD", value: "312", sub: "fulfillment committed 33,6%" },
  { label: "Onboard YTD", value: "240", sub: "fulfillment onboard 25,9%" },
];

export const wpFulfillment = {
  committedPct: 33.6,
  onboardPct: 25.9,
  gap: 616,
  proyeksi:
    "Run-rate Sem I memproyeksikan ±624 offer accepted (67% target) di akhir 2026 — perlu akselerasi ±49% di Sem II.",
};

/* ── critical role hiring ────────────────────────────────── */

export const criticalFunnel: PipelineStage[] = [
  { stage: "Critical Role Open", value: "42", valueNum: 42, pct: "100%", color: SEQ_BLUE[1] },
  { stage: "Kandidat di Pipeline", value: "18", valueNum: 18, pct: "42,9%", color: SEQ_BLUE[2] },
  { stage: "Offer", value: "8", valueNum: 8, pct: "19,0%", color: SEQ_BLUE[3] },
  { stage: "Offer Accepted", value: "5", valueNum: 5, pct: "11,9%", color: SEQ_BLUE[4] },
  { stage: "Onboard", value: "3", valueNum: 3, pct: "7,1%", color: "#1b4a99" },
];

export const criticalHiring = {
  fulfillment: "7,1%",
  vacantLama: 24,
  catatan:
    "42 requisition critical role = subset 212 posisi kritis (Succession Planning; 54 tanpa suksesor). 24 posisi kosong > 3 bulan — eksposur Rp 48,2 M (People Risk Radar).",
};

/* ── post-hire outcome (cohort hire 2025, n = 486) ───────── */

export interface CohortStep {
  label: string;
  value: string;
  sub: string;
  tone: SlaTone;
}

export const hireCohort: CohortStep[] = [
  { label: "Performance 6 Bulan", value: "3,86", sub: "dari 5,00", tone: "amber" },
  { label: "Performance 12 Bulan", value: "4,05", sub: "dari 5,00 · naik +0,19", tone: "green" },
  { label: "Retensi 12 Bulan", value: "91,4%", sub: "444 dari 486 bertahan", tone: "green" },
  { label: "Produktivitas", value: "+8,2%", sub: "vs baseline unit", tone: "green" },
];

export const badHire = {
  pct: "2%",
  orang: 10,
  biaya: "Rp 14,8 M",
  catatan:
    "10 poor performer di cohort 2025 — estimasi biaya replacement + productivity loss Rp 14,8 M.",
};

/* ── decision center & recruitment intelligence ──────────── */

export interface RekrutmenDecision {
  title: string;
  situation: string;
  decision: string;
  dampak: string;
  due: string;
  tone: "red" | "amber";
}

export const rekrutmenDecisions: RekrutmenDecision[] = [
  {
    title: "Critical Role Hiring Gap",
    situation:
      "Critical role fulfillment baru 7,1% (3 dari 42); 24 posisi kosong > 3 bulan, terkonsentrasi di PTPN IV & V.",
    decision:
      "Setujui fast-track hiring critical role: pre-approved comp band, dedicated recruiter pod, dan external search.",
    dampak: "Eksposur Rp 48,2 M",
    due: "Q3 2026",
    tone: "red",
  },
  {
    title: "Workforce Plan Shortfall",
    situation:
      "Fulfillment 33,6% dari kebutuhan eksternal 928; run-rate memproyeksikan hanya 67% target tercapai akhir 2026.",
    decision:
      "Setujui ekspansi insentif referral + specialist sourcing untuk ICT & Digital dan Agronomy.",
    dampak: "Gap 616 posisi",
    due: "Q3 2026",
    tone: "red",
  },
  {
    title: "Bottleneck Hiring Manager Review",
    situation:
      "Median review hiring manager 6,7 hari (target 3) = 30% siklus; 18 requisition melanggar SLA.",
    decision:
      "Berlakukan SLA review 3 hari dengan auto-eskalasi dan slot interview terproteksi di kalender manajer.",
    dampak: "Potensi TTF −10–14 hari",
    due: "Q3 2026",
    tone: "amber",
  },
];

export const rekrutmenIntelligence = [
  "Volume hiring sehat (240 onboard Sem I), tetapi capability fulfillment tertinggal: critical role 7,1%, workforce plan 33,6%.",
  "Employee Referral menghasilkan hire terbaik — QoH 4,5 dan hire rate 6,9% — geser bauran sourcing dari Job Portal (QoH 3,9).",
  "Offer rejection 21,6% terkonsentrasi di role compensation-sensitive (ICT & Digital, Agronomy) — review daya saing comp band.",
  "Manager Agronomy TTF 45 hari, 57% di atas median — perluas talent pool eksternal + pre-approve comp band.",
];

export const rekrutmenPriority =
  "Prioritas Sem II: fast-track critical role, insentif referral, dan SLA hiring manager review.";
