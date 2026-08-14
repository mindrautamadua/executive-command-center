import type { Trend } from "./data";
import { PALETTE, SEMANTIC, SEQ_GREEN } from "./chart-palette";

/* ── KPI strip ───────────────────────────────────────────── */

export type KpiChipTone =
  | "green"
  | "blue"
  | "teal"
  | "amber"
  | "red"
  | "purple"
  | "pink"
  | "slate";

export interface AbsensiKpi {
  label: string;
  value: string;
  unit?: string;
  delta: string;
  /** Arah panah delta. */
  trend: Trend;
  /** Warna delta: "good" hijau, "bad" merah. Turunnya angka izin/sakit itu kabar baik. */
  deltaTone: "good" | "bad";
  compare: string;
  icon: "kehadiran" | "ontime" | "jam" | "lembur" | "izin" | "sakit";
  tone: KpiChipTone;
  line: string;
  series: number[];
}

export const absensiKpi: AbsensiKpi[] = [
  {
    label: "Tingkat Kehadiran",
    value: "96,2%",
    delta: "2,8%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Apr 2025: 93,4%",
    icon: "kehadiran",
    tone: "blue",
    line: PALETTE.blue,
    series: [34, 32, 36, 33, 37, 34, 38, 35, 39, 36, 41, 38, 44, 47, 52],
  },
  {
    label: "Tepat Waktu (On Time)",
    value: "87,5%",
    delta: "3,6%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Apr 2025: 83,9%",
    icon: "ontime",
    tone: "green",
    line: PALETTE.green,
    series: [28, 31, 29, 33, 31, 35, 32, 37, 34, 39, 36, 42, 45, 49, 54],
  },
  {
    label: "Rata-rata Jam Kerja",
    value: "8j 12m",
    delta: "0j 18m",
    trend: "up",
    deltaTone: "good",
    compare: "vs Apr 2025: 7j 54m",
    icon: "jam",
    tone: "purple",
    line: PALETTE.purple,
    series: [36, 33, 38, 35, 40, 36, 41, 37, 42, 38, 43, 40, 45, 42, 47],
  },
  {
    label: "Lembur",
    value: "12,4%",
    delta: "1,2%",
    trend: "down",
    deltaTone: "bad",
    compare: "vs Apr 2025: 13,6%",
    icon: "lembur",
    tone: "amber",
    line: PALETTE.amber,
    series: [44, 41, 45, 42, 46, 43, 45, 42, 44, 41, 43, 40, 42, 39, 41],
  },
  {
    label: "Izin",
    value: "3,1%",
    delta: "0,5%",
    trend: "down",
    deltaTone: "good",
    compare: "vs Apr 2025: 3,6%",
    icon: "izin",
    tone: "teal",
    line: PALETTE.teal,
    series: [42, 45, 41, 44, 40, 43, 39, 42, 38, 41, 37, 40, 36, 39, 35],
  },
  {
    label: "Sakit",
    value: "1,2%",
    delta: "0,3%",
    trend: "down",
    deltaTone: "good",
    compare: "vs Apr 2025: 1,5%",
    icon: "sakit",
    tone: "pink",
    line: PALETTE.pink,
    series: [38, 42, 39, 44, 40, 45, 41, 46, 42, 47, 43, 48, 44, 49, 45],
  },
];

/* ── Ringkasan kehadiran (donat) ─────────────────────────── */

export interface StatusSlice {
  name: string;
  jumlah: number;
  label: string;
  pct: string;
  color: string;
}

export const totalKaryawan = 18642;

/**
 * Irisan donat harus mutually exclusive agar totalnya 100%.
 * Terlambat & WFH adalah subset dari Hadir — ditampilkan sebagai
 * sub-statistik terpisah, bukan irisan donat.
 */
export const ringkasanKehadiran: StatusSlice[] = [
  { name: "Hadir", jumlah: 17162, label: "17.162", pct: "(92,1%)", color: SEMANTIC.good },
  { name: "Izin", jumlah: 578, label: "578", pct: "(3,1%)", color: PALETTE.blue },
  { name: "Sakit", jumlah: 224, label: "224", pct: "(1,2%)", color: PALETTE.teal },
  { name: "Alpha", jumlah: 678, label: "678", pct: "(3,6%)", color: PALETTE.red },
];

/** Subset dari "Hadir" — bukan bagian donat. */
export const subStatusKehadiran: StatusSlice[] = [
  {
    name: "Terlambat",
    jumlah: 1234,
    label: "1.234",
    pct: "7,2% dari hadir",
    color: PALETTE.amber,
  },
  { name: "WFH", jumlah: 856, label: "856", pct: "5,0% dari hadir", color: PALETTE.purple },
];

/* ── Tren tingkat kehadiran ──────────────────────────────── */

export const trenKehadiran = [
  { name: "Des 2024", value: 92.1 },
  { name: "Jan 2025", value: 92.8 },
  { name: "Feb 2025", value: 93.4 },
  { name: "Mar 2025", value: 94.1 },
  { name: "Apr 2025", value: 93.4 },
  { name: "Mei 2025", value: 96.2 },
];

/* ── Kehadiran per unit organisasi ───────────────────────── */

export interface UnitKehadiran {
  nama: string;
  value: number;
  label: string;
}

export const kehadiranUnit: UnitKehadiran[] = [
  { nama: "PTPN IV", value: 97.8, label: "97,8%" },
  { nama: "PTPN III (Persero)", value: 96.9, label: "96,9%" },
  { nama: "PTPN I", value: 96.4, label: "96,4%" },
  { nama: "PalmCo", value: 96.1, label: "96,1%" },
  { nama: "PTPN V", value: 95.8, label: "95,8%" },
  { nama: "PTPN II", value: 95.2, label: "95,2%" },
  { nama: "Holding & Supporting Co", value: 94.9, label: "94,9%" },
  { nama: "PTPN Regional 1", value: 94.1, label: "94,1%" },
  { nama: "PTPN Regional 2", value: 93.7, label: "93,7%" },
  { nama: "PTPN Regional 3", value: 92.8, label: "92,8%" },
];

/* ── Kehadiran per lokasi (peta) ─────────────────────────── */

export interface LokasiPin {
  nama: string;
  value: number;
  label: string;
  /** Posisi label dalam persen terhadap kotak peta. */
  x: number;
  y: number;
}

export const kehadiranLokasi: LokasiPin[] = [
  { nama: "Sumatera", value: 96.1, label: "96,1%", x: 17, y: 30 },
  { nama: "Kalimantan", value: 95.7, label: "95,7%", x: 45, y: 18 },
  { nama: "Sulawesi", value: 95.9, label: "95,9%", x: 69, y: 22 },
  { nama: "Jawa", value: 96.6, label: "96,6%", x: 32, y: 74 },
  { nama: "Bali & Nusa", value: 95.4, label: "95,4%", x: 58, y: 76 },
  { nama: "Papua", value: 94.2, label: "94,2%", x: 84, y: 62 },
];

/** Warna pin lokasi mengikuti ramp hijau sekuensial (rendah → tinggi). */
export const warnaLokasi = (v: number) => {
  if (v >= 96.4) return SEQ_GREEN[4];
  if (v >= 95.8) return SEQ_GREEN[3];
  if (v >= 95.0) return SEQ_GREEN[2];
  return SEQ_GREEN[1];
};

/* ── Pola kehadiran per hari ─────────────────────────────── */

export const polaHarian = [
  { name: "Senin", value: 96.1, label: "96,1%" },
  { name: "Selasa", value: 96.3, label: "96,3%" },
  { name: "Rabu", value: 96.4, label: "96,4%" },
  { name: "Kamis", value: 96.0, label: "96,0%" },
  { name: "Jumat", value: 95.6, label: "95,6%" },
  { name: "Sabtu", value: 78.2, label: "78,2%" },
  { name: "Minggu", value: 42.7, label: "42,7%" },
];

/* ── Keterlambatan ───────────────────────────────────────── */

export const totalTerlambat = 1234;

/**
 * Ramp ordinal keparahan keterlambatan (ringan → berat).
 * Ramp sekuensial khusus severity — berujung merah, bukan kategorikal.
 */
const SEVERITY_RAMP = ["#fbd9a1", PALETTE.amber, "#f0742e", PALETTE.red];

export const keterlambatan: StatusSlice[] = [
  { name: "1 - 15 menit", jumlah: 642, label: "642", pct: "(52,0%)", color: SEVERITY_RAMP[0] },
  { name: "16 - 30 menit", jumlah: 324, label: "324", pct: "(26,3%)", color: SEVERITY_RAMP[1] },
  { name: "31 - 60 menit", jumlah: 196, label: "196", pct: "(15,9%)", color: SEVERITY_RAMP[2] },
  { name: "> 60 menit", jumlah: 72, label: "72", pct: "(5,8%)", color: SEVERITY_RAMP[3] },
];

/* ── Status kehadiran hari ini ───────────────────────────── */

export interface StatusHariIniRow {
  nama: string;
  jumlah: string;
  pct: string;
  color: string;
}

/** Warna status seragam dengan Ringkasan Kehadiran. */
export const statusHariIni: StatusHariIniRow[] = [
  { nama: "Hadir", jumlah: "16.842", pct: "(90,3%)", color: SEMANTIC.good },
  { nama: "Terlambat", jumlah: "842", pct: "(4,5%)", color: PALETTE.amber },
  { nama: "Izin", jumlah: "428", pct: "(2,3%)", color: PALETTE.blue },
  { nama: "Sakit", jumlah: "162", pct: "(0,9%)", color: PALETTE.teal },
  { nama: "Alpha", jumlah: "214", pct: "(1,1%)", color: PALETTE.red },
  { nama: "WFH", jumlah: "368", pct: "(2,0%)", color: PALETTE.purple },
];

export const stempelRealtime = "13 Mei 2025";

/* ── Rekap kehadiran karyawan ────────────────────────────── */

export interface RekapRow {
  unit: string;
  karyawan: string;
  kehadiran: string;
  tepatWaktu: string;
  lembur: string;
  izin: string;
  sakit: string;
  alpha: string;
}

export const rekapKehadiran: RekapRow[] = [
  {
    unit: "PTPN IV",
    karyawan: "4.125",
    kehadiran: "97,8%",
    tepatWaktu: "89,2%",
    lembur: "13,1%",
    izin: "2,6%",
    sakit: "0,9%",
    alpha: "3,2%",
  },
  {
    unit: "PTPN III (Persero)",
    karyawan: "3.860",
    kehadiran: "96,9%",
    tepatWaktu: "87,6%",
    lembur: "12,4%",
    izin: "3,0%",
    sakit: "1,1%",
    alpha: "3,3%",
  },
  {
    unit: "PTPN I",
    karyawan: "2.987",
    kehadiran: "96,4%",
    tepatWaktu: "88,3%",
    lembur: "11,8%",
    izin: "2,9%",
    sakit: "1,2%",
    alpha: "3,6%",
  },
  {
    unit: "PalmCo",
    karyawan: "1.963",
    kehadiran: "96,1%",
    tepatWaktu: "87,1%",
    lembur: "12,7%",
    izin: "3,2%",
    sakit: "1,3%",
    alpha: "3,7%",
  },
  {
    unit: "PTPN V",
    karyawan: "1.872",
    kehadiran: "95,8%",
    tepatWaktu: "86,5%",
    lembur: "12,2%",
    izin: "3,1%",
    sakit: "1,0%",
    alpha: "4,0%",
  },
];

/* ── Insight AI ──────────────────────────────────────────── */

export interface AbsensiInsight {
  isi: string;
  tone: "success" | "info" | "warning" | "neutral";
}

export const absensiInsight: AbsensiInsight[] = [
  {
    isi: "Tingkat kehadiran meningkat 2,8% dibandingkan bulan lalu. Pertahankan momentum positif ini!",
    tone: "success",
  },
  {
    isi: "Terlambat masuk tertinggi terjadi di hari Senin. Saran: Pengaturan jadwal atau fleksibilitas awal minggu.",
    tone: "info",
  },
  {
    isi: "Unit PTPN Regional 3 memiliki tingkat alpha tertinggi (4,8%). Saran: Evaluasi disiplin dan komunikasi internal.",
    tone: "warning",
  },
  {
    isi: "Penggunaan WFH meningkat 0,6% dibanding bulan lalu. Pastikan produktivitas tetap terpantau.",
    tone: "neutral",
  },
];

/* ── Metode pencatatan kehadiran ─────────────────────────── */

export const metodePencatatan: StatusSlice[] = [
  {
    name: "Face Recognition",
    jumlah: 12842,
    label: "12.842",
    pct: "68,9%",
    color: PALETTE.blue,
  },
  {
    name: "Mobile",
    jumlah: 3642,
    label: "3.642",
    pct: "19,6%",
    color: PALETTE.green,
  },
  { name: "Web", jumlah: 1246, label: "1.246", pct: "6,7%", color: PALETTE.amber },
  { name: "Manual", jumlah: 912, label: "912", pct: "4,8%", color: PALETTE.purple },
];

/* ── Kalender kehadiran (heatmap 13 minggu) ──────────────── */

export interface KalenderSel {
  /** contoh: "12 Mei" */
  tanggal: string;
  pct: number;
  weekend: boolean;
}

const BULAN = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Agu",
  "Sep",
  "Okt",
  "Nov",
  "Des",
];

/**
 * Data deterministik: LCG bilangan bulat (bukan Math.random) supaya hasil
 * server dan client identik — aman dari hydration mismatch.
 */
function buatKalender(): KalenderSel[][] {
  let s = 20250511;
  const acak = () => {
    s = (s * 1103515245 + 12345) % 2147483648;
    return s / 2147483648;
  };
  // Basis per hari kerja mengikuti polaHarian (Senin..Minggu).
  const basis = [96.1, 96.3, 96.4, 96.0, 95.6, 78.2, 42.7];
  const mulai = new Date(2025, 1, 10); // Senin 10 Feb 2025 → 13 minggu s.d. 11 Mei
  const minggu: KalenderSel[][] = [];
  for (let w = 0; w < 13; w++) {
    const hari: KalenderSel[] = [];
    for (let d = 0; d < 7; d++) {
      const tgl = new Date(mulai.getTime());
      tgl.setDate(mulai.getDate() + w * 7 + d);
      const weekend = d >= 5;
      const jitter = (acak() - 0.5) * (weekend ? 8 : 3);
      const pct = Math.round((basis[d] + jitter) * 10) / 10;
      hari.push({
        tanggal: `${tgl.getDate()} ${BULAN[tgl.getMonth()]}`,
        pct: Math.min(99.5, Math.max(30, pct)),
        weekend,
      });
    }
    minggu.push(hari);
  }
  return minggu;
}

export const kalenderKehadiran: KalenderSel[][] = buatKalender();

/** Warna sel heatmap — ramp hijau (rendah → tinggi), khusus hari kerja. */
export const warnaKalender = (pct: number) => {
  if (pct >= 96.5) return SEQ_GREEN[4];
  if (pct >= 95.5) return SEQ_GREEN[3];
  if (pct >= 94.5) return SEQ_GREEN[2];
  if (pct >= 93.0) return SEQ_GREEN[1];
  return SEQ_GREEN[0];
};
