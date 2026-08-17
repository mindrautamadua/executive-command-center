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
    compare: "vs Q1 2026: 77,8",
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
    compare: "vs Q1 2026: +38",
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
    compare: "vs Q1 2026: 73,1%",
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
    compare: "vs Q1 2026: 30,8%",
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
    compare: "vs Q1 2026: Stabil",
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
    compare: "vs Q1 2026: 77,0%",
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
  { name: "Jan 2026", value: 73.2 },
  { name: "Feb 2026", value: 75.1 },
  { name: "Mar 2026", value: 76.8 },
  { name: "Apr 2026", value: 79.3 },
  { name: "Mei 2026", value: 80.6 },
  { name: "Jun 2026", value: 82.4 },
];

export const trenEngagementTarget = 80;

/* ── eNPS trend ──────────────────────────────────────────── */

/**
 * Pangsa responden (%) — konsisten: enps = promoters − detractors.
 * Detractors disimpan positif; komponen menggambar ke bawah (diverging).
 */
export const enpsTrend = [
  { name: "Jan 2026", promoters: 48, passives: 32, detractors: 20, enps: 28 },
  { name: "Feb 2026", promoters: 50, passives: 31, detractors: 19, enps: 31 },
  { name: "Mar 2026", promoters: 53, passives: 29, detractors: 18, enps: 35 },
  { name: "Apr 2026", promoters: 55, passives: 28, detractors: 17, enps: 38 },
  { name: "Mei 2026", promoters: 57, passives: 28, detractors: 15, enps: 42 },
  { name: "Jun 2026", promoters: 60, passives: 26, detractors: 14, enps: 46 },
];

/* ── engagement per unit organisasi ──────────────────────── */

export interface UnitScore {
  unit: string;
  skor: string;
  bar: number;
  color: string;
}

// Ramp hijau satu-hue sesuai peringkat. Rata-rata tertimbang headcount = 84,2
// (indeks grup = skor survei 4,21/5 × 20); unit terbesar (PTPN IV, PalmCo)
// berada di atas rata-rata sehingga rata-rata sederhana daftar ini lebih rendah.
export const engagementUnit: UnitScore[] = [
  { unit: "PTPN IV", skor: "88,3", bar: 88.3, color: SEQ_GREEN[4] },
  { unit: "PTPN III (Persero)", skor: "85,7", bar: 85.7, color: SEQ_GREEN[4] },
  { unit: "PalmCo", skor: "84,1", bar: 84.1, color: SEQ_GREEN[3] },
  { unit: "PTPN I", skor: "82,9", bar: 82.9, color: SEQ_GREEN[3] },
  { unit: "PTPN IV Regional 3", skor: "81,6", bar: 81.6, color: SEQ_GREEN[3] },
  { unit: "PTPN I Regional 1", skor: "80,5", bar: 80.5, color: SEQ_GREEN[2] },
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
  /** kontribusi relatif terhadap engagement (relative weight analysis) */
  impact: "Very High" | "High" | "Medium";
}

export const faktorKekuatan: FaktorRow[] = [
  { faktor: "Kualitas Hubungan dengan Tim", pct: 85, impact: "Medium" },
  { faktor: "Kepemimpinan Atasan Langsung", pct: 83, impact: "High" },
  { faktor: "Rasa Bangga terhadap Perusahaan", pct: 82, impact: "Medium" },
];

export const faktorPerbaikan: FaktorRow[] = [
  { faktor: "Work-life Balance", pct: 68, impact: "Very High" },
  { faktor: "Peluang Pengembangan Karier", pct: 70, impact: "Very High" },
  { faktor: "Sistem Reward & Recognition", pct: 72, impact: "High" },
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
    compare: "vs Q1 2026",
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
    compare: "vs Q1 2026",
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
    compare: "vs Q1 2026",
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
  { unit: "PTPN IV Regional 3", skor: "80%", bar: 80, color: SEQ_BLUE[3] },
  { unit: "PTPN I Regional 1", skor: "78%", bar: 78, color: SEQ_BLUE[2] },
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
    isi: "Engagement naik +4,6 pts namun tidak merata: Regional 3 tertinggal 8,3 pts di bawah rata-rata grup dengan partisipasi terendah (68%) — pola low engagement + low response adalah sinyal risiko tersembunyi.",
    tone: "amber",
    icon: "warning",
  },
  {
    isi: "Work-life Balance (68) adalah driver berdampak tertinggi (+18%). Komentar negatif didominasi workload & overtime — indikasi tekanan kapasitas workforce, bukan sekadar preferensi.",
    tone: "red",
    icon: "warning",
  },
  {
    isi: "42 tim mengombinasikan low engagement + low manager effectiveness. Coaching manajer bottom-quartile diproyeksikan menaikkan engagement tim +3–5 pts.",
    tone: "blue",
    icon: "info",
  },
  {
    isi: "Engagement <70 berasosiasi dengan turnover 12,8% vs 4,1% pada cluster >85 — estimasi avoidable turnover exposure ±410 karyawan.",
    tone: "teal",
    icon: "trend",
  },
];

/* ── engagement driver model (relative weight analysis) ──── */

export interface DriverImpactRow {
  driver: string;
  skor: number;
  /** kontribusi relatif terhadap varians engagement (%) */
  impactPct: number;
  impact: "Very High" | "High" | "Medium";
  gap: "prioritas" | "jaga" | "pantau";
}

export const driverModel: DriverImpactRow[] = [
  { driver: "Work-life Balance", skor: 68, impactPct: 18, impact: "Very High", gap: "prioritas" },
  { driver: "Pengembangan Karier", skor: 70, impactPct: 15, impact: "Very High", gap: "prioritas" },
  { driver: "Kepemimpinan Atasan Langsung", skor: 83, impactPct: 13, impact: "High", gap: "jaga" },
  { driver: "Reward & Recognition", skor: 72, impactPct: 11, impact: "High", gap: "prioritas" },
  { driver: "Hubungan dengan Tim", skor: 85, impactPct: 9, impact: "Medium", gap: "jaga" },
  { driver: "Rasa Bangga (Purpose)", skor: 82, impactPct: 8, impact: "Medium", gap: "pantau" },
];

/* ── manager intelligence ────────────────────────────────── */

export const managerSummary = [
  { label: "Manager Effectiveness Index", value: "79", sub: "skala 0–100" },
  { label: "Tim Berisiko", value: "42", sub: "low engagement + low mgr effectiveness" },
  { label: "Manajer Perlu Intervensi", value: "68", sub: "bottom-quartile, coaching prioritas" },
  { label: "Gap Top vs Bottom 10%", value: "+27", sub: "pts team engagement" },
] as const;

export interface ManagerCluster {
  cluster: string;
  teamEngagement: number;
  effectiveness: number;
  tone: ChipTone;
  status: string;
}

export const managerClusters: ManagerCluster[] = [
  { cluster: "Top 10%", teamEngagement: 91, effectiveness: 94, tone: "green", status: "Benchmark" },
  { cluster: "Top 25%", teamEngagement: 87, effectiveness: 88, tone: "green", status: "Sehat" },
  { cluster: "Median", teamEngagement: 82, effectiveness: 81, tone: "amber", status: "Stabil" },
  { cluster: "Bottom 25%", teamEngagement: 72, effectiveness: 68, tone: "amber", status: "Coaching" },
  { cluster: "Bottom 10%", teamEngagement: 64, effectiveness: 59, tone: "red", status: "Intervensi" },
];

/* ── engagement → outcome linkage ────────────────────────── */

export interface OutcomeCluster {
  cluster: string;
  range: string;
  populasi: string;
  turnover: string;
  performa: string;
  produktivitas: number;
  tone: ChipTone;
  color: string;
}

export const outcomeClusters: OutcomeCluster[] = [
  {
    cluster: "High Engagement",
    range: "Skor > 85",
    populasi: "34,6%",
    turnover: "4,1%",
    performa: "4,22",
    produktivitas: 108,
    tone: "green",
    color: PALETTE.green,
  },
  {
    cluster: "Moderate",
    range: "Skor 70–85",
    populasi: "49,8%",
    turnover: "7,6%",
    performa: "3,91",
    produktivitas: 100,
    tone: "amber",
    color: PALETTE.amber,
  },
  {
    cluster: "Low Engagement",
    range: "Skor < 70",
    populasi: "15,6%",
    turnover: "12,8%",
    performa: "3,48",
    produktivitas: 91,
    tone: "red",
    color: PALETTE.red,
  },
];

export const outcomeHighlights = [
  { label: "Retention differential", value: "8,7 pts", sub: "turnover low vs high engagement" },
  { label: "Avoidable turnover exposure", value: "±410", sub: "karyawan pada cluster berisiko" },
  { label: "Produktivitas gap", value: "−16%", sub: "cluster <70 vs >85 (indeks)" },
] as const;

/* ── engagement risk matrix (engagement × response) ──────── */

export interface MatrixPoint {
  unit: string;
  /** engagement score (sumbu X) */
  x: number;
  /** response rate % (sumbu Y) */
  y: number;
  kuadran: "reliable-strength" | "quiet-strength" | "reliable-risk" | "hidden-risk";
}

export const matrixThreshold = { engagement: 80, response: 80 };

export const engagementMatrix: MatrixPoint[] = [
  { unit: "PTPN IV", x: 88.3, y: 92, kuadran: "reliable-strength" },
  { unit: "PTPN III", x: 85.7, y: 89, kuadran: "reliable-strength" },
  { unit: "PalmCo", x: 84.1, y: 86, kuadran: "reliable-strength" },
  { unit: "PTPN I", x: 82.9, y: 84, kuadran: "reliable-strength" },
  { unit: "PTPN IV Regional 3", x: 81.6, y: 80, kuadran: "reliable-strength" },
  { unit: "PTPN I Regional 1", x: 80.5, y: 78, kuadran: "quiet-strength" },
  { unit: "Holding & Supp", x: 78.4, y: 76, kuadran: "hidden-risk" },
  { unit: "Regional 1", x: 77.8, y: 74, kuadran: "hidden-risk" },
  { unit: "Regional 2", x: 75.3, y: 72, kuadran: "hidden-risk" },
  { unit: "Regional 3", x: 74.1, y: 68, kuadran: "hidden-risk" },
];

/* ── voice of employee: topic intelligence ───────────────── */

export interface VoiceTopic {
  topik: string;
  share: number;
  delta: string;
  trend: Trend;
  /** naik = memburuk (mention bertambah) untuk topik keluhan */
  tone: ChipTone;
  contoh: string;
}

export const voiceTopics: VoiceTopic[] = [
  {
    topik: "Workload & Overtime",
    share: 28,
    delta: "+24%",
    trend: "up",
    tone: "red",
    contoh: "Workload tinggi, waktu istirahat kurang seimbang",
  },
  {
    topik: "Karier & Mobility",
    share: 22,
    delta: "-8%",
    trend: "down",
    tone: "amber",
    contoh: "Jenjang karier terasa lambat di beberapa unit",
  },
  {
    topik: "Reward & Recognition",
    share: 18,
    delta: "+12%",
    trend: "up",
    tone: "amber",
    contoh: "Apresiasi belum konsisten antar unit",
  },
  {
    topik: "Leadership",
    share: 14,
    delta: "-3%",
    trend: "down",
    tone: "blue",
    contoh: "Atasan mendukung, komunikasi bisa lebih terbuka",
  },
  {
    topik: "Tools & Teknologi",
    share: 10,
    delta: "+5%",
    trend: "up",
    tone: "purple",
    contoh: "Proses administrasi internal masih panjang",
  },
  {
    topik: "Lainnya",
    share: 8,
    delta: "0%",
    trend: "down",
    tone: "slate",
    contoh: "Fasilitas, lingkungan kerja, lain-lain",
  },
];

/* ── diagnosis kapasitas workforce (cross-module) ────────── */

export interface CapacityRow {
  unit: string;
  engagement: number;
  adequacy: string;
  overtime: string;
  absen: string;
  tone: ChipTone;
}

export const capacityDiagnosis: CapacityRow[] = [
  { unit: "Regional 3", engagement: 74.1, adequacy: "82%", overtime: "+18%", absen: "6,2%", tone: "red" },
  { unit: "Regional 2", engagement: 75.3, adequacy: "85%", overtime: "+12%", absen: "5,4%", tone: "amber" },
  { unit: "PTPN IV (baseline)", engagement: 88.3, adequacy: "97%", overtime: "+4%", absen: "2,8%", tone: "green" },
];

export const capacityConclusion =
  "Low engagement di Regional 2–3 berasosiasi dengan workforce adequacy rendah, overtime tinggi, dan absenteeism di atas rata-rata — indikasi kuat tekanan kapasitas workforce, bukan sekadar isu motivasi.";

/* ── engagement action engine ────────────────────────────── */

export interface ActionCard {
  issue: string;
  skor: string;
  severity: "red" | "amber";
  evidence: string;
  affected: string;
  rootCause: string;
  action: string;
  owner: string;
  target: string;
  status: "In Progress" | "Planned" | "Selesai";
  statusTone: ChipTone;
}

export const actionEngine: ActionCard[] = [
  {
    issue: "Work-life Balance",
    skor: "68",
    severity: "red",
    evidence: "28% komentar negatif = workload/overtime; korelasi overtime +18%, absen 6,2% (Regional 3)",
    affected: "±8,4% workforce",
    rootCause: "Tekanan kapasitas workforce",
    action: "Workforce rebalancing + review beban kerja manajer",
    owner: "HC + Operations",
    target: "74 dalam 6 bulan",
    status: "In Progress",
    statusTone: "amber",
  },
  {
    issue: "Pengembangan Karier",
    skor: "70",
    severity: "amber",
    evidence: "Topik karier 22% dari mention; internal mobility rendah pada job family kritis",
    affected: "Job family kritis, tenure 5–10 th",
    rootCause: "Jalur karier & mobility belum memadai",
    action: "Career pathway job family kritis + program internal mobility",
    owner: "HC Talent",
    target: "76 pada Q4 2026",
    status: "Planned",
    statusTone: "blue",
  },
  {
    issue: "Manager Bottom-Quartile",
    skor: "42 tim",
    severity: "amber",
    evidence: "42 tim low engagement + manager effectiveness <70; gap top vs bottom 10% = 27 pts",
    affected: "68 manajer, ±4.800 karyawan",
    rootCause: "Kapabilitas people management belum merata",
    action: "Program coaching manajer bottom-quartile",
    owner: "HC L&D",
    target: "+6 pts team engagement",
    status: "In Progress",
    statusTone: "amber",
  },
];

export const actionExpectedImpact = "+3–5 pts engagement pada populasi prioritas dalam 2 kuartal";

/* ── metodologi & data governance ────────────────────────── */

export const engagementMetodologi = {
  index:
    "Engagement Index 82,4/100 = rata-rata tertimbang 6 dimensi survey (Likert 1–5, dinormalisasi). Highly Engaged 34,6% = proporsi klasifikasi model internal (bukan klasifikasi Gallup).",
  distribusi: [
    { label: "Engaged", pct: 34.6, color: PALETTE.green },
    { label: "Moderately Engaged", pct: 49.8, color: PALETTE.amber },
    { label: "Disengaged", pct: 15.6, color: PALETTE.red },
  ],
  survey: "Survey Q2 2026",
  responden: "n = 78,3% populasi",
  catatan: "Linkage outcome = asosiasi, bukan kausalitas",
} as const;
