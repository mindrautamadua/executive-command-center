/**
 * Data statis halaman Keputusan Direksi & Dekom (/strategi-kinerja/keputusan-bod).
 * Periode acuan: 31 Mei 2026 (YTD). Angka induk: STRATEGI (group-baseline)
 * — 46 keputusan YTD · 31 selesai · 12 berjalan · 3 overdue.
 */

import type { StgInsight, StgKpi } from "./stg-core";

/* ── 1. KPI Strip ─────────────────────────────────────────────────── */

export const sbdKpi: StgKpi[] = [
  {
    label: "Keputusan BOD YTD",
    value: "46",
    sub: "Radirsus, Radir & Radirkom",
    delta: "+8",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "decision",
    tone: "blue",
  },
  {
    label: "Selesai Ditindaklanjuti",
    value: "31",
    sub: "67% dari Total",
    delta: "+5",
    trend: "up",
    deltaTone: "good",
    compare: "vs Apr 2026",
    icon: "target",
    tone: "green",
  },
  {
    label: "Sedang Berjalan",
    value: "12",
    sub: "Dalam Batas Waktu",
    compare: "Stabil vs Apr 2026",
    icon: "clock",
    tone: "teal",
  },
  {
    label: "Overdue",
    value: "3",
    sub: "Divestasi · 11 PG · Bioetanol",
    subDanger: true,
    delta: "+1",
    trend: "up",
    deltaTone: "bad",
    compare: "vs Apr 2026",
    icon: "late",
    tone: "red",
  },
  {
    label: "Rata-rata Umur Tindak Lanjut",
    value: "24",
    sub: "Hari per Keputusan",
    delta: "-3 hari",
    trend: "down",
    deltaTone: "good",
    compare: "vs Q1 2026",
    icon: "score",
    tone: "amber",
  },
];

/* ── 2. Decision Pipeline (stacked status per bulan) ──────────────── */

export interface PipelineMonth {
  month: string;
  selesai: number;
  berjalan: number;
  overdue: number;
}

/** Σ = 46 (31 selesai · 12 berjalan · 3 overdue). */
export const pipeline: PipelineMonth[] = [
  { month: "Jan", selesai: 8, berjalan: 1, overdue: 0 },
  { month: "Feb", selesai: 7, berjalan: 1, overdue: 0 },
  { month: "Mar", selesai: 7, berjalan: 2, overdue: 1 },
  { month: "Apr", selesai: 6, berjalan: 4, overdue: 1 },
  { month: "Mei", selesai: 3, berjalan: 4, overdue: 1 },
];

/* ── 3. Overdue Decisions — detail 3 ──────────────────────────────── */

export interface OverdueDecision {
  title: string;
  forum: string;
  ditetapkan: string;
  due: string;
  /** Hari melewati batas waktu. */
  overdueHari: number;
  pic: string;
  hambatan: string;
  eksposur: string;
}

export const overdueDetail: OverdueDecision[] = [
  {
    title: "Divestasi Aset Non-Produktif PTPN I Tahap I",
    forum: "Radirsus 11 Mar 2026",
    ditetapkan: "11 Mar 2026",
    due: "25 Apr 2026",
    overdueHari: 21,
    pic: "Dir. Keuangan PTPN I",
    hambatan: "Appraisal ulang KJPP atas 9 aset belum final; inventarisasi legalitas 3 regional terlambat",
    eksposur: "Rp 1,4 T",
  },
  {
    title: "Skema Restrukturisasi 11 PG Non-Kompetitif",
    forum: "Radir 8 Apr 2026",
    ditetapkan: "8 Apr 2026",
    due: "12 Mei 2026",
    overdueHari: 34,
    pic: "Dirut SGN",
    hambatan: "Kajian dampak sosial-tenaga kerja & opsi konsolidasi giling belum disepakati antar direktorat",
    eksposur: "Rp 0,32 T/thn",
  },
  {
    title: "Struktur Kemitraan Bioetanol Tebu",
    forum: "Radirkom 6 Mei 2026",
    ditetapkan: "6 Mei 2026",
    due: "19 Mei 2026",
    overdueHari: 12,
    pic: "Dir. Pengembangan SGN",
    hambatan: "Term sheet mitra strategis: klausul alokasi feedstock tetes 2027 belum sepakat",
    eksposur: "Rp 1,1 T",
  },
];

/* ── 4. Decision Register — 14 keputusan terkini ──────────────────── */

export type DecisionCategory =
  | "Investasi"
  | "Organisasi & SDM"
  | "Aset"
  | "Keuangan"
  | "Lainnya";

export type DecisionStatus = "Selesai" | "Berjalan" | "Overdue";

export interface BoardDecision {
  tanggal: string;
  title: string;
  category: DecisionCategory;
  pic: string;
  due: string;
  status: DecisionStatus;
}

export const register: BoardDecision[] = [
  {
    tanggal: "27 Mei 2026",
    title: "Persetujuan FID lini kemasan minyak goreng tahap II",
    category: "Investasi",
    pic: "Dirut PalmCo",
    due: "31 Jul 2026",
    status: "Berjalan",
  },
  {
    tanggal: "20 Mei 2026",
    title: "Penetapan kebijakan hedging harga CPO maksimum 20% volume",
    category: "Keuangan",
    pic: "Dir. Keuangan Holding",
    due: "30 Jun 2026",
    status: "Berjalan",
  },
  {
    tanggal: "13 Mei 2026",
    title: "Restrukturisasi organisasi PMO Transformasi Group",
    category: "Organisasi & SDM",
    pic: "Dir. SDM Holding",
    due: "15 Agu 2026",
    status: "Berjalan",
  },
  {
    tanggal: "6 Mei 2026",
    title: "Struktur kemitraan bioetanol tebu",
    category: "Investasi",
    pic: "Dir. Pengembangan SGN",
    due: "19 Mei 2026",
    status: "Overdue",
  },
  {
    tanggal: "29 Apr 2026",
    title: "Refinancing fasilitas sindikasi Rp 4 T",
    category: "Keuangan",
    pic: "Dir. Keuangan Holding",
    due: "30 Sep 2026",
    status: "Berjalan",
  },
  {
    tanggal: "22 Apr 2026",
    title: "Persetujuan capex revitalisasi PG Glenmore & Assembagoes",
    category: "Investasi",
    pic: "Dir. Produksi SGN",
    due: "31 Mei 2026",
    status: "Selesai",
  },
  {
    tanggal: "15 Apr 2026",
    title: "Penunjukan task force EUDR & traceability rantai pasok",
    category: "Lainnya",
    pic: "Dir. Pemasaran Holding",
    due: "15 Mei 2026",
    status: "Selesai",
  },
  {
    tanggal: "8 Apr 2026",
    title: "Skema restrukturisasi 11 PG non-kompetitif",
    category: "Aset",
    pic: "Dirut SGN",
    due: "12 Mei 2026",
    status: "Overdue",
  },
  {
    tanggal: "1 Apr 2026",
    title: "Alokasi anggaran replanting semester II 2026",
    category: "Investasi",
    pic: "Dirut PalmCo",
    due: "30 Apr 2026",
    status: "Selesai",
  },
  {
    tanggal: "25 Mar 2026",
    title: "Kebijakan talent mobility lintas subholding musim giling",
    category: "Organisasi & SDM",
    pic: "Dir. SDM Holding",
    due: "30 Apr 2026",
    status: "Selesai",
  },
  {
    tanggal: "18 Mar 2026",
    title: "Persetujuan kontrak EPC 3 unit biogas PKS",
    category: "Investasi",
    pic: "SEVP Teknik PalmCo",
    due: "30 Apr 2026",
    status: "Selesai",
  },
  {
    tanggal: "11 Mar 2026",
    title: "Divestasi aset non-produktif PTPN I tahap I",
    category: "Aset",
    pic: "Dir. Keuangan PTPN I",
    due: "25 Apr 2026",
    status: "Overdue",
  },
  {
    tanggal: "4 Mar 2026",
    title: "Penetapan dividen interim & jadwal RUPS",
    category: "Keuangan",
    pic: "Corsec Holding",
    due: "31 Mar 2026",
    status: "Selesai",
  },
  {
    tanggal: "25 Feb 2026",
    title: "Persetujuan roadmap dekarbonisasi & target EBT 2030",
    category: "Lainnya",
    pic: "Dir. Perencanaan Holding",
    due: "31 Mar 2026",
    status: "Selesai",
  },
];

/* ── 5. Decision by Category (donut, % dari 46) ───────────────────── */

export interface CategoryShare {
  category: DecisionCategory;
  /** Porsi dari 46 keputusan (%) — jumlah = 100. */
  pct: number;
  jumlah: number;
}

/** Jumlah = 46. */
export const byCategory: CategoryShare[] = [
  { category: "Investasi", pct: 35, jumlah: 16 },
  { category: "Organisasi & SDM", pct: 20, jumlah: 9 },
  { category: "Aset", pct: 17, jumlah: 8 },
  { category: "Keuangan", pct: 15, jumlah: 7 },
  { category: "Lainnya", pct: 13, jumlah: 6 },
];

/* ── 6. Upcoming Board Agenda ─────────────────────────────────────── */

export interface AgendaItem {
  tanggal: string;
  forum: "Radirsus" | "Radir" | "Radirkom";
  agenda: string;
  /** Kesiapan materi rapat. */
  materi: "Siap" | "Dalam Penyusunan";
}

export const upcomingAgenda: AgendaItem[] = [
  {
    tanggal: "9 Jun 2026",
    forum: "Radirsus",
    agenda: "Keputusan skema restrukturisasi 11 PG & recovery plan Swasembada Gula",
    materi: "Dalam Penyusunan",
  },
  {
    tanggal: "16 Jun 2026",
    forum: "Radir",
    agenda: "Persetujuan long-list divestasi aset non-produktif PTPN I tahap I",
    materi: "Siap",
  },
  {
    tanggal: "23 Jun 2026",
    forum: "Radirkom",
    agenda: "Laporan kinerja KPI korporat Q2 & funding mix portofolio inisiatif Rp 21,8 T",
    materi: "Dalam Penyusunan",
  },
  {
    tanggal: "30 Jun 2026",
    forum: "Radir",
    agenda: "Final term sheet kemitraan bioetanol & FID refinery tahap II (pra-kajian)",
    materi: "Dalam Penyusunan",
  },
];

/* ── 7. Insight & rekomendasi ─────────────────────────────────────── */

export const sbdInsights: StgInsight[] = [
  {
    title: "3 keputusan overdue menahan Rp 2,8 T inisiatif",
    text: "Ketiganya (divestasi PTPN I, 11 PG, bioetanol) adalah prasyarat 7 milestone dan 3 inisiatif strategis. Jadwalkan sebagai agenda tunggal Radirsus 9 Juni.",
    tone: "bad",
  },
  {
    title: "Umur tindak lanjut membaik, backlog Mei naik",
    text: "Rata-rata turun ke 24 hari, tetapi 4 dari 8 keputusan Mei masih berjalan. Pastikan kapasitas tindak lanjut PIC sebelum menambah keputusan baru Q3.",
    tone: "warn",
  },
  {
    title: "Porsi keputusan investasi dominan (35%)",
    text: "Konsisten dengan fase eksekusi RJPP. Pertimbangkan delegasi keputusan investasi < Rp 250 M ke komite investasi agar BOD fokus pada keputusan struktural.",
    tone: "info",
  },
];
