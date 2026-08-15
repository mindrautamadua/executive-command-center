import type { Trend } from "./data";
import { PALETTE, SEMANTIC } from "./chart-palette";

/*
 * Grain data halaman Organisasi & Jabatan (periode Mei 2026):
 * - Karyawan  : 70.142 — seluruh karyawan aktif, termasuk pelaksana non-struktural.
 * - Posisi    : 1.256 — master jabatan struktural (Direktur s.d. Staff struktural).
 * Semua kartu level (donut, piramida, keterisian, span) memakai grain POSISI
 * dan totalnya wajib rekonsil ke 1.256 (terisi 1.024 + kosong 232).
 */

/* ── ringkasan organisasi ────────────────────────────────── */

export interface OrgSummary {
  label: string;
  value: string;
  delta?: string;
  trend?: Trend;
  compare: string;
  /** definisi/grain metrik — tampil sebagai tooltip ⓘ */
  info?: string;
  /** gauge cincin di sisi kanan angka */
  gauge?: { pct: number; color: string };
  /** lencana teks, mis. "Optimal" */
  badge?: string;
  /** label berwarna biru (metrik rasio) */
  accent?: boolean;
}

export const orgSummary: OrgSummary[] = [
  {
    label: "Total Karyawan",
    value: "70.142",
    delta: "2,15%",
    trend: "up",
    compare: "vs Apr 2026: 68.662",
    info: "Grain: karyawan. Seluruh karyawan aktif PTPN Group, termasuk pelaksana non-struktural — bukan jumlah jabatan.",
  },
  {
    label: "Total Unit Organisasi",
    value: "532",
    delta: "3",
    trend: "up",
    compare: "vs Apr 2026: 529",
    info: "Grain: unit. Holding, sub holding, PTPN, divisi, dan unit kerja.",
  },
  {
    label: "Total Jabatan",
    value: "1.256",
    delta: "18",
    trend: "up",
    compare: "vs Apr 2026: 1.238",
    info: "Grain: posisi. Master jabatan struktural (Direktur s.d. Staff struktural) — bukan jumlah karyawan.",
  },
  {
    label: "Jabatan Terisi",
    value: "1.024",
    compare: "vs Apr 2026: 79,8%",
    info: "Grain: posisi. 1.024 dari 1.256 jabatan struktural terisi (81,5%).",
    gauge: { pct: 81.5, color: PALETTE.green },
  },
  {
    label: "Jabatan Kosong",
    value: "232",
    compare: "vs Apr 2026: 20,2%",
    info: "Grain: posisi. 232 dari 1.256 jabatan struktural kosong (18,5%), 13 di antaranya kritis.",
    gauge: { pct: 18.5, color: PALETTE.red },
  },
  {
    label: "Rasio Span of Control",
    value: "7,5",
    badge: "Optimal",
    compare: "vs Apr 2026: 7,7",
    info: "Rata-rata tertimbang bawahan langsung per atasan (level Direktur s.d. Supervisor), bobot = jabatan terisi per level. Rentang optimal agregat 5–8.",
    accent: true,
  },
  {
    label: "Total People Cost (YOY)",
    value: "Rp 8,43 T",
    delta: "4,12%",
    trend: "up",
    compare: "vs Mei 2025: Rp 8,10 T",
    info: "Seluruh biaya SDM: gaji, tunjangan, benefit, dan pengembangan (langsung + tidak langsung).",
  },
];

/* ── struktur organisasi ─────────────────────────────────── */

export interface OrgNode {
  label: string;
  sub?: string;
  tone: "holding" | "green" | "blue" | "orange" | "purple" | "pink" | "muted";
}

export const strukturDivisi: OrgNode[] = [
  { label: "Divisi Operasional", tone: "green" },
  { label: "Divisi Keuangan", tone: "blue" },
  { label: "Divisi SDM & Umum", tone: "orange" },
  { label: "Divisi Strategi & Pengembangan", tone: "green" },
  { label: "Divisi Komersial & Pemasaran", tone: "purple" },
];

export const strukturSubHolding: OrgNode[] = [
  { label: "Sub Holding Perkebunan", tone: "pink" },
  { label: "Sub Holding PalmCo", tone: "blue" },
  { label: "Sub Holding Supporting Co", tone: "green" },
];

export interface OrgLeaf {
  label: string;
  value?: string;
  caption: string;
  muted?: boolean;
}

export const strukturAnakPerusahaan: OrgLeaf[] = [
  { label: "PTPN I", value: "4.812", caption: "Karyawan" },
  { label: "PTPN II", value: "5.623", caption: "Karyawan" },
  { label: "PTPN IV", value: "6.125", caption: "Karyawan" },
  { label: "PTPN V", value: "4.910", caption: "Karyawan" },
  { label: "PTPN VI", value: "5.342", caption: "Karyawan" },
  { label: "+ 10", caption: "Anak Perusahaan Lainnya", muted: true },
];

/** Kelas chip pastel dark-mode-safe untuk tiap tone node. */
export const NODE_TONE_CLASS: Record<OrgNode["tone"], string> = {
  holding: "tone-green",
  green: "tone-green",
  blue: "tone-blue",
  orange: "tone-amber",
  purple: "tone-purple",
  pink: "tone-pink",
  muted: "tone-slate",
};

/* ── distribusi karyawan per unit (grain: karyawan) ──────── */

export interface UnitDist {
  unit: string;
  value: number;
}

export const distribusiUnit: UnitDist[] = [
  { unit: "Sub Holding Perkebunan", value: 25842 },
  { unit: "Sub Holding PalmCo", value: 18765 },
  { unit: "Divisi Operasional", value: 8142 },
  { unit: "Divisi SDM & Umum", value: 4523 },
  { unit: "PTPN IV", value: 3845 },
  { unit: "PTPN I", value: 3210 },
  { unit: "PTPN V", value: 2987 },
  { unit: "PTPN II", value: 2765 },
  { unit: "PTPN VI", value: 2498 },
  { unit: "Supporting Co", value: 1563 },
];

/* ── analisis jabatan — donut (grain: posisi, Σ = 1.256) ─── */

export const analisisJabatan = [
  { name: "Direktur", value: 18, pct: "1,4%", color: PALETTE.purple },
  { name: "GM", value: 86, pct: "6,8%", color: PALETTE.blue },
  { name: "Manager", value: 124, pct: "9,9%", color: PALETTE.teal },
  { name: "Supervisor", value: 312, pct: "24,8%", color: PALETTE.greenSoft },
  { name: "Staff", value: 716, pct: "57,0%", color: PALETTE.green },
];

export const totalJabatan = "1.256";

/* ── jabatan kosong kritis ───────────────────────────────── */

export type KosongSeverity = "Kritis" | "Tinggi" | "Sedang";

export interface JabatanKosong {
  jabatan: string;
  unit: string;
  jumlah: number;
  severity: KosongSeverity;
}

export const jabatanKosongKritis: JabatanKosong[] = [
  { jabatan: "Senior Agronomist", unit: "PTPN IV", jumlah: 8, severity: "Kritis" },
  { jabatan: "IT Security Specialist", unit: "PTPN Holding", jumlah: 5, severity: "Kritis" },
  { jabatan: "Regional Controller", unit: "Sub Holding PalmCo", jumlah: 4, severity: "Tinggi" },
  { jabatan: "Mill Manager", unit: "PTPN III", jumlah: 3, severity: "Tinggi" },
  { jabatan: "Quality Assurance Manager", unit: "PTPN V", jumlah: 3, severity: "Sedang" },
];

export const SEVERITY_TONE: Record<KosongSeverity, string> = {
  Kritis: "tone-red",
  Tinggi: "tone-amber",
  Sedang: "tone-slate",
};

/* ── span of control analytics ───────────────────────────── */

export interface SpanRow {
  level: string;
  /** rata-rata bawahan langsung per atasan pada level ini */
  value: number;
  /** benchmark kontekstual per level (bukan satu angka untuk semua) */
  benchMin: number;
  benchMax: number;
  /** jumlah atasan yang melebihi batas atas benchmark */
  over: number;
}

export const spanOfControl: SpanRow[] = [
  { level: "Direktur", value: 3.1, benchMin: 3, benchMax: 6, over: 0 },
  { level: "GM", value: 5.2, benchMin: 5, benchMax: 8, over: 3 },
  { level: "Manager", value: 6.8, benchMin: 6, benchMax: 10, over: 6 },
  { level: "Supervisor", value: 8.7, benchMin: 6, benchMax: 8, over: 34 },
];

/*
 * KPI "Rasio Span of Control" = rata-rata tertimbang bobot jabatan terisi:
 * (18×3,1 + 82×5,2 + 110×6,8 + 268×8,7) / 478 ≈ 7,5
 */

/* ── tingkat organisasi — piramida (grain: posisi, Σ = 1.256) ── */

export interface OrgLevel {
  level: string;
  value: string;
  pct: string;
  /** nilai numerik pct — tinggi pita dihitung proporsional dari sini */
  pctValue: number;
  color: string;
}

export const tingkatOrganisasi: OrgLevel[] = [
  { level: "Direktur", value: "18", pct: "1,4%", pctValue: 1.4, color: PALETTE.purple },
  { level: "GM", value: "86", pct: "6,8%", pctValue: 6.8, color: PALETTE.blue },
  { level: "Manager", value: "124", pct: "9,9%", pctValue: 9.9, color: PALETTE.teal },
  { level: "Supervisor", value: "312", pct: "24,8%", pctValue: 24.8, color: PALETTE.greenSoft },
  { level: "Staff", value: "716", pct: "57,0%", pctValue: 57.0, color: PALETTE.green },
];

/* ── status pengisian jabatan (Σ terisi 1.024 + kosong 232) ── */

export interface PengisianRow {
  level: string;
  terisi: string;
  kosong: string;
  pct: number;
  label: string;
}

export const statusPengisian: PengisianRow[] = [
  { level: "Direktur", terisi: "18", kosong: "0", pct: 100, label: "100%" },
  { level: "GM", terisi: "82", kosong: "4", pct: 95.3, label: "95,3%" },
  { level: "Manager", terisi: "110", kosong: "14", pct: 88.7, label: "88,7%" },
  { level: "Supervisor", terisi: "268", kosong: "44", pct: 85.9, label: "85,9%" },
  { level: "Staff", terisi: "546", kosong: "170", pct: 76.3, label: "76,3%" },
];

/* ── perubahan organisasi (YOY) ──────────────────────────── */

export interface PerubahanTile {
  label: string;
  value: string;
  delta?: string;
  trend?: Trend;
  compare: string;
  icon: "unit" | "jabatan" | "baru" | "hapus";
  /** tone chip pastel (kelas .tone-*) */
  tone: "green" | "blue" | "teal" | "amber";
}

export const perubahanOrganisasi: PerubahanTile[] = [
  {
    label: "Unit Organisasi",
    value: "532",
    delta: "8,2%",
    trend: "up",
    compare: "vs Mei 2025: 492",
    icon: "unit",
    tone: "green",
  },
  {
    label: "Total Jabatan",
    value: "1.256",
    delta: "7,6%",
    trend: "up",
    compare: "vs Mei 2025: 1.168",
    icon: "jabatan",
    tone: "blue",
  },
  {
    label: "Jabatan Baru",
    value: "156",
    compare: "vs Mei 2025: 142",
    icon: "baru",
    tone: "teal",
  },
  {
    label: "Jabatan Dihapus",
    value: "68",
    compare: "vs Mei 2025: 74",
    icon: "hapus",
    tone: "amber",
  },
];

/* ── kesehatan organisasi (skor komposit) ────────────────── */

export interface HealthDim {
  dim: string;
  score: number;
}

/** skor keseluruhan = rata-rata enam dimensi (78,5 → 79) */
export const orgHealthOverall = 79;

export const orgHealthDims: HealthDim[] = [
  { dim: "Span of Control", score: 84 },
  { dim: "Layer Organisasi", score: 78 },
  { dim: "Efisiensi Posisi", score: 82 },
  { dim: "Efisiensi Biaya", score: 76 },
  { dim: "Cakupan Posisi Kritis", score: 71 },
  { dim: "Kompleksitas Struktur", score: 80 },
];

export const healthColor = (score: number) =>
  score >= 80 ? SEMANTIC.good : score >= 70 ? SEMANTIC.warn : SEMANTIC.bad;

/* ── layer manajemen & densitas manajerial ───────────────── */

export interface LayerRow {
  scope: string;
  layers: number;
}

/** benchmark maksimum layer manajemen yang sehat */
export const layerBenchmarkMax = 8;

export const layerOrganisasi: LayerRow[] = [
  { scope: "Holding", layers: 6 },
  { scope: "Sub Holding", layers: 7 },
  { scope: "PTPN", layers: 8 },
  { scope: "Unit Kebun / Pabrik", layers: 9 },
];

/** unit dengan layer di atas benchmark (>8) */
export const unitLayerBerlebih = 17;

/**
 * Densitas manajerial = posisi Manager ke atas / total posisi:
 * (18 + 86 + 124) / 1.256 = 18,2%. Benchmark sehat 15–20%.
 */
export const densitasManajerial = {
  value: "18,2%",
  detail: "228 dari 1.256 posisi",
  benchmark: "Benchmark 15–20%",
  status: "Sehat" as const,
};

/* ── efisiensi biaya organisasi ──────────────────────────── */

export interface CostStat {
  label: string;
  value: string;
  caption: string;
}

export const costEfficiency: CostStat[] = [
  { label: "Total People Cost", value: "Rp 8,43 T", caption: "+4,12% YOY" },
  { label: "People Cost / Karyawan", value: "Rp 120,2 jt", caption: "per tahun" },
  { label: "People Cost / Pendapatan", value: "15,4%", caption: "Pendapatan Rp 54,6 T" },
  { label: "Pendapatan / Karyawan", value: "Rp 778 jt", caption: "per tahun" },
];

/** pertumbuhan biaya (4,12%) vs pertumbuhan pendapatan (6,8%) */
export const costGrowthStatus = {
  costGrowth: "4,12%",
  revenueGrowth: "6,8%",
  good: true,
  text: "Pertumbuhan people cost (4,12%) di bawah pertumbuhan pendapatan (6,8%) — struktur biaya organisasi masih sehat.",
};

/* ── mapping jabatan kritis & suksesi ────────────────────── */

export type RisikoLevel = "Rendah" | "Sedang" | "Tinggi";

export interface MappingRow {
  jabatan: string;
  unit: string;
  level: string;
  karyawan: string;
  risiko: RisikoLevel;
  readyNow: number;
  ready12: number;
  ready3: number;
  rencana: number;
  /** skor risiko posisi 0–100: kritikalitas × vacancy × suksesi × ketersediaan talenta */
  riskScore: number;
  /** single point of failure: 1 pemegang jabatan + 0 suksesor siap */
  spof: boolean;
}

export const mappingJabatanKritis: MappingRow[] = [
  {
    jabatan: "Direktur Operasional",
    unit: "Holding",
    level: "Direktur",
    karyawan: "Andi Pratama",
    risiko: "Rendah",
    readyNow: 2,
    ready12: 3,
    ready3: 5,
    rencana: 80,
    riskScore: 32,
    spof: false,
  },
  {
    jabatan: "GM Perkebunan",
    unit: "Sub Holding Perkebunan",
    level: "GM",
    karyawan: "Dewi Lestari",
    risiko: "Sedang",
    readyNow: 1,
    ready12: 4,
    ready3: 6,
    rencana: 70,
    riskScore: 54,
    spof: false,
  },
  {
    jabatan: "Mill Manager",
    unit: "PTPN IV",
    level: "Manager",
    karyawan: "Budi Santoso",
    risiko: "Tinggi",
    readyNow: 0,
    ready12: 2,
    ready3: 3,
    rencana: 40,
    riskScore: 87,
    spof: false,
  },
  {
    jabatan: "Regional Controller",
    unit: "PalmCo",
    level: "Manager",
    karyawan: "Rina Fitriani",
    risiko: "Sedang",
    readyNow: 1,
    ready12: 3,
    ready3: 4,
    rencana: 60,
    riskScore: 58,
    spof: false,
  },
  {
    jabatan: "IT Security Manager",
    unit: "Holding",
    level: "Manager",
    karyawan: "Ahmad Fauzi",
    risiko: "Tinggi",
    readyNow: 0,
    ready12: 1,
    ready3: 2,
    rencana: 30,
    riskScore: 91,
    spof: true,
  },
];

/** Kelas chip pastel dark-mode-safe per level risiko. */
export const RISIKO_TONE: Record<RisikoLevel, string> = {
  Rendah: "tone-green",
  Sedang: "tone-amber",
  Tinggi: "tone-red",
};

export const rencanaColor = (pct: number) =>
  pct >= 60 ? SEMANTIC.good : pct >= 40 ? SEMANTIC.warn : SEMANTIC.bad;

export const riskScoreColor = (score: number) =>
  score >= 75 ? SEMANTIC.bad : score >= 50 ? SEMANTIC.warn : SEMANTIC.good;

/* ── insight AI ──────────────────────────────────────────── */

export const orgInsightAi = [
  "Span of Control level Supervisor 8,7 melampaui batas atas benchmark kontekstual 6–8; 34 supervisor melebihi rentang optimal.",
  "18,5% jabatan struktural masih kosong (232 posisi); 13 di antaranya berkategori kritis dan 1 posisi berstatus single point of failure.",
  "Unit organisasi bertambah 8,2% YOY — dapat mencerminkan ekspansi bisnis atau redesign struktur; validasi terhadap pertumbuhan pendapatan (6,8%) diperlukan.",
];
