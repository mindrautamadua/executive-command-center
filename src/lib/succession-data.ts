import type { Trend } from "./data";
import type { ChipTone } from "@/components/ui/KpiCard";
import { PALETTE, READINESS, SEMANTIC } from "./chart-palette";

/* ── KPI strip ───────────────────────────────────────────── */

export interface SuksesiKpi {
  label: string;
  value: string;
  /** Delta dengan panah naik/turun. */
  delta?: string;
  trend?: Trend;
  /** "good" untuk metrik yang bagus saat turun (mis. risiko kekosongan). */
  deltaTone?: "good" | "bad";
  /** Angka pendamping tanpa panah (mis. porsi terhadap posisi kritis). */
  extra?: string;
  compare: string;
  /** Definisi/metodologi metrik — tampil sebagai tooltip ⓘ di kartu. */
  info?: string;
  icon: "kritis" | "siap" | "pool" | "bench" | "setahun" | "risiko";
  tone: ChipTone;
  line: string;
  series: number[];
}

export const suksesiKpi: SuksesiKpi[] = [
  {
    label: "Posisi Kritis",
    value: "212",
    delta: "3,4%",
    trend: "up",
    compare: "vs Q1 2026: 205",
    icon: "kritis",
    tone: "blue",
    line: PALETTE.blue,
    series: [30, 35, 32, 38, 34, 41, 37, 44, 40, 46, 43, 49, 45, 52, 55],
  },
  {
    label: "Posisi dengan Kandidat Siap",
    value: "158",
    extra: "74,5%",
    compare: "vs Q1 2026: 71,2%",
    info: "Coverage suksesi: 158 dari 212 posisi kritis (74,5%) memiliki ≥1 kandidat suksesor teridentifikasi. Kesiapan kandidat: 64 siap <1 th, 102 siap 1-2 th, 132 siap 2-3 th, 102 di atas 3 th.",
    icon: "siap",
    tone: "green",
    line: PALETTE.green,
    series: [29, 34, 31, 37, 34, 40, 36, 43, 39, 45, 42, 48, 44, 50, 53],
  },
  {
    label: "Talent Pool (High Potential)",
    value: "1.245",
    delta: "5,5%",
    trend: "up",
    compare: "vs Q1 2026: 1.180",
    icon: "pool",
    tone: "purple",
    line: PALETTE.purple,
    series: [31, 36, 33, 40, 36, 43, 39, 46, 42, 49, 45, 51, 47, 54, 58],
  },
  {
    label: "Bench Strength (Rata-rata)",
    value: "1,6",
    delta: "0,1",
    trend: "up",
    compare: "vs Q1 2026: 1,5",
    info: "Bench Strength = rata-rata jumlah suksesor layak per posisi kritis, dibobot kualitas & tingkat kesiapan kandidat. Pipeline mentah: 400 kandidat / 212 posisi = 1,89; setelah pembobotan kesiapan = 1,6. Target ≥ 1,0.",
    icon: "bench",
    tone: "amber",
    line: PALETTE.amber,
    series: [33, 37, 34, 40, 37, 42, 39, 44, 41, 46, 43, 48, 45, 50, 52],
  },
  {
    label: "Siap dalam 1 Tahun",
    value: "64",
    extra: "16,0%",
    compare: "vs Q1 2026: 13,7%",
    info: "64 dari 400 kandidat suksesor (16,0%) siap menempati posisi target dalam waktu kurang dari 1 tahun.",
    icon: "setahun",
    tone: "teal",
    line: PALETTE.teal,
    series: [30, 35, 32, 39, 35, 41, 38, 44, 40, 47, 43, 49, 46, 52, 54],
  },
  {
    label: "Risiko Kekosongan",
    value: "54",
    extra: "25,5%",
    compare: "vs Q1 2026: 28,8%",
    info: "Posisi kritis tanpa kandidat suksesor teridentifikasi: 212 − 158 = 54 (25,5% dari posisi kritis). Turun dari 28,8% pada Q1 2026.",
    icon: "risiko",
    tone: "red",
    line: PALETTE.red,
    series: [52, 48, 51, 45, 49, 44, 47, 42, 45, 41, 44, 39, 42, 38, 36],
  },
];

/* ── Peta suksesi: 9 box talent grid ─────────────────────── */

/**
 * Jumlah karyawan per sel, urutan kanonik shared/NineBoxGrid
 * (baris atas = potensi tinggi; kolom kanan = kinerja tinggi).
 * Total = 1.245 karyawan yang dinilai.
 */
export const nineBox: number[] = [88, 247, 307, 115, 211, 160, 39, 50, 28];

/* ── Posisi kritis dengan risiko kekosongan ──────────────── */

export type RiskLevel = "Tinggi" | "Sedang" | "Rendah";

export interface PosisiKritis {
  posisi: string;
  unit: string;
  risk: RiskLevel;
  bench: string;
  /** Nilai numerik bench strength — untuk bar mini vs target 1,0. */
  benchVal: number;
  kandidat: number;
  /** Estimasi kesiapan kandidat terdekat: "Siap" bila kandidat ≥ 1. */
  estSiap: string;
}

export const posisiKritis: PosisiKritis[] = [
  { posisi: "Direktur Operasional", unit: "PTPN III (Persero)", risk: "Tinggi", bench: "0,5", benchVal: 0.5, kandidat: 0, estSiap: "9 bln" },
  { posisi: "VP Agronomi", unit: "PTPN IV", risk: "Tinggi", bench: "0,7", benchVal: 0.7, kandidat: 1, estSiap: "Siap" },
  { posisi: "VP Keuangan", unit: "Holding & Supporting Co", risk: "Tinggi", bench: "0,8", benchVal: 0.8, kandidat: 0, estSiap: "12 bln" },
  { posisi: "Kepala Kebun", unit: "PTPN V", risk: "Tinggi", bench: "0,9", benchVal: 0.9, kandidat: 2, estSiap: "Siap" },
  { posisi: "VP Supply Chain", unit: "PTPN II", risk: "Sedang", bench: "1,0", benchVal: 1.0, kandidat: 1, estSiap: "Siap" },
  { posisi: "VP Human Capital", unit: "PTPN III (Persero)", risk: "Sedang", bench: "1,2", benchVal: 1.2, kandidat: 2, estSiap: "Siap" },
  { posisi: "VP Engineering", unit: "PalmCo", risk: "Sedang", bench: "1,3", benchVal: 1.3, kandidat: 1, estSiap: "Siap" },
  { posisi: "Kepala Pabrik", unit: "PTPN IV", risk: "Sedang", bench: "1,4", benchVal: 1.4, kandidat: 2, estSiap: "Siap" },
  { posisi: "VP IT & Digital", unit: "Holding & Supporting Co", risk: "Sedang", bench: "1,5", benchVal: 1.5, kandidat: 2, estSiap: "Siap" },
  { posisi: "Kepala Unit Usaha", unit: "PTPN I", risk: "Sedang", bench: "1,6", benchVal: 1.6, kandidat: 2, estSiap: "Siap" },
];

/** Kelas chip tone (globals.css) — aman dark mode. */
export const RISK_STYLE: Record<RiskLevel, string> = {
  Tinggi: "tone-red",
  Sedang: "tone-amber",
  Rendah: "tone-green",
};

/* ── Pipeline kepemimpinan per level ─────────────────────── */

export const kesiapanSeri = [
  { key: "s1", nama: "Siap < 1 Tahun", color: READINESS[0] },
  { key: "s2", nama: "Siap 1-2 Tahun", color: READINESS[1] },
  { key: "s3", nama: "Siap 2-3 Tahun", color: READINESS[2] },
  { key: "s4", nama: "> 3 Tahun", color: READINESS[3] },
] as const;

export interface PipelineRow {
  level: string;
  /** [< 1 th, 1-2 th, 2-3 th, > 3 th] */
  nilai: [number, number, number, number];
  total: number;
}

export const pipelineLevel: PipelineRow[] = [
  { level: "Board Level", nilai: [2, 3, 4, 6], total: 15 },
  { level: "Direktur", nilai: [6, 7, 10, 12], total: 35 },
  { level: "VP", nilai: [11, 17, 22, 20], total: 70 },
  { level: "Manager", nilai: [26, 44, 55, 38], total: 163 },
  { level: "Supervisor", nilai: [19, 31, 41, 26], total: 117 },
];

export const pipelineTotal = { nilai: [64, 102, 132, 102], total: 400 };

/** Total terbesar antar level — dipakai sebagai skala lebar bar. */
export const pipelineMax = Math.max(...pipelineLevel.map((r) => r.total));

/* ── Talent pool berdasarkan fungsi ──────────────────────── */

export interface PoolSlice {
  name: string;
  jumlah: number;
  pct: string;
  share: number;
  color: string;
}

export const talentPoolFungsi: PoolSlice[] = [
  { name: "Operasional", jumlah: 388, pct: "31,2%", share: 31.2, color: PALETTE.blue },
  { name: "Keuangan", jumlah: 204, pct: "16,4%", share: 16.4, color: PALETTE.green },
  { name: "Komersial", jumlah: 187, pct: "15,0%", share: 15.0, color: PALETTE.amber },
  { name: "Teknologi & Digital", jumlah: 129, pct: "10,4%", share: 10.4, color: PALETTE.purple },
  { name: "SDM & Umum", jumlah: 119, pct: "9,6%", share: 9.6, color: PALETTE.teal },
  { name: "Lainnya", jumlah: 218, pct: "17,4%", share: 17.4, color: PALETTE.slate },
];

/* ── Tren bench strength ─────────────────────────────────── */

/** Nilai Mar wajib = angka "vs Q1 2026" di KPI (1,5); Jun = nilai KPI (1,6). */
export const trenBenchStrength = [
  { name: "Jan 2026", value: 1.2 },
  { name: "Feb 2026", value: 1.3 },
  { name: "Mar 2026", value: 1.5 },
  { name: "Apr 2026", value: 1.5 },
  { name: "Mei 2026", value: 1.6 },
  { name: "Jun 2026", value: 1.6 },
];

/* ── Tren kesehatan suksesi (coverage, ready, time-to-ready) ─ */

export interface TrenSuksesiRow {
  label: string;
  /** Jan–Jun 2026; titik Mar wajib = angka "vs Q1 2026" KPI terkait. */
  series: number[];
  awal: string;
  akhir: string;
  delta: string;
  /** true bila turun = membaik (mis. time-to-readiness). */
  turunBaik?: boolean;
  color: string;
}

export const trenSuksesi: TrenSuksesiRow[] = [
  {
    label: "Coverage Posisi Kritis",
    series: [68.4, 69.8, 71.2, 72.6, 73.4, 74.5],
    awal: "68,4%",
    akhir: "74,5%",
    delta: "+6,1 pts",
    color: PALETTE.green,
  },
  {
    label: "Kandidat Siap < 1 Tahun",
    series: [12.4, 13.0, 13.7, 14.6, 15.2, 16.0],
    awal: "12,4%",
    akhir: "16,0%",
    delta: "+3,6 pts",
    color: READINESS[0],
  },
  {
    label: "Avg Time-to-Readiness",
    series: [14, 13, 13, 12, 11, 10],
    awal: "14 bln",
    akhir: "10 bln",
    delta: "−4 bln",
    turunBaik: true,
    color: PALETTE.purple,
  },
];

/* ── Distribusi kesiapan kandidat ────────────────────────── */

export const distribusiKesiapan: PoolSlice[] = [
  { name: "Siap < 1 Tahun", jumlah: 64, pct: "16,0%", share: 16.0, color: READINESS[0] },
  { name: "Siap 1-2 Tahun", jumlah: 102, pct: "25,5%", share: 25.5, color: READINESS[1] },
  { name: "Siap 2-3 Tahun", jumlah: 132, pct: "33,0%", share: 33.0, color: READINESS[2] },
  { name: "> 3 Tahun", jumlah: 102, pct: "25,5%", share: 25.5, color: READINESS[3] },
];

export const totalKandidat = "400";

/* ── Rencana aksi suksesi ────────────────────────────────── */

export interface AksiRow {
  inisiatif: string;
  deskripsi: string;
  target: string;
  progress: number;
  status: "Hampir Selesai" | "Berjalan";
  /** Kesehatan progres — menentukan warna bar. */
  kesehatan: "on-track" | "at-risk" | "behind";
  /** Efektivitas: kenaikan readiness rata-rata peserta (pts) — "—" bila tidak relevan. */
  uplift: string;
  /** Efektivitas: percepatan time-to-readiness rata-rata (bulan). */
  deltaWaktu: string;
}

export const rencanaAksi: AksiRow[] = [
  {
    inisiatif: "Identifikasi Talent Kritis",
    deskripsi: "Identifikasi talent untuk posisi kritis",
    target: "100%",
    progress: 95,
    status: "Hampir Selesai",
    kesehatan: "on-track",
    uplift: "—",
    deltaWaktu: "—",
  },
  {
    inisiatif: "Pengembangan Talent",
    deskripsi: "Program pengembangan kepemimpinan",
    target: "300 orang",
    progress: 78,
    status: "Berjalan",
    kesehatan: "on-track",
    uplift: "+9 pts",
    deltaWaktu: "−3 bln",
  },
  {
    inisiatif: "Job Rotation",
    deskripsi: "Rotasi untuk expose pengalaman",
    target: "150 orang",
    progress: 62,
    status: "Berjalan",
    kesehatan: "at-risk",
    uplift: "+11 pts",
    deltaWaktu: "−4 bln",
  },
  {
    inisiatif: "Mentoring Program",
    deskripsi: "Program mentoring untuk talent potensial",
    target: "200 orang",
    progress: 62,
    status: "Berjalan",
    kesehatan: "behind",
    uplift: "+6 pts",
    deltaWaktu: "−2 bln",
  },
  {
    inisiatif: "Assessment Center",
    deskripsi: "Penilaian kompetensi & potensi",
    target: "400 orang",
    progress: 80,
    status: "Berjalan",
    kesehatan: "on-track",
    uplift: "+4 pts",
    deltaWaktu: "−1 bln",
  },
];

/** Kelas chip tone status (globals.css) — aman dark mode. */
export const STATUS_STYLE: Record<AksiRow["status"], string> = {
  "Hampir Selesai": "tone-green",
  Berjalan: "tone-blue",
};

/** Warna bar progres per kesehatan progres. */
export const KESEHATAN_COLOR: Record<AksiRow["kesehatan"], string> = {
  "on-track": SEMANTIC.good,
  "at-risk": SEMANTIC.warn,
  behind: SEMANTIC.bad,
};

/* ── Kandidat siap sekarang ──────────────────────────────── */

export interface KandidatSiap {
  posisi: string;
  unit: string;
  jumlah: number;
  seed: number;
}

/**
 * Jumlah harus konsisten dengan kolom `kandidat` di posisiKritis —
 * posisi ber-kandidat 0 (Direktur Operasional, VP Keuangan) tidak boleh muncul.
 */
export const kandidatSiap: KandidatSiap[] = [
  { posisi: "Kepala Kebun", unit: "PTPN V", jumlah: 2, seed: 2 },
  { posisi: "VP Human Capital", unit: "PTPN III (Persero)", jumlah: 2, seed: 9 },
  { posisi: "Kepala Pabrik", unit: "PTPN IV", jumlah: 2, seed: 4 },
  { posisi: "VP IT & Digital", unit: "Holding & Supporting Co", jumlah: 2, seed: 7 },
  { posisi: "Kepala Unit Usaha", unit: "PTPN I", jumlah: 2, seed: 6 },
];

/* ── Emergency succession coverage ───────────────────────── */

export interface EmergencySlice {
  name: string;
  jumlah: number;
  pct: string;
  share: number;
  color: string;
  desc: string;
}

/** Total 3 kategori = 212 posisi kritis. */
export const emergencyCoverage: EmergencySlice[] = [
  {
    name: "Emergency Ready",
    jumlah: 143,
    pct: "67,5%",
    share: 67.5,
    color: SEMANTIC.good,
    desc: "Pengganti darurat teridentifikasi & teruji, siap ambil alih segera",
  },
  {
    name: "Interim Ready",
    jumlah: 42,
    pct: "19,8%",
    share: 19.8,
    color: SEMANTIC.warn,
    desc: "Pejabat sementara tersedia untuk masa transisi maks. 6 bulan",
  },
  {
    name: "Tanpa Pengganti Darurat",
    jumlah: 27,
    pct: "12,7%",
    share: 12.7,
    color: SEMANTIC.bad,
    desc: "Belum ada pengganti darurat — eksposur kontinuitas bisnis",
  },
];

/* ── BOD succession decision center ──────────────────────── */

export interface BodDecision {
  prioritas: "danger" | "warning" | "success";
  label: string;
  posisi: string;
  unit: string;
  masalah: string;
  rekomendasi: string;
}

/** Angka wajib konsisten dengan posisiKritis (bench, kandidat). */
export const bodDecisions: BodDecision[] = [
  {
    prioritas: "danger",
    label: "Keputusan Diperlukan",
    posisi: "Direktur Operasional",
    unit: "PTPN III (Persero)",
    masalah:
      "Tanpa kandidat siap, bench strength 0,5, estimasi kesiapan tercepat 9 bulan.",
    rekomendasi:
      "Setujui akselerasi pengembangan 2 kandidat internal + tunjuk pejabat interim.",
  },
  {
    prioritas: "warning",
    label: "Keputusan Diperlukan",
    posisi: "VP Keuangan",
    unit: "Holding & Supporting Co",
    masalah: "Bench strength 0,8 dan belum ada kandidat siap ternominasi.",
    rekomendasi:
      "Nominasikan 2 suksesor + mulai knowledge transfer dari incumbent.",
  },
  {
    prioritas: "success",
    label: "Peluang",
    posisi: "VP IT & Digital",
    unit: "Holding & Supporting Co",
    masalah: "2 kandidat siap dengan bench strength 1,5 — di atas target.",
    rekomendasi:
      "Percepat mobilitas internal untuk mengisi pipeline level Direksi.",
  },
];

/** Kelas chip tone prioritas keputusan (globals.css) — aman dark mode. */
export const DECISION_STYLE: Record<
  BodDecision["prioritas"],
  { chip: string; border: string }
> = {
  danger: { chip: "tone-red", border: "#ef4444" },
  warning: { chip: "tone-amber", border: "#f59e0b" },
  success: { chip: "tone-green", border: "#16a34a" },
};

/* ── Role–successor fit (drilldown posisi kritis) ────────── */

export interface SuccessorFit {
  nama: string;
  jabatan: string;
  status: "Siap Sekarang" | "Dalam Pengembangan";
  /** Skala 1-5. */
  performance: string;
  /** Skala 1-10. */
  potential: string;
  skillMatch: number;
  readiness: number;
  estSiap: string;
  flightRisk: "Rendah" | "Sedang" | "Tinggi";
  /** Gap kompetensi utama (delta negatif vs profil role). */
  gaps: string[];
  rekomendasi: string;
  seed: number;
}

/**
 * Keyed by posisiKritis.posisi. Jumlah kandidat ber-status "Siap Sekarang"
 * wajib sama dengan kolom `kandidat` posisi tersebut.
 */
export const successorFit: Record<string, SuccessorFit[]> = {
  "Direktur Operasional": [
    {
      nama: "Bimo Cahyono",
      jabatan: "VP Operasional — PTPN IV",
      status: "Dalam Pengembangan",
      performance: "4,4",
      potential: "8,6",
      skillMatch: 84,
      readiness: 72,
      estSiap: "9 bln",
      flightRisk: "Rendah",
      gaps: ["Strategic Finance −0,4", "Stakeholder BUMN −0,3"],
      rekomendasi: "Akselerasi: penugasan lintas unit + eksposur Direksi.",
      seed: 4,
    },
    {
      nama: "Rina Hastuti",
      jabatan: "GM Operasional — PalmCo",
      status: "Dalam Pengembangan",
      performance: "4,2",
      potential: "8,9",
      skillMatch: 79,
      readiness: 65,
      estSiap: "12 bln",
      flightRisk: "Sedang",
      gaps: ["P&L Group −0,5", "Transformasi Digital −0,3"],
      rekomendasi: "Rotasi ke holding + program retensi (flight risk sedang).",
      seed: 11,
    },
  ],
  "VP Agronomi": [
    {
      nama: "Agung Prasetyo",
      jabatan: "Kepala Kebun Senior — PTPN IV",
      status: "Siap Sekarang",
      performance: "4,5",
      potential: "9,1",
      skillMatch: 91,
      readiness: 88,
      estSiap: "Siap",
      flightRisk: "Rendah",
      gaps: ["Digital Agriculture −0,4", "Strategic Finance −0,2"],
      rekomendasi: "Siap dengan pengembangan terarah pada gap digital.",
      seed: 3,
    },
    {
      nama: "Sari Wulandari",
      jabatan: "Manajer Agronomi — PTPN V",
      status: "Dalam Pengembangan",
      performance: "4,1",
      potential: "8,4",
      skillMatch: 76,
      readiness: 61,
      estSiap: "18 bln",
      flightRisk: "Rendah",
      gaps: ["Manajemen Skala Regional −0,5"],
      rekomendasi: "Perluas span of control via penugasan multi-kebun.",
      seed: 8,
    },
  ],
  "VP Keuangan": [
    {
      nama: "Dewi Anggraini",
      jabatan: "Senior Manager Finance — Holding",
      status: "Dalam Pengembangan",
      performance: "4,3",
      potential: "8,7",
      skillMatch: 81,
      readiness: 70,
      estSiap: "12 bln",
      flightRisk: "Sedang",
      gaps: ["Treasury Group −0,4", "Capital Market −0,4"],
      rekomendasi: "Nominasikan formal + mentoring langsung CFO.",
      seed: 10,
    },
  ],
  "Kepala Kebun": [
    {
      nama: "Hendra Gunawan",
      jabatan: "Asisten Kepala — PTPN V",
      status: "Siap Sekarang",
      performance: "4,4",
      potential: "8,2",
      skillMatch: 93,
      readiness: 95,
      estSiap: "Siap",
      flightRisk: "Rendah",
      gaps: [],
      rekomendasi: "Siap penempatan — jadwalkan validasi akhir.",
      seed: 5,
    },
    {
      nama: "Yusuf Maulana",
      jabatan: "Asisten Kepala — PTPN V",
      status: "Siap Sekarang",
      performance: "4,2",
      potential: "8,0",
      skillMatch: 90,
      readiness: 91,
      estSiap: "Siap",
      flightRisk: "Rendah",
      gaps: ["Sertifikasi ISPO −0,2"],
      rekomendasi: "Siap penempatan setelah sertifikasi ISPO tuntas.",
      seed: 12,
    },
  ],
};

/* ── Knowledge transfer readiness ────────────────────────── */

export interface KnowledgeTransferRow {
  posisi: string;
  unit: string;
  /** Pemicu transisi incumbent (pensiun/promosi) + horizon. */
  pemicu: string;
  /** Skor per dimensi KT (%): [mapped, dokumentasi, shadowing, handover]. */
  dimensi: [number, number, number, number];
  /** Skor transisi keseluruhan (rata-rata dimensi). */
  transisi: number;
}

export const KT_DIMENSI = [
  "Knowledge mapped",
  "Dokumentasi",
  "Shadowing",
  "Handover plan",
] as const;

/** Posisi dengan transisi incumbent terjadwal < 18 bulan. */
export const knowledgeTransfer: KnowledgeTransferRow[] = [
  {
    posisi: "Direktur Operasional",
    unit: "PTPN III (Persero)",
    pemicu: "Pensiun 8 bln",
    dimensi: [78, 64, 42, 58],
    transisi: 61,
  },
  {
    posisi: "VP Agronomi",
    unit: "PTPN IV",
    pemicu: "Pensiun 14 bln",
    dimensi: [82, 71, 55, 64],
    transisi: 68,
  },
  {
    posisi: "Kepala Kebun",
    unit: "PTPN V",
    pemicu: "Promosi est. Q4 2026",
    dimensi: [91, 84, 76, 80],
    transisi: 83,
  },
];

/* ── Successor concentration risk ────────────────────────── */

export interface KonsentrasiRow {
  nama: string;
  jabatan: string;
  /** Jumlah posisi kritis yang menominasikan orang ini. */
  posisiCount: number;
  posisi: string[];
  seed: number;
}

/** Individu ternominasi ≥ 3 posisi kritis — single-person dependency. */
export const successorConcentration = {
  multiRole: 18,
  top: [
    {
      nama: "Bimo Cahyono",
      jabatan: "VP Operasional — PTPN IV",
      posisiCount: 4,
      posisi: ["Direktur Operasional", "VP Supply Chain", "VP Engineering", "Kepala Pabrik"],
      seed: 4,
    },
    {
      nama: "Dewi Anggraini",
      jabatan: "Senior Manager Finance — Holding",
      posisiCount: 3,
      posisi: ["VP Keuangan", "VP IT & Digital", "Kepala Unit Usaha"],
      seed: 10,
    },
    {
      nama: "Agung Prasetyo",
      jabatan: "Kepala Kebun Senior — PTPN IV",
      posisiCount: 3,
      posisi: ["VP Agronomi", "Kepala Kebun", "Kepala Unit Usaha"],
      seed: 3,
    },
  ] satisfies KonsentrasiRow[],
};

/* ── Diversity pipeline suksesi ──────────────────────────── */

export interface DiversitasRow {
  dimensi: string;
  /** % pada tiap tahap funnel: [HiPo pool, kandidat suksesi, ready now]. */
  funnel: [number, number, number];
  target: number;
  status: "on-track" | "behind";
}

/**
 * Diversitas pipeline per tahap (pool 1.245 → kandidat 400 → ready 64) —
 * pertanyaannya: apakah diversitas menyusut sepanjang funnel?
 */
export const diversityPipeline: DiversitasRow[] = [
  { dimensi: "Perempuan", funnel: [31, 24, 17], target: 30, status: "behind" },
  { dimensi: "Usia < 45 tahun", funnel: [58, 44, 31], target: 40, status: "on-track" },
  { dimensi: "Mobilitas lintas PTPN", funnel: [46, 38, 27], target: 40, status: "behind" },
  { dimensi: "Latar non-Operasional", funnel: [69, 52, 45], target: 50, status: "on-track" },
];

export const diversityTahap = ["HiPo Pool", "Kandidat", "Ready Now"] as const;

/* ── External succession bench ───────────────────────────── */

export interface ExternalBenchRow {
  posisi: string;
  internal: number;
  /** Kandidat benchmark di pasar eksternal (market intelligence, tanpa nama). */
  eksternal: number;
  /** Readiness kandidat internal terbaik (%). */
  internalReadiness: number;
  ketersediaan: "Tinggi" | "Sedang" | "Rendah";
  rekomendasi: string;
}

/** internal & internalReadiness wajib konsisten dengan successorFit. */
export const externalBench: ExternalBenchRow[] = [
  {
    posisi: "VP IT & Digital",
    internal: 2,
    eksternal: 14,
    internalReadiness: 90,
    ketersediaan: "Tinggi",
    rekomendasi: "Build internal + jaga kontingensi eksternal.",
  },
  {
    posisi: "VP Keuangan",
    internal: 1,
    eksternal: 11,
    internalReadiness: 70,
    ketersediaan: "Tinggi",
    rekomendasi: "Nominasi internal + external scan paralel.",
  },
  {
    posisi: "Direktur Operasional",
    internal: 2,
    eksternal: 5,
    internalReadiness: 72,
    ketersediaan: "Rendah",
    rekomendasi: "Fokus akselerasi internal — pasar eksternal tipis.",
  },
  {
    posisi: "VP Agronomi",
    internal: 2,
    eksternal: 3,
    internalReadiness: 88,
    ketersediaan: "Rendah",
    rekomendasi: "Internal kuat — eksternal tidak diperlukan.",
  },
];

/* ── Insight & rekomendasi AI ────────────────────────────── */

export interface SuksesiInsight {
  isi: string;
  tone: "danger" | "warning" | "success" | "info";
}

export const suksesiInsight: SuksesiInsight[] = [
  {
    isi: "Risiko kekosongan posisi Direktur Operasional sangat tinggi. Disarankan percepatan pengembangan kandidat internal.",
    tone: "danger",
  },
  {
    isi: "Bench Strength di level Direksi masih rendah (0,6). Fokus pada pengembangan talent potensial.",
    tone: "warning",
  },
  {
    isi: "High Potential Talent meningkat 5,5% dibanding Q1 2026. Pertahankan momentum identifikasi talent.",
    tone: "success",
  },
  {
    isi: "Disarankan memperluas program job rotation untuk mempercepat kesiapan kandidat.",
    tone: "info",
  },
];
