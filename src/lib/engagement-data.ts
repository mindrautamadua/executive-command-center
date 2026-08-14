import type { Trend } from "./data";
import { CATEGORICAL, GENERATION, PALETTE, SEQ_BLUE, SEQ_GREEN } from "./chart-palette";
import type { ChipTone } from "@/components/ui/KpiCard";

/* ── KPI strip ───────────────────────────────────────────── */

export interface EngagementKpi {
  label: string;
  value: string;
  delta: string;
  trend: Trend;
  compare: string;
  icon: "score" | "enps" | "response" | "engaged" | "trend" | "satisfaction";
  tone: ChipTone;
  line: string;
  series: number[];
  gauge?: { pct: number; color: string };
}

export const engagementKpi: EngagementKpi[] = [
  {
    label: "Overall Engagement Score",
    value: "82,4",
    delta: "4,6 pts",
    trend: "up",
    compare: "vs Q1 2025: 77,8",
    icon: "score",
    tone: "blue",
    line: PALETTE.blue,
    series: [30, 36, 32, 38, 34, 41, 37, 44, 40, 46, 43, 50, 46, 53, 57],
  },
  {
    label: "eNPS (Net Promoter Score)",
    value: "+46",
    delta: "8 pts",
    trend: "up",
    compare: "vs Q1 2025: +38",
    icon: "enps",
    tone: "green",
    line: PALETTE.green,
    series: [28, 33, 30, 37, 33, 40, 36, 43, 39, 46, 42, 49, 45, 52, 56],
  },
  {
    label: "Response Rate",
    value: "78,3%",
    delta: "5,2%",
    trend: "up",
    compare: "vs Q1 2025: 73,1%",
    icon: "response",
    tone: "purple",
    line: PALETTE.purple,
    series: [32, 38, 31, 42, 35, 44, 37, 46, 40, 49, 43, 52, 47, 54, 58],
  },
  {
    label: "Highly Engaged Employees",
    value: "34,6%",
    delta: "3,8%",
    trend: "up",
    compare: "vs Q1 2025: 30,8%",
    icon: "engaged",
    tone: "amber",
    line: PALETTE.amber,
    series: [31, 36, 33, 40, 35, 43, 38, 45, 41, 48, 44, 51, 47, 53, 57],
  },
  {
    label: "Engagement Trend",
    value: "Positif",
    delta: "Meningkat",
    trend: "up",
    compare: "vs Q1 2025: Stabil",
    icon: "trend",
    tone: "teal",
    line: PALETTE.teal,
    series: [30, 33, 31, 36, 34, 39, 37, 42, 40, 45, 43, 48, 46, 51, 55],
  },
  {
    label: "Satisfaction Index",
    value: "81,1%",
    delta: "4,1%",
    trend: "up",
    compare: "vs Q1 2025: 77,0%",
    icon: "satisfaction",
    tone: "pink",
    line: PALETTE.pink,
    series: [],
    gauge: { pct: 81.1, color: PALETTE.pink },
  },
];

/* ── radar dimensi engagement (Q2 vs kuartal sebelumnya) ─── */

export const dimensiEngagement = [
  { dimensi: "Purpose & Meaning", skor: 85, skorQ1: 80 },
  { dimensi: "People & Teamwork", skor: 84, skorQ1: 81 },
  { dimensi: "Growth & Development", skor: 81, skorQ1: 76 },
  { dimensi: "Recognition & Reward", skor: 78, skorQ1: 74 },
  { dimensi: "Workplace Environment", skor: 82, skorQ1: 78 },
  { dimensi: "Leadership", skor: 86, skorQ1: 82 },
];

export const overallScore = "82,4";

/* ── tren engagement score ───────────────────────────────── */

export const trenEngagement = [
  { name: "Jan 2025", value: 73.2 },
  { name: "Feb 2025", value: 75.1 },
  { name: "Mar 2025", value: 76.8 },
  { name: "Apr 2025", value: 79.3 },
  { name: "Mei 2025", value: 80.6 },
  { name: "Jun 2025", value: 82.4 },
];

export const trenEngagementTarget = 80;

/* ── eNPS trend ──────────────────────────────────────────── */

/**
 * Pangsa responden (%) — konsisten: enps = promoters − detractors.
 * Detractors disimpan positif; komponen menggambar ke bawah (diverging).
 */
export const enpsTrend = [
  { name: "Jan 2025", promoters: 48, passives: 32, detractors: 20, enps: 28 },
  { name: "Feb 2025", promoters: 50, passives: 31, detractors: 19, enps: 31 },
  { name: "Mar 2025", promoters: 53, passives: 29, detractors: 18, enps: 35 },
  { name: "Apr 2025", promoters: 55, passives: 28, detractors: 17, enps: 38 },
  { name: "Mei 2025", promoters: 57, passives: 28, detractors: 15, enps: 42 },
  { name: "Jun 2025", promoters: 60, passives: 26, detractors: 14, enps: 46 },
];

/* ── engagement per unit organisasi ──────────────────────── */

export interface UnitScore {
  unit: string;
  skor: string;
  bar: number;
  color: string;
}

// Ramp hijau satu-hue sesuai peringkat
export const engagementUnit: UnitScore[] = [
  { unit: "PTPN IV", skor: "88,3", bar: 88.3, color: SEQ_GREEN[4] },
  { unit: "PTPN III (Persero)", skor: "85,7", bar: 85.7, color: SEQ_GREEN[4] },
  { unit: "PalmCo", skor: "84,1", bar: 84.1, color: SEQ_GREEN[3] },
  { unit: "PTPN I", skor: "82,9", bar: 82.9, color: SEQ_GREEN[3] },
  { unit: "PTPN V", skor: "81,6", bar: 81.6, color: SEQ_GREEN[3] },
  { unit: "PTPN II", skor: "80,5", bar: 80.5, color: SEQ_GREEN[2] },
  { unit: "Holding & Supporting Co", skor: "78,4", bar: 78.4, color: SEQ_GREEN[2] },
  { unit: "PTPN Regional 1", skor: "77,8", bar: 77.8, color: SEQ_GREEN[2] },
  { unit: "PTPN Regional 2", skor: "75,3", bar: 75.3, color: SEQ_GREEN[1] },
  { unit: "PTPN Regional 3", skor: "74,1", bar: 74.1, color: SEQ_GREEN[1] },
];

export const engagementUnitTarget = 80;

/* ── demografi: skor engagement per kohort ───────────────── */

export const demografiTabs = ["Generasi", "Jabatan", "Masa Kerja", "Lokasi"] as const;
export type DemografiTab = (typeof demografiTabs)[number];

export interface DemografiCohort {
  name: string;
  /** porsi populasi responden (%) */
  porsi: number;
  /** skor engagement kohort */
  skor: number;
  color: string;
}

export const demografiData: Record<DemografiTab, DemografiCohort[]> = {
  Generasi: [
    { name: "Gen Z (1997-2012)", porsi: 29, skor: 83.6, color: GENERATION.genZ },
    { name: "Milenial (1981-1996)", porsi: 37, skor: 84.2, color: GENERATION.millennial },
    { name: "Gen X (1965-1980)", porsi: 23, skor: 80.1, color: GENERATION.genX },
    { name: "Baby Boomer (1946-1964)", porsi: 11, skor: 74.8, color: GENERATION.babyBoomer },
  ],
  Jabatan: [
    { name: "Manajemen Puncak", porsi: 3, skor: 87.4, color: CATEGORICAL[0] },
    { name: "Manajer Menengah", porsi: 12, skor: 84.9, color: CATEGORICAL[1] },
    { name: "Supervisor", porsi: 21, skor: 82.6, color: CATEGORICAL[2] },
    { name: "Staff", porsi: 46, skor: 81.3, color: CATEGORICAL[3] },
    { name: "Operasional", porsi: 18, skor: 79.2, color: CATEGORICAL[4] },
  ],
  "Masa Kerja": [
    { name: "< 2 Tahun", porsi: 18, skor: 84.5, color: CATEGORICAL[0] },
    { name: "2-5 Tahun", porsi: 27, skor: 82.9, color: CATEGORICAL[1] },
    { name: "6-10 Tahun", porsi: 24, skor: 81.4, color: CATEGORICAL[2] },
    { name: "11-20 Tahun", porsi: 21, skor: 80.6, color: CATEGORICAL[3] },
    { name: "> 20 Tahun", porsi: 10, skor: 78.9, color: CATEGORICAL[4] },
  ],
  Lokasi: [
    { name: "Kantor Pusat", porsi: 8, skor: 85.2, color: CATEGORICAL[0] },
    { name: "Sumatera", porsi: 38, skor: 83.1, color: CATEGORICAL[1] },
    { name: "Jawa", porsi: 29, skor: 82.7, color: CATEGORICAL[2] },
    { name: "Kalimantan", porsi: 14, skor: 80.8, color: CATEGORICAL[3] },
    { name: "Sulawesi", porsi: 11, skor: 79.6, color: CATEGORICAL[4] },
  ],
};

/* ── faktor engagement ───────────────────────────────────── */

export interface FaktorRow {
  faktor: string;
  pct: number;
}

export const faktorKekuatan: FaktorRow[] = [
  { faktor: "Kualitas Hubungan dengan Tim", pct: 85 },
  { faktor: "Kepemimpinan Atasan Langsung", pct: 83 },
  { faktor: "Rasa Bangga terhadap Perusahaan", pct: 82 },
];

export const faktorPerbaikan: FaktorRow[] = [
  { faktor: "Work-life Balance", pct: 68 },
  { faktor: "Peluang Pengembangan Karier", pct: 70 },
  { faktor: "Sistem Reward & Recognition", pct: 72 },
];

/* ── sentimen komentar ───────────────────────────────────── */

export interface SentimenTile {
  label: string;
  value: string;
  /** pangsa (%) untuk bar proporsi */
  share: number;
  delta: string;
  trend: Trend;
  compare: string;
  /** kutipan dirotasi otomatis di kartu */
  kutipan: string[];
  icon: "positif" | "netral" | "negatif";
  tone: "green" | "amber" | "red";
  bar: string;
}

export const sentimenKomentar: SentimenTile[] = [
  {
    label: "Sentimen Positif",
    value: "68%",
    share: 68,
    delta: "6%",
    trend: "up",
    compare: "vs Q1 2025",
    kutipan: [
      "Saya bangga menjadi bagian dari perusahaan ini",
      "Atasan saya selalu mendukung pengembangan karier tim",
      "Suasana kerja antar rekan sangat kolaboratif",
    ],
    icon: "positif",
    tone: "green",
    bar: PALETTE.green,
  },
  {
    label: "Netral",
    value: "22%",
    share: 22,
    delta: "1%",
    trend: "down",
    compare: "vs Q1 2025",
    kutipan: [
      "Beberapa hal sudah baik, namun masih bisa ditingkatkan",
      "Fasilitas cukup memadai, komunikasi bisa lebih terbuka",
      "Program pelatihan berjalan, frekuensinya bisa ditambah",
    ],
    icon: "netral",
    tone: "amber",
    bar: PALETTE.amber,
  },
  {
    label: "Sentimen Negatif",
    value: "10%",
    share: 10,
    delta: "5%",
    trend: "down",
    compare: "vs Q1 2025",
    kutipan: [
      "Workload tinggi dan waktu istirahat kurang seimbang",
      "Jenjang karier terasa lambat di beberapa unit",
      "Proses administrasi internal masih terlalu panjang",
    ],
    icon: "negatif",
    tone: "red",
    bar: PALETTE.red,
  },
];

/* ── partisipasi survey per unit ─────────────────────────── */

// Ramp biru satu-hue — pembeda dari kartu skor engagement (hijau)
export const partisipasiSurvey: UnitScore[] = [
  { unit: "PTPN IV", skor: "92%", bar: 92, color: SEQ_BLUE[4] },
  { unit: "PTPN III (Persero)", skor: "89%", bar: 89, color: SEQ_BLUE[4] },
  { unit: "PalmCo", skor: "86%", bar: 86, color: SEQ_BLUE[3] },
  { unit: "PTPN I", skor: "84%", bar: 84, color: SEQ_BLUE[3] },
  { unit: "PTPN V", skor: "80%", bar: 80, color: SEQ_BLUE[3] },
  { unit: "PTPN II", skor: "78%", bar: 78, color: SEQ_BLUE[2] },
  { unit: "Holding & Supporting Co", skor: "76%", bar: 76, color: SEQ_BLUE[2] },
  { unit: "PTPN Regional 1", skor: "74%", bar: 74, color: SEQ_BLUE[2] },
  { unit: "PTPN Regional 2", skor: "72%", bar: 72, color: SEQ_BLUE[1] },
  { unit: "PTPN Regional 3", skor: "68%", bar: 68, color: SEQ_BLUE[1] },
];

export const partisipasiTarget = 80;

/* ── insight AI ──────────────────────────────────────────── */

export interface EngagementInsight {
  isi: string;
  tone: ChipTone;
  icon: "check" | "warning" | "info" | "trend";
}

export const insightEngagement: EngagementInsight[] = [
  {
    isi: "Engagement meningkat 4,6 pts dibandingkan Q1 2025, pertahankan momentum positif ini.",
    tone: "green",
    icon: "trend",
  },
  {
    isi: "Perhatian khusus pada Work-life Balance karena memiliki skor terendah (68%).",
    tone: "amber",
    icon: "warning",
  },
  {
    isi: "Generasi Baby Boomer menunjukkan engagement lebih rendah, berikan program yang lebih relevan untuk mereka.",
    tone: "blue",
    icon: "info",
  },
  {
    isi: "Unit dengan partisipasi survey < 70% perlu dorongan komunikasi internal lebih intensif.",
    tone: "teal",
    icon: "check",
  },
];
