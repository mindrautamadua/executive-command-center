import type { Trend } from "./data";
import { CATEGORICAL, GENDER, GENERATION, PALETTE } from "./chart-palette";
import type { KpiChipTone } from "./absensi-data";
import { payEquityCanon } from "./pay-equity-data";

/* ── KPI strip: Diversity | Equity | Inclusion + hero metrics ─ */

export interface DiKpi {
  label: string;
  value: string;
  unit?: string;
  delta: string;
  trend: Trend;
  deltaTone?: "good" | "bad";
  compare: string;
  icon: "index" | "equity" | "inclusion" | "manajemen" | "perempuan" | "payratio";
  tone: KpiChipTone;
  line: string;
  series: number[];
  /** Metodologi metrik — tampil sebagai tooltip ⓘ. */
  info?: string;
}

export const diKpi: DiKpi[] = [
  {
    label: "Diversity Index",
    value: "78,6",
    unit: "/100",
    delta: "4,2 pts",
    trend: "up",
    compare: "vs Q1 2026: 74,4",
    icon: "index",
    tone: "green",
    line: PALETTE.green,
    series: [30, 36, 32, 39, 35, 42, 38, 45, 41, 48, 44, 51, 47, 54, 58],
    info: "Skor komposit: representasi gender 25%, keragaman kepemimpinan 25%, keragaman usia 15%, inklusi disabilitas 15%, pemerataan kesempatan 20%.",
  },
  {
    label: "Equity of Opportunity",
    value: "0,92",
    delta: "0,02",
    trend: "up",
    deltaTone: "good",
    compare: "vs Q1 2026: 0,90",
    icon: "equity",
    tone: "blue",
    line: PALETTE.blue,
    series: [31, 35, 32, 38, 34, 41, 37, 43, 39, 46, 42, 48, 45, 51, 54],
    info: "Rata-rata 8 rasio kesempatan perempuan:laki-laki — hiring, promosi, pelatihan, high potential, mobilitas internal, suksesi, retensi, dan gaji. 1,00 = paritas penuh.",
  },
  {
    label: "Inclusion Index",
    value: "74,8",
    unit: "/100",
    delta: "1,9 pts",
    trend: "up",
    compare: "vs Q1 2026: 72,9",
    icon: "inclusion",
    tone: "teal",
    line: PALETTE.teal,
    series: [30, 34, 31, 37, 33, 39, 35, 42, 38, 44, 40, 47, 43, 49, 52],
    info: "Survei pengalaman inklusi (41.238 responden): belonging, voice, fairness, psychological safety, dan manager inclusion. Masih di bawah Diversity Index 78,6 — representasi lebih baik daripada pengalaman.",
  },
  {
    label: "Perempuan di Manajemen",
    value: "22,4%",
    delta: "2,8%",
    trend: "up",
    compare: "Target 2028: 30% (BUMN)",
    icon: "manajemen",
    tone: "purple",
    line: PALETTE.purple,
    series: [26, 32, 29, 36, 32, 40, 35, 43, 39, 46, 42, 49, 45, 53, 57],
    info: "Perempuan pemegang jabatan struktural level Manager ke atas (bukan seluruh grade band — grade mencakup jabatan fungsional). Gap terhadap target 30%: −7,6 pts; proyeksi 2028: 28,4% (at risk).",
  },
  {
    label: "Perempuan di Organisasi",
    value: "30,8%",
    delta: "2,3%",
    trend: "up",
    compare: "vs Q1 2026: 28,5%",
    icon: "perempuan",
    tone: "pink",
    line: PALETTE.pink,
    series: [28, 33, 30, 37, 33, 40, 36, 44, 39, 46, 42, 50, 45, 52, 56],
  },
  {
    label: "Equal Pay Ratio (Unadj.)",
    value: "0,97",
    delta: "0,01",
    trend: "up",
    // pay gap mengecil (rasio mendekati 1) = bagus
    deltaTone: "good",
    compare: "Adjusted: 0,99",
    icon: "payratio",
    tone: "amber",
    line: PALETTE.amber,
    series: [33, 36, 32, 39, 35, 41, 37, 44, 40, 46, 43, 48, 45, 50, 53],
    info: "Unadjusted = rata-rata gaji perempuan / laki-laki seluruh organisasi (0,97). Adjusted = setelah kontrol level, rumpun jabatan, tenur & lokasi (0,99). Metodologi selaras halaman Compensation & Benefits.",
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

export const totalKaryawan = "70.142";

export const komposisiGender: DonutRow[] = [
  { name: "Laki-laki", jumlah: "48.538", pct: "69,2%", share: 69.2, color: GENDER.lakiLaki },
  { name: "Perempuan", jumlah: "21.604", pct: "30,8%", share: 30.8, color: GENDER.perempuan },
];

/* ── Tren representasi perempuan di manajemen ────────────── */

/** Target SOE/BUMN representasi perempuan di manajemen. */
export const targetPerempuanManajemen = 30;

export const trenPerempuanManajemen = [
  { name: "Jan 2026", value: 16.1 },
  { name: "Feb 2026", value: 17.0 },
  { name: "Mar 2026", value: 18.2 },
  { name: "Apr 2026", value: 19.6 },
  { name: "Mei 2026", value: 20.8 },
  { name: "Jun 2026", value: 22.4 },
];

/* ── Trajectory target: aktual vs proyeksi menuju 30% ────── */

export interface TrajectoryRow {
  tahun: string;
  /** realisasi tahun berjalan */
  aktual?: number;
  /** proyeksi model (duplikasi di tahun terakhir aktual agar garis tersambung) */
  proyeksi?: number;
}

export const trajectoryPerempuanManajemen: TrajectoryRow[] = [
  { tahun: "2025", aktual: 15.2 },
  { tahun: "2026", aktual: 22.4, proyeksi: 22.4 },
  { tahun: "2027", proyeksi: 25.6 },
  { tahun: "2028", proyeksi: 28.4 },
];

export const trajectoryRingkas = {
  proyeksi2028: "28,4%",
  gap: "−1,6 pts",
  probabilitas: "64%",
  status: "At Risk" as const,
  catatan:
    "Dengan run-rate promosi & hiring saat ini, target 30% baru tercapai 2029. Akselerasi suksesi perempuan VP+ dibutuhkan.",
};

/* ── Komposisi karyawan berdasarkan generasi ─────────────── */

export const komposisiGenerasi: DonutRow[] = [
  { name: "Gen Z (≤ 25 th)", jumlah: "7.856", pct: "11,2%", share: 11.2, color: GENERATION.genZ },
  {
    name: "Milenial (26-40 th)",
    jumlah: "32.616",
    pct: "46,5%",
    share: 46.5,
    color: GENERATION.millennial,
  },
  { name: "Gen X (41-55 th)", jumlah: "23.848", pct: "34,0%", share: 34.0, color: GENERATION.genX },
  {
    name: "Baby Boomer (≥ 56 th)",
    jumlah: "5.822",
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
    lakiLaki: 4552,
    perempuan: 3304,
    labelL: "4.552",
    labelP: "3.304",
  },
  {
    generasi: "Milenial",
    warnaGenerasi: GENERATION.millennial,
    lakiLaki: 21502,
    perempuan: 11114,
    labelL: "21.502",
    labelP: "11.114",
  },
  {
    generasi: "Gen X",
    warnaGenerasi: GENERATION.genX,
    lakiLaki: 17654,
    perempuan: 6194,
    labelL: "17.654",
    labelP: "6.194",
  },
  {
    generasi: "Baby Boomer",
    warnaGenerasi: GENERATION.babyBoomer,
    lakiLaki: 4830,
    perempuan: 992,
    labelL: "4.830",
    labelP: "992",
  },
];

/* ── Gender leadership funnel (pipeline leakage) ─────────── */

export interface FunnelRow {
  level: string;
  pct: number;
  label: string;
  /** selisih vs level sebelumnya (pts); null untuk baris pertama */
  step: string | null;
  stepTone: "good" | "bad" | null;
}

/** Skala maksimum sumbu bar (%). */
export const funnelMax = 36;

/** Target representasi perempuan per level (%). */
export const targetLevelJabatan = 30;

/**
 * Urut alur karier Staff → Direksi. Puncak pipeline di Assistant Manager
 * (34,5%) lalu turun konsisten sampai Direksi (25,0%) = leakage −9,5 pts.
 */
export const genderFunnel: FunnelRow[] = [
  { level: "Staff", pct: 28.7, label: "28,7%", step: null, stepTone: null },
  { level: "Assistant Manager", pct: 34.5, label: "34,5%", step: "+5,8", stepTone: "good" },
  { level: "Manager", pct: 33.2, label: "33,2%", step: "−1,3", stepTone: "bad" },
  { level: "Senior Manager", pct: 30.1, label: "30,1%", step: "−3,1", stepTone: "bad" },
  { level: "Vice President", pct: 28.3, label: "28,3%", step: "−1,8", stepTone: "bad" },
  { level: "Direksi", pct: 25.0, label: "25,0%", step: "−3,3", stepTone: "bad" },
];

export const funnelLeakage =
  "Leakage Assistant Manager → Direksi: −9,5 pts. Masalah utama bukan hiring — pipeline level bawah kuat — melainkan konversi ke senior leadership.";

/** Kecepatan karier perempuan vs laki-laki. */
export const promotionVelocity = [
  { label: "Rasio Promosi (P:L)", nilai: "1,01", catatan: "Tingkat promosi setara" },
  { label: "Time-to-Promotion", nilai: "4,8 vs 4,4 th", catatan: "Perempuan 0,4 th lebih lama" },
  { label: "Promotion Velocity", nilai: "0,92", catatan: "Kecepatan karier P/L" },
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

/**
 * Inclusion outcome karyawan disabilitas: rasio terhadap rata-rata organisasi.
 * Representasi saja tidak cukup — outcome karier harus setara.
 */
export const disabilitasEquity = [
  { label: "Promosi", nilai: "0,92" },
  { label: "Pelatihan", nilai: "0,95" },
  { label: "Retensi", nilai: "1,01" },
];

/* ── Equity of Opportunity (perempuan : laki-laki) ───────── */

export interface EquityRow {
  label: string;
  nilai: number;
  labelNilai: string;
  /** sumber data lintas halaman */
  sumber: string;
}

/** Indeks komposit = rata-rata 8 rasio. */
export const equityIndex = "0,92";

/** Skala bar: 0,6 – 1,1; garis paritas di 1,0. */
export const equityScale = { min: 0.6, max: 1.1, paritas: 1.0 };

export const equityOpportunity: EquityRow[] = [
  { label: "Hiring", nilai: 0.89, labelNilai: "0,89", sumber: "Rekrutmen" },
  { label: "Promosi", nilai: 1.01, labelNilai: "1,01", sumber: "Kinerja" },
  { label: "Pelatihan", nilai: 0.97, labelNilai: "0,97", sumber: "L&D" },
  { label: "High Potential", nilai: 0.93, labelNilai: "0,93", sumber: "Talent Intelligence" },
  { label: "Mobilitas Internal", nilai: 0.88, labelNilai: "0,88", sumber: "Workforce Planning" },
  { label: "Suksesi (VP+)", nilai: 0.74, labelNilai: "0,74", sumber: "Succession Planning" },
  { label: "Retensi", nilai: 0.99, labelNilai: "0,99", sumber: "People Risk Radar" },
  { label: "Gaji (Adjusted)", nilai: 0.99, labelNilai: "0,99", sumber: "Compensation" },
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

/** Rata-rata gaji dari pay-equity-data — sumber tunggal dengan Compensation & Benefits. */
export const rataGaji: GajiGender[] = [
  {
    label: "Laki-laki",
    jt: payEquityCanon.rataLNum,
    nilai: payEquityCanon.rataL,
    color: GENDER.lakiLaki,
    icon: "pria",
  },
  {
    label: "Perempuan",
    jt: payEquityCanon.rataPNum,
    nilai: payEquityCanon.rataP,
    color: GENDER.perempuan,
    icon: "wanita",
  },
];

/**
 * Unadjusted = rasio rata-rata agregat (termasuk efek komposisi level);
 * adjusted = setelah kontrol level, rumpun jabatan, tenur & lokasi —
 * angka dari pay-equity-data, sama dengan halaman Compensation & Benefits.
 */
export const payEquityDi = {
  unadjustedGap: payEquityCanon.unadjustedGap,
  unadjustedRatio: payEquityCanon.unadjustedRatio,
  adjustedGap: payEquityCanon.adjustedGap,
  adjustedRatio: payEquityCanon.adjustedRatio,
  catatan: payEquityCanon.catatan,
};

/* ── Female talent pipeline (koneksi ke Succession) ──────── */

export interface PipelineStat {
  label: string;
  nilai: string;
  detail: string;
  /** progres relatif untuk bar (0-100) */
  pct: number;
  tone: "green" | "amber" | "red";
}

export const femalePipeline: PipelineStat[] = [
  {
    label: "HiPo Perempuan",
    nilai: "316",
    detail: "29,6% dari 1.068 HiPo grup",
    pct: 74,
    tone: "green",
  },
  {
    label: "Suksesor Perempuan (Posisi Kritis)",
    nilai: "17,9%",
    detail: "38 dari 212 posisi kritis",
    pct: 45,
    tone: "amber",
  },
  {
    label: "Suksesor Perempuan Ready Now",
    nilai: "14",
    detail: "21,9% dari 64 kandidat Ready Now",
    pct: 55,
    tone: "amber",
  },
  {
    label: "Suksesor Perempuan VP+",
    nilai: "12%",
    detail: "Target 25% — constraint utama pipeline",
    pct: 30,
    tone: "red",
  },
];

export const femalePipelineRisk =
  "Future Leadership Diversity Risk: tanpa penguatan suksesor perempuan VP+, leadership diversity tidak membaik secara organik.";

/* ── DEI Risk Matrix per unit organisasi ─────────────────── */

export interface DeiUnitRow {
  unit: string;
  diversity: string;
  equity: string;
  inclusion: string;
  trend: "up" | "flat" | "down";
  risk: "rendah" | "sedang" | "tinggi";
  /** true = baris rata-rata group, disorot */
  rata?: boolean;
}

export const deiRiskMatrix: DeiUnitRow[] = [
  { unit: "PalmCo", diversity: "84,2", equity: "0,96", inclusion: "79,4", trend: "up", risk: "rendah" },
  { unit: "PTPN III (Persero)", diversity: "81,7", equity: "0,94", inclusion: "77,2", trend: "up", risk: "rendah" },
  { unit: "PTPN IV", diversity: "79,8", equity: "0,93", inclusion: "75,6", trend: "flat", risk: "sedang" },
  { unit: "PTPN I", diversity: "76,3", equity: "0,90", inclusion: "71,8", trend: "down", risk: "sedang" },
  { unit: "Holding & Supporting Co", diversity: "74,1", equity: "0,86", inclusion: "68,9", trend: "down", risk: "tinggi" },
  {
    unit: "Rata-rata PTPN Group",
    diversity: "78,6",
    equity: "0,92",
    inclusion: "74,8",
    trend: "up",
    risk: "sedang",
    rata: true,
  },
];

export const RISK_STYLE: Record<DeiUnitRow["risk"], string> = {
  rendah: "tone-green",
  sedang: "tone-amber",
  tinggi: "tone-red",
};

/* ── DEI Action Tracker ──────────────────────────────────── */

export interface DeiAksi {
  inisiatif: string;
  owner: string;
  target: string;
  aktual: string;
  /** progres menuju target (0-100) */
  progress: number;
  status: "On Track" | "At Risk" | "Off Track";
}

export const deiActionTracker: DeiAksi[] = [
  {
    inisiatif: "Female Leadership Pipeline",
    owner: "HC",
    target: "30% (2028)",
    aktual: "22,4%",
    progress: 75,
    status: "At Risk",
  },
  {
    inisiatif: "Suksesor Perempuan VP+",
    owner: "HC",
    target: "25% (2027)",
    aktual: "12%",
    progress: 48,
    status: "Off Track",
  },
  {
    inisiatif: "Disability Hiring",
    owner: "TA",
    target: "2,0% (2027)",
    aktual: "1,3%",
    progress: 65,
    status: "At Risk",
  },
  {
    inisiatif: "Adjusted Pay Gap < 1%",
    owner: "Reward",
    target: "< 1,0%",
    aktual: "1,2%",
    progress: 83,
    status: "At Risk",
  },
  {
    inisiatif: "Inclusive Leadership Training",
    owner: "L&D",
    target: "80% coverage",
    aktual: "74%",
    progress: 92,
    status: "On Track",
  },
];

export const AKSI_STATUS_STYLE: Record<DeiAksi["status"], string> = {
  "On Track": "tone-green",
  "At Risk": "tone-amber",
  "Off Track": "tone-red",
};

export const AKSI_BAR_COLOR: Record<DeiAksi["status"], string> = {
  "On Track": PALETTE.green,
  "At Risk": PALETTE.amber,
  "Off Track": PALETTE.red,
};

/* ── Insight & rekomendasi AI ────────────────────────────── */

export interface DiInsight {
  isi: string;
  tone: "success" | "danger" | "warning" | "info";
}

export const diInsight: DiInsight[] = [
  {
    isi: "Rasio promosi seimbang (1,01) dan pipeline level bawah kuat (Assistant Manager 34,5%) — masalah utama bukan konversi promosi maupun hiring.",
    tone: "success",
  },
  {
    isi: "Leadership pipeline leakage: representasi perempuan turun −9,5 pts dari Assistant Manager (34,5%) ke Direksi (25,0%). Root cause: suksesor perempuan VP+ baru 12%. Perkuat sponsorship HiPo perempuan.",
    tone: "danger",
  },
  {
    isi: "Proyeksi 2028 (28,4%) di bawah target 30% perempuan di manajemen — probabilitas tercapai 64%. Akselerasi lewat suksesi & mobilitas, bukan hanya rekrutmen.",
    tone: "warning",
  },
  {
    isi: "Inclusion Index (74,8) tertinggal dari Diversity Index (78,6) — terendah di Holding & Supporting Co (68,9). Represented belum tentu included.",
    tone: "info",
  },
];
