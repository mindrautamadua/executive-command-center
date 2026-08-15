/**
 * Data statis halaman Milestone Tracking (/strategi-kinerja/milestone).
 * Periode acuan: 31 Mei 2026 (YTD). Angka induk: group-baseline.ts
 * (142 milestone · 58 selesai · 19 terlambat).
 */

import type { StgInsight, StgKpi } from "./stg-core";

/* ── 1. KPI Strip ─────────────────────────────────────────────────── */

export const smsKpi: StgKpi[] = [
  {
    label: "Total Milestone 2026",
    value: "142",
    sub: "6 Program Transformasi",
    compare: "Baseline RKAP 2026",
    icon: "milestone",
    tone: "blue",
  },
  {
    label: "Milestone Selesai",
    value: "58",
    sub: "40,8% dari Total",
    delta: "+13",
    trend: "up",
    deltaTone: "good",
    compare: "vs Apr 2026",
    icon: "target",
    tone: "green",
  },
  {
    label: "Milestone Terlambat",
    value: "19",
    sub: "8 di Program Swasembada Gula",
    subDanger: true,
    delta: "+3",
    trend: "up",
    deltaTone: "bad",
    compare: "vs Apr 2026",
    icon: "late",
    tone: "red",
  },
  {
    label: "Kritis ≤30 Hari",
    value: "7",
    sub: "Jatuh Tempo s.d. 30 Jun 2026",
    subDanger: true,
    compare: "Perlu eskalasi PMO",
    icon: "critical",
    tone: "amber",
  },
  {
    label: "On-Time Rate",
    value: "75%",
    sub: "Dari 58 Milestone Selesai",
    delta: "-3 pts",
    trend: "down",
    deltaTone: "bad",
    compare: "vs Q1 2026",
    icon: "clock",
    tone: "teal",
  },
];

/* ── 2. Milestone Timeline (gantt Q1-Q4 2026 per program) ─────────── */

export interface GanttBar {
  label: string;
  /** Bulan mulai (1-12, kalender 2026). */
  start: number;
  /** Bulan selesai (1-12). */
  end: number;
  /** Progres bar (%). */
  progress: number;
  status: "Selesai" | "Berjalan" | "Terlambat";
}

export interface GanttProgram {
  program: string;
  bars: GanttBar[];
}

export const ganttPrograms: GanttProgram[] = [
  {
    program: "Operational Excellence",
    bars: [
      { label: "Rollout wave 2 (12 PKS)", start: 1, end: 4, progress: 100, status: "Selesai" },
      { label: "Rollout wave 3 (14 PKS)", start: 5, end: 8, progress: 35, status: "Berjalan" },
      { label: "Standarisasi losses group", start: 7, end: 12, progress: 0, status: "Berjalan" },
    ],
  },
  {
    program: "Hilirisasi",
    bars: [
      { label: "Konstruksi refinery train 1", start: 1, end: 9, progress: 62, status: "Berjalan" },
      { label: "Onstream lini kemasan 2", start: 4, end: 9, progress: 55, status: "Berjalan" },
      { label: "FID refinery tahap II", start: 10, end: 12, progress: 0, status: "Berjalan" },
    ],
  },
  {
    program: "Swasembada Gula 2028",
    bars: [
      { label: "Land clearing gelombang I", start: 1, end: 4, progress: 100, status: "Terlambat" },
      { label: "Commissioning PG Glenmore", start: 3, end: 8, progress: 58, status: "Terlambat" },
      { label: "Tanam perluasan 12 rb ha", start: 6, end: 11, progress: 12, status: "Berjalan" },
    ],
  },
  {
    program: "Digitalisasi & ERP",
    bars: [
      { label: "Go-live ERP wave 1 (PalmCo)", start: 1, end: 3, progress: 100, status: "Selesai" },
      { label: "Data cleansing SGN", start: 3, end: 7, progress: 61, status: "Terlambat" },
      { label: "Go-live ERP wave 2 (SGN)", start: 8, end: 11, progress: 0, status: "Berjalan" },
    ],
  },
  {
    program: "Dekarbonisasi & EBT",
    bars: [
      { label: "Konstruksi 3 unit biogas", start: 2, end: 10, progress: 48, status: "Berjalan" },
      { label: "Perizinan PLTS klaster 1", start: 1, end: 6, progress: 70, status: "Terlambat" },
      { label: "Baseline karbon tersertifikasi", start: 5, end: 9, progress: 40, status: "Berjalan" },
    ],
  },
  {
    program: "Restrukturisasi Portofolio",
    bars: [
      { label: "Long-list divestasi tahap I", start: 1, end: 5, progress: 85, status: "Terlambat" },
      { label: "Keputusan skema 11 PG", start: 3, end: 6, progress: 30, status: "Terlambat" },
      { label: "Eksekusi divestasi tahap I", start: 7, end: 12, progress: 0, status: "Berjalan" },
    ],
  },
];

/* ── 3. Late Milestones — 19 baris ────────────────────────────────── */

export interface LateMilestone {
  milestone: string;
  program: string;
  owner: "PalmCo" | "SGN" | "PTPN I" | "Holding";
  /** Hari keterlambatan dari baseline. */
  hariTerlambat: number;
  dampak: string;
  pic: string;
}

/** 19 baris — distribusi owner selaras byOwner (PalmCo 6 · SGN 8 · PTPN I 4 · Holding 1). */
export const lateMilestones: LateMilestone[] = [
  {
    milestone: "Commissioning PG Glenmore",
    program: "Swasembada Gula 2028",
    owner: "SGN",
    hariTerlambat: 46,
    dampak: "Kapasitas giling +6 rb TCD mundur 1 musim",
    pic: "Dir. Produksi SGN",
  },
  {
    milestone: "Land clearing perluasan gelombang I",
    program: "Swasembada Gula 2028",
    owner: "SGN",
    hariTerlambat: 41,
    dampak: "Target tanam 12 rb ha 2026 berisiko",
    pic: "SEVP Tanaman SGN",
  },
  {
    milestone: "Keputusan skema restrukturisasi 11 PG",
    program: "Restrukturisasi Portofolio",
    owner: "SGN",
    hariTerlambat: 34,
    dampak: "Kerugian PG non-kompetitif berlanjut Rp 0,32 T/thn",
    pic: "Dirut SGN",
  },
  {
    milestone: "Kontrak pengadaan gilingan PG revitalisasi",
    program: "Swasembada Gula 2028",
    owner: "SGN",
    hariTerlambat: 32,
    dampak: "Jadwal revitalisasi 2 PG bergeser ke 2027",
    pic: "SEVP Teknik SGN",
  },
  {
    milestone: "Data cleansing master data SGN",
    program: "Digitalisasi & ERP",
    owner: "SGN",
    hariTerlambat: 28,
    dampak: "Go-live ERP wave 2 berisiko mundur",
    pic: "CIO Group",
  },
  {
    milestone: "Final term sheet mitra bioetanol",
    program: "Hilirisasi",
    owner: "SGN",
    hariTerlambat: 26,
    dampak: "FID bioetanol 120 rb KL tertunda",
    pic: "Dir. Pengembangan SGN",
  },
  {
    milestone: "Penanaman varietas unggul 8 rb ha",
    program: "Swasembada Gula 2028",
    owner: "SGN",
    hariTerlambat: 22,
    dampak: "Target rendemen 2027 sulit tercapai",
    pic: "SEVP Tanaman SGN",
  },
  {
    milestone: "Serah terima lahan HGU perluasan tebu",
    program: "Swasembada Gula 2028",
    owner: "SGN",
    hariTerlambat: 18,
    dampak: "Perluasan areal gelombang II tertahan",
    pic: "Dir. SDM & Umum SGN",
  },
  {
    milestone: "Mechanical completion refinery area tank farm",
    program: "Hilirisasi",
    owner: "PalmCo",
    hariTerlambat: 24,
    dampak: "Buffer jadwal komisioning train 1 menipis",
    pic: "PM Refinery PalmCo",
  },
  {
    milestone: "COD unit biogas Sei Mangkei",
    program: "Dekarbonisasi & EBT",
    owner: "PalmCo",
    hariTerlambat: 21,
    dampak: "Benefit EBT Q3 bergeser Rp 12 M",
    pic: "SEVP Teknik PalmCo",
  },
  {
    milestone: "Integrasi traceability 120 kebun plasma",
    program: "Digitalisasi & ERP",
    owner: "PalmCo",
    hariTerlambat: 19,
    dampak: "Kesiapan EUDR pemasok plasma tertunda",
    pic: "CIO Group",
  },
  {
    milestone: "Replanting semester I blok prioritas",
    program: "Operational Excellence",
    owner: "PalmCo",
    hariTerlambat: 15,
    dampak: "Carry-over 1,8 rb ha ke semester II",
    pic: "SEVP Tanaman PalmCo",
  },
  {
    milestone: "Overhaul boiler 4 PKS wave 3",
    program: "Operational Excellence",
    owner: "PalmCo",
    hariTerlambat: 12,
    dampak: "Utilisasi PKS wave 3 di bawah rencana",
    pic: "SEVP Teknik PalmCo",
  },
  {
    milestone: "Komisioning lini fraksinasi minyak goreng",
    program: "Hilirisasi",
    owner: "PalmCo",
    hariTerlambat: 9,
    dampak: "Volume kemasan Q3 -4 rb ton",
    pic: "PM Hilirisasi PalmCo",
  },
  {
    milestone: "Revitalisasi pabrik teh tahap I",
    program: "Operational Excellence",
    owner: "PTPN I",
    hariTerlambat: 27,
    dampak: "Perbaikan mutu ekspor teh tertunda",
    pic: "SEVP Operasi PTPN I",
  },
  {
    milestone: "Inventarisasi legalitas aset 3 regional",
    program: "Restrukturisasi Portofolio",
    owner: "PTPN I",
    hariTerlambat: 23,
    dampak: "Long-list divestasi tahap I belum final",
    pic: "Dir. SDM & Umum PTPN I",
  },
  {
    milestone: "Appraisal KJPP aset non-produktif",
    program: "Restrukturisasi Portofolio",
    owner: "PTPN I",
    hariTerlambat: 21,
    dampak: "Keputusan divestasi BOD overdue",
    pic: "Dir. Keuangan PTPN I",
  },
  {
    milestone: "Elektrifikasi pabrik karet tahap I",
    program: "Dekarbonisasi & EBT",
    owner: "PTPN I",
    hariTerlambat: 16,
    dampak: "Target intensitas emisi PTPN I bergeser",
    pic: "SEVP Teknik PTPN I",
  },
  {
    milestone: "Izin interkoneksi PLTS klaster 1",
    program: "Dekarbonisasi & EBT",
    owner: "Holding",
    hariTerlambat: 14,
    dampak: "COD PLTS 8 MWp mundur ke Q1 2027",
    pic: "Dir. Perencanaan Holding",
  },
];

/* ── 4. Milestone by Owner (stacked) ──────────────────────────────── */

export interface OwnerMilestoneRow {
  owner: string;
  done: number;
  onTrack: number;
  late: number;
}

/** Jumlah seluruh sel = 142 · done = 58 · late = 19 (baseline). */
export const byOwner: OwnerMilestoneRow[] = [
  { owner: "PalmCo", done: 24, onTrack: 32, late: 6 },
  { owner: "SGN", done: 14, onTrack: 18, late: 8 },
  { owner: "PTPN I", done: 9, onTrack: 12, late: 4 },
  { owner: "Holding", done: 11, onTrack: 3, late: 1 },
];

/* ── 5. Critical Path — 7 milestone jatuh tempo ≤30 hari ──────────── */

export interface CriticalPathItem {
  milestone: string;
  program: string;
  due: string;
  /** Sisa hari menuju jatuh tempo. */
  sisaHari: number;
  risk: "Tinggi" | "Sedang";
  pic: string;
}

export const criticalPath: CriticalPathItem[] = [
  {
    milestone: "Final term sheet mitra bioetanol",
    program: "Hilirisasi",
    due: "10 Jun 2026",
    sisaHari: 10,
    risk: "Tinggi",
    pic: "Dir. Pengembangan SGN",
  },
  {
    milestone: "Keputusan skema restrukturisasi 11 PG",
    program: "Restrukturisasi Portofolio",
    due: "15 Jun 2026",
    sisaHari: 15,
    risk: "Tinggi",
    pic: "Dirut SGN",
  },
  {
    milestone: "Puncak kapasitas giling 17 PG",
    program: "Swasembada Gula 2028",
    due: "20 Jun 2026",
    sisaHari: 20,
    risk: "Tinggi",
    pic: "Dir. Produksi SGN",
  },
  {
    milestone: "Cut-off data migrasi ERP wave 2",
    program: "Digitalisasi & ERP",
    due: "22 Jun 2026",
    sisaHari: 22,
    risk: "Sedang",
    pic: "CIO Group",
  },
  {
    milestone: "Persetujuan long-list divestasi tahap I",
    program: "Restrukturisasi Portofolio",
    due: "24 Jun 2026",
    sisaHari: 24,
    risk: "Tinggi",
    pic: "Dir. Keuangan Holding",
  },
  {
    milestone: "Tie-in pipa refinery–tank farm",
    program: "Hilirisasi",
    due: "27 Jun 2026",
    sisaHari: 27,
    risk: "Sedang",
    pic: "PM Refinery PalmCo",
  },
  {
    milestone: "Kontrak EPC PLTS klaster 1",
    program: "Dekarbonisasi & EBT",
    due: "30 Jun 2026",
    sisaHari: 30,
    risk: "Sedang",
    pic: "Dir. Perencanaan Holding",
  },
];

/* ── 6. Completion Trend (kumulatif rencana vs aktual) ────────────── */

export interface CompletionPoint {
  month: string;
  /** Rencana kumulatif milestone selesai. */
  rencana: number;
  /** Aktual kumulatif; kosong setelah Mei. */
  aktual?: number;
}

/** Aktual Mei = 58 (baseline); rencana FY = 142. */
export const completionTrend: CompletionPoint[] = [
  { month: "Jan", rencana: 10, aktual: 9 },
  { month: "Feb", rencana: 22, aktual: 20 },
  { month: "Mar", rencana: 36, aktual: 32 },
  { month: "Apr", rencana: 52, aktual: 45 },
  { month: "Mei", rencana: 68, aktual: 58 },
  { month: "Jun", rencana: 82 },
  { month: "Jul", rencana: 96 },
  { month: "Agu", rencana: 110 },
  { month: "Sep", rencana: 121 },
  { month: "Okt", rencana: 130 },
  { month: "Nov", rencana: 137 },
  { month: "Des", rencana: 142 },
];

/* ── 7. Insight & rekomendasi ─────────────────────────────────────── */

export const smsInsights: StgInsight[] = [
  {
    title: "Keterlambatan terkonsentrasi di Swasembada Gula",
    text: "8 dari 19 milestone terlambat milik SGN, 5 di antaranya saling bergantung pada 2 keputusan BOD yang overdue. Menyelesaikan keputusan membuka 5 milestone sekaligus.",
    tone: "bad",
  },
  {
    title: "Gap rencana vs aktual melebar",
    text: "Aktual kumulatif 58 vs rencana 68 (-10). Tanpa recovery plan Juni-Juli, backlog jatuh ke Q4 yang padat komisioning.",
    tone: "warn",
  },
  {
    title: "7 milestone kritis butuh perhatian 30 hari ke depan",
    text: "4 berisiko tinggi dan seluruhnya bergantung keputusan/kontrak, bukan konstruksi — eskalasi ke Radirsus lebih efektif daripada percepatan lapangan.",
    tone: "info",
  },
];
