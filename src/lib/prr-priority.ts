/**
 * Antrean prioritas risiko people (Risk Priority Queue) — turunan detail dari
 * kartu "Top 5 Risks Requiring Attention" pada People Risk Radar.
 *
 * Beda dengan registri All Risks yang memotret seluruh populasi risiko, daftar
 * ini hanya memuat risiko yang sudah masuk antrean tindakan: punya skor
 * prioritas, pemilik aksi, tenggat, status SLA, dan jalur eskalasi.
 *
 * Skor prioritas = gabungan dampak finansial, jumlah pekerja terdampak,
 * kecepatan risiko (velocity), dan kelemahan kontrol. Skala 0-100.
 */

export type PriorityLevel = "Critical" | "High" | "Medium";
export type PriorityVelocity = "Cepat" | "Sedang" | "Lambat";
export type SlaStatus = "On Track" | "At Risk" | "Overdue";
export type Escalation = "BOD" | "Komite Risiko" | "Direktorat";
export type PriorityTrend = "up" | "down" | "flat";

export type PriorityCategory =
  | "Talent Management"
  | "People & Culture"
  | "Operational"
  | "Financial"
  | "Compliance"
  | "Technology & Data";

export interface PriorityRisk {
  rank: number;
  id: string;
  name: string;
  desc: string;
  category: PriorityCategory;
  level: PriorityLevel;
  /** Skor prioritas 0-100. */
  score: number;
  /** Perubahan skor vs bulan lalu. */
  deltaScore: number;
  trend: PriorityTrend;
  /** Potensi dampak finansial (miliar rupiah). */
  impactRp: number;
  /** Pekerja terdampak. */
  impacted: number;
  unitCount: number;
  units: string;
  velocity: PriorityVelocity;
  /** Perkiraan waktu sampai dampak terealisasi (minggu). */
  weeksToImpact: number;
  /** Progres mitigasi (%). */
  mitigation: number;
  openActions: number;
  totalActions: number;
  owner: string;
  pic: string;
  due: string;
  sla: SlaStatus;
  escalation: Escalation;
  lastUpdate: string;
}

/** [rank, riskNo, nama, desc, kategori, level, skor, delta, trend, dampakRp, terdampak, unit, unitLabel, velocity, minggu, mitigasi, aksiOpen, aksiTotal, owner, pic, due, sla, eskalasi, update] */
type Row = [
  number,
  number,
  string,
  string,
  PriorityCategory,
  PriorityLevel,
  number,
  number,
  PriorityTrend,
  number,
  number,
  number,
  string,
  PriorityVelocity,
  number,
  number,
  number,
  number,
  string,
  string,
  string,
  SlaStatus,
  Escalation,
  string,
];

const ROWS: Row[] = [
  [1, 11, "Critical Position Vacancy", "24 posisi kritis kosong > 3 bulan", "Talent Management", "Critical", 92, 6, "up", 48.2, 1245, 2, "PTPN IV, PTPN IV Regional 3", "Cepat", 6, 42, 5, 9, "Group CHRO", "Dir. SDM PTPN IV", "30 Jun 2026", "At Risk", "BOD", "13 Mei 2026"],
  [2, 3, "Turnover Risk", "Turnover karyawan kunci meningkat 18% YoY", "People & Culture", "Critical", 88, 5, "up", 32.6, 3678, 3, "PTPN III, PTPN IV, PTPN IV Regional 3", "Cepat", 8, 38, 6, 10, "Group CHRO", "SVP Talent Management", "31 Jul 2026", "At Risk", "BOD", "12 Mei 2026"],
  [3, 4, "Critical Skill Gap", "Kesenjangan skill kritis area digital & agronomi", "Talent Management", "High", 84, 0, "flat", 23.1, 2341, 12, "Seluruh Holding", "Sedang", 16, 51, 4, 9, "Group CIO", "SVP Learning & Capability", "30 Sep 2026", "On Track", "Komite Risiko", "11 Mei 2026"],
  [4, 1, "Succession Risk", "65 posisi kepemimpinan tanpa suksesor siap", "People & Culture", "Critical", 81, 4, "up", 14.5, 892, 3, "PTPN I Regional 1, PTPN III, PTPN IV", "Sedang", 12, 46, 5, 11, "Group CHRO", "SVP Talent Management", "31 Agu 2026", "At Risk", "BOD", "13 Mei 2026"],
  [5, 12, "Leadership Gap", "Gap kompetensi leadership level manajerial", "People & Culture", "Medium", 76, -3, "down", 6.2, 1156, 2, "PTPN I Regional 1, PTPN IV Regional 4", "Sedang", 20, 55, 3, 8, "Group CHRO", "SVP Leadership Development", "31 Okt 2026", "On Track", "Direktorat", "12 Mei 2026"],
  [6, 15, "Mill Engineering Capability Shortage", "Rasio engineer bersertifikat 0,6 per pabrik", "Operational", "Critical", 79, 5, "up", 18.4, 610, 6, "6 unit pengolahan", "Cepat", 9, 35, 6, 9, "Dir. Operasi", "VP Engineering", "31 Jul 2026", "At Risk", "BOD", "11 Mei 2026"],
  [7, 16, "Pay Equity Gap", "Spread gaji jabatan setara 18,6% antar regional", "Financial", "Critical", 77, 3, "up", 21.8, 2870, 8, "8 regional", "Sedang", 14, 40, 4, 8, "Group CHRO", "SVP Reward", "30 Jun 2026", "At Risk", "Komite Risiko", "10 Mei 2026"],
  [8, 17, "Safety Incident Recurrence", "Insiden berulang di 5 unit risiko tinggi", "Operational", "Critical", 75, 0, "flat", 12.9, 1840, 5, "5 unit risiko tinggi", "Cepat", 4, 61, 3, 10, "Dir. K3", "VP HSE", "31 Mei 2026", "Overdue", "BOD", "10 Mei 2026"],
  [9, 14, "Loss of Agronomy Technical Expertise", "Usia rata-rata ahli agronomi 51,3 tahun", "Talent Management", "High", 74, 2, "up", 16.3, 968, 9, "9 regional kebun", "Lambat", 26, 33, 5, 8, "Dir. Produksi", "VP Agronomi", "30 Sep 2026", "On Track", "Komite Risiko", "11 Mei 2026"],
  [10, 19, "Overtime Cost Overrun", "Rasio lembur 14,2% dari jam normal", "Financial", "High", 71, 2, "up", 9.6, 2260, 22, "22 unit pengolahan", "Sedang", 18, 44, 4, 7, "Group CFO", "VP Controlling", "31 Agu 2026", "On Track", "Direktorat", "09 Mei 2026"],
  [11, 24, "Contract Labor Compliance Exposure", "Ketidaksesuaian dokumen 31 unit alih daya", "Compliance", "High", 69, -2, "down", 11.2, 4120, 31, "31 unit alih daya", "Sedang", 15, 52, 3, 7, "Group Legal", "VP Compliance", "31 Jul 2026", "On Track", "Komite Risiko", "06 Mei 2026"],
  [12, 4, "Digital Capability Gap", "Digital proficiency index 2,4 dari 5", "Technology & Data", "High", 67, 1, "up", 8.9, 3980, 63, "63 unit", "Sedang", 24, 45, 4, 9, "Group CIO", "VP Digital Transformation", "31 Des 2026", "On Track", "Direktorat", "11 Mei 2026"],
  [13, 23, "HRIS Data Quality Below Threshold", "Data quality score 91,2% (target 97%)", "Technology & Data", "Medium", 66, -4, "down", 4.8, 0, 76, "Seluruh unit", "Sedang", 22, 68, 2, 9, "Group CIO", "VP Data Management", "31 Jul 2026", "On Track", "Direktorat", "07 Mei 2026"],
  [14, 20, "Engagement Decline Field Workforce", "Engagement score 3,4 dari 5 (-0,2 YoY)", "People & Culture", "Medium", 64, -3, "down", 7.4, 7120, 47, "47 unit kebun", "Lambat", 30, 57, 3, 8, "Group CHRO", "SVP Employee Experience", "30 Nov 2026", "On Track", "Direktorat", "08 Mei 2026"],
  [15, 9, "Industrial Relations Disruption", "Backlog grievance 41 kasus > 30 hari", "People & Culture", "Medium", 62, 1, "up", 5.6, 1750, 29, "29 unit", "Cepat", 7, 49, 3, 6, "Group IR", "VP Industrial Relations", "15 Mei 2026", "Overdue", "Komite Risiko", "05 Mei 2026"],
  [16, 29, "Pension Fund Obligation Escalation", "Kewajiban imbalan kerja +9,4% YoY", "Financial", "Medium", 60, 2, "up", 13.7, 8120, 76, "Seluruh unit", "Lambat", 34, 29, 2, 6, "Group CFO", "VP Treasury", "31 Des 2026", "On Track", "Komite Risiko", "04 Mei 2026"],
];

export const priorityRisks: PriorityRisk[] = ROWS.map(
  ([
    rank,
    riskNo,
    name,
    desc,
    category,
    level,
    score,
    deltaScore,
    trend,
    impactRp,
    impacted,
    unitCount,
    units,
    velocity,
    weeksToImpact,
    mitigation,
    openActions,
    totalActions,
    owner,
    pic,
    due,
    sla,
    escalation,
    lastUpdate,
  ]) => ({
    rank,
    id: `RISK-2026-${String(riskNo).padStart(3, "0")}`,
    name,
    desc,
    category,
    level,
    score,
    deltaScore,
    trend,
    impactRp,
    impacted,
    unitCount,
    units,
    velocity,
    weeksToImpact,
    mitigation,
    openActions,
    totalActions,
    owner,
    pic,
    due,
    sla,
    escalation,
    lastUpdate,
  }),
);

export const PRIORITY_LEVELS: PriorityLevel[] = ["Critical", "High", "Medium"];
export const PRIORITY_CATEGORIES: PriorityCategory[] = [
  "Talent Management",
  "People & Culture",
  "Operational",
  "Financial",
  "Compliance",
  "Technology & Data",
];
export const SLA_STATUSES: SlaStatus[] = ["On Track", "At Risk", "Overdue"];
export const ESCALATIONS: Escalation[] = ["BOD", "Komite Risiko", "Direktorat"];
export const VELOCITIES: PriorityVelocity[] = ["Cepat", "Sedang", "Lambat"];

export const priorityOwners = [...new Set(priorityRisks.map((r) => r.owner))].sort();

export const LEVEL_COLOR: Record<PriorityLevel, string> = {
  Critical: "#ef4444",
  High: "#f97316",
  Medium: "#f5a524",
};

/* ── Agregat ──────────────────────────────────────────────────────── */

export const totalImpactRp = Number(
  priorityRisks.reduce((s, r) => s + r.impactRp, 0).toFixed(1),
);
export const totalImpacted = priorityRisks.reduce((s, r) => s + r.impacted, 0);
export const avgMitigation = Math.round(
  priorityRisks.reduce((s, r) => s + r.mitigation, 0) / priorityRisks.length,
);
export const openActionTotal = priorityRisks.reduce((s, r) => s + r.openActions, 0);
export const bodEscalations = priorityRisks.filter((r) => r.escalation === "BOD").length;
export const overdueCount = priorityRisks.filter((r) => r.sla === "Overdue").length;
export const atRiskCount = priorityRisks.filter((r) => r.sla === "At Risk").length;

export interface PriorityKpi {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
  share?: string;
  delta: string;
  trend: "up" | "down" | "flat";
  tone: "neutral" | "red" | "amber" | "green";
  compare: string;
}

export const priorityKpi: PriorityKpi[] = [
  {
    label: "Risiko Prioritas",
    value: String(priorityRisks.length),
    delta: "+3",
    trend: "up",
    tone: "neutral",
    compare: "vs 13 pada April 2026",
  },
  {
    label: "Perlu Eskalasi BOD",
    value: String(bodEscalations),
    share: `${Math.round((bodEscalations / priorityRisks.length) * 100)}%`,
    delta: "+1",
    trend: "up",
    tone: "red",
    compare: "agenda Rapat Direksi 20 Mei",
  },
  {
    label: "Potensi Dampak",
    value: totalImpactRp.toString().replace(".", ","),
    prefix: "Rp ",
    suffix: "M",
    delta: "+18,4 M",
    trend: "up",
    tone: "red",
    compare: "eksposur gabungan 12 bulan",
  },
  {
    label: "Pekerja Terdampak",
    value: totalImpacted.toLocaleString("id-ID"),
    delta: "+2.140",
    trend: "up",
    tone: "amber",
    compare: "dari 42.180 pekerja grup",
  },
  {
    label: "Progres Mitigasi",
    value: String(avgMitigation),
    suffix: "%",
    delta: "+6 pp",
    trend: "up",
    tone: "green",
    compare: "target 65% akhir Q3",
  },
  {
    label: "Aksi Lewat Tenggat",
    value: String(overdueCount + atRiskCount),
    share: `${openActionTotal} aksi terbuka`,
    delta: "+2",
    trend: "up",
    tone: "red",
    compare: `${overdueCount} overdue · ${atRiskCount} at risk`,
  },
];

/** Matriks urgensi (minggu ke dampak) vs dampak finansial; bubble = pekerja. */
export const priorityMatrix = priorityRisks.map((r) => ({
  x: r.weeksToImpact,
  y: r.impactRp,
  z: Math.max(400, r.impacted),
  name: r.name,
  level: r.level,
}));

/** Peringkat dampak finansial 8 teratas untuk bar horizontal. */
export const impactRanking = [...priorityRisks]
  .sort((a, b) => b.impactRp - a.impactRp)
  .slice(0, 8)
  .map((r) => ({
    name: r.name.length > 26 ? `${r.name.slice(0, 25)}…` : r.name,
    full: r.name,
    impactRp: r.impactRp,
    level: r.level,
  }));

/** Progres mitigasi 6 risiko teratas: porsi selesai vs sisa. */
export const mitigationProgress = priorityRisks.slice(0, 6).map((r) => ({
  name: r.name.length > 20 ? `${r.name.slice(0, 19)}…` : r.name,
  full: r.name,
  selesai: r.mitigation,
  sisa: 100 - r.mitigation,
  openActions: r.openActions,
}));

/** Sebaran tenggat aksi mitigasi terhadap SLA. */
export const slaAging = [
  { bucket: "Lewat tenggat", count: overdueCount, color: "#ef4444" },
  {
    bucket: "Jatuh tempo < 30 hari",
    count: priorityRisks.filter((r) => r.sla === "At Risk").length,
    color: "#f97316",
  },
  {
    bucket: "30–90 hari",
    count: priorityRisks.filter((r) => r.sla === "On Track" && r.weeksToImpact <= 18).length,
    color: "#f5a524",
  },
  {
    bucket: "> 90 hari",
    count: priorityRisks.filter((r) => r.sla === "On Track" && r.weeksToImpact > 18).length,
    color: "#1a9c5b",
  },
];

/** Keputusan yang menunggu forum — panel kanan antrean prioritas. */
export const priorityDecisions = [
  {
    title: "Persetujuan retensi 24 posisi kritis",
    detail: "Paket retensi Rp 12,4 M untuk PTPN IV Regional 1 & 3, berlaku Juli 2026",
    forum: "Rapat Direksi",
    due: "20 Mei 2026",
    risk: "Critical Position Vacancy",
  },
  {
    title: "Remedy pay equity tahap 1",
    detail: "Penyesuaian 2.870 pekerja di 8 regional, dampak biaya Rp 8,1 M",
    forum: "Komite Risiko",
    due: "28 Mei 2026",
    risk: "Pay Equity Gap",
  },
  {
    title: "Moratorium operasi 2 unit risiko K3",
    detail: "Penghentian sementara sampai audit HSE selesai",
    forum: "Rapat Direksi",
    due: "20 Mei 2026",
    risk: "Safety Incident Recurrence",
  },
];
