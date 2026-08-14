import type { Trend } from "./data";
import { PALETTE } from "./chart-palette";
import type { KpiChipTone } from "./absensi-data";

/* ── KPI strip ───────────────────────────────────────────── */

export interface DataKpi {
  label: string;
  value: string;
  unit?: string;
  delta: string;
  trend: Trend;
  deltaTone?: "good" | "bad";
  compare: string;
  icon: "employee" | "kelengkapan" | "kualitas" | "tepatWaktu" | "sumber" | "anomali";
  tone: KpiChipTone;
  line: string;
  series: number[];
}

export const dataKpi: DataKpi[] = [
  {
    label: "Total Data Employee",
    value: "70.142",
    delta: "2,7%",
    trend: "up",
    compare: "vs Q1 2025: 68.295",
    icon: "employee",
    tone: "blue",
    line: PALETTE.blue,
    series: [30, 34, 31, 37, 33, 40, 36, 43, 39, 45, 42, 48, 44, 50, 54],
  },
  {
    label: "Kelengkapan Data",
    value: "95,6%",
    delta: "2,8%",
    trend: "up",
    compare: "vs Q1 2025: 92,8%",
    icon: "kelengkapan",
    tone: "green",
    line: PALETTE.green,
    series: [28, 33, 30, 36, 32, 39, 35, 42, 38, 45, 41, 48, 44, 51, 55],
  },
  {
    label: "Kualitas Data (DQ Score)",
    value: "94,1",
    delta: "1,7 pts",
    trend: "up",
    compare: "vs Q1 2025: 92,4",
    icon: "kualitas",
    tone: "purple",
    line: PALETTE.purple,
    series: [31, 36, 32, 39, 35, 41, 37, 44, 40, 46, 43, 49, 45, 52, 56],
  },
  {
    label: "Data Update Tepat Waktu",
    value: "98,3%",
    delta: "1,9%",
    trend: "up",
    compare: "vs Q1 2025: 96,4%",
    icon: "tepatWaktu",
    tone: "amber",
    line: PALETTE.amber,
    series: [33, 37, 34, 40, 36, 43, 39, 45, 41, 47, 44, 50, 46, 53, 57],
  },
  {
    label: "Sumber Data Terintegrasi",
    value: "18",
    delta: "2",
    trend: "up",
    compare: "vs Q1 2025: 16",
    icon: "sumber",
    tone: "teal",
    line: PALETTE.teal,
    series: [29, 34, 30, 37, 33, 39, 36, 42, 38, 44, 41, 47, 43, 49, 53],
  },
  {
    label: "Data Anomaly (Bulan Ini)",
    value: "156",
    delta: "12,4%",
    trend: "down",
    // anomali turun = kualitas data membaik
    deltaTone: "good",
    compare: "vs Q1 2025: 178",
    icon: "anomali",
    tone: "red",
    line: PALETTE.red,
    series: [52, 48, 51, 45, 49, 43, 47, 41, 45, 39, 43, 37, 41, 35, 33],
  },
];

/* ── Data Quality Overview (radar 5 dimensi) ─────────────── */

export const dqScore = "94,1";

export interface DimensiKualitas {
  name: string;
  pct: string;
  share: number;
}

/** 5 skor independen — divisualkan sebagai radar, bukan pie share. */
export const dimensiKualitas: DimensiKualitas[] = [
  { name: "Akurasi", pct: "96,4%", share: 96.4 },
  { name: "Kelengkapan", pct: "95,6%", share: 95.6 },
  { name: "Konsistensi", pct: "93,2%", share: 93.2 },
  { name: "Validitas", pct: "93,8%", share: 93.8 },
  { name: "Timeliness", pct: "98,3%", share: 98.3 },
];

/* ── Tren DQ Score ───────────────────────────────────────── */

export const trenDqScore = [
  { name: "Jan 2025", value: 91.2 },
  { name: "Feb 2025", value: 91.8 },
  { name: "Mar 2025", value: 92.4 },
  { name: "Apr 2025", value: 92.9 },
  { name: "Mei 2025", value: 93.4 },
  { name: "Jun 2025", value: 94.1 },
];

/* ── Kelengkapan per domain ──────────────────────────────── */

/** Target kelengkapan data per domain (%). */
export const targetKelengkapan = 95;

export const kelengkapanDomain = [
  { name: "Core HR", pct: 98.7 },
  { name: "Organisasi & Jabatan", pct: 96.2 },
  { name: "Kinerja", pct: 95.1 },
  { name: "Kompensasi", pct: 93.8 },
  { name: "Pelatihan & Pengembangan", pct: 92.6 },
  { name: "Rekrutmen", pct: 91.4 },
  { name: "Absensi", pct: 90.2 },
  { name: "Employee Engagement", pct: 88.7 },
];

/* ── Sumber data terhubung ───────────────────────────────── */

export interface SumberData {
  nama: string;
  kategori: string;
  status: "tersinkron" | "tertunda";
  update: string;
}

export const sumberData: SumberData[] = [
  { nama: "SAP ERP", kategori: "Employee Master", status: "tersinkron", update: "11 mnt lalu" },
  {
    nama: "Time Attendance",
    kategori: "Attendance System",
    status: "tersinkron",
    update: "26 mnt lalu",
  },
  {
    nama: "Payroll System",
    kategori: "Gaji & Kompensasi",
    status: "tersinkron",
    update: "56 mnt lalu",
  },
  {
    nama: "Recruitment Portal",
    kategori: "Rekrutmen",
    status: "tersinkron",
    update: "11 jam lalu",
  },
  { nama: "Learning Management", kategori: "LMS", status: "tersinkron", update: "12 jam lalu" },
  {
    nama: "Employee Survey",
    kategori: "Survey System",
    status: "tertunda",
    update: "13 jam lalu",
  },
  {
    nama: "Performance System",
    kategori: "Kinerja",
    status: "tersinkron",
    update: "13 jam lalu",
  },
  {
    nama: "HSE System",
    kategori: "K3 & Keselamatan",
    status: "tersinkron",
    update: "14 jam lalu",
  },
];

/* ── Deteksi anomali ─────────────────────────────────────── */

export const totalAnomali = 156;

export const anomaliData = [
  { name: "Data Ganda", value: 42, pct: "26,9%", color: PALETTE.red },
  { name: "Data Tidak Lengkap", value: 38, pct: "24,4%", color: PALETTE.amber },
  { name: "Data Tidak Valid", value: 31, pct: "19,9%", color: PALETTE.blue },
  { name: "Data Outlier", value: 27, pct: "17,3%", color: PALETTE.purple },
  { name: "Lainnya", value: 18, pct: "11,5%", color: PALETTE.slate },
];

/** Insiden anomali harian 30 hari terakhir (statik & deterministik). */
export const anomaliHarian = [
  4, 6, 5, 8, 3, 2, 5, 7, 9, 6, 4, 3, 5, 8, 6, 5, 4, 7, 5, 3, 6, 4, 8, 5, 4, 6, 3, 5, 4, 6,
];

/* ── Perbandingan kualitas per unit ──────────────────────── */

/** Ambang batas skor kualitas — flag dihitung dari sini, bukan hardcode. */
export const AMBANG_KUALITAS = 94.0;

export interface UnitKualitas {
  unit: string;
  dq: string;
  kelengkapan: string;
  akurasi: string;
  konsistensi: string;
}

export const unitKualitas: UnitKualitas[] = [
  {
    unit: "PTPN III (Persero)",
    dq: "95,6",
    kelengkapan: "96,1",
    akurasi: "96,8",
    konsistensi: "94,0",
  },
  {
    unit: "PTPN IV",
    dq: "94,8",
    kelengkapan: "95,2",
    akurasi: "95,5",
    konsistensi: "93,6",
  },
  {
    unit: "PTPN I",
    dq: "94,2",
    kelengkapan: "94,7",
    akurasi: "94,1",
    konsistensi: "93,1",
  },
  {
    unit: "PalmCo",
    dq: "93,7",
    kelengkapan: "94,0",
    akurasi: "93,6",
    konsistensi: "92,9",
  },
  {
    unit: "PTPN II",
    dq: "93,1",
    kelengkapan: "93,5",
    akurasi: "92,8",
    konsistensi: "92,2",
  },
  {
    unit: "PTPN V",
    dq: "92,4",
    kelengkapan: "92,8",
    akurasi: "92,1",
    konsistensi: "91,6",
  },
  {
    unit: "Holding & Supporting Co",
    dq: "91,8",
    kelengkapan: "92,3",
    akurasi: "91,8",
    konsistensi: "91,2",
  },
];

/* ── Data usage & analytics ──────────────────────────────── */

export interface UsageItem {
  label: string;
  value: string;
  delta: string;
  trend: Trend;
  compare: string;
  color: string;
  /** deret tren 12 periode untuk sparkline */
  series: number[];
}

export const dataUsage: UsageItem[] = [
  {
    label: "Dashboard Aktif",
    value: "142",
    delta: "12%",
    trend: "up",
    compare: "vs Q1 2025: 127",
    color: PALETTE.blue,
    series: [38, 52, 44, 60, 48, 66, 56, 72, 62, 80, 70, 88],
  },
  {
    label: "Laporan Dibuat",
    value: "1.287",
    delta: "8,4%",
    trend: "up",
    compare: "vs Q1 2025: 1.189",
    color: PALETTE.green,
    series: [42, 56, 48, 62, 52, 68, 58, 74, 64, 82, 72, 90],
  },
  {
    label: "Pengguna Aktif",
    value: "856",
    delta: "10,3%",
    trend: "up",
    compare: "vs Q1 2025: 776",
    color: PALETTE.purple,
    series: [40, 54, 46, 64, 50, 70, 60, 76, 66, 84, 74, 92],
  },
  {
    label: "Query Data",
    value: "4.562",
    delta: "15,7%",
    trend: "up",
    compare: "vs Q1 2025: 3.942",
    color: PALETTE.amber,
    series: [36, 50, 44, 58, 50, 64, 56, 72, 64, 78, 72, 86],
  },
];

/* ── Top 5 insight ───────────────────────────────────────── */

export interface InsightData {
  isi: string;
  tone: "success" | "info" | "warning" | "neutral";
}

export const topInsight: InsightData[] = [
  {
    isi: "Tingkat turnover menurun 8,7% dibandingkan Q1 2025, terutama pada kelompok usia < 30 tahun.",
    tone: "success",
  },
  {
    isi: "Rata-rata jam pelatihan per karyawan meningkat 12,1% dibandingkan periode sebelumnya.",
    tone: "success",
  },
  {
    isi: "Kelengkapan data Core HR meningkat 2,8% berkat integrasi data dari SAP ERP.",
    tone: "success",
  },
  {
    isi: "Data kinerja menunjukkan korelasi positif antara pelatihan dan pencapaian KPI (r = 0,62).",
    tone: "info",
  },
  {
    isi: "Tingkat kehadiran meningkat 2,3% dibandingkan Q1 2025.",
    tone: "neutral",
  },
];

/* ── Data governance ─────────────────────────────────────── */

export const governanceScore = { pct: 92.3, label: "92,3%", status: "Baik" };

export interface GovernanceItem {
  label: string;
  pct: string;
  value: number;
}

export const governanceItems: GovernanceItem[] = [
  { label: "Kebijakan Data", pct: "100%", value: 100 },
  { label: "Standar Data", pct: "95%", value: 95 },
  { label: "Kualitas Data", pct: "92%", value: 92 },
  { label: "Keamanan Data", pct: "90%", value: 90 },
  { label: "Akses & Privasi", pct: "92%", value: 92 },
];
