/**
 * Data statis halaman Workforce Planning (/workforce-planning).
 * Horizon perencanaan: 2026 - 2028, data per 31 Mei 2026 (YTD).
 */

import { PALETTE } from "./chart-palette";

/* ── KPI Strip ────────────────────────────────────────────────────── */

export interface WpKpi {
  label: string;
  value: string;
  /** Satuan kecil di kanan nilai, mis. "Orang". */
  sub?: string;
  /** Kosong = tampilkan `compare` saja. */
  delta?: string;
  trend?: "up" | "down";
  deltaTone?: "good" | "bad";
  compare: string;
  /** Titik merah + teks merah pada baris compare (mis. posisi kritis). */
  alertDot?: boolean;
  icon: "users" | "projection" | "net" | "vacant" | "skillgap" | "ready" | "cost";
  tone: "blue" | "green" | "teal" | "red" | "purple" | "amber";
}

export const wpKpi: WpKpi[] = [
  {
    label: "Total Headcount Saat Ini",
    value: "70.142",
    sub: "Orang",
    delta: "3,2%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Des 2025",
    icon: "users",
    tone: "blue",
  },
  {
    label: "Proyeksi Headcount 2028",
    value: "73.856",
    sub: "Orang",
    delta: "5,3%",
    trend: "up",
    deltaTone: "good",
    compare: "vs 2026",
    icon: "projection",
    tone: "green",
  },
  {
    label: "Kebutuhan Tambahan (Net)",
    value: "3.714",
    sub: "Orang",
    delta: "5,3%",
    trend: "up",
    deltaTone: "good",
    compare: "vs 2026",
    icon: "net",
    tone: "purple",
  },
  {
    label: "Critical Role Tanpa Suksesor Ready-Now",
    value: "148",
    sub: "Posisi",
    compare: "32 butuh intervensi segera",
    alertDot: true,
    icon: "vacant",
    tone: "red",
  },
  {
    label: "Skill Gap",
    value: "1.245",
    sub: "Gap",
    delta: "-4,1%",
    trend: "down",
    deltaTone: "bad",
    compare: "vs Des 2025",
    icon: "skillgap",
    tone: "amber",
  },
  {
    label: "Rasio Talent Ready",
    value: "68%",
    delta: "-2,2 pts",
    trend: "down",
    deltaTone: "bad",
    compare: "vs Des 2025",
    icon: "ready",
    tone: "teal",
  },
  {
    label: "Estimated HC Cost 2028",
    value: "Rp 6,82 T",
    delta: "6,7%",
    trend: "up",
    deltaTone: "good",
    compare: "vs 2026",
    icon: "cost",
    tone: "blue",
  },
];

/* ── 1. Proyeksi Headcount 2026 - 2028 ────────────────────────────── */

export const headcountProjection = [
  { name: "2026 (F)", total: 70142, net: 0 },
  { name: "2027 (F)", total: 71892, net: 1750 },
  { name: "2028 (F)", total: 73856, net: 1964 },
];

export const projectionNote =
  "Pertumbuhan headcount terjaga seiring dengan rencana ekspansi dan peningkatan produksi.";

/* ── 2. Kebutuhan Talenta Berdasarkan Jenjang ─────────────────────── */

export interface PlanRow {
  name: string;
  y2026: number;
  y2027: number;
  y2028: number;
  tambahan: number;
}

export const kebutuhanJenjang: PlanRow[] = [
  { name: "Direktur & EVP", y2026: 56, y2027: 58, y2028: 60, tambahan: 4 },
  { name: "Senior Manager", y2026: 512, y2027: 548, y2028: 584, tambahan: 72 },
  { name: "Manager", y2026: 1842, y2027: 1958, y2028: 2095, tambahan: 253 },
  { name: "Assistant Manager", y2026: 3456, y2027: 3678, y2028: 3950, tambahan: 494 },
  { name: "Supervisor", y2026: 9842, y2027: 10355, y2028: 10942, tambahan: 1100 },
  { name: "Staff & Non Staff", y2026: 54434, y2027: 55295, y2028: 56225, tambahan: 1791 },
];

export const jenjangTotal: PlanRow = {
  name: "Total",
  y2026: 70142,
  y2027: 71892,
  y2028: 73856,
  tambahan: 3714,
};

export const jenjangNote =
  "Kebutuhan terbesar terdapat pada level Supervisor dan Staff Operasional.";

/* ── 3. Kebutuhan Talenta Berdasarkan Fungsi Utama ────────────────── */

export interface FungsiRow extends PlanRow {
  icon: "kebun" | "pabrik" | "engineering" | "supply" | "sales" | "keuangan" | "hc" | "lainnya";
}

export const kebutuhanFungsi: FungsiRow[] = [
  { name: "Operasional Kebun", icon: "kebun", y2026: 24812, y2027: 25601, y2028: 26472, tambahan: 1660 },
  { name: "Pabrik & Mill", icon: "pabrik", y2026: 9512, y2027: 9842, y2028: 10236, tambahan: 724 },
  { name: "Engineering & Maintenance", icon: "engineering", y2026: 6245, y2027: 6561, y2028: 6912, tambahan: 667 },
  { name: "Supply Chain & Logistic", icon: "supply", y2026: 5842, y2027: 6153, y2028: 6471, tambahan: 629 },
  { name: "Sales & Marketing", icon: "sales", y2026: 4215, y2027: 4458, y2028: 4701, tambahan: 486 },
  { name: "Keuangan", icon: "keuangan", y2026: 3842, y2027: 4021, y2028: 4188, tambahan: 346 },
  { name: "Human Capital", icon: "hc", y2026: 2145, y2027: 2256, y2028: 2371, tambahan: 226 },
  { name: "Lainnya", icon: "lainnya", y2026: 13529, y2027: 13000, y2028: 12505, tambahan: -1024 },
];

export const fungsiTotal: PlanRow = {
  name: "Total",
  y2026: 70142,
  y2027: 71892,
  y2028: 73856,
  tambahan: 3714,
};

/* ── 4. Gap Talenta Kritis (Top 10 Skill) ─────────────────────────── */

export interface SkillGapRow {
  skill: string;
  supply: number;
  demand: number;
  gap: number;
  gapPct: string;
}

export const skillGaps: SkillGapRow[] = [
  { skill: "Mill & Process Engineering", supply: 412, demand: 612, gap: -200, gapPct: "-32,7%" },
  { skill: "Data Analytics", supply: 248, demand: 428, gap: -180, gapPct: "-42,1%" },
  { skill: "Agronomy Expert", supply: 365, demand: 520, gap: -155, gapPct: "-29,8%" },
  { skill: "Maintenance Reliability", supply: 389, demand: 530, gap: -141, gapPct: "-26,6%" },
  { skill: "Digital Transformation", supply: 206, demand: 318, gap: -112, gapPct: "-35,2%" },
  { skill: "Supply Chain Planning", supply: 278, demand: 376, gap: -98, gapPct: "-26,1%" },
  { skill: "Sustainability Management", supply: 162, demand: 246, gap: -84, gapPct: "-34,1%" },
  { skill: "Leadership & People Mgmt", supply: 454, demand: 522, gap: -68, gapPct: "-13,0%" },
  { skill: "Cost Management", supply: 312, demand: 372, gap: -60, gapPct: "-16,1%" },
  { skill: "Risk Management", supply: 186, demand: 238, gap: -52, gapPct: "-21,8%" },
];

/* ── 5. Sumber Pemenuhan Kebutuhan Talenta (2026-2028) ────────────── */

export interface SumberRow {
  name: string;
  value: number;
  pct: string;
  orang: string;
  color: string;
}

export const sumberPemenuhan: SumberRow[] = [
  {
    name: "Talent Internal (Mobilitas & Promosi)",
    value: 1671,
    pct: "45%",
    orang: "1.671 orang",
    color: PALETTE.green,
  },
  {
    name: "Rekrutmen Eksternal",
    value: 928,
    pct: "25%",
    orang: "928 orang",
    color: PALETTE.greenSoft,
  },
  {
    name: "Reskilling & Upskilling",
    value: 743,
    pct: "20%",
    orang: "743 orang",
    color: PALETTE.amber,
  },
  {
    name: "Outsourcing / Contingent Worker",
    value: 372,
    pct: "10%",
    orang: "372 orang",
    color: PALETTE.purple,
  },
];

export const sumberNote =
  "Fokus pada pengembangan talenta internal dan reskilling untuk efisiensi biaya dan keberlanjutan.";

/* ── 6. Workforce Supply & Demand Balance ─────────────────────────── */

export const supplyDemand = [
  { name: "2026 (F)", supply: 70142, demand: 70986, gap: -844 },
  { name: "2027 (F)", supply: 71892, demand: 72964, gap: -1072 },
  { name: "2028 (F)", supply: 73856, demand: 75427, gap: -1571 },
];

/* ── 7. Scenario Planning Overview ────────────────────────────────── */

export interface Scenario {
  code: string;
  subtitle: string;
  headcount: string;
  cost: string;
  index: string;
  footer: string;
  footerTone: "neutral" | "amber";
  icon: "bau" | "growth" | "automation" | "reskill";
  tone: "blue" | "amber" | "green" | "teal";
}

export const scenarios: Scenario[] = [
  {
    code: "Skenario A",
    subtitle: "Business as Usual (BAU)",
    headcount: "73.856",
    cost: "Rp 6,82 T",
    index: "100",
    footer: "Baseline Plan",
    footerTone: "neutral",
    icon: "bau",
    tone: "blue",
  },
  {
    code: "Skenario B",
    subtitle: "High Growth (+10% Produksi)",
    headcount: "78.924",
    cost: "Rp 7,85 T",
    index: "104",
    footer: "Dampak: Biaya ↑ 15,1%",
    footerTone: "amber",
    icon: "growth",
    tone: "amber",
  },
  {
    code: "Skenario C",
    subtitle: "Efficiency & Automation",
    headcount: "70.215",
    cost: "Rp 5,96 T",
    index: "112",
    footer: "Dampak: Biaya ↓ 12,6%",
    footerTone: "amber",
    icon: "automation",
    tone: "green",
  },
  {
    code: "Skenario D",
    subtitle: "Reskill & Redeploy",
    headcount: "71.102",
    cost: "Rp 6,15 T",
    index: "108",
    footer: "Dampak: Biaya ↓ 9,8%",
    footerTone: "amber",
    icon: "reskill",
    tone: "teal",
  },
];

/* ── 8. Rekomendasi Strategis ─────────────────────────────────────── */

export interface WpRekomendasi {
  title: string;
  text: string;
  icon: "pipeline" | "reskilling" | "produktivitas" | "scenario";
  tone: "green" | "teal" | "blue" | "purple";
}

export const wpRekomendasi: WpRekomendasi[] = [
  {
    title: "Prioritaskan Build + Move Sebelum Buy",
    text: "Gap 3.714 bukan semata masalah hiring — 65% dapat ditutup internal (mobilitas 45% + reskilling 20%), menekan kebutuhan rekrutmen eksternal menjadi 25%.",
    icon: "pipeline",
    tone: "green",
  },
  {
    title: "Amankan Kapabilitas Kritis",
    text: "Risiko kapabilitas terbesar: Mill Engineering (-200), Data Analytics (-180), Agronomy (-155). Eksekusi strategi 4B per skill dengan target time-to-close 9-18 bulan.",
    icon: "reskilling",
    tone: "teal",
  },
  {
    title: "Tutup Gap Suksesi Kritis",
    text: "148 posisi kritis belum punya suksesor ready-now; 32 butuh intervensi segera. Percepat pipeline bersama modul Succession Planning.",
    icon: "produktivitas",
    tone: "blue",
  },
  {
    title: "Adopsi Skenario Reskill & Redeploy",
    text: "Decision matrix: Reskill & Redeploy skor strategis tertinggi (88) — biaya turun 9,8%, produktivitas +8, risiko eksekusi paling rendah. Automation (84) sebagai fase lanjutan.",
    icon: "scenario",
    tone: "purple",
  },
];

/* ── 9. Business Demand Drivers ───────────────────────────────────── */

export interface DemandDriver {
  name: string;
  /** Asumsi bisnis yang mendasari dampak workforce. */
  asumsi: string;
  /** Kontribusi terhadap kebutuhan tambahan net (orang); negatif = mengurangi. */
  dampak: number;
  arah: "up" | "down";
}

/** Total dampak = 3.714 (kebutuhan tambahan net 2026-2028). */
export const demandDrivers: DemandDriver[] = [
  {
    name: "Ekspansi Produksi & Areal",
    asumsi: "Produksi +8,2% • areal tertanam +3,1%",
    dampak: 2480,
    arah: "up",
  },
  {
    name: "Kapasitas Mill & Teknis",
    asumsi: "Kapasitas olah +12% • program reliability",
    dampak: 1415,
    arah: "up",
  },
  {
    name: "Digital & Data Enablement",
    asumsi: "Inisiatif digital, data & sustainability 2026-2028",
    dampak: 510,
    arah: "up",
  },
  {
    name: "Otomasi Proses",
    asumsi: "Otomasi pabrik & administrasi bertahap",
    dampak: -395,
    arah: "down",
  },
  {
    name: "Produktivitas per FTE",
    asumsi: "Target produktivitas +5%/tahun (People Productivity)",
    dampak: -296,
    arah: "down",
  },
];

export const demandDriverNote =
  "Demand 73.856 bersifat business-driven: ekspansi produksi & mill menambah 4.405, dikompensasi otomasi & produktivitas -691 → kebutuhan tambahan net 3.714.";

/* ── 10. Workforce Capacity ───────────────────────────────────────── */

export interface CapacityRow {
  label: string;
  value: string;
  sub?: string;
}

export const kapasitasRows: CapacityRow[] = [
  { label: "Headcount Saat Ini", value: "70.142", sub: "Orang" },
  { label: "Available Capacity", value: "92,4%", sub: "utilisasi efektif" },
  { label: "Productive Capacity", value: "64.811", sub: "FTE-equivalent" },
  { label: "Required Capacity 2028", value: "68.230", sub: "FTE-equivalent" },
];

export const kapasitasGap = {
  value: "-3.419",
  label: "Capacity Gap 2028",
  note: "Gap kapasitas ditutup kombinasi net hiring 3.714, produktivitas +5%/tahun, dan otomasi — bukan hiring semata.",
};

/* ── 11. Strategi Penutupan Gap — 4B per Skill ────────────────────── */

export interface Gap4BRow {
  skill: string;
  gap: number;
  criticality: "Critical" | "High" | "Medium";
  /** Alokasi Build/Buy/Borrow/Bot; jumlah = gap. */
  build: number;
  buy: number;
  borrow: number;
  bot: number;
  /** Target time-to-close gap. */
  closure: string;
}

export const gap4B: Gap4BRow[] = [
  { skill: "Mill & Process Engineering", gap: 200, criticality: "Critical", build: 90, buy: 70, borrow: 20, bot: 20, closure: "18 bln" },
  { skill: "Data Analytics", gap: 180, criticality: "High", build: 80, buy: 50, borrow: 20, bot: 30, closure: "10 bln" },
  { skill: "Agronomy Expert", gap: 155, criticality: "Critical", build: 95, buy: 40, borrow: 10, bot: 10, closure: "14 bln" },
  { skill: "Maintenance Reliability", gap: 141, criticality: "High", build: 60, buy: 41, borrow: 20, bot: 20, closure: "12 bln" },
  { skill: "Digital Transformation", gap: 112, criticality: "Medium", build: 52, buy: 30, borrow: 10, bot: 20, closure: "9 bln" },
];

export const gap4BNote =
  "4B: Build (reskill internal), Buy (rekrut eksternal), Borrow (contingent/partner), Bot (otomasi). Prioritas = Gap × Criticality × Time-to-close.";

export const CRITICALITY_STYLE: Record<Gap4BRow["criticality"], string> = {
  Critical: "bg-[#fdecec] text-[#ef4444]",
  High: "bg-[#fdf3e0] text-[#c07c05]",
  Medium: "bg-[#e8f1fd] text-[#2f6fe4]",
};

/* ── 12. Workforce Gap Waterfall 2026-2028 ────────────────────────── */

export interface WfStep {
  name: string;
  base: number;
  value: number;
  label: string;
  kind: "total" | "out";
}

/**
 * Kebutuhan bruto 7.834 = tambahan net 3.714 + penggantian attrisi 4.120.
 * Seluruh langkah pemenuhan menutup gap hingga 0.
 */
export const gapWaterfall: WfStep[] = [
  { name: "Kebutuhan\nBruto", base: 0, value: 7834, label: "7.834", kind: "total" },
  { name: "Mobilitas\nInternal", base: 6163, value: 1671, label: "-1.671", kind: "out" },
  { name: "Reskilling", base: 5420, value: 743, label: "-743", kind: "out" },
  { name: "Outsourcing", base: 5048, value: 372, label: "-372", kind: "out" },
  { name: "Rekrutmen\nEksternal", base: 4120, value: 928, label: "-928", kind: "out" },
  { name: "Replacement\nHiring", base: 0, value: 4120, label: "-4.120", kind: "out" },
];

export const waterfallNote =
  "Kebutuhan bruto = tambahan net 3.714 + penggantian attrisi 4.120 = 7.834 — tertutup penuh oleh 4 jalur pemenuhan + replacement hiring.";

/* ── 13. Workforce Rebalancing (breakdown "Lainnya") ──────────────── */

export const rebalancing = {
  total: "-1.024",
  items: [
    { name: "Redeployment ke fungsi teknis & operasional", value: 612 },
    { name: "Attrition alami tanpa penggantian", value: 218 },
    { name: "Otomasi proses administrasi", value: 106 },
    { name: "Konversi ke outsourcing", value: 88 },
  ],
  note: "Penurunan fungsi 'Lainnya' bukan pengurangan paksa — 60% redeployment ke fungsi bernilai tambah (workforce reallocation).",
};

/* ── 14. Scenario Decision Matrix ─────────────────────────────────── */

export interface ScenarioMatrixRow {
  scenario: string;
  asumsi: string;
  cost: number;
  produktivitas: number;
  kapabilitas: number;
  risiko: number;
  feasibility: number;
  overall: number;
  tradeoff: string;
  rekomendasi?: boolean;
}

export const scenarioMatrix: ScenarioMatrixRow[] = [
  {
    scenario: "A — Business as Usual",
    asumsi: "Produksi +4% • produktivitas +1,5%/th • attrition 6,8% • otomasi +0,5%",
    cost: 70,
    produktivitas: 75,
    kapabilitas: 82,
    risiko: 85,
    feasibility: 90,
    overall: 78,
    tradeoff: "Aman dieksekusi, tetapi tidak menjawab gap kapabilitas & tekanan biaya jangka panjang.",
  },
  {
    scenario: "B — High Growth",
    asumsi: "Produksi +10% • produktivitas +2%/th • attrition 7,2% • otomasi +1%",
    cost: 55,
    produktivitas: 88,
    kapabilitas: 91,
    risiko: 65,
    feasibility: 68,
    overall: 75,
    tradeoff: "Biaya +15,1%; risiko delivery perekrutan 5.068 orang tambahan dalam 3 tahun.",
  },
  {
    scenario: "C — Efficiency & Automation",
    asumsi: "Produksi +4% • produktivitas +6%/th • attrition 6,8% • otomasi +8%",
    cost: 92,
    produktivitas: 95,
    kapabilitas: 78,
    risiko: 62,
    feasibility: 60,
    overall: 84,
    tradeoff: "Butuh capex teknologi, transisi skill, dan manajemen risiko workforce displacement.",
  },
  {
    scenario: "D — Reskill & Redeploy",
    asumsi: "Produksi +4% • produktivitas +4%/th • attrition 5,9% • otomasi +3%",
    cost: 82,
    produktivitas: 90,
    kapabilitas: 94,
    risiko: 86,
    feasibility: 80,
    overall: 88,
    rekomendasi: true,
    tradeoff: "Time-to-capability lebih panjang; butuh investasi training terstruktur.",
  },
];

export const scenarioMatrixNote =
  "Skor 0-100 per dimensi, dibobot: Cost 25% • Produktivitas 20% • Kapabilitas 20% • Risiko 20% • Feasibility 15%. Skenario terbaik ≠ biaya terendah.";

/* ── 15. Plan vs Actual — Control Tower ───────────────────────────── */

export interface PlanActualRow {
  metric: string;
  plan: string;
  actual: string;
  varians: string;
  status: "on" | "warn" | "off";
  driver: string;
  aksi: string;
}

export const planVsActual: PlanActualRow[] = [
  {
    metric: "Headcount YTD 2026",
    plan: "70.350",
    actual: "70.142",
    varians: "-208",
    status: "on",
    driver: "Hiring selektif Q1 sesuai kebijakan biaya",
    aksi: "Lanjut sesuai plan",
  },
  {
    metric: "Rekrutmen Eksternal",
    plan: "460",
    actual: "412",
    varians: "-48",
    status: "warn",
    driver: "Time-to-hire posisi teknis 4,5 bulan",
    aksi: "Percepat pipeline mill & data analytics",
  },
  {
    metric: "Reskilling & Upskilling",
    plan: "380",
    actual: "285",
    varians: "-95",
    status: "off",
    driver: "Kapasitas batch training terbatas",
    aksi: "Tambah 3 batch akademi pada H2 2026",
  },
  {
    metric: "Mobilitas Internal",
    plan: "820",
    actual: "902",
    varians: "+82",
    status: "on",
    driver: "Redeployment fungsi 'Lainnya' lebih cepat",
    aksi: "Pertahankan momentum redeployment",
  },
];

export const reforecastNote =
  "Reforecast Q3 2026: proyeksi 2028 dipertahankan 73.856 — risiko slip pada jalur reskilling (-95 YTD); koreksi kapasitas training wajib pada H2 2026.";

export const PLAN_STATUS_STYLE: Record<PlanActualRow["status"], { chip: string; label: string }> = {
  on: { chip: "bg-ptpn-greenLight text-ptpn-green", label: "On Track" },
  warn: { chip: "bg-[#fdf3e0] text-[#c07c05]", label: "Watch" },
  off: { chip: "bg-[#fdecec] text-[#ef4444]", label: "Off Track" },
};

/* ── 16. Workforce Continuity Risk Overlay ────────────────────────── */

export const wpRisk = {
  level: "HIGH",
  items: [
    { name: "Skill gap kritis belum tertutup", value: "1.245 gap" },
    { name: "Posisi kritis tanpa suksesor ready-now", value: "148 posisi" },
    { name: "Attrition talenta teknis", value: "8,4%" },
    { name: "Single-person dependency", value: "12 orang" },
  ],
  note: "Overlay dari People Risk Radar & Succession Planning — rencana 3.714 berisiko slip tanpa mitigasi kapabilitas & suksesi.",
};

/* ── Footnote data governance ─────────────────────────────────────── */

export const wpFootnote = {
  definisi:
    "Critical role tanpa suksesor ready-now = 212 posisi kritis − 64 kandidat ready (konsisten Succession Planning) • Subtotal fungsi & jenjang reconcile otomatis ke total 70.142 → 73.856 • Sumber pemenuhan 1.671 + 928 + 743 + 372 = 3.714.",
  periode: "Horizon Plan: 2026 – 2028",
  asOf: "Data as-of: 31 Mei 2026",
};

/* ── Footer quote ─────────────────────────────────────────────────── */

export const wpQuote =
  "Workforce Planning yang tepat memastikan organisasi memiliki talenta yang tepat, di waktu yang tepat, dengan biaya yang optimal untuk mencapai strategi perusahaan.";
