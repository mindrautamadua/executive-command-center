/**
 * Data statis halaman Industrial Relations (/industrial-relations).
 * Periode acuan: Mei 2026 (YTD), data per 31 Mei 2026.
 *
 * Basis angka (konsisten antar-panel):
 * - Kasus aktif saat ini: 24 (13 dalam proses + 2 belum ditangani dari periode
 *   12 bulan, + 9 kasus lama >12 bulan yang masih proses PHI/banding).
 * - Kasus masuk 12 bulan terakhir (Jun 25–Mei 26): 170; selesai 155 (91%).
 * - Kasus baru YTD 2026 (Jan–Mei): 36 → 0,51 kasus/1.000 karyawan (70.412 karyawan).
 */

import { PALETTE } from "./chart-palette";

/* ── KPI Strip ────────────────────────────────────────────────────── */

export interface IrKpi {
  label: string;
  value: string;
  /** Sufiks kecil di samping nilai, mis. "/100". */
  valueSuffix?: string;
  /** Baris kecil di bawah nilai, mis. "Kategori: Baik". */
  sub?: string;
  delta: string;
  trend: "up" | "down";
  deltaTone: "good" | "bad";
  compare: string;
  icon: "index" | "case" | "newcase" | "strike" | "resolution" | "peace";
  tone: "green" | "purple" | "amber" | "red" | "blue" | "violet";
  series: number[];
  color: string;
}

export const irKpi: IrKpi[] = [
  {
    label: "Industrial Relations Index",
    value: "82,6",
    valueSuffix: "/100",
    sub: "Kategori: Baik",
    delta: "+4,8 pts",
    trend: "up",
    deltaTone: "good",
    compare: "vs Apr 2026",
    icon: "index",
    tone: "green",
    series: [74, 75, 76, 75, 77, 78, 77, 79, 80, 79, 81, 82.6],
    color: PALETTE.green,
  },
  {
    label: "Kasus Aktif",
    value: "24",
    sub: "2 kritis · 5 tinggi",
    delta: "-8 kasus",
    trend: "down",
    deltaTone: "good",
    compare: "vs Apr 2026",
    icon: "case",
    tone: "purple",
    series: [38, 35, 37, 34, 36, 33, 35, 32, 34, 30, 32, 24],
    color: PALETTE.purple,
  },
  {
    label: "Kasus Baru (YTD)",
    value: "36",
    sub: "0,51 / 1.000 karyawan",
    delta: "-12 kasus",
    trend: "down",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "newcase",
    tone: "amber",
    series: [10, 14, 12, 18, 16, 22, 20, 26, 28, 30, 33, 36],
    color: PALETTE.amber,
  },
  {
    label: "Potensi Aksi Mogok",
    value: "2",
    sub: "Lokasi risiko tinggi",
    delta: "-1 lokasi",
    trend: "down",
    deltaTone: "good",
    compare: "vs Apr 2026",
    icon: "strike",
    tone: "red",
    series: [5, 4, 5, 3, 4, 5, 3, 4, 3, 4, 3, 2],
    color: PALETTE.red,
  },
  {
    label: "Tingkat Penyelesaian",
    value: "91%",
    sub: "First-time resolution 76%",
    delta: "+6%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Apr 2026",
    icon: "resolution",
    tone: "blue",
    series: [80, 82, 81, 83, 84, 85, 84, 86, 87, 86, 88, 91],
    color: PALETTE.blue,
  },
  {
    label: "Hari Tanpa Aksi Mogok",
    value: "128",
    sub: "Dibaca bersama sentimen SP",
    delta: "+18 hari",
    trend: "up",
    deltaTone: "good",
    compare: "vs Apr 2026",
    icon: "peace",
    tone: "violet",
    series: [70, 76, 82, 88, 94, 98, 104, 108, 112, 118, 122, 128],
    color: PALETTE.blueSoft,
  },
];

/* ── IR Health: dekomposisi indeks 82,6 ───────────────────────────── */

export interface IrHealthDim {
  name: string;
  score: number;
  weight: string;
  tone: "good" | "warn" | "bad";
  note: string;
}

/** 82 × 30% + 91 × 20% + 91 × 20% + 72 × 30% = 82,6. */
export const irHealthDims: IrHealthDim[] = [
  { name: "Stability", score: 82, weight: "30%", tone: "good", note: "Frekuensi & eskalasi perselisihan" },
  { name: "Case Management", score: 91, weight: "20%", tone: "good", note: "Kecepatan & mutu penyelesaian" },
  { name: "Compliance", score: 91, weight: "20%", tone: "good", note: "Regulasi, upah, PKB, K3" },
  { name: "Conflict Risk", score: 72, weight: "30%", tone: "warn", note: "Sentimen SP, aging, isu upah/lembur" },
];

export const irHealthFormula =
  "IR Index = 30% Stability + 20% Case Management + 20% Compliance + 30% Conflict Risk (invers eksposur)";

/* ── Disruption Risk (signature KPI) ──────────────────────────────── */

export const irDisruption = {
  score: 18,
  category: "Rendah",
  delta: "-4 pts vs Apr 2026",
  locationsElevated: 2,
  employeesExposed: "4.218",
  sitesExposed: 5,
  criticalOps: "1 PKS + 4 kebun",
  revenueExposure: "Rp 48,2 M",
  drivers: ["Upah & Tunjangan", "Jam Kerja & Lembur", "PKB"],
};

/* ── Early Warning ────────────────────────────────────────────────── */

export type SignalLevel = "red" | "amber" | "yellow" | "green";

export const SIGNAL_STYLE: Record<SignalLevel, string> = {
  red: "bg-[#fdecec] text-[#c03434]",
  amber: "bg-[#fdf3e0] text-[#d98b06]",
  yellow: "bg-[#fdf9e0] text-[#a8891b]",
  green: "bg-ptpn-greenLight text-ptpn-green",
};

export interface EwDriver {
  name: string;
  signal: SignalLevel;
}

export const irEarlyWarning = {
  score: 71,
  category: "Waspada",
  horizon: "30–90 hari",
  drivers: [
    { name: "Case aging", signal: "red" },
    { name: "Sengketa upah", signal: "red" },
    { name: "Volume kasus", signal: "amber" },
    { name: "Sentimen SP", signal: "amber" },
    { name: "Lembur", signal: "amber" },
    { name: "Kepatuhan PKB", signal: "amber" },
    { name: "Absensi", signal: "yellow" },
  ] as EwDriver[],
};

export type RiskLevel = "Tinggi" | "Sedang" | "Rendah";

export const RISK_STYLE: Record<RiskLevel, string> = {
  Tinggi: "bg-[#fdecec] text-[#ef4444]",
  Sedang: "bg-[#fdf3e0] text-[#d98b06]",
  Rendah: "bg-ptpn-greenLight text-ptpn-green",
};

export interface StrikeRisk {
  lokasi: string;
  risk: RiskLevel;
  isu: string;
  probability: string;
  window: string;
}

export const strikeRisks: StrikeRisk[] = [
  { lokasi: "PTPN IV - Kebun Bah Jambi", risk: "Tinggi", isu: "Upah & Tunjangan", probability: "68%", window: "30–60 hr" },
  { lokasi: "PTPN III - PKS Sei Mangkei", risk: "Tinggi", isu: "Jam Kerja & Lembur", probability: "54%", window: "30–90 hr" },
  { lokasi: "PTPN XII - Kebun Kalirejo", risk: "Sedang", isu: "Kesejahteraan", probability: "31%", window: "60–90 hr" },
  { lokasi: "PTPN VII - Kebun Rejosari", risk: "Sedang", isu: "PKB", probability: "26%", window: ">90 hr" },
];

/* ── Sebaran kasus berdasarkan kategori ───────────────────────────── */

export interface CaseCategory {
  name: string;
  value: number;
  pct: string;
  color: string;
}

export const caseCategories: CaseCategory[] = [
  { name: "Perselisihan Hak", value: 9, pct: "37,5%", color: PALETTE.blue },
  { name: "Perselisihan Kepentingan", value: 6, pct: "25,0%", color: PALETTE.green },
  { name: "Perselisihan PHK", value: 4, pct: "16,7%", color: PALETTE.amber },
  { name: "Perselisihan Antar Pekerja", value: 3, pct: "12,5%", color: PALETTE.purple },
  { name: "Lainnya", value: 2, pct: "8,3%", color: PALETTE.slate },
];

/* ── Trend kasus IR (12 bulan terakhir) ───────────────────────────── */
/* Total baru = 170, selesai = 155; Jan–Mei 26 baru = 36 (konsisten KPI YTD). */

export const caseTrend = [
  { name: "Jun 25", baru: 17, selesai: 14 },
  { name: "Jul 25", baru: 18, selesai: 15 },
  { name: "Agu 25", baru: 16, selesai: 17 },
  { name: "Sep 25", baru: 20, selesai: 16 },
  { name: "Okt 25", baru: 23, selesai: 20 },
  { name: "Nov 25", baru: 21, selesai: 19 },
  { name: "Des 25", baru: 19, selesai: 18 },
  { name: "Jan 26", baru: 9, selesai: 8 },
  { name: "Feb 26", baru: 8, selesai: 9 },
  { name: "Mar 26", baru: 7, selesai: 8 },
  { name: "Apr 26", baru: 6, selesai: 6 },
  { name: "Mei 26", baru: 6, selesai: 5 },
];

/* ── Case Severity ────────────────────────────────────────────────── */

export type Severity = "Kritis" | "Tinggi" | "Sedang" | "Rendah";

export const SEVERITY_STYLE: Record<Severity, string> = {
  Kritis: "bg-[#fdecec] text-[#ef4444]",
  Tinggi: "bg-[#fdf3e0] text-[#d98b06]",
  Sedang: "bg-[#fdf9e0] text-[#a8891b]",
  Rendah: "bg-ptpn-greenLight text-ptpn-green",
};

export const severityDist: { level: Severity; count: number; color: string }[] = [
  { level: "Kritis", count: 2, color: PALETTE.red },
  { level: "Tinggi", count: 5, color: PALETTE.amber },
  { level: "Sedang", count: 9, color: "#eab308" },
  { level: "Rendah", count: 8, color: PALETTE.green },
];

export interface SeverityCase {
  id: string;
  lokasi: string;
  kategori: string;
  severity: Severity;
  umur: string;
  risiko: string;
}

export const severityCases: SeverityCase[] = [
  { id: "IR-26-014", lokasi: "PTPN IV Bah Jambi", kategori: "Upah & Tunjangan", severity: "Kritis", umur: "42 hr", risiko: "Eskalasi mogok" },
  { id: "IR-26-019", lokasi: "PTPN III Sei Mangkei", kategori: "Jam Kerja & Lembur", severity: "Kritis", umur: "28 hr", risiko: "Eskalasi mogok" },
  { id: "IR-25-092", lokasi: "PTPN I Langsa", kategori: "PHK", severity: "Tinggi", umur: "104 hr", risiko: "Litigasi PHI" },
  { id: "IR-26-008", lokasi: "PTPN VII Rejosari", kategori: "PKB", severity: "Tinggi", umur: "51 hr", risiko: "Deadlock negosiasi" },
  { id: "IR-26-021", lokasi: "PTPN XII Kalirejo", kategori: "Kesejahteraan", severity: "Sedang", umur: "15 hr", risiko: "Grievance meluas" },
];

/* ── Case Aging & efektivitas penyelesaian ────────────────────────── */

export const agingBuckets = [
  { label: "<7 hr", count: 4, color: PALETTE.green },
  { label: "7–30 hr", count: 9, color: PALETTE.greenSoft },
  { label: "31–60 hr", count: 7, color: "#eab308" },
  { label: "61–90 hr", count: 3, color: PALETTE.amber },
  { label: ">90 hr", count: 1, color: PALETTE.red },
];

export const agingStats = [
  { label: "Rata-rata Penyelesaian", value: "23 hari", tone: "good" as const },
  { label: "Median Penyelesaian", value: "17 hari", tone: "good" as const },
  { label: "Kasus Terlama Terbuka", value: "104 hari", tone: "bad" as const },
  { label: "First-Time Resolution", value: "76%", tone: "warn" as const },
  { label: "Repeat Issue Rate", value: "21%", tone: "warn" as const },
];

/* ── Repeat rate & root cause per kategori isu ────────────────────── */

export interface RepeatCategory {
  name: string;
  cases: number;
  repeatRate: number;
  tone: "bad" | "warn" | "good";
  rootCauses: string[];
  moduleLabel: string;
  moduleHref: string;
}

export const repeatCategories: RepeatCategory[] = [
  {
    name: "Upah & Tunjangan",
    cases: 56,
    repeatRate: 39,
    tone: "bad",
    rootCauses: ["Struktur upah", "Compa-ratio 87% (P40)", "Interpretasi tunjangan"],
    moduleLabel: "Compensation & Benefits",
    moduleHref: "/compensation-benefits",
  },
  {
    name: "Jam Kerja & Lembur",
    cases: 29,
    repeatRate: 28,
    tone: "warn",
    rootCauses: ["Kecukupan tenaga 84%", "Desain shift", "Demand musim panen"],
    moduleLabel: "Workforce Planning",
    moduleHref: "/workforce-planning",
  },
  {
    name: "Kesejahteraan",
    cases: 22,
    repeatRate: 18,
    tone: "warn",
    rootCauses: ["Fasilitas perumahan", "Layanan kesehatan kebun"],
    moduleLabel: "Employee Engagement",
    moduleHref: "/employee-engagement",
  },
  {
    name: "PKB",
    cases: 19,
    repeatRate: 12,
    tone: "good",
    rootCauses: ["Implementasi pasal", "Sosialisasi belum merata"],
    moduleLabel: "Risk & Compliance",
    moduleHref: "/risk-compliance",
  },
];

/* ── Penyelesaian kasus ───────────────────────────────────────────── */

export interface ResolutionSlice {
  name: string;
  value: number;
  pct: string;
  color: string;
}

export const caseResolution: ResolutionSlice[] = [
  { name: "Selesai", value: 155, pct: "91%", color: PALETTE.green },
  { name: "Dalam Proses", value: 13, pct: "8%", color: PALETTE.amber },
  { name: "Belum Ditangani", value: 2, pct: "1%", color: PALETTE.red },
];

export const caseResolutionBasis =
  "Basis: 170 kasus masuk Jun 25–Mei 26 · 9 kasus lama (>12 bln) masih proses PHI/banding";

/* ── Kepatuhan hubungan industrial ────────────────────────────────── */

export type ComplianceStatus = "On Target" | "Watch" | "Attention Required";

export const COMPLIANCE_STATUS_STYLE: Record<ComplianceStatus, string> = {
  "On Target": "bg-ptpn-greenLight text-ptpn-green",
  Watch: "bg-[#fdf9e0] text-[#a8891b]",
  "Attention Required": "bg-[#fdf3e0] text-[#d98b06]",
};

export interface ComplianceRow {
  name: string;
  pct: number;
  target: number;
  status: ComplianceStatus;
  icon: "regulation" | "wage" | "pkb" | "worktime" | "safety";
}

export const complianceRows: ComplianceRow[] = [
  { name: "Peraturan Ketenagakerjaan", pct: 96, target: 95, status: "On Target", icon: "regulation" },
  { name: "Pembayaran Upah", pct: 93, target: 95, status: "Watch", icon: "wage" },
  { name: "Perjanjian Kerja Bersama (PKB)", pct: 89, target: 95, status: "Attention Required", icon: "pkb" },
  { name: "Jam Kerja & Lembur", pct: 87, target: 95, status: "Attention Required", icon: "worktime" },
  { name: "Keselamatan & Kesehatan Kerja", pct: 92, target: 95, status: "Watch", icon: "safety" },
];

export const complianceRiskNote =
  "Gap PKB −6 pts di 6 regional · potensi eksposur hukum Rp 12,8 M → dieskalasi ke Risk & Compliance";

/* ── Union Relations Health ───────────────────────────────────────── */

export const unionTotals = {
  members: "18.642",
  membersCaption: "Anggota Serikat Pekerja",
  unions: "142",
  unionsCaption: "Serikat Pekerja Aktif",
  bipartiteIndex: "84",
  bipartiteCaption: "Bipartite Relationship Index",
  bipartiteNote: "Terendah: Regional VII = 71",
};

export interface UnionHealthRow {
  name: string;
  members: string;
  cases: number;
  sentiment: number;
  sentimentDelta: string;
  risk: RiskLevel;
}

export const unionHealth: UnionHealthRow[] = [
  { name: "FSBUN", members: "8.389", cases: 12, sentiment: 72, sentimentDelta: "-3", risk: "Sedang" },
  { name: "SPBUN", members: "5.220", cases: 5, sentiment: 81, sentimentDelta: "+2", risk: "Rendah" },
  { name: "SPKBN", members: "2.796", cases: 3, sentiment: 84, sentimentDelta: "+1", risk: "Rendah" },
  { name: "Lainnya", members: "2.237", cases: 4, sentiment: 78, sentimentDelta: "0", risk: "Rendah" },
];

export const unionSentimentNote =
  "Sentimen agregat 78/100 (+4 YTD) · memburuk di 2 regional (IV & VII) — isu upah & lembur";

/* ── Indeks & risk heatmap per region ─────────────────────────────── */

export interface RegionIndexRow {
  name: string;
  index: string;
  strike: RiskLevel;
  compliance: number;
  tone: "good" | "warn" | "bad";
  watch?: boolean;
}

export const regionIndex: RegionIndexRow[] = [
  { name: "Regional I - Sumatera Utara", index: "86,5", strike: "Rendah", compliance: 96, tone: "good" },
  { name: "Regional II - Sumatera Selatan", index: "83,1", strike: "Rendah", compliance: 94, tone: "good" },
  { name: "Regional III - Jawa Barat", index: "81,9", strike: "Sedang", compliance: 93, tone: "good" },
  { name: "Regional IV - Jawa Tengah", index: "80,2", strike: "Sedang", compliance: 91, tone: "warn" },
  { name: "Regional V - Jawa Timur", index: "82,7", strike: "Rendah", compliance: 93, tone: "good" },
  { name: "Regional VI - Kalimantan", index: "84,3", strike: "Rendah", compliance: 95, tone: "good" },
  { name: "Regional VII - Sulawesi", index: "78,6", strike: "Sedang", compliance: 89, tone: "warn", watch: true },
  { name: "Regional VIII - Papua", index: "76,4", strike: "Tinggi", compliance: 85, tone: "bad", watch: true },
];

export const regionLegend = [
  { label: "≥ 85 (Sangat Baik)", color: PALETTE.green },
  { label: "75 - 84 (Baik)", color: PALETTE.greenSoft },
  { label: "65 - 74 (Cukup)", color: PALETTE.amber },
  { label: "< 65 (Perlu Perbaikan)", color: PALETTE.red },
];

/* ── Top isu industrial relations (12 bulan, basis 170 kasus) ─────── */

export interface IrIssueBar {
  name: string;
  count: number;
  pct: string;
  color: string;
}

export const irIssues: IrIssueBar[] = [
  { name: "Upah & Tunjangan", count: 56, pct: "33%", color: PALETTE.red },
  { name: "Jam Kerja & Lembur", count: 29, pct: "17%", color: PALETTE.amber },
  { name: "Kesejahteraan", count: 22, pct: "13%", color: "#eab308" },
  { name: "PKB", count: 19, pct: "11%", color: PALETTE.green },
  { name: "PHK", count: 15, pct: "9%", color: PALETTE.blue },
  { name: "Fasilitas Kerja", count: 12, pct: "7%", color: PALETTE.purple },
  { name: "Lainnya", count: 17, pct: "10%", color: PALETTE.slate },
];

/* ── Business impact per lokasi terpapar ──────────────────────────── */

export interface BusinessImpactRow {
  lokasi: string;
  karyawan: string;
  disrupsi: string;
  produksi: string;
  eksposur: string;
  risk: RiskLevel;
}

export const businessImpact: BusinessImpactRow[] = [
  { lokasi: "PTPN IV - Kebun Bah Jambi", karyawan: "1.860", disrupsi: "3–4 hari", produksi: "2.900 ton TBS", eksposur: "Rp 21,4 M", risk: "Tinggi" },
  { lokasi: "PTPN III - PKS Sei Mangkei", karyawan: "1.240", disrupsi: "2–4 hari", produksi: "4.100 ton olah CPO", eksposur: "Rp 18,6 M", risk: "Tinggi" },
  { lokasi: "PTPN XII - Kebun Kalirejo", karyawan: "640", disrupsi: "1–2 hari", produksi: "850 ton TBS", eksposur: "Rp 5,2 M", risk: "Sedang" },
  { lokasi: "PTPN VII - Kebun Rejosari", karyawan: "478", disrupsi: "1 hari", produksi: "620 ton TBS", eksposur: "Rp 3,0 M", risk: "Sedang" },
];

export const businessImpactTotal = {
  karyawan: "4.218",
  eksposur: "Rp 48,2 M",
  note: "1 PKS kritis (Sei Mangkei) — stop 1 hari = kerugian olah terbesar",
};

/* ── IR Cost & Legal Exposure (YTD) ───────────────────────────────── */

export const irCostRows = [
  { label: "Settlement & Kompensasi PHK", value: "Rp 14,6 M", pct: 59 },
  { label: "Biaya Hukum & Kuasa Eksternal", value: "Rp 3,1 M", pct: 13 },
  { label: "Productivity Loss (jam hilang)", value: "Rp 4,8 M", pct: 19 },
  { label: "Disrupsi Operasional Parsial", value: "Rp 2,3 M", pct: 9 },
];

export const irCostTotals = {
  total: "Rp 24,8 M",
  perCase: "Rp 146 jt / kasus",
  perEmployee: "Rp 352 rb / karyawan",
};

export const legalExposure = [
  { label: "Potensi Liabilitas PHK (4 kasus)", value: "Rp 9,6 M" },
  { label: "Kasus dengan Kuasa Hukum Eksternal", value: "3" },
  { label: "Probabilitas Litigasi PHI", value: "35%" },
  { label: "Expected Loss (probability-weighted)", value: "Rp 3,4 M" },
];

/* ── Cross-module signals ─────────────────────────────────────────── */

export interface CrossSignal {
  title: string;
  chain: string[];
  hypothesis: string;
  href: string;
  linkLabel: string;
  tone: "red" | "amber" | "blue";
}

export const crossSignals: CrossSignal[] = [
  {
    title: "Upah → Kompensasi",
    chain: ["Kasus upah 33%", "Compa-ratio 87%", "Posisi pasar P40"],
    hypothesis:
      "Konsentrasi kasus upah di PTPN IV konsisten dengan daya saing kompensasi di bawah pasar — akar masalah kemungkinan struktural, bukan relasional.",
    href: "/compensation-benefits",
    linkLabel: "Buka Compensation & Benefits",
    tone: "red",
  },
  {
    title: "Lembur → Kapasitas Workforce",
    chain: ["Keluhan lembur +28%", "Kecukupan tenaga 84%", "Absensi 6,2%"],
    hypothesis:
      "Pola lembur + absensi + kasus IR menunjuk masalah kapasitas tenaga kerja — tinjau alokasi sebelum intervensi IR simptomatik.",
    href: "/workforce-planning",
    linkLabel: "Buka Workforce Planning",
    tone: "amber",
  },
  {
    title: "Engagement → IR",
    chain: ["Engagement Reg. III 74", "Grievance naik", "Lembur tinggi"],
    hypothesis:
      "Engagement rendah beriringan dengan beban kerja belum terselesaikan — sinyal dini grievance sebelum jadi perselisihan formal.",
    href: "/employee-engagement",
    linkLabel: "Buka Employee Engagement",
    tone: "blue",
  },
];

/* ── AI Industrial Relations Intelligence ─────────────────────────── */

export const irAiHeadline = {
  title: "Regional VIII adalah hotspot IR prioritas #1",
  body: "IR Index 76,4 (terendah), strike risk Tinggi, compliance 85%. Sinyal kontributor: kasus belum terselesaikan menumpuk, kepatuhan PKB rendah, dan frekuensi perselisihan meningkat. Bah Jambi (Reg. I) & Sei Mangkei (Reg. II) tetap dipantau terpisah sebagai lokasi eskalasi.",
};

export interface AiIntervention {
  horizon: string;
  items: string[];
}

export const irAiInterventions: AiIntervention[] = [
  {
    horizon: "0–30 hari",
    items: [
      "Bipartite meeting level direksi di Regional VIII",
      "Review 10 kasus terbuka terlama (aging >60 hari)",
      "Validasi implementasi PKB di 6 regional ber-gap",
    ],
  },
  {
    horizon: "30–90 hari",
    items: [
      "Workforce capacity review lokasi lembur tinggi",
      "Remediasi struktur upah PTPN IV (compa-ratio 87%)",
      "Program kesejahteraan kebun prioritas",
    ],
  },
];

export const irAiImpact =
  "Estimasi dampak: Early Warning 71 → ~58 · Disruption Risk 18 → ~12 · eksposur turun ~Rp 19 M";

/* ── Metodologi (footnote) ────────────────────────────────────────── */

export const irMethodology = [
  {
    title: "IR Index",
    text: "Komposit berbobot 4 dimensi (Stability, Case Management, Compliance, Conflict Risk); skala 0–100, dihitung bulanan per regional.",
  },
  {
    title: "Early Warning & Disruption",
    text: "Model leading indicators: sentimen SP, volume & aging grievance, sengketa upah, lembur, absensi, status negosiasi PKB, pola konflik historis.",
  },
  {
    title: "Eksposur Finansial",
    text: "Estimasi berbasis hari disrupsi × volume produksi × harga acuan + biaya settlement/hukum; angka indikatif untuk prioritisasi, bukan angka audit.",
  },
];
