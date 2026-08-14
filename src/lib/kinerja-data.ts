import type { Trend } from "./data";
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
    compare: "vs Q1 2025: 82,8",
    icon: "score",
    tone: "purple",
    line: PALETTE.purple,
    series: [30, 36, 32, 39, 34, 42, 37, 45, 40, 47, 43, 50, 46, 53, 57],
  },
  {
    label: "Karyawan Dinilai",
    value: "68.142",
    compare: "85,1% dari total karyawan 80.102",
    icon: "users",
    tone: "green",
    line: PALETTE.green,
    series: [28, 33, 30, 37, 33, 41, 36, 44, 39, 47, 42, 50, 45, 53, 56],
  },
  {
    label: "On Target & Above",
    value: "72,3%",
    delta: "6,2%",
    trend: "up",
    compare: "vs Q1 2025: 66,1%",
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
    compare: "vs Q1 2025: 16,6%",
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
    compare: "vs Q1 2025: 8,5%",
    icon: "warn",
    tone: "red",
    line: PALETTE.red,
    series: [50, 45, 53, 42, 48, 40, 46, 38, 44, 36, 42, 34, 40, 32, 36],
  },
  {
    label: "Belum Dinilai",
    value: "14,9%",
    compare: "vs Q1 2025: 19,3%",
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
  { name: "Jan 2025", value: 76.4 },
  { name: "Feb 2025", value: 78.1 },
  { name: "Mar 2025", value: 80.3 },
  { name: "Apr 2025", value: 82.8 },
  { name: "Mei 2025", value: 84.2 },
  { name: "Jun 2025", value: 87.6 },
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
  delta: "6,3% vs Q1 2025",
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

/* ── Insight AI ──────────────────────────────────────────── */

export const insightKinerja = [
  {
    tone: "success" as const,
    judul: "Peningkatan Kinerja Positif",
    isi: "Unit PTPN IV Regional 1 menunjukkan peningkatan kinerja tertinggi (+5,4 pts). Pertahankan strategi yang berjalan.",
  },
  {
    tone: "warning" as const,
    judul: "Perhatian: Below Target Meningkat",
    isi: "Jumlah karyawan Below Target meningkat 1,3% dibanding Q1 2025. Lakukan coaching & monitoring lebih intensif.",
  },
  {
    tone: "info" as const,
    judul: "Fokus Pengembangan",
    isi: "Dimensi Inovasi & Improvement memiliki score terendah. Disarankan program pelatihan inovasi dan problem solving.",
  },
];
