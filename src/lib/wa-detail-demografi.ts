/**
 * Data detail demografi workforce — turunan kartu "Headcount by Generation",
 * "Headcount by Age Group", dan "Diversity Snapshot" pada Workforce Analytics.
 * Total tiap potongan dikunci ke 70.142 pekerja per 31 Mei 2026.
 */

import type { DetailKpi, DetailNote } from "@/components/wa/detail/parts";
import { PALETTE, SEQ_GREEN } from "./chart-palette";

/* ══ 1. Generasi ══════════════════════════════════════════════════ */

export interface GenerationRow {
  name: string;
  short: string;
  headcount: number;
  pct: number;
  age: number;
  tenure: number;
  turnover: number;
  /** Porsi yang memegang posisi Supervisor ke atas (%). */
  managerial: number;
  engagement: number;
  promosiYtd: number;
  /** Indeks kemahiran digital, skala 1-5. */
  digital: number;
  color: string;
}

export const generationRows: GenerationRow[] = [
  { name: "Gen Z (1997-2012)", short: "Gen Z", headcount: 8912, pct: 12.7, age: 25.8, tenure: 2.1, turnover: 12.4, managerial: 1.2, engagement: 3.6, promosiYtd: 86, digital: 4.1, color: PALETTE.green },
  { name: "Milenial (1981-1996)", short: "Milenial", headcount: 31245, pct: 44.5, age: 34.6, tenure: 8.4, turnover: 7.6, managerial: 18.4, engagement: 3.4, promosiYtd: 942, digital: 3.4, color: PALETTE.blue },
  { name: "Gen X (1965-1980)", short: "Gen X", headcount: 24118, pct: 34.4, age: 48.2, tenure: 19.6, turnover: 4.2, managerial: 34.6, engagement: 3.8, promosiYtd: 486, digital: 2.6, color: PALETTE.amber },
  { name: "Baby Boomers (1946-1964)", short: "Boomers", headcount: 5867, pct: 8.4, age: 58.4, tenure: 29.2, turnover: 2.1, managerial: 41.2, engagement: 4.0, promosiYtd: 42, digital: 2.1, color: PALETTE.purple },
];

/** Pergeseran porsi generasi 5 tahun (dalam %). */
export const generationShift = [
  { name: "2022", "Gen Z": 4.1, Milenial: 39.8, "Gen X": 41.2, Boomers: 14.9 },
  { name: "2023", "Gen Z": 6.4, Milenial: 41.2, "Gen X": 39.6, Boomers: 12.8 },
  { name: "2024", "Gen Z": 8.6, Milenial: 42.4, "Gen X": 37.8, Boomers: 11.2 },
  { name: "2025", "Gen Z": 10.8, Milenial: 43.6, "Gen X": 35.9, Boomers: 9.7 },
  { name: "2026", "Gen Z": 12.7, Milenial: 44.5, "Gen X": 34.4, Boomers: 8.4 },
];

export const generationKpi: DetailKpi[] = [
  { label: "Generasi Dominan", value: "44,5", suffix: "%", share: "Milenial", delta: "+0,9 pp", trend: "up", tone: "neutral", compare: "31.245 pekerja" },
  { label: "Gen Z", value: "12,7", suffix: "%", delta: "+1,9 pp", trend: "up", tone: "green", compare: "8.912 pekerja, tumbuh tercepat" },
  { label: "Gen X + Boomers", value: "42,8", suffix: "%", delta: "-2,8 pp", trend: "down", tone: "amber", compare: "29.985 pekerja mendekati pensiun" },
  { label: "Usia Rata-rata Grup", value: "38,4", suffix: "thn", delta: "-0,6 thn", trend: "down", tone: "green", compare: "2025: 39,0 tahun" },
  { label: "Turnover Gen Z", value: "12,4", suffix: "%", delta: "+1,4 pp", trend: "up", tone: "red", compare: "3x turnover Gen X" },
  { label: "Posisi Manajerial Gen X", value: "34,6", suffix: "%", delta: "-1,1 pp", trend: "down", tone: "amber", compare: "regenerasi kepemimpinan berjalan" },
];

export const generationNotes: DetailNote[] = [
  {
    title: "Peralihan generasi berlangsung cepat",
    detail: "Porsi Gen X + Boomers turun 8,9 pp dalam 4 tahun. Transfer pengetahuan teknis harus mengejar laju ini.",
    tone: "amber",
  },
  {
    title: "Gen Z masuk cepat, keluar cepat",
    detail: "Turnover 12,4% dengan tenure rata-rata 2,1 tahun — biaya rekrutmen berulang dan kurva belajar tidak tertutup.",
    tone: "red",
  },
  {
    title: "Kesenjangan kemahiran digital antar generasi",
    detail: "Indeks digital Gen Z 4,1 vs Boomers 2,1. Program digital upskilling perlu dipisah per kelompok, bukan seragam.",
    tone: "blue",
  },
];

/* ══ 2. Kelompok Usia ═════════════════════════════════════════════ */

export interface AgeRow {
  band: string;
  laki: number;
  perempuan: number;
  total: number;
  pct: number;
  tenure: number;
  /** Porsi Supervisor ke atas (%). */
  managerial: number;
  color: string;
}

const AGE_INPUT: [string, number, number, number, number][] = [
  ["< 25", 3142, 1179, 1.2, 0.4],
  ["25 - 30", 9284, 3561, 2.6, 3.1],
  ["31 - 35", 11486, 4246, 6.4, 9.8],
  ["36 - 40", 9812, 3609, 11.2, 18.4],
  ["41 - 45", 8134, 2968, 16.8, 26.2],
  ["46 - 50", 6042, 2172, 22.4, 33.6],
  ["> 50", 3376, 1131, 28.6, 38.4],
];

export const ageRows: AgeRow[] = AGE_INPUT.map(([band, laki, perempuan, tenure, managerial], i) => ({
  band,
  laki,
  perempuan,
  total: laki + perempuan,
  pct: Number((((laki + perempuan) / 70142) * 100).toFixed(1)),
  tenure,
  managerial,
  color: SEQ_GREEN[Math.min(4, 1 + Math.abs(3 - i))],
}));

/** Piramida usia: laki-laki negatif agar tampil ke kiri. */
export const agePyramid = [...ageRows]
  .reverse()
  .map((r) => ({ band: r.band, laki: -r.laki, perempuan: r.perempuan }));

/** Proyeksi pensiun (usia pensiun 56 tahun) enam tahun ke depan. */
export const retirementForecast = [
  { name: "2026", jumlah: 682, kritis: 148 },
  { name: "2027", jumlah: 814, kritis: 186 },
  { name: "2028", jumlah: 962, kritis: 214 },
  { name: "2029", jumlah: 1246, kritis: 312 },
  { name: "2030", jumlah: 1418, kritis: 358 },
  { name: "2031", jumlah: 1372, kritis: 341 },
];

export const ageKpi: DetailKpi[] = [
  { label: "Usia Rata-rata", value: "38,4", suffix: "thn", delta: "-0,6 thn", trend: "down", tone: "neutral", compare: "median 37,2 tahun" },
  { label: "Usia > 45 Tahun", value: "18,7", suffix: "%", share: "13.121", delta: "+0,9 pp", trend: "up", tone: "amber", compare: "vs Des 2025" },
  { label: "Usia < 30 Tahun", value: "24,5", suffix: "%", share: "17.166", delta: "+2,1 pp", trend: "up", tone: "green", compare: "regenerasi berjalan" },
  { label: "Pensiun 2026 – 2031", value: "6.494", share: "9,3%", delta: "+412", trend: "up", tone: "red", compare: "1.559 di posisi kritis" },
  { label: "Puncak Pensiun", value: "2030", share: "1.418 orang", delta: "flat", trend: "flat", tone: "amber", compare: "beban tertinggi teknis PKS" },
  { label: "Rasio Muda : Senior", value: "1,31", suffix: "x", delta: "+0,14x", trend: "up", tone: "green", compare: "< 30 thn dibanding > 45 thn" },
];

export const ageNotes: DetailNote[] = [
  {
    title: "Gelombang pensiun memuncak 2029 – 2031",
    detail: "4.036 pekerja pensiun dalam tiga tahun tersebut, 1.011 di antaranya memegang posisi kritis teknis.",
    tone: "red",
  },
  {
    title: "Kelompok 31 – 35 tahun jadi tulang punggung",
    detail: "15.732 pekerja (22,4%) berada di rentang ini — kelompok utama penerima program percepatan kepemimpinan.",
    tone: "blue",
  },
  {
    title: "Piramida melebar di tengah",
    detail: "Bentuk ini sehat untuk 5 tahun ke depan, tetapi menyempit di bawah 25 tahun (6,2%) sehingga kaderisasi awal perlu ditambah.",
    tone: "amber",
  },
];

/* ══ 3. Diversity ═════════════════════════════════════════════════ */

export interface DiversityMetric {
  label: string;
  value: number;
  unit: string;
  headcount: number;
  target: number;
  deltaPts: number;
  color: string;
}

export const diversityMetrics: DiversityMetric[] = [
  { label: "Perempuan", value: 27.0, unit: "%", headcount: 18066, target: 30, deltaPts: 1.2, color: PALETTE.purple },
  { label: "Perempuan di Posisi Manajerial", value: 19.4, unit: "%", headcount: 1121, target: 25, deltaPts: 1.6, color: PALETTE.pink },
  { label: "Disabilitas", value: 1.25, unit: "%", headcount: 876, target: 2, deltaPts: 0.08, color: PALETTE.blue },
  { label: "Usia > 45 Tahun", value: 18.7, unit: "%", headcount: 13121, target: 0, deltaPts: 0.9, color: PALETTE.green },
  { label: "Tenure > 10 Tahun", value: 32.4, unit: "%", headcount: 22718, target: 0, deltaPts: 1.1, color: PALETTE.teal },
];

/** Tren 12 bulan empat metrik keragaman utama (%). */
export const diversityTrend = [
  { name: "Jun 25", perempuan: 25.4, manajerial: 17.2, disabilitas: 1.1, tenure: 31.0 },
  { name: "Agu 25", perempuan: 25.8, manajerial: 17.6, disabilitas: 1.12, tenure: 31.3 },
  { name: "Okt 25", perempuan: 26.1, manajerial: 18.1, disabilitas: 1.15, tenure: 31.6 },
  { name: "Des 25", perempuan: 25.8, manajerial: 17.8, disabilitas: 1.17, tenure: 31.3 },
  { name: "Feb 26", perempuan: 26.4, manajerial: 18.6, disabilitas: 1.2, tenure: 31.9 },
  { name: "Apr 26", perempuan: 26.8, manajerial: 19.1, disabilitas: 1.23, tenure: 32.2 },
  { name: "Mei 26", perempuan: 27.0, manajerial: 19.4, disabilitas: 1.25, tenure: 32.4 },
];

/** Keragaman per subholding. */
export interface DiversityOrgRow {
  name: string;
  perempuan: number;
  manajerial: number;
  disabilitas: number;
  usia45: number;
  headcount: number;
}

export const diversityByOrg: DiversityOrgRow[] = [
  { name: "PTPN IV", perempuan: 28.4, manajerial: 21.2, disabilitas: 1.34, usia45: 17.8, headcount: 23512 },
  { name: "PTPN III", perempuan: 26.8, manajerial: 19.6, disabilitas: 1.28, usia45: 18.4, headcount: 17642 },
  { name: "PTPN I Regional 1", perempuan: 25.6, manajerial: 17.4, disabilitas: 1.12, usia45: 20.1, headcount: 11982 },
  { name: "PTPN I", perempuan: 26.2, manajerial: 18.2, disabilitas: 1.18, usia45: 19.4, headcount: 7654 },
  { name: "PTPN IV Regional 3", perempuan: 28.9, manajerial: 22.4, disabilitas: 1.42, usia45: 16.2, headcount: 4231 },
  { name: "PTPN IV Regional 4", perempuan: 24.1, manajerial: 15.8, disabilitas: 0.98, usia45: 21.6, headcount: 2201 },
  { name: "Lainnya", perempuan: 38.6, manajerial: 29.4, disabilitas: 1.62, usia45: 15.4, headcount: 920 },
];

export const diversityKpi: DetailKpi[] = [
  { label: "Perempuan", value: "27,0", suffix: "%", share: "18.066", delta: "+1,2 pts", trend: "up", tone: "neutral", compare: "target 2027: 30%" },
  { label: "Perempuan Manajerial", value: "19,4", suffix: "%", share: "1.121", delta: "+1,6 pts", trend: "up", tone: "amber", compare: "target 2027: 25%" },
  { label: "Disabilitas", value: "1,25", suffix: "%", share: "876", delta: "+0,08 pts", trend: "up", tone: "red", compare: "kewajiban regulasi 2%" },
  { label: "Tenure > 10 Tahun", value: "32,4", suffix: "%", share: "22.718", delta: "+1,1 pts", trend: "up", tone: "green", compare: "stabilitas pengetahuan terjaga" },
  { label: "Entitas Capai Target", value: "0", share: "dari 7", delta: "flat", trend: "flat", tone: "red", compare: "belum ada yang tembus 30% perempuan" },
  { label: "Selisih ke Target Gender", value: "-3,0", suffix: "pp", delta: "+1,2 pts", trend: "up", tone: "amber", compare: "perlu ±2.100 rekrutmen perempuan" },
];

export const diversityNotes: DetailNote[] = [
  {
    title: "Kepatuhan disabilitas masih jauh",
    detail: "1,25% terhadap kewajiban 2% — kekurangan setara 527 pekerja. Perlu jalur rekrutmen khusus dan penyesuaian tempat kerja.",
    tone: "red",
  },
  {
    title: "Perempuan manajerial naik lebih cepat dari total",
    detail: "+1,6 pts vs +1,2 pts. Program percepatan kepemimpinan perempuan mulai terlihat hasilnya di lapis Manager.",
    tone: "green",
  },
  {
    title: "Sebaran antar entitas timpang",
    detail: "PTPN IV Regional 3 28,9% perempuan berbanding PTPN IV Regional 4 24,1%. Praktik rekrutmen PTPN IV Regional 3 layak dijadikan rujukan grup.",
    tone: "blue",
  },
];

export const demografiDefinitions = [
  { term: "Generasi", text: "Pengelompokan berdasarkan tahun lahir: Gen Z 1997-2012, Milenial 1981-1996, Gen X 1965-1980, Boomers 1946-1964." },
  { term: "Proyeksi Pensiun", text: "Pekerja yang mencapai usia 56 tahun pada tahun berjalan, sesuai perjanjian kerja bersama." },
  { term: "Posisi Manajerial", text: "Jabatan Supervisor ke atas yang memiliki bawahan langsung." },
  { term: "Sumber", text: "HRIS konsolidasi 7 subholding, tarikan 01 Jun 2026 pukul 02.00 WIB." },
];
