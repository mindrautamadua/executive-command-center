/**
 * Registri driver risiko people & organisasi (All Drivers) — turunan detail
 * dari kartu "Top Risk Drivers" pada People Risk Radar.
 *
 * Satu baris = satu driver (faktor penyebab) yang mendorong satu atau lebih
 * risiko terdaftar. Kontribusi seluruh driver dijumlahkan = 100% dari total
 * eksposur risiko people grup, sehingga enam family driver di kartu ringkas
 * adalah agregasi dari baris-baris di sini.
 */

import { PALETTE } from "./chart-palette";

export type DriverTrendDir = "up" | "down" | "flat";
export type DriverStatus = "Active" | "Mitigating" | "Monitoring" | "Controlled";
export type Controllability = "Tinggi" | "Sedang" | "Rendah";

export type DriverFamily =
  | "Talent & Suksesi"
  | "Kompensasi & Benefit"
  | "Beban Kerja & Kapasitas"
  | "Kompetensi & Kapabilitas"
  | "Proses & Sistem"
  | "Budaya & Engagement";

export interface DriverRecord {
  id: string;
  name: string;
  family: DriverFamily;
  /** Kontribusi terhadap total eksposur risiko people grup (%). */
  pct: number;
  trend: DriverTrendDir;
  /** Perubahan kontribusi vs kuartal lalu, dalam poin persentase. */
  deltaPp: number;
  /** Jumlah risiko terdaftar yang dipicu driver ini. */
  linkedRisks: number;
  /** Berapa di antaranya berlevel Critical. */
  criticalLinked: number;
  /** Unit kerja terdampak (dari 76 unit grup). */
  units: number;
  /** Pekerja terpapar langsung. */
  headcount: number;
  owner: string;
  status: DriverStatus;
  /** Efektivitas kontrol yang berjalan (%). */
  control: number;
  controllability: Controllability;
  /** Indikator dini yang dipantau untuk driver ini. */
  signal: string;
  lastReview: string;
}

/** [no, nama, family, pct, trend, deltaPp, linked, critical, units, headcount, owner, status, control, controllability, signal, review] */
type Row = [
  number,
  string,
  DriverFamily,
  number,
  DriverTrendDir,
  number,
  number,
  number,
  number,
  number,
  string,
  DriverStatus,
  number,
  Controllability,
  string,
  string,
];

const ROWS: Row[] = [
  [1, "Suksesor posisi kritikal belum siap (BOD-2)", "Talent & Suksesi", 11, "up", 1.8, 6, 4, 34, 412, "Group CHRO", "Mitigating", 48, "Sedang", "Ready-now ratio turun 6 bulan berturut", "13 Mei 2026"],
  [2, "Kaderisasi keahlian teknis agronomi terputus", "Talent & Suksesi", 8, "up", 1.2, 5, 3, 41, 968, "Dir. Produksi", "Mitigating", 44, "Sedang", "Usia rata-rata ahli agronomi 51,3 tahun", "11 Mei 2026"],
  [3, "Vakansi posisi kritikal di atas 90 hari", "Talent & Suksesi", 5, "up", 0.9, 4, 2, 27, 186, "Group CHRO", "Active", 39, "Tinggi", "27 posisi kritikal vakan >90 hari", "13 Mei 2026"],
  [4, "Mobilitas internal antar regional rendah", "Talent & Suksesi", 4, "flat", 0.1, 3, 0, 52, 1340, "Group CHRO", "Monitoring", 57, "Tinggi", "Internal fill rate 31% vs target 45%", "28 Apr 2026"],

  [5, "Gap pay equity antar regional", "Kompensasi & Benefit", 8, "up", 1.4, 5, 3, 46, 2870, "Group CHRO", "Mitigating", 41, "Tinggi", "Spread gaji jabatan setara 18,6%", "10 Mei 2026"],
  [6, "Struktur gaji tertinggal pasar agribisnis", "Kompensasi & Benefit", 7, "up", 1.1, 4, 2, 61, 5240, "Group CHRO", "Active", 36, "Sedang", "Compa-ratio P50 pasar 0,88", "10 Mei 2026"],
  [7, "Beban pensiun & benefit jangka panjang naik", "Kompensasi & Benefit", 4, "up", 0.7, 3, 1, 76, 8120, "Group CFO", "Monitoring", 52, "Rendah", "Kewajiban imbalan kerja +9,4% YoY", "04 Mei 2026"],
  [8, "Skema insentif belum terhubung kinerja unit", "Kompensasi & Benefit", 3, "flat", 0.0, 3, 0, 58, 3410, "Group CHRO", "Active", 46, "Tinggi", "Korelasi insentif–skor kinerja 0,21", "09 Mei 2026"],

  [9, "Span of control tidak seimbang di fungsi pendukung", "Beban Kerja & Kapasitas", 6, "flat", 0.2, 4, 0, 39, 1180, "Group CHRO", "Active", 55, "Tinggi", "18 unit dengan span <4 bawahan", "05 Mei 2026"],
  [10, "Lembur berlebih di unit pengolahan", "Beban Kerja & Kapasitas", 5, "up", 0.8, 4, 1, 22, 2260, "Dir. Operasi", "Mitigating", 49, "Tinggi", "Rasio lembur 14,2% dari jam normal", "09 Mei 2026"],
  [11, "Absensi di atas ambang toleransi", "Beban Kerja & Kapasitas", 4, "up", 0.6, 3, 0, 6, 940, "Dir. Operasi", "Monitoring", 58, "Sedang", "Absensi 6 unit >5,5% (batas 4%)", "05 Mei 2026"],
  [12, "Penjadwalan shift panen belum optimal", "Beban Kerja & Kapasitas", 3, "down", -0.4, 2, 0, 19, 1620, "Dir. Operasi", "Mitigating", 63, "Tinggi", "Utilisasi tenaga panen 78%", "29 Apr 2026"],

  [13, "Kesenjangan kapabilitas digital", "Kompetensi & Kapabilitas", 6, "up", 0.9, 4, 1, 63, 3980, "Group CIO", "Mitigating", 43, "Sedang", "Digital proficiency index 2,4 dari 5", "11 Mei 2026"],
  [14, "Kompetensi engineering pabrik kurang", "Kompetensi & Kapabilitas", 5, "up", 0.7, 3, 2, 24, 610, "Dir. Operasi", "Active", 38, "Sedang", "Rasio engineer bersertifikat 0,6 per pabrik", "11 Mei 2026"],
  [15, "Investasi pembelajaran belum jadi kapabilitas", "Kompetensi & Kapabilitas", 4, "flat", 0.1, 3, 0, 68, 6350, "Group CHRO", "Monitoring", 51, "Tinggi", "Learning transfer rate 34%", "07 Mei 2026"],

  [16, "Kualitas data HRIS di bawah ambang assurance", "Proses & Sistem", 4, "down", -0.5, 3, 0, 76, 0, "Group CIO", "Mitigating", 66, "Tinggi", "Data quality score 91,2% (target 97%)", "07 Mei 2026"],
  [17, "Proses payroll & administrasi masih manual", "Proses & Sistem", 3, "down", -0.3, 2, 0, 44, 0, "Group CFO", "Mitigating", 69, "Tinggi", "Error rate payroll 0,42%", "30 Apr 2026"],
  [18, "Integrasi sistem HR–operasi lemah", "Proses & Sistem", 3, "down", -0.2, 2, 0, 51, 0, "Group CIO", "Monitoring", 61, "Sedang", "3 dari 7 antarmuka belum otomatis", "04 Mei 2026"],

  [19, "Engagement pekerja lapangan menurun", "Budaya & Engagement", 3, "down", -0.4, 3, 0, 47, 7120, "Group CHRO", "Mitigating", 59, "Sedang", "Engagement score 3,4 dari 5 (-0,2)", "08 Mei 2026"],
  [20, "Integrasi budaya pasca restrukturisasi belum tuntas", "Budaya & Engagement", 2, "down", -0.3, 2, 0, 33, 2480, "Group CHRO", "Mitigating", 62, "Sedang", "Culture alignment index 68%", "03 Mei 2026"],
  [21, "Hubungan industrial & antrean grievance", "Budaya & Engagement", 2, "flat", 0.0, 3, 0, 29, 1750, "Group IR", "Monitoring", 64, "Tinggi", "Backlog grievance 41 kasus >30 hari", "02 Mei 2026"],
];

export const allDrivers: DriverRecord[] = ROWS.map(
  ([
    no,
    name,
    family,
    pct,
    trend,
    deltaPp,
    linkedRisks,
    criticalLinked,
    units,
    headcount,
    owner,
    status,
    control,
    controllability,
    signal,
    lastReview,
  ]) => ({
    id: `DRV-2026-${String(no).padStart(3, "0")}`,
    name,
    family,
    pct,
    trend,
    deltaPp,
    linkedRisks,
    criticalLinked,
    units,
    headcount,
    owner,
    status,
    control,
    controllability,
    signal,
    lastReview,
  }),
);

export const DRIVER_FAMILIES: DriverFamily[] = [
  "Talent & Suksesi",
  "Kompensasi & Benefit",
  "Beban Kerja & Kapasitas",
  "Kompetensi & Kapabilitas",
  "Proses & Sistem",
  "Budaya & Engagement",
];

export const DRIVER_STATUSES: DriverStatus[] = [
  "Active",
  "Mitigating",
  "Monitoring",
  "Controlled",
];

export const CONTROLLABILITY: Controllability[] = ["Tinggi", "Sedang", "Rendah"];

export const driverOwners = [...new Set(allDrivers.map((d) => d.owner))].sort();

/** Warna kanonik per family — dipakai donut, pareto, dan tren agar konsisten. */
export const FAMILY_COLOR: Record<DriverFamily, string> = {
  "Talent & Suksesi": PALETTE.red,
  "Kompensasi & Benefit": "#f97316",
  "Beban Kerja & Kapasitas": PALETTE.amber,
  "Kompetensi & Kapabilitas": PALETTE.blue,
  "Proses & Sistem": PALETTE.teal,
  "Budaya & Engagement": PALETTE.green,
};

/* ── Agregat ──────────────────────────────────────────────────────── */

export const driversByFamily = DRIVER_FAMILIES.map((family) => {
  const rows = allDrivers.filter((d) => d.family === family);
  return {
    family,
    count: rows.length,
    pct: rows.reduce((s, d) => s + d.pct, 0),
    worsening: rows.filter((d) => d.trend === "up").length,
    control: Math.round(rows.reduce((s, d) => s + d.control, 0) / rows.length),
  };
});

const worsening = allDrivers.filter((d) => d.trend === "up");
const improving = allDrivers.filter((d) => d.trend === "down");

export const avgControl = Math.round(
  allDrivers.reduce((s, d) => s + d.control, 0) / allDrivers.length,
);

export const top5Share = [...allDrivers]
  .sort((a, b) => b.pct - a.pct)
  .slice(0, 5)
  .reduce((s, d) => s + d.pct, 0);

export interface DriverKpi {
  label: string;
  value: string;
  suffix?: string;
  share?: string;
  delta: string;
  trend: "up" | "down" | "flat";
  tone: "neutral" | "red" | "amber" | "green";
  compare: string;
}

export const driversKpi: DriverKpi[] = [
  {
    label: "Total Driver",
    value: String(allDrivers.length),
    delta: "+2",
    trend: "up",
    tone: "neutral",
    compare: "vs Q1 2026 (19 driver)",
  },
  {
    label: "Driver Dominan (≥5%)",
    value: "8",
    share: "38%",
    delta: "+1",
    trend: "up",
    tone: "red",
    compare: "kontribusi gabungan 54%",
  },
  {
    label: "Driver Memburuk",
    value: String(worsening.length),
    share: `${Math.round((worsening.length / allDrivers.length) * 100)}%`,
    delta: "+3",
    trend: "up",
    tone: "red",
    compare: "tren naik 2 kuartal terakhir",
  },
  {
    label: "Driver Membaik",
    value: String(improving.length),
    share: `${Math.round((improving.length / allDrivers.length) * 100)}%`,
    delta: "+2",
    trend: "down",
    tone: "green",
    compare: "mitigasi mulai berdampak",
  },
  {
    label: "Kontribusi 5 Teratas",
    value: String(top5Share),
    suffix: "%",
    delta: "+4,1 pp",
    trend: "up",
    tone: "amber",
    compare: "konsentrasi driver meningkat",
  },
  {
    label: "Efektivitas Kontrol",
    value: String(avgControl),
    suffix: "%",
    delta: "+3 pp",
    trend: "up",
    tone: "green",
    compare: "target grup 70%",
  },
];

/** Pareto: driver diurutkan kontribusi + kumulatif untuk garis 80/20. */
export const driverPareto = [...allDrivers]
  .sort((a, b) => b.pct - a.pct)
  .slice(0, 10)
  .map((d, i, arr) => ({
    name: d.name,
    short: d.name.length > 22 ? `${d.name.slice(0, 21)}…` : d.name,
    pct: d.pct,
    family: d.family,
    cumulative: arr.slice(0, i + 1).reduce((s, x) => s + x.pct, 0),
  }));

/** Pergerakan kontribusi per family selama 6 bulan (poin persentase). */
export const driverFamilyTrend = [
  {
    name: "Des 2025",
    "Talent & Suksesi": 23,
    "Kompensasi & Benefit": 18,
    "Beban Kerja & Kapasitas": 19,
    "Kompetensi & Kapabilitas": 14,
    "Proses & Sistem": 15,
    "Budaya & Engagement": 11,
  },
  {
    name: "Jan 2026",
    "Talent & Suksesi": 24,
    "Kompensasi & Benefit": 19,
    "Beban Kerja & Kapasitas": 19,
    "Kompetensi & Kapabilitas": 14,
    "Proses & Sistem": 14,
    "Budaya & Engagement": 10,
  },
  {
    name: "Feb 2026",
    "Talent & Suksesi": 25,
    "Kompensasi & Benefit": 20,
    "Beban Kerja & Kapasitas": 18,
    "Kompetensi & Kapabilitas": 14,
    "Proses & Sistem": 13,
    "Budaya & Engagement": 10,
  },
  {
    name: "Mar 2026",
    "Talent & Suksesi": 26,
    "Kompensasi & Benefit": 20,
    "Beban Kerja & Kapasitas": 18,
    "Kompetensi & Kapabilitas": 15,
    "Proses & Sistem": 12,
    "Budaya & Engagement": 9,
  },
  {
    name: "Apr 2026",
    "Talent & Suksesi": 27,
    "Kompensasi & Benefit": 21,
    "Beban Kerja & Kapasitas": 18,
    "Kompetensi & Kapabilitas": 15,
    "Proses & Sistem": 11,
    "Budaya & Engagement": 8,
  },
  {
    name: "Mei 2026",
    "Talent & Suksesi": 28,
    "Kompensasi & Benefit": 22,
    "Beban Kerja & Kapasitas": 18,
    "Kompetensi & Kapabilitas": 15,
    "Proses & Sistem": 10,
    "Budaya & Engagement": 7,
  },
];

/** Titik matriks kontrol: sumbu X efektivitas kontrol, sumbu Y kontribusi. */
export const driverControlMatrix = allDrivers.map((d) => ({
  x: d.control,
  y: d.pct,
  z: d.linkedRisks,
  name: d.name,
  family: d.family,
}));

/** Aksi prioritas yang disarankan untuk driver kontribusi tertinggi. */
export const driverActions = [
  {
    driver: "Suksesor posisi kritikal belum siap (BOD-2)",
    action: "Percepat 24 kandidat akselerasi + assessment center Juli 2026",
    owner: "Group CHRO",
    due: "31 Jul 2026",
    impact: "-3,2 pp",
  },
  {
    driver: "Gap pay equity antar regional",
    action: "Eksekusi tahap 1 remedy pay equity untuk 6 regional prioritas",
    owner: "Group CHRO",
    due: "30 Jun 2026",
    impact: "-2,4 pp",
  },
  {
    driver: "Kaderisasi keahlian teknis agronomi terputus",
    action: "Aktifkan program knowledge transfer 41 ahli senior ke 96 kader",
    owner: "Dir. Produksi",
    due: "30 Sep 2026",
    impact: "-2,1 pp",
  },
  {
    driver: "Lembur berlebih di unit pengolahan",
    action: "Rasionalisasi shift 22 unit pengolahan + tambah 84 operator",
    owner: "Dir. Operasi",
    due: "31 Agu 2026",
    impact: "-1,6 pp",
  },
];
