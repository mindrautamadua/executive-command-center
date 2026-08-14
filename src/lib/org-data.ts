import type { Trend } from "./data";
import { PALETTE, SEMANTIC } from "./chart-palette";

/* ── ringkasan organisasi ────────────────────────────────── */

export interface OrgSummary {
  label: string;
  value: string;
  delta?: string;
  trend?: Trend;
  compare: string;
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
    compare: "vs Apr 2025: 68.662",
  },
  {
    label: "Total Unit Organisasi",
    value: "532",
    delta: "3",
    trend: "up",
    compare: "vs Apr 2025: 529",
  },
  {
    label: "Total Jabatan",
    value: "1.256",
    delta: "18",
    trend: "up",
    compare: "vs Apr 2025: 1.238",
  },
  {
    label: "Jabatan Terisi",
    value: "1.024",
    compare: "vs Apr 2025: 79,8%",
    gauge: { pct: 81.5, color: PALETTE.green },
  },
  {
    label: "Jabatan Kosong",
    value: "232",
    compare: "vs Apr 2025: 20,2%",
    gauge: { pct: 18.5, color: PALETTE.red },
  },
  {
    label: "Rasio Span of Control",
    value: "6,2",
    badge: "Optimal",
    compare: "vs Apr 2025: 6,4",
    accent: true,
  },
  {
    label: "Biaya Organisasi (YOY)",
    value: "Rp 8,43 T",
    delta: "4,12%",
    trend: "up",
    compare: "vs Mei 2024: Rp 8,10 T",
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

/* ── distribusi karyawan per unit ────────────────────────── */

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

/* ── analisis jabatan (donut) ────────────────────────────── */

export const analisisJabatan = [
  { name: "Manager", value: 124, pct: "9,9%", color: PALETTE.blue },
  { name: "Supervisor", value: 312, pct: "24,8%", color: PALETTE.green },
  { name: "Staff", value: 820, pct: "65,3%", color: PALETTE.amber },
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

/* ── span of control ─────────────────────────────────────── */

export const spanOfControl = [
  { level: "Direktur", value: 3.1 },
  { level: "GM", value: 5.2 },
  { level: "Manager", value: 6.8 },
  { level: "Supervisor", value: 8.7 },
  { level: "Staff", value: 10.9 },
];

/** titik yang ditandai dengan sorotan */
export const spanHighlight = "Manager";

/** rentang rasio span of control yang dianggap optimal */
export const spanOptimal = { min: 5, max: 8 };

/* ── tingkat organisasi (piramida) ───────────────────────── */

export interface OrgLevel {
  level: string;
  value: string;
  pct: string;
  /** nilai numerik pct — tinggi pita dihitung proporsional dari sini */
  pctValue: number;
  color: string;
}

export const tingkatOrganisasi: OrgLevel[] = [
  { level: "Direktur", value: "18", pct: "0,4%", pctValue: 0.4, color: PALETTE.purple },
  { level: "GM", value: "86", pct: "1,6%", pctValue: 1.6, color: PALETTE.blue },
  { level: "Manager", value: "462", pct: "8,7%", pctValue: 8.7, color: PALETTE.teal },
  { level: "Supervisor", value: "1.024", pct: "19,4%", pctValue: 19.4, color: PALETTE.greenSoft },
  { level: "Staff", value: "5.428", pct: "70,9%", pctValue: 70.9, color: PALETTE.green },
];

/* ── status pengisian jabatan ────────────────────────────── */

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
  { level: "Manager", terisi: "412", kosong: "50", pct: 89.2, label: "89,2%" },
  { level: "Supervisor", terisi: "942", kosong: "82", pct: 92, label: "92,0%" },
  { level: "Staff", terisi: "4.932", kosong: "496", pct: 90.8, label: "90,8%" },
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
    compare: "vs Mei 2024: 492",
    icon: "unit",
    tone: "green",
  },
  {
    label: "Total Jabatan",
    value: "1.256",
    delta: "7,6%",
    trend: "up",
    compare: "vs Mei 2024: 1.168",
    icon: "jabatan",
    tone: "blue",
  },
  {
    label: "Jabatan Baru",
    value: "156",
    compare: "vs Mei 2024: 142",
    icon: "baru",
    tone: "teal",
  },
  {
    label: "Jabatan Dihapus",
    value: "68",
    compare: "vs Mei 2024: 74",
    icon: "hapus",
    tone: "amber",
  },
];

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

/* ── insight AI ──────────────────────────────────────────── */

export const orgInsightAi = [
  "Span of Control pada level Supervisor di atas benchmark optimal. Pertimbangkan penyesuaian struktur.",
  "18,5% jabatan masih kosong, dengan 22 di antaranya termasuk kategori kritis.",
  "Peningkatan jumlah unit organisasi sebesar 8,2% YOY mendukung ekspansi bisnis yang agresif.",
];
