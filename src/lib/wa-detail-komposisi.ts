/**
 * Data detail komposisi workforce — turunan kartu "Headcount by Organization",
 * "Headcount by Employment Type", dan "Headcount by Job Level" pada Workforce
 * Analytics. Semua total dikunci ke 70.142 pekerja per 31 Mei 2026.
 */

import type { DetailKpi, DetailNote } from "@/components/wa/detail/parts";
import { PALETTE } from "./chart-palette";

/* ══ 1. Headcount by Organization ═════════════════════════════════ */

export interface OrgRow {
  name: string;
  headcount: number;
  pct: number;
  netYtd: number;
  units: number;
  tetap: number;
  pkwt: number;
  bhl: number;
  /** Biaya tenaga kerja YTD (Rp miliar). */
  laborCost: number;
  /** Produktivitas: ton TBS per pekerja per bulan. */
  productivity: number;
  turnover: number;
  span: number;
  color: string;
}

export const orgRows: OrgRow[] = [
  { name: "PTPN IV", headcount: 23512, pct: 33.5, netYtd: 612, units: 24, tetap: 17420, pkwt: 3180, bhl: 2412, laborCost: 1842.6, productivity: 18.4, turnover: 6.2, span: 7.4, color: PALETTE.green },
  { name: "PTPN III", headcount: 17642, pct: 25.1, netYtd: 389, units: 19, tetap: 13260, pkwt: 2210, bhl: 1810, laborCost: 1394.2, productivity: 17.1, turnover: 6.8, span: 7.1, color: PALETTE.blue },
  { name: "PTPN I Regional 1", headcount: 11982, pct: 17.1, netYtd: 224, units: 13, tetap: 8940, pkwt: 1560, bhl: 1224, laborCost: 918.4, productivity: 15.8, turnover: 7.4, span: 6.6, color: PALETTE.amber },
  { name: "PTPN I", headcount: 7654, pct: 10.9, netYtd: 178, units: 9, tetap: 5710, pkwt: 984, bhl: 812, laborCost: 601.3, productivity: 16.2, turnover: 7.9, span: 6.8, color: PALETTE.purple },
  { name: "PTPN IV Regional 3", headcount: 4231, pct: 6.0, netYtd: 142, units: 6, tetap: 3180, pkwt: 542, bhl: 401, laborCost: 342.8, productivity: 19.2, turnover: 6.1, span: 7.9, color: PALETTE.slate },
  { name: "PTPN IV Regional 4", headcount: 2201, pct: 3.1, netYtd: 64, units: 4, tetap: 1684, pkwt: 214, bhl: 198, laborCost: 178.1, productivity: 14.6, turnover: 8.4, span: 6.2, color: "#c3ced9" },
  { name: "Lainnya", headcount: 920, pct: 1.3, netYtd: 32, units: 1, tetap: 752, pkwt: 108, bhl: 34, laborCost: 92.4, productivity: 0, turnover: 5.4, span: 5.8, color: "#dde5ec" },
];

export const orgTotals = orgRows.reduce(
  (a, r) => ({
    headcount: a.headcount + r.headcount,
    netYtd: a.netYtd + r.netYtd,
    units: a.units + r.units,
    laborCost: Number((a.laborCost + r.laborCost).toFixed(1)),
  }),
  { headcount: 0, netYtd: 0, units: 0, laborCost: 0 },
);

/** Tren headcount 12 bulan untuk 4 subholding terbesar. */
export const orgTrend12 = [
  { name: "Jun 25", "PTPN IV": 21180, "PTPN III": 16020, "PTPN I Regional 1": 10940, "PTPN I": 6910 },
  { name: "Jul 25", "PTPN IV": 21390, "PTPN III": 16180, "PTPN I Regional 1": 11020, "PTPN I": 6960 },
  { name: "Agu 25", "PTPN IV": 21560, "PTPN III": 16290, "PTPN I Regional 1": 11080, "PTPN I": 7010 },
  { name: "Sep 25", "PTPN IV": 21810, "PTPN III": 16420, "PTPN I Regional 1": 11180, "PTPN I": 7080 },
  { name: "Okt 25", "PTPN IV": 21980, "PTPN III": 16540, "PTPN I Regional 1": 11240, "PTPN I": 7130 },
  { name: "Nov 25", "PTPN IV": 22280, "PTPN III": 16780, "PTPN I Regional 1": 11380, "PTPN I": 7210 },
  { name: "Des 25", "PTPN IV": 22900, "PTPN III": 17253, "PTPN I Regional 1": 11758, "PTPN I": 7476 },
  { name: "Jan 26", "PTPN IV": 23010, "PTPN III": 17320, "PTPN I Regional 1": 11810, "PTPN I": 7520 },
  { name: "Feb 26", "PTPN IV": 23180, "PTPN III": 17420, "PTPN I Regional 1": 11860, "PTPN I": 7560 },
  { name: "Mar 26", "PTPN IV": 23280, "PTPN III": 17490, "PTPN I Regional 1": 11900, "PTPN I": 7590 },
  { name: "Apr 26", "PTPN IV": 23410, "PTPN III": 17570, "PTPN I Regional 1": 11940, "PTPN I": 7620 },
  { name: "Mei 26", "PTPN IV": 23512, "PTPN III": 17642, "PTPN I Regional 1": 11982, "PTPN I": 7654 },
];

export const ORG_TREND_SERIES = [
  { key: "PTPN IV", color: PALETTE.green },
  { key: "PTPN III", color: PALETTE.blue },
  { key: "PTPN I Regional 1", color: PALETTE.amber },
  { key: "PTPN I", color: PALETTE.purple },
];

export const orgKpi: DetailKpi[] = [
  { label: "Total Headcount", value: "70.142", delta: "+400", trend: "up", tone: "neutral", compare: "vs Apr 2026" },
  { label: "Subholding Terbesar", value: "33,5", suffix: "%", share: "PTPN IV", delta: "+0,2 pp", trend: "up", tone: "amber", compare: "23.512 pekerja" },
  { label: "Konsentrasi (3 Teratas)", value: "75,7", suffix: "%", delta: "+0,4 pp", trend: "up", tone: "amber", compare: "PTPN IV, III, II" },
  { label: "Unit Kerja", value: "76", delta: "+2", trend: "up", tone: "neutral", compare: "2 pabrik baru PTPN IV" },
  { label: "Biaya Tenaga Kerja", prefix: "Rp ", value: "5.369,8", suffix: "M", delta: "+8,2%", trend: "up", tone: "red", compare: "YTD vs 2025 (Rp 4.962 M)" },
  { label: "Net Growth YTD", value: "+1.641", share: "+2,4%", delta: "+1.180", trend: "up", tone: "green", compare: "vs YTD 2025 (+461)" },
];

export const orgNotes: DetailNote[] = [
  {
    title: "Konsentrasi headcount naik",
    detail: "Tiga subholding terbesar memegang 75,7% pekerja (Des 2025: 75,3%) — risiko konsentrasi kapabilitas dan biaya di PTPN IV.",
    tone: "amber",
  },
  {
    title: "Biaya naik lebih cepat dari headcount",
    detail: "Headcount +2,4% YTD sementara biaya tenaga kerja +8,2% — didorong penyesuaian upah minimum dan lembur unit pengolahan.",
    tone: "red",
  },
  {
    title: "PTPN IV Regional 3 paling produktif",
    detail: "19,2 ton TBS per pekerja per bulan dengan turnover terendah kedua (6,1%) — jadikan rujukan model operasi.",
    tone: "green",
  },
];

/* ══ 2. Headcount by Employment Type ══════════════════════════════ */

export interface TypeRow {
  name: string;
  headcount: number;
  pct: number;
  netYtd: number;
  /** Tenure rata-rata (tahun). */
  tenure: number;
  turnover: number;
  /** Biaya per pekerja per bulan (Rp juta). */
  costPerHead: number;
  /** Konversi ke status tetap YTD. */
  konversi: number;
  color: string;
}

export const typeRows: TypeRow[] = [
  { name: "Karyawan Tetap", headcount: 52146, pct: 74.3, netYtd: 906, tenure: 12.4, turnover: 4.1, costPerHead: 8.9, konversi: 0, color: PALETTE.green },
  { name: "Karyawan PKWT", headcount: 8732, pct: 12.4, netYtd: 272, tenure: 2.1, turnover: 14.8, costPerHead: 5.2, konversi: 486, color: PALETTE.blue },
  { name: "Buruh Harian Lepas", headcount: 6891, pct: 9.8, netYtd: 201, tenure: 1.4, turnover: 21.6, costPerHead: 3.8, konversi: 214, color: PALETTE.amber },
  { name: "Magang / Internship", headcount: 1243, pct: 1.8, netYtd: 62, tenure: 0.6, turnover: 0, costPerHead: 2.1, konversi: 118, color: PALETTE.purple },
  { name: "Lainnya", headcount: 1130, pct: 1.6, netYtd: 200, tenure: 3.2, turnover: 9.4, costPerHead: 4.6, konversi: 32, color: PALETTE.slate },
];

/** Komposisi status kerja per subholding (untuk stacked bar). */
export const typeByOrg = orgRows.map((o) => ({
  name: o.name,
  tetap: o.tetap,
  pkwt: o.pkwt,
  bhl: o.bhl,
  lainnya: o.headcount - o.tetap - o.pkwt - o.bhl,
  tidakTetapPct: Number((((o.pkwt + o.bhl) / o.headcount) * 100).toFixed(1)),
}));

export const typeKpi: DetailKpi[] = [
  { label: "Karyawan Tetap", value: "52.146", share: "74,3%", delta: "+906", trend: "up", tone: "neutral", compare: "porsi turun 0,6 pp YTD" },
  { label: "Tenaga Tidak Tetap", value: "15.623", share: "22,3%", delta: "+0,9 pp", trend: "up", tone: "amber", compare: "PKWT + BHL" },
  { label: "PKWT", value: "8.732", share: "12,4%", delta: "+272", trend: "up", tone: "amber", compare: "turnover 14,8%" },
  { label: "Buruh Harian Lepas", value: "6.891", share: "9,8%", delta: "+201", trend: "up", tone: "red", compare: "turnover 21,6%" },
  { label: "Konversi ke Tetap YTD", value: "850", delta: "+310", trend: "up", tone: "green", compare: "486 PKWT · 214 BHL · 118 magang" },
  { label: "Selisih Biaya per Kepala", value: "2,3", suffix: "x", delta: "flat", trend: "flat", tone: "neutral", compare: "tetap Rp 8,9 jt vs BHL Rp 3,8 jt" },
];

export const typeNotes: DetailNote[] = [
  {
    title: "Porsi tidak tetap melewati batas kebijakan",
    detail: "PKWT + BHL 22,3% terhadap batas internal 20% — perlu rencana konversi atau penataan ulang beban musiman.",
    tone: "red",
  },
  {
    title: "Turnover BHL lima kali karyawan tetap",
    detail: "21,6% vs 4,1%. Biaya rekrutmen ulang dan kurva belajar berulang menekan produktivitas unit panen.",
    tone: "amber",
  },
  {
    title: "Jalur konversi mulai berjalan",
    detail: "850 konversi YTD (vs 540 sepanjang 2025) menahan laju kenaikan porsi tidak tetap.",
    tone: "green",
  },
];

/* ══ 3. Headcount by Job Level ════════════════════════════════════ */

export interface LevelRow {
  name: string;
  headcount: number;
  pct: number;
  /** Rentang kendali rata-rata (bawahan langsung). */
  span: number;
  age: number;
  tenure: number;
  female: number;
  /** Biaya rata-rata per bulan (Rp juta). */
  cost: number;
  vacancy: number;
  /** Kesiapan suksesor (%). */
  readiness: number;
  color: string;
}

export const levelRows: LevelRow[] = [
  { name: "Direktur & SVP", headcount: 231, pct: 0.3, span: 4.2, age: 52.4, tenure: 24.1, female: 12.1, cost: 78.4, vacancy: 9, readiness: 41, color: PALETTE.green },
  { name: "VP", headcount: 653, pct: 0.9, span: 5.1, age: 48.6, tenure: 19.8, female: 16.4, cost: 46.2, vacancy: 24, readiness: 46, color: PALETTE.blue },
  { name: "Manager", headcount: 4892, pct: 7.0, span: 6.4, age: 43.2, tenure: 15.2, female: 21.8, cost: 24.6, vacancy: 86, readiness: 54, color: PALETTE.teal },
  { name: "Asisten Manager / Supervisor", headcount: 12453, pct: 17.7, span: 7.8, age: 38.4, tenure: 10.6, female: 25.2, cost: 13.8, vacancy: 142, readiness: 61, color: PALETTE.purple },
  { name: "Staff", headcount: 39128, pct: 55.8, span: 0, age: 35.1, tenure: 8.2, female: 29.4, cost: 7.4, vacancy: 218, readiness: 0, color: PALETTE.blueSoft },
  { name: "Non Staff / Operator", headcount: 12785, pct: 18.3, span: 0, age: 37.8, tenure: 6.4, female: 24.6, cost: 4.6, vacancy: 96, readiness: 0, color: PALETTE.amber },
];

export const levelKpi: DetailKpi[] = [
  { label: "Total Posisi Terisi", value: "70.142", share: "575 vakan", delta: "+400", trend: "up", tone: "neutral", compare: "fill rate 99,2%" },
  { label: "Rasio Manajerial", value: "8,2", suffix: "%", delta: "-0,3 pp", trend: "down", tone: "green", compare: "Manager ke atas (5.776 orang)" },
  { label: "Span of Control", value: "7,1", suffix: "x", delta: "+0,2x", trend: "up", tone: "green", compare: "target grup 7,5x" },
  { label: "Lapis Struktur", value: "6", delta: "flat", trend: "flat", tone: "neutral", compare: "Direktur sampai operator" },
  { label: "Posisi Kritis Vakan", value: "119", share: "> 90 hari", delta: "+18", trend: "up", tone: "red", compare: "Manager ke atas" },
  { label: "Kesiapan Suksesor", value: "48", suffix: "%", delta: "+3 pp", trend: "up", tone: "amber", compare: "rata-rata level manajerial" },
];

export const levelNotes: DetailNote[] = [
  {
    title: "Struktur menyempit di lapis menengah",
    detail: "Rasio Supervisor : Staff 1 : 3,1 — di bawah rujukan agribisnis 1 : 4. Menambah biaya koordinasi tanpa menambah keluaran.",
    tone: "amber",
  },
  {
    title: "Perempuan menipis ke atas",
    detail: "Porsi perempuan turun dari 29,4% di Staff menjadi 12,1% di Direktur & SVP — pipeline promosi perlu ditinjau.",
    tone: "blue",
  },
  {
    title: "Vakansi menumpuk di posisi kritis",
    detail: "119 posisi Manager ke atas kosong lebih dari 90 hari, sejalan dengan kesiapan suksesor yang baru 48%.",
    tone: "red",
  },
];

export const komposisiDefinitions = [
  { term: "Headcount", text: "Pekerja aktif per akhir bulan, termasuk PKWT dan BHL; tidak termasuk vendor." },
  { term: "Span of Control", text: "Rata-rata bawahan langsung per posisi penyelia ke atas." },
  { term: "Biaya Tenaga Kerja", text: "Gaji, tunjangan, lembur, dan imbalan kerja YTD; belum termasuk biaya pelatihan." },
  { term: "Sumber", text: "HRIS konsolidasi 7 subholding, tarikan 01 Jun 2026 pukul 02.00 WIB." },
];
