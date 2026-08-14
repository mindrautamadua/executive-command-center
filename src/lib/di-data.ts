import type { Trend } from "./data";
import { CATEGORICAL, GENDER, GENERATION, PALETTE } from "./chart-palette";
import type { KpiChipTone } from "./absensi-data";

/* ── KPI strip ───────────────────────────────────────────── */

export interface DiKpi {
  label: string;
  value: string;
  unit?: string;
  delta: string;
  trend: Trend;
  deltaTone?: "good" | "bad";
  compare: string;
  icon: "index" | "perempuan" | "manajemen" | "muda" | "disabilitas" | "payratio";
  tone: KpiChipTone;
  line: string;
  series: number[];
}

export const diKpi: DiKpi[] = [
  {
    label: "Diversity Index (Overall)",
    value: "78,6",
    unit: "/100",
    delta: "4,2 pts",
    trend: "up",
    compare: "vs Q1 2025: 74,4",
    icon: "index",
    tone: "green",
    line: PALETTE.green,
    series: [30, 36, 32, 39, 35, 42, 38, 45, 41, 48, 44, 51, 47, 54, 58],
  },
  {
    label: "Perempuan di Organisasi",
    value: "30,8%",
    delta: "2,3%",
    trend: "up",
    compare: "vs Q1 2025: 28,5%",
    icon: "perempuan",
    tone: "pink",
    line: PALETTE.pink,
    series: [28, 33, 30, 37, 33, 40, 36, 44, 39, 46, 42, 50, 45, 52, 56],
  },
  {
    label: "Perempuan di Manajemen",
    value: "22,4%",
    delta: "2,8%",
    trend: "up",
    compare: "vs Q1 2025: 19,6%",
    icon: "manajemen",
    tone: "blue",
    line: PALETTE.blue,
    series: [26, 32, 29, 36, 32, 40, 35, 43, 39, 46, 42, 49, 45, 53, 57],
  },
  {
    label: "Generasi Muda (≤ 30 Tahun)",
    value: "28,7%",
    delta: "1,6%",
    trend: "up",
    compare: "vs Q1 2025: 27,1%",
    icon: "muda",
    tone: "teal",
    line: PALETTE.teal,
    series: [32, 37, 34, 40, 36, 43, 39, 45, 41, 48, 44, 50, 46, 53, 55],
  },
  {
    label: "Disabilitas",
    value: "1,3%",
    delta: "0,2%",
    trend: "up",
    compare: "vs Q1 2025: 1,1%",
    icon: "disabilitas",
    tone: "purple",
    line: PALETTE.purple,
    series: [34, 38, 33, 41, 36, 43, 38, 45, 40, 47, 42, 49, 44, 51, 54],
  },
  {
    label: "Equal Pay Ratio",
    value: "0,97",
    delta: "0,01",
    trend: "up",
    // pay gap mengecil (rasio mendekati 1) = bagus
    deltaTone: "good",
    compare: "vs Q1 2025: 0,96",
    icon: "payratio",
    tone: "amber",
    line: PALETTE.amber,
    series: [33, 36, 32, 39, 35, 41, 37, 44, 40, 46, 43, 48, 45, 50, 53],
  },
];

/* ── Komposisi karyawan berdasarkan gender ───────────────── */

export interface DonutRow {
  name: string;
  jumlah: string;
  pct: string;
  share: number;
  color: string;
}

export const totalKaryawan = "70.482";

export const komposisiGender: DonutRow[] = [
  { name: "Laki-laki", jumlah: "48.750", pct: "69,2%", share: 69.2, color: GENDER.lakiLaki },
  { name: "Perempuan", jumlah: "21.732", pct: "30,8%", share: 30.8, color: GENDER.perempuan },
];

/* ── Tren representasi perempuan di manajemen ────────────── */

/** Target SOE/BUMN representasi perempuan di manajemen. */
export const targetPerempuanManajemen = 30;

export const trenPerempuanManajemen = [
  { name: "Jan 2025", value: 16.1 },
  { name: "Feb 2025", value: 17.0 },
  { name: "Mar 2025", value: 18.2 },
  { name: "Apr 2025", value: 19.6 },
  { name: "Mei 2025", value: 20.8 },
  { name: "Jun 2025", value: 22.4 },
];

/* ── Komposisi karyawan berdasarkan generasi ─────────────── */

export const komposisiGenerasi: DonutRow[] = [
  { name: "Gen Z (≤ 25 th)", jumlah: "7.901", pct: "11,2%", share: 11.2, color: GENERATION.genZ },
  {
    name: "Milenial (26-40 th)",
    jumlah: "32.758",
    pct: "46,5%",
    share: 46.5,
    color: GENERATION.millennial,
  },
  { name: "Gen X (41-55 th)", jumlah: "23.957", pct: "34,0%", share: 34.0, color: GENERATION.genX },
  {
    name: "Baby Boomer (≥ 56 th)",
    jumlah: "5.866",
    pct: "8,3%",
    share: 8.3,
    color: GENERATION.babyBoomer,
  },
];

/* ── Piramida populasi (gender × generasi) ───────────────── */

export interface PiramidaRow {
  generasi: string;
  warnaGenerasi: string;
  lakiLaki: number;
  perempuan: number;
  labelL: string;
  labelP: string;
}

/** Split gender per generasi — totalnya konsisten dengan komposisiGenerasi & komposisiGender. */
export const piramidaPopulasi: PiramidaRow[] = [
  {
    generasi: "Gen Z",
    warnaGenerasi: GENERATION.genZ,
    lakiLaki: 4583,
    perempuan: 3318,
    labelL: "4.583",
    labelP: "3.318",
  },
  {
    generasi: "Milenial",
    warnaGenerasi: GENERATION.millennial,
    lakiLaki: 21570,
    perempuan: 11188,
    labelL: "21.570",
    labelP: "11.188",
  },
  {
    generasi: "Gen X",
    warnaGenerasi: GENERATION.genX,
    lakiLaki: 17728,
    perempuan: 6229,
    labelL: "17.728",
    labelP: "6.229",
  },
  {
    generasi: "Baby Boomer",
    warnaGenerasi: GENERATION.babyBoomer,
    lakiLaki: 4869,
    perempuan: 997,
    labelL: "4.869",
    labelP: "997",
  },
];

/* ── Perempuan berdasarkan level jabatan ─────────────────── */

export interface LevelBar {
  level: string;
  pct: number;
  label: string;
  /** true = baris agregat, ditebalkan */
  total?: boolean;
}

/** Skala maksimum sumbu bar (%). */
export const levelJabatanMax = 36;

/** Target representasi perempuan per level (%). */
export const targetLevelJabatan = 30;

export const perempuanLevelJabatan: LevelBar[] = [
  { level: "Direksi", pct: 25.0, label: "25,0%" },
  { level: "Vice President", pct: 28.3, label: "28,3%" },
  { level: "Senior Manager", pct: 30.1, label: "30,1%" },
  { level: "Manager", pct: 33.2, label: "33,2%" },
  { level: "Assistant Manager", pct: 34.5, label: "34,5%" },
  { level: "Staff", pct: 28.7, label: "28,7%" },
  { level: "Total", pct: 30.8, label: "30,8%", total: true },
];

/* ── Karyawan disabilitas berdasarkan jenis ──────────────── */

export interface DisabilitasRow extends DonutRow {
  icon: "daksa" | "rungu" | "netra" | "grahita" | "lainnya";
}

export const totalDisabilitas = "915";

export const jenisDisabilitas: DisabilitasRow[] = [
  {
    name: "Tuna Daksa",
    jumlah: "413",
    pct: "45,2%",
    share: 45.2,
    color: CATEGORICAL[1], // biru
    icon: "daksa",
  },
  {
    name: "Tuna Rungu",
    jumlah: "194",
    pct: "21,2%",
    share: 21.2,
    color: CATEGORICAL[0], // hijau
    icon: "rungu",
  },
  {
    name: "Tuna Netra",
    jumlah: "145",
    pct: "15,8%",
    share: 15.8,
    color: CATEGORICAL[2], // amber
    icon: "netra",
  },
  {
    name: "Tuna Grahita",
    jumlah: "87",
    pct: "9,5%",
    share: 9.5,
    color: CATEGORICAL[3], // ungu
    icon: "grahita",
  },
  {
    name: "Lainnya",
    jumlah: "76",
    pct: "8,3%",
    share: 8.3,
    color: CATEGORICAL[6], // slate
    icon: "lainnya",
  },
];

/* ── Pemerataan kesempatan (equal opportunity) ───────────── */

export interface RasioRow {
  nilai: string;
  judul: string;
  banding: string;
  catatan: string;
  icon: "promosi" | "pelatihan" | "turnover";
  tone: KpiChipTone;
}

export const pemerataanKesempatan: RasioRow[] = [
  {
    nilai: "1,01",
    judul: "Rasio Promosi",
    banding: "Perempuan : Laki-laki",
    catatan:
      "Perbandingan tingkat promosi perempuan terhadap laki-laki. (>1 menunjukkan lebih baik)",
    icon: "promosi",
    tone: "green",
  },
  {
    nilai: "0,97",
    judul: "Rasio Pelatihan",
    banding: "Perempuan : Laki-laki",
    catatan: "Perbandingan partisipasi pelatihan perempuan terhadap laki-laki.",
    icon: "pelatihan",
    tone: "purple",
  },
  {
    nilai: "0,99",
    judul: "Rasio Turnover",
    banding: "Perempuan : Laki-laki",
    catatan: "Perbandingan tingkat turnover perempuan terhadap laki-laki.",
    icon: "turnover",
    tone: "amber",
  },
];

/* ── Gender pay gap ──────────────────────────────────────── */

export interface GajiGender {
  label: string;
  /** nilai gaji dalam juta rupiah — sumber tunggal untuk rasio & posisi marker */
  jt: number;
  nilai: string;
  color: string;
  icon: "pria" | "wanita";
}

export const rataGaji: GajiGender[] = [
  {
    label: "Laki-laki",
    jt: 13.82,
    nilai: "Rp 13,82 Jt",
    color: GENDER.lakiLaki,
    icon: "pria",
  },
  {
    label: "Perempuan",
    jt: 13.4,
    nilai: "Rp 13,40 Jt",
    color: GENDER.perempuan,
    icon: "wanita",
  },
];

export const equalPayNote =
  "Perempuan mendapatkan 97% dari rata-rata gaji laki-laki pada posisi yang setara.";

/* ── Diversity index per unit organisasi ─────────────────── */

export interface UnitIndex {
  unit: string;
  nilai: number;
  label: string;
  color: string;
  /** true = baris rata-rata group, disorot */
  rata?: boolean;
}

export const diversityIndexUnit: UnitIndex[] = [
  { unit: "PalmCo", nilai: 84.2, label: "84,2", color: PALETTE.blue },
  { unit: "PTPN III (Persero)", nilai: 81.7, label: "81,7", color: PALETTE.blue },
  { unit: "PTPN IV", nilai: 79.8, label: "79,8", color: PALETTE.purple },
  { unit: "PTPN I", nilai: 76.3, label: "76,3", color: PALETTE.purple },
  { unit: "Holding & Supporting Co", nilai: 74.1, label: "74,1", color: PALETTE.purple },
  {
    unit: "Rata-rata PTPN Group",
    nilai: 78.6,
    label: "78,6",
    color: PALETTE.green,
    rata: true,
  },
];

/* ── Insight & rekomendasi AI ────────────────────────────── */

export interface DiInsight {
  isi: string;
  tone: "success" | "danger" | "warning" | "info";
}

export const diInsight: DiInsight[] = [
  {
    isi: "Representasi perempuan di manajemen meningkat 2,8% dibanding Q1 2025. Pertahankan tren positif ini.",
    tone: "success",
  },
  {
    isi: "Unit PTPN I dan Holding & Supporting Co memiliki Diversity Index di bawah rata-rata. Disarankan fokus pada program D&I.",
    tone: "danger",
  },
  {
    isi: "Gap gaji gender sebesar 3% masih ada. Lakukan review struktur dan kebijakan kompensasi secara berkala.",
    tone: "warning",
  },
  {
    isi: "Partisipasi karyawan disabilitas baru 1,3%. Tingkatkan inklusi melalui fasilitas kerja dan program rekrutmen khusus.",
    tone: "info",
  },
];
