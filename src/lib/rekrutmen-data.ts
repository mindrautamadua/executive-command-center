import type { Trend } from "./data";
import type { ChipTone } from "@/components/ui/KpiCard";
import { PALETTE, SEQ_BLUE } from "./chart-palette";

/* ── KPI strip ───────────────────────────────────────────── */

export interface RekrutmenKpi {
  label: string;
  value: string;
  delta?: string;
  trend?: Trend;
  /** metrik yang justru bagus ketika turun diberi tone "good" */
  deltaTone?: "good" | "bad";
  compare: string;
  icon: "requisition" | "kandidat" | "seleksi" | "offer" | "ttf" | "rate" | "cost";
  tone: ChipTone;
  line: string;
  series: number[];
  /** gauge cincin menggantikan sparkline */
  gauge?: { pct: number; color: string };
}

export const rekrutmenKpi: RekrutmenKpi[] = [
  {
    label: "Total Requisition",
    value: "156",
    delta: "12,5%",
    trend: "up",
    compare: "vs Q1 2026",
    icon: "requisition",
    tone: "blue",
    line: PALETTE.blue,
    series: [30, 34, 31, 38, 33, 41, 36, 44, 39, 47, 42, 50, 46, 52, 57],
  },
  {
    label: "Total Kandidat",
    value: "4.789",
    delta: "18,7%",
    trend: "up",
    compare: "vs Q1 2026",
    icon: "kandidat",
    tone: "green",
    line: PALETTE.green,
    series: [26, 32, 29, 36, 32, 40, 35, 43, 38, 46, 41, 49, 45, 52, 58],
  },
  {
    label: "Kandidat Lolos Seleksi",
    value: "892",
    delta: "15,4%",
    trend: "up",
    compare: "vs Q1 2026",
    icon: "seleksi",
    tone: "purple",
    line: PALETTE.purple,
    series: [30, 37, 32, 41, 34, 44, 37, 46, 40, 49, 43, 52, 47, 54, 59],
  },
  {
    label: "Offer Diterima",
    value: "312",
    delta: "9,3%",
    trend: "up",
    compare: "vs Q1 2026",
    icon: "offer",
    tone: "amber",
    line: PALETTE.amber,
    series: [31, 36, 33, 40, 35, 43, 38, 45, 41, 48, 44, 50, 47, 53, 56],
  },
  {
    label: "Time to Fill (Hari)",
    value: "28,6",
    delta: "-4,2 hari",
    trend: "down",
    // makin cepat terisi = makin baik
    deltaTone: "good",
    compare: "vs Q1 2026",
    icon: "ttf",
    tone: "teal",
    line: PALETTE.teal,
    series: [58, 52, 55, 49, 52, 46, 49, 43, 46, 41, 44, 38, 41, 36, 33],
  },
  {
    label: "Offer Acceptance Rate",
    value: "78,3%",
    delta: "7,1%",
    trend: "up",
    compare: "vs Q1 2026",
    icon: "rate",
    tone: "blue",
    line: PALETTE.blue,
    series: [],
    gauge: { pct: 78.3, color: PALETTE.blue },
  },
  {
    label: "Cost per Hire",
    value: "Rp 4,21 Jt",
    delta: "-6,8%",
    trend: "down",
    // biaya turun = efisiensi naik
    deltaTone: "good",
    compare: "vs Q1 2026",
    icon: "cost",
    tone: "slate",
    line: PALETTE.slate,
    series: [52, 48, 54, 47, 51, 45, 49, 44, 47, 42, 45, 40, 43, 38, 36],
  },
];

/* ── requisition by status (donut) ───────────────────────── */

export const requisitionStatus = [
  { name: "Open", value: 72, pct: "46,2%", color: PALETTE.blue },
  { name: "In Progress", value: 48, pct: "30,8%", color: PALETTE.green },
  { name: "On Hold", value: 18, pct: "11,5%", color: PALETTE.amber },
  { name: "Closed", value: 18, pct: "11,5%", color: PALETTE.slate },
];

export const totalRequisition = "156";

/* ── tren rekrutmen ──────────────────────────────────────── */

export const trenRekrutmen = [
  { name: "Jan 2026", requisition: 112, hire: 45 },
  { name: "Feb 2026", requisition: 128, hire: 52 },
  { name: "Mar 2026", requisition: 142, hire: 61 },
  { name: "Apr 2026", requisition: 156, hire: 73 },
  { name: "Mei 2026", requisition: 168, hire: 81 },
  { name: "Jun 2026", requisition: 156, hire: 89 },
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
  { stage: "Offer", value: "312", valueNum: 312, pct: "6,5%", color: SEQ_BLUE[4] },
];

export const conversionRate = "6,5%";

/* ── sumber kandidat ─────────────────────────────────────── */

export interface SumberRow {
  sumber: string;
  value: string;
  /** nilai numerik — persentase bar dihitung dari sini */
  valueNum: number;
  pct: string;
  color: string;
}

export const sumberKandidat: SumberRow[] = [
  { sumber: "Job Portal", value: "1.956", valueNum: 1956, pct: "40,8%", color: PALETTE.blue },
  { sumber: "Employee Referral", value: "1.245", valueNum: 1245, pct: "26,0%", color: PALETTE.green },
  { sumber: "Company Website", value: "862", valueNum: 862, pct: "18,0%", color: PALETTE.amber },
  { sumber: "Social Media", value: "438", valueNum: 438, pct: "9,1%", color: PALETTE.purple },
  { sumber: "Others", value: "288", valueNum: 288, pct: "6,0%", color: PALETTE.slate },
];

/* ── rekrutmen per unit organisasi ───────────────────────── */

export interface UnitRow {
  unit: string;
  requisition: number;
  hire: number;
  ttf: string;
}

export const rekrutmenUnit: UnitRow[] = [
  { unit: "PTPN III (Persero)", requisition: 64, hire: 52, ttf: "24,5" },
  { unit: "PTPN IV", requisition: 28, hire: 23, ttf: "26,1" },
  { unit: "PTPN I", requisition: 24, hire: 19, ttf: "29,7" },
  { unit: "PTPN V", requisition: 18, hire: 14, ttf: "31,2" },
  { unit: "PTPN II", requisition: 12, hire: 9, ttf: "32,8" },
  { unit: "PalmCo", requisition: 8, hire: 7, ttf: "22,3" },
  { unit: "Supporting Co", requisition: 2, hire: 2, ttf: "19,5" },
];

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
    judul: "Dashboard rekrutmen Q2 2026 telah diperbarui",
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

export const requisitionJobFamily: JobFamilyRow[] = [
  {
    family: "Operations",
    requisition: 46,
    reqPct: "29,5%",
    reqPctN: 29.5,
    hire: 98,
    hirePct: "31,4%",
    hirePctN: 31.4,
    open: 22,
  },
  {
    family: "Agronomy & Sustainability",
    requisition: 28,
    reqPct: "17,9%",
    reqPctN: 17.9,
    hire: 45,
    hirePct: "14,4%",
    hirePctN: 14.4,
    open: 15,
  },
  {
    family: "Finance & Accounting",
    requisition: 22,
    reqPct: "14,1%",
    reqPctN: 14.1,
    hire: 38,
    hirePct: "12,2%",
    hirePctN: 12.2,
    open: 11,
  },
  {
    family: "Sales & Marketing",
    requisition: 18,
    reqPct: "11,5%",
    reqPctN: 11.5,
    hire: 29,
    hirePct: "9,3%",
    hirePctN: 9.3,
    open: 9,
  },
  {
    family: "Human Capital",
    requisition: 16,
    reqPct: "10,3%",
    reqPctN: 10.3,
    hire: 32,
    hirePct: "10,3%",
    hirePctN: 10.3,
    open: 7,
  },
  {
    family: "ICT & Digital",
    requisition: 14,
    reqPct: "9,0%",
    reqPctN: 9.0,
    hire: 21,
    hirePct: "6,7%",
    hirePctN: 6.7,
    open: 9,
  },
  {
    family: "Legal & Compliance",
    requisition: 12,
    reqPct: "7,7%",
    reqPctN: 7.7,
    hire: 11,
    hirePct: "3,5%",
    hirePctN: 3.5,
    open: 8,
  },
];

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

/* ── insight AI ──────────────────────────────────────────── */

export const insightAiRekrutmen = [
  "Time to Fill menurun 4,2 hari dibanding Q1 2026. Pertahankan strategi sourcing yang efektif.",
  "Sumber terbaik adalah Employee Referral dengan Offer Acceptance Rate 85%.",
  "Posisi dengan time to fill tertinggi: Manager Agronomy (45 hari). Disarankan memperluas talent pool.",
];
